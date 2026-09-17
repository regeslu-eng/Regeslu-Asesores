document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".page-progress span");
  const ambient = document.querySelector(".ambient-pointer");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile navigation
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }

  // Scroll progress + header state
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal elements with automatic, subtle staggering
  const revealElements = [...document.querySelectorAll(".reveal")];
  revealElements.forEach((el, index) => {
    if (!el.classList.contains("delay-1")) {
      const localDelay = Math.min((index % 4) * 55, 165);
      el.style.setProperty("--delay", `${localDelay}ms`);
    }
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: "0px 0px -4% 0px" });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Animate method timeline when it becomes visible
  const steps = document.querySelector(".steps");
  if (steps && "IntersectionObserver" in window && !reduceMotion) {
    const lineObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        steps.classList.add("visible-line");
        lineObserver.disconnect();
      }
    }, { threshold: .25 });
    lineObserver.observe(steps);
  } else {
    steps?.classList.add("visible-line");
  }

  // Pointer ambience on desktop
  if (ambient && window.matchMedia("(pointer:fine)").matches && !reduceMotion) {
    window.addEventListener("pointermove", e => {
      ambient.style.left = `${e.clientX}px`;
      ambient.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  // Soft spotlight effect on cards
  document.querySelectorAll(".need-card").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // Subtle 3D tilt on hero panel (desktop only)
  const tilt = document.querySelector("[data-tilt]");
  if (tilt && window.matchMedia("(pointer:fine)").matches && !reduceMotion) {
    tilt.addEventListener("pointermove", e => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      tilt.style.transform = `perspective(1000px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-2px)`;
    });
    tilt.addEventListener("pointerleave", () => {
      tilt.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  }

  // Prefill form from solution CTAs
  const needSelect = document.querySelector("#need-select");
  document.querySelectorAll("[data-need]").forEach(link => {
    link.addEventListener("click", () => {
      const value = (link.dataset.need || "").trim();
      if (!needSelect || !value) return;
      const options = [...needSelect.options];
      const exact = options.find(opt => opt.text.toLowerCase() === value.toLowerCase());
      if (exact) needSelect.value = exact.value;
      else if (value.toLowerCase().includes("digital")) needSelect.value = "Google / marketing digital";
      else if (value.toLowerCase().includes("empresarial")) needSelect.value = "Ordenar procesos y operación";
      else if (value.toLowerCase().includes("mensual")) needSelect.value = "Acompañamiento mensual";
      else needSelect.value = "Otro proyecto";
    });
  });

  // Lead form -> WhatsApp
  const form = document.querySelector("#lead-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const nombre = (data.get("nombre") || "").trim();
      const empresa = (data.get("empresa") || "").trim() || "No especificada";
      const necesidad = (data.get("necesidad") || "").trim();
      const mensaje = (data.get("mensaje") || "").trim();
      const text = `Hola REGESLU 👋\n\nMi nombre es ${nombre}.\nEmpresa / negocio: ${empresa}\nMe interesa: ${necesidad}\n\nLo que quiero resolver o mejorar:\n${mensaje}\n\nMe gustaría conocer una propuesta.`;
      window.open(`https://wa.me/525660939384?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    });
  }

  // Current year
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
