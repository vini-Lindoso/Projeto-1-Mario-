/*

OBJETIVO 1 = Quando o usuario clicar no botão de "veja o Trailer", devemos abrir a modal com o video do trailer

OBJETIVO 2 = Quando o usuario clicar no X devemos fechar a modal

oobjetivo 1
    - passo 1 - dar um jeito de pegar o elemento que representa o botaõ na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir o modal na tela

OBJETIVO 2 = Quando o usuario clicar no X devemos fechar a modal
    - passo 5 - Dar um jeito de pegar o elemento que identifica a modal usando o js
    - passo 6 - Dar um jeito de identificar quando o usuario clicar no X
    - passo 7 - fechar a modal

*/
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});










