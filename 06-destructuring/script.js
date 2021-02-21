// 1. destructuring array
const perkenalan = ['halo','nama', 'saya', 'saiman'];
const [salam, satu, dua, tiga] = perkenalan;
console.log(tiga);

// skip items
const [salam, , , tiga] = perkenalan;
console.log(tiga);

// tukar/swap items
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);

// return value pada function
function coba() {
    return [1,2];
}
const [a,b] = coba();
console.log(a);

// rest parameter
const [a, ...values] = [1,2,3,4,5,6];
console.log(values);

// 2. destructuring object
const mhs = {
    nama: 'Saiman Al-fatah',
    umur: 33
}
const {nama, umur} = mhs;
console.log(nama);

// assignment tanpa deklarasi object
({nama, umur} = { nama: 'Saiman Al-fatah', umur: 33});
console.log(nama);

// assign ke variable baru
const mhs = {
    nama: 'Saiman Al-fatah',
    umur: 33
}
const {nama: n, umur: u} = mhs;
console.log(n);

// default value
const mhs = {
    nama: 'Saiman Al-fatah',
    umur: 33
}
const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
console.log(e);

// rest parameter
const mhs = {
    nama: 'Saiman Al-fatah',
    umur: 33, 
    email: 'saimanalfatah@email.com'
}
const {nama, ...value} = mhs;
console.log(value);

// mengambil field pada object
const mhs = {
    id: 123,
    nama: 'Saiman Al-fatah',
    umur: 33
}
function getIdMhs({ id }) {
    return id;
}
console.log(getIdMhs(mhs))

// 3. destructuring function
function penjumlahanPerkalian(a,b) {
    return [a + b, a * b];
}
let [jumlah, kali] = penjumlahanPerkalian(2,3);
console.log(jumlah);

// return value object
function kalkulasi(a,b) {
    return {
        jumlah: a + b, 
        kali: a * b, 
        ambil: a - b, 
        bagi: a / b
    };
}
let [jumlah, kali, ambil, bagi] = kalkulasi(2,3);
console.log(ambil);

// destructuring function arguments
const mhs = {
    nama: 'Saiman',
    umur: 23,
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 75
    }
}
function cetakMhs( {nama, umur, nilai: {tugas, uts, uas}} ) {
    return `Halo, nama saya ${nama}, umur saya ${umur} dan nilai uas saya ${uas}`;
}
console.log(cetakMhs(mhs));