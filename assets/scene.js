// WebGL backdrop: gilded armillary rings ("rings") and drifting gold dust ("dust").
import * as THREE from "./vendor/three.module.min.js";
import { RoomEnvironment } from "./vendor/RoomEnvironment.js";

const canvas = document.querySelector("canvas.scene");
if (canvas) {
  try { init(canvas); } catch (e) { canvas.remove(); }
}

function init(canvas) {
  const mode = canvas.dataset.scene || "dust";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const host = canvas.parentElement;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 11);

  scene.add(new THREE.AmbientLight(0xfff1dc, 0.25));
  const key = new THREE.DirectionalLight(0xffe2b0, 2.2);
  key.position.set(4, 6, 6);
  scene.add(key);
  const glow = new THREE.PointLight(0xc8a96a, 18, 20, 2);
  glow.position.set(-3, -1, 4);
  scene.add(glow);

  const root = new THREE.Group();
  scene.add(root);

  // --- Armillary rings ---
  const rings = [];
  if (mode === "rings") {
    const gold = new THREE.MeshStandardMaterial({ color: 0xd4b173, metalness: 1, roughness: 0.22 });
    const paleGold = new THREE.MeshStandardMaterial({ color: 0xe9d4a4, metalness: 1, roughness: 0.35 });
    const spec = [
      { r: 3.1, t: 0.018, rot: [1.2, 0.2, 0], spin: [0.0, 0.0012, 0.0009], mat: gold },
      { r: 2.75, t: 0.012, rot: [0.3, 1.1, 0.4], spin: [0.0014, 0.0, 0.0006], mat: paleGold },
      { r: 2.4, t: 0.022, rot: [1.7, 0.6, 0.9], spin: [0.0007, 0.0011, 0.0], mat: gold },
      { r: 3.45, t: 0.008, rot: [0.9, -0.7, 0.2], spin: [-0.0005, 0.0008, 0.0004], mat: paleGold },
    ];
    spec.forEach((s) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(s.r, s.t, 24, 240), s.mat);
      m.rotation.set(...s.rot);
      m.userData.spin = s.spin;
      root.add(m);
      rings.push(m);
    });
    // Tiny beads orbiting on the rings
    const beadGeo = new THREE.SphereGeometry(0.055, 24, 24);
    rings.forEach((ring, i) => {
      const bead = new THREE.Mesh(beadGeo, gold);
      bead.userData = { ring, r: ring.geometry.parameters.radius, a: i * 1.7, speed: 0.004 + i * 0.0015 };
      ring.add(bead);
      rings.push(bead);
    });
    // Pearl at the centre
    const pearl = new THREE.Mesh(
      new THREE.SphereGeometry(0.34, 64, 64),
      new THREE.MeshPhysicalMaterial({ color: 0xf6ecdc, roughness: 0.18, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08, sheen: 1, sheenColor: new THREE.Color(0xe7cfa0) })
    );
    root.add(pearl);
  }

  // --- Gold dust ---
  const COUNT = mode === "rings" ? 700 : 520;
  const spread = { x: 16, y: 10, z: 8 };
  const positions = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread.x;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;
    seeds[i] = Math.random() * Math.PI * 2;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const sprite = makeSprite();
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    size: 0.07, map: sprite, color: 0xe2c78f, transparent: true, opacity: 0.85,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  scene.add(dust);

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
    // keep the rings framed on narrow screens
    camera.position.z = camera.aspect < 0.8 ? 11 / Math.max(camera.aspect, 0.45) * 0.62 : 11;
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

    root.rotation.y = pointer.x * 0.35;
    root.rotation.x = pointer.y * 0.25;
    const intro = Math.min(1, t / 2.4);
    const ease = 1 - Math.pow(1 - intro, 3);
    root.scale.setScalar(0.6 + 0.4 * ease);

    rings.forEach((m) => {
      if (m.userData.spin) {
        m.rotation.x += m.userData.spin[0];
        m.rotation.y += m.userData.spin[1];
        m.rotation.z += m.userData.spin[2];
      } else if (m.userData.ring) {
        m.userData.a += m.userData.speed;
        m.position.set(Math.cos(m.userData.a) * m.userData.r, Math.sin(m.userData.a) * m.userData.r, 0);
      }
    });

    const p = dustGeo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const iy = i * 3 + 1;
      p[iy] += 0.0035 + 0.002 * Math.sin(seeds[i]);
      p[i * 3] += Math.sin(t * 0.4 + seeds[i]) * 0.0015;
      if (p[iy] > spread.y / 2) p[iy] = -spread.y / 2;
    }
    dustGeo.attributes.position.needsUpdate = true;
    dust.rotation.y = pointer.x * 0.1;

    glow.position.x = Math.sin(t * 0.5) * 4;
    glow.position.y = Math.cos(t * 0.35) * 2;

    const scrollFade = Math.max(0, 1 - window.scrollY / (host.clientHeight * 0.9));
    canvas.style.opacity = String(Math.min(ease * 1.4, 1) * scrollFade);
    root.position.y = window.scrollY * 0.0025;

    renderer.render(scene, camera);
  }
  function loop() {
    if (running) return;
    running = true;
    const tick = () => {
      if (!visible || document.hidden) { running = false; return; }
      frame();
      requestAnimationFrame(tick);
    };
    tick();
  }
  if (reduced) { clock.start(); frame(); canvas.style.opacity = "1"; } else loop();
  canvas.classList.add("ready");
}

function makeSprite() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, "rgba(255,244,220,1)");
  grd.addColorStop(0.25, "rgba(236,208,150,0.85)");
  grd.addColorStop(1, "rgba(200,169,106,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
