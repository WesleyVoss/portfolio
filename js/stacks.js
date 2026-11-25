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
    rootMargin: "-10% 0px -20% 0px"
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});