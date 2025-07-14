const ramos = [
  { id: "calculo1", nombre: "Cálculo 1", semestre: "semestre1a1" },
  { id: "algebra1", nombre: "Álgebra 1", semestre: "semestre1a1" },
  { id: "fisica1", nombre: "Física 1", semestre: "semestre1a1" },
  { id: "tallerDesarrollo", nombre: "Taller Desarrollo", semestre: "semestre1a1" },
  { id: "introIngenieria", nombre: "Intro Ingeniería", semestre: "semestre1a1" },
  { id: "metodosEstudio", nombre: "Métodos de Estudio", semestre: "semestre1a1" },

  { id: "calculo2", nombre: "Cálculo 2", semestre: "semestre1a2" },
  { id: "algebra2", nombre: "Álgebra 2", semestre: "semestre1a2" },
  { id: "fisica2", nombre: "Física 2", semestre: "semestre1a2" },
  { id: "fundComp", nombre: "Fund. Computación", semestre: "semestre1a2" },
  { id: "quimica", nombre: "Química", semestre: "semestre1a2" },
  { id: "introInfo", nombre: "Intro Info", semestre: "semestre1a2" }

  // Agrega el resto de los ramos aquí como los de 2°, 3° y 4° año...
];

let estado = {};

function cargarEstado() {
  const data = localStorage.getItem("mallaEstado");
  estado = data ? JSON.parse(data) : {};
}

function guardarEstado() {
  localStorage.setItem("mallaEstado", JSON.stringify(estado));
}

function toggleRamo(id) {
  estado[id] = !estado[id];
  guardarEstado();
  actualizarVista();
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.id = ramo.id;
  div.textContent = ramo.nombre;
  div.onclick = () => toggleRamo(ramo.id);
  document.getElementById(ramo.semestre).appendChild(div);
}

function actualizarVista() {
  ramos.forEach(ramo => {
    const el = document.getElementById(ramo.id);
    if (!el) return;
    el.classList.toggle("aprobado", !!estado[ramo.id]);
  });
}

cargarEstado();
ramos.forEach(crearRamo);
actualizarVista();
