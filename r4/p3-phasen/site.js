(() => {
  const d = document;
  const html = d.documentElement;
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  let reduce = mq.matches;
  if (mq.addEventListener) mq.addEventListener('change', (e) => { reduce = e.matches; });
  const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const qs = new URLSearchParams(location.search);
  window.__p3 = true;

  const PH = ['Grundlagen­ermittlung', 'Vorplanung', 'Entwurfs­planung', 'Genehmigungs­planung', 'Ausführungs­planung', 'Vorbereitung der Vergabe', 'Mitwirkung bei der Vergabe', 'Objekt­überwachung', 'Objekt­betreuung'];
  const plain = (s) => s.replace(/­/g, '');

  const draw = (el, delay = 0, dur = 560) => {
    if (!el.animate) return null;
    return el.animate(
      [{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }],
      { duration: dur, delay, easing: EASE, fill: 'backwards' }
    );
  };

  function swap(el, text) {
    if (!el || plain(el.textContent) === plain(text)) return;
    el.textContent = text;
    if (!el.animate) return;
    el.animate(
      reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'none' }],
      { duration: 260, easing: EASE }
    );
  }

  /* mobile menu */
  function menu() {
    const btn = d.querySelector('.menu-btn');
    const panel = d.getElementById('mnav');
    if (!btn || !panel) return;
    const txt = btn.querySelector('.menu-txt');
    const set = (open, focus = true) => {
      btn.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
      txt.textContent = open ? 'Schließen' : 'Menü';
      if (open && focus) setTimeout(() => panel.querySelector('a')?.focus({ preventScroll: true }), 60);
    };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { set(false); btn.focus(); }
    });
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) set(false, false); });
    matchMedia('(min-width: 1100px)').addEventListener('change', (e) => { if (e.matches) set(false, false); });
  }

  /* disabled language */
  function lang() {
    d.querySelectorAll('.lang-item[aria-disabled="true"]').forEach((b) => b.addEventListener('click', (e) => e.preventDefault()));
  }

  /* hero: nine phases */
  function phases() {
    const root = d.querySelector('[data-phases]');
    if (!root) return;
    const svg = root.querySelector('.ph-svg');
    const layers = [...svg.querySelectorAll('[data-from]')];
    const range = root.querySelector('.ph-range');
    const code = root.querySelector('.tb-code');
    const name = root.querySelector('.tb-name');
    const btn = root.querySelector('.ph-play');
    const btnT = btn.querySelector('.ph-play-t');
    const ticks = [...root.querySelectorAll('.ph-ticks li')];
    const tiles = [...d.querySelectorAll('[data-set-phase]')];
    const LIFT = new Set(['approval', 'tags', 'award', 'rebar', 'lots', 'frame', 'survey']);
    const STEP = 560;
    let cur = 9;
    let mode = 'idle';
    let timer = 0;
    let held = null;

    const stateOf = (el, p) => {
      const f = +el.dataset.from;
      const dm = +(el.dataset.dim || 99);
      const t = +(el.dataset.to || 9);
      if (p < f || p > t) return 'off';
      return p >= dm ? 'dim' : 'on';
    };

    const kind = (el) => [...el.classList].find((c) => c.startsWith('ly-'))?.slice(3);

    function reveal(el, delay) {
      el.querySelectorAll('[data-d]').forEach((p, i) => draw(p, delay + Math.min(i * 16, 260), 540));
      if (LIFT.has(kind(el)) && el.animate) {
        el.animate([{ transform: 'translateY(-10px)' }, { transform: 'none' }], { duration: 560, delay, easing: EASE, fill: 'backwards' });
      }
    }

    function separate() {
      svg.querySelectorAll('.lift').forEach((g) => {
        const to = getComputedStyle(g).transform;
        if (!to || to === 'none') return;
        g.animate([{ transform: `translateY(${+g.dataset.lift0 || 0}px)` }, { transform: to }], { duration: 720, delay: 260, easing: EASE, fill: 'backwards' });
      });
      const ex = svg.querySelector('.ly-explode');
      if (ex) ex.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, delay: 860, easing: 'ease-out', fill: 'backwards' });
    }

    function setBtn(m) {
      mode = m;
      btn.dataset.mode = m;
      btnT.textContent = m === 'playing' ? 'Pause' : m === 'done' ? 'Wiederholen' : m === 'paused' ? 'Weiter' : 'Abspielen';
    }

    function apply(p, { animate = true, replayOwn = false, fromZero = false } = {}) {
      const prev = cur;
      cur = p;
      let n = 0;
      layers.forEach((el) => {
        const s = stateOf(el, p);
        const was = fromZero ? (+el.dataset.from === 0 ? 'on' : 'off') : el.dataset.state;
        el.dataset.state = s;
        if (!animate || reduce) return;
        const own = +el.dataset.from === p;
        if (s === 'on' && (was === 'off' || (replayOwn && own && prev !== p) || (replayOwn && own && prev === p))) {
          reveal(el, (+el.dataset.from < p && p - prev > 1 ? Math.min(n++ * 70, 280) : 0));
        }
      });
      if (animate && !reduce && p === 9 && (prev !== 9 || replayOwn)) separate();
      svg.dataset.p = String(p);
      root.style.setProperty('--p', p);
      range.value = String(p);
      range.setAttribute('aria-valuetext', `LPH ${p} · ${plain(PH[p - 1])}`);
      swap(code, `LPH ${p}`);
      swap(name, PH[p - 1]);
      ticks.forEach((li, i) => { li.classList.toggle('is-on', i === p - 1); li.classList.toggle('is-past', i < p); });
      tiles.forEach((t) => t.classList.toggle('is-cur', +t.dataset.setPhase === p));
    }

    function tick() {
      if (cur >= 9) { setBtn('done'); return; }
      apply(cur + 1);
      if (cur >= 9) { setBtn('done'); return; }
      timer = setTimeout(tick, STEP);
    }

    function play(restart) {
      clearTimeout(timer);
      held = null;
      setBtn('playing');
      if (restart) {
        layers.forEach((el) => { el.dataset.state = +el.dataset.from === 0 ? 'on' : 'off'; });
        svg.dataset.p = '0';
        cur = 0;
        timer = setTimeout(tick, 120);
      } else {
        timer = setTimeout(tick, cur === 0 ? 120 : 260);
      }
    }

    function stop(m) { clearTimeout(timer); setBtn(m ?? (cur >= 9 ? 'done' : 'paused')); }

    btn.addEventListener('click', () => {
      if (mode === 'playing') stop('paused');
      else if (mode === 'paused') play(false);
      else play(true);
    });

    range.addEventListener('input', () => {
      clearTimeout(timer);
      held = null;
      const p = +range.value;
      apply(p, { replayOwn: true });
      setBtn(p >= 9 ? 'done' : 'paused');
    });

    const scrollToHero = (then) => {
      const top = Math.max(0, root.closest('section').getBoundingClientRect().top + scrollY - (d.querySelector('.hdr')?.offsetHeight || 0));
      if (Math.abs(scrollY - top) < 4) { then(); return; }
      if (reduce) { scrollTo(0, top); then(); return; }
      let done = false;
      const fin = () => { if (done) return; done = true; removeEventListener('scrollend', fin); then(); };
      addEventListener('scrollend', fin, { once: true });
      setTimeout(fin, 900);
      scrollTo({ top, behavior: 'smooth' });
    };

    tiles.forEach((t) => t.addEventListener('click', (e) => {
      e.preventDefault();
      const p = +t.dataset.setPhase;
      clearTimeout(timer);
      held = null;
      setBtn(p >= 9 ? 'done' : 'paused');
      scrollToHero(() => {
        apply(p, { replayOwn: true });
        range.focus({ preventScroll: true });
      });
      if (history.replaceState) history.replaceState(null, '', `#lph-${p}`);
    }));

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        if (!e.isIntersecting && mode === 'playing') { clearTimeout(timer); held = 'view'; setBtn('paused'); }
        else if (e.isIntersecting && held === 'view') { play(false); }
      }, { threshold: 0.15 }).observe(root);
    }
    d.addEventListener('visibilitychange', () => {
      if (d.hidden && mode === 'playing') { clearTimeout(timer); held = 'tab'; setBtn('paused'); }
      else if (!d.hidden && held === 'tab') { play(false); }
    });

    const m = /^#lph-([1-9])$/.exec(location.hash);
    if (m) {
      svg.classList.add('no-tr');
      apply(+m[1], { animate: false });
      requestAnimationFrame(() => requestAnimationFrame(() => svg.classList.remove('no-tr')));
      setBtn(+m[1] >= 9 ? 'done' : 'paused');
    } else if (reduce) {
      apply(9, { animate: false });
      setBtn('idle');
    } else {
      layers.forEach((el) => { el.dataset.state = +el.dataset.from === 0 ? 'on' : 'off'; });
      svg.classList.add('no-tr');
      svg.dataset.p = '0';
      requestAnimationFrame(() => requestAnimationFrame(() => svg.classList.remove('no-tr')));
      cur = 0;
      root.style.setProperty('--p', 1);
      range.value = '1';
      code.textContent = 'LPH 1';
      name.textContent = PH[0];
      ticks.forEach((li, i) => { li.classList.toggle('is-on', i === 0); li.classList.toggle('is-past', i < 1); });
      setBtn('playing');
      timer = setTimeout(tick, 220);
    }
  }

  /* drawings and phase bars build on entry */
  function builds() {
    const dwgs = [...d.querySelectorAll('svg.dwg[data-build]')];
    const bars = [...d.querySelectorAll('.pb')];
    if (reduce || !('IntersectionObserver' in window)) return;
    const build = (svg) => {
      svg.classList.remove('is-pending');
      svg.classList.add('is-built');
      svg.querySelectorAll('[data-step]').forEach((g) => {
        const k = +g.dataset.step - 1;
        const delay = k * 300;
        g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, delay, easing: EASE, fill: 'backwards' });
        if (k > 0) g.animate([{ transform: 'translateY(-6px)' }, { transform: 'none' }], { duration: 520, delay, easing: EASE, fill: 'backwards' });
        g.querySelectorAll('[data-d]').forEach((p, i) => draw(p, delay + Math.min(i * 30, 240), 640));
      });
    };
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      if (e.target.classList.contains('pb')) e.target.classList.remove('is-pending');
      else build(e.target);
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.25 });
    dwgs.forEach((el) => { el.classList.add('is-pending'); io.observe(el); });
    bars.forEach((el) => { el.classList.add('is-pending'); io.observe(el); });
  }

  /* simulated list counts: ?n= for the page's main list, ?p= for partners */
  function simulate(list, n) {
    const items = [...list.children];
    if (!items.length || Number.isNaN(n)) return;
    n = Math.max(0, Math.min(24, n));
    if (n < items.length) items.slice(n).forEach((li) => li.remove());
    for (let i = items.length; i < n; i++) {
      const c = items[i % items.length].cloneNode(true);
      c.removeAttribute('id');
      c.querySelectorAll('[id]').forEach((x) => x.removeAttribute('id'));
      list.appendChild(c);
    }
    const empty = list.parentElement.querySelector('.list-empty');
    if (n === 0) {
      if (empty) empty.hidden = false;
      if (list.dataset.list === 'partners') list.closest('.partners').hidden = true;
      else list.hidden = true;
    }
  }

  function counts() {
    const n = qs.get('n');
    const p = qs.get('p');
    const primary = d.querySelector('[data-list-primary]');
    if (primary && n !== null && !primary.dataset.list.startsWith('refs')) simulate(primary, parseInt(n, 10));
    if (primary && n !== null && primary.dataset.list === 'refs-home') simulate(primary, parseInt(n, 10));
    const partners = d.querySelector('[data-list="partners"]');
    if (partners && p !== null) simulate(partners, parseInt(p, 10));
  }

  /* referenzen filter */
  function refs() {
    const wrap = d.querySelector('[data-refs]');
    if (!wrap) return;
    const list = wrap.querySelector('.ref-grid');
    const n = qs.get('n');
    if (n !== null) {
      const k = parseInt(n, 10);
      const src = [...list.children];
      if (!Number.isNaN(k)) {
        src.slice(Math.max(0, k)).forEach((li) => li.remove());
        for (let i = src.length; i < k; i++) {
          const c = src[i % src.length].cloneNode(true);
          c.removeAttribute('id');
          list.appendChild(c);
        }
      }
    }
    const items = [...list.children];
    const chips = [...wrap.querySelectorAll('[data-filter]')];
    const countN = wrap.querySelector('.count-n');
    const countW = wrap.querySelector('.count-w');
    const empty = wrap.querySelector('.empty');
    const emptyT = empty.querySelector('[data-empty-text]');
    const reset = empty.querySelector('[data-reset]');
    const NAMES = { ki: 'Konstruktiver Ingenieurbau', bahn: 'Verkehrsanlagen / Bahnbau', tief: 'Tiefbau', hoch: 'Hochbau' };
    let key = 'alle';
    let busy = null;

    const setCount = (k, animate) => {
      const word = k === 1 ? 'Projekt' : 'Projekte';
      if (countN.textContent === String(k)) { countW.textContent = word; return; }
      countN.textContent = String(k);
      countW.textContent = word;
      if (animate && countN.animate) {
        countN.animate(reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(60%)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: EASE });
      }
    };

    const finish = (show, animate) => {
      setCount(show.length, animate);
      const none = show.length === 0;
      empty.hidden = !none;
      if (none) {
        if (items.length === 0) {
          emptyT.textContent = 'Derzeit sind keine Projekte veröffentlicht.';
          reset.hidden = true;
        } else {
          emptyT.textContent = `Im Bereich ${NAMES[key]} sind derzeit keine Projekte veröffentlicht.`;
          reset.hidden = false;
        }
      }
    };

    function set(next, animate) {
      key = next;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === key)));
      const show = items.filter((li) => key === 'alle' || li.dataset.bereich === key);
      if (!animate || reduce || !list.animate) {
        items.forEach((li) => { li.hidden = !show.includes(li); });
        if (animate && reduce) show.forEach((li) => li.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 220 }));
        finish(show, animate);
        return;
      }
      if (busy) busy.forEach((a) => a.finish());
      const visible = items.filter((li) => !li.hidden);
      const first = new Map(visible.map((li) => [li, li.getBoundingClientRect()]));
      const leaving = visible.filter((li) => !show.includes(li));
      const outs = leaving.map((li) => li.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(0.96)' }], { duration: 170, easing: 'cubic-bezier(0.4, 0, 1, 1)', fill: 'forwards' }));
      busy = outs;
      const go = () => {
        outs.forEach((a) => a.cancel());
        busy = null;
        items.forEach((li) => { li.hidden = !show.includes(li); });
        let k = 0;
        show.forEach((li) => {
          const f = first.get(li);
          const l = li.getBoundingClientRect();
          if (f) {
            const dx = f.left - l.left;
            const dy = f.top - l.top;
            if (dx || dy) li.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 440, easing: EASE });
          } else {
            li.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: Math.min(k++ * 50, 250), easing: EASE, fill: 'backwards' });
          }
        });
        finish(show, true);
      };
      if (outs.length) Promise.all(outs.map((a) => a.finished)).then(go, go);
      else go();
    }

    chips.forEach((c) => c.addEventListener('click', () => {
      if (c.dataset.filter === key) return;
      set(c.dataset.filter, true);
      const u = new URL(location.href);
      if (key === 'alle') u.searchParams.delete('bereich'); else u.searchParams.set('bereich', key);
      history.replaceState(null, '', u);
    }));
    reset.addEventListener('click', () => {
      set('alle', true);
      const u = new URL(location.href);
      u.searchParams.delete('bereich');
      history.replaceState(null, '', u);
      chips[0].focus();
    });

    const b = qs.get('bereich');
    set(NAMES[b] ? b : 'alle', false);
  }

  /* contact form */
  function contact() {
    const form = d.querySelector('form[data-contact]');
    if (!form) return;
    const ok = d.querySelector('.form-ok');
    const send = form.querySelector('.btn-send');
    const sendT = send.querySelector('.send-t');
    const alertIc = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 4.2v4.6M8 10.8v1.2" stroke="currentColor" stroke-width="1.6"/></svg>';
    const rules = {
      name: (el) => (el.value.trim() ? '' : 'Bitte geben Sie Ihren Namen ein.'),
      email: (el) => {
        const v = el.value.trim();
        if (!v) return 'Bitte geben Sie Ihre E-Mail-Adresse ein, damit wir antworten können.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Diese E-Mail-Adresse ist unvollständig. Bitte prüfen Sie sie, zum Beispiel name@firma.de.';
      },
      msg: (el) => (el.value.trim() ? '' : 'Bitte beschreiben Sie kurz Ihr Anliegen.'),
      consent: (el) => (el.checked ? '' : 'Bitte stimmen Sie der Verarbeitung zu, sonst dürfen wir Ihre Nachricht nicht bearbeiten.'),
    };
    const touched = new Set();
    const show = (el, msg) => {
      const field = el.closest('.field');
      let err = field.querySelector('.err');
      if (!msg) {
        el.removeAttribute('aria-invalid');
        el.removeAttribute('aria-describedby');
        err?.remove();
        return true;
      }
      el.setAttribute('aria-invalid', 'true');
      if (!err) {
        err = d.createElement('p');
        err.className = 'err';
        err.id = `${el.id}-err`;
        field.appendChild(err);
      }
      if (err.dataset.msg !== msg) { err.innerHTML = alertIc + '<span></span>'; err.lastChild.textContent = msg; err.dataset.msg = msg; }
      el.setAttribute('aria-describedby', err.id);
      return false;
    };
    const check = (el) => show(el, rules[el.name](el));
    Object.keys(rules).forEach((k) => {
      const el = form.elements[k];
      el.addEventListener('blur', () => { if (el.type !== 'checkbox' && el.value.trim()) touched.add(k); if (touched.has(k)) check(el); });
      el.addEventListener(el.type === 'checkbox' ? 'change' : 'input', () => { if (touched.has(k) || el.getAttribute('aria-invalid')) check(el); });
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (send.getAttribute('aria-busy') === 'true') return;
      let first = null;
      Object.keys(rules).forEach((k) => { touched.add(k); const el = form.elements[k]; if (!check(el) && !first) first = el; });
      if (first) { first.focus(); return; }
      send.setAttribute('aria-busy', 'true');
      send.disabled = true;
      sendT.textContent = 'Wird geprüft …';
      setTimeout(() => {
        send.removeAttribute('aria-busy');
        send.disabled = false;
        sendT.textContent = 'Senden';
        form.hidden = true;
        ok.hidden = false;
        ok.focus();
      }, 1100);
    });
    ok.querySelector('[data-again]').addEventListener('click', () => {
      form.reset();
      touched.clear();
      form.querySelectorAll('.err').forEach((x) => x.remove());
      form.querySelectorAll('[aria-invalid]').forEach((x) => x.removeAttribute('aria-invalid'));
      ok.hidden = true;
      form.hidden = false;
      form.elements.name.focus();
    });
  }

  /* legal: in-page index */
  function toc() {
    const links = [...d.querySelectorAll('.toc a')];
    if (!links.length || !('IntersectionObserver' in window)) return;
    const targets = links.map((a) => d.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const mark = (id) => links.forEach((a) => {
      const on = a.getAttribute('href') === `#${id}`;
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    const seen = new Map();
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => seen.set(e.target.id, e.isIntersecting));
      const firstVisible = targets.filter((t) => seen.get(t.id)).pop();
      if (firstVisible) mark(firstVisible.id);
    }, { rootMargin: '-15% 0px -60% 0px' });
    targets.forEach((t) => io.observe(t));
    mark(targets[0].id);
  }

  menu();
  lang();
  counts();
  refs();
  phases();
  builds();
  contact();
  toc();
  html.classList.remove('pre');
})();
