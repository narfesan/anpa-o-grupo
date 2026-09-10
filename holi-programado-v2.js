/*
 * ANPA Santa Uxía · Publicación visual programada de Holi Fun.
 * Cargar DESPUÉS de content.js y script.js en el index.html de la web.
 * Solo sustituye el contenido de #eventoWrapper; reutiliza los estilos actuales.
 * No cambia el Worker, D1 ni la apertura del formulario de preinscripción.
 * La fecha se comprueba en el navegador: no es un control de acceso ni un embargo.
 */
(function () {
  'use strict';

  const HOLI = Object.freeze({
    publicarDesde: '2026-09-09T12:00:00+02:00',
    titulo: 'Holi Fun · Festa de benvida ao curso 2026/27',
    fecha: 'Venres 18 de setembro de 2026',
    hora: '16:00–19:00',
    lugar: 'Pista exterior do CEIP Plurilingüe O Grupo',
    descripcion: 'Yincana, música e diversión para dar a benvida ao novo curso. Teremos merenda. Recoméndase traer gafas de piscina e camiseta branca.',
    prazo: 'Preinscrición ata o 15 de setembro ás 23:59.',
    aviso: 'Actividade para familias socias da ANPA. Podes preinscribirte sen ter recibido o carné. A ANPA comprobará a condición de familia socia antes de confirmar a participación.',
    cartel: 'assets/posters/holi-fun-2026.jpg',
    cartelAncho: 1089,
    cartelAlto: 1444,
    inscricion: 'https://socios.anpaogrupo.es/eventos?evento=3',
    boton: 'Preinscribirse ao evento'
  });

  const inicio = Date.parse(HOLI.publicarDesde);
  if (!Number.isFinite(inicio)) return;

  function start() {
    const wrapper = document.getElementById('eventoWrapper');
    if (!wrapper || wrapper.dataset.holiScheduler === 'ready') return;
    wrapper.dataset.holiScheduler = 'ready';

    // Conservar el bloque que acaba de dibujar el script original.
    const inicial = Array.from(wrapper.childNodes).map(function (n) {
      return n.cloneNode(true);
    });
    let mostrandoHoli = false;
    let timer = null;

    function node(tag, className, text) {
      const el = document.createElement(tag);
      if (className) el.className = className;
      if (text !== undefined) el.textContent = text;
      return el;
    }

    function dato(label, value) {
      const row = node('div', 'evento-meta-item');
      row.append(node('strong', '', label), node('span', '', value));
      return row;
    }

    function publicar() {
      const inner = node('div', 'evento-inner');
      const poster = node('div', 'evento-poster');
      const frame = node('a', 'evento-poster-frame');
      frame.href = HOLI.cartel;
      frame.target = '_blank';
      frame.rel = 'noopener noreferrer';
      frame.setAttribute('aria-label', 'Ver o cartel completo de Holi Fun (abre noutra pestana)');
      // Mantener la proporción real del original, sin recortarlo ni deformarlo.
      frame.style.aspectRatio = HOLI.cartelAncho + ' / ' + HOLI.cartelAlto;

      const image = node('img');
      image.alt = 'Cartel de Holi Fun, festa de benvida ao curso 2026/27, o 18 de setembro de 16:00 a 19:00, para socios.';
      image.width = HOLI.cartelAncho;
      image.height = HOLI.cartelAlto;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.src = HOLI.cartel;
      frame.append(image);
      poster.append(frame);

      const info = node('div', 'evento-info');
      const meta = node('div', 'evento-meta');
      meta.append(dato('Data', HOLI.fecha), dato('Hora', HOLI.hora), dato('Lugar', HOLI.lugar));
      const prazo = node('p', 'evento-desc');
      prazo.append(node('strong', '', HOLI.prazo));
      const actions = node('div', 'evento-actions');
      const link = node('a', 'btn btn--blue', HOLI.boton);
      link.href = HOLI.inscricion;
      link.rel = 'noreferrer';
      // Navegación normal en la misma pestaña. No se incrusta el formulario.
      actions.append(link);

      info.append(
        node('h3', 'evento-titulo', HOLI.titulo),
        meta,
        node('p', 'evento-desc', HOLI.descripcion),
        prazo,
        node('p', 'evento-desc', HOLI.aviso),
        actions
      );
      inner.append(poster, info);
      wrapper.replaceChildren(inner);
      mostrandoHoli = true;
    }

    function update() {
      if (timer !== null) {
        window.clearTimeout(timer);
        timer = null;
      }
      const restante = inicio - Date.now();
      if (restante <= 0) {
        if (!mostrandoHoli) publicar();
        return;
      }
      if (mostrandoHoli) {
        // Si se corrige el reloj del dispositivo hacia atrás, respetar la fecha.
        wrapper.replaceChildren.apply(wrapper, inicial.map(function (n) {
          return n.cloneNode(true);
        }));
        mostrandoHoli = false;
      }
      // Comprobar como máximo cada minuto y también justo al llegar al instante.
      // Las pestañas suspendidas pueden retrasar timers: se revisa al regresar.
      timer = window.setTimeout(update, Math.min(restante, 60000));
    }

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) update();
    });
    window.addEventListener('pageshow', update);
    window.addEventListener('focus', update);
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
}());
