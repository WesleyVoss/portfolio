const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("ativo");

    console.log(menu.className);

    const menuAberto = menu.classList.contains("ativo");

    menuToggle.textContent = menuAberto ? "✕" : "☰";

});