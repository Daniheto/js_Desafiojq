const suma = (a, b, c, d) => a + b + c + d;

let nota1 = 90;
let nota2 = 60;
let nota3 = 100;
let nota4 = 89;

const promedio = (x) => x / 4;

let totalPromedio = promedio(suma(nota1, nota2, nota3, nota4));

console.log(totalPromedio);

if (totalPromedio > 60 && totalPromedio < 80) {
  alert("Aprobaste con " + totalPromedio + " ,pero puedes mejorar");
} else if (totalPromedio > 80) {
  alert("Felicidades, aprobaste con " + totalPromedio);
} else {
  alert("Tu promedio fue " + totalPromedio + " ,no aprobaste");
}
