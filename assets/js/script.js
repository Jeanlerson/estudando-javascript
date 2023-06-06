let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 15},
    {nome: 'vermelho', qt: 3}
];

/*for (let n = 0; n < cores.length; n++) {
    console.log(cores[n].nome + '-' + cores[n].qt);
}*/

/*for (let i in cores) {
    console.log(`${cores[i].nome} - ${cores[i].qt}`);
}*/

for (let cor of cores) {
    console.log(`${cor.nome} - ${cor.qt}`);
}