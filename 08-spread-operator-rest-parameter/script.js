// 1. Spread Operator
// memecah iterables menjadi single elemen
const man = ['saiman', 'thiago', 'jota'];
console.log(...man[0]);

// menggabungkan 2 array
const mhs = ['saiman', 'thiago', 'jota'];
const dosen = ['klopp', 'guardiola', 'ole'];
const orang = [...mhs,...dosen];
console.log(orang);

// meng-copy array
const newMhs = ['saiman', 'thiago', 'jota'];
const copyMhs = [...newMhs];
copyMhs[0] = 'tsimikas';
console.log(copyMhs, newMhs);

const liMhs = document.querySelectorAll('li');
const mhsLi = [...liMhs].map(m => m.textContent);
console.log(mhsLi);

// 2. Rest Parameter
function myFunc(a, b, ...myArgs) {
    return  `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
}
console.log(myFunc(1,2,3,4,5,6));


function jumlahkan(...angka) {
    return angka.reduce((a,b) => a + b);
}
console.log(jumlahkan(1,2,3,4,5))

// array destructuring
const kelompok = ['saiman', 'thiago', 'tsimikas', 'jota'];
const [ketua, wakil, ...anggota] = kelompok;
console.log(anggota);

// object destructuring
const team = {
    pm: 'Saiman',
    frontEnd: 'Thiago',
    backEnd: 'Tsimikas',
    ux: 'Jota',
    devOps: 'Klopp'
}
const {pm, ...myTeam} = team;
console.log(myTeam);

// filtering 
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1,2, 'Saiman', false, 10, true, 'Thiago'));
