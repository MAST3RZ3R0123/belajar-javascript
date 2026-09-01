let angka: number = 12345;

if (angka >= 0 && angka <= 9) {
    console.log(`${angka} adalah bilangan satuan`);
} else if (angka >= 10 && angka <= 99) {
    console.log(`${angka} adalah bilangan puluhan`);
} else if (angka >= 100 && angka <= 999) {
    console.log(`${angka} adalah bilangan ratusan`);
} else if (angka >= 1000 && angka <= 9999) {
    console.log(`${angka} adalah bilangan ribuan`);
} else {
    console.log(`${angka} bukan bilangan satuan, puluhan, ratusan, atau ribuan`);
}