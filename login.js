function redirecionar() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Adicione aqui a lógica de autenticação, se necessário
  
    if (username === "usuario" && password === "senha") {
      alert("Login bem-sucedido! Redirecionando para a página principal.");
      window.location.href = "home.html";
    } else {
      alert("Usuário ou senha inválidos. Tente novamente.");
    }
  
    return false;
  }
  