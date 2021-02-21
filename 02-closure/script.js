function init() {
    let nama = "saiman";
    function tampilNama() {
        // closure, variable nama membutuhkan akses ke parentnya
        console.log(nama);
    }
    tampilNama();
}
init();

let add = (function() {
    let  counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());