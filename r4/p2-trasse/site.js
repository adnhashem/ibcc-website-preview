(() => {
  "use strict";
  const d = document, de = d.documentElement, body = d.body;
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const qs = new URLSearchParams(location.search);
  const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const docY = el => el.getBoundingClientRect().top + scrollY;

  /* ---------- mobile menu ---------- */
  const hdr = d.querySelector(".hdr"), mb = d.querySelector(".menu-btn");
  if (hdr && mb) {
    const lbl = mb.querySelector(".sr");
    const setMenu = open => {
      hdr.classList.toggle("open", open);
      mb.setAttribute("aria-expanded", String(open));
      lbl.textContent = open ? "Menü schließen" : "Menü öffnen";
    };
    mb.addEventListener("click", () => {
      const open = !hdr.classList.contains("open");
      setMenu(open);
      if (open) setTimeout(() => { const a = d.querySelector("#nav a"); if (a) a.focus({ preventScroll: true }); }, 60);
    });
    d.addEventListener("keydown", e => {
      if (e.key === "Escape" && hdr.classList.contains("open")) { setMenu(false); mb.focus(); }
    });
    d.addEventListener("click", e => {
      if (hdr.classList.contains("open") && !hdr.contains(e.target)) setMenu(false);
    });
    matchMedia("(min-width: 1100px)").addEventListener("change", e => { if (e.matches) setMenu(false); });
  }

  /* ---------- list simulation (?n=, ?partner=) ---------- */
  const simulate = (list, n) => {
    const items = [...list.children];
    if (!items.length) return;
    if (n < items.length) items.slice(n).forEach(li => li.remove());
    for (let i = items.length; i < n; i++) {
      const c = items[i % items.length].cloneNode(true);
      c.dataset.sim = "1";
      list.appendChild(c);
    }
  };
  const nParam = qs.has("n") ? clamp(parseInt(qs.get("n"), 10) || 0, 0, 48) : null;
  const pParam = qs.has("partner") ? clamp(parseInt(qs.get("partner"), 10) || 0, 0, 48) : null;
  if (pParam !== null) {
    const pl = d.querySelector(".p-grid");
    if (pl) { simulate(pl, pParam); if (pParam === 0) pl.closest("section").hidden = true; }
  }
  const simNote = (n, what) => {
    const s = d.querySelector("[data-simnote]");
    if (s) { s.hidden = false; s.textContent = `Vorschau mit ${n} ${what} (simuliert über ?n=${n})`; }
  };

  /* ---------- karriere ---------- */
  const jobs = d.querySelector("[data-jobs]");
  if (jobs && nParam !== null) {
    simulate(jobs, nParam);
    simNote(nParam, nParam === 1 ? "Stelle" : "Stellen");
    if (nParam === 0) { jobs.hidden = true; d.querySelector("[data-jobs-empty]").hidden = false; }
  }

  /* ---------- über uns ---------- */
  const team = d.querySelector("[data-team]");
  if (team && nParam !== null) {
    simulate(team, nParam);
    simNote(nParam, nParam === 1 ? "Profil" : "Profilen");
    if (nParam === 0) { team.hidden = true; d.querySelector("[data-team-empty]").hidden = false; }
  }

  /* ---------- referenzen filter ---------- */
  const grid = d.querySelector("[data-refs]");
  if (grid) {
    if (nParam !== null) { simulate(grid, nParam); simNote(nParam, nParam === 1 ? "Projekt" : "Projekten"); }
    const items = [...grid.children];
    const btns = [...d.querySelectorAll(".fbtn")];
    const num = d.querySelector(".count .num"), word = d.querySelector(".count .word");
    const empty = d.querySelector("[data-empty]");
    const keys = ["alle", "ki", "bahn", "tief", "hoch"];
    btns.forEach(b => {
      const k = b.dataset.key;
      const n = k === "alle" ? items.length : items.filter(li => li.dataset.bereich === k).length;
      b.querySelector(".n").textContent = n;
    });
    let cur = "alle";
    const setCount = (n, anim) => {
      num.textContent = n;
      word.textContent = n === 1 ? "Projekt" : "Projekte";
      if (anim) { num.classList.remove("tick"); void num.offsetWidth; num.classList.add("tick"); }
    };
    const apply = (key, anim) => {
      if (!keys.includes(key)) key = "alle";
      cur = key;
      btns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.key === key)));
      const show = li => key === "alle" || li.dataset.bereich === key;
      const motion = anim && !reduce;
      const gr = grid.getBoundingClientRect();
      const first = new Map();
      items.forEach(li => { li.getAnimations().forEach(a => a.finish()); if (!li.hidden) first.set(li, li.getBoundingClientRect()); });
      const exiting = items.filter(li => !li.hidden && !show(li));
      if (motion) {
        exiting.forEach(li => {
          const r = first.get(li);
          Object.assign(li.style, { position: "absolute", left: r.left - gr.left + "px", top: r.top - gr.top + "px", width: r.width + "px", height: r.height + "px", margin: "0", pointerEvents: "none" });
        });
      } else exiting.forEach(li => { li.hidden = true; });
      items.forEach(li => { if (show(li)) li.hidden = false; });
      const visible = items.filter(show);
      if (motion) {
        let k = 0;
        visible.forEach(li => {
          const r = li.getBoundingClientRect(), f = first.get(li);
          if (f) {
            const dx = f.left - r.left, dy = f.top - r.top;
            if (dx || dy) li.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], { duration: 560, easing: EASE });
          } else {
            li.animate([{ opacity: 0, transform: "translateX(40px)" }, { opacity: 1, transform: "none" }], { duration: 520, delay: 90 + k++ * 60, easing: EASE, fill: "backwards" });
          }
        });
        exiting.forEach(li => {
          li.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateX(-40px)" }], { duration: 260, easing: "cubic-bezier(0.5, 0, 0.75, 0)", fill: "forwards" })
            .onfinish = () => { li.hidden = true; li.removeAttribute("style"); li.getAnimations().forEach(a => a.cancel()); };
        });
      }
      setCount(visible.length, anim);
      empty.hidden = visible.length > 0;
      const allEmpty = items.length === 0;
      empty.querySelector("[data-e-filter]").hidden = allEmpty;
      empty.querySelector("[data-e-none]").hidden = !allEmpty;
      if (anim) {
        const u = new URL(location.href);
        if (key === "alle") u.searchParams.delete("bereich"); else u.searchParams.set("bereich", key);
        history.replaceState(null, "", u);
      }
    };
    btns.forEach(b => b.addEventListener("click", () => { if (b.dataset.key !== cur || b.dataset.key === "alle") apply(b.dataset.key, true); }));
    d.querySelectorAll("[data-reset]").forEach(b => b.addEventListener("click", () => { apply("alle", true); btns[0].focus(); }));
    apply(qs.get("bereich") || "alle", false);
  }

  /* ---------- the alignment line ---------- */
  const bands = [...d.querySelectorAll(".band")];
  const kmKm = d.querySelector(".kmr-km"), kmSt = d.querySelector(".kmr-st");
  const destEl = d.querySelector("[data-dest]");
  if (bands.length && kmKm && destEl) {
    const L = +body.dataset.km || 900;
    const ST = !reduce && window.CSS && CSS.supports("animation-timeline: scroll()");
    de.classList.add("js-tr");
    if (ST) de.classList.add("tl-scroll");
    const rider = d.createElement("span");
    rider.className = "tr-rider";
    rider.setAttribute("aria-hidden", "true");
    if (!reduce) body.appendChild(rider);
    const fmt = c => { c = Math.round(c); return `${Math.floor(c / 1000)}+${String(c % 1000).padStart(3, "0")}`; };
    let segs = [], stations = [], n0 = 0, nEnd = 1, sEnd = 1, lx = 0;
    const mk = (cls, parent, top) => {
      const e = d.createElement("span");
      e.className = "tr " + cls;
      e.setAttribute("aria-hidden", "true");
      e.style.top = top + "px";
      parent.appendChild(e);
      return e;
    };
    const label = (parent, top, km, name, cls) => {
      const l = mk("tr-lab" + (cls ? " " + cls : ""), parent, top);
      l.innerHTML = `<span>km ${km}</span>` + (name ? ` · <span class="nm">${name}</span>` : "");
      return (`km ${km} · ${name || ""}`).length * 6.8;
    };
    const build = () => {
      d.querySelectorAll(".tr").forEach(e => e.remove());
      segs = []; stations = [];
      const destBand = destEl.closest(".band");
      const route = bands.slice(0, bands.indexOf(destBand) + 1);
      const first = route[0];
      const START = 28;
      n0 = docY(first) + START;
      nEnd = docY(destEl) + (destEl === destBand ? parseFloat(getComputedStyle(destEl).paddingTop) : 0);
      const span = Math.max(1, nEnd - n0);
      const chain = y => L * (y - n0) / span;
      const occupied = [];
      const station = (b, bt, y, km, name, cls) => {
        const el = mk("tr-node", b, y - bt);
        stations.push({ el, y, name });
        const len = label(b, y - bt + 14, km, name, cls);
        occupied.push([y, y + 14 + len]);
      };
      route.forEach((b, i) => {
        const bt = docY(b);
        const top = i === 0 ? START : 0;
        const bottom = b === destBand ? nEnd - bt : b.offsetHeight;
        const h = Math.max(1, bottom - top);
        const tone = b.dataset.tone === "g";
        mk("tr-plan", b, top).style.height = h + "px";
        const svg = d.createElementNS(NS, "svg");
        svg.setAttribute("class", "tr tr-seg");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("width", "2");
        svg.setAttribute("height", String(h));
        svg.setAttribute("viewBox", `0 0 2 ${h}`);
        svg.style.top = top + "px";
        const ln = d.createElementNS(NS, "line");
        ln.setAttribute("x1", "1"); ln.setAttribute("x2", "1");
        ln.setAttribute("y1", "0"); ln.setAttribute("y2", String(h));
        ln.setAttribute("pathLength", "1");
        svg.appendChild(ln);
        b.appendChild(svg);
        segs.push({ ln, a: bt + top, h, tone, p0: (bt + top - n0) / span, p1: (bt + bottom - n0) / span });
        if (i === 0) station(b, bt, bt + top, fmt(0), b.dataset.st);
        else if (b.dataset.st && b !== destBand) station(b, bt, bt, fmt(chain(bt)), b.dataset.st);
        b.querySelectorAll("[data-node]").forEach(t => { const ty = docY(t); if (ty < nEnd - 40) station(b, bt, ty, fmt(chain(ty)), t.dataset.node); });
        if (b === destBand) {
          station(b, bt, nEnd, fmt(L), "Ziel · " + destEl.dataset.dest, "end");
          mk("tr-end", b, bottom);
        }
      });
      route.forEach(b => {
        const bt = docY(b), i = route.indexOf(b);
        const top = i === 0 ? START : 0, bottom = b === destBand ? nEnd - bt : b.offsetHeight;
        for (let c = 100; c < L; c += 100) {
          const ty = n0 + span * c / L;
          if (ty < bt + top || ty >= bt + bottom) continue;
          mk("tr-tick", b, ty - bt);
          const free = !occupied.some(([a1, a2]) => ty + 54 > a1 - 6 && ty + 10 < a2 + 6) && ty + 60 < nEnd;
          if (free) { const l = mk("tr-lab hm", b, ty - bt + 10); l.textContent = fmt(c); }
        }
      });
      const ref = d.querySelector(".tr-plan");
      lx = ref ? ref.getBoundingClientRect().left + scrollX + 0.5 : 0;
      const maxS = Math.max(1, de.scrollHeight - innerHeight);
      sEnd = clamp(nEnd - innerHeight * 0.6, 1, maxS);
      if (ST) segs.forEach(sg => {
        sg.ln.style.setProperty("--r0", (sg.p0 * sEnd / maxS * 100).toFixed(3) + "%");
        sg.ln.style.setProperty("--r1", (sg.p1 * sEnd / maxS * 100).toFixed(3) + "%");
      });
      update();
    };
    const update = () => {
      const p = clamp(scrollY / sEnd);
      const yr = n0 + (nEnd - n0) * p;
      let cur = stations[0];
      if (reduce) {
        segs.forEach(sg => { sg.ln.style.strokeDashoffset = 0; });
        stations.forEach(n => { n.el.classList.add("on"); if (yr >= n.y - 1) cur = n; });
      } else {
        if (!ST) segs.forEach(sg => { sg.ln.style.strokeDashoffset = 1 - clamp((yr - sg.a) / sg.h); });
        stations.forEach(n => { const on = yr >= n.y - 1; n.el.classList.toggle("on", on); if (on) cur = n; });
      }
      kmKm.textContent = "km " + fmt(L * p);
      if (kmSt) kmSt.textContent = cur && cur.name ? " · " + cur.name : "";
      rider.style.transform = `translate(${lx}px, ${yr}px)`;
      rider.classList.toggle("on-g", segs.some(sg => sg.tone && yr >= sg.a && yr < sg.a + sg.h));
    };
    let raf = 0;
    addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); }, { passive: true });
    let rt = 0;
    const rebuild = () => { clearTimeout(rt); rt = setTimeout(build, 120); };
    addEventListener("resize", rebuild);
    if ("ResizeObserver" in window) {
      let lastH = 0;
      new ResizeObserver(() => { const h = de.scrollHeight; if (Math.abs(h - lastH) > 2) { lastH = h; rebuild(); } }).observe(body);
    }
    build();
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(build);
    addEventListener("load", build);
  }

  /* ---------- hero: the track lays itself ---------- */
  const hs = d.querySelector(".hero-svg");
  if (hs && !reduce) {
    hs.classList.add("armed");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      hs.classList.add("run");
      setTimeout(() => hs.classList.remove("armed", "run"), 3700);
    }));
  }

  /* ---------- drawings draw along their own alignment ---------- */
  const drws = [...d.querySelectorAll(".drw[data-draw]")];
  const lphs = [...d.querySelectorAll("[data-lph]")];
  if (!reduce && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        const t = e.target;
        t.classList.add("in");
        io.unobserve(t);
        setTimeout(() => t.classList.remove("armed", "in"), t.matches("[data-lph]") ? 2000 : 2200);
      }
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.2 });
    drws.concat(lphs).forEach(f => { f.classList.add("armed"); io.observe(f); });
  }

  /* ---------- LPH stations ---------- */
  lphs.forEach(w => {
    const mkr = w.querySelector(".st-mk"), sts = [...w.querySelectorAll(".st")];
    let pinned = null;
    const place = (st, instant) => {
      const n = st.querySelector(".st-node").getBoundingClientRect(), wr = w.getBoundingClientRect();
      if (instant) mkr.style.transition = "none";
      mkr.style.setProperty("--x", (n.left - wr.left + n.width / 2 - 12) + "px");
      mkr.style.setProperty("--y", (n.top - wr.top + n.height / 2 - 12) + "px");
      if (instant) { void mkr.offsetWidth; mkr.style.transition = ""; }
    };
    const go = st => {
      sts.forEach(s => s.classList.toggle("on", s === st));
      if (!st) { mkr.classList.remove("vis"); return; }
      place(st, !mkr.classList.contains("vis"));
      mkr.classList.add("vis");
    };
    sts.forEach(st => {
      const b = st.querySelector("button");
      st.addEventListener("pointerenter", () => go(st));
      b.addEventListener("focus", () => go(st));
      b.addEventListener("click", () => {
        pinned = pinned === st ? null : st;
        sts.forEach(s => s.querySelector("button").setAttribute("aria-pressed", String(s === pinned)));
        go(pinned || st);
      });
    });
    w.querySelector(".st-list").addEventListener("pointerleave", () => go(pinned));
    w.addEventListener("focusout", e => { if (!w.contains(e.relatedTarget)) go(pinned); });
    addEventListener("resize", () => { const on = sts.find(s => s.classList.contains("on")); if (on) place(on, true); });
  });

  /* ---------- contact form ---------- */
  const form = d.querySelector("[data-form]");
  if (form) {
    const btn = form.querySelector("button[type=submit]"), btnLbl = btn.querySelector(".lbl");
    const ok = form.querySelector(".ok");
    const rules = {
      name: v => v.trim().length >= 2 || (v.trim() ? "Der Name ist zu kurz. Bitte geben Sie Name und Vorname an." : "Bitte geben Sie Ihren Namen an (Name, Vorname)."),
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || (v.trim() ? "Diese E-Mail-Adresse ist unvollständig. Bitte prüfen Sie sie, z.\u00a0B. name@firma.de." : "Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können."),
      anliegen: v => v.trim().length >= 10 || (v.trim() ? "Bitte beschreiben Sie Ihr Anliegen etwas genauer (mindestens 10 Zeichen)." : "Bitte beschreiben Sie kurz Ihr Anliegen."),
      consent: (v, el) => el.checked || "Bitte stimmen Sie der Verarbeitung zu, damit wir Ihre Anfrage beantworten dürfen."
    };
    const check = el => {
      const res = rules[el.name](el.value, el);
      const fld = el.closest(".fld"), msg = fld.querySelector(".emsg");
      const bad = res !== true;
      const was = fld.classList.contains("bad");
      fld.classList.toggle("bad", bad);
      el.setAttribute("aria-invalid", String(bad));
      if (bad) {
        msg.querySelector("span").textContent = res;
        msg.hidden = false;
        if (!was) { msg.classList.remove("show"); void msg.offsetWidth; msg.classList.add("show"); }
      } else { msg.hidden = true; msg.classList.remove("show"); }
      return !bad;
    };
    const els = [...form.querySelectorAll("[name]")];
    els.forEach(el => {
      el.addEventListener("blur", () => { if (el.type !== "checkbox" && el.value.trim()) check(el); });
      el.addEventListener("input", () => { if (el.closest(".fld").classList.contains("bad")) check(el); });
      el.addEventListener("change", () => { if (el.type === "checkbox" && el.closest(".fld").classList.contains("bad")) check(el); });
    });
    form.addEventListener("submit", e => {
      e.preventDefault();
      const bad = els.filter(el => !check(el));
      if (bad.length) { bad[0].focus(); return; }
      btn.classList.add("busy");
      btn.setAttribute("aria-disabled", "true");
      btnLbl.textContent = "Wird gesendet …";
      setTimeout(() => {
        btn.classList.remove("busy");
        btn.removeAttribute("aria-disabled");
        btnLbl.textContent = "Senden";
        form.classList.add("sent");
        ok.focus();
      }, reduce ? 500 : 1300);
    });
    form.querySelector("[data-again]").addEventListener("click", () => {
      form.reset();
      form.classList.remove("sent");
      els.forEach(el => el.removeAttribute("aria-invalid"));
      form.querySelector("[name=name]").focus();
    });
  }

  /* ---------- impressum: index follows reading ---------- */
  const toc = [...d.querySelectorAll(".toc a")];
  if (toc.length && "IntersectionObserver" in window) {
    const map = new Map(toc.map(a => [a.getAttribute("href").slice(1), a]));
    const seen = new Set();
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) seen.add(e.target.id); else seen.delete(e.target.id); });
      const ids = [...map.keys()].filter(id => seen.has(id));
      toc.forEach(a => a.classList.remove("on"));
      const pick = ids.length ? ids[ids.length - 1] : null;
      if (pick) map.get(pick).classList.add("on");
    }, { rootMargin: "-20% 0px -55% 0px" });
    map.forEach((a, id) => { const t = d.getElementById(id); if (t) io.observe(t); });
  }
})();
