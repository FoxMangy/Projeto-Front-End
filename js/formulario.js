//Script para validação do formulário

const form = document.getElementById("form");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const mensagem = document.getElementById("message");

form.addEventListener("submit", function(event) {
event.preventDefault();

const nomeValor = nome.value.trim();
const emailValor = email.value.trim();
const mensagemValor = mensagem.value.trim();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (nomeValor === "") {
    alert("Preencha o nome.");
    nome.focus();
    return;
}

if (nomeValor.length < 3) {
    alert("O nome deve ter pelo menos 3 caracteres.");
    nome.focus();
    return;
}

if (emailValor === "") {
    alert("Preencha o e-mail.");
    email.focus();
    return;
}

if (!emailRegex.test(emailValor)) {
    alert("Digite um e-mail válido.");
    email.focus();
    return;
}

if (mensagemValor === "") {
    alert("Preencha a mensagem.");
    mensagem.focus();
    return;
}

if (mensagemValor.length < 10) {
    alert("A mensagem deve ter pelo menos 10 caracteres.");
    mensagem.focus();
    return;
}

else alert("Formulário enviado com sucesso!");
form.reset();
});