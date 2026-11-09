/* Progressive motion for the existing standalone HTML pages. */
(function () {
  "use strict";
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const running = new Set();
  const swaps = new WeakMap();
  const warmed = new Set();
  let incomingTransition = null;
  let firstRender = true;
  let renderFrame = 0;
  let navigationTimer = 0;
  const ease = "cubic-bezier(.22, 1, .36, 1)";

  function animate(element, keyframes, options = {}) {
    if (!element || preference.matches || !element.animate) return null;
    const animation = element.animate(keyframes, {
      duration: 220,
      easing: ease,
      ...options,
    });
    running.add(animation);
    animation.finished.then(
      () => running.delete(animation),
      () => running.delete(animation),
    );
    return animation;
  }

  function clearNavigation() {
    clearTimeout(navigationTimer);
    document.documentElement.classList.remove("is-navigating");
  }

  function localDestination(anchor) {
    if (!anchor || anchor.hasAttribute("download") || anchor.dataset.action)
      return null;
    if (anchor.target && anchor.target !== "_self") return null;
    let destination;
    try {
      destination = new URL(anchor.href, location.href);
    } catch {
      return null;
    }
    if (
      !/^https?:$/.test(destination.protocol) ||
      destination.origin !== location.origin
    )
      return null;
    if (
      !destination.pathname.endsWith(".html") &&
      !destination.pathname.endsWith("/")
    )
      return null;
    if (
      destination.pathname === location.pathname &&
      destination.search === location.search
    )
      return null;
    return destination;
  }

  function warmLink(event) {
    const destination = localDestination(event.target.closest?.("a[href]"));
    const connection = navigator.connection;
    if (!destination || warmed.has(destination.href) || warmed.size >= 8)
      return;
    if (
      connection?.saveData ||
      /(^|-)2g$/.test(connection?.effectiveType || "")
    )
      return;
    warmed.add(destination.href);
    const hint = document.createElement("link");
    hint.rel = "prefetch";
    hint.as = "document";
    hint.href = destination.href;
    document.head.append(hint);
  }

  document.addEventListener("pointerover", warmLink, { passive: true });
  document.addEventListener("focusin", warmLink);
  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    if (!localDestination(event.target.closest?.("a[href]"))) return;
    document.documentElement.classList.add("is-navigating");
    // No artificial delay: the browser follows the original link immediately.
    clearTimeout(navigationTimer);
    navigationTimer = setTimeout(clearNavigation, 4000);
  });

  window.addEventListener("pageswap", (event) => {
    clearNavigation();
    if (preference.matches) event.viewTransition?.skipTransition();
  });
  window.addEventListener("pagereveal", (event) => {
    clearNavigation();
    incomingTransition = event.viewTransition || null;
    if (preference.matches) incomingTransition?.skipTransition();
    if (incomingTransition) {
      const current = incomingTransition;
      current.finished.then(
        () => {
          if (incomingTransition === current) incomingTransition = null;
        },
        () => {
          if (incomingTransition === current) incomingTransition = null;
        },
      );
    }
  });
  window.addEventListener("pageshow", clearNavigation);
  preference.addEventListener("change", () => {
    if (!preference.matches) return;
    running.forEach((animation) => animation.cancel());
    running.clear();
    incomingTransition?.skipTransition();
    document.activeViewTransition?.skipTransition();
  });

  const imageSelector =
    ".product-picture > img, .gallery-main, .hero-picture img, .store-banner img, .moderation-image, .admin-main-product";
  document.addEventListener(
    "load",
    (event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || !image.matches(imageSelector))
        return;
      if (incomingTransition || document.activeViewTransition) return;
      animate(image, [{ opacity: 0.35 }, { opacity: 1 }], { duration: 200 });
    },
    true,
  );

  function afterRender() {
    const initial = firstRender;
    firstRender = false;
    document
      .querySelectorAll(".workspace-nav a.active")
      .forEach((link) => link.setAttribute("aria-current", "page"));
    if (preference.matches) return;
    cancelAnimationFrame(renderFrame);
    renderFrame = requestAnimationFrame(() => {
      if (document.querySelector(".modal.show, .offcanvas.show")) return;
      const main = document.getElementById("main-content");
      if (!main) return;
      let targets = [];
      if (initial && main.classList.contains("workspace-main")) {
        targets = Array.from(
          main.querySelectorAll(
            ":scope > .page-heading, :scope > .app-alert, :scope > .stats-grid > .stat-card, :scope > .panel, :scope > .split-layout > .panel, :scope > .split-layout > aside",
          ),
        );
      }
      if (!targets.length)
        targets = [main.querySelector(".auth-form-wrap") || main];
      targets
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.top < innerHeight && rect.bottom > 0;
        })
        .slice(0, 8)
        .forEach((element, index) => {
          const containsTitle =
            element.matches("h1") || element.querySelector("h1");
          animate(
            element,
            [
              {
                opacity: initial ? 0.45 : 0.75,
                transform: containsTitle ? "none" : "translateY(7px)",
              },
              {
                opacity: 1,
                transform: containsTitle ? "none" : "translateY(0)",
              },
            ],
            {
              duration: initial ? 240 : 180,
              delay: initial ? Math.min(index * 24, 96) : 0,
            },
          );
        });
    });
  }

  async function swapImage(image, source) {
    const token = {};
    swaps.set(image, token);
    image.setAttribute("aria-busy", "true");
    const preloaded = new Image();
    preloaded.src = source;
    try {
      await preloaded.decode();
    } catch {
      /* Preserve the normal image error behavior. */
    }
    if (swaps.get(image) !== token) return;
    image.getAnimations().forEach((animation) => animation.cancel());
    image.src = source;
    image.removeAttribute("aria-busy");
    animate(image, [{ opacity: 0.45 }, { opacity: 1 }], { duration: 180 });
  }

  window.PasarinMotion = {
    afterRender,
    swapImage,
    reduced: () => preference.matches,
  };
})();
