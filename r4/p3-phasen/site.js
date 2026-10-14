(() => {
  const d = document;
  const html = d.documentElement;
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  let reduce = mq.matches;
  if (mq.addEventListener) mq.addEventListener('change', (e) => { reduce = e.matches; });
  const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const qs = new URLSearchParams(location.search);
  window.__p3 = true;

  /*I18N-START*/
  const I18N = {"de":{"meta.site.name":"C&amp;C Ingenieure GmbH","header.skip":"Zum Inhalt springen","header.nav.aria":"Hauptnavigation","header.nav.mobile.aria":"Hauptnavigation mobil","header.menu.open":"Menü","header.menu.close":"Schließen","header.lang.aria":"Sprache","header.lang.de":"DE","header.lang.en":"EN","header.logo.alt":"C&amp;C Ingenieure GmbH","nav.startseite":"Startseite","nav.leistungen":"Leistungen","nav.referenzen":"Referenzen","nav.karriere":"Karriere","nav.ueberuns":"Über uns","nav.kontakt":"Kontakt","home.kicker":"Ingenieurbüro · Bruchsal","home.h1.line1":"Infrastruktur planen.","home.h1.line2":"Verlässlich umsetzen.","home.lead":"C&amp;C Ingenieure begleitet Ihr Vorhaben von der Planung bis zur Bau&shy;überwachung: Objekt- und Tragwerks&shy;planung, Ausschreibung und Vergabe, Projekt&shy;steuerung und BIM.","home.cta.services":"Unsere Leistungen","home.cta.contact":"Kontakt aufnehmen","home.hero.caption":"Schichtenmodell: Verkehrsanlage, Objektplanung, Tragwerk","home.intro.h2":"Partnerschaftlich, transparent, verlässlich.","home.intro.p":"Wir verstehen jede Zusammenarbeit als vertrauensvolle Partnerschaft, geprägt von Respekt, Transparenz und einem klaren Fokus auf gemeinsame Ziele. Unser Anspruch sind nachhaltige Lösungen, die höchsten Qualitätsansprüchen genügen und langfristig überzeugen.","home.fact.1.title":"Alle HOAI-Leistungsphasen","home.fact.1.text":"Von der Grundlagen&shy;ermittlung bis zur Objekt&shy;betreuung aus einer Hand.","home.fact.2.title":"Bauvorlageberechtigt nach VV&nbsp;BAU","home.fact.2.text":"Fachtechnische Prüfung und Freigabe für bahnspezifische Projekte.","home.fact.3.title":"Spezialisiert auf Infrastruktur","home.fact.3.text":"Konstruktiver Ingenieurbau, Verkehrsanlagen, Bahnbau und Tiefbau.","home.services.h2":"Unsere Leistungen im Überblick","home.services.all":"Alle Leistungen ansehen","home.refs.h2":"Ausgewählte Referenzen","home.refs.all":"Alle Referenzen","home.lph.h2":"Alle Leistungsphasen der HOAI","home.lph.lead":"Wir übernehmen die Leistungsphasen, die Ihr Projekt braucht, einzeln oder durchgängig.","home.cta.h2":"Wie können wir Sie bei Ihrem Vorhaben unterstützen?","home.cta.p":"Wenn Sie Wert auf Verlässlichkeit, Fairness und eine partnerschaftliche Zusammenarbeit legen, stehen wir Ihnen gerne zur Seite. Wir freuen uns darauf, Ihr Projekt gemeinsam voranzubringen.","leistungen.h1":"Ingenieurleistungen aus einer Hand","leistungen.lead":"Sieben Leistungsfelder, die ineinandergreifen: von der Planung über die Vergabe bis zur Bauüberwachung.","leistungen.toc.aria":"Leistungen auf dieser Seite","leistungen.cta.h2":"Welche Leistung braucht Ihr Projekt?","lph.label":"LPH","lph.1":"Grundlagen&shy;ermittlung","lph.2":"Vorplanung","lph.3":"Entwurfs&shy;planung","lph.4":"Genehmigungs&shy;planung","lph.5":"Ausführungs&shy;planung","lph.6":"Vorbereitung der Vergabe","lph.7":"Mitwirkung bei der Vergabe","lph.8":"Objekt&shy;überwachung","lph.9":"Objekt&shy;betreuung","referenzen.h1":"Projekte, die wir begleitet haben","referenzen.lead":"Eine Auswahl aus Ingenieurbau, Bahn, Tiefbau und Hochbau. Nach Bereich filtern.","referenzen.filter.aria":"Nach Bereich filtern","referenzen.filter.all":"Alle","referenzen.field.ki":"Konstruktiver Ingenieurbau","referenzen.field.bahn":"Verkehrsanlagen / Bahnbau","referenzen.field.tief":"Tiefbau","referenzen.field.hoch":"Hochbau","referenzen.empty.h3":"Keine Projekte in diesem Bereich","referenzen.empty.p":"Für diesen Bereich ist derzeit kein Projekt veröffentlicht. Alle Bereiche zeigen die vollständige Auswahl.","referenzen.none.h3":"Referenzen folgen","referenzen.none.p":"Die Projektseiten werden gerade vorbereitet. Gerne erzählen wir Ihnen direkt, woran wir arbeiten.","referenzen.draftnote":"Entwurf: Projekttexte sind aus unserer Projektverwaltung übernommen und vor Veröffentlichung zu prüfen. Fotos folgen. Neue Projekte lassen sich später selbst ergänzen.","referenzen.cta.h2":"Ein ähnliches Vorhaben geplant?","karriere.h1":"Arbeiten Sie mit uns an Infrastruktur","karriere.lead":"Wir suchen Ingenieurinnen und Ingenieure, die Verantwortung übernehmen und Projekte von der Planung bis zur Ausführung begleiten.","karriere.jobs.h2":"Offene Stellen","karriere.job.example":"Beispiel, wird ersetzt","karriere.job.title":"[Stellenbezeichnung], z.&nbsp;B. Bauingenieur/in Konstruktiver Ingenieurbau (m/w/d)","karriere.job.meta":"Bruchsal · [Vollzeit/Teilzeit] · ab [Datum]","karriere.job.text":"[Zwei bis drei Sätze zu den Aufgaben und zum gesuchten Profil.]","karriere.job.apply":"Jetzt bewerben","karriere.empty.h3":"Derzeit ist keine Stelle ausgeschrieben","karriere.empty.p":"Eine Initiativbewerbung ist trotzdem jederzeit willkommen.","karriere.initiative.h2":"Keine passende Stelle dabei?","karriere.initiative.p":"Initiativbewerbungen sind willkommen. Schicken Sie uns Ihre Unterlagen per E-Mail und erzählen Sie, woran Sie arbeiten möchten.","karriere.apply.label":"Bewerbung an","karriere.apply.privacy.pre":"Informationen zum Umgang mit Bewerberdaten finden Sie in der","karriere.apply.privacy.link":"Datenschutz&shy;erklärung","karriere.team.h2":"Lernen Sie unser Team kennen","karriere.team.cta":"Über uns","ueberuns.h1":"Ein Ingenieurbüro für Infrastruktur&shy;projekte","ueberuns.lead":"Wir sind spezialisiert auf Infrastruktur&shy;projekte und decken alle Leistungsphasen gemäß HOAI ab.","ueberuns.value.respekt.title":"Respekt","ueberuns.value.respekt.text":"Zusammenarbeit auf Augenhöhe mit Auftraggebern, Behörden und Partnern.","ueberuns.value.transparenz.title":"Transparenz","ueberuns.value.transparenz.text":"Nachvollziehbare Entscheidungen, klare Kommunikation, saubere Dokumentation.","ueberuns.value.verlaesslichkeit.title":"Verlässlichkeit","ueberuns.value.verlaesslichkeit.text":"Präzision und Termintreue vom ersten Entwurf bis zur Abnahme.","ueberuns.value.fairness.title":"Fairness","ueberuns.value.fairness.text":"Eine vertrauensvolle Partnerschaft mit gemeinsamen Zielen.","ueberuns.management.h2":"Geschäftsführung","ueberuns.md.name":"Hüsnü Cetinkaya","ueberuns.md.role":"Geschäftsführer","ueberuns.md.bio":"Sechs Jahre Erfahrung als Projektleiter für Infrastrukturmaßnahmen. Schwerpunkte: konstruktiver Ingenieurbau, Verkehrsanlagen sowie Ausschreibung und Vergabe. Bauvorlage&shy;berechtigter nach VV&nbsp;BAU.","ueberuns.staff.h2":"Mitarbeiter","ueberuns.staff.lga.name":"Lovorka Grgec Alajbeg","ueberuns.staff.lga.role":"Mitarbeiterin","ueberuns.staff.as.name":"Aghil Siahpoush","ueberuns.staff.as.role":"Mitarbeiter","ueberuns.staff.profile.pending":"[Kurzprofil folgt: Ausbildung, Schwerpunkte, Aufgaben im Büro.]","ueberuns.cta.h2":"Sprechen Sie mit uns über Ihr Projekt","kontakt.h1":"Wie können wir Sie bei Ihrem Vorhaben unterstützen?","kontakt.lead":"Schreiben Sie uns kurz, worum es geht. Wir melden uns bei Ihnen.","kontakt.ways.aria":"Kontaktwege","kontakt.address.label":"Adresse","kontakt.phone.label":"Telefon","kontakt.email.label":"E-Mail","kontakt.map.osm":"Route in OpenStreetMap öffnen","kontakt.map.osm.newtab":"(öffnet in neuem Tab)","form.h2":"Nachricht senden","form.name.label":"Name, Vorname","form.email.label":"Ihre E-Mail","form.message.label":"Ihr Anliegen","form.consent":"Ich bin damit einverstanden, dass diese Daten zum Zwecke der Kontaktaufnahme gespeichert und verarbeitet werden. Ich kann meine Einwilligung jederzeit widerrufen.","form.consent.more.link":"Datenschutz&shy;erklärung","form.required.note":"* Pflichtfeld","form.submit":"Senden","form.sending":"Wird gesendet …","form.error.name":"Bitte geben Sie Ihren Namen an.","form.error.email.empty":"Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können.","form.error.email.invalid":"Diese E-Mail-Adresse ist unvollständig. Beispiel: name@firma.de","form.error.message":"Bitte beschreiben Sie Ihr Anliegen in ein paar Worten (mindestens 10 Zeichen).","form.error.consent":"Bitte stimmen Sie der Verarbeitung zu, sonst dürfen wir Ihre Nachricht nicht bearbeiten.","form.done.h3":"Nachricht erfasst","form.done.preview":"Vorschau: Die Nachricht wurde nicht versendet.","form.done.preview.p":"Diese Seite ist ein Entwurf und überträgt keine Daten. Schreiben Sie uns bis dahin direkt an info@ib-cc.de.","form.done.again":"Neue Nachricht schreiben","legal.h1":"Impressum und Datenschutz","legal.toc.aria":"Inhalt dieser Seite","partners.h2":"Unsere Partner","partners.logo.pending":"LOGO FOLGT","footer.contact.h":"Kontakt","footer.md.h":"Geschäftsführer","footer.md":"M.Eng. Hüsnü Cetinkaya","footer.register.h":"Handelsregister","footer.register":"HRB 743910 Mannheim","footer.vat":"USt-IdNr. DE353174530","footer.copyright":"© 2026 C&amp;C Ingenieure GmbH","footer.impressum":"Impressum","footer.datenschutz":"Datenschutz","footer.phone":"Tel +49 173 6992298","footer.email":"info@ib-cc.de","footer.web":"www.ib-cc.de","cta.contact":"Kontakt aufnehmen","ui.schematic":"Schematische Darstellung","ui.schematic.photo.pending":"Schematische Darstellung · Foto folgt","ui.field.pending":"Bereich zu bestätigen","ui.count.0":"0 Projekte","ui.count.1":"1 Projekt","ui.count.n":"{n} Projekte","ui.filter.reset":"Filter zurücksetzen","ui.newtab":"öffnet in neuem Tab","meta.home.title":"C&amp;C Ingenieure GmbH · Ingenieurbüro für Infrastruktur in Bruchsal","meta.home.description":"Infrastruktur planen. Verlässlich umsetzen. Ingenieurbüro in Bruchsal für Objekt- und Tragwerks&shy;planung, Ausschreibung und Vergabe, Bauüberwachung, Projekt&shy;steuerung und BIM, alle Leistungsphasen der HOAI.","meta.leistungen.title":"Leistungen · C&amp;C Ingenieure GmbH","meta.leistungen.description":"Sieben Leistungsfelder aus einer Hand: BVB nach VV&nbsp;BAU, Objektplanung, Tragwerks&shy;planung, Ausschreibung und Vergabe, Bauüberwachung, Projekt&shy;steuerung und BIM.","meta.referenzen.title":"Referenzen · C&amp;C Ingenieure GmbH","meta.referenzen.description":"Projekte, die wir begleitet haben: Konstruktiver Ingenieurbau, Verkehrsanlagen und Bahnbau, Tiefbau und Hochbau.","meta.karriere.title":"Karriere · C&amp;C Ingenieure GmbH","meta.karriere.description":"Arbeiten Sie mit uns an Infrastruktur: offene Stellen und Initiativbewerbung bei C&amp;C Ingenieure in Bruchsal.","meta.ueberuns.title":"Über uns · C&amp;C Ingenieure GmbH","meta.ueberuns.description":"Ein Ingenieurbüro für Infrastruktur&shy;projekte: Werte, Geschäftsführung und Team von C&amp;C Ingenieure in Bruchsal.","meta.kontakt.title":"Kontakt · C&amp;C Ingenieure GmbH","meta.kontakt.description":"Kontakt zu C&amp;C Ingenieure GmbH, Werner-von-Siemens-Straße 2-6, Gebäude 5110b, 76646 Bruchsal. Telefon +49 173 6992298, info@ib-cc.de.","meta.impressum.title":"Impressum und Datenschutz · C&amp;C Ingenieure GmbH","meta.impressum.description":"Impressum und Datenschutz&shy;erklärung der C&amp;C Ingenieure GmbH, Bruchsal.","partners.1":"DB InfraGO AG","partners.2":"DB Bahnbau Gruppe GmbH","partners.3":"Autobahn GmbH","partners.4":"Stadt Heidelberg","partners.5":"Stadt Wetzlar","partners.6":"Stadt Frankfurt am Main","partners.7":"Stadt Altena","partners.8":"RNV","partners.9":"Lipoid","svc.bvb.title":"Bauvorlage&shy;berechtigter nach VV&nbsp;BAU","svc.bvb.summary":"Prüfung und Freigabe von Ausführungs&shy;unterlagen für Bahnprojekte.","svc.bvb.lead":"Als bauvorlageberechtigtes Ingenieurbüro prüfen und überwachen wir Bahnprojekte. Wir stellen sicher, dass alle rechtlichen und technischen Vorgaben eingehalten werden.","svc.bvb.b1":"Fachtechnische Prüfung und Freigabe von Ausführungs&shy;unterlagen","svc.bvb.b2":"Einhaltung von Vorschriften und Normen","svc.bvb.b3":"Koordination mit dem Eisenbahn-Bundesamt und weiteren Behörden","svc.bvb.b4":"Koordination der Fachentwürfe","svc.bvb.caption":"Gleisanlage mit Brückenbauwerk","svc.objekt.title":"Objektplanung","svc.objekt.summary":"Konstruktiver Ingenieurbau, Verkehrsanlagen, Hochbau und Tiefbau nach HOAI.","svc.objekt.lead":"Maßgeschneiderte Lösungen für Ihre Bauprojekte gemäß den Leistungsbildern der HOAI, ganzheitlich und effizient.","svc.objekt.b1":"Konstruktiver Ingenieurbau: Brücken, Stützwände, Fels- und Hangsicherungen, Lärmschutz","svc.objekt.b2":"Verkehrsanlagen und Bahnbau, auch Personenbahnhöfe","svc.objekt.b3":"Hochbau für gewerbliche und private Vorhaben","svc.objekt.b4":"Tiefbau: Kabeltrassen, Ver- und Entsorgungsleitungen, Entwässerung","svc.objekt.caption":"Stützwand oder Brückenbauwerk","svc.tragwerk.title":"Tragwerks&shy;planung","svc.tragwerk.summary":"Statik, Konstruktion und Bewehrungsplanung, auch für Bestandsbauwerke.","svc.tragwerk.lead":"Wir begleiten Sie von der Grundlagen&shy;ermittlung bis zur prüffähigen statischen Berechnung, mit sicheren, wirtschaftlichen und nachhaltigen Tragwerken.","svc.tragwerk.b1":"Tragwerksentwurf und Genehmigungsstatik","svc.tragwerk.b2":"Detailnachweise und Nachberechnung von Bestandsbauwerken","svc.tragwerk.b3":"Schal-, Rohbau- und Bewehrungsplanung, Fugenbandpläne","svc.tragwerk.b4":"Stahlbau","svc.tragwerk.caption":"Bewehrung und Schalung auf der Baustelle","svc.vergabe.title":"Ausschreibung &amp; Vergabe","svc.vergabe.summary":"Leistungsverzeichnisse, Kostenermittlung und Vergabeempfehlung.","svc.vergabe.lead":"Wir bereiten Ausschreibungen vor und wirken bei der Vergabe mit. Das Verfahren bleibt rechtssicher, wirtschaftlich und transparent.","svc.vergabe.b1":"Leistungsbeschreibung mit Leistungsverzeichnis","svc.vergabe.b2":"Mengenberechnung und Kostenermittlung","svc.vergabe.b3":"Prüfung und Wertung der Angebote","svc.vergabe.b4":"Bietergespräche und Vergabeempfehlung","svc.vergabe.caption":"Leistungsverzeichnis und Pläne am Arbeitsplatz","svc.bauueberwachung.title":"Bauüberwachung &amp; Bauoberleitung","svc.bauueberwachung.summary":"Qualitäts-, Termin- und Kostenkontrolle bis zur Abnahme.","svc.bauueberwachung.lead":"Wir begleiten Ihr Bauvorhaben vor Ort, damit es termingerecht und qualitätsgesichert umgesetzt wird.","svc.bauueberwachung.b1":"Qualitätskontrolle der Bauausführung","svc.bauueberwachung.b2":"Kosten- und Terminkontrolle","svc.bauueberwachung.b3":"Baudokumentation und Prüfung der Bautagebücher","svc.bauueberwachung.b4":"Unterstützung bei der Abnahme, Mängelverfolgung","svc.bauueberwachung.caption":"Bauleitung auf der Baustelle","svc.steuerung.title":"Projektsteuerung","svc.steuerung.summary":"Organisation, Termine, Kosten und Risiken im Blick.","svc.steuerung.lead":"Von der ersten Idee bis zur Fertigstellung: klare Organisation, zielgerichtete Kommunikation und Steuerung von Kosten, Terminen und Qualität.","svc.steuerung.b1":"Projektorganisation und -koordination","svc.steuerung.b2":"Termin-, Kosten- und Qualitätsmanagement","svc.steuerung.b3":"Risikomanagement","svc.steuerung.b4":"Vertrags- und Nachtragsmanagement, Dokumentation","svc.steuerung.caption":"Projektbesprechung mit Bauherr und Planern","svc.bim.title":"Building Information Modeling (BIM)","svc.bim.summary":"Digitale Modelle für Planung, Koordination und Betrieb.","svc.bim.lead":"Mit der BIM-Methodik planen wir effizienter, transparenter und zukunftssicher, von der Planung über die Ausführung bis zum Betrieb.","svc.bim.b1":"BIM-gestützte Planung und Koordination","svc.bim.b2":"Qualitäts- und Kollisionsprüfung","svc.bim.b3":"Datenmanagement und Dokumentation","svc.bim.b4":"Betrieb und Instandhaltung","svc.bim.caption":"3D-Modell auf dem Bildschirm","svc.bvb.short":"BVB nach VV&nbsp;BAU","svc.bim.short":"Building Information Modeling","ref.czernyring.field":"Konstruktiver Ingenieurbau","ref.czernyring.title":"Montpellier Carré: Stützwand Czernyring","ref.czernyring.place":"Heidelberg","ref.czernyring.year":"2026","ref.czernyring.client":"Tragwerks&shy;planung","ref.czernyring.desc":"Statik sowie Schal- und Bewehrungspläne für die Stützwand am Czernyring (Ausführungs&shy;planung). Abgeschlossen.","ref.solmser.field":"Konstruktiver Ingenieurbau","ref.solmser.title":"Stützwand Solmserstraße","ref.solmser.place":"Wetzlar","ref.solmser.year":"2026","ref.solmser.client":"Objekt- und Tragwerks&shy;planung","ref.solmser.desc":"Instandsetzung oder Neubau einer rund 200&nbsp;m langen Natursteinstützmauer im Zuge der Straßenerneuerung, mit Varianten bis zum Erhalt des vorhandenen Mauerwerks.","ref.rimbach.field":"Verkehrsanlagen / Bahnbau","ref.rimbach.title":"Bahnhof Rimbach: Bahnsteige und Wetterschutzhaus","ref.rimbach.place":"Rimbach (Hessen)","ref.rimbach.year":"2026","ref.rimbach.client":"DB InfraGO AG, DB Bahnbau Gruppe","ref.rimbach.desc":"Erneuerung beider Bahnsteige und Neubau eines Wetterschutzhauses. Ausführungs&shy;planung, Statik und Dokumentation nach Ril&nbsp;813.","ref.marbach.field":"Verkehrsanlagen / Bahnbau","ref.marbach.title":"Verkehrsstation Marbach","ref.marbach.place":"","ref.marbach.year":"2025/26","ref.marbach.client":"Deutsche Bahn","ref.marbach.desc":"Planung der Verkehrsstation, aktuell in der Vorbereitung der Vergabe (Leistungsphase 6).","ref.dorotheen.field":"Tiefbau","ref.dorotheen.title":"Autobahn GmbH: Dorotheenstraße","ref.dorotheen.place":"","ref.dorotheen.year":"2026","ref.dorotheen.client":"Autobahn GmbH · Tiefbau","ref.dorotheen.desc":"Tiefbauplanung für die Autobahn GmbH. Abgeschlossen.","ref.lipoid.field":"Hochbau","ref.lipoid.title":"Lipoid","ref.lipoid.place":"","ref.lipoid.year":"2026","ref.lipoid.client":"Hochbau","ref.lipoid.desc":"Hochbauprojekt in Bearbeitung.","p3.hero.figcaption":"Schematische Darstellung: eine Stützwand mit Brückenüberbau durchläuft die neun Leistungsphasen der HOAI, von der Grundlagen&shy;ermittlung bis zur Objekt&shy;betreuung. Am Ende teilt sie sich in das Schichtenmodell: Verkehrsanlage, Objektplanung, Tragwerk.","p3.hero.caption.html":"<span class=\"tb-cap-h\">Schichtenmodell:</span> <span>Verkehrsanlage, Objektplanung, Tragwerk</span>","p3.scrub.aria":"Leistungsphase im Modell wählen","p3.scrub.valuetext":"LPH {n} · {name}","p3.play.play":"Abspielen","p3.play.pause":"Pause","p3.play.resume":"Weiter","p3.play.replay":"Wiederholen","p3.layer.verkehr":"Verkehrsanlage","p3.layer.objekt":"Objektplanung","p3.layer.tragwerk":"Tragwerk","p3.lph.show":"Im Modell zeigen","p3.lph.show.sr":", im Modell oben zeigen","p3.pb.note":"begleitend","p3.pb.range":"HOAI-Leistungsphasen {a} bis {b}","p3.pb.single":"HOAI-Leistungsphase {a}","p3.pb.span":"Begleitend über die HOAI-Leistungsphasen {a} bis {b}","p3.pb.tile":"LPH {a}–{b}","p3.pb.tile1":"LPH {a}","p3.refs.home.empty":"Die Referenzen werden derzeit zusammengestellt.","p3.refs.home.empty.link":"Sprechen Sie uns an","p3.refs.aria":"Referenzprojekte","p3.filter.group.aria":"Projekte nach Bereich filtern","p3.jobs.empty.more":"Initiativbewerbungen sind trotzdem willkommen, gleich hier unten.","p3.values.aria":"Unsere Werte","p3.team.empty":"Die Profile des Teams folgen in Kürze.","p3.portrait.pending":"Foto folgt","p3.form.checking":"Wird geprüft …","p3.legal.aria":"Rechtliche Angaben","p3.legal.en.notice":"Impressum und Datenschutz&shy;erklärung werden nur auf Deutsch bereitgestellt.","p3.svc.list.aria":"Leistungen im Einzelnen","p3.brand.aria":"C&amp;C Ingenieure GmbH, zur Startseite","p3.mail.subject":"Bewerbung","p3.kontakt.h1.html":"<span>Wie können wir Sie bei Ihrem</span> <span>Vorhaben unterstützen?</span>"},"en":{"meta.site.name":"C&amp;C Ingenieure GmbH","header.skip":"Skip to content","header.nav.aria":"Main navigation","header.nav.mobile.aria":"Main navigation, mobile","header.menu.open":"Menu","header.menu.close":"Close","header.lang.aria":"Language","header.lang.de":"DE","header.lang.en":"EN","header.logo.alt":"C&amp;C Ingenieure GmbH","nav.startseite":"Home","nav.leistungen":"Services","nav.referenzen":"Projects","nav.karriere":"Careers","nav.ueberuns":"About us","nav.kontakt":"Contact","home.kicker":"Engineering consultancy · Bruchsal","home.h1.line1":"Planning infrastructure.","home.h1.line2":"Delivering reliably.","home.lead":"C&amp;C Ingenieure supports your project from design through to site supervision: design and structural engineering, tendering and award, project management and BIM.","home.cta.services":"Our services","home.cta.contact":"Get in touch","home.hero.caption":"Layer model: transport infrastructure, design, structure","home.intro.h2":"Collaborative, transparent, reliable.","home.intro.p":"We see every collaboration as a partnership built on trust, shaped by respect, transparency and a clear focus on shared goals. Our aim is sustainable solutions that meet the highest standards of quality and stand the test of time.","home.fact.1.title":"All HOAI work stages","home.fact.1.text":"From basic evaluation to post-completion services, from a single source.","home.fact.2.title":"Authorised to submit building documents under VV&nbsp;BAU (Deutsche Bahn)","home.fact.2.text":"Technical review and approval for railway-specific projects.","home.fact.3.title":"Specialised in infrastructure","home.fact.3.text":"Structural engineering, transport infrastructure, railway and civil engineering.","home.services.h2":"Our services at a glance","home.services.all":"View all services","home.refs.h2":"Selected projects","home.refs.all":"All projects","home.lph.h2":"All HOAI work stages","home.lph.lead":"We take on the work stages your project needs, individually or end to end.","home.cta.h2":"How can we support your project?","home.cta.p":"If you value reliability, fairness and a collaborative way of working, we are glad to assist. We look forward to moving your project forward together.","leistungen.h1":"Engineering services from a single source","leistungen.lead":"Seven fields of service that interlock: from design through award to site supervision.","leistungen.toc.aria":"Services on this page","leistungen.cta.h2":"Which service does your project need?","lph.label":"LPH","lph.1":"Basic evaluation","lph.2":"Preliminary design","lph.3":"Design development","lph.4":"Approval design","lph.5":"Construction design","lph.6":"Preparation of award","lph.7":"Assistance with award","lph.8":"Construction supervision","lph.9":"Post-completion services","referenzen.h1":"Projects we have delivered","referenzen.lead":"A selection from structural, railway, civil and building engineering. Filter by field.","referenzen.filter.aria":"Filter by field","referenzen.filter.all":"All","referenzen.field.ki":"Civil structures","referenzen.field.bahn":"Transport infrastructure / railway","referenzen.field.tief":"Civil engineering","referenzen.field.hoch":"Building construction","referenzen.empty.h3":"No projects in this field","referenzen.empty.p":"No project is currently published for this field. All fields show the full selection.","referenzen.none.h3":"Projects to follow","referenzen.none.p":"The project pages are being prepared. We would be glad to tell you directly what we are working on.","referenzen.draftnote":"Draft: project texts are taken from our project management system and must be reviewed before publication. Photos to follow. New projects can be added later by the office itself.","referenzen.cta.h2":"Planning a similar project?","karriere.h1":"Work with us on infrastructure","karriere.lead":"We are looking for engineers who take responsibility and see projects through from design to construction.","karriere.jobs.h2":"Open positions","karriere.job.example":"Example, to be replaced","karriere.job.title":"[Job title], e.g. Civil Engineer, Structural Engineering (m/f/d)","karriere.job.meta":"Bruchsal · [Full-time/Part-time] · from [date]","karriere.job.text":"[Two to three sentences on the responsibilities and the profile sought.]","karriere.job.apply":"Apply now","karriere.empty.h3":"No positions are currently advertised","karriere.empty.p":"A speculative application is nevertheless welcome at any time.","karriere.initiative.h2":"No suitable position listed?","karriere.initiative.p":"Speculative applications are welcome. Send us your documents by e-mail and tell us what you would like to work on.","karriere.apply.label":"Apply to","karriere.apply.privacy.pre":"Information on how we handle applicant data can be found in the","karriere.apply.privacy.link":"privacy policy","karriere.team.h2":"Meet our team","karriere.team.cta":"About us","ueberuns.h1":"An engineering consultancy for infrastructure projects","ueberuns.lead":"We specialise in infrastructure projects and cover all work stages under HOAI.","ueberuns.value.respekt.title":"Respect","ueberuns.value.respekt.text":"Working as equals with clients, authorities and partners.","ueberuns.value.transparenz.title":"Transparency","ueberuns.value.transparenz.text":"Traceable decisions, clear communication, tidy documentation.","ueberuns.value.verlaesslichkeit.title":"Reliability","ueberuns.value.verlaesslichkeit.text":"Precision and adherence to deadlines from the first design to acceptance.","ueberuns.value.fairness.title":"Fairness","ueberuns.value.fairness.text":"A partnership built on trust and shared goals.","ueberuns.management.h2":"Management","ueberuns.md.name":"Hüsnü Cetinkaya","ueberuns.md.role":"Managing Director","ueberuns.md.bio":"Six years of experience as project manager for infrastructure schemes. Focus areas: structural engineering, transport infrastructure, and tendering and award. Authorised to submit building documents under VV&nbsp;BAU (Deutsche Bahn).","ueberuns.staff.h2":"Team","ueberuns.staff.lga.name":"Lovorka Grgec Alajbeg","ueberuns.staff.lga.role":"Team member","ueberuns.staff.as.name":"Aghil Siahpoush","ueberuns.staff.as.role":"Team member","ueberuns.staff.profile.pending":"[Short profile to follow: training, focus areas, responsibilities in the office.]","ueberuns.cta.h2":"Talk to us about your project","kontakt.h1":"How can we support your project?","kontakt.lead":"Tell us briefly what it is about. We will get back to you.","kontakt.ways.aria":"Ways to contact us","kontakt.address.label":"Address","kontakt.phone.label":"Telephone","kontakt.email.label":"E-mail","kontakt.map.osm":"Open route in OpenStreetMap","kontakt.map.osm.newtab":"(opens in a new tab)","form.h2":"Send a message","form.name.label":"Surname, first name","form.email.label":"Your e-mail","form.message.label":"Your enquiry","form.consent":"I agree that this data may be stored and processed for the purpose of handling my enquiry. I can withdraw my consent at any time.","form.consent.more.link":"privacy policy","form.required.note":"* Required field","form.submit":"Send","form.sending":"Sending …","form.error.name":"Please enter your name.","form.error.email.empty":"Please enter your e-mail address so that we can reply.","form.error.email.invalid":"This e-mail address is incomplete. Example: name@company.com","form.error.message":"Please describe your enquiry in a few words (at least 10 characters).","form.error.consent":"Please agree to the processing; otherwise we are not permitted to handle your message.","form.done.h3":"Message recorded","form.done.preview":"Preview: the message has not been sent.","form.done.preview.p":"This page is a draft and transmits no data. Until then, please write to us directly at info@ib-cc.de.","form.done.again":"Write a new message","legal.h1":"Legal notice and privacy","legal.toc.aria":"Contents of this page","partners.h2":"Our partners","partners.logo.pending":"LOGO TO FOLLOW","footer.contact.h":"Contact","footer.md.h":"Managing Director","footer.md":"M.Eng. Hüsnü Cetinkaya","footer.register.h":"Commercial register","footer.register":"HRB 743910 Mannheim","footer.vat":"USt-IdNr. DE353174530","footer.copyright":"© 2026 C&amp;C Ingenieure GmbH","footer.impressum":"Legal notice","footer.datenschutz":"Privacy","footer.phone":"Tel +49 173 6992298","footer.email":"info@ib-cc.de","footer.web":"www.ib-cc.de","cta.contact":"Get in touch","ui.schematic":"Schematic representation","ui.schematic.photo.pending":"Schematic representation · Photo to follow","ui.field.pending":"Field to be confirmed","ui.count.0":"0 projects","ui.count.1":"1 project","ui.count.n":"{n} projects","ui.filter.reset":"Reset filter","ui.newtab":"opens in a new tab","meta.home.title":"C&amp;C Ingenieure GmbH · Engineering consultancy for infrastructure in Bruchsal","meta.home.description":"Planning infrastructure. Delivering reliably. Engineering consultancy in Bruchsal for design and structural engineering, tendering and award, site supervision, project management and BIM, all HOAI work stages.","meta.leistungen.title":"Services · C&amp;C Ingenieure GmbH","meta.leistungen.description":"Seven fields of service from a single source: BVB under VV&nbsp;BAU, design, structural engineering, tendering and award, site supervision, project management and BIM.","meta.referenzen.title":"Projects · C&amp;C Ingenieure GmbH","meta.referenzen.description":"Projects we have delivered: structural engineering, transport infrastructure and railway construction, civil engineering and building construction.","meta.karriere.title":"Careers · C&amp;C Ingenieure GmbH","meta.karriere.description":"Work with us on infrastructure: open positions and speculative applications at C&amp;C Ingenieure in Bruchsal.","meta.ueberuns.title":"About us · C&amp;C Ingenieure GmbH","meta.ueberuns.description":"An engineering consultancy for infrastructure projects: the values, management and team of C&amp;C Ingenieure in Bruchsal.","meta.kontakt.title":"Contact · C&amp;C Ingenieure GmbH","meta.kontakt.description":"Contact C&amp;C Ingenieure GmbH, Werner-von-Siemens-Straße 2-6, Gebäude 5110b, 76646 Bruchsal. Telephone +49 173 6992298, info@ib-cc.de.","meta.impressum.title":"Legal notice and privacy · C&amp;C Ingenieure GmbH","meta.impressum.description":"Legal notice and privacy policy of C&amp;C Ingenieure GmbH, Bruchsal.","partners.1":"DB InfraGO AG","partners.2":"DB Bahnbau Gruppe GmbH","partners.3":"Autobahn GmbH","partners.4":"Stadt Heidelberg","partners.5":"Stadt Wetzlar","partners.6":"Stadt Frankfurt am Main","partners.7":"Stadt Altena","partners.8":"RNV","partners.9":"Lipoid","svc.bvb.title":"Authorised to submit building documents under VV&nbsp;BAU (Deutsche Bahn)","svc.bvb.summary":"Review and approval of construction documents for railway projects.","svc.bvb.lead":"As an engineering consultancy authorised under VV&nbsp;BAU, we review and supervise railway projects. We make sure that all legal and technical requirements are met.","svc.bvb.b1":"Technical review and approval of construction documents","svc.bvb.b2":"Compliance with regulations and standards","svc.bvb.b3":"Coordination with the Federal Railway Authority (Eisenbahn-Bundesamt) and other authorities","svc.bvb.b4":"Coordination of the specialist designs","svc.bvb.caption":"Track installation with bridge structure","svc.objekt.title":"Design","svc.objekt.summary":"Structural engineering, transport infrastructure, building and civil engineering under HOAI.","svc.objekt.lead":"Tailored solutions for your construction projects in line with the HOAI service profiles, integrated and efficient.","svc.objekt.b1":"Structural engineering: bridges, retaining walls, rock and slope stabilisation, noise protection","svc.objekt.b2":"Transport infrastructure and railway construction, including passenger stations","svc.objekt.b3":"Building construction for commercial and private projects","svc.objekt.b4":"Civil engineering: cable routes, supply and disposal lines, drainage","svc.objekt.caption":"Retaining wall or bridge structure","svc.tragwerk.title":"Structural engineering","svc.tragwerk.summary":"Structural analysis, detailing and reinforcement design, including existing structures.","svc.tragwerk.lead":"We support you from basic evaluation through to checkable structural calculations, with safe, economical and sustainable structures.","svc.tragwerk.b1":"Structural design and structural calculations for approval","svc.tragwerk.b2":"Detailed verifications and re-analysis of existing structures","svc.tragwerk.b3":"Formwork, shell and reinforcement drawings, waterstop layouts","svc.tragwerk.b4":"Steel construction","svc.tragwerk.caption":"Reinforcement and formwork on site","svc.vergabe.title":"Tendering &amp; award","svc.vergabe.summary":"Bills of quantities, cost estimation and award recommendation.","svc.vergabe.lead":"We prepare tenders and assist with the award. The procedure remains legally sound, economical and transparent.","svc.vergabe.b1":"Specification with bill of quantities","svc.vergabe.b2":"Quantity take-off and cost estimation","svc.vergabe.b3":"Examination and evaluation of tenders","svc.vergabe.b4":"Tenderer meetings and award recommendation","svc.vergabe.caption":"Bill of quantities and drawings at the desk","svc.bauueberwachung.title":"Site supervision &amp; construction management","svc.bauueberwachung.summary":"Quality, schedule and cost control through to acceptance.","svc.bauueberwachung.lead":"We support your construction project on site so that it is delivered on schedule and to the required quality.","svc.bauueberwachung.b1":"Quality control of construction works","svc.bauueberwachung.b2":"Cost and schedule control","svc.bauueberwachung.b3":"Construction records and review of site diaries","svc.bauueberwachung.b4":"Support at acceptance, defect tracking","svc.bauueberwachung.caption":"Site management on the construction site","svc.steuerung.title":"Project management","svc.steuerung.summary":"Organisation, schedules, costs and risks under control.","svc.steuerung.lead":"From the first idea to completion: clear organisation, focused communication and control of costs, schedules and quality.","svc.steuerung.b1":"Project organisation and coordination","svc.steuerung.b2":"Schedule, cost and quality management","svc.steuerung.b3":"Risk management","svc.steuerung.b4":"Contract and variation management, documentation","svc.steuerung.caption":"Project meeting with client and designers","svc.bim.title":"Building Information Modeling (BIM)","svc.bim.summary":"Digital models for design, coordination and operation.","svc.bim.lead":"With the BIM method we plan more efficiently, more transparently and for the long term, from design through construction to operation.","svc.bim.b1":"BIM-based design and coordination","svc.bim.b2":"Quality and clash checking","svc.bim.b3":"Data management and documentation","svc.bim.b4":"Operation and maintenance","svc.bim.caption":"3D model on screen","svc.bvb.short":"BVB under VV&nbsp;BAU","svc.bim.short":"Building Information Modeling","ref.czernyring.field":"Civil structures","ref.czernyring.title":"Montpellier Carré: Czernyring retaining wall","ref.czernyring.place":"Heidelberg","ref.czernyring.year":"2026","ref.czernyring.client":"Structural engineering","ref.czernyring.desc":"Structural calculations plus formwork and reinforcement drawings for the retaining wall on Czernyring (construction design). Completed.","ref.solmser.field":"Civil structures","ref.solmser.title":"Solmserstraße retaining wall","ref.solmser.place":"Wetzlar","ref.solmser.year":"2026","ref.solmser.client":"Design and structural engineering","ref.solmser.desc":"Repair or replacement of an approximately 200&nbsp;m long natural-stone retaining wall as part of the road renewal, with options up to retaining the existing masonry.","ref.rimbach.field":"Transport infrastructure / railway","ref.rimbach.title":"Rimbach station: platforms and weather shelter","ref.rimbach.place":"Rimbach (Hesse)","ref.rimbach.year":"2026","ref.rimbach.client":"DB InfraGO AG, DB Bahnbau Gruppe","ref.rimbach.desc":"Renewal of both platforms and construction of a new weather shelter. Construction design, structural calculations and documentation to Ril&nbsp;813.","ref.marbach.field":"Transport infrastructure / railway","ref.marbach.title":"Marbach station","ref.marbach.place":"","ref.marbach.year":"2025/26","ref.marbach.client":"Deutsche Bahn","ref.marbach.desc":"Design of the station, currently in preparation of award (work stage 6).","ref.dorotheen.field":"Civil engineering","ref.dorotheen.title":"Autobahn GmbH: Dorotheenstraße","ref.dorotheen.place":"","ref.dorotheen.year":"2026","ref.dorotheen.client":"Autobahn GmbH · Civil engineering","ref.dorotheen.desc":"Civil engineering design for Autobahn GmbH. Completed.","ref.lipoid.field":"Building construction","ref.lipoid.title":"Lipoid","ref.lipoid.place":"","ref.lipoid.year":"2026","ref.lipoid.client":"Building construction","ref.lipoid.desc":"Building project in progress.","p3.hero.figcaption":"Schematic representation: a retaining wall with bridge deck runs through the nine HOAI work stages, from basic evaluation to post-completion services. At the end it separates into the layer model: transport infrastructure, design, structure.","p3.hero.caption.html":"<span class=\"tb-cap-h\">Layer model:</span> <span>transport infrastructure, design, structure</span>","p3.scrub.aria":"Choose the work stage shown in the model","p3.scrub.valuetext":"LPH {n} · {name}","p3.play.play":"Play","p3.play.pause":"Pause","p3.play.resume":"Resume","p3.play.replay":"Replay","p3.layer.verkehr":"Transport infrastructure","p3.layer.objekt":"Design","p3.layer.tragwerk":"Structure","p3.lph.show":"Show in model","p3.lph.show.sr":", show in the model above","p3.pb.note":"throughout","p3.pb.range":"HOAI work stages {a} to {b}","p3.pb.single":"HOAI work stage {a}","p3.pb.span":"Throughout HOAI work stages {a} to {b}","p3.pb.tile":"LPH {a}–{b}","p3.pb.tile1":"LPH {a}","p3.refs.home.empty":"The project list is being compiled.","p3.refs.home.empty.link":"Talk to us","p3.refs.aria":"Reference projects","p3.filter.group.aria":"Filter projects by field","p3.jobs.empty.more":"Speculative applications are still welcome, right below.","p3.values.aria":"Our values","p3.team.empty":"The team profiles will follow shortly.","p3.portrait.pending":"Photo to follow","p3.form.checking":"Checking …","p3.legal.aria":"Legal information","p3.legal.en.notice":"Legal notice and privacy policy are provided in German only.","p3.svc.list.aria":"Services in detail","p3.brand.aria":"C&amp;C Ingenieure GmbH, to the home page","p3.mail.subject":"Application","p3.kontakt.h1.html":"<span>How can we support</span> <span>your project?</span>"}};
  /*I18N-END*/
  let lang = 'de';
  const t = (key, o) => { let v = (I18N[lang] && I18N[lang][key]) ?? I18N.de[key] ?? ''; if (o) v = v.replace(/\{(\w+)\}/g, (_, k) => o[k]); return v; };
  const td = (key, o) => d.createRange().createContextualFragment(t(key, o)).textContent;
  const PH = { get: (i) => td(`lph.${i + 1}`), html: (i) => t(`lph.${i + 1}`) };
  const countWord = (k) => { const s = td(k === 0 ? 'ui.count.0' : k === 1 ? 'ui.count.1' : 'ui.count.n', { n: k }); return s.replace(/^\S+\s*/, ''); };

  function applyLang(next, { persist = true } = {}) {
    lang = next === 'en' ? 'en' : 'de';
    html.lang = lang;
    d.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el instanceof SVGElement || el.tagName === 'TITLE') el.textContent = td(el.dataset.i18n); else el.innerHTML = t(el.dataset.i18n);
    });
    d.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    d.querySelectorAll('[data-i18n-attr]').forEach((el) => el.dataset.i18nAttr.split(',').forEach((pair) => { const [a, k] = pair.split(':'); el.setAttribute(a, td(k)); }));
    d.querySelectorAll('[data-i18n-sub]').forEach((el) => { const [a, k] = el.dataset.i18nSub.split(':'); el.setAttribute(a, td(k, { a: el.dataset.a, b: el.dataset.b })); });
    d.querySelectorAll('[data-i18n-lph]').forEach((el) => { el.innerHTML = PH.html(+el.dataset.i18nLph - 1); });
    d.querySelectorAll('[data-i18n-count]').forEach((el) => { el.textContent = countWord(+el.dataset.i18nCount); });
    d.querySelectorAll('[data-en-only]').forEach((el) => { el.hidden = lang !== 'en'; });
    d.querySelectorAll('[data-mail-subject]').forEach((el) => { el.href = `mailto:info@ib-cc.de?subject=${encodeURIComponent(td('p3.mail.subject'))}`; });
    d.querySelectorAll('[data-lang]').forEach((b) => { const on = b.dataset.lang === lang; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
    d.querySelectorAll('a[href]').forEach((a) => {
      const h = a.getAttribute('href');
      if (!/^[a-z-]+\.html([?#]|$)/.test(h)) return;
      const u = new URL(h, location.href);
      if (lang === 'en') u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
      a.setAttribute('href', u.pathname.split('/').pop() + u.search + u.hash);
    });
    d.dispatchEvent(new CustomEvent('langchange'));
    if (persist) { try { localStorage.setItem('cc-lang', lang); } catch (e) { /* storage unavailable */ } }
  }
  function langInit() {
    let want = qs.get('lang');
    if (!want) { try { want = localStorage.getItem('cc-lang'); } catch (e) { want = null; } }
    if (want === 'en') applyLang('en', { persist: false });
    d.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
      if (b.dataset.lang === lang) return;
      applyLang(b.dataset.lang);
      const u = new URL(location.href);
      if (lang === 'en') u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
      history.replaceState(null, '', u);
    }));
  }

  const draw = (el, delay = 0, dur = 560) => {
    if (!el.animate) return null;
    return el.animate(
      [{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }],
      { duration: dur, delay, easing: EASE, fill: 'backwards' }
    );
  };

  function swap(el, text) {
    if (!el || el.innerHTML === text) return;
    el.innerHTML = text;
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
      txt.textContent = td(open ? 'header.menu.close' : 'header.menu.open');
      if (open && focus) setTimeout(() => panel.querySelector('a')?.focus({ preventScroll: true }), 60);
    };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { set(false); btn.focus(); }
    });
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) set(false, false); });
    matchMedia('(min-width: 1100px)').addEventListener('change', (e) => { if (e.matches) set(false, false); });
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
      if (el.animate && el.dataset.state === 'on') {
        const to = getComputedStyle(el).color;
        el.animate([{ color: '#F58A3C' }, { color: '#F58A3C', offset: 0.5 }, { color: to }], { duration: 1100, delay, easing: 'ease-out' });
      }
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
      btnT.textContent = td(m === 'playing' ? 'p3.play.pause' : m === 'done' ? 'p3.play.replay' : m === 'paused' ? 'p3.play.resume' : 'p3.play.play');
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
      range.setAttribute('aria-valuetext', td('p3.scrub.valuetext', { n: p, name: PH.get(p - 1) }));
      name.dataset.i18nLph = String(p);
      swap(code, `LPH ${p}`);
      swap(name, PH.html(p - 1));
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
    d.addEventListener('langchange', () => { setBtn(mode); range.setAttribute('aria-valuetext', td('p3.scrub.valuetext', { n: Math.max(cur, 1), name: PH.get(Math.max(cur, 1) - 1) })); });
    d.addEventListener('langchange', () => { setBtn(mode); range.setAttribute('aria-valuetext', td('p3.scrub.valuetext', { n: Math.max(cur, 1), name: PH.get(Math.max(cur, 1) - 1) })); });
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
      name.dataset.i18nLph = '1';
      name.innerHTML = PH.html(0);
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
    const NAMES = { ki: 1, bahn: 1, tief: 1, hoch: 1 };
    let key = 'alle';
    let busy = null;

    const setCount = (k, animate) => {
      const word = countWord(k);
      countW.dataset.i18nCount = String(k);
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
          emptyT.dataset.i18n = 'referenzen.none.p';
          reset.hidden = true;
        } else {
          emptyT.dataset.i18n = 'referenzen.empty.p';
          reset.hidden = false;
        }
        emptyT.innerHTML = t(emptyT.dataset.i18n);
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
      name: (el) => (el.value.trim() ? '' : 'form.error.name'),
      email: (el) => {
        const v = el.value.trim();
        if (!v) return 'form.error.email.empty';
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'form.error.email.invalid';
      },
      msg: (el) => (el.value.trim().length >= 10 ? '' : 'form.error.message'),
      consent: (el) => (el.checked ? '' : 'form.error.consent'),
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
      if (err.dataset.msg !== msg) { err.innerHTML = alertIc + '<span></span>'; err.lastChild.textContent = td(msg); err.dataset.msg = msg; }
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
      sendT.textContent = td('p3.form.checking');
      setTimeout(() => {
        send.removeAttribute('aria-busy');
        send.disabled = false;
        sendT.textContent = td('form.submit');
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

  langInit();
  menu();
  counts();
  refs();
  phases();
  builds();
  contact();
  toc();
  html.classList.remove('pre');
})();
