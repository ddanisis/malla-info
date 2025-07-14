const ramos = [
  { id: "calculo1", nombre: "Cálculo 1", abre: ["calculo2", "economia"] },
  { id: "algebra1", nombre: "Álgebra 1", abre: ["algebra2", "fundamentosComputacion"] },
  { id: "fisica1", nombre: "Física 1", abre: ["fisica2"] },
  { id: "tallerDesarrollo", nombre: "Taller Desarrollo Personal", abre: ["comunicacion"] },
  { id: "introIngenieria", nombre: "Intro. a la Ingeniería", abre: ["introInfo", "ingSistemas"] },
  { id: "metodosEstudio", nombre: "Métodos de Estudio", abre: ["ingles1"] },

  { id: "calculo2", nombre: "Cálculo 2", abre: ["estadistica", "ecuaciones", "electricidad"] },
  { id: "algebra2", nombre: "Álgebra 2", abre: ["estructuraComputadores"] },
  { id: "fisica2", nombre: "Física 2", abre: ["electricidad"] },
  { id: "fundamentosComputacion", nombre: "Fund. de Computación", abre: ["ecuaciones", "programacion"] },
  { id: "quimica", nombre: "Química General", abre: ["ingSistemas"] },
  { id: "introInfo", nombre: "Intro. Ing. Informática", abre: ["programacion"] },

  { id: "estadistica", nombre: "Análisis Estadístico", abre: ["ingSistemas"] },
  { id: "ecuaciones", nombre: "Ecuaciones y Mét. Num.", abre: ["evaluacionProyectos"] },
  { id: "electricidad", nombre: "Electricidad y Magnetismo", abre: ["estructuraComputadores"] },
  { id: "comunicacion", nombre: "Comunicación Efectiva", abre: ["informaticaSociedad"] },
  { id: "ingles1", nombre: "Inglés 1", abre: ["ingles2"] },
  { id: "programacion", nombre: "Métodos de Programación", abre: ["paradigmas", "algoritmos"] },

  { id: "economia", nombre: "Fund. Economía", abre: ["evaluacionProyectos"] },
  { id: "ingles2", nombre: "Inglés 2", abre: ["ingles3"] },
  { id: "paradigmas", nombre: "Paradigmas de Programación", abre: ["software", "disenoBD"] },
  { id: "algoritmos", nombre: "Análisis de Algoritmos", abre: ["sistemasOperativos"] },
  { id: "ingSistemas", nombre: "Ingeniería de Sistemas", abre: ["sistemasInfo"] },
  { id: "estructuraComputadores", nombre: "Estructura de Computadores", abre: ["organizacion"] },

  { id: "ingles3", nombre: "Inglés 3", abre: ["ingles4"] },
  { id: "software", nombre: "Fund. Ing. Software", abre: ["tallerBD", "tecnicas"] },
  { id: "informaticaSociedad", nombre: "Informática y Sociedad", abre: ["seminario"] },
  { id: "sistemasInfo", nombre: "Sistemas de Información", abre: ["seminario"] },
  { id: "disenoBD", nombre: "Diseño de BD", abre: ["tallerBD"] },
  { id: "organizacion", nombre: "Organización de Computadores", abre: ["sistemasOperativos", "redes"] },
  { id: "evaluacionProyectos", nombre: "Evaluación Proyectos", abre: ["adminProyectos"] },

  { id: "ingles4", nombre: "Inglés 4", abre: [] },
  { id: "sistemasOperativos", nombre: "Sistemas Operativos", abre: ["seminario"] },
  { id: "tallerBD", nombre: "Taller de BD", abre: ["proyecto", "seminario"] },
  { id: "tecnicas", nombre: "Téc. Ing. Software", abre: ["proyecto", "topico1", "topico2", "topico3"] },
  { id: "redes", nombre: "Redes Computacionales", abre: ["topico1", "topico2", "topico3"] },
  { id: "adminProyectos", nombre: "Admin. Proyectos", abre: ["proyecto", "topico3"] },

  { id: "proyecto", nombre: "Proyecto de Ing. Software", abre: [] },
  { id: "topico1", nombre: "Tópico de Especialidad 1", abre: [] },
  { id: "topico2", nombre: "Tópico de Especialidad 2", abre: [] },
  { id: "topico3", nombre: "Tópico de Especialidad 3", abre: [] },
  { id: "seminario", nombre: "Seminario Comp. e Inform.", abre: ["titulo"] },
  { id: "titulo", nombre: "Trabajo de Titulación", abre: [] }
];

const malla = document.getElementById("malla");
const estado = {};

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = ramo.nombre;
  div.id = ramo.id;
  div.onclick = () => aprobarRamo(ramo.id);
  malla.appendChild(div);
  estado[ramo.id] = false;
}

function actualizarEstado() {
  ramos.forEach(ramo => {
    const requisitos = ramos.filter(r => r.abre.includes(ramo.id));
    const desbloqueado = requisitos.length === 0 || requisitos.every(r => estado[r.id]);
    const div = document.getElementById(ramo.id);
    if (estado[ramo.id]) {
      div.classList.remove("bloqueado");
      div.classList.add("aprobado");
    } else if (desbloqueado) {
      div.classList.remove("bloqueado");
    }
  });
}

function aprobarRamo(id) {
  if (estado[id]) return;
  estado[id] = true;
  actualizarEstado();
}

ramos.forEach(crearRamo);
actualizarEstado();

