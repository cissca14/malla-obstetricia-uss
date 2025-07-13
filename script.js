
const malla = document.getElementById('malla');
const avance = document.getElementById('avance');

const asignaturas = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Biología", tipo: "formacion-disciplinar" },
      { nombre: "Química", tipo: "formacion-disciplinar" },
      { nombre: "Matemática", tipo: "formacion-disciplinar" },
      { nombre: "Persona, salud y entorno", tipo: "formacion-identidad" }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Anatomía humana", tipo: "formacion-disciplinar" },
      { nombre: "Fisiología", tipo: "formacion-disciplinar" },
      { nombre: "Comunicación efectiva", tipo: "formacion-identidad" }
    ]
  }
  // Agrega los demás semestres y ramos aquí
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
