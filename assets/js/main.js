//Al cargar la página lanza un alert
window.onload = function() {
    alert("Esta página está cargada!");
}

//Al hacer click en el botón envía un alert
var botoncito = document.getElementById("demo");
botoncito.addEventListener("click", function() {
    alert("Hola Mundo!");
});

//Al pasar sobre el campo de texto envía un alert
var campoText = document.getElementById("input");
campoText.addEventListener("mouseover", function() {
    alert("Eso da cosquillas!!!!");
});

//Al dejar de pasar sobre el campo de texto envía un alert
var campoText = document.getElementById("input");
campoText.addEventListener("mouseout", function() {
    alert("Gracias! soy muy cosquillosa!!!");
});