const ramos = [
  // --- 1° SEMESTRE ---
  { nombre: "Biología Celular", semestre: 1, tipo: "disciplinar" },
  { nombre: "Morfología Básica", semestre: 1, tipo: "disciplinar" },
  { nombre: "Química General y Orgánica", semestre: 1, tipo: "disciplinar" },
  { nombre: "Fundamentos de la Matronería", semestre: 1, tipo: "profesional" },
  { nombre: "Salud Mental en el Curso de la Vida", semestre: 1, tipo: "profesional" },
  { nombre: "Antropología", semestre: 1, tipo: "identidad" },

  // --- 2° SEMESTRE ---
  { nombre: "Anatomía Aplicada a la Gineco-Obstetricia", semestre: 2, tipo: "profesional", prereqs: ["Morfología Básica"] },
  { nombre: "Educación, Salud y Medio Ambiente", semestre: 2, tipo: "profesional" },
  { nombre: "Integrado de Fisiología - Fisiopatología I", semestre: 2, tipo: "disciplinar", prereqs: ["Biología Celular"] },
  { nombre: "Histoembriología", semestre: 2, tipo: "disciplinar", prereqs: ["Biología Celular"] },
  { nombre: "Bioquímica General", semestre: 2, tipo: "disciplinar", prereqs: ["Química General y Orgánica"] },
  { nombre: "Salud Digital", semestre: 2, tipo: "empleabilidad" },

  // --- 3° SEMESTRE ---
  { nombre: "Proceso de Atención en Matronería", semestre: 3, tipo: "profesional", prereqs: ["Anatomía Aplicada a la Gineco-Obstetricia"] },
  { nombre: "Bioestadística y Salud", semestre: 3, tipo: "disciplinar" },
  { nombre: "Integrado de Fisiología - Fisiopatología II", semestre: 3, tipo: "disciplinar", prereqs: ["Integrado de Fisiología - Fisiopatología I"] },
  { nombre: "Microbiología Médica", semestre: 3, tipo: "disciplinar", prereqs: ["Bioquímica General"] },
  { nombre: "Embriología y Genética", semestre: 3, tipo: "disciplinar", prereqs: ["Histoembriología"] },

  // --- 4° SEMESTRE ---
  { nombre: "Fisiología Obstétrica y Neonatal", semestre: 4, tipo: "disciplinar", prereqs: ["Integrado de Fisiología - Fisiopatología II"] },
  { nombre: "Fisiología Ginecológica y Sexual en el Curso de la Vida", semestre: 4, tipo: "disciplinar", prereqs: ["Integrado de Fisiología - Fisiopatología I", "Integrado de Fisiología - Fisiopatología II"] },
  { nombre: "Salud Poblacional", semestre: 4, tipo: "disciplinar" },
  { nombre: "Farmacología General", semestre: 4, tipo: "disciplinar", prereqs: ["Integrado de Fisiología - Fisiopatología I"] },
  { nombre: "Ética", semestre: 4, tipo: "identidad", prereqs: ["Antropología"] },
  { nombre: "Hito Evaluativo 1", semestre: 4, tipo: "profesional", prereqs: ["Proceso de Atención en Matronería", "Bioestadística y Salud", "Integrado de Fisiología - Fisiopatología II", "Microbiología Médica", "Embriología y Genética"] },

  // --- 5° SEMESTRE ---
  { nombre: "Proceso de Atención en Matronería Médico Quirúrgico", semestre: 5, tipo: "profesional", prereqs: ["Proceso de Atención en Matronería", "Microbiología Médica"] },
  { nombre: "Patología Obstétrica y Neonatal", semestre: 5, tipo: "disciplinar", prereqs: ["Fisiología Obstétrica y Neonatal", "Farmacología General"] },
  { nombre: "Patología Ginecológica en el Curso de la Vida", semestre: 5, tipo: "disciplinar", prereqs: ["Fisiología Ginecológica y Sexual en el Curso de la Vida", "Farmacología General"] },
  { nombre: "Epidemiología", semestre: 5, tipo: "disciplinar", prereqs: ["Salud Poblacional"] },
  { nombre: "Persona y Sociedad", semestre: 5, tipo: "identidad", prereqs: ["Ética"] },

  // --- 6° SEMESTRE ---
  { nombre: "Salud Familiar y Comunitaria", semestre: 6, tipo: "profesional" },
  { nombre: "Gestión y Calidad en Salud", semestre: 6, tipo: "profesional" },
  { nombre: "Consejería en Salud Sexual y Reproductiva", semestre: 6, tipo: "profesional", prereqs: ["Patología Ginecológica en el Curso de la Vida"] },
  { nombre: "Salud Reproductiva y Gerontológica", semestre: 6, tipo: "profesional", prereqs: ["Patología Ginecológica en el Curso de la Vida"] },
  { nombre: "Metodología de la Investigación", semestre: 6, tipo: "disciplinar" },
  { nombre: "Electivo I: Formación Integral", semestre: 6, tipo: "identidad" },

  // --- 7° SEMESTRE ---
  { nombre: "Matronería en Atención Primaria", semestre: 7, tipo: "profesional", prereqs: ["Salud Reproductiva y Gerontológica", "Patología Obstétrica y Neonatal"] },
  { nombre: "Integrado Perinatal y Ginecológico", semestre: 7, tipo: "profesional", prereqs: ["Patología Obstétrica y Neonatal", "Consejería en Salud Sexual y Reproductiva"] },
  { nombre: "Medicina Legal y Matronería", semestre: 7, tipo: "profesional" },
  { nombre: "Salud Basada en la Evidencia", semestre: 7, tipo: "disciplinar" },
  { nombre: "Bioética", semestre: 7, tipo: "disciplinar" },
  { nombre: "Electivo II: Formación Integral", semestre: 7, tipo: "identidad" },

  // --- 8° SEMESTRE ---
  { nombre: "Gestión Clínica y Atención Comunitaria", semestre: 8, tipo: "profesional", prereqs: ["Matronería en Atención Primaria"] },
  { nombre: "Gestión Clínica Obstétrica y Neonatal", semestre: 8, tipo: "profesional", prereqs: ["Integrado Perinatal y Ginecológico"] },
  { nombre: "Gestión Clínica Perinatal y Ginecológica", semestre: 8, tipo: "profesional", prereqs: ["Integrado Perinatal y Ginecológico"] },
  { nombre: "Proyecto de Investigación Interdisciplinaria", semestre: 8, tipo: "profesional", prereqs: ["Salud Basada en la Evidencia"] },
  { nombre: "Electivo III: Formación Integral", semestre: 8, tipo: "identidad" },
  { nombre: "Hito Evaluativo 2", semestre: 8, tipo: "profesional", prereqs: ["Matronería en Atención Primaria", "Integrado Perinatal y Ginecológico", "Bioética", "Medicina Legal y Matronería"] },

  // --- 9° SEMESTRE ---
  { nombre: "Internado de Especialidades en Matronería", semestre: 9, tipo: "profesional", prereqs: ["Gestión Clínica Obstétrica y Neonatal", "Gestión Clínica Perinatal y Ginecológica"] },
  { nombre: "Internado de Salud Familiar y Comunitaria", semestre: 9, tipo: "profesional", prereqs: ["Gestión Clínica y Atención Comunitaria"] },
  { nombre: "Gestión de Carrera y Desarrollo Profesional", semestre: 9, tipo: "empleabilidad" },

  // --- 10° SEMESTRE ---
  { nombre: "Internado Intrahospitalario", semestre: 10, tipo: "profesional", prereqs: ["Internado de Especialidades en Matronería", "Internado de Salud Familiar y Comunitaria"] },
  { nombre: "Electivo I", semestre: 10, tipo: "identidad" },
  { nombre: "Electivo II", semestre: 10, tipo: "identidad" }
];

// Cargar estado guardado
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function crearMalla() {
  const contenedor = document.querySelector(".semestres-container");
  for (let s = 1; s <= 10; s++) {
    const div = document.createElement("div");
    div.classList.add("semestre");
    div.innerHTML = `<h2>${s}° Semestre</h2>`;
    ramos
      .filter(r => r.semestre === s)
      .forEach(ramo => {
        const btn = document.createElement("div");
        btn.textContent = ramo.nombre;
        btn.classList.add("ramo", ramo.tipo);
        btn.dataset.nombre = ramo.nombre;

        if (aprobados.includes(ramo.nombre)) {
          btn.classList.add("aprobado");
        }

        // Si tiene prerrequisitos y no están todos aprobados
        if (
          ramo.prereqs &&
          !ramo.prereqs.every(pr => aprobados.includes(pr))
        ) {
          btn.classList.add("bloqueado");
        }

        btn.addEventListener("click", () => toggleRamo(ramo.nombre));
        div.appendChild(btn);
      });
    contenedor.appendChild(div);
  }
}

function toggleRamo(nombre) {
  const index = aprobados.indexOf(nombre);
  if (index >= 0) {
    aprobados.splice(index, 1);
  } else {
    aprobados.push(nombre);
  }
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
  document.querySelector(".semestres-container").innerHTML = "";
  crearMalla();
}

crearMalla();