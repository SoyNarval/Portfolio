        // Botones
const btnAbout = document.getElementById('btnAbout');
const about = document.getElementById('about');
const enlace = document.getElementsByClassName('enlaces')

btnAbout.addEventListener('click', () =>{
    about.scrollIntoView({ behavior: 'smooth'});
    if(window.innerWidth <= 1024){
        menu.style.display = "none";
        cerrar.style.display = "none";
        abrir.style.display = "block"
    }
})

const btnCapacidades = document.getElementById('btnCapacidades');
const capacidades = document.getElementById('capacidades');

btnCapacidades.addEventListener('click', () =>{
    capacidades.scrollIntoView({ behavior: 'smooth'});
    if(window.innerWidth <= 1024){
        menu.style.display = "none";
        cerrar.style.display = "none";
        abrir.style.display = "block"
    }
})

const btnCapacidades2 = document.getElementById('btnCapacidades2');
const capacidades2 = document.getElementById('capacidades');

btnCapacidades2.addEventListener('click', () =>{
    capacidades2.scrollIntoView({ behavior: 'smooth'});
})

const btnProyectos = document.getElementById('btnProyectos');
const proyectos = document.getElementById('proyectos');

btnProyectos.addEventListener('click', () =>{
    proyectos.scrollIntoView({ behavior: 'smooth'});
    if(window.innerWidth <= 1024){
        menu.style.display = "none";
        cerrar.style.display = "none";
        abrir.style.display = "block"
    }
})

        // Abrir menú 
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const menu = document.getElementById('menu');
document.addEventListener('DOMContentLoaded', () => {
    
            
    abrir.onclick = function() {
        if(window.innerWidth <= 1024){
            menu.style.display = "block";
            abrir.style.display = "none";
            cerrar.style.display = "block"
        }
    }
        
    cerrar.onclick = function() {
        if(window.innerWidth <= 1024){
            menu.style.display = "none";
            cerrar.style.display = "none";
            abrir.style.display = "block"
        }
    }
});
        


        // Estrellas
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    // Asignar posición aleatoria y tamaño
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.width = Math.random() * 5 + 'px';
    star.style.height = Math.random() * 5 + 'px';
    document.body.appendChild(star);

// Eliminar la estrella después de un tiempo
    setTimeout(() => {
        star.remove();
    }, 6000);
}

// Crear estrellas continuamente
setInterval(createStar, 100);

// Modales

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.carousel img');
const modalIngles = document.getElementById("modal-ingles");
const cerrarIngles = document.getElementById("close1");
let slideIndex = 0;

function crearModal(nombre, idModal, idClose){
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
    
    console.log("cerrar");
}

function showSlides(n) {
    slides[slideIndex].style.display = "none";
    slideIndex += n;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    slides[slideIndex].style.display = "block";
}

prev.addEventListener('click', () => {
    showSlides(-1);
});

next.addEventListener('click', () => {
    showSlides(1);
});