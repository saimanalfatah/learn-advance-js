// template string
let nama = 'saiman';
let umur = 23;
console.log(`Halo, nama saya ${nama} umur saya ${23}`);

// embedded expression
console.log(`${1+1}`);
console.log(`${alert('Halo!')}`);

let x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// html fragments
let mhs = {
    nama: 'Saiman',
    umur: 23,
    email: 'saimanalfatah@gmail.com'
};
let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <h2>${mhs.umur}</h2>
</div>`;
console.log(el);

// tagged template
let namaSaya = 'Saiman Al-fatah';
let umurSaya = 23;

function coba(strings, ...values) {
    // let hasil = '';
    // strings.forEach((str, i) => {
    //     hasil += `${str}${values[i] || ''}`;
    // });
    // return hasil;
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

}
const halo = coba`Halo, nama saya ${namaSaya}, umur saya ${umurSaya} tahun`;
console.log(halo);
