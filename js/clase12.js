/*class elecciones {
  constructor(comida, entrada, postre) {
    this.comida = comida;
    this.entrada = entrada;
    this.postre = postre;
  }
}

let eleccion = [];

let idform = document.getElementById("formulario");

idform.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target);

  let datform = new FormData(e.target);
  let nuevaEleccion = new elecciones(
    datform.get("comidaPreferida"),
    datform.get("entrada"),
    datform.get("postre")
  );
  eleccion.push(nuevaEleccion);
  localStorage.setItem("eleccion", JSON.stringify(eleccion));
  idform.reset();
});
console.log(eleccion);

const nuevosElemento = ["pastas", "pizzas", "milanesas", "sushi"];

const lista = document.getElementById("list");

nuevosElemento.forEach((element) => {
  let nuevoNodo = document.createElement("li");

  nuevoNodo.innerHTML = element;

  lista.appendChild(nuevoNodo);
});*/
