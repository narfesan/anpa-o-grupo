// =============================================================
//  SCRIPT.JS — ANPA Santa Uxía · CEIP Plurilingüe O Grupo
//  Lóxica do sitio web. Non é necesario editar este ficheiro.
// =============================================================

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────────
  //  HELPERS
  // ──────────────────────────────────────────────────────────────
  function el(id) { return document.getElementById(id); }
  function whatsappURL(phone, msg) {
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg);
  }
  function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('gl-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  function getDay(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr + 'T12:00:00').getDate();
  }
  function getMonthShort(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr + 'T12:00:00').toLocaleDateString('gl-ES', { month: 'short' }).toUpperCase().replace('.', '');
  }
  function isFuture(dateStr) {
    if (!dateStr) return false;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return new Date(dateStr + 'T12:00:00') >= today;
  }
  function isEmpty(v) { return v === null || v === undefined || v === ''; }

  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function estadoBadge(estado) {
    const map = {
      'Inscrición aberta': 'abierta',
      'Prazas completas': 'completas',
      'Proximamente': 'proximamente',
      'Só socios/as': 'socios',
      'Actividade rematada': 'rematada',
    };
    const cls = map[estado] || 'abierta';
    return `<span class="estado-badge estado-badge--${cls}">${escHtml(estado)}</span>`;
  }

  // ──────────────────────────────────────────────────────────────
  //  CABECEIRA / NAVEGACIÓN
  // ──────────────────────────────────────────────────────────────
  function initHeader() {
    const toggle = el('menuToggle');
    const nav = el('siteNav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = nav.querySelectorAll('a[href^="#"]');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // ──────────────────────────────────────────────────────────────
  //  AVISO DESTACADO
  // ──────────────────────────────────────────────────────────────
  function renderAviso() {
    const wrapper = el('avisoWrapper');
    if (!wrapper) return;
    if (!AVISO || !AVISO.visible) { wrapper.style.display = 'none'; return; }

    const accion = AVISO.botonAccion || 'actividades';
    let href = '#' + accion;
    if (accion.startsWith('http')) href = accion;

    wrapper.innerHTML = `
      <div class="aviso-banner">
        <div class="container">
          <div class="aviso-inner">
            <span class="aviso-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              ${escHtml(AVISO.etiqueta || 'Aviso')}
            </span>
            <div class="aviso-text">
              <strong>${escHtml(AVISO.titulo || '')}</strong>
              ${AVISO.texto ? `<p>${escHtml(AVISO.texto)}</p>` : ''}
            </div>
            ${AVISO.botonTexto ? `<a href="${href}" class="btn btn--coral btn--sm">${escHtml(AVISO.botonTexto)}</a>` : ''}
          </div>
        </div>
      </div>`;
  }

  // ──────────────────────────────────────────────────────────────
  //  ACTIVIDADES
  // ──────────────────────────────────────────────────────────────
  function renderActividades() {
    const grid = el('actividadesGrid');
    const filtros = el('filtrosBtns');
    if (!grid || !ACTIVIDADES) return;

    const cats = ['Todas', 'Deporte', 'Idiomas', 'Música e baile', 'Creatividade', 'Conciliación'];
    if (filtros) {
      filtros.innerHTML = cats.map(function (c) {
        return `<button class="filtro-btn${c === 'Todas' ? ' active' : ''}" data-cat="${c}">${escHtml(c)}</button>`;
      }).join('');

      filtros.querySelectorAll('.filtro-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          filtros.querySelectorAll('.filtro-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          renderActividadesGrid(btn.dataset.cat);
        });
      });
    }

    renderActividadesGrid('Todas');
  }

  function renderActividadesGrid(cat) {
    const grid = el('actividadesGrid');
    if (!grid) return;
    const visibles = (ACTIVIDADES || []).filter(function (a) {
      return a.visible && (cat === 'Todas' || a.categoria === cat);
    });

    if (!visibles.length) {
      grid.innerHTML = `<div class="no-actividades"><p>A programación do novo curso publicarase proximamente.</p></div>`;
      return;
    }

    grid.innerHTML = visibles.map(function (a) {
      const imgHtml = a.imaxe
        ? `<img src="${escHtml(a.imaxe)}" alt="${escHtml(a.titulo)}" loading="lazy">`
        : `<span aria-hidden="true">${a.icono || '📚'}</span>`;

      const metaItems = [];
      if (a.idadeRecomendada) metaItems.push(`<span>👶 ${escHtml(a.idadeRecomendada)}</span>`);
      if (a.dias)             metaItems.push(`<span>📅 ${escHtml(a.dias)}</span>`);
      if (a.horario)          metaItems.push(`<span>🕓 ${escHtml(a.horario)}</span>`);
      if (a.lugar)            metaItems.push(`<span>📍 ${escHtml(a.lugar)}</span>`);

      const prezoHtml = (a.prezoSocios || a.prezoNonSocios)
        ? `<small style="font-size:.78rem;color:var(--grey-mid)">Socios: ${a.prezoSocios || 'consultar'} · Xeral: ${a.prezoNonSocios || 'consultar'}</small>`
        : '';

      return `
        <article class="actividad-card">
          <div class="actividad-img">${imgHtml}</div>
          <div class="actividad-body">
            <span class="actividad-categoria">${escHtml(a.categoria || '')}</span>
            <h3>${escHtml(a.titulo)}</h3>
            ${metaItems.length ? `<div class="actividad-meta">${metaItems.join('')}</div>` : ''}
            ${a.descripcion ? `<p class="actividad-desc">${escHtml(a.descripcion)}</p>` : ''}
            ${prezoHtml}
            <div class="actividad-footer">
              ${a.estado ? estadoBadge(a.estado) : ''}
              <a href="#contacto" class="btn btn--outline btn--sm">Información</a>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  // ──────────────────────────────────────────────────────────────
  //  SERVIZOS
  // ──────────────────────────────────────────────────────────────
  function renderServizos() {
    const grid = el('servizosGrid');
    if (!grid || !SERVIZOS) return;

    const visibles = SERVIZOS.filter(function (s) { return s.visible; });
    grid.innerHTML = visibles.map(function (s) {
      const waURL = whatsappURL(CONFIG.whatsappNumero, s.whatsappMensaxe || '');
      const infoLines = [];
      if (s.horario) infoLines.push(`<span>🕓 ${escHtml(s.horario)}</span>`);
      if (s.prezos)  infoLines.push(`<span>💶 ${escHtml(s.prezos)}</span>`);

      return `
        <article class="servizo-card">
          <div class="servizo-icon" aria-hidden="true">${s.icono || '📋'}</div>
          <h3>${escHtml(s.titulo)}</h3>
          <p>${escHtml(s.descripcion || '')}</p>
          ${infoLines.length ? `<div class="actividad-meta">${infoLines.join('')}</div>` : ''}
          ${s.alergias ? `<p class="servizo-info">${escHtml(s.alergias)}</p>` : ''}
          ${(!s.horario && !s.prezos) ? `<p class="servizo-info">Consultar información actualizada.</p>` : ''}
          <a href="${waURL}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Solicitar información
          </a>
        </article>`;
    }).join('');
  }

  // ──────────────────────────────────────────────────────────────
  //  EVENTOS — DESTACADO
  // ──────────────────────────────────────────────────────────────
  function renderEventoDestacado() {
    const wrapper = el('eventoDestacado');
    if (!wrapper || !EVENTOS) return;

    const proximos = EVENTOS
      .filter(function (e) { return e.visible && isFuture(e.fechaInicio); })
      .sort(function (a, b) { return new Date(a.fechaInicio) - new Date(b.fechaInicio); });

    const ev = proximos.find(function (e) { return e.destacado; }) || proximos[0];

    if (!ev) {
      wrapper.innerHTML = `
        <div class="empty-eventos">
          <div class="empty-eventos-icon">📅</div>
          <h3>Estamos preparando novas actividades</h3>
          <p>En breve publicaremos aquí os próximos encontros, festas e obradoiros da ANPA.</p>
          <a href="#actividades" class="btn btn--primary">Ver actividades</a>
        </div>`;
      return;
    }

    const posterHtml = ev.cartel
      ? `<img src="${escHtml(ev.cartel)}" alt="Cartel: ${escHtml(ev.titulo)}" loading="lazy" style="width:100%;height:100%;object-fit:contain;">`
      : `<div class="evento-poster-placeholder">
           <div class="evento-fecha-grande">${getDay(ev.fechaInicio)}<span>${getMonthShort(ev.fechaInicio)}</span></div>
         </div>`;

    const waMsg = 'Ola, quero información sobre o evento: ' + ev.titulo;
    const actions = [];
    actions.push(`<button class="btn btn--outline btn--sm" onclick="abrirModalEvento('${ev.titulo.replace(/'/g,"\\'")}')">Ver cartel completo</button>`);
    if (ev.inscripcion)
      actions.push(`<a href="${escHtml(ev.inscripcion)}" target="_blank" rel="noopener noreferrer" class="btn btn--coral btn--sm">Inscribirse</a>`);
    actions.push(`<a href="${whatsappURL(CONFIG.whatsappNumero, waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">Máis información</a>`);

    wrapper.innerHTML = `
      <div class="evento-destacado-card">
        <div class="evento-poster-col">${posterHtml}</div>
        <div class="evento-info-col">
          ${ev.gratuitoSocios ? `<span class="evento-badge-gratis">✓ Actividade gratuíta para socios/as</span>` : ''}
          <h2>${escHtml(ev.titulo)}</h2>
          <div class="evento-meta-row">
            <span class="evento-meta-item">📅 ${formatDate(ev.fechaInicio)}${ev.fechaFin ? ' – ' + formatDate(ev.fechaFin) : ''}</span>
            ${ev.hora ? `<span class="evento-meta-item">🕓 ${escHtml(ev.hora)}</span>` : ''}
            ${ev.lugar ? `<span class="evento-meta-item">📍 ${escHtml(ev.lugar)}</span>` : ''}
          </div>
          ${ev.resumen ? `<p class="evento-resumen">${escHtml(ev.resumen)}</p>` : ''}
          <div class="evento-actions">${actions.join('')}</div>
        </div>
      </div>`;
  }

  // ──────────────────────────────────────────────────────────────
  //  EVENTOS — LISTA
  // ──────────────────────────────────────────────────────────────
  function renderEventos() {
    const gridProximos = el('eventosProximos');
    const gridAnteriores = el('eventosAnteriores');
    const verAntBtn = el('verAnteriores');
    if (!gridProximos || !EVENTOS) return;

    const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    const proximos = EVENTOS.filter(function (e) { return e.visible && isFuture(e.fechaInicio); })
      .sort(function (a, b) { return new Date(a.fechaInicio) - new Date(b.fechaInicio); });
    const anteriores = EVENTOS.filter(function (e) { return e.visible && !isFuture(e.fechaInicio); })
      .sort(function (a, b) { return new Date(b.fechaInicio) - new Date(a.fechaInicio); });

    function eventoCard(ev) {
      const posterHtml = ev.cartel
        ? `<img src="${escHtml(ev.cartel)}" alt="Cartel: ${escHtml(ev.titulo)}" loading="lazy">`
        : `<div class="evento-card-poster-placeholder">
             <span style="font-size:2.5rem">📅</span>
             <strong style="font-size:.85rem;margin-top:8px">${getDay(ev.fechaInicio)} ${getMonthShort(ev.fechaInicio)}</strong>
           </div>`;
      return `
        <article class="evento-card" tabindex="0" role="button" aria-label="${escHtml(ev.titulo)}" onclick="abrirModalEvento('${ev.titulo.replace(/'/g,"\\'")}')">
          <div class="evento-card-poster">${posterHtml}</div>
          <div class="evento-card-body">
            <span class="evento-card-fecha">📅 ${formatDate(ev.fechaInicio)}</span>
            <h3>${escHtml(ev.titulo)}</h3>
            ${ev.lugar ? `<span class="evento-card-lugar">📍 ${escHtml(ev.lugar)}</span>` : ''}
            ${ev.resumen ? `<p class="evento-card-resumen">${escHtml(ev.resumen)}</p>` : ''}
          </div>
        </article>`;
    }

    if (!proximos.length) {
      gridProximos.innerHTML = `<div class="no-actividades"><p>Non hai eventos próximos. En breve anunciaremos novas propostas.</p></div>`;
    } else {
      gridProximos.innerHTML = proximos.map(eventoCard).join('');
    }

    if (gridAnteriores && anteriores.length) {
      gridAnteriores.innerHTML = anteriores.map(eventoCard).join('');
      if (verAntBtn) {
        verAntBtn.style.display = '';
        verAntBtn.addEventListener('click', function () {
          gridAnteriores.style.display = gridAnteriores.style.display === 'none' ? 'grid' : 'none';
          this.textContent = gridAnteriores.style.display === 'none' ? 'Ver eventos anteriores' : 'Ocultar eventos anteriores';
        });
        gridAnteriores.style.display = 'none';
      }
    } else {
      if (verAntBtn) verAntBtn.style.display = 'none';
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  MODAL DE EVENTOS
  // ──────────────────────────────────────────────────────────────
  window.abrirModalEvento = function (titulo) {
    const ev = (EVENTOS || []).find(function (e) { return e.titulo === titulo; });
    const modal = el('modalEvento');
    if (!modal || !ev) return;

    const waMsg = 'Ola, quero información sobre o evento: ' + ev.titulo;
    const posterHtml = ev.cartel
      ? `<div class="modal-poster"><img src="${escHtml(ev.cartel)}" alt="Cartel: ${escHtml(ev.titulo)}"></div>`
      : '';

    const metaItems = [];
    if (ev.fechaInicio) metaItems.push(`<div class="modal-meta-item"><strong>Data</strong><span>${formatDate(ev.fechaInicio)}${ev.fechaFin ? ' – ' + formatDate(ev.fechaFin) : ''}</span></div>`);
    if (ev.hora)        metaItems.push(`<div class="modal-meta-item"><strong>Hora</strong><span>${escHtml(ev.hora)}</span></div>`);
    if (ev.lugar)       metaItems.push(`<div class="modal-meta-item"><strong>Lugar</strong><span>${escHtml(ev.lugar)}</span></div>`);

    const actions = [];
    if (ev.cartel) actions.push(`<a href="${escHtml(ev.cartel)}" download class="btn btn--outline btn--sm">⬇ Descargar cartel</a>`);
    if (ev.inscripcion) actions.push(`<a href="${escHtml(ev.inscripcion)}" target="_blank" rel="noopener noreferrer" class="btn btn--coral btn--sm">Inscribirse</a>`);
    actions.push(`<a href="${whatsappURL(CONFIG.whatsappNumero, waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">WhatsApp</a>`);

    el('modalTitulo').textContent = ev.titulo;
    el('modalCuerpo').innerHTML = `
      ${posterHtml}
      ${ev.gratuitoSocios ? `<p style="margin-bottom:12px"><span class="evento-badge-gratis" style="display:inline-flex">✓ Actividade gratuíta para socios/as</span></p>` : ''}
      <div class="modal-meta">${metaItems.join('')}</div>
      ${ev.resumen ? `<p style="font-size:.9rem;color:var(--grey);line-height:1.7">${escHtml(ev.resumen)}</p>` : ''}
      <div class="modal-actions">${actions.join('')}</div>`;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    el('modalClose').focus();
    document.body.style.overflow = 'hidden';
  };

  function initModal() {
    const modal = el('modalEvento');
    const closeBtn = el('modalClose');
    if (!modal) return;

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  // ──────────────────────────────────────────────────────────────
  //  SOCIOS
  // ──────────────────────────────────────────────────────────────
  function renderSocios() {
    const ibanNote = el('ibanNote');
    if (ibanNote && SOCIOS) {
      if (SOCIOS.iban) {
        ibanNote.textContent = 'Realiza a transferencia ao IBAN: ' + SOCIOS.iban + (SOCIOS.titular ? ' · Titular: ' + SOCIOS.titular : '');
      } else {
        ibanNote.textContent = 'Solicita á ANPA os datos para realizar o pagamento.';
      }
    }

    const formularioBtn = el('formularioBtn');
    if (formularioBtn && SOCIOS) {
      if (SOCIOS.formularioUrl) {
        formularioBtn.href = SOCIOS.formularioUrl;
        formularioBtn.removeAttribute('style');
      } else {
        formularioBtn.style.display = 'none';
      }
    }

    const cotaPrecio = el('cotaPrecio');
    const cotaDesc = el('cotaDesc');
    if (cotaPrecio && SOCIOS) cotaPrecio.textContent = SOCIOS.cotaAnual || '15 €';
    if (cotaDesc && SOCIOS) cotaDesc.textContent = SOCIOS.cotaDescripcion || 'por familia e curso escolar';
  }

  // ──────────────────────────────────────────────────────────────
  //  DOCUMENTOS
  // ──────────────────────────────────────────────────────────────
  function renderDocumentos() {
    const anpaGroup = el('docsAnpa');
    const centroGroup = el('docsCentro');
    if (!anpaGroup || !DOCUMENTOS) return;

    const anpa   = DOCUMENTOS.filter(function (d) { return d.visible && d.tipo === 'anpa'   && !isEmpty(d.url); });
    const centro = DOCUMENTOS.filter(function (d) { return d.visible && d.tipo === 'centro' && !isEmpty(d.url); });

    function docCard(d) {
      const attrs = d.externo ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `
        <a href="${escHtml(d.url)}" ${attrs} class="doc-card">
          <span class="doc-icon" aria-hidden="true">${d.icono || '📄'}</span>
          <div class="doc-info">
            <strong>${escHtml(d.titulo)}</strong>
            ${d.descripcion ? `<span>${escHtml(d.descripcion)}</span>` : ''}
            ${d.externo ? `<span class="doc-externo">↗ Ligazón externa</span>` : ''}
          </div>
        </a>`;
    }

    const anpaGrid = anpaGroup.querySelector('.documentos-grid');
    const centroGrid = centroGroup.querySelector('.documentos-grid');

    if (anpaGrid) {
      if (anpa.length) { anpaGrid.innerHTML = anpa.map(docCard).join(''); anpaGroup.style.display = ''; }
      else anpaGroup.style.display = 'none';
    }
    if (centroGrid) {
      if (centro.length) { centroGrid.innerHTML = centro.map(docCard).join(''); centroGroup.style.display = ''; }
      else centroGroup.style.display = 'none';
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  FAQ ACCORDION
  // ──────────────────────────────────────────────────────────────
  function renderFaq() {
    const list = el('faqList');
    if (!list || !FAQS) return;

    const visibles = FAQS.filter(function (f) { return f.visible; });
    list.innerHTML = visibles.map(function (faq, i) {
      const id = 'faq-' + i;
      return `
        <div class="faq-item${faq.destacada ? ' faq-item--destacada' : ''}">
          <button class="faq-question" aria-expanded="false" aria-controls="${id}">
            ${escHtml(faq.pregunta)}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg>
          </button>
          <div class="faq-answer" id="${id}" role="region">
            <div class="faq-answer-inner">${escHtml(faq.resposta)}</div>
          </div>
        </div>`;
    }).join('');

    list.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  // ──────────────────────────────────────────────────────────────
  //  CONTACTO
  // ──────────────────────────────────────────────────────────────
  function renderContacto() {
    // Email
    const emailEl = el('contactoEmail');
    if (emailEl && CONFIG.email) {
      emailEl.innerHTML = `<a href="mailto:${CONFIG.email}">${escHtml(CONFIG.email)}</a>`;
    } else if (emailEl) { emailEl.closest('.contacto-item').style.display = 'none'; }

    // Teléfono
    const telEl = el('contactoTel');
    if (telEl && CONFIG.telefono) {
      telEl.innerHTML = `<a href="tel:${CONFIG.telefono}">${escHtml(CONFIG.telefono)}</a>`;
    } else if (telEl) { telEl.closest('.contacto-item').style.display = 'none'; }

    // Horario
    const horarioEl = el('contactoHorario');
    if (horarioEl && CONFIG.horarioAtencion) {
      horarioEl.textContent = CONFIG.horarioAtencion;
    } else if (horarioEl) { horarioEl.closest('.contacto-item').style.display = 'none'; }

    // Enderezo
    const endEl = el('contactoEnderezo');
    if (endEl) endEl.innerHTML = escHtml(CONFIG.enderezo || '');

    // Web centro
    const webEl = el('contactoWebCentro');
    if (webEl && CONFIG.webCentro) {
      webEl.href = CONFIG.webCentro;
      webEl.textContent = 'CEIP Plurilingüe O Grupo';
    } else if (webEl) { webEl.closest('.contacto-item').style.display = 'none'; }

    // Mapa
    const mapaLink = el('mapaLink');
    if (mapaLink && CONFIG.mapasLink) mapaLink.href = CONFIG.mapasLink;

    // WhatsApp buttons
    document.querySelectorAll('[data-wa-msg]').forEach(function (btn) {
      const msg = btn.dataset.waMsg || 'Ola, quero facer unha consulta á ANPA Santa Uxía.';
      btn.href = whatsappURL(CONFIG.whatsappNumero, msg);
    });
  }

  // ──────────────────────────────────────────────────────────────
  //  FLOATING WHATSAPP
  // ──────────────────────────────────────────────────────────────
  function initFloatingWa() {
    const btn = el('floatingWa');
    if (!btn) return;
    const msg = 'Ola, quero facer unha consulta á ANPA Santa Uxía.';
    btn.href = whatsappURL(CONFIG.whatsappNumero, msg);
  }

  // ──────────────────────────────────────────────────────────────
  //  HERO BUTTONS
  // ──────────────────────────────────────────────────────────────
  function initHeroButtons() {
    const waHero = el('waHero');
    if (waHero) waHero.href = whatsappURL(CONFIG.whatsappNumero, 'Ola, quero contactar coa ANPA Santa Uxía do CEIP O Grupo.');
    const waHeader = el('waHeader');
    if (waHeader) waHeader.href = whatsappURL(CONFIG.whatsappNumero, 'Ola, quero contactar coa ANPA Santa Uxía do CEIP O Grupo.');
  }

  // ──────────────────────────────────────────────────────────────
  //  FOOTER AÑO
  // ──────────────────────────────────────────────────────────────
  function initYear() {
    const yearEl = el('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ──────────────────────────────────────────────────────────────
  //  SMOOTH SCROLL
  // ──────────────────────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ──────────────────────────────────────────────────────────────
  //  INIT
  // ──────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    renderAviso();
    renderActividades();
    renderServizos();
    renderEventoDestacado();
    renderEventos();
    initModal();
    renderSocios();
    renderDocumentos();
    renderFaq();
    renderContacto();
    initFloatingWa();
    initHeroButtons();
    initSmoothScroll();
    initYear();
  });

})();
