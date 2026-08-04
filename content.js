// =============================================================
//  CONTENT.JS — Ficheiro de contidos da web da ANPA Santa Uxía
//  CEIP Plurilingüe O Grupo · Ribeira, Galicia
// =============================================================
//
//  INSTRUCIÓNS BÁSICAS
//  • Cambia o texto entre comiñas: "texto aquí"
//  • Non borres as comiñas, as chaves { } nin as comas ,
//  • Para ocultar un elemento: cambia  visible: true  por  visible: false
//  • Garda sempre unha copia antes de facer cambios
//  • Comproba a web despois de cada modificación
//
// =============================================================

// ──────────────────────────────────────────────────────────────
//  INFORMACIÓN XERAL DA ANPA
// ──────────────────────────────────────────────────────────────
const CONFIG = {
  nombreAnpa: "ANPA Santa Uxía",
  nombreCentro: "CEIP Plurilingüe O Grupo",
  localidade: "Ribeira, A Coruña",
  cursoEscolar: "2026-2027",

  // IMPORTANTE: confirmar teléfono, correo, horario e datos de pagamento antes de publicar.
  // Para o WhatsApp, pon o número completo con prefixo do país, sen espazos nin guións
  // Exemplo España: "34612345678"  (sen o +)
  whatsappNumero: "34693649967",
  email: "anpaogrupo@yahoo.es",
  telefono: "693 64 99 67",
  enderezo: "Avenida Miguel Rodríguez Bautista, 22, 15960 Ribeira",
  mapasLink: "https://maps.google.com/?q=CEIP+Plurilingüe+O+Grupo+Ribeira",

  // Dominio público da web
  urlCanonica: "https://anpaogrupo.es",

  // Identidade visual (ficheiros xa subidos á carpeta assets)
  logoAnpa: "assets/logo-anpa-santa-uxia-alta-resolucion.png",
  logoCentro: "assets/logo-ceip-o-grupo-alta-resolucion.png",

  // Horario de atención da ANPA (déixao baleiro se non está confirmado)
  horarioAtencion: "",  // Exemplo: "Luns e mércores de 9:00 a 10:00"

  // Web oficial do centro
  webCentro: "https://www.edu.xunta.gal/centros/ceipgruporibeira/",
  abalatLink: "https://www.edu.xunta.gal/espazoAbalar/",

  // Redes sociais oficiais da ANPA
  facebook: "https://www.facebook.com/people/Anpa-Santa-Ux%C3%ADa-do-CEIP-O-Grupo-de-Ribeira/100051818983434/?locale=es_ES",
  instagram: "https://www.instagram.com/anpa.ceip.ogrupo/",
  x: "https://x.com/AnpaOGrupo",
};

// ──────────────────────────────────────────────────────────────
//  AVISO IMPORTANTE (banner destacado baixo o hero)
// ──────────────────────────────────────────────────────────────
const AVISO = {
  visible: false,
  etiqueta: "Aviso importante",
  titulo: "Preparando o curso 2026-2027",
  texto: "Publicaremos aquí os próximos avisos e prazos de inscrición cando estean confirmados.",
  botonTexto: "Ver actividades",
  botonAccion: "actividades",  // "actividades", "eventos", "socios" ou unha URL
};

// ──────────────────────────────────────────────────────────────
//  COTA DE SOCIOS/AS
// ──────────────────────────────────────────────────────────────
const SOCIOS = {
  cotaAnual: "15 €",
  cotaDescripcion: "por familia e curso escolar",
  // Datos bancarios (déixalo baleiro para non mostrar; non inventar)
  iban: "",  // Exemplo: "ES12 3456 7890 1234 5678 9012"
  titular: "",
  // Formulario descargable (pon a ruta ao ficheiro ou déixao baleiro)
  formularioUrl: "",  // Engadir só cando o formulario real estea subido
};

// ──────────────────────────────────────────────────────────────
//  ACTIVIDADES EXTRAESCOLARES
//  Copia un bloque completo para engadir unha nova actividade
//  Estes bloques son exemplos: mantelos ocultos ata confirmar os datos.
// ──────────────────────────────────────────────────────────────
const ACTIVIDADES = [
  {
    visible: false,
    titulo: "Patinaxe",
    categoria: "Deporte",
    idadeRecomendada: "6-12 anos",
    dias: "Luns e mércores",
    horario: "16:00–17:00",
    lugar: "Pavillón municipal",
    prezoSocios: "",       // Deixar baleiro se non está confirmado
    prezoNonSocios: "",
    descripcion: "Aprende a patinar de forma segura e divertida. Inclúe material básico. Prazas limitadas.",
    estado: "Inscrición aberta",  // Opcións: "Inscrición aberta" | "Prazas completas" | "Proximamente" | "Só socios/as" | "Actividade rematada"
    imaxe: "assets/images/patinaxe.jpg",  // ← subir imaxe ou deixar baleiro
    icono: "🛼",  // Emoji de respaldo se non hai imaxe
  },
  {
    visible: false,
    titulo: "Parkour",
    categoria: "Deporte",
    idadeRecomendada: "7-12 anos",
    dias: "Martes e xoves",
    horario: "16:00–17:00",
    lugar: "Instalacións do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Movemento, coordinación e superación persoal a través do parkour adaptado á infancia.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/parkour.jpg",
    icono: "🏃",
  },
  {
    visible: false,
    titulo: "Ximnasia acrobática",
    categoria: "Deporte",
    idadeRecomendada: "5-11 anos",
    dias: "Venres",
    horario: "16:00–17:30",
    lugar: "Ximnasio do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Traballo de equilibrio, flexibilidade e traballo en equipo nunha disciplina deportiva única.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/ximnasia.jpg",
    icono: "🤸",
  },
  {
    visible: false,
    titulo: "Baloncesto",
    categoria: "Deporte",
    idadeRecomendada: "6-12 anos",
    dias: "Luns, mércores e venres",
    horario: "17:00–18:00",
    lugar: "Pista deportiva do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Iniciación e perfeccionamento no baloncesto: técnica, xogo en equipo e valores deportivos.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/baloncesto.jpg",
    icono: "🏀",
  },
  {
    visible: false,
    titulo: "Fútbol",
    categoria: "Deporte",
    idadeRecomendada: "5-12 anos",
    dias: "Martes e xoves",
    horario: "17:00–18:00",
    lugar: "Campo de fútbol do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Escola de fútbol con adestramento técnico, táctico e en valores para todas as idades.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/futbol.jpg",
    icono: "⚽",
  },
  {
    visible: false,
    titulo: "Baile moderno",
    categoria: "Música e baile",
    idadeRecomendada: "6-12 anos",
    dias: "Mércores",
    horario: "16:30–17:30",
    lugar: "Salón de actos do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Iniciación ao baile moderno: ritmo, expresión corporal e coreografías adaptadas á idade.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/baile.jpg",
    icono: "💃",
  },
  {
    visible: false,
    titulo: "Música divertida",
    categoria: "Música e baile",
    idadeRecomendada: "4-8 anos",
    dias: "Martes",
    horario: "16:00–17:00",
    lugar: "Aula de música do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Descobre o mundo da música de forma lúdica e creativa: ritmo, melodía e expresión musical.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/musica.jpg",
    icono: "🎵",
  },
  {
    visible: false,
    titulo: "Inglés",
    categoria: "Idiomas",
    idadeRecomendada: "5-12 anos",
    dias: "Luns e mércores",
    horario: "16:00–17:00",
    lugar: "Aulas do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Refuerzo e aprendizaxe do inglés en grupos reducidos con metodoloxía comunicativa e lúdica.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/ingles.jpg",
    icono: "🇬🇧",
  },
  {
    visible: false,
    titulo: "Cociña infantil creativa",
    categoria: "Creatividade",
    idadeRecomendada: "6-12 anos",
    dias: "Venres",
    horario: "16:30–18:00",
    lugar: "Dependencias do centro",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Obradoiro de cociña para nenos e nenas: receitas sinxelas, traballo en equipo e hábitos saudables.",
    estado: "Inscrición aberta",
    imaxe: "assets/images/cocina.jpg",
    icono: "🍳",
  },
  {
    visible: false,
    titulo: "Obradoiros multidisciplinares",
    categoria: "Creatividade",
    idadeRecomendada: "4-12 anos",
    dias: "Consultar",
    horario: "Consultar",
    lugar: "CEIP Plurilingüe O Grupo",
    prezoSocios: "",
    prezoNonSocios: "",
    descripcion: "Obradoiros temáticos que combinan arte, ciencia, natureza e expresión: unha proposta diferente cada trimestre.",
    estado: "Proximamente",
    imaxe: "assets/images/obradoiros.jpg",
    icono: "🎨",
  },
];

// ──────────────────────────────────────────────────────────────
//  SERVIZOS PARA AS FAMILIAS
// ──────────────────────────────────────────────────────────────
const SERVIZOS = [
  {
    visible: true,
    id: "madrugadores",
    titulo: "Madrugadores",
    icono: "🌅",
    descripcion: "Servizo de atención antes do inicio das clases para facilitar a conciliación das familias. Consulta coa ANPA as condicións, horarios e prazas dispoñibles.",
    horario: "",  // Exemplo: "7:30–9:00"
    prezos: "",   // Exemplo: "Consultar"
    informacionExtra: "",
    whatsappMensaxe: "Ola, quero información sobre o servizo de madrugadores.",
  },
  {
    visible: true,
    id: "comedor",
    titulo: "Comedor escolar",
    icono: "🍽️",
    descripcion: "Información para as familias sobre o servizo de comedor escolar. Consulta coa ANPA as condicións, horarios, menús e prazas dispoñibles.",
    horario: "",  // Exemplo: "14:00–16:00"
    prezos: "",
    menuUrl: "",  // Ruta ao PDF do menú mensual
    inscripcionUrl: "",
    alergias: "Para información sobre alergias e intolerancias alimentarias, contacta coa ANPA.",
    whatsappMensaxe: "Ola, quero información sobre o comedor escolar.",
  },
  {
    visible: true,
    id: "actividades-tarde",
    titulo: "Actividades de tarde",
    icono: "🌤️",
    descripcion: "Programa de actividades extraescolares e obradoiros de tarde para o apoio á conciliación familiar. Consulta a programación actualizada de cada curso.",
    horario: "",
    prezos: "",
    informacionExtra: "",
    whatsappMensaxe: "Ola, quero información sobre as actividades de tarde.",
  },
];

// ──────────────────────────────────────────────────────────────
//  EVENTOS E CARTEIS
//  Copia un bloque completo para engadir un novo evento
//  Formato de data: "AAAA-MM-DD" (ano-mes-día)
//  Estes bloques son exemplos: mantelos ocultos ata confirmar os datos.
// ──────────────────────────────────────────────────────────────
const EVENTOS = [
  {
    visible: false,
    destacado: true,
    titulo: "Festa das familias",
    fechaInicio: "2026-09-20",
    fechaFin: "",
    hora: "17:00",
    lugar: "CEIP Plurilingüe O Grupo",
    resumen: "Unha tarde para compartir en comunidade. Música, xogos e actividades para toda a familia. Ven coñecer a ANPA e o que preparamos para o novo curso.",
    cartel: "assets/posters/festa-familias.jpg",  // ← subir o cartel real
    inscripcion: "",  // URL de inscrición (déixalo baleiro se non é necesario)
    gratuitoSocios: true,
  },
  {
    visible: false,
    destacado: false,
    titulo: "Reunión informativa de inicio de curso",
    fechaInicio: "2026-09-10",
    fechaFin: "",
    hora: "18:00",
    lugar: "Salón de actos do CEIP Plurilingüe O Grupo",
    resumen: "Presentación das actividades, servizos e proxectos da ANPA para o novo curso. Resolución de dúbidas e benvida ás novas familias.",
    cartel: "",
    inscripcion: "",
    gratuitoSocios: false,
  },
  {
    visible: false,
    destacado: false,
    titulo: "Magosto da comunidade educativa",
    fechaInicio: "2025-11-07",
    fechaFin: "",
    hora: "12:00",
    lugar: "Patio do CEIP Plurilingüe O Grupo",
    resumen: "Celebración do magosto con toda a comunidade educativa. Castañas, música e festa galega para todas as idades.",
    cartel: "assets/posters/magosto.jpg",
    inscripcion: "",
    gratuitoSocios: false,
  },
  {
    visible: false,
    destacado: false,
    titulo: "Entroido 2026",
    fechaInicio: "2026-02-28",
    fechaFin: "",
    hora: "11:00",
    lugar: "CEIP Plurilingüe O Grupo",
    resumen: "Desfile de disfraces, actuacións e festa de entroido para o alumnado e as familias do centro.",
    cartel: "",
    inscripcion: "",
    gratuitoSocios: false,
  },
];

// ──────────────────────────────────────────────────────────────
//  DOCUMENTOS E LIGAZÓNS ÚTILES
//  Déixar baleiro ("") os que aínda non están dispoñibles
// ──────────────────────────────────────────────────────────────
const DOCUMENTOS = [
  // Documentos da ANPA
  {
    visible: false,
    tipo: "anpa",
    titulo: "Formulario de alta de socio/a",
    descripcion: "Formulario para facerse membro da ANPA Santa Uxía.",
    url: "",
    icono: "📄",
  },
  {
    visible: true,
    tipo: "anpa",
    titulo: "Inscrición en actividades extraescolares",
    descripcion: "Formulario de inscrición nas actividades organizadas pola ANPA.",
    url: "",  // ← engadir cando estea dispoñible
    icono: "📝",
  },
  {
    visible: true,
    tipo: "anpa",
    titulo: "Información sobre madrugadores",
    descripcion: "Prezos, horarios e normas do servizo de madrugadores.",
    url: "",
    icono: "🌅",
  },
  {
    visible: true,
    tipo: "anpa",
    titulo: "Información sobre o comedor",
    descripcion: "Prezos, horarios e funcionamento do servizo de comedor escolar.",
    url: "",
    icono: "🍽️",
  },
  {
    visible: true,
    tipo: "anpa",
    titulo: "Menú mensual do comedor",
    descripcion: "Menú do mes actual do comedor escolar.",
    url: "",
    icono: "📋",
  },
  {
    visible: true,
    tipo: "anpa",
    titulo: "Calendario de actividades",
    descripcion: "Calendario anual de actividades e eventos da ANPA.",
    url: "",
    icono: "📅",
  },
  // Información oficial do centro
  {
    visible: true,
    tipo: "centro",
    titulo: "Web oficial do CEIP O Grupo",
    descripcion: "Páxina oficial do centro educativo na Xunta de Galicia.",
    url: "https://www.edu.xunta.gal/centros/ceipgruporibeira/",
    icono: "🏫",
    externo: true,
  },
  {
    visible: true,
    tipo: "centro",
    titulo: "Espazo Abalar",
    descripcion: "Plataforma de comunicación oficial entre o centro e as familias.",
    url: "https://www.edu.xunta.gal/espazoAbalar/",
    icono: "📱",
    externo: true,
  },
  {
    visible: true,
    tipo: "centro",
    titulo: "Calendario escolar",
    descripcion: "Calendario escolar oficial da Consellería de Educación.",
    url: "https://www.edu.xunta.gal/portal/",
    icono: "📆",
    externo: true,
  },
];

// ──────────────────────────────────────────────────────────────
//  PREGUNTAS FRECUENTES
// ──────────────────────────────────────────────────────────────
const FAQS = [
  {
    visible: true,
    pregunta: "Quen pode facerse socio/a da ANPA?",
    resposta: "Poden asociarse as familias do alumnado matriculado no CEIP Plurilingüe O Grupo. Se tes algunha dúbida sobre a alta, contacta coa ANPA.",
  },
  {
    visible: true,
    pregunta: "A cota é por alumno/a ou por familia?",
    resposta: "A cota é de 15 € por familia e curso escolar, independentemente do número de fillos ou fillas matriculados no centro.",
    destacada: true,  // Esta resposta aparece resaltada
  },
  {
    visible: false,
    pregunta: "Canto custa asociarse?",
    resposta: "A cota anual é de 15 € por familia e curso escolar. Este importe contribúe a financiar as actividades, servizos e proxectos que a ANPA organiza para toda a comunidade educativa.",
  },
  {
    visible: true,
    pregunta: "Como podo inscribirme nunha actividade extraescolar?",
    resposta: "Cando se publique unha actividade, indicaremos nesta web o prazo e o procedemento de inscrición. Tamén podes consultar coa ANPA por WhatsApp ou correo electrónico.",
  },
  {
    visible: false,
    pregunta: "As actividades son só para socios/as?",
    resposta: "A maioría das actividades están abertas a todo o alumnado do centro, aínda que os socios e socias adoitan ter prezos reducidos ou acceso preferente. Algunhas actividades específicas poden estar reservadas exclusivamente para membros da ANPA.",
  },
  {
    visible: true,
    pregunta: "Como solicito o comedor ou o servizo de madrugadores?",
    resposta: "Podes solicitar información sobre ambos servizos contactando coa ANPA por WhatsApp ou correo electrónico. Indicarémosche os pasos, prazos e documentación necesaria en cada caso.",
  },
  {
    visible: false,
    pregunta: "Como podo colaborar coa ANPA?",
    resposta: "Hai moitas formas de colaborar: axudando na organización de eventos, propoñendo actividades, aportando coñecementos ou experiencia profesional, ou simplemente participando nas reunións e iniciativas da asociación. Contacta connosco por WhatsApp e dinos como queres axudar.",
  },
  {
    visible: false,
    pregunta: "Onde se publican os cambios de horario ou cancellacións?",
    resposta: "Os cambios e avisos importantes publícanse nesta web e comunícanse a través do Espazo Abalar e dos canais habituais de comunicación do centro. Recomendamos revisar regularmente esta web e as comunicacións oficiais do colexio.",
  },
  {
    visible: true,
    pregunta: "Esta web substitúe as comunicacións oficiais do colexio?",
    resposta: "Non. Esta é a web informativa da ANPA Santa Uxía. As comunicacións oficiais do CEIP Plurilingüe O Grupo publícanse a través do Espazo Abalar e das canles establecidas polo propio centro e pola Consellería de Educación.",
  },
];
