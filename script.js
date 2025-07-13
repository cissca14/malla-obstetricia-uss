const ramos = [
  { nombre: "Anatomía", semestre: 1, prer: [] },
  { nombre: "Biología Celular", semestre: 1, prer: [] },
  { nombre: "Química General", semestre: 1, prer: [] },
  { nombre: "Matemática", semestre: 1, prer: [] },
  { nombre: "Introducción a la Matronería", semestre: 1, prer: [] },
  { nombre: "Comunicación Oral y Escrita", semestre: 1, prer: [] },
  { nombre: "Fisiología", semestre: 2, prer: ["Anatomía", "Biología Celular"] },
  { nombre: "Psicología Evolutiva", semestre: 2, prer: [] },
  { nombre: "Química Orgánica", semestre: 2, prer: ["Química General"] },
  { nombre: "Microbiología", semestre: 2, prer: ["Biología Celular"] },
  { nombre: "Salud Pública", semestre: 2, prer: [] },
  { nombre: "Embriología y Genética", semestre: 2, prer: ["Biología Celular"] },
  { nombre: "Bioética", semestre: 3, prer: [] },
  { nombre: "Farmacología", semestre: 3, prer: ["Fisiología", "Química Orgánica"] },
  { nombre: "Enfermería en Salud Sexual", semestre: 3, prer: ["Fisiología"] },
  { nombre: "Enfermería en Salud Comunitaria", semestre: 3, prer: ["Salud Pública"] },
  { nombre: "Atención Integral en Salud Familiar", semestre: 3, prer: ["Psicología Evolutiva"] },
  { nombre: "Investigación en Salud", semestre: 3, prer: [] },
  { nombre: "Partería I", semestre: 4, prer: ["Embriología y Genética", "Farmacología"] },
  { nombre: "Atención en el Embarazo I", semestre: 4, prer: ["Fisiología", "Enfermería en Salud Sexual"] },
  { nombre: "Clínica Obstétrica I", semestre: 4, prer: ["Fisiología", "Embriología y Genética"] },
  { nombre: "Psicoprofilaxis Obstétrica", semestre: 4, prer: ["Psicología Evolutiva"] },
  { nombre: "Ginecología", semestre: 4, prer: ["Fisiología"] },
  { nombre: "Atención en el Embarazo II", semestre: 5, prer: ["Atención en el Embarazo I"] },
  { nombre: "Partería II", semestre: 6, prer: ["Partería I"] },
  { nombre: "Clínica Obstétrica II", semestre: 6, prer: ["Clínica Obstétrica I"] },
  { nombre: "Taller de Inglés Profesional", semestre: 6, prer: [] },
  { nombre: "Atención en Puerperio", semestre: 7, prer: ["Partería II"] },
  { nombre: "Neonatología", semestre: 7, prer: ["Clínica Obstétrica II"] },
  { nombre: "Infecciones de Transmisión Sexual", semestre: 7, prer: ["Ginecología"] },
  { nombre: "Investigación en Salud I", semestre: 7, prer: ["Investigación en Salud"] },
  { nombre: "Taller Integrador I", semestre: 7, prer: ["Clínica Obstétrica II"] },
  { nombre: "Salud de la Mujer en el Ciclo Vital", semestre: 8, prer: ["Ginecología"] },
  { nombre: "Gestión del Cuidado en Matronería", semestre: 8, prer: ["Partería II"] },
  { nombre: "Ética Profesional", semestre: 8, prer: ["Bioética"] },
  { nombre: "Investigación en Salud II", semestre: 8, prer: ["Investigación en Salud I"] },
  { nombre: "Taller Integrador II", semestre: 8, prer: ["Taller Integrador I"] },
  { nombre: "Internado Clínico I", semestre: 9, prer: ["Taller Integrador II"] },
  { nombre: "Gestión en Red Asistencial", semestre: 9, prer: ["Gestión del Cuidado en Matronería"] },
  { nombre: "Internado Clínico II", semestre: 10, prer: ["Internado Clínico I"] },
  { nombre: "Examen de Título", semestre: 10, prer: ["Internado Clínico II"] }
];

let aprobados = new Set();

function actualizarMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  let total = ramos.length;
  let completados = 0;

  for (let semestre = 1; semestre <= 10; semestre++) {
    const grupo = ramos.filter(r => r.semestre === semestre);
    if (grupo.length === 0) continue;

    const div = document.createElement("div");
    div.className = "semestre";
    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${semestre}`;
    div.appendChild(h2);

    for (let ramo of grupo) {
      const btn = document.createElement("div");
      btn.className = "ramo";

      const desbloqueado = ramo.prer.every(p => aprobados.has(p));
      if (!desbloqueado) {
        btn.classList.add("bloqueado");
      }

      if (aprobados.has(ramo.nombre)) {
        btn.classList.remove("bloqueado");
        btn.classList.add("aprobado");
      }

      btn.textContent = ramo.nombre;
      btn.onclick = () => {
        if (desbloqueado || aprobados.has(ramo.nombre)) {
          if (aprobados.has(ramo.nombre)) {
            aprobados.delete(ramo.nombre);
          } else {
            aprobados.add(ramo.nombre);
          }
          actualizarMalla();
        }
      };

      div.appendChild(btn);
      if (aprobados.has(ramo.nombre)) completados++;
    }

    contenedor.appendChild(div);
  }

  let porcentaje = Math.round((completados / total) * 100);
  document.getElementById("avance").textContent = `Avance: ${porcentaje}%`;
}

actualizarMalla();
