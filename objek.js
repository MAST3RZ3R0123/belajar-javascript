const karakter = { 
nama: "Kirana", 
level:"undefined", 
hp: "undefined", 
senjata: "sword of demonic blood" 
}; 
console.log(karakter.nama);
console.log(karakter.level);
console.log(karakter.hp);
console.log(karakter.senjata);

console.log(karakter["nama"]);
console.log(karakter["hp"]);
console.log(karakter["level"]);
console.log(karakter["senjata"]);

karakter.nama = "M4$T3RZ3R0X_x321"; // mengubah properti
karakter.hp = "1000000";                  
karakter.level = "1000000000000"; 
karakter.armor = "Shield all in one"; // menambah properti baru 
console.log(karakter); 