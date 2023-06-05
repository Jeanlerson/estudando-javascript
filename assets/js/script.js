function maiorDeIdade(idade){
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 17;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}

function calcPct(y, x) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(y, x);

console.log(`${pct}% de ${x} é ${y}`)