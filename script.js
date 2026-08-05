// =============================================================
//  SCRIPT.JS — ANPA Santa Uxía
//  Lóxica da web. Non é necesario editar este ficheiro.
// =============================================================

(function () {
  'use strict';

  // ── HELPERS ─────────────────────────────────────────────────
  function $(id)  { return document.getElementById(id); }
  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }
  function waURL(msg) {
    return 'https://wa.me/' + CONFIG.whatsappNumero + '?text=' + encodeURIComponent(msg);
  }
  function isEmpty(v) { return v === null || v === undefined || v === ''; }

  // WA SVG icon
  const WA_SVG = '<svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  // ── HEADER / NAV ─────────────────────────────────────────────
  function initHeader() {
    const btn = $('menuBtn');
    const nav = $('siteNav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        btn.focus();
      }
    });

    // Set WA link on header button
    const waBtn = $('headerWa');
    if (waBtn) waBtn.href = waURL('Ola, quero contactar coa ANPA Santa Uxía do CEIP O Grupo.');
  }

  // ── AVISO ────────────────────────────────────────────────────
  function renderAviso() {
    const el = $('avisoWrapper');
    if (!el) return;
    if (!AVISO || !AVISO.visible || isEmpty(AVISO.texto)) {
      el.style.display = 'none';
      return;
    }
    el.innerHTML =
      '<div class="aviso-strip">' +
        '<div class="container">' +
          '<div class="aviso-strip-inner">' +
            '<span class="aviso-strip-label">Aviso</span>' +
            '<p>' + esc(AVISO.texto) + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ── PORTADA WA BUTTONS ───────────────────────────────────────
  function initPortadaBtns() {
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      const msg = el.dataset.wa || 'Ola, quero contactar coa ANPA Santa Uxía.';
      el.href = waURL(msg);
    });
  }

  // ── ACTIVIDADES ──────────────────────────────────────────────
  function estadoClass(e) {
    const m = {
      'Inscrición aberta':          'aberta',
      'Prazas completas':           'completas',
      'Proximamente':               'proximamente',
      'Programación por confirmar': 'confirmar',
      'Actividade rematada':        'rematada',
    };
    return m[e] || 'confirmar';
  }

  function renderActividades() {
    const list = $('actividadesList');
    if (!list || !ACTIVIDADES) return;

    const vis = ACTIVIDADES.filter(function (a) { return a.visible; });
    if (!vis.length) {
      list.innerHTML =
        '<p style="color:var(--text-light);padding:24px 0">A programación do novo curso publicarase proximamente.</p>';
      return;
    }

    list.innerHTML = vis.map(function (a) {
      const infoItems = [];
      if (a.nivel)   infoItems.push('<span>' + esc(a.nivel) + '</span>');
      if (a.horario) infoItems.push('<span>' + esc(a.horario) + '</span>');
      if (a.lugar)   infoItems.push('<span>' + esc(a.lugar) + '</span>');
      if (a.prezo)   infoItems.push('<span>' + esc(a.prezo) + '</span>');

      return '<div class="actividad-row">' +
        '<div class="actividad-main">' +
          (a.categoria ? '<div class="actividad-cat">' + esc(a.categoria) + '</div>' : '') +
          '<div class="actividad-nombre">' + esc(a.titulo) + '</div>' +
          (a.descripcion ? '<div class="actividad-desc">' + esc(a.descripcion) + '</div>' : '') +
        '</div>' +
        (infoItems.length ? '<div class="actividad-info">' + infoItems.join('') + '</div>' : '') +
        (a.estado ? '<span class="estado estado--' + estadoClass(a.estado) + '">' + esc(a.estado) + '</span>' : '') +
        '<a href="' + esc(waURL(a.whatsappMsg || 'Ola, quero información sobre a actividade de ' + a.titulo + '.')) + '" ' +
           'target="_blank" rel="noopener noreferrer" class="btn btn--wa btn--sm actividad-btn">' +
           WA_SVG + ' Consultar</a>' +
      '</div>';
    }).join('');
  }

  // ── EVENTO ───────────────────────────────────────────────────
  function renderEvento() {
    const wrapper = $('eventoWrapper');
    if (!wrapper || !EVENTO) return;
    if (!EVENTO.visible) { wrapper.closest('section').style.display = 'none'; return; }

    const posterHTML = EVENTO.cartel
      ? '<img src="' + esc(EVENTO.cartel) + '" alt="Cartel: ' + esc(EVENTO.titulo) + '" loading="lazy">'
      : '<div class="evento-poster-placeholder">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>' +
          '<p>O cartel publicarase<br>cando estea dispoñible</p>' +
        '</div>';

    const metaItems = [];
    if (EVENTO.fecha) metaItems.push(
      '<div class="evento-meta-item"><strong>Data</strong><span>' + esc(EVENTO.fecha) + '</span></div>'
    );
    if (EVENTO.hora) metaItems.push(
      '<div class="evento-meta-item"><strong>Hora</strong><span>' + esc(EVENTO.hora) + '</span></div>'
    );
    if (EVENTO.lugar) metaItems.push(
      '<div class="evento-meta-item"><strong>Lugar</strong><span>' + esc(EVENTO.lugar) + '</span></div>'
    );

    wrapper.innerHTML =
      '<div class="evento-inner">' +
        '<div class="evento-poster">' +
          '<div class="evento-poster-frame">' + posterHTML + '</div>' +
        '</div>' +
        '<div class="evento-info">' +
          '<h3 class="evento-titulo">' + esc(EVENTO.titulo) + '</h3>' +
          (metaItems.length ? '<div class="evento-meta">' + metaItems.join('') + '</div>' : '') +
          (EVENTO.descripcion ? '<p class="evento-desc">' + esc(EVENTO.descripcion) + '</p>' : '') +
          '<div class="evento-actions">' +
            '<a href="' + esc(waURL(EVENTO.whatsappMsg || 'Ola, quero información sobre o próximo evento da ANPA.')) + '" ' +
               'target="_blank" rel="noopener noreferrer" class="btn btn--wa">' +
               WA_SVG + ' Preguntar por WhatsApp</a>' +
            (EVENTO.cartel ? '<a href="' + esc(EVENTO.cartel) + '" download class="btn btn--outline btn--sm">Descargar cartel</a>' : '') +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // ── SERVIZOS ─────────────────────────────────────────────────
  function renderServizos() {
    const list = $('servizosList');
    if (!list || !SERVIZOS) return;

    const vis = SERVIZOS.filter(function (s) { return s.visible; });
    list.innerHTML = vis.map(function (s) {
      return '<div class="servizo-row">' +
        '<div class="servizo-body">' +
          '<div class="servizo-titulo">' + esc(s.titulo) + '</div>' +
          (s.descripcion ? '<div class="servizo-desc">' + esc(s.descripcion) + '</div>' : '') +
        '</div>' +
        '<a href="' + esc(waURL(s.whatsappMsg || 'Ola, quero información sobre ' + s.titulo + '.')) + '" ' +
           'target="_blank" rel="noopener noreferrer" class="btn btn--outline-white btn--sm">' +
           WA_SVG + ' Consultar</a>' +
      '</div>';
    }).join('');
  }

  // ── REDES SOCIAIS ─────────────────────────────────────────────
  function renderRedes() {
    if (!REDES) return;

    function setFoto(id, src, alt) {
      const el = $(id);
      if (!el) return;
      if (src) {
        el.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '" loading="lazy">';
      } else {
        el.style.display = 'none';
      }
    }
    setFoto('redFoto1', REDES.foto1, REDES.foto1Alt);
    setFoto('redFoto2', REDES.foto2, REDES.foto2Alt);
    setFoto('redFoto3', REDES.foto3, REDES.foto3Alt);

    // Social links
    function setLink(id, url) {
      const el = $(id);
      if (el) {
        if (url) el.href = url;
        else el.style.display = 'none';
      }
    }
    setLink('redInstagram', CONFIG.instagram);
    setLink('redFacebook',  CONFIG.facebook);
    setLink('redTwitter',   CONFIG.twitter);
  }

  // ── SOCIOS ───────────────────────────────────────────────────
  function renderSocios() {
    const precio = $('sociosPrecio');
    const det    = $('sociosDet');
    if (precio && SOCIOS) precio.textContent = SOCIOS.cotaAnual || '20 €';
    if (det    && SOCIOS) det.textContent    = SOCIOS.cotaDetalle || 'por familia e curso escolar';

    const altaCota = $('altaSocioCota');
    const altaIban = $('altaSocioIban');
    if (altaCota && SOCIOS) altaCota.textContent = SOCIOS.cotaAnual || '20 €';
    if (altaIban && SOCIOS) altaIban.textContent = SOCIOS.iban || '';

    const toggle = $('abrirAltaSocio');
    const panel = $('altaSocioPanel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        const abrir = panel.hidden;
        panel.hidden = !abrir;
        toggle.setAttribute('aria-expanded', String(abrir));
        if (abrir) $('socioResponsable') && $('socioResponsable').focus();
      });
    }

    const copiar = $('copiarIban');
    if (copiar && SOCIOS && SOCIOS.iban) {
      copiar.addEventListener('click', function () {
        const iban = SOCIOS.iban;
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(iban).then(function () {
            copiar.textContent = 'IBAN copiado ✓';
          });
        } else {
          const area = document.createElement('textarea');
          area.value = iban;
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          document.execCommand('copy');
          document.body.removeChild(area);
          copiar.textContent = 'IBAN copiado ✓';
        }
      });
    }

    const form = $('altaSocioForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.reportValidity()) return;

        const responsable = $('socioResponsable').value.trim();
        const alumnado = $('socioAlumnado').value.trim();
        const concepto = (SOCIOS.concepto || 'COTA ANPA') + ' - ' + responsable;
        const msg =
          'Ola, quero dar de alta a miña familia como socia da ANPA Santa Uxía.\n\n' +
          'Persoa responsable: ' + responsable + '\n' +
          'Alumnado e curso: ' + alumnado + '\n' +
          'Cota: ' + (SOCIOS.cotaAnual || '20 €') + ' por familia e curso escolar.\n' +
          'Concepto da transferencia: ' + concepto + '\n\n' +
          'Vou adxuntar nesta conversa o xustificante do pagamento.';

        window.open(waURL(msg), '_blank', 'noopener,noreferrer');
      });
    }
  }

  // ── CONTACTO ─────────────────────────────────────────────────
  function renderContacto() {
    // WA principal
    const waMain = $('contactoWaMain');
    if (waMain) waMain.href = waURL('Ola, quero facer unha consulta á ANPA Santa Uxía.');

    // Teléfono (texto)
    const telEl = $('contactoTel');
    if (telEl) {
      if (CONFIG.telefono) {
        telEl.innerHTML = '<a href="tel:+' + esc(CONFIG.whatsappNumero) + '">' + esc(CONFIG.telefono) + '</a>';
      } else {
        telEl.closest('.contacto-item').style.display = 'none';
      }
    }

    // Email
    const emailEl = $('contactoEmail');
    if (emailEl) {
      if (CONFIG.email) {
        emailEl.innerHTML = '<a href="mailto:' + esc(CONFIG.email) + '">' + esc(CONFIG.email) + '</a>';
      } else {
        emailEl.closest('.contacto-item').style.display = 'none';
      }
    }

    // Enderezo
    const endEl = $('contactoEnderezo');
    if (endEl && CONFIG.enderezo) endEl.textContent = CONFIG.enderezo;

    // Horario
    const horEl = $('contactoHorario');
    if (horEl) {
      if (CONFIG.horarioAtencion) {
        horEl.textContent = CONFIG.horarioAtencion;
      } else {
        const item = horEl.closest('.contacto-item');
        if (item) item.style.display = 'none';
      }
    }

    // Web centro
    const webEl = $('contactoWebCentro');
    if (webEl && CONFIG.webCentro) {
      webEl.href = CONFIG.webCentro;
    } else if (webEl) {
      webEl.closest('.contacto-item').style.display = 'none';
    }

    // Mapa link
    const mapaLink = $('mapaLink');
    if (mapaLink && CONFIG.mapasLink) mapaLink.href = CONFIG.mapasLink;
  }

  // ── FLOATING WA ──────────────────────────────────────────────
  function initFloatingWa() {
    const btn = $('floatingWa');
    if (btn) btn.href = waURL('Ola, quero facer unha consulta á ANPA Santa Uxía.');
  }

  // ── FOOTER ───────────────────────────────────────────────────
  function initFooter() {
    const year = $('footerYear');
    if (year) year.textContent = new Date().getFullYear();

    function setFooterLink(id, url) {
      const el = $(id);
      if (el) {
        if (url) el.href = url;
        else el.closest('li') && (el.closest('li').style.display = 'none');
      }
    }
    setFooterLink('footerInstagram', CONFIG.instagram);
    setFooterLink('footerFacebook',  CONFIG.facebook);
    setFooterLink('footerTwitter',   CONFIG.twitter);
    setFooterLink('footerWebCentro', CONFIG.webCentro);

    const waFooter = $('footerWa');
    if (waFooter) waFooter.href = waURL('Ola, quero facer unha consulta á ANPA Santa Uxía.');
  }

  // ── SMOOTH SCROLL ────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── INIT ─────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    renderAviso();
    initPortadaBtns();
    renderActividades();
    renderEvento();
    renderServizos();
    renderRedes();
    renderSocios();
    renderContacto();
    initFloatingWa();
    initFooter();
    initSmoothScroll();
  });

}());
