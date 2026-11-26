
// ===================================
// 1. ANIMAÇÃO DE REVELAÇÃO DOS PROJETOS
// ===================================

const projetos = document.querySelectorAll(".projeto-card");

const observadorProjetos = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        } else {
            entrada.target.classList.remove("ativo");
        }

    });

}, {
    threshold: 0,
    rootMargin: "-5% 0px -25% 0px"
});

projetos.forEach((projeto) => {
    observadorProjetos.observe(projeto);
});


// ===================================
// 2. NOTIFICAÇÃO DO PORTFÓLIO
// ===================================

const botaoPortfolio = document.querySelector(".btn-portfolio");
const notificacaoPortfolio = document.querySelector("#notificacaoPortfolio");

let temporizadorNotificacao;

if (botaoPortfolio && notificacaoPortfolio) {

    botaoPortfolio.addEventListener("click", (evento) => {

        evento.preventDefault();

        notificacaoPortfolio.classList.add("ativo");

        clearTimeout(temporizadorNotificacao);

        temporizadorNotificacao = setTimeout(() => {
            notificacaoPortfolio.classList.remove("ativo");
        }, 3500);

    });

}
