const malla = [
  // SEMESTRE 1
  { nombre: "Biología Celular", semestre: 1, prerrequisitos: [], tipo: "base" },
  { nombre: "Morfología Básica", semestre: 1, prerrequisitos: [], tipo: "base" },
  { nombre: "Química General y Orgánica", semestre: 1, prerrequisitos: [], tipo: "base" },
  { nombre: "Fundamentos de la Matronería", semestre: 1, prerrequisitos: [], tipo: "profesional" },
  { nombre: "Salud Mental en el Curso de la Vida", semestre: 1, prerrequisitos: [], tipo: "profesional" },

  // SEMESTRE 2
  { nombre: "Fisiología - Fisiopatología I", semestre: 2, prerrequisitos: ["Biología Celular"], tipo: "base" },
  { nombre: "Histomorfología", semestre: 2, prerrequisitos: ["Morfología Básica"], tipo: "base" },
  { nombre: "Bioquímica General", semestre: 2, prerrequisitos: ["Química General y Orgánica"], tipo: "base" },
  { nombre: "Salud Digital", semestre: 2, prerrequisitos: [], tipo: "profesional" },
  { nombre: "Anatomía Aplicada a la Gineco-Obstetricia", semestre: 2, prerrequisitos: ["Morfología Básica"], tipo: "profesional" },

  // SEMESTRE 3
  { nombre: "Fisiología - Fisiopatología II", semestre: 3, prerrequisitos: ["Fisiología - Fisiopatología I"], tipo: "base" },
  { nombre: "Salud Pública y Comunidad", semestre: 3, prerrequisitos: [], tipo: "profesional" },
  { nombre: "Proceso de Atención de Matronería", semestre: 3, prerrequisitos: ["Fundamentos de la Matronería"], tipo: "profesional" },
  { nombre: "Inmunología", semestre: 3, prerrequisitos: ["Biología Celular"], tipo: "base" },
  { nombre: "Psicología Evolutiva", semestre: 3, prerrequisitos: [], tipo: "base" },

  // SEMESTRE 4
  { nombre: "Microbiología y Parasitología", semestre: 4, prerrequisitos: ["Inmunología"], tipo: "base" },
  { nombre: "Salud Sexual y Reproductiva", semestre: 4, prerrequisitos: ["Proceso de Atención de Matronería"], tipo: "profesional" },
  { nombre: "Farmacología", semestre: 4, prerrequisitos: ["Bioquímica General"], tipo: "base" },
  { nombre: "Nutrición y Salud", semestre: 4, prerrequisitos: [], tipo: "base" },
  { nombre: "Taller de Habilidades Comunicativas", semestre: 4, prerrequisitos: [], tipo: "habilidad" },

  // SEMESTRE 5
  { nombre: "Embarazo Normal", semestre: 5, prerrequisitos: ["Salud Sexual y Reproductiva"], tipo: "profesional" },
  { nombre: "Ginecología", semestre: 5, prerrequisitos: ["Salud Sexual y Reproductiva"], tipo: "profesional" },
  { nombre: "Ecografía", semestre: 5, prerrequisitos: ["Anatomía Aplicada a la Gineco-Obstetricia"], tipo: "profesional" },
  { nombre: "Salud Infantil I", semestre: 5, prerrequisitos: ["Salud Sexual y Reproductiva"], tipo: "profesional" },
  { nombre: "Bioestadística", semestre: 5, prerrequisitos: [], tipo: "base" },

  // SEMESTRE 6
  { nombre: "Embarazo de Alto Riesgo", semestre: 6, prerrequisitos: ["Embarazo Normal"], tipo: "profesional" },
  { nombre: "Trabajo de Parto y Parto", semestre: 6, prerrequisitos: ["Embarazo Normal"], tipo: "profesional" },
  { nombre: "Salud Infantil II", semestre: 6, prerrequisitos: ["Salud Infantil I"], tipo: "profesional" },
  { nombre: "Gestión y Liderazgo en Salud", semestre: 6, prerrequisitos: [], tipo: "profesional" },
  { nombre: "Taller de Inglés Profesional", semestre: 6, prerrequisitos: [], tipo: "habilidad" },

  // SEMESTRE 7
  { nombre: "Atención en Puerperio", semestre: 7, prerrequisitos: ["Trabajo de Parto y Parto"], tipo: "profesional" },
  { nombre: "Neonatología", semestre: 7, prerrequisitos: ["Salud Infantil II"], tipo: "profesional" },
  { nombre: "Infecciones de Transmisión Sexual", semestre: 7, prerrequisitos: ["Microbiología y Parasitología"], tipo: "profesional" },
  { nombre: "Investigación en Salud I", semestre: 7, prerrequisitos: ["Bioestadística"], tipo: "base" },
  { nombre: "Taller Integrador I", semestre: 7, prerrequisitos: ["Trabajo de Parto y Parto", "Embarazo de Alto Riesgo"], tipo: "integrador" },

  // SEMESTRE 8
  { nombre: "Salud de la Mujer en el Ciclo Vital", semestre: 8, prerrequisitos: ["Ginecología"], tipo: "profesional" },
  { nombre: "Gestión del Cuidado en Matronería", semestre: 8, prerrequisitos: ["Gestión y Liderazgo en Salud"], tipo: "profesional" },
  { nombre: "Ética Profesional", semestre: 8, prerrequisitos: [], tipo: "habilidad" },
  { nombre: "Investigación en Salud II", semestre: 8, prerrequisitos: ["Investigación en Salud I"], tipo: "base" },
  { nombre: "Taller Integrador II", semestre: 8, prerrequisitos: ["Taller Integrador I"], tipo: "integrador" },

  // SEMESTRE 9
  { nombre: "Internado Clínico I", semestre: 9, prerrequisitos: ["Taller Integrador II"], tipo: "internado" },
  { nombre: "Gestión en Red Asistencial", semestre: 9, prerrequisitos: ["Gestión del Cuidado en Matronería"], tipo: "profesional" },

  // SEMESTRE 10
  { nombre: "Internado Clínico II", semestre: 10, prerrequisitos: ["Internado Clínico I"], tipo: "internado" },
  { nombre: "Examen de Título", semestre: 10, prerrequisitos: ["Internado Clínico II"], tipo: "evaluación" }
];