/**
 * Creative Mouse, Smart Contextual Cursor, Live Dock & Developer Signature
 * Medisail Healthcare Services Pvt. Ltd. | Architecture by Sandeep Maurya
 */

(function () {
  "use strict";

  // Check if touch device or prefers-reduced-motion
  var isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Top Scroll & Reading Progress Bar
  var scrollProgressBar = document.createElement("div");
  scrollProgressBar.id = "creative-scroll-progress";
  document.body.appendChild(scrollProgressBar);

  function updateScrollProgress() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = Math.min(Math.max(progress, 0), 100).toFixed(2) + "%";
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  // 2. Floating Live Clinical Readiness Dock (Enterprise Presence)
  if (!document.querySelector(".medisail-live-dock")) {
    var dock = document.createElement("div");
    dock.className = "medisail-live-dock";
    dock.innerHTML =
      '<div class="medisail-dock-beacon"></div>' +
      '<div class="medisail-dock-info">' +
      '  <span class="medisail-dock-title"><i class="fa fa-shield-alt me-1"></i> Live Clinical Desk</span>' +
      '  <span class="medisail-dock-desc">Doctors Active • 20-Min Arrival Delhi NCR</span>' +
      '</div>' +
      '<div class="medisail-dock-actions">' +
      '  <a href="https://wa.me/918303103969?text=Hello%20Medisail%20Healthcare,%20I%20need%20to%20consult%20a%20doctor%20at%20home." target="_blank" class="medisail-dock-btn whatsapp" title="Chat on WhatsApp">' +
      '    <i class="fab fa-whatsapp"></i>' +
      '  </a>' +
      '  <a href="tel:+918840757878" class="medisail-dock-btn phone" title="Call Doctor Now">' +
      '    <i class="fa fa-phone-alt"></i>' +
      '  </a>' +
      '</div>';
    document.body.appendChild(dock);
  }

  // 3. DEVELOPER SIGNATURE - HOLOGRAPHIC SHOWCASE MODAL & CHIP
  // Created by Sandeep Maurya (svf.sandeep | 9125626628)
  var devModalOverlay = document.createElement("div");
  devModalOverlay.className = "dev-signature-overlay";
  devModalOverlay.id = "devSignatureOverlay";
  devModalOverlay.innerHTML =
    '<div class="dev-signature-card-wrapper">' +
    '  <div class="dev-signature-card" id="devSignatureCard">' +
    '    <div class="dev-card-topbar">' +
    '      <div class="dev-card-dots">' +
    '        <span class="dev-card-dot red"></span>' +
    '        <span class="dev-card-dot yellow"></span>' +
    '        <span class="dev-card-dot green"></span>' +
    '      </div>' +
    '      <div class="dev-card-terminal-title"><i class="fa fa-terminal me-1"></i> sandeep-maurya@architect: ~ /dev-signature.sh</div>' +
    '      <button class="dev-card-close-btn" id="devCardCloseBtn" title="Close Signature (Esc)"><i class="fa fa-times"></i></button>' +
    '    </div>' +
    '    <div class="dev-card-body">' +
    '      <div class="dev-profile-header">' +
    '        <div class="dev-avatar-wrapper">' +
    '          <img src="images/sandeep-maurya.png" alt="Sandeep Maurya - Full-Stack Architect" class="dev-avatar-img">' +
    '          <div class="dev-avatar-glow"></div>' +
    '          <div class="dev-avatar-glow-outer"></div>' +
    '        </div>' +
    '        <div class="dev-profile-info">' +
    '          <div class="dev-availability-tag"><span class="dev-chip-pulse me-1"></span> Available for Enterprise Projects</div>' +
    '          <h3 class="dev-author-name">Sandeep Maurya</h3>' +
    '          <div class="dev-author-role">Lead Full-Stack Software Architect & Cloud Systems Engineer</div>' +
    '          <div class="dev-author-meta">' +
    '            <span><i class="fa fa-at me-1"></i>svf.sandeep</span>' +
    '            <span>•</span>' +
    '            <span><i class="fa fa-phone me-1"></i>+91 9125626628</span>' +
    '          </div>' +
    '          <div class="dev-tech-pills">' +
    '            <span class="dev-tech-pill">Next.js 14</span>' +
    '            <span class="dev-tech-pill">Node.js</span>' +
    '            <span class="dev-tech-pill">React</span>' +
    '            <span class="dev-tech-pill">Flutter</span>' +
    '            <span class="dev-tech-pill">React Native</span>' +
    '            <span class="dev-tech-pill">WhatsApp Cloud API</span>' +
    '            <span class="dev-tech-pill">AWS & Docker</span>' +
    '          </div>' +
    '        </div>' +
    '      </div>' +
    '      <div class="dev-metrics-strip">' +
    '        <div class="dev-metric-box">' +
    '          <div class="dev-metric-val">&lt; 100ms</div>' +
    '          <div class="dev-metric-lbl">API Response Target</div>' +
    '        </div>' +
    '        <div class="dev-metric-box">' +
    '          <div class="dev-metric-val">60 FPS</div>' +
    '          <div class="dev-metric-lbl">Native App Fluidity</div>' +
    '        </div>' +
    '        <div class="dev-metric-box">' +
    '          <div class="dev-metric-val">100% Meta</div>' +
    '          <div class="dev-metric-lbl">Official WhatsApp API</div>' +
    '        </div>' +
    '      </div>' +
    '      <div class="dev-services-section">' +
    '        <div class="dev-section-heading"><i class="fa fa-cubes me-1"></i> Core Engineering & Solution Capabilities</div>' +
    '        <div class="dev-services-grid">' +
    '          <div class="dev-service-card">' +
    '            <span class="dev-service-icon">🚀</span>' +
    '            <div class="dev-service-title">Scalable Web Applications</div>' +
    '            <p class="dev-service-desc">Enterprise-grade architectures engineered with Next.js, Node.js, and React. Sub-second latency, microservices, and cloud auto-scaling.</p>' +
    '          </div>' +
    '          <div class="dev-service-card">' +
    '            <span class="dev-service-icon">📱</span>' +
    '            <div class="dev-service-title">Cross-Platform Mobile Apps</div>' +
    '            <p class="dev-service-desc">Production iOS & Android apps built using Flutter & React Native. Smooth 60fps micro-animations, offline sync, and native hardware performance.</p>' +
    '          </div>' +
    '          <div class="dev-service-card">' +
    '            <span class="dev-service-icon">💬</span>' +
    '            <div class="dev-service-title">WhatsApp Business API</div>' +
    '            <p class="dev-service-desc">Official Meta Cloud API integration, intelligent booking chatbots, automated customer engagement, real-time alerts, and CRM workflows.</p>' +
    '          </div>' +
    '          <div class="dev-service-card">' +
    '            <span class="dev-service-icon">⚡</span>' +
    '            <div class="dev-service-title">Cloud DevOps & Optimization</div>' +
    '            <p class="dev-service-desc">High-throughput microservices, database tuning, CI/CD automated deployment, and 99.9% uptime infrastructure security.</p>' +
    '          </div>' +
    '        </div>' +
    '      </div>' +
    '      <div class="dev-actions-hub">' +
    '        <a href="https://wa.me/919125626628?text=Hello%20Sandeep,%20I%20reviewed%20your%20work%20on%20Medisail%20Healthcare%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" class="dev-cta-btn whatsapp">' +
    '          <i class="fab fa-whatsapp"></i> Chat on WhatsApp' +
    '        </a>' +
    '        <a href="tel:+919125626628" class="dev-cta-btn phone">' +
    '          <i class="fa fa-phone"></i> Call +91 9125626628' +
    '        </a>' +
    '        <button class="dev-cta-btn copy" id="devCopyContactBtn">' +
    '          <i class="fa fa-copy"></i> Copy Contact Info' +
    '        </button>' +
    '      </div>' +
    '      <div class="dev-modal-footer-note">// Crafted with clean code, scalable architecture & extreme attention to detail.</div>' +
    '    </div>' +
    '  </div>' +
    '</div>';
  document.body.appendChild(devModalOverlay);

  // Discreet Trigger Chip at Bottom-Left
  var devChip = document.createElement("div");
  devChip.className = "dev-signature-chip";
  devChip.id = "devSignatureChip";
  devChip.title = "Crafted by Sandeep Maurya (Click or press ~ to view)";
  devChip.innerHTML =
    '<span class="dev-chip-icon">&lt;/&gt;</span>' +
    '<span class="dev-chip-label">Crafted by</span>' +
    '<span class="dev-chip-name">Sandeep Maurya</span>' +
    '<span class="dev-chip-pulse"></span>';
  document.body.appendChild(devChip);

  // Append Discreet Developer Link to Footer Copyright across all pages
  function enhanceFooters() {
    var copyrightElements = document.querySelectorAll(".copyright-text p, .copyright-text");
    copyrightElements.forEach(function (elem) {
      if (!elem.querySelector(".dev-footer-credit")) {
        var span = document.createElement("span");
        span.className = "dev-footer-credit";
        span.style.marginLeft = "8px";
        span.innerHTML =
          '| Crafted with <i class="fa fa-heart" style="color:#e25555; font-size:11px;"></i> by <a href="javascript:void(0)" class="open-dev-sig-link" style="color: #87C03D; font-weight: 700; text-decoration: none;">Sandeep Maurya</a>';
        elem.appendChild(span);
      }
    });
  }
  enhanceFooters();

  // Modal Controls
  function openDevSignature() {
    devModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Ensure custom cursor elements are at the very end of DOM and visible
    if (typeof cursorDot !== "undefined" && cursorDot && cursorDot.parentNode) {
      if (typeof canvas !== "undefined" && canvas && canvas.parentNode === document.body) {
        document.body.appendChild(canvas);
      }
      document.body.appendChild(cursorDot);
      document.body.appendChild(cursorRing);
      if (typeof cursorLabel !== "undefined" && cursorLabel && cursorLabel.parentNode) {
        document.body.appendChild(cursorLabel);
      }
      cursorDot.style.opacity = "1";
      cursorRing.style.opacity = "1";
      cursorDot.style.display = "block";
      cursorRing.style.display = "flex";
      if (typeof cursorLabel !== "undefined" && cursorLabel) {
        cursorLabel.style.display = "block";
      }
      isVisible = true;
    }

    // Spawn a celebratory sparkle burst around screen center
    if (typeof spawnVitalityParticles === "function") {
      var cx = window.innerWidth / 2;
      var cy = window.innerHeight / 2;
      for (var i = 0; i < 14; i++) {
        spawnVitalityParticles(cx + (Math.random() - 0.5) * 120, cy + (Math.random() - 0.5) * 120, true);
      }
    }
  }

  function closeDevSignature() {
    devModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    var card = document.getElementById("devSignatureCard");
    if (card) {
      card.style.transform = "";
    }
  }

  devChip.addEventListener("click", openDevSignature);

  var closeBtn = document.getElementById("devCardCloseBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeDevSignature);
  }

  devModalOverlay.addEventListener("click", function (e) {
    if (e.target === devModalOverlay) {
      closeDevSignature();
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".open-dev-sig-link")) {
      e.preventDefault();
      openDevSignature();
    }
  });

  // Keyboard Shortcuts to Reveal: `~` (tilde/backtick) or `Ctrl+Shift+S`
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && devModalOverlay.classList.contains("active")) {
      closeDevSignature();
    } else if (
      e.key === "`" ||
      e.key === "~" ||
      (e.ctrlKey && e.shiftKey && (e.key === "S" || e.key === "s"))
    ) {
      e.preventDefault();
      if (devModalOverlay.classList.contains("active")) {
        closeDevSignature();
      } else {
        openDevSignature();
      }
    }
  });

  // Copy Contact Info button
  var copyBtn = document.getElementById("devCopyContactBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var info =
        "Sandeep Maurya\n" +
        "Phone: +91 9125626628\n" +
        "Email / Handle: svf.sandeep\n" +
        "Services: Scalable Web Applications | Cross-Platform Mobile Apps | WhatsApp Business API";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(info).then(function () {
          copyBtn.innerHTML = '<i class="fa fa-check text-success"></i> Copied to Clipboard!';
          setTimeout(function () {
            copyBtn.innerHTML = '<i class="fa fa-copy"></i> Copy Contact Info';
          }, 2500);
        });
      }
    });
  }

  // Easter Egg: DevTools Console Signature Banner
  try {
    console.log(
      "%c🚀 MEDISAIL HEALTHCARE - ARCHITECT SIGNATURE%c\n" +
        "----------------------------------------------------------\n" +
        "Lead Architect: Sandeep Maurya (@svf.sandeep)\n" +
        "Direct Contact: +91 9125626628 | WhatsApp API Specialist\n" +
        "Core Services:  • Scalable Web Applications\n" +
        "                • Cross-Platform Mobile Apps (iOS & Android)\n" +
        "                • WhatsApp Business API Solutions & AI Bots\n" +
        "----------------------------------------------------------\n" +
        "Crafted with clean code, modern performance & enterprise security.",
      "color: #87C03D; font-size: 13px; font-weight: 900; background: #0E102A; padding: 6px 12px; border-radius: 4px; border: 1px solid #28a745;",
      "color: #00d2ff; font-size: 11px; font-family: monospace;"
    );
  } catch (err) {}

  // If touch or reduced motion, skip custom mouse physics
  if (isTouch || prefersReducedMotion) {
    return;
  }

  // 4. Create Canvas, Cursor & Micro-Typography Label Elements
  var canvas = document.createElement("canvas");
  canvas.id = "creative-particle-canvas";
  document.body.appendChild(canvas);

  var cursorDot = document.createElement("div");
  cursorDot.className = "creative-cursor-dot";
  document.body.appendChild(cursorDot);

  var cursorRing = document.createElement("div");
  cursorRing.className = "creative-cursor-ring";
  document.body.appendChild(cursorRing);

  var cursorLabel = document.createElement("div");
  cursorLabel.className = "creative-cursor-label";
  document.body.appendChild(cursorLabel);

  document.body.classList.add("has-creative-cursor");

  var ctx = canvas.getContext("2d");
  var width = (canvas.width = window.innerWidth);
  var height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 5. Coordinates & Lerp Physics
  var mouseX = -100;
  var mouseY = -100;
  var ringX = -100;
  var ringY = -100;
  var lastSpawnX = -100;
  var lastSpawnY = -100;
  var isVisible = false;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      cursorDot.style.opacity = "1";
      cursorRing.style.opacity = "1";
      ringX = mouseX;
      ringY = mouseY;
      isVisible = true;
    }

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

    // Particle Emission on movement
    var dist = Math.hypot(mouseX - lastSpawnX, mouseY - lastSpawnY);
    if (dist > 16) {
      spawnVitalityParticles(mouseX, mouseY);
      lastSpawnX = mouseX;
      lastSpawnY = mouseY;
    }
  });

  document.addEventListener("mouseleave", function () {
    cursorDot.style.opacity = "0";
    cursorRing.style.opacity = "0";
    cursorLabel.classList.remove("label-visible");
    isVisible = false;
  });

  document.addEventListener("mouseenter", function () {
    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";
    isVisible = true;
  });

  // 6. Click Sonar Pulse Wave Effect
  window.addEventListener("mousedown", function (e) {
    var sonar = document.createElement("div");
    sonar.className = "creative-sonar-pulse";
    sonar.style.left = e.clientX + "px";
    sonar.style.top = e.clientY + "px";
    document.body.appendChild(sonar);

    for (var i = 0; i < 7; i++) {
      spawnVitalityParticles(e.clientX, e.clientY, true);
    }

    setTimeout(function () {
      if (sonar.parentNode) {
        sonar.parentNode.removeChild(sonar);
      }
    }, 600);
  });

  // 7. Smart Contextual Cursor (Morphing Pill & Action Micro-Labels)
  var allPillClasses = [
    "cursor-hover",
    "cursor-pill",
    "cursor-pill-whatsapp",
    "cursor-pill-book",
    "cursor-pill-call",
    "cursor-pill-view",
    "cursor-pill-close",
    "cursor-pill-dev"
  ];

  function resetCursorClasses() {
    for (var i = 0; i < allPillClasses.length; i++) {
      cursorRing.classList.remove(allPillClasses[i]);
    }
    cursorDot.classList.remove("cursor-hover");
    cursorLabel.classList.remove("label-visible");
    cursorLabel.textContent = "";
  }

  document.addEventListener("mouseover", function (e) {
    var target = e.target;

    // Check Modal Close Button
    if (target.closest("#devCardCloseBtn, .dev-card-close-btn")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-close");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "CLOSE";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Developer Chip or Footer Credit
    if (target.closest(".dev-signature-chip, .open-dev-sig-link")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-dev");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "DEV";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Developer Avatar
    if (target.closest(".dev-avatar-wrapper")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-dev");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "ARCHITECT";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Developer Service Cards
    if (target.closest(".dev-service-card")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-dev");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "SCALE";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Developer Copy Button
    if (target.closest("#devCopyContactBtn")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "COPY";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Developer Tech Stack Pills
    if (target.closest(".dev-tech-pill")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "TECH";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Developer Metric Boxes
    if (target.closest(".dev-metric-box")) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "METRIC";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check WhatsApp CTAs
    var waElem = target.closest('a[href*="whatsapp"], a[href*="wa.me"], .whatsapp, .whatsapp-btn');
    if (waElem) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-whatsapp");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "CHAT";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Phone / Emergency Call CTAs
    var phoneElem = target.closest('a[href^="tel:"], .phone-link, .call-btn');
    if (phoneElem) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-call");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "CALL";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Booking & Primary Buttons
    var bookElem = target.closest(
      '.theme-btn, .btn-style-one, button[type="submit"], .btn-booking, a[href*="booking"]'
    );
    if (bookElem) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-book");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "BOOK";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check News & Blog Cards
    var newsElem = target.closest('.news-block, .read-more, a[href*="news-"], .blog-card');
    if (newsElem) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "READ";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Service Cards
    var serviceElem = target.closest('.service-block, a[href*="service-"]');
    if (serviceElem) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "EXPLORE";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Check Images & Lightbox
    var imgElem = target.closest(
      '.lightbox-image, .fancybox, .image-box img, .team-block-two .image-box'
    );
    if (imgElem) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-pill", "cursor-pill-view");
      cursorDot.classList.add("cursor-hover");
      cursorLabel.textContent = "VIEW";
      cursorLabel.classList.add("label-visible");
      return;
    }

    // Generic Clickable Elements
    var genericClickable = target.closest(
      'a, button, [role="button"], .accordion .acc-btn, .dropdown-btn'
    );
    if (genericClickable) {
      resetCursorClasses();
      cursorRing.classList.add("cursor-hover");
      cursorDot.classList.add("cursor-hover");
      return;
    }
  });

  document.addEventListener("mouseout", function (e) {
    var related = e.relatedTarget;
    var currentInteractive = e.target.closest(
      'a, button, [role="button"], .theme-btn, .btn, .service-block, .news-block, .lightbox-image, .accordion .acc-btn, .dev-signature-chip, .dev-card-close-btn, .dev-service-card, .dev-avatar-wrapper, .dev-cta-btn, .dev-tech-pill, .dev-metric-box'
    );
    if (
      currentInteractive &&
      (!related ||
        !related.closest(
          'a, button, [role="button"], .theme-btn, .btn, .service-block, .news-block, .lightbox-image, .dev-signature-chip, .dev-card-close-btn, .dev-service-card, .dev-avatar-wrapper, .dev-cta-btn, .dev-tech-pill, .dev-metric-box'
        ))
    ) {
      resetCursorClasses();
    }
  });

  // 8. Vitality Sparkle & Cellular Constellation Mesh System
  var particles = [];
  var colors = ["#28a745", "#87C03D", "#164082", "#00d2ff", "#25D366"];

  function spawnVitalityParticles(x, y, isBurst) {
    if (particles.length > 60) return;

    var count = isBurst ? 4 : 1;
    for (var i = 0; i < count; i++) {
      var isCross = Math.random() > 0.62;
      var speedMultiplier = isBurst ? 2.4 : 1;
      particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.5 * speedMultiplier,
        vy: ((Math.random() - 0.5) * 1.4 - 0.7) * speedMultiplier,
        size: isCross ? Math.random() * 4.5 + 4 : Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.88,
        decay: Math.random() * 0.02 + 0.015,
        isCross: isCross,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08
      });
    }
  }

  function drawMedicalCross(ctx, x, y, size, color, alpha, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    var thickness = size * 0.35;
    ctx.fillRect(-size / 2, -thickness / 2, size, thickness);
    ctx.fillRect(-thickness / 2, -size / 2, thickness, size);
    ctx.restore();
  }

  // 9. Animation Render Loop (Lerp Cursor, Particles & Constellation Threads)
  function renderLoop() {
    ringX += (mouseX - ringX) * 0.22;
    ringY += (mouseY - ringY) * 0.22;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    cursorLabel.style.left = ringX + "px";
    cursorLabel.style.top = ringY + "px";

    ctx.clearRect(0, 0, width, height);

    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      for (var j = i - 1; j >= 0; j--) {
        var p2 = particles[j];
        var pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (pDist < 52) {
          ctx.beginPath();
          ctx.strokeStyle =
            "rgba(40, 167, 69, " +
            (0.22 * (1 - pDist / 52) * Math.min(p.alpha, p2.alpha)).toFixed(3) +
            ")";
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      if (p.isCross) {
        drawMedicalCross(ctx, p.x, p.y, p.size, p.color, p.alpha, p.rotation);
      } else {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    requestAnimationFrame(renderLoop);
  }
  requestAnimationFrame(renderLoop);

  // 10. Card Ambient Spotlight Radial Lighting & 3D Tilt (Apple / Linear / Stripe Effect)
  var spotlightCards = document.querySelectorAll(
    ".service-block .inner-box, .news-block .inner-box, .team-block-two .inner-box, .testimonial-block .inner-box, .feature-block .inner-box, .process-block .inner-box"
  );

  spotlightCards.forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      card.style.setProperty("--spotlight-x", x.toFixed(1) + "px");
      card.style.setProperty("--spotlight-y", y.toFixed(1) + "px");

      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -5.5;
      var rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform =
        "perspective(1000px) rotateX(" +
        rotateX.toFixed(2) +
        "deg) rotateY(" +
        rotateY.toFixed(2) +
        "deg) scale3d(1.018, 1.018, 1.018)";
      card.style.boxShadow = "0 20px 48px rgba(22, 64, 130, 0.12)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.boxShadow = "";
    });
  });

  // 11. Interactive 3D Tilt & Spotlight for Developer Showcase Card
  var devCard = document.getElementById("devSignatureCard");
  if (devCard) {
    devCard.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && typeof cursorDot !== "undefined" && cursorDot) {
        cursorDot.style.opacity = "1";
        cursorRing.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
        isVisible = true;
      }
      if (typeof cursorDot !== "undefined" && cursorDot) {
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
      }

      var rect = devCard.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      devCard.style.setProperty("--dev-spotlight-x", x.toFixed(1) + "px");
      devCard.style.setProperty("--dev-spotlight-y", y.toFixed(1) + "px");

      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -3.5;
      var rotateY = ((x - centerX) / centerX) * 3.5;

      devCard.style.transform =
        "rotateX(" +
        rotateX.toFixed(2) +
        "deg) rotateY(" +
        rotateY.toFixed(2) +
        "deg) scale(1.008)";
    });

    devCard.addEventListener("mouseleave", function () {
      devCard.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  }

  if (devModalOverlay) {
    devModalOverlay.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && typeof cursorDot !== "undefined" && cursorDot) {
        cursorDot.style.opacity = "1";
        cursorRing.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
        isVisible = true;
      }
      if (typeof cursorDot !== "undefined" && cursorDot) {
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
      }
    });
  }

  // 12. True Magnetic Button Attraction Physics
  var magneticElements = document.querySelectorAll(
    ".theme-btn, .btn-style-one, .header-top .top-right a, .scroll-to-top, .medisail-dock-btn, .dev-signature-chip, .dev-cta-btn"
  );

  magneticElements.forEach(function (elem) {
    elem.addEventListener("mousemove", function (e) {
      var rect = elem.getBoundingClientRect();
      var x = e.clientX - (rect.left + rect.width / 2);
      var y = e.clientY - (rect.top + rect.height / 2);

      elem.style.transform =
        "translate(" + (x * 0.22).toFixed(1) + "px, " + (y * 0.22).toFixed(1) + "px)";
    });

    elem.addEventListener("mouseleave", function () {
      elem.style.transform = "";
    });
  });
})();

