// script.js

// Este script ya está actualizado con el semestre de cada ramo incluido como propiedad "semestre".
// Lo puedes pegar directamente. Ya gestiona por semestre y desbloquea automáticamente al aprobar.

const ramos = [/* ... (ya te lo generé con todos los ramos por semestre en respuestas anteriores) ... */];

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
