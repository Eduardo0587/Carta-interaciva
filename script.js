function abrirCarta() {
    let carta = document.querySelector(".carta");
    let frente = document.querySelector(".frente");
    let contenido = document.querySelector(".contenido");

    carta.style.transform = "rotateY(180deg)";
    frente.style.display = "none";
    contenido.style.display = "block";
}
