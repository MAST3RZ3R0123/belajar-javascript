"use strict";
let angka = prompt("Masukkan angka: ");
let angkaNumber = parseFloat(angka || "0");
let nama = prompt("Masukkan nama: ");
//output
const output = document.getElementById("output");
if (output !== null) {
    output.innerHTML = `Halo, ${nama}! Urutan mu adalah ${angkaNumber}.`;
}
