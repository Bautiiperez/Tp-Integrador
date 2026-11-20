
let parametros = new URLSearchParams(window.location.search);
let busqueda = parametros.get("search");

let tituloBusqueda = document.querySelector("#tituloBusqueda");
let resultadosProductos = document.querySelector("#resultadosProductos");
let sinResultados = document.querySelector("#sinResultados");

if (busqueda === null || busqueda.trim() === "") {

    tituloBusqueda.innerHTML = "Resultados de búsqueda";
    sinResultados.innerHTML = "No ingresaste ningún término de búsqueda";

} else {

tituloBusqueda.innerHTML = "Resultados de búsqueda para: " + busqueda;

fetch("https://dummyjson.com/products/search?q=" + busqueda)
        .then(function(response) {
            return response.json();
        })
.then(function(data) {

resultadosProductos.innerHTML = "";

if (data.products.length === 0) {

sinResultados.innerHTML = "No hay resultados para el término: " + busqueda;

} else {

sinResultados.innerHTML = "";

for (let i = 0; i < data.products.length; i++) {

resultadosProductos.innerHTML += `
<article class="producto">
<img src="${data.products[i].thumbnail}" alt="Producto">

<h2>${data.products[i].title}</h2>

<p>${data.products[i].description}</p>

<p>Precio: $${data.products[i].price}</p>

<a href="./product.html?id=${data.products[i].id}"> Ver detalle </a>
</article>`;}
}
})
    .catch(function(error) {
        console.log("El error es: " + error);
        sinResultados.innerHTML = "Ocurrió un error al buscar productos";
    });
}
