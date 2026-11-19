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
  console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
});