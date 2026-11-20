let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get("id");


let imgProducto = document.querySelector(".img-producto");
let tituloProducto = document.querySelector(".titulo-producto");
let marcaProducto = document.querySelector(".marca-producto");
let precioProducto = document.querySelector(".precio-producto");
let descripcionProducto = document.querySelector(".descripcion-producto");
let stockProducto = document.querySelector(".stock-producto");
let categoriaProducto = document.querySelector(".categoria-producto");
let listaTags = document.querySelector(".lista-tags");
let listaReviews = document.querySelector(".lista-reviews");


fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Datos del producto:", data);

        
        if (data.images && data.images.length > 0) {
            imgProducto.src = data.images[0];
        } else {
            imgProducto.src = data.thumbnail;
        }
        imgProducto.alt = data.title;

        
        tituloProducto.innerText = data.title;
        precioProducto.innerText = `Precio: $${data.price}`;
        descripcionProducto.innerText = data.description;
        stockProducto.innerText = `Stock disponible: ${data.stock} unidades`;

        
        if (data.brand) {
            marcaProducto.innerText = `Marca: ${data.brand}`;
        } else {
            marcaProducto.innerText = "Marca: Genérica";
        }

        
        categoriaProducto.innerText = data.category;
        categoriaProducto.href = `./category.html?categoria=${data.category}`;

        
        let htmlTags = "";
        for (let i = 0; i < data.tags.length && i < 3; i++) {
            htmlTags += `<li>${data.tags[i]}</li>`;
        }
        listaTags.innerHTML = htmlTags;

       
        let htmlReviews = "";
        if (data.reviews && data.reviews.length > 0) {
            for (let i = 0; i < data.reviews.length; i++) {
                let review = data.reviews[i];
                let fechaLimpia = review.date.slice(0, 10);

                htmlReviews += `
                    <article class="review">
                        <p><strong>${review.reviewerName}</strong> - <span>${fechaLimpia}</span></p>
                        <p>Calificación: ${review.rating} / 5 ⭐</p>
                        <p>${review.comment}</p>
                    </article>
                `;
            }
        } else {
            htmlReviews = "<p>Este producto aún no tiene opiniones.</p>";
        }

        listaReviews.innerHTML = htmlReviews;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });