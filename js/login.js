let formlogin = document.querySelector(".formlogin");
let inputEmail = document.querySelector(".formlogin input[name='email']");
let inputPassword = document.querySelector(".formlogin input[name='password']");
let error = document.querySelector(".formlogin .error");

formlogin.addEventListener("submit", function(event) {
  event.preventDefault();

  if (inputEmail.value === "") {
    error.textContent = "Por favor, ingrese su email";
  } else if (inputPassword.value === "") {
    error.textContent = "Por favor, ingrese su contraseña";
  } else if (inputPassword.value.length < 6) {
    error.textContent = "La contraseña debe tener al menos 6 caracteres";
  } else {
    localStorage.setItem("email", inputEmail.value);
    this.submit();
    location.href = "index.html";
  }
})