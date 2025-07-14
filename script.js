// script.js

const ramos = [
  // 1° año - 1er semestre
  { id: "calculo1", nombre: "Cálculo 1", abre: ["calculo2", "economia"], semestre: "semestre1a1" },
  { id: "algebra1", nombre: "Álgebra 1", abre: ["algebra2", "fundamentosComputacion"], semestre: "semestre1a1" },
  { id: "fisica1", nombre: "Física 1", abre: ["fisica2"], semestre: "semestre1a1" },
  { id: "tallerDesarrollo", nombre: "Taller Desarrollo Personal", abre: ["comunicacion"], semestre: "semestre1a1" },
  { id: "introIngenieria", nombre: "Intro. a la Ingeniería", abre: ["introInfo", "ingSistemas"], semestre: "semestre1a1" },
  { id: "metodosEstudio", nombre: "Métodos de Estudio", abre: ["ingles1"], semestre: "semestre1a1" },

  // 1° año - 2do semestre
  { id: "calculo2", nombre: "Cálculo 2", abre: ["estadistica", "ecuaciones", "electricidad"], semestre: "semestre1a2" },
  { id: "algebra2", nombre: "Álgebra 2", abre: ["estructuraComputadores"], semestre: "semestre1a2" },
  { id: "fisica2", nombre: "Física 2", abre: ["electricidad"], semestre: "semestre1a2" },
  { id: "fundamentosComputacion", nombre: "Fund. de Computación", abre: ["ecuaciones", "programacion"], semestre: "semestre1a2" },
  { id: "quimica", nombre: "Química General", abre: ["ingSistemas"], semestre: "semestre1a2" },
  { id: "introInfo", nombre: "Intro. Ing. Informática", abre: ["programacion"], semestre: "semestre1a2" },

  // 2° año - 1er semestre
  { id: "estadistica", nombre: "Análisis Estadístico", abre: ["ingSistemas"], semestre: "semestre2a1" },
  { id: "ecuaciones", nombre: "Ecuaciones y Mét. Num.", abre: ["evaluacionProyectos"], semestre: "semestre2a1" },
  { id: "electricidad", nombre: "Electricidad y Magnetismo", abre: ["estructuraComputadores"], semestre: "semestre2a1" },
  { id: "comunicacion", nombre: "Comunicación Efectiva", abre: ["informaticaSociedad"], semestre: "semestre2a1" },
  { id: "ingles1", nombre: "Inglés 1", abre: ["ingles2"], semestre: "semestre2a1" },
  { id: "programacion", nombre: "Métodos de Programación", abre: ["paradigmas", "algoritmos"], semestre: "semestre2a1" },

  // 2° año - 2do semestre
  { id: "economia", nombre: "Fund. Economía", abre: ["evaluacionProyectos"], semestre: "semestre2a2" },
  { id: "ingles2", nombre: "Inglés 2", abre: ["ingles3"], semestre: "semestre2a2" },
  { id: "paradigmas", nombre: "Paradigmas de Programación", abre: ["software", "disenoBD"], semestre: "semestre2a2" },
  { id: "algoritmos", nombre: "Análisis de Algoritmos", abre: ["sistemasOperativos"], semestre: "semestre2a2" },
  { id: "ingSistemas", nombre: "Ingeniería de Sistemas", abre: ["sistemasInfo"], semestre: "semestre2a2" },
  { id: "estructuraComputadores", nombre: "Estructura de Computadores", abre: ["organizacion"], semestre: "semestre2a2" },

  // 3° año - 1er semestre
  { id: "ingles3", nombre: "Inglés 3", abre: ["ingles4"], semestre: "semestre3a1" },
  { id: "software", nombre: "Fund. Ing. Software", abre: ["tallerBD", "tecnicas"], semestre: "semestre3a1" },
  { id: "informaticaSociedad", nombre: "Informática y Sociedad", abre: ["seminario"], semestre: "semestre3a1" },
  { id: "sistemasInfo", nombre: "Sistemas de Información", abre: ["seminario"], semestre: "semestre3a1" },
  { id: "disenoBD", nombre: "Diseño de BD", abre: ["tallerBD"], semestre: "semestre3a1" },
  { id: "organizacion", nombre: "Organización de Computadores", abre: ["sistemasOperativos", "redes"], semestre: "semestre3a1" },
  { id: "evaluacionProyectos", nombre: "Evaluación Proyectos", abre: ["adminProyectos"], semestre: "semestre3a1" },

  // 3° año - 2do semestre
  { id: "ingles4", nombre: "Inglés 4", abre: [], semestre: "semestre3a2" },
  { id: "sistemasOperativos", nombre: "Sistemas Operativos", abre: ["seminario"], semestre: "semestre3a2" },
  { id: "tallerBD", nombre: "Taller de BD", abre: ["proyecto", "seminario"], semestre: "semestre3a2" },
  { id: "tecnicas", nombre: "Téc. Ing. Software", abre: ["proyecto", "topico1", "topico2", "topico3"], semestre: "semestre3a2" },
  { id: "redes", nombre: "Redes Computacionales", abre: ["topico1", "topico2", "topico3"], semestre: "semestre3a2" },
  { id: "adminProyectos", nombre: "Admin. Proyectos", abre: ["proyecto", "topico3"], semestre: "semestre3a2" },

  // 4° año - 1er semestre
  { id: "proyecto", nombre: "Proyecto de Ing. Software", abre: [], semestre: "semestre4a1" },
  { id: "topico1", nombre: "Tópico de Especialidad 1", abre: [], semestre: "semestre4a1" },
  { id: "topico2", nombre: "Tópico de Especialidad 2", abre: [], semestre: "semestre4a1" },
  { id: "topico3", nombre: "Tópico de Especialidad 3", abre: [], semestre: "semestre4a1" },
  { id: "seminario", nombre: "Seminario Comp. e Inform.", abre: ["titulo"], semestre: "semestre4a1" },

  // 4° año - 2do semestre
  { id: "titulo", nombre: "Trabajo de Titulación", abre: [], semestre: "semestre4a2" }
];

const estado = {};

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = ramo.nombre;
  div.id = ramo.id;
  div.onclick = () => aprobarRamo(ramo.id);
  document.getElementById(ramo.semestre).appendChild(div);
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
