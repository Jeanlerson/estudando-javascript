function clicou(){
    const teste = document.querySelector("#teste1");
    const ul = teste.querySelector("ul");

    let newli = document.createElement("li");
    newli.innerText = "item novo";

    ul.appendChild(newli)
}