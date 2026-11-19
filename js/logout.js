linkLogout.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.clear();
    saludo.style.display = "none";
    linkLogout.style.display = "none";
    linkLogin.style.display = "inline"; 
    linkRegister.style.display = "inline";
})