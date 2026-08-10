# Guía de edición da web da ANPA Santa Uxía

> A maior parte do contido modifícase en `content.js`. Para renovar horarios, carteis ou logos, normalmente só hai que subir o novo ficheiro á carpeta correspondente.

## Onde está cada cousa

```text
index.html          → Estrutura da páxina. Non editar para cambios habituais.
styles.css          → Deseño. Non editar para cambios habituais.
script.js           → Funcionamento. Non editar para cambios habituais.
content.js          → Textos, actividades, beneficios, enlaces e ficheiros.
assets/
  images/           → Fotografías e logos da ANPA e do centro.
  docs/             → PDF de extraescolares.
  colaboradores/    → Logos dos establecementos colaboradores.
  posters/          → Carteis de eventos.
```

## Actualizar o PDF de extraescolares

A opción máis sinxela é manter sempre este nome:

```text
assets/docs/actividades-extraescolares-2026-2027.pdf
```

En GitHub:

1. Entra en `assets` → `docs`.
2. Sube o novo PDF co mesmo nome.
3. Confirma que GitHub substitúe o anterior.
4. Fai o commit.

A ligazón da web seguirá funcionando sen modificar ningún outro ficheiro.

Se prefires cambiar o nome, abre `content.js`, busca `const EXTRAESCOLARES` e modifica:

```javascript
pdf: "assets/docs/novo-nome.pdf",
```

No mesmo bloque podes cambiar o título, o resumo, o período, o texto do botón ou ocultalo con `visible: false`.

## Engadir logos de colaboradores

### 1. Subir o logo

1. Entra en `assets` → `colaboradores`.
2. Sube un PNG, WebP, JPG ou SVG.
3. Usa un nome sinxelo, sen espazos nin acentos: `comercio-ribeira.png`.
4. Para que cargue rápido, procura que pese menos de 150 KB.

Os logos horizontais e con fondo transparente funcionan mellor. A web adáptaos automaticamente ao mesmo espazo sen deformalos.

### 2. Engadilo ao carrusel

Abre `content.js`, busca `const COLABORADORES` e engade dentro de `logos: [ ]`:

```javascript
{
  visible: true,
  nome: "Nome do establecemento",
  logo: "assets/colaboradores/comercio-ribeira.png",
  url: "https://exemplo.gal/",
},
```

- `url` é opcional: pódese deixar como `""`.
- `visible: false` oculta un logo sen borralo.
- Podes reordenar os bloques para cambiar a orde.
- Con 1–3 logos, a franxa queda estática. Con 4 ou máis, móvese suavemente.
- `velocidade` indica os segundos dunha volta completa: un número maior significa movemento máis lento.

A franxa superior ocúltase automaticamente mentres non haxa logos visibles.

## Modificar os beneficios de ser socio/a

En `content.js`, busca `const BENEFICIOS_SOCIOS`.

Cada beneficio ten esta forma:

```javascript
{
  visible: true,
  titulo: "Descontos para as familias",
  texto: "Vantaxes en numerosos establecementos colaboradores.",
},
```

Podes cambiar os textos, reordenar os bloques ou usar `visible: false`. Non é necesario tocar `index.html`.

## Modificar o resumo de actividades

O bloque azul claro co acceso ao PDF modifícase en `const EXTRAESCOLARES`.

As catro liñas de resumo que aparecen debaixo modifícanse en `const ACTIVIDADES`:

```javascript
{
  visible: true,
  titulo: "Movemento e deporte",
  categoria: "Extraescolares",
  nivel: "Infantil e Primaria",
  horario: "De luns a venres",
  lugar: "Centro e instalacións indicadas",
  prezo: "Ver PDF",
  descripcion: "Acrobática e parkour, patinaxe, fútbol e multideporte.",
  estado: "",
  whatsappMsg: "Ola, quero información sobre as actividades de movemento e deporte.",
},
```

Para ocultar unha liña, cambia `visible: true` por `visible: false`.

## Cambiar aviso, evento ou fotografías

- Aviso superior: bloque `AVISO`.
- Próximo evento: bloque `EVENTO`; os carteis van en `assets/posters/`.
- Fotografías de “Así o vivimos”: bloque `REDES`; as imaxes locais van en `assets/images/`.
- Cota e conta bancaria: bloque `SOCIOS`.
- Teléfono, correo e redes: bloque `CONFIG`.

Exemplo de cartel:

```javascript
const EVENTO = {
  visible: true,
  titulo: "Festa de fin de curso",
  fecha: "19 de xuño de 2027",
  hora: "17:00",
  lugar: "Patio do CEIP Plurilingüe O Grupo",
  descripcion: "Unha tarde para compartir en familia.",
  cartel: "assets/posters/fin-de-curso-2027.jpg",
  whatsappMsg: "Ola, quero información sobre a festa de fin de curso.",
};
```

## Regras básicas ao editar `content.js`

- Cambia só o texto que está entre comiñas.
- Non borres comiñas, chaves, corchetes nin comas.
- Usa nomes de ficheiro en minúsculas, sen espazos nin acentos.
- Garda unha copia de seguridade antes dun cambio grande.
- Comproba a web despois de cada publicación.

## Publicar en GitHub Pages

1. Sube ou edita os ficheiros no repositorio.
2. Escribe unha mensaxe breve de commit.
3. Pulsa `Commit changes`.
4. Agarda a que o despregamento de Pages apareza en verde en `Actions`.
5. Abre [anpaogrupo.es](https://anpaogrupo.es/) e forza a actualización con `Ctrl + F5` ou `Cmd + Shift + R`.

## Seguridade e privacidade

- Non publiques nomes, teléfonos nin fotografías identificables de menores sen autorización.
- Confirma sempre o IBAN, a cota e o número de WhatsApp antes de publicar cambios.
- Non borres `CNAME`, `index.html`, `styles.css` nin `script.js`.

---

*Última revisión: agosto de 2026*  
*ANPA Santa Uxía · CEIP Plurilingüe O Grupo · Ribeira*
