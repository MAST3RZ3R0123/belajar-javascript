let angka1: number =50;
let angka2: number = 8;

//operasi aritmatika (+ - * / % **)
let jumlah: number = angka1 + angka2;
let selisih: number = angka1 - angka2;
let perkalian: number = angka1 * angka2;
let pembagian: number = angka1 / angka2;
let sisaBagi: number = angka1 % angka2;
let pangkat: number = angka1 ** angka2;
console.log(`${angka1} + ${angka2} = ${jumlah}`);
console.log(`${angka1} - ${angka2} = ${selisih}`);
console.log(`${angka1} * ${angka2} = ${perkalian}`);
console.log(`${angka1} / ${angka2} = ${pembagian}`);
console.log(`${angka1} % ${angka2} = ${sisaBagi}`);
console.log(`${angka1} ** ${angka2} = ${pangkat}`);

//operator perbandingan (== != === !== > < >= <=)
console.log(`${angka1} kurang dari 10? ${angka1 < 10}`);
console.log(`${angka1} kurang dari sama dengan 10? ${angka1 <= 10}`);
console.log(`${angka1} lebih dari 10? ${angka1 > 10}`);
console.log(`${angka1} lebih dari sama dengan 10? ${angka1 >= 10}`);
console.log(`${angka1} sama dengan (nilai) 10? ${angka1 == 10}`);
console.log(`${angka1} sama dengan (nilai & tipe data) 10? ${angka1 === 10}`);
console.log(`${angka1} tidak sama dengan (nilai) 10? ${angka1 != 10}`);
console.log(`${angka1} tidak sama dengan (nilai & tipe data) 10? ${angka1 !== 10}`);

//operator logika (&& || !)
let kondisi1: boolean = true;
let kondisi2: boolean = false;

console.log(`kondisi1 AND kondisi2 = ${kondisi1 && kondisi2}`);
console.log(`kondisi1 OR kondisi2 = ${kondisi1 || kondisi2}`);
console.log(`NOT kondisi1 = ${!kondisi1}`);
console.log(`NOT kondisi2 = ${!kondisi2}`);