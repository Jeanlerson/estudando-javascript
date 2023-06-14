function clicou(){
    const teste = document.querySelector("#teste1");
    const ul = teste.querySelector("ul");


    let newUl = document.createElement("ul")
    for(let x = 1; x < 6; x++){
        let newLi = document.createElement("li")
        newLi.innerHTML = "Item add " + x;
        newUl.append(newLi);
    }

    ul.after(newUl);
}