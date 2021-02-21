// Cara untuk membuat object pada javascript

// 1. Object Literal
let mahasiswa = {
    nama: "saiman",
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}`);
    }
}

// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}`);
    }
    mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}`)
    }
    return mahasiswa;
}
let saiman = Mahasiswa('Saiman', 10);

const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}`);
    },
    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}`)
    }
}
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;

    return mahasiswa;
}
let saiman = Mahasiswa('Saiman', 10);

// 3. Constructor Function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}`);
    }
    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}`)
    }
}
let saiman = new Mahasiswa('Saiman', 10);

// 4. Object.create
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}`);
    },
    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}`)
    }
}
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}
let saiman = Mahasiswa('Saiman', 10);


// Prototype
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}
Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`
}
let saiman = new Mahasiswa('saiman', 10);