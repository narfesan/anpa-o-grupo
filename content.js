// =============================================================
//  CONTENT.JS — ANPA Santa Uxía · CEIP Plurilingüe O Grupo
//  Ribeira, A Coruña
// =============================================================
//
//  Este é o ficheiro principal para manter o contido da web.
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
//  ESTABLECEMENTOS COLABORADORES
//
//  1. Sube cada logo a assets/colaboradores/
//  2. Copia un bloque { ... } da lista e cambia os seus datos
//  3. Usa visible: false para ocultar temporalmente un logo
//
//  A franxa superior ocúltase soa se non hai logos visibles.
// ──────────────────────────────────────────────────────────────
const COLABORADORES = {
  visible: true,
  titulo: "Colaboran",
  velocidade: 32, // Duración dunha volta completa, en segundos
  logos: [
    // Exemplo para copiar cando subas un logo:
    // {
    //   visible: true,
    //   nome: "Nome do establecemento",
    //   logo: "assets/colaboradores/nome-establecemento.png",
    //   url: "", // Opcional. Pódese deixar baleiro.
    // },
  ],
};

// ──────────────────────────────────────────────────────────────
//  AVISO (franxa informativa baixo a portada)
//  visible: false para ocultar por completo
// ──────────────────────────────────────────────────────────────
const AVISO = {
  visible: true,
  texto: "Xa podes consultar os horarios e prezos das actividades extraescolares do curso 2026–2027.",
};

// ──────────────────────────────────────────────────────────────
//  PDF E RESUMO DE EXTRAESCOLARES
//
//  Para actualizar o documento sen tocar código, substitúe o PDF da
//  carpeta assets/docs/ por outro co mesmo nome.
// ──────────────────────────────────────────────────────────────
const EXTRAESCOLARES = {
  visible: true,
  etiqueta: "Curso 2026–2027",
  titulo: "Toda a oferta, nunha soa ollada",
  resumo: "Deporte, música, idiomas, creatividade e pensamento crítico ao longo de toda a semana.",
  periodo: "As actividades desenvólvense de outubro a maio, agás Inglés, do 15 de setembro ao 15 de xuño.",
  pdf: "assets/docs/actividades-extraescolares-2026-2027.pdf",
  botonTexto: "Ver horarios e prezos",
  whatsappMsg: "Ola, quero información sobre as actividades extraescolares do curso 2026-2027.",
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
    titulo:      "Movemento e deporte",
    categoria:   "Extraescolares",
    nivel:       "Infantil e Primaria",
    horario:     "De luns a venres",
    lugar:       "Centro e instalacións indicadas",
    prezo:       "Ver PDF",
    descripcion: "Acrobática e parkour, patinaxe, fútbol e multideporte.",
    estado:      "",
    whatsappMsg: "Ola, quero información sobre as actividades de movemento e deporte.",
  },
  {
    visible: true,
    titulo:      "Música e baile",
    categoria:   "Extraescolares",
    nivel:       "Primaria",
    horario:     "Martes, mércores e venres",
    lugar:       "CEIP O Grupo",
    prezo:       "Ver PDF",
    descripcion: "Pandeireta, creatividade musical e baile moderno.",
    estado:      "",
    whatsappMsg: "Ola, quero información sobre as actividades de música e baile.",
  },
  {
    visible: true,
    titulo:      "Aprendizaxe e creatividade",
    categoria:   "Extraescolares",
    nivel:       "Primaria",
    horario:     "De martes a venres",
    lugar:       "CEIP O Grupo",
    prezo:       "Ver PDF",
    descripcion: "Inglés, xeometría, cociña divertida e Aprende a pensar.",
    estado:      "",
    whatsappMsg: "Ola, quero información sobre as actividades de aprendizaxe e creatividade.",
  },
  {
    visible: true,
    titulo:      "Artes plásticas en NUME",
    categoria:   "Fóra do colexio",
    nivel:       "De 4 a 13 anos",
    horario:     "De luns a sábado",
    lugar:       "NUME Espazo Creativo",
    prezo:       "Ver PDF",
    descripcion: "Debuxo e pintura ou barro e refugallo.",
    estado:      "",
    whatsappMsg: "Ola, quero información sobre as actividades de artes plásticas en NUME.",
  },
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
  foto3: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=700&h=560&fit=crop&auto=format",
  foto3Alt: "Obradoiro artístico con nenas e nenos",
};

// ──────────────────────────────────────────────────────────────
//  BENEFICIOS DE SER SOCIO/A
//  Engade, elimina ou reordena bloques completos { ... }.
// ────────────────────────────────────────────────────────────────
const BENEFICIOS_SOCIOS = [
  {
    visible: true,
    titulo: "Actividades extraescolares",
    texto: "Acceso á oferta organizada ou xestionada pola ANPA.",
  },
  {
    visible: true,
    titulo: "Comedor e madrugadores",
    texto: "Acceso aos servizos que facilitan a conciliación familiar.",
  },
  {
    visible: true,
    titulo: "Descontos para as familias",
    texto: "Vantaxes en numerosos establecementos colaboradores.",
  },
  {
    visible: true,
    titulo: "Festas infantís gratuítas",
    texto: "Acceso gratuíto ás festas organizadas pola ANPA ao longo do curso.",
  },
];

// ──────────────────────────────────────────────────────────────
//  SOCIOS
// ──────────────────────────────────────────────────────────────
const SOCIOS = {
  cotaAnual:    "20 €",
  cotaDetalle:  "por familia e curso escolar",
  beneficiosTitulo: "Vantaxes de ser socio/a",
  iban:          "ES81 2080 0303 1330 4001 6758",
  concepto:      "COTA ANPA",
};
