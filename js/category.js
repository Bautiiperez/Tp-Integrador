let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

let titulo = document.querySelector(".titulo-categoria");
titulo.innerText = "Categoría: " + categoria;

let url = "https://dummyjson.com/products/category/" + categoria;

fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  let contenedor = document.querySelector(".productos-random");
  let productos = "";

  for (let i = 0; i < data.products.length; i++) {
    productos += `
      <article>
        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
        <h3>${data.products[i].title}</h3>
        <p>${data.products[i].description}</p>
        <p class="precio">$${data.products[i].price}</p>
        <a href="./product.html?id=${data.products[i].id}" class="ver-detalle">Ver detalle</a>
      </article>
    `;
  }

  contenedor.innerHTML = productos;
})
.catch(function(error) {
  console.log("Error: " + error);
});