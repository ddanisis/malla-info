const ramos = [
  // 1er año - 1er semestre
  { id: "calculo1", nombre: "Cálculo 1", semestre: "semestre1a1", desbloquea: ["calculo2", "eco1"] },
  { id: "algebra1", nombre: "Álgebra 1", semestre: "semestre1a1", desbloquea: ["algebra2", "fundComp"] },
  { id: "fisica1", nombre: "Física 1", semestre: "semestre1a1", desbloquea: ["fisica2"] },
  { id: "taller", nombre: "Taller Desarrollo", semestre: "semestre1a1", desbloquea: ["comunicacion"] },
  { id: "introIng", nombre: "Intro Ingeniería", semestre: "semestre1a1", desbloquea: ["introInfo", "sistemas"] },
  { id: "metodos", nombre: "Métodos Estudio", semestre: "semestre1a1", desbloquea: ["ingles1"] },

  // 1er año - 2do semestre
  { id: "calculo2", nombre: "Cálculo 2", semestre: "semestre1a2", desbloquea: ["estadistica", "ecuaciones", "electro"] },
  { id: "algebra2", nombre: "Álgebra 2", semestre: "semestre1a2", desbloquea: ["estructura"] },
  { id: "fisica2", nombre: "Física 2", semestre: "semestre1a2", desbloquea: ["electro"] },
  { id: "fundComp", nombre: "Fund. Computación", semestre: "semestre1a2", desbloquea: ["ecuaciones", "metProg"] },
  { id: "quimica", nombre: "Química General", semestre: "semestre1a2", desbloquea: ["sistemas"] },
  { id: "introInfo", nombre: "Intro Info", semestre: "semestre1a2", desbloquea: ["metProg"] },

  // 2do año - 1er semestre
  { id: "estadistica", nombre: "Análisis Estadístico", semestre: "semestre2a1", desbloquea: ["sistemas"] },
  { id: "ecuaciones", nombre: "Ecuaciones y Métodos Numéricos", semestre: "semestre2a1", desbloquea: ["evalProy"] },
  { id: "electro", nombre: "Electricidad y Magnetismo", semestre: "semestre2a1", desbloquea: ["estructura"] },
  { id: "comunicacion", nombre: "Comunicación Efectiva", semestre: "semestre2a1", desbloquea: ["sociedad"] },
  { id: "ingles1", nombre: "Inglés 1", semestre: "semestre2a1", desbloquea: ["ingles2"] },
  { id: "metProg", nombre: "Métodos de Programación", semestre: "semestre2a1", desbloquea: ["paradigmas", "algoritmos"] },

  // 2do año - 2do semestre
  { id: "eco1", nombre: "Fund. Economía", semestre: "semestre2a2", desbloquea: ["evalProy"] },
  { id: "ingles2", nombre: "Inglés 2", semestre: "semestre2a2", desbloquea: ["ingles3"] },
  { id: "paradigmas", nombre: "Paradigmas de Prog.", semestre: "semestre2a2", desbloquea: ["fundIngSoft", "disenoBaseDatos"] },
  { id: "algoritmos", nombre: "Análisis de Algoritmos", semestre: "semestre2a2", desbloquea: ["so"] },
  { id: "sistemas", nombre: "Ing. de Sistemas", semestre: "semestre2a2", desbloquea: ["info"] },
  { id: "estructura", nombre: "Estructura Computadores", semestre: "semestre2a2", desbloquea: ["orgComputadores"] },

  // 3er año - 1er semestre
  { id: "ingles3", nombre: "Inglés 3", semestre: "semestre3a1", desbloquea: ["ingles4"] },
  { id: "fundIngSoft", nombre: "Fund. Ing. Software", semestre: "semestre3a1", desbloquea: ["tallerBaseDatos", "tecnicasSoft"] },
  { id: "sociedad", nombre: "Informática y Sociedad", semestre: "semestre3a1", desbloquea: ["seminario"] },
  { id: "info", nombre: "Sistemas de Información", semestre: "semestre3a1", desbloquea: ["seminario"] },
  { id: "disenoBD", nombre: "Diseño de BaseDatos", semestre: "semestre3a1", desbloquea: ["tallerBD"] },
  { id: "orgComputadores", nombre: "Organización de Computadores", semestre: "semestre3a1", desbloquea: ["so", "redes"] },
  { id: "evalProy", nombre: "Evaluación Proyectos", semestre: "semestre3a1", desbloquea: ["adminProy"] },

  // 3er año - 2do semestre
  { id: "ingles4", nombre: "Inglés 4", semestre: "semestre3a2", desbloquea: [] },
  { id: "so", nombre: "Sist. Operativos", semestre: "semestre3a2", desbloquea: ["seminario"] },
  { id: "tallerBD", nombre: "Taller BaseDatos", semestre: "semestre3a2", desbloquea: ["proyecto", "seminario"] },
  { id: "tecnicasSoft", nombre: "Téc. Ing. Software", semestre: "semestre3a2", desbloquea: ["proyecto", "topico1", "topico2", "topico3"] },
  { id: "redes", nombre: "Redes Comp.", semestre: "semestre3a2", desbloquea: ["topico1", "topico2", "topico3"] },
  { id: "adminProy", nombre: "Adm. Proyectos", semestre: "semestre3a2", desbloquea: ["proyecto", "topico3"] },

  // 4to año - 1er semestre
  { id: "proyecto", nombre: "Proyecto Software", semestre: "semestre4a1", desbloquea: [] },
  { id: "topico1", nombre: "Tópico Esp. 1", semestre: "semestre4a1", desbloquea: [] },
  { id: "topico2", nombre: "Tópico Esp. 2", semestre: "semestre4a1", desbloquea: [] },
  { id: "topico3", nombre: "Tópico Esp. 3", semestre: "semestre4a1", desbloquea: [] },
  { id: "seminario", nombre: "Seminario Comp.", semestre: "semestre4a1", desbloquea: ["titulo"] },

  // 4to año - 2do semestre
  { id: "titulo", nombre: "Trabajo de Titulación", semestre: "semestre4a2", desbloquea: [] }
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
  const ramo = ramos.find(r => r.id === id);
  if (!ramo) return;

  const requisitos = ramos.filter(r => r.desbloquea.includes(ramo.id));
  const habilitado = requisitos.length === 0 || requisitos.every(r => estado[r.id]);

  if (!habilitado) return; // Bloqueado

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

    const aprobado = !!estado[ramo.id];
    el.classList.remove("aprobado", "desbloqueado", "bloqueado");

    if (aprobado) {
      el.classList.add("aprobado");
    } else {
      const requisitos = ramos.filter(r => r.desbloquea.includes(ramo.id));
      const habilitado = requisitos.length === 0 || requisitos.every(r => estado[r.id]);
      el.classList.add(habilitado ? "desbloqueado" : "bloqueado");
    }
  });
}

cargarEstado();
ramos.forEach(crearRamo);
actualizarVista();
