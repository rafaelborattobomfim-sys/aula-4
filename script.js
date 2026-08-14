// Seleciona todos os botões do blog
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    
    botao.addEventListener("click", function() {
        console.log("Post interagido!");
        let contador = botao.querySelector("span");
        
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#27ae60"; // Fica verde quando clicado
            botao.style.color = "black";
        } else {
            contador.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "#000000"; // Volta ao preto
            botao.style.color = "white";
        }
    });
});
