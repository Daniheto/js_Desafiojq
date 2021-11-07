let orden = prompt("Que desea ordenar?").toUpperCase();
const comprobante = "Disfrute su comida";

while (orden != "") {
  switch (orden) {
    case "MENU COMPLETO":
      const dinero = prompt("Cuanto dinero tienes?").toUpperCase();
      if (dinero > 1000) {
        alert(comprobante);
        orden = "";
      } else {
        const infantil = prompt("No queres el menu infantil?").toUpperCase();
        if (infantil != "SI") {
          alert("Disculpa, no te puedo ofrecer otro menu");
          orden = "";
        } else {
          alert(comprobante);
          orden = "";
        }
      }
      break;
    case "MENU INFANTIL":
      alert(comprobante);
      orden = "";
      break;
    default:
      alert("Lo que pides no está en ningun menu");
      orden = prompt("Que desea ordenar?").toUpperCase();
      break;
  }
}
