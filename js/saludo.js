let email = localStorage.getItem("email");

let saludo = document.querySelector(".saludo");
let linkLogin = document.querySelector(".login");
let linkRegister = document.querySelector(".register");
let linkLogout = document.querySelector(".logout");

console.log(email);

if (email == "") {
  saludo.innerText = "Bienvenido: " + email;
  linkLogin.style.display = "none";
  linkRegister.style.display = "none";
  linkLogout.style.display = "inline";
} 
else {
  saludo.innerText = "Bienvenido: " + email;
  linkLogin.style.display = "inline";
  linkRegister.style.display = "inline";
  linkLogout.style.display = "none";
}