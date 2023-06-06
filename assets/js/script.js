let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1. ' + carros[x]);

carros[1] = 'Audi';
console.log('2. Lista com Audi:');
console.log(carros);

carros.push('Volvo');
console.log('3. Lista comVolvo:');
console.log(carros);

console.log(`4. itens no array: ${carros.length}`);