"use strict";
let hari = prompt("inputkan angka 1-7 ");
let hariNum = parseInt(hari || "0");
let out;
switch (hariNum) {
    case 1:
        out = "hari senin";
        break;
    case 2:
        out = "hari selasa";
        break;
    case 3:
        out = "hari rabu";
        break;
    case 4:
        out = "hari kamis";
        break;
    case 5:
        out = "hari jumat";
        break;
    case 6:
        out = "hari sabtu";
        break;
    case 7:
        out = "hari minggu";
        break;
    default:
        out = "input salah";
}
const output = document.getElementById("output");
if (output !== null) {
    output.innerHTML = out;
}
