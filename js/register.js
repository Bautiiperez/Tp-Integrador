
let formulario = document.querySelector("#formRegistro");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmarPassword = document.querySelector("#confirmarPassword");

formulario.addEventListener("submit", function(evento) {evento.preventDefault();

    if (email.value === "") {
        alert("El email es obligatorio");

    } else if (password.value === "") {
        alert("La contraseña es obligatoria");

    } else if (password.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");

    } else if (password.value !== confirmarPassword.value) {
        alert("Las contraseñas no son iguales");
    } else {
        this.submit()
    window.location.href = "./login.html";
    }
});
