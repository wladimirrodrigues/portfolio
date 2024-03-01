document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".cabecalho__menu__link");
  var currentPage = window.location.pathname;

  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("selected");
    }
  });
});
