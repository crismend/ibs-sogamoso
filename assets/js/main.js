
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Hace funcional cualquier <a.gps-link> usando dirección o lat/lng
(function () {
  const buildMapsUrl = (el, mode = "search") => {
    const lat = el.dataset.lat, lng = el.dataset.lng;
    if (lat && lng) {
      const q = `${lat},${lng}`;
      return mode === "directions"
        ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
    }
    const q = (el.dataset.address || "").trim();
    if (!q) return null;
    return mode === "directions"
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  }

  document.querySelectorAll(".gps-link").forEach(a => {
    const href = buildMapsUrl(a); // usa "search"; cambia a buildMapsUrl(a,"directions") si quieres ruta
    if (!href) return;
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
})();
