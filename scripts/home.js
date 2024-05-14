const comments = [
    {
        texto: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
        ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl 
        ut aliquip ex ea commodo consequat..`,
        nombre: `Nombre de la persona`
    },
    {
        texto: `Aquí iría el segundo comentario o testimonio de una persona acerca de 
        su experiencia utilizando los servicios de Zovthro.`,
        nombre: 'Nombre de la segunda persona'
    },
    {
        texto: `Aquí iría el tercer comentario o testimonio de una persona acerca de 
        su experiencia utilizando los servicios de Zovthro.`,
        nombre: 'Nombre de la tercera persona'
    }
];

const commentText = document.getElementById("comment-text");
const customerName = document.getElementById("person-name");

const navLeft = document.getElementById("nav-left");
const navRight = document.getElementById("nav-right");

let currentIndex = 0;

// Updates the content of the comment
function updateComment(index) {
    const { texto, nombre } = comments[index];
    commentText.textContent = texto;
    customerName.textContent = nombre; 
}

// Shows the next comment 
function nextComment() {
    currentIndex = (currentIndex + 1) % comments.length;
    updateComment(currentIndex);
}

// Shows the previous comment 
function prevComment() {
    currentIndex = (currentIndex - 1 + comments.length ) % comments.length;
    updateComment(currentIndex);
}

// Adding event listeners
navLeft.addEventListener("click", prevComment);
navRight.addEventListener("click", nextComment);

updateComment(currentIndex);

document.getElementById("menu-icon").addEventListener("click", function() {
    var menu = document.getElementById("nav-menu");
    var zovthroNav = document.getElementById("zovthro-nav");
    var ingresar = document.getElementById("ingresar");
    menu.classList.toggle("show");
    zovthroNav.classList.toggle("menu")
    ingresar.classList.toggle("s")
});