document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Recupera os usuários cadastrados do localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se as credenciais são válidas
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        // Armazena o usuário logado no localStorage
        localStorage.setItem('loggedInUser', username);

        alert('Login realizado com sucesso!');
        window.location.href = '../index.html'; // Redireciona para a página inicial
    } else {
        // Exibe mensagem de erro
        alert('Usuário ou senha incorretos.');
    }
});



 