
let formularioBuscador = document.querySelector(".buscador");
let campoBusqueda = document.querySelector(".buscador input");

formularioBuscador.addEventListener("submit", function(evento) {

    let busqueda = campoBusqueda.value.trim();

    if (busqueda === "") {
        evento.preventDefault();
        alert("El campo de búsqueda no puede estar vacío");
    } else if (busqueda.length < 3) {
        evento.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});