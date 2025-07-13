
const malla = document.getElementById('malla');
const avance = document.getElementById('avance');

const asignaturas = [
  // SEMESTRE 1
  { id: "bio-cel", nombre: "Biología Celular", tipo: "formacion-disciplinar", prer: [] },
  { id: "morfo-bas", nombre: "Morfología Básica", tipo: "formacion-disciplinar", prer: [] },
  { id: "quimica", nombre: "Química General y Orgánica", tipo: "formacion-disciplinar", prer: [] },
  { id: "fund-matro", nombre: "Fundamentos de la Matronería", tipo: "formacion-profesional", prer: [] },
  { id: "salud-mental", nombre: "Salud Mental en el Curso de la Vida", tipo: "formacion-profesional", prer: [] },

  // SEMESTRE 2
  { id: "fisiopato1", nombre: "Fisiología - Fisiopatología I", tipo: "formacion-disciplinar", prer: ["bio-cel"] },
  { id: "histomorfologia", nombre: "Histomorfología", tipo: "formacion-disciplinar", prer: ["morfo-bas"] },
  { id: "bioquimica", nombre: "Bioquímica General", tipo: "formacion-disciplinar", prer: ["quimica"] },
  { id: "salud-digital", nombre: "Salud Digital", tipo: "formacion-profesional", prer: [] },
  { id: "anato-gine", nombre: "Anatomía Aplicada a la Gineco-Obstetricia", tipo: "formacion-profesional", prer: ["morfo-bas"] },
  { id: "educacion-salud", nombre: "Educación, Salud y Medio Ambiente", tipo: "formacion-profesional", prer: [] },
  { id: "antropologia", nombre: "Antropología", tipo: "formacion-identidad", prer: [] },

  // SEMESTRE 3
  { id: "fisiopato2", nombre: "Fisiología - Fisiopatología II", tipo: "formacion-disciplinar", prer: ["fisiopato1"] },
  { id: "embriogenetica", nombre: "Embriología y Genética", tipo: "formacion-disciplinar", prer: ["bioquimica"] },
  { id: "microbiologia", nombre: "Microbiología Médica", tipo: "formacion-disciplinar", prer: ["bioquimica"] },
  { id: "bioestadistica", nombre: "Bioestadística y Salud", tipo: "formacion-profesional", prer: [] },
  { id: "proc-matroneria", nombre: "Proceso de Atención en Matronería", tipo: "formacion-profesional", prer: ["fund-matro"] },

  // SEMESTRE 4
  { id: "farmacologia", nombre: "Farmacología General", tipo: "formacion-disciplinar", prer: ["bioquimica"] },
  { id: "salud-poblacional", nombre: "Salud Poblacional", tipo: "formacion-profesional", prer: [] },
  { id: "fisio-gineco", nombre: "Fisiología Ginecológica", tipo: "formacion-profesional", prer: ["fisiopato2"] },
  { id: "fisio-obstetrica", nombre: "Fisiología Obstétrica y Neonatal", tipo: "formacion-profesional", prer: ["fisiopato2"] },
  { id: "etica", nombre: "Ética", tipo: "formacion-identidad", prer: [] },

  // SEMESTRE 5
  { id: "epidemiologia", nombre: "Epidemiología", tipo: "formacion-disciplinar", prer: ["bioestadistica"] },
  { id: "proc-medicoq", nombre: "Proceso Atención Médico Quirúrgica", tipo: "formacion-profesional", prer: ["proc-matroneria"] },
  { id: "patologia-obst", nombre: "Patología Obstétrica y Neonatal", tipo: "formacion-profesional", prer: ["fisio-obstetrica"] },
  { id: "patologia-gine", nombre: "Patología Ginecológica", tipo: "formacion-profesional", prer: ["fisio-gineco"] },
  { id: "persona-sociedad", nombre: "Persona y Sociedad", tipo: "formacion-identidad", prer: [] },

  // SEMESTRE 6
  { id: "metodologia", nombre: "Metodología de la Investigación", tipo: "formacion-disciplinar", prer: ["epidemiologia"] },
  { id: "salud-familiar", nombre: "Salud Familiar y Comunitaria", tipo: "formacion-profesional", prer: ["salud-poblacional"] },
  { id: "gestion-calidad", nombre: "Gestión y Calidad en Salud", tipo: "formacion-profesional", prer: [] },
  { id: "consejeria", nombre: "Consejería en SSR", tipo: "formacion-profesional", prer: ["fisio-gineco"] },
  { id: "electivo1", nombre: "Electivo I: Identidad", tipo: "formacion-identidad", prer: [] },

  // SEMESTRE 7
  { id: "bioetica", nombre: "Bioética", tipo: "formacion-disciplinar", prer: ["etica"] },
  { id: "matroneria-aps", nombre: "Matronería en APS", tipo: "formacion-profesional", prer: ["salud-familiar"] },
  { id: "integrado-peri", nombre: "Integrado Perinatal y Ginecológico", tipo: "formacion-profesional", prer: ["patologia-obst", "patologia-gine"] },
  { id: "medic-legal", nombre: "Medicina Legal y Matronería", tipo: "formacion-profesional", prer: [] },
  { id: "salud-evidencia", nombre: "Salud Basada en la Evidencia", tipo: "formacion-profesional", prer: ["metodologia"] },
  { id: "electivo2", nombre: "Electivo II: Identidad", tipo: "formacion-identidad", prer: ["electivo1"] },

  // SEMESTRE 8
  { id: "gestion-comunitaria", nombre: "Gestión Clínica y Atención Comunitaria", tipo: "formacion-profesional", prer: ["matroneria-aps"] },
  { id: "gestion-obst", nombre: "Gestión Clínica Obstétrica y Neonatal", tipo: "formacion-profesional", prer: ["integrado-peri"] },
  { id: "gestion-gine", nombre: "Gestión Clínica Perinatal y Ginecológica", tipo: "formacion-profesional", prer: ["integrado-peri"] },
  { id: "proy-investigacion", nombre: "Proyecto de Investigación Interdisciplinaria", tipo: "formacion-profesional", prer: ["salud-evidencia"] },
  { id: "electivo3", nombre: "Electivo III: Identidad", tipo: "formacion-identidad", prer: ["electivo2"] },

  // SEMESTRE 9
  { id: "internado-especialidades", nombre: "Internado Especialidades", tipo: "formacion-profesional", prer: ["gestion-obst", "gestion-gine"] },
  { id: "internado-comunitaria", nombre: "Internado Salud Familiar", tipo: "formacion-profesional", prer: ["gestion-comunitaria"] },
  { id: "electivo-final1", nombre: "Electivo Libre I", tipo: "formacion-identidad", prer: ["electivo3"] },

  // SEMESTRE 10
  { id: "internado-hospital", nombre: "Internado Intrahospitalario", tipo: "formacion-profesional", prer: ["internado-especialidades"] },
  { id: "electivo-final2", nombre: "Electivo Libre II", tipo: "formacion-identidad", prer: ["electivo-final1"] },
  { id: "gestion-carrera", nombre: "Gestión de Carrera y Desarrollo Profesional", tipo: "gestion-empleabilidad", prer: [] }
];

let total = asignaturas.length, aprobados = 0;

function renderMalla() {
  malla.innerHTML = '';
  asignaturas.forEach((r) => {
    const ramo = document.createElement('div');
    ramo.className = `ramo ${r.tipo}`;
    ramo.textContent = r.nombre;
    ramo.dataset.id = r.id;
    ramo.dataset.prer = JSON.stringify(r.prer);
    ramo.onclick = () => {
      if (ramo.classList.contains('bloqueado')) return;
      ramo.classList.toggle('aprobado');
      calcularAvance();
      actualizarBloqueos();
    };
    malla.appendChild(ramo);
  });
  actualizarBloqueos();
  calcularAvance();
}

function calcularAvance() {
  aprobados = document.querySelectorAll('.ramo.aprobado').length;
  const porcentaje = ((aprobados / total) * 100).toFixed(1);
  avance.textContent = `Avance: ${porcentaje}%`;
}

function actualizarBloqueos() {
  document.querySelectorAll('.ramo').forEach((el) => {
    const prer = JSON.parse(el.dataset.prer);
    const aprobadas = Array.from(document.querySelectorAll('.ramo.aprobado')).map(e => e.dataset.id);
    const cumple = prer.every(p => aprobadas.includes(p));
    if (!cumple && prer.length > 0) {
      el.classList.add('bloqueado');
    } else {
      el.classList.remove('bloqueado');
    }
  });
}

renderMalla();
