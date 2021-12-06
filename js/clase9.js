class elecciones {
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

  let comida = document.getElementById("comidaPreferida").value;
  let entrada = document.getElementById("entrada").value;
  let postre = document.getElementById("postre").value;

  const Elecciones = new elecciones(comida, entrada, postre);

  eleccion.push(Elecciones);
  JSON.stringify(eleccion);
  idform.reset();
});

boton.onclick = () => {
  const sugerencia = document.getElementById("sugerencias");

  eleccion.forEach((element) => {
    let nuevoNodo = document.createElement("li");

    nuevoNodo.innerHTML = element;

    sugerencia.appendChild(nuevoNodo);
  });
};
