let servicio1=document.getElementById("servicio1"),servicio2=document.getElementById("servicio2"),servicio3=document.getElementById("servicio3"),beneficio1=document.getElementById("beneficio1"),beneficio2=document.getElementById("beneficio2"),beneficio3=document.getElementById("beneficio3"),beneficio4=document.getElementById("beneficio4"),beneficio5=document.getElementById("beneficio5"),beneficio6=document.getElementById("beneficio6"),problematicas=document.getElementById("problematicas"),moverServicios=document.getElementById("moverServicios"),proyecto1=document.getElementById("proyecto1"),proyecto2=document.getElementById("proyecto2"),proyecto3=document.getElementById("proyecto3"),moverProyectos=document.getElementById("moverProyectos"),moverStartup=document.getElementById("moverStartup"),boton=document.getElementById("navegacion"),header=document.getElementById("header"),enlaces=document.getElementById("enlaces"),body=document.getElementById("body"),contador=0;function darkMode(){const e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),e.addEventListener("change",(function(){e.matches?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),nav}));document.querySelector(".dark-mode-boton").addEventListener("click",(function(){document.body.classList.toggle("dark-mode"),console.log("holi btn")}))}boton.addEventListener("click",(function(e){e.preventDefault(),0==contador?(enlaces.className="navegacion__enlaces dos",contador=1):(enlaces.classList.remove("dos"),enlaces.className="navegacion__enlaces uno",contador=0)})),window.addEventListener("scroll",(function(){body.getBoundingClientRect().top<0&&(enlaces.classList.remove("dos"),enlaces.className="navegacion__enlaces uno",contador=0),moverServicios.getBoundingClientRect().bottom<0?(servicio1.classList.add("s_animacion__Abajo"),servicio2.classList.add("s_animacion__Abajo"),servicio3.classList.add("s_animacion__Abajo")):(servicio1.classList.remove("s_animacion__Abajo"),servicio2.classList.remove("s_animacion__Abajo"),servicio3.classList.remove("s_animacion__Abajo")),servicio3.getBoundingClientRect().top<0?(beneficio1.classList.add("b_animacion__Abajo"),beneficio2.classList.add("b_animacion__Abajo"),beneficio3.classList.add("b_animacion__Abajo")):(beneficio1.classList.remove("b_animacion__Abajo"),beneficio2.classList.remove("b_animacion__Abajo"),beneficio3.classList.remove("b_animacion__Abajo")),servicio3.getBoundingClientRect().bottom<0?(beneficio4.classList.add("b_animacion__Abajo"),beneficio5.classList.add("b_animacion__Abajo"),beneficio6.classList.add("b_animacion__Abajo")):(beneficio4.classList.remove("b_animacion__Abajo"),beneficio5.classList.remove("b_animacion__Abajo"),beneficio6.classList.remove("b_animacion__Abajo")),moverStartup.getBoundingClientRect().top<0?problematicas.classList.add("problematicas_animacion"):problematicas.classList.remove("problematicas_animacion"),moverProyectos.getBoundingClientRect().top<0?(proyecto1.classList.add("proyecto_animacion"),proyecto2.classList.add("proyecto_animacion"),proyecto3.classList.add("proyecto_animacion")):(proyecto1.classList.remove("proyecto_animacion"),proyecto2.classList.remove("proyecto_animacion"),proyecto3.classList.remove("proyecto_animacion"))}));
//# sourceMappingURL=app.js.map
