let angka: string | null = prompt("Masukkan angka: ");
let angkaNumber: number = parseFloat(angka || "0");

let nama: string | null = prompt("Masukkan nama: ");

//output
const output = document.getElementById("output");

if (output !== null) {
  output.innerHTML = `Halo, ${nama}! Urutan mu adalah ${angkaNumber}.`;
}