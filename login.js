document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    
    usernameError.textContent = "";
    passwordError.textContent = "";

    
    let valid = true;

    if (username === "") {
        usernameError.textContent = "Por favor, insira seu nome de usuário.";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Por favor, insira sua senha.";
        valid = false;
    }

    
    if (valid) {
        if (username === "usuario" && password === "senha123") {  
            window.location.href = "cardapio.html";  
        } else {
            alert("Credenciais incorretas. Tente novamente.");
        }
    }
});