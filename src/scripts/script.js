const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
    menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".nav__toggle")) {
        menu.classList.remove(activeClass);
    }
});
