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

//          MODALES

// Modal Ingles
const btnIngles = document.getElementById('btnIngles');
const modalIngles = document.getElementById('modal-ingles');
const closeIngles = document.getElementById('close1');

btnIngles.addEventListener('click', () =>{
    modalIngles.style.display = "flex";
})

closeIngles.addEventListener('click', () =>{
    modalIngles.style.display = "none";
}) 



//  Modal Bienes

const btnBienes = document.getElementById('btnBienes');
const closeBienes = document.getElementById('closeBienes')
const bienes2 = document.getElementById('bienes2')
const bienes3 = document.getElementById('bienes3')
const bienes4 = document.getElementById('bienes4')

btnBienes.addEventListener('click', () =>{
    modalBienes.style.display = "flex";
})

closeBienes.addEventListener('click', () =>{
    modalBienes.style.display = "none";
})

