function clicou(){
    const input_text = document.querySelector(".input_text");
    const botao = document.querySelector(".botao")

    if(input_text.getAttribute('type') === 'text') {
        input_text.setAttribute('type', 'password')
        botao.innerHTML = "Mostrar Senha"
    }
    else {
        input_text.setAttribute('type', 'text')
        botao.innerHTML = "Ocultar Senha"
    }
}