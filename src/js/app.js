let servicio1 = document.getElementById('servicio1');
let servicio2 = document.getElementById('servicio2');
let servicio3 = document.getElementById('servicio3');
let beneficio1 = document.getElementById('beneficio1');
let beneficio2 = document.getElementById('beneficio2');
let beneficio3 = document.getElementById('beneficio3');
let beneficio4 = document.getElementById('beneficio4');
let beneficio5 = document.getElementById('beneficio5');
let beneficio6 = document.getElementById('beneficio6');
let problematicas = document.getElementById('problematicas');
let moverServicios = document.getElementById('moverServicios');
let proyecto1 = document.getElementById('proyecto1');
let proyecto2 = document.getElementById('proyecto2');
let proyecto3 = document.getElementById('proyecto3');
let moverProyectos = document.getElementById('moverProyectos');
let moverStartup = document.getElementById('moverStartup');
let boton = document.getElementById('navegacion');
let header = document.getElementById('header');
let enlaces = document.getElementById('enlaces');
let body = document.getElementById('body');

let contador = 0;

// document.addEventListener('DOMContentLoaded', function() {
//     darkMode();
// });


function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // console.log(prefiereDarkMode.matches);

    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if (prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        nav
    })

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        console.log('holi btn');
    })
}


boton.addEventListener('click', function(e) {
    e.preventDefault();
    if (contador == 0) {
        enlaces.className = ('navegacion__enlaces dos');
        contador = 1;
    } else {
        enlaces.classList.remove('dos');
        enlaces.className = ('navegacion__enlaces uno');
        contador = 0;
    }
});


window.addEventListener('scroll', function() {
    //esconder menu
    if (body.getBoundingClientRect().top < 0) {
        enlaces.classList.remove('dos');
        enlaces.className = ('navegacion__enlaces uno');
        contador = 0;
    }
    //mover servicios
    if (moverServicios.getBoundingClientRect().bottom < 0) {
        servicio1.classList.add('s_animacion__Abajo');
        servicio2.classList.add('s_animacion__Abajo');
        servicio3.classList.add('s_animacion__Abajo');
    } else {
        servicio1.classList.remove('s_animacion__Abajo');
        servicio2.classList.remove('s_animacion__Abajo');
        servicio3.classList.remove('s_animacion__Abajo');
    }

    //mover beneficios
    if (servicio3.getBoundingClientRect().top < 0) {
        beneficio1.classList.add('b_animacion__Abajo');
        beneficio2.classList.add('b_animacion__Abajo');
        beneficio3.classList.add('b_animacion__Abajo');
    } else {
        beneficio1.classList.remove('b_animacion__Abajo');
        beneficio2.classList.remove('b_animacion__Abajo');
        beneficio3.classList.remove('b_animacion__Abajo');
    }
    if (servicio3.getBoundingClientRect().bottom < 0) {
        beneficio4.classList.add('b_animacion__Abajo');
        beneficio5.classList.add('b_animacion__Abajo');
        beneficio6.classList.add('b_animacion__Abajo');
    } else {
        beneficio4.classList.remove('b_animacion__Abajo');
        beneficio5.classList.remove('b_animacion__Abajo');
        beneficio6.classList.remove('b_animacion__Abajo');
    }
    //mover problematicas
    if (moverStartup.getBoundingClientRect().top < 0) {
        problematicas.classList.add('problematicas_animacion');
    } else {
        problematicas.classList.remove('problematicas_animacion');
    }
    //mover proyectos
    if (moverProyectos.getBoundingClientRect().top < 0) {
        proyecto1.classList.add('proyecto_animacion');
        proyecto2.classList.add('proyecto_animacion');
        proyecto3.classList.add('proyecto_animacion');
    } else {
        proyecto1.classList.remove('proyecto_animacion');
        proyecto2.classList.remove('proyecto_animacion');
        proyecto3.classList.remove('proyecto_animacion');
    }
})