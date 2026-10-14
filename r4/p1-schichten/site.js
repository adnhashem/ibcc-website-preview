(() => {
  const d = document, html = d.documentElement;
  const rmq = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const still = () => rmq.matches;
  const E = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const EIN = 'cubic-bezier(0.4, 0, 1, 1)';
  const DRAW = [{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }];
  const canAnim = typeof Element !== 'undefined' && 'animate' in Element.prototype;
  const params = new URLSearchParams(location.search);
  html.classList.add('js');

  const release = () => html.classList.remove('pre');
  const mb = d.querySelector('.menu-b'), menu = d.getElementById('menu');
  if (mb && menu) {
    const setOpen = (open, focusBack) => {
      mb.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      mb.querySelector('.menu-l') && (mb.querySelector('.menu-l').textContent = open ? 'Schließen' : 'Menü');
      if (open) { const a = menu.querySelector('a'); a && setTimeout(() => a.focus({ preventScroll: true }), 60); }
      else if (focusBack) mb.focus();
    };
    mb.addEventListener('click', () => setOpen(mb.getAttribute('aria-expanded') !== 'true'));
    d.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) setOpen(false, true); });
    d.addEventListener('click', e => { if (menu.classList.contains('open') && !menu.contains(e.target) && !mb.contains(e.target)) setOpen(false); });
    matchMedia('(min-width: 1041px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
  }
  const simulate = (list, n) => {
    if (!list || !Number.isFinite(n) || n < 0) return;
    const base = [...list.children];
    if (!base.length) return;
    base.forEach((el, i) => { if (i >= n) el.remove(); });
    for (let i = base.length; i < n; i++) {
      const c = base[i % base.length].cloneNode(true);
      if (c.id) c.id = c.id + '-' + i;
      c.querySelectorAll('[id]').forEach(x => { x.id = x.id + '-' + i; });
      list.appendChild(c);
    }
    const empty = list.parentElement.querySelector('[data-empty="none"]');
    if (n === 0) {
      if (empty) empty.hidden = false;
      list.hidden = true;
    }
  };
  if (params.has('n')) d.querySelectorAll('[data-sim="n"]').forEach(l => simulate(l, parseInt(params.get('n'), 10)));
  if (params.has('p')) {
    const n = parseInt(params.get('p'), 10);
    d.querySelectorAll('[data-sim="partner"]').forEach(l => { simulate(l, n); if (n === 0) l.closest('section').hidden = true; });
  }
  const WV = [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }];
  const WH = [{ clipPath: 'inset(-4px 100% -4px -4px)' }, { clipPath: 'inset(-4px -4px -4px -4px)' }];
  const asm = svg => {
    const out = [];
    const groups = [...svg.querySelectorAll('.pl')];
    const step = groups.length > 5 ? Math.max(70, Math.floor(560 / groups.length)) : 140;
    groups.forEach((g, i) => {
      const t = i * step;
      out.push(g.animate([{ transform: 'translateY(-16px)' }, { transform: 'translateY(0)' }], { duration: 620, delay: t, easing: E, fill: 'backwards' }));
      g.querySelectorAll('.fc').forEach(f => out.push(f.animate(DRAW, { duration: 460, delay: t, easing: E, fill: 'backwards' })));
      g.querySelectorAll('.ff').forEach(f => out.push(f.animate(WV, { duration: 380, delay: t + 200, easing: E, fill: 'backwards' })));
      g.querySelectorAll('.dr').forEach((l, j) => out.push(l.animate(DRAW, { duration: 420, delay: t + 220 + Math.min(j, 8) * 14, easing: E, fill: 'backwards' })));
      g.querySelectorAll('.hx,.nd,.clash').forEach(h => out.push(h.animate(WV, { duration: 320, delay: t + 300, easing: E, fill: 'backwards' })));
      g.querySelectorAll('.loc-t').forEach(x => out.push(x.animate([{ clipPath: WH[0].clipPath, transform: 'translateX(-8px)' }, { clipPath: WH[1].clipPath, transform: 'translateX(0)' }], { duration: 380, delay: t + 380, easing: E, fill: 'backwards' })));
    });
    return out;
  };

  const stackIn = list => [...list.children].map((li, i) => li.animate(
    [{ transform: 'translateY(-14px)', clipPath: 'inset(0 0 100% 0)' }, { transform: 'translateY(0)', clipPath: 'inset(0 0 0% 0)' }],
    { duration: 300, delay: i * 33, easing: E, fill: 'backwards' }));

  const armOnEntry = (el, make) => {
    const anims = make(el);
    anims.forEach(a => a.pause());
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        anims.forEach(a => a.play());
      });
    }, { threshold: .22, rootMargin: '0px 0px -6% 0px' });
    io.observe(el);
  };
  const model = d.querySelector('.model');
  const heroSeq = () => {
    const svg = model.querySelector('.model-svg');
    const lyrs = [...svg.querySelectorAll('.lyr')];
    const T0 = 60, STAG = 350;
    lyrs.forEach((lyr, i) => {
      const b = T0 + i * STAG;
      const drop = lyr.querySelector('.drop');
      drop.animate([{ transform: 'translateY(-46px)' }, { transform: 'translateY(0)' }], { duration: 980, delay: b, easing: E, fill: 'backwards' });
      drop.querySelectorAll('.fc').forEach(f => f.animate(DRAW, { duration: 680, delay: b, easing: 'cubic-bezier(0.33, 0, 0.2, 1)', fill: 'backwards' }));
      drop.querySelectorAll('.ff').forEach(f => f.animate(WV, { duration: 520, delay: b + 340, easing: E, fill: 'backwards' }));
      drop.querySelectorAll('.dr').forEach((l, j) => l.animate(DRAW, { duration: 560, delay: b + 420 + Math.min(j, 14) * 16, easing: E, fill: 'backwards' }));
      drop.querySelectorAll('.hx').forEach(h => h.animate(WV, { duration: 420, delay: b + 520, easing: E, fill: 'backwards' }));
      drop.querySelectorAll('.bub').forEach((u, j) => u.animate(WV, { duration: 240, delay: b + 640 + j * 20, easing: E, fill: 'backwards' }));
      drop.querySelectorAll('.nds').forEach(n => n.animate(WV, { duration: 420, delay: b + 560, easing: E, fill: 'backwards' }));
    });
    svg.querySelectorAll('.cns').forEach((g, i) => g.animate(WV, { duration: 520, delay: 1480 + i * 140, easing: E, fill: 'backwards' }));
    const nodes = [...svg.querySelectorAll('.nds .nd')];
    nodes.forEach((n, j) => {
      const t = 1760 + j * 34;
      n.animate([{ fill: '#0F3D2C', stroke: '#FFFFFF' }, { fill: '#FFFFFF', stroke: '#0F3D2C' }], { duration: 40, delay: t, easing: 'steps(1, end)', fill: 'backwards' });
      const r = d.createElementNS('http://www.w3.org/2000/svg', 'circle');
      r.setAttribute('class', 'nd-r');
      r.setAttribute('pathLength', '1');
      r.setAttribute('cx', n.getAttribute('cx')); r.setAttribute('cy', n.getAttribute('cy')); r.setAttribute('r', '9');
      n.parentNode.insertBefore(r, n);
      r.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0, offset: .5 }, { strokeDashoffset: -1 }], { duration: 720, delay: t, easing: 'cubic-bezier(0.45, 0, 0.25, 1)' });
    });
    svg.querySelectorAll('.lbl').forEach((a, i) => {
      const t = 2160 + i * 130;
      a.querySelector('.lbl-ld').animate(DRAW, { duration: 380, delay: t, easing: E, fill: 'backwards' });
      a.querySelector('.lbl-dot').animate(WV, { duration: 120, delay: t, fill: 'backwards' });
      a.querySelector('.lbl-t').animate([{ clipPath: 'inset(-4px -4px 100% -4px)', transform: 'translateY(-12px)' }, { clipPath: 'inset(-4px -4px -4px -4px)', transform: 'translateY(0)' }], { duration: 460, delay: t + 260, easing: E, fill: 'backwards' });
    });
  };

  const scrollOpen = () => {
    if (window.CSS && CSS.supports && CSS.supports('animation-timeline: view()')) return;
    const hero = model.closest('.hero');
    let raf = 0, on = false;
    const upd = () => {
      raf = 0;
      const pr = Math.min(1, Math.max(0, window.scrollY / 360));
      model.style.setProperty('--open', pr.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(upd); };
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !on) { on = true; addEventListener('scroll', onScroll, { passive: true }); upd(); }
      else if (!e.isIntersecting && on) { on = false; removeEventListener('scroll', onScroll); model.style.setProperty('--open', '1'); }
    })).observe(hero);
  };

  const runMotion = () => {
    if (!canAnim || still()) { release(); return; }
    try {
      if (model) { heroSeq(); scrollOpen(); }
      d.querySelectorAll('[data-asm]').forEach(svg => armOnEntry(svg, asm));
      d.querySelectorAll('[data-stack]').forEach(list => armOnEntry(list, stackIn));
    } catch (e) {}
    release();
  };
  const grid = d.querySelector('.refs--all');
  const chips = [...d.querySelectorAll('.chip[data-f]')];
  if (grid && chips.length) {
    const count = d.querySelector('.count'), cn = count.querySelector('.count-n'), cw = count.querySelector('.count-w');
    const emptyF = d.querySelector('[data-empty="filter"]');
    const keys = new Set(chips.map(c => c.dataset.f));
    let cur = 'alle', busy = [];
    const cards = () => [...grid.children];
    const match = (c, k) => k === 'alle' || c.dataset.bereich === k;
    const setCount = (n, animate) => {
      const was = cn.textContent;
      cn.textContent = String(n);
      cw.textContent = n === 1 ? 'Projekt' : 'Projekte';
      if (animate && was !== String(n) && canAnim && !still()) {
        cn.animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 300, easing: E });
      }
    };
    const apply = (k, animate) => {
      busy.forEach(a => a.finish()); busy = [];
      cur = k;
      chips.forEach(c => c.setAttribute('aria-pressed', String(c.dataset.f === k)));
      const all = cards();
      const show = all.filter(c => match(c, k));
      setCount(grid.hidden ? 0 : show.length, animate);
      if (emptyF) emptyF.hidden = grid.hidden || show.length > 0;
      const p = new URLSearchParams(location.search);
      if (k === 'alle') p.delete('bereich'); else p.set('bereich', k);
      const qs = p.toString();
      try { history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash); } catch (e) {}
      if (!animate || !canAnim || still()) { all.forEach(c => { c.hidden = !match(c, k); }); return; }
      const leaving = all.filter(c => !c.hidden && !match(c, k));
      const staying = all.filter(c => !c.hidden && match(c, k));
      const entering = all.filter(c => c.hidden && match(c, k));
      const first = new Map(staying.map(c => [c, c.getBoundingClientRect()]));
      const finishLayout = () => {
        leaving.forEach(c => { c.hidden = true; });
        entering.forEach(c => { c.hidden = false; });
        staying.forEach(c => {
          const a = first.get(c), b = c.getBoundingClientRect();
          const dx = a.left - b.left, dy = a.top - b.top;
          if (dx || dy) busy.push(c.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }], { duration: 440, easing: E }));
        });
        entering.forEach((c, i) => busy.push(c.animate([{ transform: 'translateY(-18px)', clipPath: 'inset(0 0 100% 0)' }, { transform: 'translateY(0)', clipPath: 'inset(0 0 0% 0)' }], { duration: 460, delay: 60 + i * 45, easing: E, fill: 'backwards' })));
      };
      if (leaving.length) {
        const outs = leaving.map(c => c.animate([{ clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0)' }, { clipPath: 'inset(0 0 100% 0)', transform: 'translateY(10px)' }], { duration: 170, easing: EIN, fill: 'forwards' }));
        busy.push(...outs);
        Promise.all(outs.map(a => a.finished.catch(() => {}))).then(() => { outs.forEach(a => a.cancel()); if (cur === k) finishLayout(); });
      } else finishLayout();
    };
    chips.forEach(c => c.addEventListener('click', () => { if (c.dataset.f !== cur) apply(c.dataset.f, true); }));
    const reset = d.querySelector('[data-reset]');
    reset && reset.addEventListener('click', () => { apply('alle', true); chips[0].focus(); });
    const want = params.get('bereich');
    apply(want && keys.has(want) ? want : 'alle', false);
  }
  const form = d.querySelector('.form');
  if (form) {
    const done = d.querySelector('.done');
    const btn = form.querySelector('.btn--send');
    const live = form.querySelector('.form-live');
    const ICON = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 1.5 15 14.5H1Z"/><path d="M8 6.2v3.6M8 11.6v.4"/></svg>';
    const F = {
      name: { el: form.querySelector('#f-name'), msg: v => v.trim().length < 2 ? 'Bitte geben Sie Ihren Namen an.' : '' },
      mail: { el: form.querySelector('#f-mail'), msg: v => !v.trim() ? 'Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können.' : (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Diese E-Mail-Adresse ist unvollständig. Beispiel: name@firma.de' : '') },
      msg: { el: form.querySelector('#f-msg'), msg: v => v.trim().length < 10 ? 'Bitte beschreiben Sie Ihr Anliegen in ein paar Worten (mindestens 10 Zeichen).' : '' },
      ok: { el: form.querySelector('#f-ok'), msg: (v, el) => el.checked ? '' : 'Bitte stimmen Sie der Verarbeitung zu, sonst dürfen wir Ihre Nachricht nicht bearbeiten.' },
    };
    let tried = false;
    const check = (k, show) => {
      const f = F[k], fld = f.el.closest('.fld'), em = fld.querySelector('.err-m');
      const m = f.msg(f.el.value, f.el);
      if (!show) return !m;
      const was = !em.hidden;
      fld.classList.toggle('err', !!m);
      f.el.setAttribute('aria-invalid', m ? 'true' : 'false');
      if (m) {
        em.innerHTML = ICON + '<span>' + m + '</span>';
        if (!was) { em.hidden = false; if (canAnim && !still()) em.animate([{ clipPath: 'inset(0 0 100% 0)', transform: 'translateY(-4px)' }, { clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0)' }], { duration: 220, easing: E }); }
      } else em.hidden = true;
      return !m;
    };
    Object.keys(F).forEach(k => {
      const ev = k === 'ok' ? 'change' : 'input';
      F[k].el.addEventListener(ev, () => { if (tried) check(k, true); });
      F[k].el.addEventListener('blur', () => { if (tried) check(k, true); });
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (btn.getAttribute('aria-disabled') === 'true') return;
      tried = true;
      const bad = Object.keys(F).filter(k => !check(k, true));
      if (bad.length) {
        live.textContent = bad.length === 1 ? 'Ein Feld braucht noch Ihre Angabe.' : bad.length + ' Felder brauchen noch Ihre Angabe.';
        F[bad[0]].el.focus();
        return;
      }
      btn.setAttribute('aria-disabled', 'true');
      btn.classList.add('sending');
      btn.querySelector('.send-l').textContent = 'Wird gesendet …';
      live.textContent = 'Wird gesendet.';
      setTimeout(() => {
        const show = () => {
          form.hidden = true; done.hidden = false;
          done.focus();
          if (canAnim && !still()) {
            done.animate([{ clipPath: 'inset(0 0 100% 0)', transform: 'translateY(14px)' }, { clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0)' }], { duration: 460, easing: E });
            done.querySelectorAll('.done-i path').forEach((p, i) => { p.setAttribute('pathLength', '1'); p.animate(DRAW, { duration: 520, delay: 120 + i * 260, easing: E, fill: 'backwards' }); });
          }
        };
        if (canAnim && !still()) form.animate([{ clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0)' }, { clipPath: 'inset(0 0 100% 0)', transform: 'translateY(-6px)' }], { duration: 200, easing: EIN }).finished.then(show);
        else show();
      }, 1350);
    });
    d.querySelector('[data-again]').addEventListener('click', () => {
      form.reset(); tried = false;
      form.querySelectorAll('.fld').forEach(f => { f.classList.remove('err'); f.querySelector('.err-m').hidden = true; });
      form.querySelectorAll('[aria-invalid]').forEach(x => x.removeAttribute('aria-invalid'));
      btn.removeAttribute('aria-disabled'); btn.classList.remove('sending'); btn.querySelector('.send-l').textContent = 'Senden';
      live.textContent = '';
      done.hidden = true; form.hidden = false; F.name.el.focus();
    });
  }
  const toc = d.querySelector('.toc');
  if (toc && 'IntersectionObserver' in window) {
    const links = [...toc.querySelectorAll('a')];
    const targets = links.map(a => d.querySelector(a.getAttribute('href'))).filter(Boolean);
    const vis = new Map();
    const mark = () => {
      let best = null;
      targets.forEach(t => { if (vis.get(t)) best = t; });
      if (!best) return;
      links.forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + best.id));
      links.forEach(a => { if (a.hasAttribute('aria-current')) a.setAttribute('aria-current', 'true'); });
    };
    const io = new IntersectionObserver(es => { es.forEach(e => vis.set(e.target, e.isIntersecting)); mark(); }, { rootMargin: '-20% 0px -55% 0px' });
    targets.forEach(t => io.observe(t));
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', runMotion); else runMotion();
})();
