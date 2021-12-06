/*class Comida {
  constructor(entrada, principal, postre, bebida) {
    this.entrada = entrada;
    this.principal = principal;
    this.postre = postre;
    this.bebida = bebida;
  }

  realizarPedido() {
    this.entrada = prompt(
      "Disfrute está increible promoción solo si selecciona una de las 2 opciones para cada paso ¿desea provoleta o mollejas?"
    );
    this.principal = prompt("¿choripan o bondiola?");
    this.postre = prompt("¿desea chocotorta o volcan de chocolate?");
    this.bebida = prompt("¿desea vino o birra?");
  }

  entregarcomida() {
    if (this.entrada.toUpperCase() == "PROVOLETA") {
      this.entrada = "provoleta a la parrilla";
    } else {
      this.entrada = "mollejas a la parrilla";
    }

    if (this.principal.toUpperCase() == "CHORIPAN" || this.principal != "") {
      return "Disfrute su " + this.comida + " con la entrada que mas le agrado";
    } else if (this.postre.toUpperCase() == "CHOCOTORTA" || this.postre != "") {
      return "Disfrute su " + this.comida + " con el postre que mas le agrado";
    } else if (this.bebida.toUpperCase() == "VINO" || this.bebida != "") {
      console.log(
        "Disfrute su " + this.comida + " con las opciones que mas le gustaron"
      );
    } else {
      console.log("lo sentimos, no cumple las condiciones de la promoción");
    }
  }
}

const comida1 = new Comida(
  this.entrada,
  this.principal,
  this.postre,
  this.bebida
);
comida1.realizarPedido();
comida1.entregarcomida();

alert(JSON.stringify(comida1));

const arrayEntradas = ["mollejas", "provoleta", "chinchulines", "empanadas"];
const arrayPrincipales = ["choripan", "bondiola", "vacio", "matambre"];
const arrayPostre = [
  "chocotorta",
  "volcan de chocolate",
  "cheese cake",
  "helado",
];
const arrayBebidas = ["agua", "vino", "birra", "coca cola"];

const filtro = arrayPrincipales.filter((elemento) => elemento.includes("i"));
console.log(filtro);
*/

/*

const nuevosElemento = ["pastas", "pizzas", "milanesas", "sushi"];

const lista = document.getElementById("list");

nuevosElemento.forEach((element) => {
  let nuevoNodo = document.createElement("li");

  nuevoNodo.innerHTML = element;

  lista.appendChild(nuevoNodo);
});
*/
