class comida {
  constructor(menu) {
    this.comida;
    this.entrada = menu.entrada;
    this.principal = menu.principal;
    this.postre = menu.postre;
    this.bebida = menu.bebida;
  }

  entregarcomida() {
    if (this.entrada.toUpperCase() == PROVOLETA) {
      this.comida = "provoleta a la parrilla";
    } else {
      this.comida = "mollejas a la parrilla";
    }

    if (this.principal.toUpperCase() == CHORIPAN || this.principal != "") {
      return "Disfrute su " + this.comida + " con la entrada que mas le agrado";
    } else if (this.postre.toUpperCase() == CHOCOTORTA || this.postre != "") {
      return "Disfrute su " + this.comida + " con el postre que mas le agrado";
    } else if (this.postre.toUpperCase() == VINO || this.bebida != "") {
      console.log(
        "Disfrute su " + this.comida + " con las opciones que mas le gustaron"
      );
    } else {
      console.log("lo sentimos, no cumple las condiciones de la promoción");
    }
  }
}

let comidas = new comida({
  entrada: "",
  principal: "",
  postre: "",
  bebida: "",
});
comida["entrada"] = prompt(
  "Disfrute está increible promoción solo si selecciona una de las 2 opciones para cada paso ¿desea provoleta o mollejas?"
);
comida.principal = prompt("¿choripan o bondiola?");
comida.postre = prompt("¿desea chocotorta o volcan de chocolate?");
comida.bebida = prompt("¿desea vino o birra?");

console.log(comida.entregarComida);
