(function () {
  var header = document.querySelector("[data-header]");
  if (!header) return;

  var update = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
})();
