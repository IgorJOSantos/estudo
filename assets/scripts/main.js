document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Senha esperada para login
    const expectedPassword = "a1b2";

    // Dados inseridos pelo usuário
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Verificação do nome de usuário e senha
    if (username.length < 4) {
        document.getElementById('errorMessage').textContent = "O nome de usuário deve ter pelo menos 4 letras!";
    } else if (password === expectedPassword) {
        // Armazenar o nome do usuário no localStorage
        localStorage.setItem('username', username);

        // Redirecionar para a página de tópicos
        window.location.href = "index2.html"; // Atualize para o nome correto do arquivo
    } else {
        document.getElementById('errorMessage').textContent = "Senha incorreta!";
    }
});
