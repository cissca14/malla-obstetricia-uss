
const malla = document.getElementById('malla');
const avance = document.getElementById('avance');

const asignaturas = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Biología Celular", tipo: "formacion-disciplinar" },
      { nombre: "Morfología Básica", tipo: "formacion-disciplinar" },
      { nombre: "Química General y Orgánica", tipo: "formacion-disciplinar" },
      { nombre: "Fundamentos de la Matronería", tipo: "formacion-profesional" },
      { nombre: "Salud Mental en el Curso de la Vida", tipo: "formacion-profesional" }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Integrado de Fisiología - Fisiopatología I", tipo: "formacion-disciplinar" },
      { nombre: "Histomorfología", tipo: "formacion-disciplinar" },
      { nombre: "Bioquímica General", tipo: "formacion-disciplinar" },
      { nombre: "Salud Digital", tipo: "formacion-profesional" },
      { nombre: "Anatomía Aplicada a la Gineco-Obstetricia", tipo: "formacion-profesional" },
      { nombre: "Educación, Salud y Medio Ambiente", tipo: "formacion-profesional" },
      { nombre: "Antropología", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Integrado de Fisiología - Fisiopatología II", tipo: "formacion-disciplinar" },
      { nombre: "Embriología y Genética", tipo: "formacion-disciplinar" },
      { nombre: "Microbiología Médica", tipo: "formacion-disciplinar" },
      { nombre: "Bioestadística y Salud", tipo: "formacion-profesional" },
      { nombre: "Proceso de Atención en Matronería", tipo: "formacion-profesional" }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Farmacología General", tipo: "formacion-disciplinar" },
      { nombre: "Salud Poblacional", tipo: "formacion-profesional" },
      { nombre: "Fisiología Ginecológica y su Vinculación con el Curso de la Vida", tipo: "formacion-profesional" },
      { nombre: "Fisiología Obstétrica y Neonatal", tipo: "formacion-profesional" },
      { nombre: "Ética", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Epidemiología", tipo: "formacion-disciplinar" },
      { nombre: "Proceso de Atención en Matronería Médico Quirúrgica", tipo: "formacion-profesional" },
      { nombre: "Patología Obstétrica y Neonatal", tipo: "formacion-profesional" },
      { nombre: "Patología Ginecológica en el Curso de la Vida", tipo: "formacion-profesional" },
      { nombre: "Persona y Sociedad", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Metodología de la Investigación", tipo: "formacion-disciplinar" },
      { nombre: "Salud Familiar y Comunitaria", tipo: "formacion-profesional" },
      { nombre: "Gestión y Calidad en Salud", tipo: "formacion-profesional" },
      { nombre: "Consejería en Salud Sexual y Reproductiva", tipo: "formacion-profesional" },
      { nombre: "Electivo I: Formación en Identidad", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Bioética", tipo: "formacion-disciplinar" },
      { nombre: "Matronería en Atención Primaria", tipo: "formacion-profesional" },
      { nombre: "Integrado Perinatal y Ginecológico", tipo: "formacion-profesional" },
      { nombre: "Medicina Legal y Matronería", tipo: "formacion-profesional" },
      { nombre: "Salud Basada en la Evidencia", tipo: "formacion-profesional" },
      { nombre: "Electivo II: Formación en Identidad", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Gestión Clínica y Atención Comunitaria", tipo: "formacion-profesional" },
      { nombre: "Gestión Clínica Obstétrica y Neonatal", tipo: "formacion-profesional" },
      { nombre: "Gestión Clínica Perinatal y Ginecológica", tipo: "formacion-profesional" },
      { nombre: "Proyecto de Investigación Interdisciplinaria", tipo: "formacion-profesional" },
      { nombre: "Electivo III: Formación en Identidad", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "9° Semestre",
    ramos: [
      { nombre: "Internado de Especialidades en Matronería", tipo: "formacion-profesional" },
      { nombre: "Internado en Salud Familiar y Comunitaria", tipo: "formacion-profesional" },
      { nombre: "Electivo I", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "10° Semestre",
    ramos: [
      { nombre: "Internado Intrahospitalario", tipo: "formacion-profesional" },
      { nombre: "Electivo II", tipo: "formacion-identidad" },
      { nombre: "Gestión de Carrera y Desarrollo Profesional", tipo: "gestion-empleabilidad" }
    ]
  }
];

let total = 0, aprobados = 0;

function renderMalla() {
  malla.innerHTML = '';
  total = 0;
  aprobados = 0;
  asignaturas.forEach((sem) => {
    const cont = document.createElement('div');
    cont.className = 'semestre';
    const title = document.createElement('h2');
    title.textContent = sem.semestre;
    cont.appendChild(title);
    sem.ramos.forEach((r) => {
      const ramo = document.createElement('div');
      ramo.className = `ramo ${r.tipo}`;
      ramo.textContent = r.nombre;
      ramo.onclick = () => {
        ramo.classList.toggle('aprobado');
        calcularAvance();
      };
      cont.appendChild(ramo);
      total++;
    });
    malla.appendChild(cont);
  });
}

function calcularAvance() {
  aprobados = document.querySelectorAll('.ramo.aprobado').length;
  const porcentaje = ((aprobados / total) * 100).toFixed(1);
  avance.textContent = `Avance: ${porcentaje}%`;
}

renderMalla();