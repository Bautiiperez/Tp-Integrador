// groceries
fetch("https://dummyjson.com/products/category/groceries")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  let seccion1 = document.querySelector(".productos-random");
  let productos1 = "";

  for (let i = 0; i < data.products.length; i++) {
    productos1 += `
      <article>
        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
        <h3>${data.products[i].title}</h3>
        <p>${data.products[i].description}</p>
        <p class="precio">$${data.products[i].price}</p>
        <a href="./product.html?id=${data.products[i].id}" class="ver-detalle">Ver detalle</a>
      </article>
    `;
  }

  seccion1.innerHTML = productos1;
})
.catch(function(error) {
  console.log("Error: " + error);
});

// kitchen-accessories
fetch("https://dummyjson.com/products/category/kitchen-accessories")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  let seccion2 = document.querySelector(".mas-vendidos");
  let productos2 = "";

  for (let i = 0; i < data.products.length; i++) {
    productos2 += `
      <article>
        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
        <h3>${data.products[i].title}</h3>
        <p>${data.products[i].description}</p>
        <p class="precio">$${data.products[i].price}</p>
        <a href="./product.html?id=${data.products[i].id}" class="ver-detalle">Ver detalle</a>
      </article>
    `;
  }

  seccion2.innerHTML = productos2;
})
.catch(function(error) {
  console.log("Error: " + error);
});

