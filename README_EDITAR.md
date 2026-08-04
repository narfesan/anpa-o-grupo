# Guía de edición da web da ANPA Santa Uxía

> **Para editar a web só necesitas abrir o ficheiro `content.js` cun editor de texto.**
> Non é necesario tocar ningún outro ficheiro.

---

## Índice

1. [Antes de empezar](#antes-de-empezar)
2. [Como editar texto](#como-editar-texto)
3. [Como engadir unha actividade](#como-engadir-unha-actividade)
4. [Como ocultar un elemento](#como-ocultar-un-elemento)
5. [Como engadir un evento e cartel](#como-engadir-un-evento-e-cartel)
6. [Como subir imaxes](#como-subir-imaxes)
7. [Como publicar en GitHub Pages](#como-publicar-en-github-pages)
8. [Avisos importantes](#avisos-importantes)

---

## Antes de empezar

### Ferramentas necesarias

- Un editor de texto sinxelo (Notepad++ en Windows, TextEdit en Mac, ou similar)
- Acceso ao repositorio en GitHub

### Estrutura de ficheiros

```
index.html          → A páxina web (NON editar)
styles.css          → O deseño visual (NON editar)
script.js           → A lóxica (NON editar)
content.js          → AQUÍ se edita todo o contido ✓
README_EDITAR.md    → Este ficheiro de instrucións
assets/
  images/           → Imaxes das actividades
  posters/          → Carteis dos eventos (JPG, PNG ou WebP)
  docs/             → Documentos PDF descargables
  favicon.svg       → Icona do navegador
```

---

## Como editar texto

1. Abre `content.js` co editor de texto
2. Busca a sección que queres cambiar (os comentarios explican cada parte)
3. Cambia o texto **entre comiñas**

**Exemplo — cambiar o aviso principal:**

```javascript
const AVISO = {
  visible: true,
  etiqueta: "Aviso importante",
  titulo: "Aberto o prazo de inscrición",  // ← Cambia este texto
  texto: "Xa está dispoñible a programación...",  // ← E este
  botonTexto: "Ver actividades",
};
```

### Regras básicas

- ✅ Podes cambiar o texto entre comiñas: `"texto aquí"`
- ✅ Podes copiar e pegar bloques completos
- ❌ Non borres as comiñas `" "`
- ❌ Non borres as chaves `{ }`
- ❌ Non borres as comas `,` ao final de cada liña
- ❌ Non borres os corchetes `[ ]`

---

## Como engadir unha actividade

1. Abre `content.js`
2. Busca a sección `const ACTIVIDADES = [`
3. Copia un bloque existente (desde `{` ata `},`)
4. Pégao despois do último bloque
5. Cambia os datos

**Exemplo de actividade:**

```javascript
{
  visible: true,
  titulo: "Natación",
  categoria: "Deporte",        // Opcións: "Deporte" | "Idiomas" | "Música e baile" | "Creatividade" | "Conciliación"
  idadeRecomendada: "5-12 anos",
  dias: "Martes e xoves",
  horario: "17:00–18:00",
  lugar: "Piscina municipal de Ribeira",
  prezoSocios: "",             // Deixar baleiro se non está confirmado
  prezoNonSocios: "",
  descripcion: "Clases de natación para todos os niveis.",
  estado: "Inscrición aberta", // Ver opcións máis abaixo
  imaxe: "assets/images/natacion.jpg",
  icono: "🏊",
},
```

**Estados posibles:**
- `"Inscrición aberta"` → Verde
- `"Prazas completas"` → Vermello
- `"Proximamente"` → Amarelo
- `"Só socios/as"` → Azul
- `"Actividade rematada"` → Gris

---

## Como ocultar un elemento

Cambia `visible: true` por `visible: false` en calquera actividade, evento, servizo ou documento:

```javascript
{
  visible: false,   // ← Esta actividade non aparecerá na web
  titulo: "Patinaxe",
  ...
}
```

O elemento desaparecerá da web sen necesidade de borralo. Podes volver a activalo cambiando a `true`.

---

## Como engadir un evento e cartel

1. Sube o cartel á carpeta `assets/posters/` (JPG, PNG ou WebP)
   - Usa nomes sen espazos nin acentos: `festa-veran-2026.jpg` ✅
   - Non uses: `Festa Verán 2026.jpg` ❌

2. Abre `content.js` e busca `const EVENTOS = [`

3. Engade un novo bloque:

```javascript
{
  visible: true,
  destacado: false,            // true = aparece como evento principal na portada
  titulo: "Festa do verán",
  fechaInicio: "2026-06-20",  // Formato OBRIGATORIO: AAAA-MM-DD
  fechaFin: "",               // Deixar baleiro se é un só día
  hora: "18:00",
  lugar: "Patio do CEIP Plurilingüe O Grupo",
  resumen: "Unha tarde de festa para toda a comunidade educativa.",
  cartel: "assets/posters/festa-veran-2026.jpg",  // Ruta ao cartel
  inscripcion: "",            // URL de inscrición (deixar baleiro se non existe)
  gratuitoSocios: true,       // true = mostra a insignia "Gratuíto para socios/as"
},
```

**Datas:**
- Formato obrigatorio: `"AAAA-MM-DD"` (ano-mes-día)
- Exemplo: `"2026-09-20"` para o 20 de setembro de 2026
- Os eventos pasados pasan automaticamente a "Eventos anteriores"

---

## Como subir imaxes

### Para actividades
- Garda as imaxes en `assets/images/`
- Nomes sen espazos nin acentos: `patinaxe.jpg`, `baile-moderno.jpg`
- Tamaño recomendado: 600×400 px, menos de 300 KB
- Formatos: JPG, PNG ou WebP

### Para carteis de eventos
- Garda os carteis en `assets/posters/`
- Os carteis manteñen as súas proporcións orixinais (verticais, cadrados, etc.)
- Formatos: JPG, PNG ou WebP

### Para documentos PDF
- Garda os PDFs en `assets/docs/`
- Nomes sen espazos: `formulario-alta-socios.pdf`

---

## Como publicar en GitHub Pages

### Primeira vez

1. Crea unha conta en [github.com](https://github.com) se non tes
2. Crea un repositorio novo (preme o botón `+` → `New repository`)
3. Sube todos os ficheiros: `index.html`, `styles.css`, `script.js`, `content.js` e a carpeta `assets/`
4. Vai a `Settings` → `Pages`
5. En `Source` selecciona `Deploy from a branch`
6. En `Branch` selecciona `main` e `/root`
7. Preme `Save`
8. En uns minutos a web estará en `https://[usuario].github.io/[repositorio]/`

### Para actualizar a web

1. Edita `content.js` no teu ordenador
2. Sobe o ficheiro modificado a GitHub (arrastra e solta ou usa o botón `Upload files`)
3. A web actualízase automaticamente en 1-2 minutos

---

## Avisos importantes

### ⚠️ Antes de publicar, confirmar:

- [ ] O número de WhatsApp en `CONFIG.whatsappNumero` (formato: `"34XXXXXXXXX"`)
- [ ] O correo electrónico en `CONFIG.email`
- [ ] O horario de atención en `CONFIG.horarioAtencion`
- [ ] Os datos bancarios en `SOCIOS.iban` e `SOCIOS.titular` (ou deixar baleiro)
- [ ] A URL canónica en `CONFIG.urlCanonica`

### ⚠️ Non fagas isto:

- Non renomes as carpetas `assets/`, `images/`, `posters/` ou `docs/`
- Non borres `index.html`, `styles.css` ou `script.js`
- Non uses nomes de ficheiro con espazos ou acentos
- Non publiques datos persoais de menores (fotos identificables, nomes, etc.)
- Non publiques números de conta bancaria sen confirmar cos responsables

### ✅ Sempre:

- Garda copias de seguridade antes de cambiar cousas importantes
- Comproba a web despois de cada actualización
- Usa nomes de ficheiro en minúsculas, sen espazos: `festa-familias-2026.jpg`

---

## Preguntas frecuentes sobre a edición

**Non vexo os cambios na web despois de gardar**
→ Actualiza o navegador con Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac). Se acabas de publicar en GitHub Pages, agarda 2-3 minutos.

**Rompín algo e a web non funciona**
→ Abre `content.js` e busca onde falta unha comiña, chave ou coma. Ou restaura a copia de seguridade.

**Quero cambiar o número de WhatsApp**
→ Busca `whatsappNumero` en `content.js` e cambia o número. Formato: `"34612345678"` (sen o `+`, sen espazos).

**Como saber se un evento xa pasou?**
→ A web mostrará automaticamente os eventos pasados na sección "Eventos anteriores". Non precisas facer nada.

**Podo engadir máis seccións ou cambiar o deseño?**
→ As seccións están fixas no deseño. Para cambios maiores, contacta cunha persoa con coñecementos de HTML/CSS.

---

*Última revisión: agosto 2025*
*ANPA Santa Uxía · CEIP Plurilingüe O Grupo · Ribeira, A Coruña*
