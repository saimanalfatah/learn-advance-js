// 1. Function Declaration
function tampilPesan(nama) {
    alert(`halo ${nama}`);
}
tampilPesan('Saiman');

// 2. Function Expression
let tampilPesan = function(nama) {
    alert(`halo ${nama}`);
}
tampilPesan('Saiman');

// 3. Arrow Function
let tampilPesan = (nama) => {
    return `halo ${nama}`;
}
console.log(tampilPesan('Saiman'));

// implisit return
let tampilPesan = nama => `halo ${nama}`;
console.log(tampilPesan('Saiman'));

// implisit return tanpa parameter function
let tampilPesan = () => `halo dunia`;
console.log(tampilPesan());

let tampilPesan = (nama, waktu) => {
    return `selamat ${waktu} halo ${nama}`;
}
tampilPesan('Saiman', 'Pagi');

// return object
let mahasiswa = ['Thiago', 'Keita', 'Fabinho'];
let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);

// arrow function tidak memiliki konsep this
// constructor function tidak memiliki konsep arrow function kecuali pada childnya
let Mahasiswa = function () {
    this.nama = 'Saiman';
    this.umur = 23;
    this.sayHello = () => { 
        console.log(`halo ${this.nama}`);
    }
    setInterval(() => {
        console.log(this.nama);
    },500);
}
let saiman = new Mahasiswa();
