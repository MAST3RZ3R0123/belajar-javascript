//typescript
const mobil: {
  merek: string;
  model: string;
  tahun: number;
  bekas: boolean;
  plat_nomor: string;
} = {
  merek: "lamborghini",
  model: "lamborghini Huracan GT3 Evo2",
  tahun: 2022,
  bekas: false,
  plat_nomor: "undefined"
};
console.log(`merek        :${mobil.merek}`),
console.log(`model        :${mobil.model}`),
console.log(`tahun        :${mobil.tahun}`),
console.log(`bekas         :${mobil.bekas}`),
console.log(`plat_nomor    :${mobil.plat_nomor}`)
