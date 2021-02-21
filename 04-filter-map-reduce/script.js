let angka = [-1, 8, 9, 2, 10, 5, -6, 3, 4, 7];
// map
let mapAngka = angka.map(a => a * 2);
console.log(mapAngka);
// filter
let filterAngka = angka.filter(a => a >= 3);
console.log(filterAngka);
// reduce 
let reduceAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
console.log(reduceAngka);

// method chaining
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);
