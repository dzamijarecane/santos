// WebGL backdrop.
//   "table": a candlelit table setting — porcelain plate on a brass charger, gold cutlery,
//            a glass of red wine and a flickering candle.
//   "glow":  soft, warm candlelight bokeh for the inner page headers.
import * as THREE from "./vendor/three.module.min.js";
import { RoomEnvironment } from "./vendor/RoomEnvironment.js";

const canvas = document.querySelector("canvas.scene");
if (canvas) {
  try { init(canvas); } catch (e) { canvas.remove(); }
}

function init(canvas) {
  const mode = canvas.dataset.scene === "table" ? "table" : "glow";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const host = canvas.parentElement;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  const glowTex = makeGlowTexture();
  const bokeh = makeBokeh(scene, glowTex, mode === "table" ? 26 : 34);

  let table = null;
  if (mode === "table") {
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    table = buildTable(scene, glowTex);
    camera.position.set(0, 3.6, 6.4);
    camera.lookAt(0, 0.35, 0);
  } else {
    camera.position.set(0, 0, 10);
  }

  // --- Interaction ---
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener("pointermove", (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    if (table) {
      const wide = camera.aspect >= 1.05;
      // wide screens: setting sits on the right, text on the left.
      // narrow screens: setting sits in the top half, text below.
      const dist = wide ? 8.4 : 5.6 + 4.2 / Math.max(camera.aspect, 0.42);
      camera.position.set(0, dist * 0.52, dist);
      camera.lookAt(0, 0.35, 0);
      if (wide) camera.setViewOffset(w, h, -w * 0.2, h * 0.04, w, h);
      else camera.setViewOffset(w, h, 0, h * 0.24, w, h);
    }
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(host);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) loop(); });

  const clock = new THREE.Clock();
  let running = false;

  function frame() {
    const t = clock.getElapsedTime();
    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;
    const intro = reduced ? 1 : Math.min(1, t / 2.6);
    const ease = 1 - Math.pow(1 - intro, 3);

    if (table) {
      const g = table.group;
      g.rotation.y = -0.35 + Math.sin(t * 0.12) * 0.22 + pointer.x * 0.25;
      g.rotation.x = pointer.y * 0.05;
      g.position.y = (1 - ease) * -0.8;

      // candle flicker
      const f = 1 + Math.sin(t * 9.1) * 0.05 + Math.sin(t * 13.7) * 0.04 + Math.sin(t * 3.3) * 0.06;
      table.candleLight.intensity = 7.5 * f * ease;
      table.flame.scale.set(1, f, 1);
      table.flame.rotation.z = Math.sin(t * 2.1) * 0.06;
      table.halo.material.opacity = 0.55 * f * ease;
    }

    bokeh.forEach((b) => {
      const d = b.userData;
      b.position.x = d.x + Math.sin(t * d.sx + d.p) * d.ax + pointer.x * d.par;
      b.position.y = d.y + Math.cos(t * d.sy + d.p) * d.ay - pointer.y * d.par * 0.5;
      b.material.opacity = d.o * (0.75 + 0.25 * Math.sin(t * d.sp + d.p)) * ease;
    });

    const scrollFade = Math.max(0, 1 - window.scrollY / (host.clientHeight * 0.9));
    canvas.style.opacity = String(Math.min(ease * 1.3, 1) * scrollFade);

    renderer.render(scene, camera);
  }

  function loop() {
    if (running || reduced) return;
    running = true;
    const tick = () => {
      if (!visible || document.hidden) { running = false; return; }
      frame();
      requestAnimationFrame(tick);
    };
    tick();
  }
  if (reduced) frame(); else loop();
  canvas.classList.add("ready");
}

// ---------------------------------------------------------------------------

function buildTable(scene, glowTex) {
  const group = new THREE.Group();
  scene.add(group);

  // Lights: dim warm fill, a key light for shape + soft shadows, and the candle.
  scene.add(new THREE.HemisphereLight(0xffe6c4, 0x120d08, 0.35));
  const key = new THREE.DirectionalLight(0xffdcae, 1.6);
  key.position.set(-3.5, 6, 3);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xc8a96a, 0.9);
  rim.position.set(4, 2, -4);
  scene.add(rim);

  const gold = new THREE.MeshStandardMaterial({ color: 0xd9b87a, metalness: 1, roughness: 0.25, envMapIntensity: 0.9 });
  const brass = new THREE.MeshStandardMaterial({ color: 0x9c7f45, metalness: 1, roughness: 0.38, envMapIntensity: 0.7 });
  const porcelain = new THREE.MeshPhysicalMaterial({ color: 0xf5efe4, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.6, side: THREE.DoubleSide });

  // Table top: dark linen that fades into the background
  const cloth = new THREE.Mesh(
    new THREE.CircleGeometry(3.8, 96),
    new THREE.MeshStandardMaterial({ map: makeClothTexture(), roughness: 0.95, transparent: true, depthWrite: false })
  );
  cloth.rotation.x = -Math.PI / 2;
  group.add(cloth);
  // soft contact shadow under the place setting
  const contact = new THREE.Mesh(
    new THREE.PlaneGeometry(4.4, 4.4),
    new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: glowTex, transparent: true, opacity: 0.55, depthWrite: false })
  );
  contact.rotation.x = -Math.PI / 2;
  contact.position.set(0.1, 0.004, -0.35);
  group.add(contact);
  // Charger + plate
  const charger = lathe([[0, 0], [1.28, 0], [1.34, 0.03], [1.36, 0.06], [1.3, 0.065], [1.12, 0.04], [0, 0.035]], brass, 128);
  group.add(charger);
  const plate = lathe([[0, 0.04], [0.62, 0.04], [0.66, 0.06], [0.76, 0.075], [1.02, 0.15], [1.08, 0.17], [1.07, 0.185], [0.98, 0.17], [0.76, 0.1], [0, 0.095]], porcelain, 128);
  plate.position.y = 0.03;
  group.add(plate);
  const rimLine = new THREE.Mesh(new THREE.TorusGeometry(1.03, 0.007, 8, 160), gold);
  rimLine.rotation.x = -Math.PI / 2;
  rimLine.position.y = 0.205;
  group.add(rimLine);
  const innerLine = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.004, 8, 160), gold);
  innerLine.rotation.x = -Math.PI / 2;
  innerLine.position.y = 0.132;
  group.add(innerLine);

  // Cutlery
  const fork = makeFork(gold);
  fork.position.set(-1.62, 0.02, 0.05);
  group.add(fork);
  const knife = makeKnife(gold);
  knife.position.set(1.58, 0.02, 0.05);
  group.add(knife);
  const spoon = makeSpoon(gold);
  spoon.position.set(1.86, 0.02, 0.1);
  group.add(spoon);

  // Wine glass with red wine
  const glass = new THREE.Group();
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xfff6ea, metalness: 0, roughness: 0.03, transparent: true, opacity: 0.16, depthWrite: false,
    clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6, side: THREE.DoubleSide,
  });
  const glassProfile = [[0, 0], [0.3, 0], [0.31, 0.012], [0.2, 0.025], [0.05, 0.05], [0.032, 0.12], [0.028, 0.72],
    [0.06, 0.8], [0.22, 0.92], [0.31, 1.1], [0.32, 1.3], [0.28, 1.58], [0.27, 1.58], [0.305, 1.3], [0.3, 1.11], [0.21, 0.94], [0.04, 0.84], [0, 0.83]];
  const glassMesh = lathe(glassProfile, glassMat, 96);
  glassMesh.renderOrder = 2;
  glass.add(glassMesh);
  const wine = lathe([[0, 0.845], [0.2, 0.945], [0.285, 1.08], [0.29, 1.1], [0, 1.1]], new THREE.MeshPhysicalMaterial({ color: 0x5a0a17, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 0.8, emissive: 0x2a0308, emissiveIntensity: 0.4 }), 96);
  glass.add(wine);
  glass.position.set(1.15, 0, -1.25);
  group.add(glass);

  // Candle in a brass holder
  const candle = new THREE.Group();
  const holder = lathe([[0, 0], [0.3, 0], [0.31, 0.03], [0.14, 0.06], [0.09, 0.12], [0.12, 0.2], [0.2, 0.22], [0.2, 0.26], [0, 0.26]], brass, 64);
  holder.castShadow = true;
  candle.add(holder);
  const wax = new THREE.Mesh(
    new THREE.CylinderGeometry(0.13, 0.13, 0.75, 48),
    new THREE.MeshPhysicalMaterial({ color: 0xe6d8bf, roughness: 0.6, emissive: 0xffa94d, emissiveIntensity: 0.05 })
  );
  wax.position.y = 0.26 + 0.375;
  wax.castShadow = true;
  candle.add(wax);
  const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.06, 6), new THREE.MeshBasicMaterial({ color: 0x1a120c }));
  wick.position.y = 1.04;
  candle.add(wick);
  const flameGeo = new THREE.SphereGeometry(0.05, 24, 24);
  flameGeo.scale(1, 2.3, 1);
  flameGeo.translate(0, 0.1, 0);
  const flame = new THREE.Mesh(flameGeo, new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
  flame.position.y = 1.04;
  candle.add(flame);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xffb35c, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(1.6, 1.6, 1);
  halo.position.y = 1.16;
  candle.add(halo);
  const candleLight = new THREE.PointLight(0xffa24d, 7.5, 9, 1.6);
  candleLight.position.y = 1.2;
  candle.add(candleLight);
  candle.position.set(-1.25, 0, -1.35);
  group.add(candle);

  [charger, plate].forEach((m) => { m.castShadow = true; m.receiveShadow = true; });
  return { group, candleLight, flame, halo };
}

function lathe(profile, material, segments) {
  const pts = profile.map(([r, y]) => new THREE.Vector2(r, y));
  const mesh = new THREE.Mesh(new THREE.LatheGeometry(pts, segments), material);
  return mesh;
}

function flat(shape, material, depth = 0.025) {
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 2, curveSegments: 24 });
  const m = new THREE.Mesh(geo, material);
  m.rotation.x = -Math.PI / 2;
  m.castShadow = true;
  return m;
}

function makeKnife(mat) {
  const s = new THREE.Shape();
  s.moveTo(-0.055, -1.0);
  s.quadraticCurveTo(0, -1.06, 0.055, -1.0);
  s.lineTo(0.05, -0.05);
  s.lineTo(0.075, 0.0);
  s.quadraticCurveTo(0.09, 0.6, 0.0, 1.0);
  s.lineTo(-0.06, 0.95);
  s.lineTo(-0.06, 0.0);
  s.lineTo(-0.05, -0.05);
  s.lineTo(-0.055, -1.0);
  return flat(s, mat);
}

function makeSpoon(mat) {
  const g = new THREE.Group();
  const h = new THREE.Shape();
  h.moveTo(-0.045, -1.0);
  h.quadraticCurveTo(0, -1.07, 0.045, -1.0);
  h.lineTo(0.025, 0.35);
  h.lineTo(-0.025, 0.35);
  h.lineTo(-0.045, -1.0);
  g.add(flat(h, mat));
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.14, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), mat);
  bowl.scale.set(1, 0.22, 1.5);
  bowl.rotation.x = Math.PI;
  bowl.position.set(0, 0.04, -0.55);
  bowl.castShadow = true;
  g.add(bowl);
  return g;
}

function makeFork(mat) {
  const pts = [
    [0.03, 0.2], [0.125, 0.45], [0.125, 0.98], [0.085, 0.98], [0.085, 0.6], [0.055, 0.6], [0.055, 0.98],
    [0.015, 0.98], [0.015, 0.6], [-0.015, 0.6], [-0.015, 0.98], [-0.055, 0.98], [-0.055, 0.6], [-0.085, 0.6],
    [-0.085, 0.98], [-0.125, 0.98], [-0.125, 0.45], [-0.03, 0.2], [-0.05, -1.0],
  ];
  const s = new THREE.Shape();
  s.moveTo(0.05, -1.0);
  pts.forEach(([x, y]) => s.lineTo(x, y));
  s.quadraticCurveTo(0, -1.07, 0.05, -1.0);
  return flat(s, mat);
}

function makeBokeh(scene, tex, count) {
  const colors = [0xffc27a, 0xe9b068, 0xffd9a8, 0xc8a96a, 0xff9f5a];
  const list = [];
  for (let i = 0; i < count; i++) {
    const m = new THREE.SpriteMaterial({ map: tex, color: colors[i % colors.length], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0 });
    const s = new THREE.Sprite(m);
    const z = -6 - Math.random() * 10;
    const size = 0.8 + Math.random() * 2.2;
    s.scale.set(size, size, 1);
    s.userData = {
      x: (Math.random() - 0.5) * 26, y: (Math.random() - 0.5) * 12 + 1.5, p: Math.random() * Math.PI * 2,
      sx: 0.05 + Math.random() * 0.08, sy: 0.04 + Math.random() * 0.07, ax: 0.6 + Math.random(), ay: 0.3 + Math.random() * 0.6,
      sp: 0.3 + Math.random() * 0.5, o: 0.08 + Math.random() * 0.14, par: 0.3 + Math.random() * 0.5,
    };
    s.position.set(s.userData.x, s.userData.y, z);
    scene.add(s);
    list.push(s);
  }
  return list;
}

function makeClothTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  grd.addColorStop(0, "rgba(46,37,28,1)");
  grd.addColorStop(0.55, "rgba(34,27,20,0.95)");
  grd.addColorStop(0.8, "rgba(20,16,12,0.6)");
  grd.addColorStop(1, "rgba(13,12,10,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeGlowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, "rgba(255,255,255,1)");
  grd.addColorStop(0.35, "rgba(255,255,255,0.55)");
  grd.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
