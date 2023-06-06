/*let cars = [
    { brand: 'Fiat', year: 2001},
    { brand: 'Fiat', year: 2010},
    { brand: 'Fiat', year: 2011},
    { brand: 'Fiat', year: 2023}
];

cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0
    }
});

console.log(cars);*/

let fruits = ['Banana', 'Laranja', 'Maça', 'Uva', 'Acerola'];

let bigFruits = fruits.some((value) => value.length > 4);

fruits.pop()

if (fruits.includes('Acerola')) {
    console.log('Tem Acerola')
} else {
    console.log('Não tem Acerola')
}