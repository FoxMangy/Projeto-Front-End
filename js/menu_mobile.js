//Script de menu retrátil no mobile

//Achando qual o botão que vai ser utilizado pelo script - salvo como botao
const botao=document.getElementById("botao_menu");
//Achando qual o ID vai ser modificado dentro desse script - salvo como cabecalho
const cabecalho=document.getElementById("main_menu");
//Quando o botão especificado receber um click, ele vai realizar o que está dentro dos {}
botao.addEventListener("click", () => {
    //Vai adicionar ou remover a tag "fechado" do que foi salvo como "cabecalho" 
    //Logo cabecalho = ID menu = header / header -> header.fechado e vice versa
    cabecalho.classList.toggle("fechado");
});