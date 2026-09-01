let hari: string | null = prompt("inputkan angka 1-9 ");
let hariNum: number = parseInt(hari || "0");
let out: string;

switch (hariNum) {
  case 1:
    out = "angka satu";
    break;
  case 2:
    out = "angka dua";
    break;
  case 3:
    out = "angka tiga";
    break;
  case 4:
    out = "angka empat";
    break;
  case 5:
    out = "angka lima";
    break;
  case 6:
    out = "angka enam";
    break;
  case 7:
    out = "angka tujuh";
    break;
  case 8:
    out = "angka delapan";
    break;
  case 9:
    out = "angka sembilan";
    break;
    default:
    out = "input salah";
}

const output = document.getElementById("output");
if (output !== null) {
  output.innerHTML = out;
}