        // Botones
const btnAbout = document.getElementById('btnAbout');
const about = document.getElementById('about');

btnAbout.addEventListener('click', () =>{
    about.scrollIntoView({ behavior: 'smooth'});
})

const btnCapacidades = document.getElementById('btnCapacidades');
const capacidades = document.getElementById('capacidades');

btnCapacidades.addEventListener('click', () =>{
    capacidades.scrollIntoView({ behavior: 'smooth'});
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
})


        // Mostrar Proyectos
function crearModal(botonId, modalId, close) {
    const btn = document.getElementById(botonId);
    const modal = document.getElementById(modalId);
    const span = document.getElementById(close);

    
    modal.style.display = "flex";
    span.onclick = function() {
        modal.style.display = "none";
    };
    modal.onclick = () =>{
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };
}

        // Abrir menú 
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const menu = document.getElementById('menu');
document.addEventListener('DOMContentLoaded', () => {
    
            
    abrir.onclick = function() {
        menu.style.display = "block";
        abrir.style.display = "none";
        cerrar.style.display = "block"
    }
        
    cerrar.onclick = function() {
        menu.style.display = "none";
        cerrar.style.display = "none";
        abrir.style.display = "block"
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

        // Barra de carga
