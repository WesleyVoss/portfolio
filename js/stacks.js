const elementos = document.querySelectorAll(".revelar");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        } else {
            entrada.target.classList.remove("ativo");
        }

    });
}, {
    threshold: 0,
    rootMargin: "2% 0px -25% 0px"
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});