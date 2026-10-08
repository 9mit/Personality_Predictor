/**
 * Interactive Celestial Canvas & Nebula Particle System
 * Smooth 60FPS, High DPI Retina Support, Interactive Constellations
 */

class CosmicStarfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.nebulae = [];
    this.mouse = { x: -1000, y: -1000, active: false };
    this.animId = null;
    this.isRunning = false;

    this.init();
  }

  init() {
    this.resize();
    this.createStars();
    this.createNebulae();
    this.bindEvents();
    this.start();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(dpr, dpr);
  }

  createStars() {
    const count = Math.floor(Math.min(this.width, 1600) * 0.09);
    this.stars = [];

    const colors = [
      "rgba(255, 255, 255, ",
      "rgba(147, 197, 253, ", // Pale cyan
      "rgba(216, 180, 254, ", // Pale violet
      "rgba(253, 230, 138, ", // Pale gold
      "rgba(167, 243, 208, "  // Pale emerald
    ];

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 1.8 + 0.4,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        z: Math.random() * 2 + 1 // Depth
      });
    }
  }

  createNebulae() {
    this.nebulae = [
      {
        x: this.width * 0.2,
        y: this.height * 0.3,
        radius: Math.max(this.width, this.height) * 0.4,
        color: "rgba(124, 58, 237, 0.08)", // Violet
        vx: 0.05,
        vy: 0.03
      },
      {
        x: this.width * 0.8,
        y: this.height * 0.7,
        radius: Math.max(this.width, this.height) * 0.45,
        color: "rgba(6, 182, 212, 0.06)", // Cyan
        vx: -0.04,
        vy: 0.02
      },
      {
        x: this.width * 0.5,
        y: this.height * 0.85,
        radius: Math.max(this.width, this.height) * 0.35,
        color: "rgba(236, 72, 153, 0.05)", // Pink
        vx: 0.02,
        vy: -0.03
      }
    ];
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
      this.createStars();
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    window.addEventListener("mouseleave", () => {
      this.mouse.active = false;
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    // Pause on visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    const loop = () => {
      this.draw();
      this.animId = requestAnimationFrame(loop);
    };
    this.animId = requestAnimationFrame(loop);
  }

  stop() {
    this.isRunning = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw gentle glowing nebula clouds
    for (const neb of this.nebulae) {
      neb.x += neb.vx;
      neb.y += neb.vy;
      if (neb.x < 0 || neb.x > this.width) neb.vx *= -1;
      if (neb.y < 0 || neb.y > this.height) neb.vy *= -1;

      const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.radius);
      grad.addColorStop(0, neb.color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(neb.x, neb.y, neb.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Update and draw stars
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      s.x += s.vx;
      s.y += s.vy;

      // Wrap edges
      if (s.x < 0) s.x = this.width;
      if (s.x > this.width) s.x = 0;
      if (s.y < 0) s.y = this.height;
      if (s.y > this.height) s.y = 0;

      s.twinklePhase += s.twinkleSpeed;
      const alpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.35;
      const finalAlpha = Math.max(0.05, Math.min(1, alpha));

      ctx.fillStyle = s.colorBase + finalAlpha + ")";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();

      // Check mouse constellation interaction
      if (this.mouse.active) {
        const dx = this.mouse.x - s.x;
        const dy = this.mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const lineAlpha = (1 - dist / 130) * 0.35;
          ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.stroke();

          // Connect nearby neighbor stars
          for (let j = i + 1; j < this.stars.length; j++) {
            const s2 = this.stars[j];
            const d2x = s.x - s2.x;
            const d2y = s.y - s2.y;
            const dist2 = Math.sqrt(d2x * d2x + d2y * d2y);
            if (dist2 < 75) {
              const connectAlpha = (1 - dist2 / 75) * 0.25;
              ctx.strokeStyle = `rgba(147, 197, 253, ${connectAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(s.x, s.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.stroke();
            }
          }
        }
      }
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CosmicStarfield };
}
