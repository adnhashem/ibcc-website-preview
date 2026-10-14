(() => {
  const d = document, html = d.documentElement;
  const DICT = {"de":{"meta.site.name":"C&amp;C Ingenieure GmbH","meta.site.tagline":"Ingenieurbüro für Infrastruktur in Bruchsal","meta.home.title":"C&amp;C Ingenieure GmbH · Ingenieurbüro für Infrastruktur in Bruchsal","meta.home.description":"Infrastruktur planen. Verlässlich umsetzen. Ingenieurbüro in Bruchsal für Objekt- und Tragwerks&shy;planung, Ausschreibung und Vergabe, Bau&shy;überwachung, Projekt&shy;steuerung und BIM, alle Leistungsphasen der HOAI.","meta.leistungen.title":"Leistungen · C&amp;C Ingenieure GmbH","meta.leistungen.description":"Sieben Leistungsfelder aus einer Hand: BVB nach VV&nbsp;BAU, Objektplanung, Tragwerks&shy;planung, Ausschreibung und Vergabe, Bau&shy;überwachung, Projekt&shy;steuerung und BIM.","meta.referenzen.title":"Referenzen · C&amp;C Ingenieure GmbH","meta.referenzen.description":"Projekte, die wir begleitet haben: Konstruktiver Ingenieurbau, Verkehrsanlagen und Bahnbau, Tiefbau und Hochbau.","meta.karriere.title":"Karriere · C&amp;C Ingenieure GmbH","meta.karriere.description":"Arbeiten Sie mit uns an Infrastruktur: offene Stellen und Initiativbewerbung bei C&amp;C Ingenieure in Bruchsal.","meta.ueberuns.title":"Über uns · C&amp;C Ingenieure GmbH","meta.ueberuns.description":"Ein Ingenieurbüro für Infrastruktur&shy;projekte: Werte, Geschäftsführung und Team von C&amp;C Ingenieure in Bruchsal.","meta.kontakt.title":"Kontakt · C&amp;C Ingenieure GmbH","meta.kontakt.description":"Kontakt zu C&amp;C Ingenieure GmbH, Werner-von-Siemens-Straße 2-6, Gebäude 5110b, 76646 Bruchsal. Telefon +49 173 6992298, info@ib-cc.de.","meta.impressum.title":"Impressum und Datenschutz · C&amp;C Ingenieure GmbH","meta.impressum.description":"Impressum und Datenschutz&shy;erklärung der C&amp;C Ingenieure GmbH, Bruchsal.","header.logo.placeholder":"GMBH · LOGO FOLGT","header.logo.aria":"C&amp;C Ingenieure GmbH, zur Startseite","header.logo.alt":"C&amp;C Ingenieure GmbH","header.skip":"Zum Inhalt springen","header.nav.aria":"Hauptnavigation","header.nav.mobile.aria":"Hauptnavigation mobil","header.menu.open":"Menü","header.menu.close":"Schließen","header.lang.aria":"Sprache","header.lang.de":"DE","header.lang.en":"EN","header.lang.en.pending":"Englische Version folgt","nav.startseite":"Startseite","nav.leistungen":"Leistungen","nav.referenzen":"Referenzen","nav.karriere":"Karriere","nav.ueberuns":"Über uns","nav.kontakt":"Kontakt","home.kicker":"Ingenieurbüro · Bruchsal","home.h1":"Infrastruktur planen. Verlässlich umsetzen.","home.h1.line1":"Infrastruktur planen.","home.h1.line2":"Verlässlich umsetzen.","home.lead":"C&amp;C Ingenieure begleitet Ihr Vorhaben von der Planung bis zur Bau&shy;überwachung: Objekt- und Tragwerks&shy;planung, Ausschreibung und Vergabe, Projekt&shy;steuerung und BIM.","home.cta.services":"Unsere Leistungen","home.cta.contact":"Kontakt aufnehmen","home.hero.caption":"Schichtenmodell: Verkehrsanlage, Objektplanung, Tragwerk","home.hero.layer.verkehr.aria":"Verkehrsanlage: Leistung BVB nach VV&nbsp;BAU","home.hero.layer.objekt.aria":"Objektplanung: Leistung Objektplanung","home.hero.layer.tragwerk.aria":"Tragwerk: Leistung Tragwerks&shy;planung","home.intro.h2":"Partnerschaftlich, transparent, verlässlich.","home.intro.p":"Wir verstehen jede Zusammenarbeit als vertrauensvolle Partnerschaft, geprägt von Respekt, Transparenz und einem klaren Fokus auf gemeinsame Ziele. Unser Anspruch sind nachhaltige Lösungen, die höchsten Qualitätsansprüchen genügen und langfristig überzeugen.","home.fact.1.title":"Alle HOAI-Leistungs&shy;phasen","home.fact.1.text":"Von der Grundlagen&shy;ermittlung bis zur Objekt&shy;betreuung aus einer Hand.","home.fact.2.title":"Bauvorlage&shy;berechtigt nach VV&nbsp;BAU","home.fact.2.text":"Fachtechnische Prüfung und Freigabe für bahnspezifische Projekte.","home.fact.3.title":"Spezialisiert auf Infrastruktur","home.fact.3.text":"Konstruktiver Ingenieurbau, Verkehrsanlagen, Bahnbau und Tiefbau.","home.services.h2":"Unsere Leistungen im Überblick","home.services.all":"Alle Leistungen ansehen","home.services.aria":"Leistungen auf dieser Seite","home.refs.h2":"Ausgewählte Referenzen","home.refs.all":"Alle Referenzen","home.lph.h2":"Alle Leistungsphasen der HOAI","home.lph.lead":"Wir übernehmen die Leistungsphasen, die Ihr Projekt braucht, einzeln oder durchgängig.","home.cta.h2":"Wie können wir Sie bei Ihrem Vorhaben unterstützen?","home.cta.p":"Wenn Sie Wert auf Verlässlichkeit, Fairness und eine partnerschaftliche Zusammenarbeit legen, stehen wir Ihnen gerne zur Seite. Wir freuen uns darauf, Ihr Projekt gemeinsam voranzubringen.","svc.bvb.short":"BVB nach VV&nbsp;BAU","svc.bvb.title":"Bauvorlage&shy;berechtigter nach VV&nbsp;BAU","svc.bvb.summary":"Prüfung und Freigabe von Ausführungs&shy;unterlagen für Bahnprojekte.","svc.bvb.lead":"Als bauvorlageberechtigtes Ingenieurbüro prüfen und überwachen wir Bahnprojekte. Wir stellen sicher, dass alle rechtlichen und technischen Vorgaben eingehalten werden.","svc.bvb.b1":"Fachtechnische Prüfung und Freigabe von Ausführungs&shy;unterlagen","svc.bvb.b2":"Einhaltung von Vorschriften und Normen","svc.bvb.b3":"Koordination mit dem Eisenbahn-Bundesamt und weiteren Behörden","svc.bvb.b4":"Koordination der Fachentwürfe","svc.bvb.caption":"Gleisanlage mit Brückenbauwerk","svc.objekt.title":"Objektplanung","svc.objekt.summary":"Konstruktiver Ingenieurbau, Verkehrsanlagen, Hochbau und Tiefbau nach HOAI.","svc.objekt.lead":"Maßgeschneiderte Lösungen für Ihre Bauprojekte gemäß den Leistungsbildern der HOAI, ganzheitlich und effizient.","svc.objekt.b1":"Konstruktiver Ingenieurbau: Brücken, Stützwände, Fels- und Hangsicherungen, Lärmschutz","svc.objekt.b2":"Verkehrsanlagen und Bahnbau, auch Personenbahnhöfe","svc.objekt.b3":"Hochbau für gewerbliche und private Vorhaben","svc.objekt.b4":"Tiefbau: Kabeltrassen, Ver- und Entsorgungsleitungen, Entwässerung","svc.objekt.caption":"Stützwand oder Brückenbauwerk","svc.tragwerk.title":"Tragwerks&shy;planung","svc.tragwerk.summary":"Statik, Konstruktion und Bewehrungs&shy;planung, auch für Bestands&shy;bauwerke.","svc.tragwerk.lead":"Wir begleiten Sie von der Grundlagen&shy;ermittlung bis zur prüffähigen statischen Berechnung, mit sicheren, wirtschaftlichen und nachhaltigen Tragwerken.","svc.tragwerk.b1":"Tragwerksentwurf und Genehmigungsstatik","svc.tragwerk.b2":"Detailnachweise und Nachberechnung von Bestands&shy;bauwerken","svc.tragwerk.b3":"Schal-, Rohbau- und Bewehrungs&shy;planung, Fugenbandpläne","svc.tragwerk.b4":"Stahlbau","svc.tragwerk.caption":"Bewehrung und Schalung auf der Baustelle","svc.vergabe.title":"Ausschreibung &amp; Vergabe","svc.vergabe.summary":"Leistungs&shy;verzeichnisse, Kosten&shy;ermittlung und Vergabe&shy;empfehlung.","svc.vergabe.lead":"Wir bereiten Ausschreibungen vor und wirken bei der Vergabe mit. Das Verfahren bleibt rechtssicher, wirtschaftlich und transparent.","svc.vergabe.b1":"Leistungsbeschreibung mit Leistungsverzeichnis","svc.vergabe.b2":"Mengenberechnung und Kosten&shy;ermittlung","svc.vergabe.b3":"Prüfung und Wertung der Angebote","svc.vergabe.b4":"Bietergespräche und Vergabe&shy;empfehlung","svc.vergabe.caption":"Leistungsverzeichnis und Pläne am Arbeitsplatz","svc.bauueberwachung.title":"Bau&shy;überwachung &amp; Bau&shy;oberleitung","svc.bauueberwachung.summary":"Qualitäts-, Termin- und Kosten&shy;kontrolle bis zur Abnahme.","svc.bauueberwachung.lead":"Wir begleiten Ihr Bauvorhaben vor Ort, damit es termingerecht und qualitätsgesichert umgesetzt wird.","svc.bauueberwachung.b1":"Qualitätskontrolle der Bauausführung","svc.bauueberwachung.b2":"Kosten- und Terminkontrolle","svc.bauueberwachung.b3":"Baudokumentation und Prüfung der Bautagebücher","svc.bauueberwachung.b4":"Unterstützung bei der Abnahme, Mängelverfolgung","svc.bauueberwachung.caption":"Bauleitung auf der Baustelle","svc.steuerung.title":"Projekt&shy;steuerung","svc.steuerung.summary":"Organisation, Termine, Kosten und Risiken im Blick.","svc.steuerung.lead":"Von der ersten Idee bis zur Fertigstellung: klare Organisation, zielgerichtete Kommunikation und Steuerung von Kosten, Terminen und Qualität.","svc.steuerung.b1":"Projektorganisation und -koordination","svc.steuerung.b2":"Termin-, Kosten- und Qualitätsmanagement","svc.steuerung.b3":"Risikomanagement","svc.steuerung.b4":"Vertrags- und Nachtragsmanagement, Dokumentation","svc.steuerung.caption":"Projektbesprechung mit Bauherr und Planern","svc.bim.short":"Building Information Modeling","svc.bim.title":"Building Information Modeling (BIM)","svc.bim.summary":"Digitale Modelle für Planung, Koordination und Betrieb.","svc.bim.lead":"Mit der BIM-Methodik planen wir effizienter, transparenter und zukunftssicher, von der Planung über die Ausführung bis zum Betrieb.","svc.bim.b1":"BIM-gestützte Planung und Koordination","svc.bim.b2":"Qualitäts- und Kollisionsprüfung","svc.bim.b3":"Datenmanagement und Dokumentation","svc.bim.b4":"Betrieb und Instandhaltung","svc.bim.caption":"3D-Modell auf dem Bildschirm","leistungen.kicker":"Leistungen","leistungen.h1":"Ingenieur&shy;leistungen aus einer Hand","leistungen.lead":"Sieben Leistungsfelder, die ineinandergreifen: von der Planung über die Vergabe bis zur Bau&shy;überwachung.","leistungen.toc.aria":"Leistungen auf dieser Seite","leistungen.cta.h2":"Welche Leistung braucht Ihr Projekt?","lph.label":"LPH","lph.1":"Grundlagen&shy;ermittlung","lph.2":"Vorplanung","lph.3":"Entwurfs&shy;planung","lph.4":"Genehmigungs&shy;planung","lph.5":"Ausführungs&shy;planung","lph.6":"Vorbereitung der Vergabe","lph.7":"Mitwirkung bei der Vergabe","lph.8":"Objekt&shy;überwachung","lph.9":"Objekt&shy;betreuung","referenzen.kicker":"Referenzen","referenzen.h1":"Projekte, die wir begleitet haben","referenzen.lead":"Eine Auswahl aus Ingenieurbau, Bahn, Tiefbau und Hochbau. Nach Bereich filtern.","referenzen.filter.aria":"Nach Bereich filtern","referenzen.filter.all":"Alle","referenzen.field.ki":"Konstruktiver Ingenieurbau","referenzen.field.bahn":"Verkehrsanlagen / Bahnbau","referenzen.field.tief":"Tiefbau","referenzen.field.hoch":"Hochbau","referenzen.field.pending":"Bereich zu bestätigen","referenzen.empty.h3":"Keine Projekte in diesem Bereich","referenzen.empty.p":"Für diesen Bereich ist derzeit kein Projekt veröffentlicht. Alle Bereiche zeigen die vollständige Auswahl.","referenzen.none.h3":"Referenzen folgen","referenzen.none.p":"Die Projektseiten werden gerade vorbereitet. Gerne erzählen wir Ihnen direkt, woran wir arbeiten.","referenzen.draftnote":"Entwurf: Projekttexte sind aus unserer Projektverwaltung übernommen und vor Veröffentlichung zu prüfen. Fotos folgen. Neue Projekte lassen sich später selbst ergänzen.","referenzen.cta.h2":"Ein ähnliches Vorhaben geplant?","ref.czernyring.field":"Konstruktiver Ingenieurbau","ref.czernyring.title":"Montpellier Carré: Stützwand Czernyring","ref.czernyring.place":"Heidelberg","ref.czernyring.year":"2026","ref.czernyring.client":"Tragwerks&shy;planung","ref.czernyring.desc":"Statik sowie Schal- und Bewehrungspläne für die Stützwand am Czernyring (Ausführungs&shy;planung). Abgeschlossen.","ref.solmser.field":"Konstruktiver Ingenieurbau","ref.solmser.title":"Stützwand Solmserstraße","ref.solmser.place":"Wetzlar","ref.solmser.year":"2026","ref.solmser.client":"Objekt- und Tragwerks&shy;planung","ref.solmser.desc":"Instandsetzung oder Neubau einer rund 200&nbsp;m langen Natursteinstützmauer im Zuge der Straßenerneuerung, mit Varianten bis zum Erhalt des vorhandenen Mauerwerks.","ref.rimbach.field":"Verkehrsanlagen / Bahnbau","ref.rimbach.title":"Bahnhof Rimbach: Bahnsteige und Wetterschutzhaus","ref.rimbach.place":"Rimbach (Hessen)","ref.rimbach.year":"2026","ref.rimbach.client":"DB InfraGO AG, DB Bahnbau Gruppe","ref.rimbach.desc":"Erneuerung beider Bahnsteige und Neubau eines Wetterschutzhauses. Ausführungs&shy;planung, Statik und Dokumentation nach Ril 813.","ref.marbach.field":"Verkehrsanlagen / Bahnbau","ref.marbach.title":"Verkehrsstation Marbach","ref.marbach.place":"","ref.marbach.year":"2025/26","ref.marbach.client":"Deutsche Bahn","ref.marbach.desc":"Planung der Verkehrsstation, aktuell in der Vorbereitung der Vergabe (Leistungsphase 6).","ref.dorotheen.field":"Tiefbau","ref.dorotheen.title":"Autobahn GmbH: Dorotheenstraße","ref.dorotheen.place":"","ref.dorotheen.year":"2026","ref.dorotheen.client":"Autobahn GmbH · Tiefbau","ref.dorotheen.desc":"Tiefbauplanung für die Autobahn GmbH. Abgeschlossen.","ref.lipoid.field":"Hochbau","ref.lipoid.title":"Lipoid","ref.lipoid.place":"","ref.lipoid.year":"2026","ref.lipoid.client":"Hochbau","ref.lipoid.desc":"Hochbauprojekt in Bearbeitung.","karriere.kicker":"Karriere","karriere.h1":"Arbeiten Sie mit uns an Infrastruktur","karriere.lead":"Wir suchen Ingenieurinnen und Ingenieure, die Verantwortung übernehmen und Projekte von der Planung bis zur Ausführung begleiten.","karriere.jobs.h2":"Offene Stellen","karriere.job.example":"Beispiel, wird ersetzt","karriere.job.title":"[Stellenbezeichnung], z.&nbsp;B. Bauingenieur/in Konstruktiver Ingenieurbau (m/w/d)","karriere.job.meta":"Bruchsal · [Vollzeit/Teilzeit] · ab [Datum]","karriere.job.text":"[Zwei bis drei Sätze zu den Aufgaben und zum gesuchten Profil.]","karriere.job.apply":"Jetzt bewerben","karriere.empty.h3":"Derzeit ist keine Stelle ausgeschrieben","karriere.empty.p":"Eine Initiativbewerbung ist trotzdem jederzeit willkommen.","karriere.empty.cta":"Zur Initiativbewerbung","karriere.initiative.h2":"Keine passende Stelle dabei?","karriere.initiative.p":"Initiativbewerbungen sind willkommen. Schicken Sie uns Ihre Unterlagen per E-Mail und erzählen Sie, woran Sie arbeiten möchten.","karriere.apply.label":"Bewerbung an","karriere.apply.privacy.pre":"Informationen zum Umgang mit Bewerberdaten finden Sie in der","karriere.apply.privacy.link":"Datenschutz&shy;erklärung","karriere.team.h2":"Lernen Sie unser Team kennen","karriere.team.cta":"Über uns","ueberuns.kicker":"Über uns","ueberuns.h1":"Ein Ingenieurbüro für Infrastruktur&shy;projekte","ueberuns.lead":"Wir sind spezialisiert auf Infrastruktur&shy;projekte und decken alle Leistungsphasen gemäß HOAI ab.","ueberuns.value.respekt.title":"Respekt","ueberuns.value.respekt.text":"Zusammenarbeit auf Augenhöhe mit Auftraggebern, Behörden und Partnern.","ueberuns.value.transparenz.title":"Transparenz","ueberuns.value.transparenz.text":"Nachvollziehbare Entscheidungen, klare Kommunikation, saubere Dokumentation.","ueberuns.value.verlaesslichkeit.title":"Verlässlichkeit","ueberuns.value.verlaesslichkeit.text":"Präzision und Termintreue vom ersten Entwurf bis zur Abnahme.","ueberuns.value.fairness.title":"Fairness","ueberuns.value.fairness.text":"Eine vertrauensvolle Partnerschaft mit gemeinsamen Zielen.","ueberuns.management.h2":"Geschäftsführung","ueberuns.md.name":"Hüsnü Cetinkaya","ueberuns.md.initials":"HC","ueberuns.md.role":"Geschäftsführer","ueberuns.md.bio":"Sechs Jahre Erfahrung als Projektleiter für Infrastruktur&shy;maßnahmen. Schwerpunkte: konstruktiver Ingenieurbau, Verkehrsanlagen sowie Ausschreibung und Vergabe. Bauvorlage&shy;berechtigter nach VV&nbsp;BAU.","ueberuns.staff.h2":"Mitarbeiter","ueberuns.staff.lga.name":"Lovorka Grgec Alajbeg","ueberuns.staff.lga.initials":"LG","ueberuns.staff.lga.role":"Mitarbeiterin","ueberuns.staff.as.name":"Aghil Siahpoush","ueberuns.staff.as.initials":"AS","ueberuns.staff.as.role":"Mitarbeiter","ueberuns.staff.profile.pending":"[Kurzprofil folgt: Ausbildung, Schwerpunkte, Aufgaben im Büro.]","ueberuns.cta.h2":"Sprechen Sie mit uns über Ihr Projekt","kontakt.kicker":"Kontakt","kontakt.h1":"Wie können wir Sie bei Ihrem Vorhaben unterstützen?","kontakt.lead":"Schreiben Sie uns kurz, worum es geht. Wir melden uns bei Ihnen.","kontakt.ways.aria":"Kontaktwege","kontakt.address.label":"Adresse","kontakt.address.line1":"C&amp;C Ingenieure GmbH","kontakt.address.line2":"Werner-von-Siemens-Straße 2-6 (Gebäude 5110b)","kontakt.address.line3":"76646 Bruchsal","kontakt.phone.label":"Telefon","kontakt.phone.value":"+49 173 6992298","kontakt.email.label":"E-Mail","kontakt.email.value":"info@ib-cc.de","kontakt.map.pending.h3":"Karte folgt","kontakt.map.pending.p":"Die Karte wird erst nach Ihrer Zustimmung geladen.","kontakt.map.schematic":"Schematische Darstellung","kontakt.map.building":"Gebäude 5110b","kontakt.map.street":"Werner-von-Siemens-Straße","kontakt.map.osm":"Route in OpenStreetMap öffnen","kontakt.map.osm.newtab":"(öffnet in neuem Tab)","kontakt.map.osm.note":"Die Karte lädt erst nach dem Klick, auf openstreetmap.org.","form.h2":"Nachricht senden","form.name.label":"Name, Vorname","form.email.label":"Ihre E-Mail","form.message.label":"Ihr Anliegen","form.consent":"Ich bin damit einverstanden, dass diese Daten zum Zwecke der Kontaktaufnahme gespeichert und verarbeitet werden. Ich kann meine Einwilligung jederzeit widerrufen.","form.consent.more.pre":"Mehr in der","form.consent.more.link":"Datenschutz&shy;erklärung","form.required.mark":"*","form.required.note":"* Pflichtfeld","form.submit":"Senden","form.sending":"Wird gesendet …","form.sending.live":"Wird gesendet.","form.error.name":"Bitte geben Sie Ihren Namen an.","form.error.email.empty":"Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können.","form.error.email.invalid":"Diese E-Mail-Adresse ist unvollständig. Beispiel: name@firma.de","form.error.message":"Bitte beschreiben Sie Ihr Anliegen in ein paar Worten (mindestens 10 Zeichen).","form.error.consent":"Bitte stimmen Sie der Verarbeitung zu, sonst dürfen wir Ihre Nachricht nicht bearbeiten.","form.error.summary.one":"Ein Feld braucht noch Ihre Angabe.","form.error.summary.n":"{n} Felder brauchen noch Ihre Angabe.","form.done.h3":"Nachricht erfasst","form.done.preview":"Vorschau: Die Nachricht wurde nicht versendet.","form.done.preview.p":"Diese Seite ist ein Entwurf und überträgt keine Daten. Schreiben Sie uns bis dahin direkt an info@ib-cc.de.","form.done.again":"Neue Nachricht schreiben","legal.kicker":"Rechtliches","legal.h1":"Impressum und Datenschutz","legal.toc.aria":"Inhalt dieser Seite","legal.draftnote":"Entwurfshinweis: Die rechtlichen Texte stammen von ib-cc.de und werden auf der Seite nur auf Deutsch geführt. Die Datenschutz&shy;erklärung muss vor dem Livegang an die tatsächlich eingesetzten Dienste der neuen Seite angepasst werden.","legal.impressum.h2":"Impressum","legal.impressum.company":"C&amp;C Ingenieure GmbH","legal.impressum.street":"Werner-von-Siemens Straße 2-6","legal.impressum.building":"Gebäude 5110b","legal.impressum.city":"76646 Bruchsal","legal.impressum.contact.h3":"Kontakt","legal.impressum.contact.phone":"Telefon: +49 173 6992298","legal.impressum.contact.email":"E-Mail: info@ib-cc.de","legal.impressum.contact.web":"Web: www.ib-cc.de","legal.impressum.md.h3":"Vertretungsberechtigter Geschäftsführer","legal.impressum.md.name":"M.Eng. Hüsnü Cetinkaya","legal.impressum.seat.h3":"Sitz der Gesellschaft","legal.impressum.seat.value":"Bruchsal","legal.impressum.register.h3":"Handelsregister","legal.impressum.register.value":"HRB 743910, Registergericht Mannheim","legal.impressum.vat.h3":"Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG","legal.impressum.vat.value":"DE353174530","legal.impressum.chamber.h3":"Zuständige Kammer und Aufsichtsbehörde","legal.impressum.chamber.name":"Ingenieurkammer Baden-Württemberg","legal.impressum.chamber.address":"Lenore-Volz-Straße 3, D-70372 Stuttgart","legal.impressum.chamber.contact":"E-Mail: info@ingbw.de · Telefon: +49 711 64971-0","legal.impressum.chamber.web":"Website: www.ingbw.de","legal.impressum.profession.h3":"Berufsbezeichnung","legal.impressum.profession.title":"Ingenieur/in (verliehen in Deutschland)","legal.impressum.profession.rules":"Es gelten das Ingenieurkammergesetz und die Hauptsatzung der Ingenieurkammer Baden-Württemberg.","legal.impressum.insurance.h3":"Berufshaftpflichtversicherung","legal.impressum.insurance.name":"Allianz Versicherungs-AG, Königinstr. 28, 80802 München","legal.impressum.insurance.scope":"Räumlicher Geltungsbereich: Deutschland","legal.impressum.standardtexts":"[Haftung für Inhalte, Haftung für Links und Urheberrecht: Standardtexte werden 1:1 von ib-cc.de übernommen.]","legal.privacy.h2":"Datenschutz&shy;erklärung","legal.privacy.controller.h3":"Verantwortliche Stelle","legal.privacy.controller.text":"C&amp;C Ingenieure GmbH, vertreten durch Hüsnü Cetinkaya, Werner-von-Siemens-Str. 2-6, Gebäude 5110b, 76646 Bruchsal","legal.privacy.controller.contact":"Telefon: +49 173 6992298 · E-Mail: info@ib-cc.de","legal.privacy.outline.intro":"Gliederung der bestehenden Erklärung, die in die neue Seite übernommen wird:","legal.privacy.s1.h":"Datenschutz auf einen Blick","legal.privacy.s1.p":"Allgemeine Hinweise, Datenerfassung, Ihre Rechte","legal.privacy.s2.h":"Hosting","legal.privacy.s2.p":"Hosting-Anbieter und Auftragsverarbeitung","legal.privacy.s3.h":"Allgemeine Hinweise und Pflichtinformationen","legal.privacy.s3.p":"Verantwortliche Stelle, Speicherdauer, Widerruf, Widerspruch, Beschwerderecht, TLS","legal.privacy.s4.h":"Datenerfassung auf dieser Website","legal.privacy.s4.p":"Cookies, Einwilligung, Server-Log-Dateien, Kontaktformular, Anfrage per E-Mail oder Telefon","legal.privacy.s5.h":"Analyse-Tools und Werbung","legal.privacy.s5.p":"Nur falls auf der neuen Seite eingesetzt","legal.privacy.s6.h":"Plugins und Tools","legal.privacy.s6.p":"Schriftarten, Sicherheits-Tools","legal.privacy.s7.h":"Eigene Dienste","legal.privacy.s7.p":"Umgang mit Bewerberdaten, Bewerber-Pool","partners.h2":"Unsere Partner","partners.logo.pending":"LOGO FOLGT","partners.1":"DB InfraGO AG","partners.2":"DB Bahnbau Gruppe GmbH","partners.3":"Autobahn GmbH","partners.4":"Stadt Heidelberg","partners.5":"Stadt Wetzlar","partners.6":"Stadt Frankfurt am Main","partners.7":"Stadt Altena","partners.8":"RNV","partners.9":"Lipoid","footer.company":"C&amp;C Ingenieure GmbH","footer.street":"Werner-von-Siemens-Straße 2-6","footer.building":"Gebäude 5110b","footer.city":"76646 Bruchsal","footer.contact.h":"Kontakt","footer.phone":"Tel +49 173 6992298","footer.email":"info@ib-cc.de","footer.web":"www.ib-cc.de","footer.md.h":"Geschäftsführer","footer.md":"M.Eng. Hüsnü Cetinkaya","footer.register.h":"Handelsregister","footer.register":"HRB 743910 Mannheim","footer.vat":"USt-IdNr. DE353174530","footer.copyright":"© 2026 C&amp;C Ingenieure GmbH","footer.impressum":"Impressum","footer.datenschutz":"Datenschutz","cta.contact":"Kontakt aufnehmen","cta.services.all":"Alle Leistungen ansehen","cta.refs.all":"Alle Referenzen","ui.photo.pending":"FOTO FOLGT","ui.schematic.photo.pending":"Schematische Darstellung · Foto folgt","ui.schematic":"Schematische Darstellung","ui.example.replaced":"Beispiel, wird ersetzt","ui.en.pending":"Englische Version folgt","ui.field.pending":"Bereich zu bestätigen","ui.count.0":"0 Projekte","ui.count.1":"1 Projekt","ui.count.n":"{n} Projekte","ui.count.6":"6 Projekte","ui.filter.reset":"Filter zurücksetzen","ui.completed":"Abgeschlossen.","ui.inprogress":"in Bearbeitung","ui.newtab":"öffnet in neuem Tab","ui.separator":"·","hero.layer.va":"Verkehrsanlage","hero.layer.op":"Objektplanung","hero.layer.tw":"Tragwerk","ui.photo.follows":"Foto folgt","referenzen.aria":"Referenzprojekte","ueberuns.values.h2":"Unsere Werte","ueberuns.team.none.h3":"Teamprofile folgen","ueberuns.team.none.p":"Die Kurzprofile des Teams werden gerade vorbereitet.","legal.toc.h":"Auf dieser Seite","legal.en.notice":"Impressum und Datenschutz&shy;erklärung werden nur auf Deutsch geführt.","ui.lang.switch":"Sprache"},"en":{"meta.site.tagline":"Engineering consultancy for infrastructure in Bruchsal","meta.home.title":"C&amp;C Ingenieure GmbH · Engineering consultancy for infrastructure in Bruchsal","meta.home.description":"Planning infrastructure. Delivering reliably. Engineering consultancy in Bruchsal for design and structural engineering, tendering and award, site supervision, project management and BIM, all HOAI work stages.","meta.leistungen.title":"Services · C&amp;C Ingenieure GmbH","meta.leistungen.description":"Seven fields of service from a single source: BVB under VV&nbsp;BAU, design, structural engineering, tendering and award, site supervision, project management and BIM.","meta.referenzen.title":"Projects · C&amp;C Ingenieure GmbH","meta.referenzen.description":"Projects we have delivered: structural engineering, transport infrastructure and railway construction, civil engineering and building construction.","meta.karriere.title":"Careers · C&amp;C Ingenieure GmbH","meta.karriere.description":"Work with us on infrastructure: open positions and speculative applications at C&amp;C Ingenieure in Bruchsal.","meta.ueberuns.title":"About us · C&amp;C Ingenieure GmbH","meta.ueberuns.description":"An engineering consultancy for infrastructure projects: the values, management and team of C&amp;C Ingenieure in Bruchsal.","meta.kontakt.title":"Contact · C&amp;C Ingenieure GmbH","meta.kontakt.description":"Contact C&amp;C Ingenieure GmbH, Werner-von-Siemens-Straße 2-6, Gebäude 5110b, 76646 Bruchsal. Telephone +49 173 6992298, info@ib-cc.de.","meta.impressum.title":"Legal notice and privacy · C&amp;C Ingenieure GmbH","meta.impressum.description":"Legal notice and privacy policy of C&amp;C Ingenieure GmbH, Bruchsal.","header.logo.placeholder":"GMBH · LOGO TO FOLLOW","header.logo.aria":"C&amp;C Ingenieure GmbH, to the home page","header.skip":"Skip to content","header.nav.aria":"Main navigation","header.nav.mobile.aria":"Main navigation, mobile","header.menu.open":"Menu","header.menu.close":"Close","header.lang.aria":"Language","header.lang.en.pending":"English version to follow","nav.startseite":"Home","nav.leistungen":"Services","nav.referenzen":"Projects","nav.karriere":"Careers","nav.ueberuns":"About us","nav.kontakt":"Contact","home.kicker":"Engineering consultancy · Bruchsal","home.h1":"Planning infrastructure. Delivering reliably.","home.h1.line1":"Planning infrastructure.","home.h1.line2":"Delivering reliably.","home.lead":"C&amp;C Ingenieure supports your project from design through to site supervision: design and structural engineering, tendering and award, project management and BIM.","home.cta.services":"Our services","home.cta.contact":"Get in touch","home.hero.caption":"Layer model: transport infrastructure, design, structure","home.hero.layer.verkehr.aria":"Transport infrastructure: service BVB under VV&nbsp;BAU","home.hero.layer.objekt.aria":"Design: service Design","home.hero.layer.tragwerk.aria":"Structure: service Structural engineering","home.intro.h2":"Collaborative, transparent, reliable.","home.intro.p":"We see every collaboration as a partnership built on trust, shaped by respect, transparency and a clear focus on shared goals. Our aim is sustainable solutions that meet the highest standards of quality and stand the test of time.","home.fact.1.title":"All HOAI work stages","home.fact.1.text":"From basic evaluation to post-completion services, from a single source.","home.fact.2.title":"Authorised to submit building documents under VV&nbsp;BAU (Deutsche Bahn)","home.fact.2.text":"Technical review and approval for railway-specific projects.","home.fact.3.title":"Specialised in infrastructure","home.fact.3.text":"Structural engineering, transport infrastructure, railway and civil engineering.","home.services.h2":"Our services at a glance","home.services.all":"View all services","home.services.aria":"Services on this page","home.refs.h2":"Selected projects","home.refs.all":"All projects","home.lph.h2":"All HOAI work stages","home.lph.lead":"We take on the work stages your project needs, individually or end to end.","home.cta.h2":"How can we support your project?","home.cta.p":"If you value reliability, fairness and a collaborative way of working, we are glad to assist. We look forward to moving your project forward together.","svc.bvb.short":"BVB under VV&nbsp;BAU","svc.bvb.title":"Authorised to submit building documents under VV&nbsp;BAU (Deutsche Bahn)","svc.bvb.summary":"Review and approval of construction documents for railway projects.","svc.bvb.lead":"As an engineering consultancy authorised under VV&nbsp;BAU, we review and supervise railway projects. We make sure that all legal and technical requirements are met.","svc.bvb.b1":"Technical review and approval of construction documents","svc.bvb.b2":"Compliance with regulations and standards","svc.bvb.b3":"Coordination with the Federal Railway Authority (Eisenbahn-Bundesamt) and other authorities","svc.bvb.b4":"Coordination of the specialist designs","svc.bvb.caption":"Track installation with bridge structure","svc.objekt.title":"Design","svc.objekt.summary":"Structural engineering, transport infrastructure, building and civil engineering under HOAI.","svc.objekt.lead":"Tailored solutions for your construction projects in line with the HOAI service profiles, integrated and efficient.","svc.objekt.b1":"Structural engineering: bridges, retaining walls, rock and slope stabilisation, noise protection","svc.objekt.b2":"Transport infrastructure and railway construction, including passenger stations","svc.objekt.b3":"Building construction for commercial and private projects","svc.objekt.b4":"Civil engineering: cable routes, supply and disposal lines, drainage","svc.objekt.caption":"Retaining wall or bridge structure","svc.tragwerk.title":"Structural engineering","svc.tragwerk.summary":"Structural analysis, detailing and reinforcement design, including existing structures.","svc.tragwerk.lead":"We support you from basic evaluation through to checkable structural calculations, with safe, economical and sustainable structures.","svc.tragwerk.b1":"Structural design and structural calculations for approval","svc.tragwerk.b2":"Detailed verifications and re-analysis of existing structures","svc.tragwerk.b3":"Formwork, shell and reinforcement drawings, waterstop layouts","svc.tragwerk.b4":"Steel construction","svc.tragwerk.caption":"Reinforcement and formwork on site","svc.vergabe.title":"Tendering &amp; award","svc.vergabe.summary":"Bills of quantities, cost estimation and award recommendation.","svc.vergabe.lead":"We prepare tenders and assist with the award. The procedure remains legally sound, economical and transparent.","svc.vergabe.b1":"Specification with bill of quantities","svc.vergabe.b2":"Quantity take-off and cost estimation","svc.vergabe.b3":"Examination and evaluation of tenders","svc.vergabe.b4":"Tenderer meetings and award recommendation","svc.vergabe.caption":"Bill of quantities and drawings at the desk","svc.bauueberwachung.title":"Site supervision &amp; construction management","svc.bauueberwachung.summary":"Quality, schedule and cost control through to acceptance.","svc.bauueberwachung.lead":"We support your construction project on site so that it is delivered on schedule and to the required quality.","svc.bauueberwachung.b1":"Quality control of construction works","svc.bauueberwachung.b2":"Cost and schedule control","svc.bauueberwachung.b3":"Construction records and review of site diaries","svc.bauueberwachung.b4":"Support at acceptance, defect tracking","svc.bauueberwachung.caption":"Site management on the construction site","svc.steuerung.title":"Project management","svc.steuerung.summary":"Organisation, schedules, costs and risks under control.","svc.steuerung.lead":"From the first idea to completion: clear organisation, focused communication and control of costs, schedules and quality.","svc.steuerung.b1":"Project organisation and coordination","svc.steuerung.b2":"Schedule, cost and quality management","svc.steuerung.b3":"Risk management","svc.steuerung.b4":"Contract and variation management, documentation","svc.steuerung.caption":"Project meeting with client and designers","svc.bim.summary":"Digital models for design, coordination and operation.","svc.bim.lead":"With the BIM method we plan more efficiently, more transparently and for the long term, from design through construction to operation.","svc.bim.b1":"BIM-based design and coordination","svc.bim.b2":"Quality and clash checking","svc.bim.b3":"Data management and documentation","svc.bim.b4":"Operation and maintenance","svc.bim.caption":"3D model on screen","leistungen.kicker":"Services","leistungen.h1":"Engineering services from a single source","leistungen.lead":"Seven fields of service that interlock: from design through award to site supervision.","leistungen.toc.aria":"Services on this page","leistungen.cta.h2":"Which service does your project need?","lph.1":"Basic evaluation","lph.2":"Preliminary design","lph.3":"Design development","lph.4":"Approval design","lph.5":"Construction design","lph.6":"Preparation of award","lph.7":"Assistance with award","lph.8":"Construction supervision","lph.9":"Post-completion services","referenzen.kicker":"Projects","referenzen.h1":"Projects we have delivered","referenzen.lead":"A selection from structural, railway, civil and building engineering. Filter by field.","referenzen.filter.aria":"Filter by field","referenzen.filter.all":"All","referenzen.field.ki":"Civil structures","referenzen.field.bahn":"Transport infrastructure / railway","referenzen.field.tief":"Civil engineering","referenzen.field.hoch":"Building construction","referenzen.field.pending":"Field to be confirmed","referenzen.empty.h3":"No projects in this field","referenzen.empty.p":"No project is currently published for this field. All fields show the full selection.","referenzen.none.h3":"Projects to follow","referenzen.none.p":"The project pages are being prepared. We would be glad to tell you directly what we are working on.","referenzen.draftnote":"Draft: project texts are taken from our project management system and must be reviewed before publication. Photos to follow. New projects can be added later by the office itself.","referenzen.cta.h2":"Planning a similar project?","ref.czernyring.field":"Civil structures","ref.czernyring.title":"Montpellier Carré: Czernyring retaining wall","ref.czernyring.client":"Structural engineering","ref.czernyring.desc":"Structural calculations plus formwork and reinforcement drawings for the retaining wall on Czernyring (construction design). Completed.","ref.solmser.field":"Civil structures","ref.solmser.title":"Solmserstraße retaining wall","ref.solmser.client":"Design and structural engineering","ref.solmser.desc":"Repair or replacement of an approximately 200&nbsp;m long natural-stone retaining wall as part of the road renewal, with options up to retaining the existing masonry.","ref.rimbach.field":"Transport infrastructure / railway","ref.rimbach.title":"Rimbach station: platforms and weather shelter","ref.rimbach.place":"Rimbach (Hesse)","ref.rimbach.desc":"Renewal of both platforms and construction of a new weather shelter. Construction design, structural calculations and documentation to Ril 813.","ref.marbach.field":"Transport infrastructure / railway","ref.marbach.title":"Marbach station","ref.marbach.desc":"Design of the station, currently in preparation of award (work stage 6).","ref.dorotheen.field":"Civil engineering","ref.dorotheen.client":"Autobahn GmbH · Civil engineering","ref.dorotheen.desc":"Civil engineering design for Autobahn GmbH. Completed.","ref.lipoid.field":"Building construction","ref.lipoid.client":"Building construction","ref.lipoid.desc":"Building project in progress.","karriere.kicker":"Careers","karriere.h1":"Work with us on infrastructure","karriere.lead":"We are looking for engineers who take responsibility and see projects through from design to construction.","karriere.jobs.h2":"Open positions","karriere.job.example":"Example, to be replaced","karriere.job.title":"[Job title], e.g. Civil Engineer, Structural Engineering (m/f/d)","karriere.job.meta":"Bruchsal · [Full-time/Part-time] · from [date]","karriere.job.text":"[Two to three sentences on the responsibilities and the profile sought.]","karriere.job.apply":"Apply now","karriere.empty.h3":"No positions are currently advertised","karriere.empty.p":"A speculative application is nevertheless welcome at any time.","karriere.empty.cta":"Speculative application","karriere.initiative.h2":"No suitable position listed?","karriere.initiative.p":"Speculative applications are welcome. Send us your documents by e-mail and tell us what you would like to work on.","karriere.apply.label":"Apply to","karriere.apply.privacy.pre":"Information on how we handle applicant data can be found in the","karriere.apply.privacy.link":"privacy policy","karriere.team.h2":"Meet our team","karriere.team.cta":"About us","ueberuns.kicker":"About us","ueberuns.h1":"An engineering consultancy for infrastructure projects","ueberuns.lead":"We specialise in infrastructure projects and cover all work stages under HOAI.","ueberuns.value.respekt.title":"Respect","ueberuns.value.respekt.text":"Working as equals with clients, authorities and partners.","ueberuns.value.transparenz.title":"Transparency","ueberuns.value.transparenz.text":"Traceable decisions, clear communication, tidy documentation.","ueberuns.value.verlaesslichkeit.title":"Reliability","ueberuns.value.verlaesslichkeit.text":"Precision and adherence to deadlines from the first design to acceptance.","ueberuns.value.fairness.text":"A partnership built on trust and shared goals.","ueberuns.management.h2":"Management","ueberuns.md.role":"Managing Director","ueberuns.md.bio":"Six years of experience as project manager for infrastructure schemes. Focus areas: structural engineering, transport infrastructure, and tendering and award. Authorised to submit building documents under VV&nbsp;BAU (Deutsche Bahn).","ueberuns.staff.h2":"Team","ueberuns.staff.lga.role":"Team member","ueberuns.staff.as.role":"Team member","ueberuns.staff.profile.pending":"[Short profile to follow: training, focus areas, responsibilities in the office.]","ueberuns.cta.h2":"Talk to us about your project","kontakt.kicker":"Contact","kontakt.h1":"How can we support your project?","kontakt.lead":"Tell us briefly what it is about. We will get back to you.","kontakt.ways.aria":"Ways to contact us","kontakt.address.label":"Address","kontakt.phone.label":"Telephone","kontakt.email.label":"E-mail","kontakt.map.pending.h3":"Map to follow","kontakt.map.pending.p":"The map is loaded only after your consent.","kontakt.map.schematic":"Schematic representation","kontakt.map.osm":"Open route in OpenStreetMap","kontakt.map.osm.newtab":"(opens in a new tab)","kontakt.map.osm.note":"The map loads only after the click, on openstreetmap.org.","form.h2":"Send a message","form.name.label":"Surname, first name","form.email.label":"Your e-mail","form.message.label":"Your enquiry","form.consent":"I agree that this data may be stored and processed for the purpose of handling my enquiry. I can withdraw my consent at any time.","form.consent.more.pre":"More in the","form.consent.more.link":"privacy policy","form.required.note":"* Required field","form.submit":"Send","form.sending":"Sending …","form.sending.live":"Sending.","form.error.name":"Please enter your name.","form.error.email.empty":"Please enter your e-mail address so that we can reply.","form.error.email.invalid":"This e-mail address is incomplete. Example: name@company.com","form.error.message":"Please describe your enquiry in a few words (at least 10 characters).","form.error.consent":"Please agree to the processing; otherwise we are not permitted to handle your message.","form.error.summary.one":"One field still needs your input.","form.error.summary.n":"{n} fields still need your input.","form.done.h3":"Message recorded","form.done.preview":"Preview: the message has not been sent.","form.done.preview.p":"This page is a draft and transmits no data. Until then, please write to us directly at info@ib-cc.de.","form.done.again":"Write a new message","legal.kicker":"Legal","legal.h1":"Legal notice and privacy","legal.toc.aria":"Contents of this page","legal.draftnote":"Draft note: the legal texts are taken from ib-cc.de and are kept in German only on this site. The privacy policy must be adapted to the services actually used by the new site before go-live.","legal.impressum.h2":"Legal notice","legal.impressum.contact.h3":"Contact","legal.impressum.contact.phone":"Telephone: +49 173 6992298","legal.impressum.contact.email":"E-mail: info@ib-cc.de","legal.impressum.md.h3":"Managing Director authorised to represent the company","legal.impressum.seat.h3":"Registered office","legal.impressum.register.h3":"Commercial register","legal.impressum.register.value":"HRB 743910, Register court Mannheim","legal.impressum.vat.h3":"VAT identification number under § 27a UStG","legal.impressum.chamber.h3":"Responsible chamber and supervisory authority","legal.impressum.chamber.name":"Ingenieurkammer Baden-Württemberg (Chamber of Engineers)","legal.impressum.chamber.contact":"E-mail: info@ingbw.de · Telephone: +49 711 64971-0","legal.impressum.profession.h3":"Professional title","legal.impressum.profession.title":"Engineer (awarded in Germany)","legal.impressum.profession.rules":"The Ingenieurkammergesetz (Chamber of Engineers Act) and the statutes of the Ingenieurkammer Baden-Württemberg apply.","legal.impressum.insurance.h3":"Professional liability insurance","legal.impressum.insurance.scope":"Territorial scope: Germany","legal.impressum.standardtexts":"[Liability for content, liability for links and copyright: standard texts are taken over 1:1 from ib-cc.de.]","legal.privacy.h2":"Privacy policy","legal.privacy.controller.h3":"Controller","legal.privacy.controller.text":"C&amp;C Ingenieure GmbH, represented by Hüsnü Cetinkaya, Werner-von-Siemens-Str. 2-6, Gebäude 5110b, 76646 Bruchsal","legal.privacy.controller.contact":"Telephone: +49 173 6992298 · E-mail: info@ib-cc.de","legal.privacy.outline.intro":"Outline of the existing policy that will be carried over to the new site:","legal.privacy.s1.h":"Privacy at a glance","legal.privacy.s1.p":"General information, data collection, your rights","legal.privacy.s2.p":"Hosting provider and data processing on behalf","legal.privacy.s3.h":"General information and mandatory disclosures","legal.privacy.s3.p":"Controller, retention period, withdrawal, objection, right to lodge a complaint, TLS","legal.privacy.s4.h":"Data collection on this website","legal.privacy.s4.p":"Cookies, consent, server log files, contact form, enquiries by e-mail or telephone","legal.privacy.s5.h":"Analytics tools and advertising","legal.privacy.s5.p":"Only if used on the new site","legal.privacy.s6.h":"Plugins and tools","legal.privacy.s6.p":"Fonts, security tools","legal.privacy.s7.h":"Own services","legal.privacy.s7.p":"Handling of applicant data, applicant pool","partners.h2":"Our partners","partners.logo.pending":"LOGO TO FOLLOW","footer.contact.h":"Contact","footer.md.h":"Managing Director","footer.register.h":"Commercial register","footer.impressum":"Legal notice","footer.datenschutz":"Privacy","cta.contact":"Get in touch","cta.services.all":"View all services","cta.refs.all":"All projects","ui.photo.pending":"PHOTO TO FOLLOW","ui.schematic.photo.pending":"Schematic representation · Photo to follow","ui.schematic":"Schematic representation","ui.example.replaced":"Example, to be replaced","ui.en.pending":"English version to follow","ui.field.pending":"Field to be confirmed","ui.count.0":"0 projects","ui.count.1":"1 project","ui.count.n":"{n} projects","ui.count.6":"6 projects","ui.filter.reset":"Reset filter","ui.completed":"Completed.","ui.inprogress":"in progress","ui.newtab":"opens in a new tab","hero.layer.va":"Transport infrastructure","hero.layer.op":"Design","hero.layer.tw":"Structure","ui.photo.follows":"Photo to follow","referenzen.aria":"Reference projects","ueberuns.values.h2":"Our values","ueberuns.team.none.h3":"Team profiles to follow","ueberuns.team.none.p":"The short profiles of the team are being prepared.","legal.toc.h":"On this page","legal.en.notice":"Legal notice and privacy policy are provided in German only.","ui.lang.switch":"Language"}};
  const LANGS = ['de', 'en'];
  const dec = (() => { const ta = d.createElement('textarea'); return s => { ta.innerHTML = s; return ta.value; }; })();
  let lang = 'de';
  const t = (k, n) => { const v = (DICT[lang] && DICT[lang][k]) || DICT.de[k] || ''; return dec(n === undefined ? v : v.replace('{n}', n)); };
  const SVGNS = 'http://www.w3.org/2000/svg';
  const hooks = [];
  const applyLang = l => {
    lang = LANGS.includes(l) ? l : 'de';
    html.setAttribute('lang', lang);
    d.querySelectorAll('[data-i18n]').forEach(el => {
      const v = (DICT[lang] && DICT[lang][el.dataset.i18n]) || DICT.de[el.dataset.i18n];
      if (v === undefined) return;
      if (el.tagName === 'TITLE' || el.namespaceURI === SVGNS) el.textContent = dec(v); else el.innerHTML = v;
    });
    d.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':'); const v = (DICT[lang] && DICT[lang][k]) || DICT.de[k];
      if (v !== undefined) el.setAttribute(attr, dec(v));
    }));
    d.querySelectorAll('.lang-b').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    d.querySelectorAll('[data-en-only]').forEach(el => { el.hidden = lang !== 'en'; });
    d.querySelectorAll('.model-svg .lbl-t').forEach(tx => {
      const words = tx.textContent.trim().split(' ');
      if (words.length < 2 || tx.getComputedTextLength() <= 118) return;
      const x = tx.getAttribute('x');
      tx.textContent = '';
      const t1 = d.createElementNS(SVGNS, 'tspan'), t2 = d.createElementNS(SVGNS, 'tspan');
      t1.setAttribute('x', x); t1.setAttribute('dy', '-1.15em'); t1.textContent = words.slice(0, -1).join(' ');
      t2.setAttribute('x', x); t2.setAttribute('dy', '1.15em'); t2.textContent = words[words.length - 1];
      tx.append(t1, t2);
    });
    hooks.forEach(f => f());
  };
  const setLang = l => { applyLang(l); try { localStorage.setItem('cc-lang', lang); } catch (e) {} };
  const rmq = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const still = () => rmq.matches;
  const E = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const EIN = 'cubic-bezier(0.4, 0, 1, 1)';
  const DRAW = [{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }];
  const canAnim = typeof Element !== 'undefined' && 'animate' in Element.prototype;
  const params = new URLSearchParams(location.search);
  html.classList.add('js');
  {
    let want = params.get('lang');
    if (!want) { try { want = localStorage.getItem('cc-lang'); } catch (e) {} }
    if (want && want !== 'de') applyLang(want);
    d.querySelectorAll('.lang-b').forEach(b => b.addEventListener('click', () => { if (b.dataset.lang !== lang) setLang(b.dataset.lang); }));
  }

  const release = () => html.classList.remove('pre');
  const mb = d.querySelector('.menu-b'), menu = d.getElementById('menu');
  if (mb && menu) {
    const setOpen = (open, focusBack) => {
      mb.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      mb.querySelector('.menu-l') && (mb.querySelector('.menu-l').textContent = open ? t('header.menu.close') : t('header.menu.open'));
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
      cw.textContent = t(n === 1 ? 'ui.count.1' : 'ui.count.n', n).replace(/^\s*\d+\s*/, '');
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
    hooks.push(() => setCount(parseInt(cn.textContent, 10) || 0, false));
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
      name: { el: form.querySelector('#f-name'), msg: v => v.trim().length < 2 ? t('form.error.name') : '' },
      mail: { el: form.querySelector('#f-mail'), msg: v => !v.trim() ? t('form.error.email.empty') : (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? t('form.error.email.invalid') : '') },
      msg: { el: form.querySelector('#f-msg'), msg: v => v.trim().length < 10 ? t('form.error.message') : '' },
      ok: { el: form.querySelector('#f-ok'), msg: (v, el) => el.checked ? '' : t('form.error.consent') },
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
    hooks.push(() => { if (tried) Object.keys(F).forEach(k => { if (!form.querySelector('[data-k=' + k + '] .err-m').hidden) check(k, true); }); });
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
        live.textContent = bad.length === 1 ? t('form.error.summary.one') : t('form.error.summary.n', bad.length);
        F[bad[0]].el.focus();
        return;
      }
      btn.setAttribute('aria-disabled', 'true');
      btn.classList.add('sending');
      btn.querySelector('.send-l').textContent = t('form.sending');
      live.textContent = t('form.sending.live');
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
      btn.removeAttribute('aria-disabled'); btn.classList.remove('sending'); btn.querySelector('.send-l').textContent = t('form.submit');
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
