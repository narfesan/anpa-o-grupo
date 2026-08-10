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
  visible: false,
  // IMPORTANTE: estes logos son ficticios e serven só para ver o deseño.
  // Elimínaos cando subas os colaboradores reais.
  titulo: "Colaboradores · demo",
  velocidade: 28, // Duración dunha volta completa, en segundos
  logos: [
    {
      visible: true,
      nome: "Libraría Lúa · demostración",
      logo: "assets/colaboradores/demo-libraria-lua.svg",
      url: "",
    },
    {
      visible: true,
      nome: "Pan do Porto · demostración",
      logo: "assets/colaboradores/demo-pan-porto.svg",
      url: "",
    },
    {
      visible: true,
      nome: "Óptica Faro · demostración",
      logo: "assets/colaboradores/demo-optica-faro.svg",
      url: "",
    },
    {
      visible: true,
      nome: "Froita Miúda · demostración",
      logo: "assets/colaboradores/demo-froita-miuda.svg",
      url: "",
    },
    {
      visible: true,
      nome: "Deporte Ría · demostración",
      logo: "assets/colaboradores/demo-deporte-ria.svg",
      url: "",
    },
    {
      visible: true,
      nome: "Sorriso Dental · demostración",
      logo: "assets/colaboradores/demo-sorriso.svg",
      url: "",
    },
  ],
};

// ──────────────────────────────────────────────────────────────
//  AVISO (franxa informativa baixo a portada)
//  visible: false para ocultar por completo
// ──────────────────────────────────────────────────────────────
const AVISO = {
  visible: true,
  texto: "Xa podes consultar os horarios e prezos das actividades extraescolares do curso 2026–2027.",
  velocidade: 18, // Segundos que tarda o texto en cruzar a franxa
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
//  FICHAS DE ACTIVIDADES
//  Cada bloque crea unha ficha tipo "cromo".
//  Para cambiar a foto, sobe a nova imaxe a assets/images/actividades/
//  e modifica só o valor de imaxe.
//  Mostra só as fichas que teñen visible: true.
// ──────────────────────────────────────────────────────────────
const ACTIVIDADES = [
  {
    visible: true,
    titulo: "Acrobática + Parkour",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/acrobatica.jpg",
    imaxeAlt: "Nena practicando ximnasia nunha instalación deportiva",
    dias: "Luns e martes",
    horario: "16:00–17:00",
    idades: "Todas as idades",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre Acrobática + Parkour.",
  },
  {
    visible: true,
    titulo: "Xeometría",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/xeometria.jpg",
    imaxeAlt: "Exercicio de matemáticas e xeometría",
    dias: "Martes",
    horario: "16:00–17:00",
    idades: "3º–6º de Primaria",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre a actividade de Xeometría.",
  },
  {
    visible: true,
    titulo: "Inglés",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/ingles.jpg",
    imaxeAlt: "Libros, lapis e letras para aprender inglés",
    dias: "Mércores e venres",
    horario: "16:00–16:50",
    idades: "Todas as idades",
    nota: "Do 15 de setembro ao 15 de xuño",
    whatsappMsg: "Ola, quero información sobre a actividade de Inglés.",
  },
  {
    visible: true,
    titulo: "Creatividade Musical",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/musica.jpg",
    imaxeAlt: "Neno tocando un instrumento musical de cores",
    dias: "Mércores",
    horario: "16:00–17:00",
    idades: "Todas as idades",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre Creatividade Musical.",
  },
  {
    visible: true,
    titulo: "Patinaxe · Nivel I",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/patinaxe.jpg",
    imaxeAlt: "Nena aprendendo a patinar con proteccións",
    dias: "Xoves",
    horario: "16:00–17:00",
    idades: "Infantil e 1º de Primaria",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre Patinaxe Nivel I.",
  },
  {
    visible: true,
    titulo: "Cociña Divertida",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/cocina.jpg",
    imaxeAlt: "Nenos preparando unha receita de cociña",
    dias: "Xoves",
    horario: "16:00–17:30",
    idades: "Todas as idades",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre Cociña Divertida.",
  },
  {
    visible: true,
    titulo: "Aprende a pensar",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/pensar-ia.jpg",
    imaxeAlt: "Persoas traballando con criterio diante dun ordenador",
    dias: "Venres",
    horario: "16:00–17:00",
    idades: "6º de Primaria",
    nota: "Accede á IA con criterio",
    whatsappMsg: "Ola, quero información sobre Aprende a pensar.",
  },
  {
    visible: true,
    titulo: "Baile Moderno",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/baile.jpg",
    imaxeAlt: "Grupo practicando baile nun escenario",
    dias: "Venres",
    horario: "16:00–17:00",
    idades: "Todas as idades",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre Baile Moderno.",
  },
  {
    visible: true,
    titulo: "Fútbol Cidade de Ribeira",
    categoria: "Actividade externa",
    imaxe: "assets/images/actividades/futbol.jpg",
    imaxeAlt: "Nenos adestrando fútbol nun campo",
    dias: "Luns e mércores",
    horario: "Lun. 17:00–19:00 · Mér. 18:00–20:00",
    idades: "Nados/as en 2021 e 2022",
    nota: "Actividade non xestionada pola ANPA",
    whatsappMsg: "Ola, quero información sobre Fútbol Cidade de Ribeira.",
  },
  {
    visible: true,
    titulo: "Pandeireta",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/pandeireta.jpg",
    imaxeAlt: "Mans tocando un instrumento de percusión",
    dias: "Martes",
    horario: "17:00–18:00",
    idades: "Todas as idades",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre a actividade de Pandeireta.",
  },
  {
    visible: true,
    titulo: "Patinaxe · Nivel II",
    categoria: "Extraescolar no centro",
    imaxe: "assets/images/actividades/patinaxe.jpg",
    imaxeAlt: "Nena practicando patinaxe con proteccións",
    dias: "Xoves",
    horario: "17:00–18:00",
    idades: "2º–6º de Primaria",
    nota: "De outubro a maio",
    whatsappMsg: "Ola, quero información sobre Patinaxe Nivel II.",
  },
  {
    visible: true,
    titulo: "Multideporte",
    categoria: "Actividade externa",
    imaxe: "assets/images/actividades/multideporte.jpg",
    imaxeAlt: "Grupo de nenos participando nun xogo deportivo",
    dias: "Martes e venres",
    horario: "18:00–20:00",
    idades: "Desde os 5 anos",
    nota: "Actividade non xestionada pola ANPA",
    whatsappMsg: "Ola, quero información sobre Multideporte.",
  },
  {
    visible: true,
    titulo: "Artes plásticas · NUME",
    categoria: "Fóra do colexio",
    imaxe: "assets/images/actividades/arte.jpg",
    imaxeAlt: "Nenas e nenos creando nun obradoiro de arte",
    dias: "Luns, martes, xoves, venres e sábado",
    horario: "Varias quendas · 16:00–20:00 · sáb. 10:00–13:30",
    idades: "De 4 a 13 anos",
    nota: "Debuxo, pintura, barro e refugallo",
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
