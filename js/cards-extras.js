const btnVerMais = document.getElementById("btnVerMais");
const stacksContainer = document.querySelector(".stacks-container");

btnVerMais.addEventListener("click", () => {

    // Alterna a expansão dos cards
    const expandido = stacksContainer.classList.toggle("expandido");

    // Atualiza o texto do botão
    btnVerMais.textContent = expandido ? "Ver menos" : "Veja mais";

    // Atualiza a acessibilidade do botão
    btnVerMais.setAttribute("aria-expanded", expandido);

});