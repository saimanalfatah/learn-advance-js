// for..of

// 1. array
const mhs = ['saiman', 'thiago', 'firmino'];
for(const m of mhs) {
    console.log(m);
}

// 2. string
const nama = 'Saiman';
for(const n of nama) {
    console.log(n);
}

// for array dengan index
const man = ['saiman', 'thiago', 'firmino'];
for(const [i, a] of man.entries()) {
    console.log(`${a} adalah mahasiswa ke-${i + 1}`);
}

// 3. nodelist
const liNama = document.querySelectorAll('.nama');
for(l of liNama) {
    console.log(l.innerHTML);
}
// 4. arguments
function jumlahkanAngka() {
    let jumlah = 0;
    for (const j of arguments) {
        jumlah += j;
        console.log(j);
    }
    return jumlah;
}
console.log(jumlahkanAngka(1,2,3,4,5));


// for..in 
const object = {
    nama: 'Saiman',
    umur: 33,
    email: 'saimanalfatah@gmail.com'
}
for (const key in object) {
    console.log(key);
}
