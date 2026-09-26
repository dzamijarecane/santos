// WebGL backdrop: soft, warm candlelight bokeh behind the page headers.
import * as THREE from "./vendor/three.module.min.js";

const canvas = document.querySelector("canvas.scene");
if (canvas) {
  try { init(canvas); } catch (e) { canvas.remove(); }
}

function init(canvas) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const host = canvas.parentElement;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  const glowTex = makeGlowTexture();
  const bokeh = makeBokeh(scene, glowTex, 34);
  camera.position.set(0, 0, 10);

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
