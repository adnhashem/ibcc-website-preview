(() => {
  "use strict";
  const d = document, de = d.documentElement, body = d.body;
  const NS = "http://www.w3.org/2000/svg";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const qs = new URLSearchParams(location.search);
  const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const docY = el => el.getBoundingClientRect().top + scrollY;

  /* ---------- language ---------- */
  /*I18N*/
  const I18N = {"de":{"p2.drw.tragwerk":"Tragwerk","p2.drw.objekt":"Objektplanung","p2.drw.verkehr":"Verkehrsanlage","svc.bvb.short":"BVB nach VV BAU","svc.bvb.summary":"Prüfung und Freigabe von Ausführungsunterlagen für Bahnprojekte.","svc.objekt.title":"Objektplanung","svc.objekt.summary":"Konstruktiver Ingenieurbau, Verkehrsanlagen, Hochbau und Tiefbau nach HOAI.","svc.tragwerk.title":"Tragwerks­planung","svc.tragwerk.summary":"Statik, Konstruktion und Bewehrungsplanung, auch für Bestandsbauwerke.","svc.vergabe.title":"Ausschreibung &amp; Vergabe","svc.vergabe.summary":"Leistungsverzeichnisse, Kostenermittlung und Vergabeempfehlung.","svc.bauueberwachung.title":"Bauüberwachung &amp; Bau­oberleitung","svc.bauueberwachung.summary":"Qualitäts-, Termin- und Kostenkontrolle bis zur Abnahme.","svc.steuerung.title":"Projektsteuerung","svc.steuerung.summary":"Organisation, Termine, Kosten und Risiken im Blick.","svc.bim.short":"Building Information Modeling","svc.bim.summary":"Digitale Modelle für Planung, Koordination und Betrieb.","cta.services.all":"Alle Leistungen ansehen","p2.drw.aria.czerny":"Stützwand am Czernyring, schematisch","ui.schematic.photo.pending":"Schematische Darstellung · Foto folgt","ref.czernyring.title":"Montpellier Carré: Stützwand Czernyring","ref.czernyring.place":"Heidelberg","ref.czernyring.year":"2026","ref.czernyring.client":"Tragwerks­planung","referenzen.field.ki":"Konstruktiver Ingenieurbau","p2.drw.aria.rimbach":"Bahnsteige mit Wetterschutzhaus, schematisch","ref.rimbach.title":"Bahnhof Rimbach: Bahnsteige und Wetterschutzhaus","ref.rimbach.place":"Rimbach (Hessen)","ref.rimbach.year":"2026","ref.rimbach.client":"DB InfraGO AG, DB Bahnbau Gruppe","referenzen.field.bahn":"Verkehrsanlagen / Bahnbau","p2.drw.aria.solms":"Natursteinstützmauer in der Ansicht, schematisch","ref.solmser.title":"Stützwand Solmserstraße","ref.solmser.place":"Wetzlar","ref.solmser.year":"2026","ref.solmser.client":"Objekt- und Tragwerks­planung","lph.label":"LPH","lph.1":"Grundlagen­ermittlung","lph.2":"Vorplanung","lph.3":"Entwurfs­planung","lph.4":"Genehmigungs­planung","lph.5":"Ausführungs­planung","lph.6":"Vorbereitung der Vergabe","lph.7":"Mitwirkung bei der Vergabe","lph.8":"Objekt­überwachung","lph.9":"Objekt­betreuung","p2.st.bruchsal":"Bruchsal","p2.st.partner":"Partnerschaft","nav.leistungen":"Leistungen","nav.referenzen":"Referenzen","p2.st.lph":"Leistungs­phasen","meta.home.title":"C&amp;C Ingenieure GmbH · Ingenieurbüro für Infrastruktur in Bruchsal","meta.home.description":"Infrastruktur planen. Verlässlich umsetzen. Ingenieurbüro in Bruchsal für Objekt- und Tragwerks­planung, Ausschreibung und Vergabe, Bauüberwachung, Projektsteuerung und BIM, alle Leistungs­phasen der HOAI.","header.skip":"Zum Inhalt springen","nav.startseite":"Startseite","nav.karriere":"Karriere","nav.ueberuns":"Über uns","nav.kontakt":"Kontakt","header.logo.aria":"C&amp;C Ingenieure GmbH, zur Startseite","header.nav.aria":"Hauptnavigation","header.lang.aria":"Sprache","p2.lang.switch.de":"Deutsch","p2.lang.switch.en":"Englisch","header.menu.open":"Menü","home.h1.line1":"Infrastruktur planen.","home.h1.line2":"Verlässlich umsetzen.","home.lead":"C&amp;C Ingenieure begleitet Ihr Vorhaben von der Planung bis zur Bauüberwachung: Objekt- und Tragwerks­planung, Ausschreibung und Vergabe, Projektsteuerung und BIM.","home.cta.services":"Unsere Leistungen","home.cta.contact":"Kontakt aufnehmen","home.hero.caption":"Schichtenmodell: Verkehrsanlage, Objektplanung, Tragwerk","ui.schematic":"Schematische Darstellung","home.kicker":"Ingenieurbüro · Bruchsal","home.intro.h2":"Partnerschaftlich, transparent, verlässlich.","home.intro.p":"Wir verstehen jede Zusammenarbeit als vertrauensvolle Partnerschaft, geprägt von Respekt, Transparenz und einem klaren Fokus auf gemeinsame Ziele. Unser Anspruch sind nachhaltige Lösungen, die höchsten Qualitätsansprüchen genügen und langfristig überzeugen.","home.fact.1.title":"Alle HOAI-Leistungs­phasen","home.fact.1.text":"Von der Grundlagen­ermittlung bis zur Objekt­betreuung aus einer Hand.","home.fact.2.title":"Bauvorlageberechtigt nach VV BAU","home.fact.2.text":"Fachtechnische Prüfung und Freigabe für bahnspezifische Projekte.","home.fact.3.title":"Spezialisiert auf Infrastruktur","home.fact.3.text":"Konstruktiver Ingenieurbau, Verkehrsanlagen, Bahnbau und Tiefbau.","home.services.h2":"Unsere Leistungen im Überblick","home.services.all":"Alle Leistungen ansehen","home.refs.h2":"Ausgewählte Referenzen","home.refs.all":"Alle Referenzen","home.lph.h2":"Alle Leistungs­phasen der HOAI","home.lph.lead":"Wir übernehmen die Leistungs­phasen, die Ihr Projekt braucht, einzeln oder durchgängig.","p2.lph.aria":"Leistungs­phasen 1 bis 9","home.cta.p":"Wenn Sie Wert auf Verlässlichkeit, Fairness und eine partnerschaftliche Zusammenarbeit legen, stehen wir Ihnen gerne zur Seite. Wir freuen uns darauf, Ihr Projekt gemeinsam voranzubringen.","home.cta.h2":"Wie können wir Sie bei Ihrem Vorhaben unterstützen?","cta.contact":"Kontakt aufnehmen","partners.1":"DB InfraGO AG","partners.2":"DB Bahnbau Gruppe GmbH","partners.3":"Autobahn GmbH","partners.4":"Stadt Heidelberg","partners.5":"Stadt Wetzlar","partners.6":"Stadt Frankfurt am Main","partners.7":"Stadt Altena","partners.8":"RNV","partners.9":"Lipoid","partners.h2":"Unsere Partner","header.menu.close":"Schließen","footer.company":"C&amp;C Ingenieure GmbH","footer.street":"Werner-von-Siemens-Straße 2-6","footer.building":"Gebäude 5110b","footer.city":"76646 Bruchsal","footer.contact.h":"Kontakt","footer.phone":"Tel +49 173 6992298","footer.md.h":"Geschäftsführer","footer.register.h":"Handelsregister","footer.copyright":"© 2026 C&amp;C Ingenieure GmbH","p2.footer.legal.aria":"Rechtliches","footer.impressum":"Impressum","footer.datenschutz":"Datenschutz","p2.node.bvb":"BVB nach VV BAU","svc.bvb.b1":"Fachtechnische Prüfung und Freigabe von Ausführungsunterlagen","svc.bvb.b2":"Einhaltung von Vorschriften und Normen","svc.bvb.b3":"Koordination mit dem Eisenbahn-Bundesamt und weiteren Behörden","svc.bvb.b4":"Koordination der Fachentwürfe","p2.drw.aria.bvb":"Gleisanlage mit Brückenbauwerk, schematisch","svc.bvb.caption":"Gleisanlage mit Brückenbauwerk","svc.bvb.title":"Bauvorlage­berechtigter nach VV BAU","svc.bvb.lead":"Als bauvorlageberechtigtes Ingenieurbüro prüfen und überwachen wir Bahnprojekte. Wir stellen sicher, dass alle rechtlichen und technischen Vorgaben eingehalten werden.","p2.node.objekt":"Objektplanung","svc.objekt.b1":"Konstruktiver Ingenieurbau: Brücken, Stützwände, Fels- und Hangsicherungen, Lärmschutz","svc.objekt.b2":"Verkehrsanlagen und Bahnbau, auch Personenbahnhöfe","svc.objekt.b3":"Hochbau für gewerbliche und private Vorhaben","svc.objekt.b4":"Tiefbau: Kabeltrassen, Ver- und Entsorgungsleitungen, Entwässerung","p2.drw.drainage":"Drainage","p2.drw.backfill":"Hinterfüllung","p2.drw.aria.objekt":"Stützwand im Querschnitt, schematisch","svc.objekt.caption":"Stützwand oder Brückenbauwerk","svc.objekt.lead":"Maßgeschneiderte Lösungen für Ihre Bauprojekte gemäß den Leistungsbildern der HOAI, ganzheitlich und effizient.","p2.node.tragwerk":"Tragwerks­planung","svc.tragwerk.b1":"Tragwerksentwurf und Genehmigungsstatik","svc.tragwerk.b2":"Detailnachweise und Nachberechnung von Bestandsbauwerken","svc.tragwerk.b3":"Schal-, Rohbau- und Bewehrungsplanung, Fugenbandpläne","svc.tragwerk.b4":"Stahlbau","p2.drw.rebar":"Bewehrung","p2.drw.aria.tragwerk":"Bewehrung und Schalung, schematisch","svc.tragwerk.caption":"Bewehrung und Schalung auf der Baustelle","svc.tragwerk.lead":"Wir begleiten Sie von der Grundlagen­ermittlung bis zur prüffähigen statischen Berechnung, mit sicheren, wirtschaftlichen und nachhaltigen Tragwerken.","p2.node.vergabe":"Ausschreibung","svc.vergabe.b1":"Leistungsbeschreibung mit Leistungsverzeichnis","svc.vergabe.b2":"Mengenberechnung und Kostenermittlung","svc.vergabe.b3":"Prüfung und Wertung der Angebote","svc.vergabe.b4":"Bietergespräche und Vergabeempfehlung","p2.drw.aria.vergabe":"Stapel Leistungsverzeichnisse und Planblatt, schematisch","svc.vergabe.caption":"Leistungsverzeichnis und Pläne am Arbeitsplatz","svc.vergabe.lead":"Wir bereiten Ausschreibungen vor und wirken bei der Vergabe mit. Das Verfahren bleibt rechtssicher, wirtschaftlich und transparent.","p2.node.bau":"Bauüberwachung","svc.bauueberwachung.b1":"Qualitätskontrolle der Bauausführung","svc.bauueberwachung.b2":"Kosten- und Terminkontrolle","svc.bauueberwachung.b3":"Baudokumentation und Prüfung der Bautagebücher","svc.bauueberwachung.b4":"Unterstützung bei der Abnahme, Mängelverfolgung","p2.drw.aria.bau":"Baustelle mit Kran und Baugrube, schematisch","svc.bauueberwachung.caption":"Bauleitung auf der Baustelle","svc.bauueberwachung.lead":"Wir begleiten Ihr Bauvorhaben vor Ort, damit es termingerecht und qualitätsgesichert umgesetzt wird.","p2.node.steuerung":"Projektsteuerung","svc.steuerung.b1":"Projektorganisation und -koordination","svc.steuerung.b2":"Termin-, Kosten- und Qualitätsmanagement","svc.steuerung.b3":"Risikomanagement","svc.steuerung.b4":"Vertrags- und Nachtragsmanagement, Dokumentation","p2.drw.aria.steuerung":"Terminplan mit kritischem Weg, schematisch","svc.steuerung.caption":"Projektbesprechung mit Bauherr und Planern","svc.steuerung.lead":"Von der ersten Idee bis zur Fertigstellung: klare Organisation, zielgerichtete Kommunikation und Steuerung von Kosten, Terminen und Qualität.","p2.node.bim":"BIM","svc.bim.b1":"BIM-gestützte Planung und Koordination","svc.bim.b2":"Qualitäts- und Kollisionsprüfung","svc.bim.b3":"Datenmanagement und Dokumentation","svc.bim.b4":"Betrieb und Instandhaltung","p2.drw.clash":"Kollision","p2.drw.aria.bim":"BIM-Modell mit Kollisionsprüfung, schematisch","svc.bim.caption":"3D-Modell auf dem Bildschirm","svc.bim.title":"Building Information Modeling (BIM)","svc.bim.lead":"Mit der BIM-Methodik planen wir effizienter, transparenter und zukunftssicher, von der Planung über die Ausführung bis zum Betrieb.","meta.leistungen.title":"Leistungen · C&amp;C Ingenieure GmbH","meta.leistungen.description":"Sieben Leistungsfelder aus einer Hand: BVB nach VV BAU, Objektplanung, Tragwerks­planung, Ausschreibung und Vergabe, Bauüberwachung, Projektsteuerung und BIM.","leistungen.lead":"Sieben Leistungsfelder, die ineinandergreifen: von der Planung über die Vergabe bis zur Bauüberwachung.","leistungen.h1":"Ingenieur­leistungen aus einer Hand","p2.route.aria":"Streckenplan der Website","p2.svc.list.aria":"Leistungsfelder","leistungen.cta.h2":"Welche Leistung braucht Ihr Projekt?","ref.czernyring.desc":"Statik sowie Schal- und Bewehrungspläne für die Stützwand am Czernyring (Ausführungs­planung). Abgeschlossen.","ref.solmser.desc":"Instandsetzung oder Neubau einer rund 200 m langen Natursteinstützmauer im Zuge der Straßenerneuerung, mit Varianten bis zum Erhalt des vorhandenen Mauerwerks.","ref.rimbach.desc":"Erneuerung beider Bahnsteige und Neubau eines Wetterschutzhauses. Ausführungs­planung, Statik und Dokumentation nach Ril 813.","p2.drw.aria.marbach":"Verkehrsstation im Lageplan, schematisch","ref.marbach.title":"Verkehrsstation Marbach","ref.marbach.year":"2025/26","ref.marbach.client":"Deutsche Bahn","ref.marbach.desc":"Planung der Verkehrsstation, aktuell in der Vorbereitung der Vergabe (Leistungsphase 6).","p2.drw.aria.doro":"Leitungsgraben im Querschnitt, schematisch","ref.dorotheen.title":"Autobahn GmbH: Dorotheenstraße","ref.dorotheen.year":"2026","ref.dorotheen.client":"Autobahn GmbH · Tiefbau","ref.dorotheen.desc":"Tiefbauplanung für die Autobahn GmbH. Abgeschlossen.","referenzen.field.tief":"Tiefbau","p2.drw.aria.lipoid":"Hochbau in der Isometrie, schematisch","ref.lipoid.title":"Lipoid","ref.lipoid.year":"2026","ref.lipoid.client":"Hochbau","ref.lipoid.desc":"Hochbauprojekt in Bearbeitung.","referenzen.field.hoch":"Hochbau","referenzen.filter.all":"Alle","ui.count.0":"0 Projekte","ui.count.1":"1 Projekt","ui.count.n":"{n} Projekte","p2.sim.refs":"Vorschau mit {n} Projekten (simuliert über ?n={n})","p2.st.projekte":"Projekte","meta.referenzen.title":"Referenzen · C&amp;C Ingenieure GmbH","meta.referenzen.description":"Projekte, die wir begleitet haben: Konstruktiver Ingenieurbau, Verkehrsanlagen und Bahnbau, Tiefbau und Hochbau.","referenzen.lead":"Eine Auswahl aus Ingenieurbau, Bahn, Tiefbau und Hochbau. Nach Bereich filtern.","referenzen.h1":"Projekte, die wir begleitet haben","p2.list.aria":"Projektliste","referenzen.filter.aria":"Nach Bereich filtern","referenzen.empty.h3":"Keine Projekte in diesem Bereich","referenzen.empty.p":"Für diesen Bereich ist derzeit kein Projekt veröffentlicht. Alle Bereiche zeigen die vollständige Auswahl.","referenzen.none.h3":"Referenzen folgen","referenzen.none.p":"Die Projektseiten werden gerade vorbereitet. Gerne erzählen wir Ihnen direkt, woran wir arbeiten.","ui.filter.reset":"Filter zurücksetzen","referenzen.draftnote":"Entwurf: Projekttexte sind aus unserer Projektverwaltung übernommen und vor Veröffentlichung zu prüfen. Fotos folgen. Neue Projekte lassen sich später selbst ergänzen.","referenzen.cta.h2":"Ein ähnliches Vorhaben geplant?","p2.sim.jobs":"Vorschau mit {n} Stellen (simuliert über ?n={n})","karriere.jobs.h2":"Offene Stellen","p2.st.init":"Initiativbewerbung","p2.dest.team":"Team","meta.karriere.title":"Karriere · C&amp;C Ingenieure GmbH","meta.karriere.description":"Arbeiten Sie mit uns an Infrastruktur: offene Stellen und Initiativbewerbung bei C&amp;C Ingenieure in Bruchsal.","karriere.lead":"Wir suchen Ingenieurinnen und Ingenieure, die Verantwortung übernehmen und Projekte von der Planung bis zur Ausführung begleiten.","karriere.h1":"Arbeiten Sie mit uns an Infrastruktur","karriere.job.title":"[Stellenbezeichnung], z. B. Bauingenieur/in Konstruktiver Ingenieurbau (m/w/d)","karriere.job.example":"Beispiel, wird ersetzt","karriere.job.meta":"Bruchsal · [Vollzeit/Teilzeit] · ab [Datum]","karriere.job.text":"[Zwei bis drei Sätze zu den Aufgaben und zum gesuchten Profil.]","karriere.job.apply":"Jetzt bewerben","karriere.empty.h3":"Derzeit ist keine Stelle ausgeschrieben","karriere.empty.p":"Eine Initiativbewerbung ist trotzdem jederzeit willkommen.","karriere.empty.cta":"Zur Initiativbewerbung","karriere.initiative.h2":"Keine passende Stelle dabei?","karriere.initiative.p":"Initiativbewerbungen sind willkommen. Schicken Sie uns Ihre Unterlagen per E-Mail und erzählen Sie, woran Sie arbeiten möchten.","karriere.apply.label":"Bewerbung an","karriere.apply.privacy.pre":"Informationen zum Umgang mit Bewerberdaten finden Sie in der","karriere.apply.privacy.link":"Datenschutz­erklärung","karriere.team.h2":"Lernen Sie unser Team kennen","karriere.team.cta":"Über uns","ueberuns.value.respekt.title":"Respekt","ueberuns.value.respekt.text":"Zusammenarbeit auf Augenhöhe mit Auftraggebern, Behörden und Partnern.","ueberuns.value.transparenz.title":"Transparenz","ueberuns.value.transparenz.text":"Nachvollziehbare Entscheidungen, klare Kommunikation, saubere Dokumentation.","ueberuns.value.verlaesslichkeit.title":"Verlässlichkeit","ueberuns.value.verlaesslichkeit.text":"Präzision und Termintreue vom ersten Entwurf bis zur Abnahme.","ueberuns.value.fairness.title":"Fairness","ueberuns.value.fairness.text":"Eine vertrauensvolle Partnerschaft mit gemeinsamen Zielen.","p2.photo.pending":"Foto folgt","ueberuns.staff.lga.name":"Lovorka Grgec Alajbeg","ueberuns.staff.lga.role":"Mitarbeiterin","ueberuns.staff.profile.pending":"[Kurzprofil folgt: Ausbildung, Schwerpunkte, Aufgaben im Büro.]","ueberuns.staff.as.name":"Aghil Siahpoush","ueberuns.staff.as.role":"Mitarbeiter","p2.sim.team":"Vorschau mit {n} Profilen (simuliert über ?n={n})","p2.st.werte":"Werte","ueberuns.management.h2":"Geschäftsführung","ueberuns.staff.h2":"Mitarbeiter","meta.ueberuns.title":"Über uns · C&amp;C Ingenieure GmbH","meta.ueberuns.description":"Ein Ingenieurbüro für Infrastruktur­projekte: Werte, Geschäftsführung und Team von C&amp;C Ingenieure in Bruchsal.","ueberuns.lead":"Wir sind spezialisiert auf Infrastruktur­projekte und decken alle Leistungs­phasen gemäß HOAI ab.","ueberuns.h1":"Ein Ingenieurbüro für Infrastruktur­projekte","p2.values.aria":"Unsere Werte","ueberuns.md.name":"Hüsnü Cetinkaya","ueberuns.md.role":"Geschäftsführer","ueberuns.md.bio":"Sechs Jahre Erfahrung als Projektleiter für Infrastrukturmaßnahmen. Schwerpunkte: konstruktiver Ingenieurbau, Verkehrsanlagen sowie Ausschreibung und Vergabe. Bauvorlage­berechtigter nach VV BAU.","p2.team.empty.h3":"Weitere Profile folgen","p2.team.empty.p":"Das Team stellt sich hier in Kürze vor.","ueberuns.cta.h2":"Sprechen Sie mit uns über Ihr Projekt","form.error.name":"Bitte geben Sie Ihren Namen an.","p2.form.error.name.short":"Der Name ist zu kurz. Bitte geben Sie Name und Vorname an.","form.error.email.empty":"Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können.","form.error.email.invalid":"Diese E-Mail-Adresse ist unvollständig. Beispiel: name@firma.de","form.error.message":"Bitte beschreiben Sie Ihr Anliegen in ein paar Worten (mindestens 10 Zeichen).","form.error.consent":"Bitte stimmen Sie der Verarbeitung zu, sonst dürfen wir Ihre Nachricht nicht bearbeiten.","form.sending":"Wird gesendet …","form.submit":"Senden","p2.dest.nachricht":"Nachricht","meta.kontakt.title":"Kontakt · C&amp;C Ingenieure GmbH","meta.kontakt.description":"Kontakt zu C&amp;C Ingenieure GmbH, Werner-von-Siemens-Straße 2-6, Gebäude 5110b, 76646 Bruchsal. Telefon +49 173 6992298, info@ib-cc.de.","kontakt.lead":"Schreiben Sie uns kurz, worum es geht. Wir melden uns bei Ihnen.","kontakt.h1":"Wie können wir Sie bei Ihrem Vorhaben unterstützen?","kontakt.ways.aria":"Kontaktwege","kontakt.address.label":"Adresse","kontakt.phone.label":"Telefon","kontakt.email.label":"E-Mail","p2.drw.aria.location":"Lageskizze Werner-von-Siemens-Straße 2-6, Gebäude 5110b, Bruchsal, schematisch","kontakt.map.osm":"Route in OpenStreetMap öffnen","kontakt.map.osm.newtab":"(öffnet in neuem Tab)","form.h2":"Nachricht senden","form.name.label":"Name, Vorname","form.email.label":"Ihre E-Mail","form.message.label":"Ihr Anliegen","form.consent":"Ich bin damit einverstanden, dass diese Daten zum Zwecke der Kontaktaufnahme gespeichert und verarbeitet werden. Ich kann meine Einwilligung jederzeit widerrufen.","form.consent.more.pre":"Mehr in der","form.consent.more.link":"Datenschutz­erklärung","form.required.note":"* Pflichtfeld","form.done.h3":"Nachricht erfasst","form.done.preview":"Vorschau: Die Nachricht wurde nicht versendet.","form.done.preview.p":"Diese Seite ist ein Entwurf und überträgt keine Daten. Schreiben Sie uns bis dahin direkt an info@ib-cc.de.","form.done.again":"Neue Nachricht schreiben","legal.privacy.s1.h":"Datenschutz auf einen Blick","legal.privacy.s1.p":"Allgemeine Hinweise, Datenerfassung, Ihre Rechte","legal.privacy.s2.h":"Hosting","legal.privacy.s2.p":"Hosting-Anbieter und Auftragsverarbeitung","legal.privacy.s3.h":"Allgemeine Hinweise und Pflichtinformationen","legal.privacy.s3.p":"Verantwortliche Stelle, Speicherdauer, Widerruf, Widerspruch, Beschwerderecht, TLS","legal.privacy.s4.h":"Datenerfassung auf dieser Website","legal.privacy.s4.p":"Cookies, Einwilligung, Server-Log-Dateien, Kontaktformular, Anfrage per E-Mail oder Telefon","legal.privacy.s5.h":"Analyse-Tools und Werbung","legal.privacy.s5.p":"Nur falls auf der neuen Seite eingesetzt","legal.privacy.s6.h":"Plugins und Tools","legal.privacy.s6.p":"Schriftarten, Sicherheits-Tools","legal.privacy.s7.h":"Eigene Dienste","legal.privacy.s7.p":"Umgang mit Bewerberdaten, Bewerber-Pool","legal.impressum.h2":"Impressum","legal.privacy.h2":"Datenschutz­erklärung","meta.impressum.title":"Impressum und Datenschutz · C&amp;C Ingenieure GmbH","meta.impressum.description":"Impressum und Datenschutz­erklärung der C&amp;C Ingenieure GmbH, Bruchsal.","legal.kicker":"Rechtliches","legal.h1":"Impressum und Datenschutz","p2.legal.section.aria":"Rechtliche Angaben","legal.toc.aria":"Inhalt dieser Seite","p2.legal.toc.h2":"Inhalt","p2.legal.toc.sub.aria":"Abschnitte der Datenschutz­erklärung","legal.draftnote":"Entwurfshinweis: Die rechtlichen Texte stammen von ib-cc.de und werden auf der Seite nur auf Deutsch geführt. Die Datenschutz­erklärung muss vor dem Livegang an die tatsächlich eingesetzten Dienste der neuen Seite angepasst werden.","p2.legal.en.notice":"","legal.impressum.company":"C&amp;C Ingenieure GmbH","legal.impressum.street":"Werner-von-Siemens Straße 2-6","legal.impressum.building":"Gebäude 5110b","legal.impressum.city":"76646 Bruchsal","legal.impressum.contact.h3":"Kontakt","legal.impressum.contact.web":"Web: www.ib-cc.de","legal.impressum.md.h3":"Vertretungsberechtigter Geschäftsführer","legal.impressum.md.name":"M.Eng. Hüsnü Cetinkaya","legal.impressum.seat.h3":"Sitz der Gesellschaft","legal.impressum.seat.value":"Bruchsal","legal.impressum.register.h3":"Handelsregister","legal.impressum.register.value":"HRB 743910, Registergericht Mannheim","legal.impressum.vat.h3":"Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG","legal.impressum.vat.value":"DE353174530","legal.impressum.chamber.h3":"Zuständige Kammer und Aufsichtsbehörde","legal.impressum.chamber.name":"Ingenieurkammer Baden-Württemberg","legal.impressum.chamber.address":"Lenore-Volz-Straße 3, D-70372 Stuttgart","legal.impressum.chamber.contact":"E-Mail: info@ingbw.de · Telefon: +49 711 64971-0","legal.impressum.chamber.web":"Website: www.ingbw.de","legal.impressum.profession.h3":"Berufsbezeichnung","legal.impressum.profession.title":"Ingenieur/in (verliehen in Deutschland)","legal.impressum.profession.rules":"Es gelten das Ingenieurkammergesetz und die Hauptsatzung der Ingenieurkammer Baden-Württemberg.","legal.impressum.insurance.h3":"Berufshaftpflichtversicherung","legal.impressum.insurance.name":"Allianz Versicherungs-AG, Königinstr. 28, 80802 München","legal.impressum.insurance.scope":"Räumlicher Geltungsbereich: Deutschland","legal.impressum.standardtexts":"[Haftung für Inhalte, Haftung für Links und Urheberrecht: Standardtexte werden 1:1 von ib-cc.de übernommen.]","legal.privacy.controller.h3":"Verantwortliche Stelle","legal.privacy.controller.text":"C&amp;C Ingenieure GmbH, vertreten durch Hüsnü Cetinkaya, Werner-von-Siemens-Str. 2-6, Gebäude 5110b, 76646 Bruchsal","legal.privacy.controller.contact":"Telefon: +49 173 6992298 · E-Mail: info@ib-cc.de","legal.privacy.outline.intro":"Gliederung der bestehenden Erklärung, die in die neue Seite übernommen wird:","p2.ziel":"Ziel","p2.readout.aria":"Position auf der Seite"},"en":{"p2.drw.tragwerk":"Structure","p2.drw.objekt":"Design","p2.drw.verkehr":"Transport infrastructure","svc.bvb.short":"BVB under VV BAU","svc.bvb.summary":"Review and approval of construction documents for railway projects.","svc.objekt.title":"Design","svc.objekt.summary":"Structural engineering, transport infrastructure, building and civil engineering under HOAI.","svc.tragwerk.title":"Structural engineering","svc.tragwerk.summary":"Structural analysis, detailing and reinforcement design, including existing structures.","svc.vergabe.title":"Tendering &amp; award","svc.vergabe.summary":"Bills of quantities, cost estimation and award recommendation.","svc.bauueberwachung.title":"Site supervision &amp; construction management","svc.bauueberwachung.summary":"Quality, schedule and cost control through to acceptance.","svc.steuerung.title":"Project management","svc.steuerung.summary":"Organisation, schedules, costs and risks under control.","svc.bim.short":"Building Information Modeling","svc.bim.summary":"Digital models for design, coordination and operation.","cta.services.all":"View all services","p2.drw.aria.czerny":"Czernyring retaining wall, schematic","ui.schematic.photo.pending":"Schematic representation · Photo to follow","ref.czernyring.title":"Montpellier Carré: Czernyring retaining wall","ref.czernyring.place":"Heidelberg","ref.czernyring.year":"2026","ref.czernyring.client":"Structural engineering","referenzen.field.ki":"Civil structures","p2.drw.aria.rimbach":"Platforms with weather shelter, schematic","ref.rimbach.title":"Rimbach station: platforms and weather shelter","ref.rimbach.place":"Rimbach (Hesse)","ref.rimbach.year":"2026","ref.rimbach.client":"DB InfraGO AG, DB Bahnbau Gruppe","referenzen.field.bahn":"Transport infrastructure / railway","p2.drw.aria.solms":"Natural-stone retaining wall in elevation, schematic","ref.solmser.title":"Solmserstraße retaining wall","ref.solmser.place":"Wetzlar","ref.solmser.year":"2026","ref.solmser.client":"Design and structural engineering","lph.label":"LPH","lph.1":"Basic evaluation","lph.2":"Preliminary design","lph.3":"Design development","lph.4":"Approval design","lph.5":"Construction design","lph.6":"Preparation of award","lph.7":"Assistance with award","lph.8":"Construction supervision","lph.9":"Post-completion services","p2.st.bruchsal":"Bruchsal","p2.st.partner":"Partnership","nav.leistungen":"Services","nav.referenzen":"Projects","p2.st.lph":"Work stages","meta.home.title":"C&amp;C Ingenieure GmbH · Engineering consultancy for infrastructure in Bruchsal","meta.home.description":"Planning infrastructure. Delivering reliably. Engineering consultancy in Bruchsal for design and structural engineering, tendering and award, site supervision, project management and BIM, all HOAI work stages.","header.skip":"Skip to content","nav.startseite":"Home","nav.karriere":"Careers","nav.ueberuns":"About us","nav.kontakt":"Contact","header.logo.aria":"C&amp;C Ingenieure GmbH, to the home page","header.nav.aria":"Main navigation","header.lang.aria":"Language","p2.lang.switch.de":"German","p2.lang.switch.en":"English","header.menu.open":"Menu","home.h1.line1":"Planning infrastructure.","home.h1.line2":"Delivering reliably.","home.lead":"C&amp;C Ingenieure supports your project from design through to site supervision: design and structural engineering, tendering and award, project management and BIM.","home.cta.services":"Our services","home.cta.contact":"Get in touch","home.hero.caption":"Layer model: transport infrastructure, design, structure","ui.schematic":"Schematic representation","home.kicker":"Engineering consultancy · Bruchsal","home.intro.h2":"Collaborative, transparent, reliable.","home.intro.p":"We see every collaboration as a partnership built on trust, shaped by respect, transparency and a clear focus on shared goals. Our aim is sustainable solutions that meet the highest standards of quality and stand the test of time.","home.fact.1.title":"All HOAI work stages","home.fact.1.text":"From basic evaluation to post-completion services, from a single source.","home.fact.2.title":"Authorised to submit building documents under VV BAU (Deutsche Bahn)","home.fact.2.text":"Technical review and approval for railway-specific projects.","home.fact.3.title":"Specialised in infrastructure","home.fact.3.text":"Structural engineering, transport infrastructure, railway and civil engineering.","home.services.h2":"Our services at a glance","home.services.all":"View all services","home.refs.h2":"Selected projects","home.refs.all":"All projects","home.lph.h2":"All HOAI work stages","home.lph.lead":"We take on the work stages your project needs, individually or end to end.","p2.lph.aria":"Work stages 1 to 9","home.cta.p":"If you value reliability, fairness and a collaborative way of working, we are glad to assist. We look forward to moving your project forward together.","home.cta.h2":"How can we support your project?","cta.contact":"Get in touch","partners.1":"DB InfraGO AG","partners.2":"DB Bahnbau Gruppe GmbH","partners.3":"Autobahn GmbH","partners.4":"Stadt Heidelberg","partners.5":"Stadt Wetzlar","partners.6":"Stadt Frankfurt am Main","partners.7":"Stadt Altena","partners.8":"RNV","partners.9":"Lipoid","partners.h2":"Our partners","header.menu.close":"Close","footer.company":"C&amp;C Ingenieure GmbH","footer.street":"Werner-von-Siemens-Straße 2-6","footer.building":"Gebäude 5110b","footer.city":"76646 Bruchsal","footer.contact.h":"Contact","footer.phone":"Tel +49 173 6992298","footer.md.h":"Managing Director","footer.register.h":"Commercial register","footer.copyright":"© 2026 C&amp;C Ingenieure GmbH","p2.footer.legal.aria":"Legal","footer.impressum":"Legal notice","footer.datenschutz":"Privacy","p2.node.bvb":"BVB under VV BAU","svc.bvb.b1":"Technical review and approval of construction documents","svc.bvb.b2":"Compliance with regulations and standards","svc.bvb.b3":"Coordination with the Federal Railway Authority (Eisenbahn-Bundesamt) and other authorities","svc.bvb.b4":"Coordination of the specialist designs","p2.drw.aria.bvb":"Track installation with bridge structure, schematic","svc.bvb.caption":"Track installation with bridge structure","svc.bvb.title":"Authorised to submit building documents under VV BAU (Deutsche Bahn)","svc.bvb.lead":"As an engineering consultancy authorised under VV BAU, we review and supervise railway projects. We make sure that all legal and technical requirements are met.","p2.node.objekt":"Design","svc.objekt.b1":"Structural engineering: bridges, retaining walls, rock and slope stabilisation, noise protection","svc.objekt.b2":"Transport infrastructure and railway construction, including passenger stations","svc.objekt.b3":"Building construction for commercial and private projects","svc.objekt.b4":"Civil engineering: cable routes, supply and disposal lines, drainage","p2.drw.drainage":"Drainage","p2.drw.backfill":"Backfill","p2.drw.aria.objekt":"Retaining wall in cross-section, schematic","svc.objekt.caption":"Retaining wall or bridge structure","svc.objekt.lead":"Tailored solutions for your construction projects in line with the HOAI service profiles, integrated and efficient.","p2.node.tragwerk":"Structural engineering","svc.tragwerk.b1":"Structural design and structural calculations for approval","svc.tragwerk.b2":"Detailed verifications and re-analysis of existing structures","svc.tragwerk.b3":"Formwork, shell and reinforcement drawings, waterstop layouts","svc.tragwerk.b4":"Steel construction","p2.drw.rebar":"Reinforcement","p2.drw.aria.tragwerk":"Reinforcement and formwork, schematic","svc.tragwerk.caption":"Reinforcement and formwork on site","svc.tragwerk.lead":"We support you from basic evaluation through to checkable structural calculations, with safe, economical and sustainable structures.","p2.node.vergabe":"Tendering","svc.vergabe.b1":"Specification with bill of quantities","svc.vergabe.b2":"Quantity take-off and cost estimation","svc.vergabe.b3":"Examination and evaluation of tenders","svc.vergabe.b4":"Tenderer meetings and award recommendation","p2.drw.aria.vergabe":"Stack of bills of quantities and a drawing sheet, schematic","svc.vergabe.caption":"Bill of quantities and drawings at the desk","svc.vergabe.lead":"We prepare tenders and assist with the award. The procedure remains legally sound, economical and transparent.","p2.node.bau":"Site supervision","svc.bauueberwachung.b1":"Quality control of construction works","svc.bauueberwachung.b2":"Cost and schedule control","svc.bauueberwachung.b3":"Construction records and review of site diaries","svc.bauueberwachung.b4":"Support at acceptance, defect tracking","p2.drw.aria.bau":"Construction site with crane and excavation, schematic","svc.bauueberwachung.caption":"Site management on the construction site","svc.bauueberwachung.lead":"We support your construction project on site so that it is delivered on schedule and to the required quality.","p2.node.steuerung":"Project management","svc.steuerung.b1":"Project organisation and coordination","svc.steuerung.b2":"Schedule, cost and quality management","svc.steuerung.b3":"Risk management","svc.steuerung.b4":"Contract and variation management, documentation","p2.drw.aria.steuerung":"Schedule with critical path, schematic","svc.steuerung.caption":"Project meeting with client and designers","svc.steuerung.lead":"From the first idea to completion: clear organisation, focused communication and control of costs, schedules and quality.","p2.node.bim":"BIM","svc.bim.b1":"BIM-based design and coordination","svc.bim.b2":"Quality and clash checking","svc.bim.b3":"Data management and documentation","svc.bim.b4":"Operation and maintenance","p2.drw.clash":"Clash","p2.drw.aria.bim":"BIM model with clash check, schematic","svc.bim.caption":"3D model on screen","svc.bim.title":"Building Information Modeling (BIM)","svc.bim.lead":"With the BIM method we plan more efficiently, more transparently and for the long term, from design through construction to operation.","meta.leistungen.title":"Services · C&amp;C Ingenieure GmbH","meta.leistungen.description":"Seven fields of service from a single source: BVB under VV BAU, design, structural engineering, tendering and award, site supervision, project management and BIM.","leistungen.lead":"Seven fields of service that interlock: from design through award to site supervision.","leistungen.h1":"Engineering services from a single source","p2.route.aria":"Route map of the website","p2.svc.list.aria":"Fields of service","leistungen.cta.h2":"Which service does your project need?","ref.czernyring.desc":"Structural calculations plus formwork and reinforcement drawings for the retaining wall on Czernyring (construction design). Completed.","ref.solmser.desc":"Repair or replacement of an approximately 200 m long natural-stone retaining wall as part of the road renewal, with options up to retaining the existing masonry.","ref.rimbach.desc":"Renewal of both platforms and construction of a new weather shelter. Construction design, structural calculations and documentation to Ril 813.","p2.drw.aria.marbach":"Station in site plan, schematic","ref.marbach.title":"Marbach station","ref.marbach.year":"2025/26","ref.marbach.client":"Deutsche Bahn","ref.marbach.desc":"Design of the station, currently in preparation of award (work stage 6).","p2.drw.aria.doro":"Utility trench in cross-section, schematic","ref.dorotheen.title":"Autobahn GmbH: Dorotheenstraße","ref.dorotheen.year":"2026","ref.dorotheen.client":"Autobahn GmbH · Civil engineering","ref.dorotheen.desc":"Civil engineering design for Autobahn GmbH. Completed.","referenzen.field.tief":"Civil engineering","p2.drw.aria.lipoid":"Building in isometric view, schematic","ref.lipoid.title":"Lipoid","ref.lipoid.year":"2026","ref.lipoid.client":"Building construction","ref.lipoid.desc":"Building project in progress.","referenzen.field.hoch":"Building construction","referenzen.filter.all":"All","ui.count.0":"0 projects","ui.count.1":"1 project","ui.count.n":"{n} projects","p2.sim.refs":"Preview with {n} projects (simulated via ?n={n})","p2.st.projekte":"Project list","meta.referenzen.title":"Projects · C&amp;C Ingenieure GmbH","meta.referenzen.description":"Projects we have delivered: structural engineering, transport infrastructure and railway construction, civil engineering and building construction.","referenzen.lead":"A selection from structural, railway, civil and building engineering. Filter by field.","referenzen.h1":"Projects we have delivered","p2.list.aria":"Project list","referenzen.filter.aria":"Filter by field","referenzen.empty.h3":"No projects in this field","referenzen.empty.p":"No project is currently published for this field. All fields show the full selection.","referenzen.none.h3":"Projects to follow","referenzen.none.p":"The project pages are being prepared. We would be glad to tell you directly what we are working on.","ui.filter.reset":"Reset filter","referenzen.draftnote":"Draft: project texts are taken from our project management system and must be reviewed before publication. Photos to follow. New projects can be added later by the office itself.","referenzen.cta.h2":"Planning a similar project?","p2.sim.jobs":"Preview with {n} positions (simulated via ?n={n})","karriere.jobs.h2":"Open positions","p2.st.init":"Speculative application","p2.dest.team":"Team","meta.karriere.title":"Careers · C&amp;C Ingenieure GmbH","meta.karriere.description":"Work with us on infrastructure: open positions and speculative applications at C&amp;C Ingenieure in Bruchsal.","karriere.lead":"We are looking for engineers who take responsibility and see projects through from design to construction.","karriere.h1":"Work with us on infrastructure","karriere.job.title":"[Job title], e.g. Civil Engineer, Structural Engineering (m/f/d)","karriere.job.example":"Example, to be replaced","karriere.job.meta":"Bruchsal · [Full-time/Part-time] · from [date]","karriere.job.text":"[Two to three sentences on the responsibilities and the profile sought.]","karriere.job.apply":"Apply now","karriere.empty.h3":"No positions are currently advertised","karriere.empty.p":"A speculative application is nevertheless welcome at any time.","karriere.empty.cta":"Speculative application","karriere.initiative.h2":"No suitable position listed?","karriere.initiative.p":"Speculative applications are welcome. Send us your documents by e-mail and tell us what you would like to work on.","karriere.apply.label":"Apply to","karriere.apply.privacy.pre":"Information on how we handle applicant data can be found in the","karriere.apply.privacy.link":"privacy policy","karriere.team.h2":"Meet our team","karriere.team.cta":"About us","ueberuns.value.respekt.title":"Respect","ueberuns.value.respekt.text":"Working as equals with clients, authorities and partners.","ueberuns.value.transparenz.title":"Transparency","ueberuns.value.transparenz.text":"Traceable decisions, clear communication, tidy documentation.","ueberuns.value.verlaesslichkeit.title":"Reliability","ueberuns.value.verlaesslichkeit.text":"Precision and adherence to deadlines from the first design to acceptance.","ueberuns.value.fairness.title":"Fairness","ueberuns.value.fairness.text":"A partnership built on trust and shared goals.","p2.photo.pending":"Photo to follow","ueberuns.staff.lga.name":"Lovorka Grgec Alajbeg","ueberuns.staff.lga.role":"Team member","ueberuns.staff.profile.pending":"[Short profile to follow: training, focus areas, responsibilities in the office.]","ueberuns.staff.as.name":"Aghil Siahpoush","ueberuns.staff.as.role":"Team member","p2.sim.team":"Preview with {n} profiles (simulated via ?n={n})","p2.st.werte":"Values","ueberuns.management.h2":"Management","ueberuns.staff.h2":"Team","meta.ueberuns.title":"About us · C&amp;C Ingenieure GmbH","meta.ueberuns.description":"An engineering consultancy for infrastructure projects: the values, management and team of C&amp;C Ingenieure in Bruchsal.","ueberuns.lead":"We specialise in infrastructure projects and cover all work stages under HOAI.","ueberuns.h1":"An engineering consultancy for infrastructure projects","p2.values.aria":"Our values","ueberuns.md.name":"Hüsnü Cetinkaya","ueberuns.md.role":"Managing Director","ueberuns.md.bio":"Six years of experience as project manager for infrastructure schemes. Focus areas: structural engineering, transport infrastructure, and tendering and award. Authorised to submit building documents under VV BAU (Deutsche Bahn).","p2.team.empty.h3":"More profiles to follow","p2.team.empty.p":"The team will introduce itself here shortly.","ueberuns.cta.h2":"Talk to us about your project","form.error.name":"Please enter your name.","p2.form.error.name.short":"The name is too short. Please enter surname and first name.","form.error.email.empty":"Please enter your e-mail address so that we can reply.","form.error.email.invalid":"This e-mail address is incomplete. Example: name@company.com","form.error.message":"Please describe your enquiry in a few words (at least 10 characters).","form.error.consent":"Please agree to the processing; otherwise we are not permitted to handle your message.","form.sending":"Sending …","form.submit":"Send","p2.dest.nachricht":"Message","meta.kontakt.title":"Contact · C&amp;C Ingenieure GmbH","meta.kontakt.description":"Contact C&amp;C Ingenieure GmbH, Werner-von-Siemens-Straße 2-6, Gebäude 5110b, 76646 Bruchsal. Telephone +49 173 6992298, info@ib-cc.de.","kontakt.lead":"Tell us briefly what it is about. We will get back to you.","kontakt.h1":"How can we support your project?","kontakt.ways.aria":"Ways to contact us","kontakt.address.label":"Address","kontakt.phone.label":"Telephone","kontakt.email.label":"E-mail","p2.drw.aria.location":"Location sketch Werner-von-Siemens-Straße 2-6, Gebäude 5110b, Bruchsal, schematic","kontakt.map.osm":"Open route in OpenStreetMap","kontakt.map.osm.newtab":"(opens in a new tab)","form.h2":"Send a message","form.name.label":"Surname, first name","form.email.label":"Your e-mail","form.message.label":"Your enquiry","form.consent":"I agree that this data may be stored and processed for the purpose of handling my enquiry. I can withdraw my consent at any time.","form.consent.more.pre":"More in the","form.consent.more.link":"privacy policy","form.required.note":"* Required field","form.done.h3":"Message recorded","form.done.preview":"Preview: the message has not been sent.","form.done.preview.p":"This page is a draft and transmits no data. Until then, please write to us directly at info@ib-cc.de.","form.done.again":"Write a new message","legal.privacy.s1.h":"Privacy at a glance","legal.privacy.s1.p":"General information, data collection, your rights","legal.privacy.s2.h":"Hosting","legal.privacy.s2.p":"Hosting provider and data processing on behalf","legal.privacy.s3.h":"General information and mandatory disclosures","legal.privacy.s3.p":"Controller, retention period, withdrawal, objection, right to lodge a complaint, TLS","legal.privacy.s4.h":"Data collection on this website","legal.privacy.s4.p":"Cookies, consent, server log files, contact form, enquiries by e-mail or telephone","legal.privacy.s5.h":"Analytics tools and advertising","legal.privacy.s5.p":"Only if used on the new site","legal.privacy.s6.h":"Plugins and tools","legal.privacy.s6.p":"Fonts, security tools","legal.privacy.s7.h":"Own services","legal.privacy.s7.p":"Handling of applicant data, applicant pool","legal.impressum.h2":"Legal notice","legal.privacy.h2":"Privacy policy","meta.impressum.title":"Legal notice and privacy · C&amp;C Ingenieure GmbH","meta.impressum.description":"Legal notice and privacy policy of C&amp;C Ingenieure GmbH, Bruchsal.","legal.kicker":"Legal","legal.h1":"Legal notice and privacy","p2.legal.section.aria":"Legal information","legal.toc.aria":"Contents of this page","p2.legal.toc.h2":"Contents","p2.legal.toc.sub.aria":"Sections of the privacy policy","legal.draftnote":"Draft note: the legal texts are taken from ib-cc.de and are kept in German only on this site. The privacy policy must be adapted to the services actually used by the new site before go-live.","p2.legal.en.notice":"Legal notice and privacy policy are provided in German only.","legal.impressum.company":"C&amp;C Ingenieure GmbH","legal.impressum.street":"Werner-von-Siemens Straße 2-6","legal.impressum.building":"Gebäude 5110b","legal.impressum.city":"76646 Bruchsal","legal.impressum.contact.h3":"Contact","legal.impressum.contact.web":"Web: www.ib-cc.de","legal.impressum.md.h3":"Managing Director authorised to represent the company","legal.impressum.md.name":"M.Eng. Hüsnü Cetinkaya","legal.impressum.seat.h3":"Registered office","legal.impressum.seat.value":"Bruchsal","legal.impressum.register.h3":"Commercial register","legal.impressum.register.value":"HRB 743910, Register court Mannheim","legal.impressum.vat.h3":"VAT identification number under § 27a UStG","legal.impressum.vat.value":"DE353174530","legal.impressum.chamber.h3":"Responsible chamber and supervisory authority","legal.impressum.chamber.name":"Ingenieurkammer Baden-Württemberg (Chamber of Engineers)","legal.impressum.chamber.address":"Lenore-Volz-Straße 3, D-70372 Stuttgart","legal.impressum.chamber.contact":"E-mail: info@ingbw.de · Telephone: +49 711 64971-0","legal.impressum.chamber.web":"Website: www.ingbw.de","legal.impressum.profession.h3":"Professional title","legal.impressum.profession.title":"Engineer (awarded in Germany)","legal.impressum.profession.rules":"The Ingenieurkammergesetz (Chamber of Engineers Act) and the statutes of the Ingenieurkammer Baden-Württemberg apply.","legal.impressum.insurance.h3":"Professional liability insurance","legal.impressum.insurance.name":"Allianz Versicherungs-AG, Königinstr. 28, 80802 München","legal.impressum.insurance.scope":"Territorial scope: Germany","legal.impressum.standardtexts":"[Liability for content, liability for links and copyright: standard texts are taken over 1:1 from ib-cc.de.]","legal.privacy.controller.h3":"Controller","legal.privacy.controller.text":"C&amp;C Ingenieure GmbH, represented by Hüsnü Cetinkaya, Werner-von-Siemens-Str. 2-6, Gebäude 5110b, 76646 Bruchsal","legal.privacy.controller.contact":"Telephone: +49 173 6992298 · E-mail: info@ib-cc.de","legal.privacy.outline.intro":"Outline of the existing policy that will be carried over to the new site:","p2.ziel":"Destination","p2.readout.aria":"Position on the page"}};
  /*/I18N*/
  const decode = v => { const t = d.createElement("textarea"); t.innerHTML = v; return t.value; };
  let lang = "de";
  const tr = (k, vars) => {
    let v = I18N[lang][k]; if (v === undefined) v = I18N.de[k]; if (v === undefined) return k;
    if (vars) Object.keys(vars).forEach(n => { v = v.split("{" + n + "}").join(vars[n]); });
    return v;
  };
  const trText = (k, vars) => decode(tr(k, vars));
  const hooks = [];
  const applyLang = l => {
    lang = l === "en" ? "en" : "de";
    de.lang = lang;
    d.querySelectorAll("[data-i18n]").forEach(el => {
      const v = tr(el.dataset.i18n);
      if (el.tagName === "TITLE") el.textContent = decode(v); else el.innerHTML = v;
    });
    d.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.dataset.i18nAttr.split(",").forEach(pair => { const i = pair.indexOf(":"); el.setAttribute(pair.slice(0, i), trText(pair.slice(i + 1))); });
    });
    d.querySelectorAll(".lang button").forEach(b => { const on = b.dataset.lang === lang; b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); });
    d.querySelectorAll("[data-en-only]").forEach(el => { el.hidden = lang !== "en"; });
    try { localStorage.setItem("cc-lang", lang); } catch (_) {}
    hooks.forEach(fn => fn());
  };
  d.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang); }));
  let initial = qs.get("lang");
  if (!initial) { try { initial = localStorage.getItem("cc-lang"); } catch (_) {} }
  if (initial === "en") applyLang("en");

  /* ---------- mobile menu ---------- */
  const hdr = d.querySelector(".hdr"), mb = d.querySelector(".menu-btn");
  if (hdr && mb) {
    const lbl = mb.querySelector(".sr");
    const setMenu = open => {
      hdr.classList.toggle("open", open);
      mb.setAttribute("aria-expanded", String(open));
      lbl.textContent = trText(open ? "header.menu.close" : "header.menu.open");
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
  const simNote = (n, key) => {
    const s = d.querySelector("[data-simnote]");
    if (s) { s.hidden = false; const f = () => { s.textContent = trText(key, { n }); }; f(); hooks.push(f); }
  };

  /* ---------- karriere ---------- */
  const jobs = d.querySelector("[data-jobs]");
  if (jobs && nParam !== null) {
    simulate(jobs, nParam);
    simNote(nParam, "p2.sim.jobs");
    if (nParam === 0) { jobs.hidden = true; d.querySelector("[data-jobs-empty]").hidden = false; }
  }

  /* ---------- über uns ---------- */
  const team = d.querySelector("[data-team]");
  if (team && nParam !== null) {
    simulate(team, nParam);
    simNote(nParam, "p2.sim.team");
    if (nParam === 0) { team.hidden = true; d.querySelector("[data-team-empty]").hidden = false; }
  }

  /* ---------- referenzen filter ---------- */
  const grid = d.querySelector("[data-refs]");
  if (grid) {
    if (nParam !== null) { simulate(grid, nParam); simNote(nParam, "p2.sim.refs"); }
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
    let lastN = items.length;
    const setCount = (n, anim) => {
      lastN = n;
      num.textContent = n;
      word.textContent = trText(n === 1 ? "ui.count.1" : n === 0 ? "ui.count.0" : "ui.count.n", { n }).replace(/^\d+\s*/, "");
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
    hooks.push(() => setCount(lastN, false));
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
      return (`km ${km} · ${decode(name || "")}`).length * 6.8;
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
        if (i === 0) station(b, bt, bt + top, fmt(0), tr(b.dataset.st));
        else if (b.dataset.st && b !== destBand) station(b, bt, bt, fmt(chain(bt)), tr(b.dataset.st));
        b.querySelectorAll("[data-node]").forEach(t => { const ty = docY(t); if (ty < nEnd - 40) station(b, bt, ty, fmt(chain(ty)), tr(t.dataset.node)); });
        if (b === destBand) {
          station(b, bt, nEnd, fmt(L), tr("p2.ziel") + " · " + tr(destEl.dataset.dest), "end");
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
      stations.forEach(n => n.el.classList.toggle("cur", n === cur));
      kmKm.textContent = "km " + fmt(L * p);
      if (kmSt) kmSt.textContent = cur && cur.name ? " · " + decode(cur.name) : "";
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
    hooks.push(build);
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
      name: v => v.trim().length >= 2 || trText(v.trim() ? "p2.form.error.name.short" : "form.error.name"),
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || trText(v.trim() ? "form.error.email.invalid" : "form.error.email.empty"),
      anliegen: v => v.trim().length >= 10 || trText("form.error.message"),
      consent: (v, el) => el.checked || trText("form.error.consent")
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
      btnLbl.textContent = trText("form.sending");
      setTimeout(() => {
        btn.classList.remove("busy");
        btn.removeAttribute("aria-disabled");
        btnLbl.textContent = trText("form.submit");
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
