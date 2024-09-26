document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagem = document.getElementById('mensagem');

    mensagem.textContent = '';

    if (!nome || !email || !senha || !confirmarSenha) {
        mensagem.textContent = 'Todos os campos são obrigatórios.';
        mensagem.style.color = 'red';
        return;
    }

    if (senha !== confirmarSenha) {
        mensagem.textContent = 'As senhas não correspondem.';
        mensagem.style.color = 'red';
        return;
    }

    mensagem.textContent = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green';

    document.getElementById('cadastroForm').reset();
});
