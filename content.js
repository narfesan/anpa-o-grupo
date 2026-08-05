// =============================================================
//  CONTENT.JS — ANPA Santa Uxía · CEIP Plurilingüe O Grupo
//  Ribeira, A Coruña
// =============================================================
//
//  Este é o único ficheiro que necesitas editar para manter a web.
//
//  INSTRUCIÓNS BÁSICAS
//  • Cambia o texto entre comiñas:  "novo texto aquí"
//  • Para ocultar algo:  cambia visible: true  por  visible: false
//  • Non borres as comiñas " ", chaves { }, comas , nin corchetes [ ]
//  • Garda sempre unha copia de seguridade antes de cambiar nada
//  • Comproba a web no navegador despois de cada edición
//
// =============================================================

// ──────────────────────────────────────────────────────────────
//  CONFIGURACIÓN XERAL
//  IMPORTANTE: confirmar teléfono, correo, horario e datos de
//  pagamento antes de publicar.
// ──────────────────────────────────────────────────────────────
const CONFIG = {
  // Datos da ANPA
  nombreAnpa:    "ANPA Santa Uxía",
  nombreCentro:  "CEIP Plurilingüe O Grupo",
  localidade:    "Ribeira, A Coruña",
  cursoEscolar:  "2026–2027",

  // WhatsApp: número completo con prefixo de país, sen espazos
  // Formato España: "34" + número (sen o +)
  whatsappNumero: "34693649967",

  // Contacto
  email:    "anpaogrupo@yahoo.es",
  telefono: "693 64 99 67",
  enderezo: "Avenida Miguel Rodríguez Bautista, 22\n15960 Ribeira, A Coruña",

  // Horario de atención da ANPA (baleiro = non se mostra)
  horarioAtencion: "",

  // Ligazóns externas
  webCentro:  "https://www.edu.xunta.gal/centros/ceipgruporibeira/",
  mapasLink:  "https://maps.google.com/?q=CEIP+Plurilingüe+O+Grupo,+Ribeira",
  instagram:  "https://www.instagram.com/anpa.ceip.ogrupo/",
  facebook:   "https://www.facebook.com/people/Anpa-Santa-Ux%C3%ADa-do-CEIP-O-Grupo-de-Ribeira/100051818983434/",
  twitter:    "https://x.com/AnpaOGrupo",

  // URL pública da web
  urlCanonica: "https://anpaogrupo.es/",
};

// ──────────────────────────────────────────────────────────────
//  AVISO (franxa informativa baixo a portada)
//  visible: false para ocultar por completo
// ──────────────────────────────────────────────────────────────
const AVISO = {
  visible: true,
  texto: "Programación do curso 2026–2027 pendente de confirmación. Contacta coa ANPA para máis información.",
};

// ──────────────────────────────────────────────────────────────
//  ACTIVIDADES
//  Mostra só as que teñen visible: true
//  Copia un bloque completo { ... }, para engadir unha nova
//
//  Estados posibles:
//  "Inscrición aberta" | "Prazas completas" | "Proximamente"
//  | "Programación por confirmar" | "Actividade rematada"
// ──────────────────────────────────────────────────────────────
const ACTIVIDADES = [
  {
    visible: true,
    titulo:      "Patinaxe",
    categoria:   "Deporte",
    nivel:       "Primaria",
    horario:     "Consultar",
    lugar:       "Instalacións do centro",
    prezo:       "Consultar",
    descripcion: "Iniciación e perfeccionamento.",
    estado:      "Programación por confirmar",
    whatsappMsg: "Ola, quero información sobre a actividade de patinaxe da ANPA Santa Uxía.",
  },
  {
    visible: true,
    titulo:      "Parkour",
    categoria:   "Deporte",
    nivel:       "Primaria",
    horario:     "Consultar",
    lugar:       "CEIP O Grupo",
    prezo:       "Consultar",
    descripcion: "Movemento, coordinación e superación persoal.",
    estado:      "Programación por confirmar",
    whatsappMsg: "Ola, quero información sobre a actividade de parkour da ANPA Santa Uxía.",
  },
  {
    visible: true,
    titulo:      "Baile moderno",
    categoria:   "Baile",
    nivel:       "Primaria",
    horario:     "Consultar",
    lugar:       "CEIP O Grupo",
    prezo:       "Consultar",
    descripcion: "Ritmo, expresión e coreografías adaptadas á idade.",
    estado:      "Programación por confirmar",
    whatsappMsg: "Ola, quero información sobre a actividade de baile moderno da ANPA Santa Uxía.",
  },
  // Engade aquí máis actividades cando estean confirmadas.
  // {
  //   visible: false,
  //   titulo:      "Inglés",
  //   categoria:   "Idiomas",
  //   nivel:       "Primaria",
  //   horario:     "Luns e mércores 16:00–17:00",
  //   lugar:       "CEIP O Grupo",
  //   prezo:       "Consultar",
  //   descripcion: "Refuerzo e aprendizaxe en grupos reducidos.",
  //   estado:      "Inscrición aberta",
  //   whatsappMsg: "Ola, quero información sobre as clases de inglés da ANPA.",
  // },
];

// ──────────────────────────────────────────────────────────────
//  PRÓXIMO EVENTO
//  visible: false se non hai evento próximo
//  cartel: ruta ao ficheiro de imaxe (JPG, PNG ou WebP)
//          ou "" se non hai cartel aínda
//  fecha: formato "DD de mes de AAAA" (texto libre) ou "Por confirmar"
// ──────────────────────────────────────────────────────────────
const EVENTO = {
  visible: true,
  titulo:      "Próximo encontro da ANPA",
  fecha:       "Por confirmar",
  hora:        "Por confirmar",
  lugar:       "CEIP Plurilingüe O Grupo",
  descripcion: "Neste espazo publicaremos a próxima celebración, reunión ou actividade familiar organizada pola ANPA. Mantémonos en contacto.",
  cartel:      "",   // Exemplo: "assets/posters/festa-familias.jpg"
  whatsappMsg: "Ola, quero información sobre o próximo evento organizado pola ANPA Santa Uxía.",
};

// ──────────────────────────────────────────────────────────────
//  SERVIZOS
// ──────────────────────────────────────────────────────────────
const SERVIZOS = [
  {
    visible: true,
    titulo:      "Madrugadores",
    descripcion: "Información sobre horarios, condicións e prazas.",
    whatsappMsg: "Ola, quero información sobre o servizo de madrugadores.",
  },
  {
    visible: true,
    titulo:      "Comedor escolar",
    descripcion: "Información sobre horarios, funcionamento e prazas.",
    whatsappMsg: "Ola, quero información sobre o comedor escolar.",
  },
  {
    visible: true,
    titulo:      "Actividades de tarde",
    descripcion: "Consulta as propostas dispoñibles para facilitar a conciliación.",
    whatsappMsg: "Ola, quero información sobre as actividades de tarde.",
  },
];

// ──────────────────────────────────────────────────────────────
//  REDES SOCIAIS — "Así o vivimos"
//  Fotos de contexto (máx. 3). Usa rutas a assets/images/ ou URLs.
//  Deixar baleiro ("") para non mostrar esa foto.
// ──────────────────────────────────────────────────────────────
const REDES = {
  foto1: "https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?w=700&h=560&fit=crop&auto=format",
  foto1Alt: "Actividade creativa con pinturas",
  foto2: "assets/images/ogrupo.jpg",
foto2Alt: "CEIP Plurilingüe O Grupo de Ribeira",
  foto2Alt: "O colexio",
  foto3: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=700&h=560&fit=crop&auto=format",
  foto3Alt: "Obradoiro artístico con nenas e nenos",
};

// ──────────────────────────────────────────────────────────────
//  SOCIOS
// ──────────────────────────────────────────────────────────────
const SOCIOS = {
  cotaAnual:    "20 €",
  cotaDetalle:  "por familia e curso escolar",
  iban:          "ES81 2080 0303 1330 4001 6758",
  concepto:      "COTA ANPA",
};
