
let listaCategorias = document.querySelector(".categorias ul");

fetch("https://dummyjson.com/products/categories")
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(categorias) {

        listaCategorias.innerHTML = "";

        for (let i = 0; i < categorias.length; i++) {
        listaCategorias.innerHTML += `
        <li>
        <a href="./category.html?category=${categorias[i].slug}">
        ${categorias[i].name}
        </a>
        </li>`;
        }

    })
    .catch(function(error) {
        console.log("Error al cargar las categorías:", error);
    });
