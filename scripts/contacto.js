document.getElementById("menu-icon").addEventListener("click", function() {
    var menu = document.getElementById("nav-menu");
    var zovthroNav = document.getElementById("zovthro-nav");
    var ingresar = document.getElementById("ingresar");
    menu.classList.toggle("show");
    zovthroNav.classList.toggle("menu")
    ingresar.classList.toggle("s")
});