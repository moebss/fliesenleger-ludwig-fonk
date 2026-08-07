import { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, X, Send, ChevronDown, HelpCircle, AlertCircle, Menu, XIcon, Award, Layers, Sparkles, PhoneCall, Calendar, CheckSquare, Maximize2 } from 'lucide-react';

import heroBathroom from './images/hero_bathroom.jpg';
import tileWork from './images/tile_work.jpg';
import terraceStone from './images/terrace_stone.jpg';
import walkinShower from './images/walkin_shower.jpg';

export default function App() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<{ src: string; title: string; category: string; desc: string } | null>(null);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const navLinks = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Über uns', href: '#about' },
    { label: 'Referenzen', href: '#portfolio' },
    { label: 'Vorteile', href: '#benefits' },
    { label: 'Kontakt', href: '#contact-section' },
    { label: 'FAQ', href: '#faq' },
  ];

  const services = [
    {
      title: "Bad-Sanierung & Barrierefreie Bäder",
      img: walkinShower,
      desc: "Komplette Neugestaltung von Masterbädern und bodengleichen Duschen mit Ablaufrinnen, Wandnischen & Abdichtung nach DIN 18534.",
      badge: "Spezialgebiet"
    },
    {
      title: "Großformat- & XXL-Fliesen",
      img: heroBathroom,
      desc: "Fugenarme Verlegung imposanter Großformate (z. B. 120×120 cm oder 120×275 cm) mit Planplaner-Nivelliersystem für makellose Ebenheit.",
      badge: "Höchste Präzision"
    },
    {
      title: "Natursteinverlegung",
      img: tileWork,
      desc: "Exklusive Verarbeitung von Granit, Marmor, Schiefer und Travertin im Innen- und Außenbereich inklusive imprägnierter Schutzbehandlung.",
      badge: "Edle Optik"
    },
    {
      title: "Balkone & Terrassen",
      img: terraceStone,
      desc: "Frostsichere Außenbeläge auf Stelzlagern oder Drainage-Schichten für dauerhafte Schönheit ohne Ausblühungen.",
      badge: "Wetterfest"
    }
  ];

  const galleryItems = [
    { src: heroBathroom, title: "Luxusbad mit Naturstein-Optik", category: "Bad-Sanierung", desc: "Verlegung großformatiger Feinsteinzeug-Fliesen mit bodengleicher Regendusche in Kerpen." },
    { src: tileWork, title: "Präzises Nivelliersystem im Einsatz", category: "XXL-Großformat", desc: "Millimetergenaue Ausrichtung von Wand- und Bodenfliesen für perfekte Planheit." },
    { src: terraceStone, title: "Travertin Naturstein-Terrasse", category: "Außenbereich", desc: "Frost- und witterungsbeständige Natursteinplatten mit sauberen Fugenbildern." },
    { src: walkinShower, title: "Barrierefreie Walk-In Dusche", category: "Barrierefrei", desc: "Ebenerdiger Einstieg mit Wandnische, LED-Akzentbeleuchtung und DIN-Abdichtung." },
  ];

  const faqs = [
    { q: "Wie läuft eine Badsanierung mit Fliesenleger Ludwig Fonk ab?", a: "Nach einem kostenlosen Erstgespräch vor Ort in Kerpen & Umgebung prüfen wir Untergrund, Maße und Anschlüsse. Sie erhalten ein transparentes Festpreis-Angebot. Wir koordinieren die Arbeiten termingerecht von der Vorbereitung bis zum finalen Fugenbild." },
    { q: "Verlegen Sie auch Großformat- & XXL-Fliesen?", a: "Ja, genau darauf sind wir spezialisiert. Mit modernsten Nivelliersystemen und Spezialwerkzeugen verlegen wir Fliesenformate bis 120×275 cm absolut stufen- und fugenarm." },
    { q: "Ist eine Abdichtung bei Duschen und Bädern im Preis enthalten?", a: "Selbstverständlich. Wir führen alle Abdichtungsarbeiten nach der aktuellen DIN 18534 Norm mit hochwertigen Dichtbändern und Flüssigfolien durch, um Feuchtigkeitsschäden dauerhaft auszuschließen." },
    { q: "Übernehmen Sie auch kleinere Reparaturen oder Teilarbeiten?", a: "Ja. Ob einzelne beschädigte Fliesen austauschen, Silikonfugen erneuern oder eine Küchenrückwand fliesen – wir unterstützen Sie gerne bei Projekten jeder Größe." },
    { q: "In welchem Umkreis um Kerpen sind Sie tätig?", a: "Wir arbeiten schwerpunktmäßig in Kerpen (Horrem, Sindorf, Buir etc.), dem gesamten Rhein-Erft-Kreis, Frechen, Hürth, Bergheim sowie im Großraum Köln." }
  ];

  return (
    <div className="min-h-screen bg-[#101216] text-zinc-100 selection:bg-[#c8a264] selection:text-black font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ═══ HEADER mit ausgedehnten Abständen & Proportionalität ═══ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#101216]/90 border-b border-stone-800 shadow-2xl">
        {/* Top Bar */}
        <div className="hidden lg:block bg-[#0a0c0e] py-2 px-6 text-xs text-stone-400 border-b border-stone-800/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c8a264]" />
                <span>Concordiastr. 11, 50169 Kerpen</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c8a264]" />
                <span>Mo – Fr: 07:30 – 18:00 Uhr | Sa: 08:00 – 13:00 Uhr</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#c8a264]/10 text-[#c8a264] border border-[#c8a264]/30 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">Meisterbetrieb aus Kerpen</span>
              <a href="tel:02237972504" className="font-bold text-white hover:text-[#c8a264] transition-colors">☎ 02237 972504</a>
            </div>
          </div>
        </div>

        {/* Main Navigation Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Brand Area (mit deutlichem Abstand nach rechts) */}
            <a href="#" className="flex items-center gap-3.5 shrink-0 mr-4 xl:mr-8 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#c8a264] to-[#e5c489] text-black flex items-center justify-center shadow-lg shadow-[#c8a264]/20 group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-lg font-black uppercase text-white block leading-none tracking-tight whitespace-nowrap">
                  LUDWIG <span className="text-[#c8a264]">FONK</span>
                </span>
                <span className="text-[9px] text-[#c8a264] font-extrabold uppercase tracking-widest block mt-0.5 whitespace-nowrap">Fliesenleger-Meisterbetrieb • Kerpen</span>
              </div>
            </a>

            {/* Desktop Nav Links (ausgedehnter Platz) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 justify-center flex-1 mx-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-[11px] xl:text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-[#c8a264] transition-colors whitespace-nowrap px-1 py-1">{l.label}</a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2 xl:ml-6">
              <a href="tel:02237972504" className="hidden xl:inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 text-[#c8a264]" />
                <span>02237 972504</span>
              </a>
              <a href="#contact-section" className="hidden sm:inline-flex bg-[#c8a264] hover:bg-[#b89254] text-black font-extrabold px-4 sm:px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#c8a264]/20 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                Angebot Anfragen
              </a>
              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-stone-300 hover:text-white rounded-lg bg-stone-900 border border-stone-800">
                {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-stone-800 pt-3 space-y-1 bg-[#101216]">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-bold text-stone-300 hover:text-[#c8a264] hover:bg-stone-900 rounded-lg transition-colors">{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ═══ HERO SECTION (Echtes Hauptprodukt-Foto im Split-Hero) ═══ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 border-b border-stone-800 tile-grid-backdrop">
        <div className="absolute inset-0 z-0">
          <img src={heroBathroom} alt="Fliesenleger Ludwig Fonk Bad Sanierung Kerpen" className="w-full h-full object-cover object-center filter contrast-105 brightness-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101216] via-[#101216]/90 to-[#101216]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-transparent to-[#101216]/80" />
          <div className="absolute inset-0 bg-[#c8a264]/5 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-[#c8a264]/50 text-[#c8a264] text-xs font-bold uppercase tracking-widest shadow-2xl">
                <Award className="w-4 h-4 text-[#c8a264]" />
                <span>Meisterhafter Fliesenlegerbetrieb • Kerpen</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#101216]/80 backdrop-blur-md border border-stone-800 text-stone-300 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#c8a264]" />
                <span>Concordiastr. 11</span>
              </div>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05] font-black drop-shadow-2xl">
              MEISTERHAFTE FLIESEN- <br />
              <span className="text-[#c8a264] drop-shadow-[0_10px_20px_rgba(200,162,100,0.3)]">& NATURSTEINARBEITEN.</span>
            </h1>

            <p className="text-stone-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-md">
              Ihr erfahrener Fachbetrieb in Kerpen für Komplettbad-Sanierungen, barrierefreie Walk-In Duschen, exklusive XXL-Großformatfliesen und hochwertige Natursteinverlegung im Innen- & Außenbereich.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href="#contact-section" className="bg-[#c8a264] hover:bg-[#b89254] text-black font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-2xl shadow-[#c8a264]/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
                <Send className="w-4 h-4" />
                <span>Kostenloses Festpreis-Angebot Anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:02237972504" className="bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-[#c8a264]/50 backdrop-blur-md">
                <Phone className="w-4 h-4 text-[#c8a264]" />
                <span>02237 972504 Anrufen</span>
              </a>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c8a264]" /> Festpreis-Garantie</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c8a864]" /> DIN 18534 Abdichtung</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c8a264]" /> Sauberkeits-Versprechen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STATS STRIP ═══ */}
      <section className="py-10 bg-[#0c0e11] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '25+ Jahre', label: 'Handwerkserfahrung in Kerpen', highlight: true },
              { val: '100%', label: 'DIN-Norm Abdichtung & Festpreise', highlight: false },
              { val: 'XXL-Fliesen', label: 'Spezialist für Großformate', highlight: true },
              { val: '50169 Kerpen', label: 'Concordiastr. 11 vor Ort', highlight: false },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#161920] border border-stone-800 shadow-inner">
                <span className={`font-heading text-2xl sm:text-3xl font-black block ${s.highlight ? 'text-[#c8a264]' : 'text-white'}`}>{s.val}</span>
                <span className="text-xs text-stone-400 font-medium mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ÜBER UNS SEKTION ═══ */}
      <section id="about" className="py-24 bg-[#101216] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#c8a264]/30 shadow-2xl aspect-[4/5] bg-[#161920]">
                <img src={tileWork} alt="Fliesenleger Ludwig Fonk Handwerk Kerpen" className="w-full h-full object-cover filter contrast-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101216]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c8a264] flex items-center justify-center shadow-lg text-black">
                    <Sparkles className="w-5 h-5 fill-black" />
                  </div>
                  <span className="text-white font-bold text-sm drop-shadow-md">Präzision bis ins letzte Fugendetail</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#c8a264] font-bold text-xs uppercase tracking-widest block">Über den Fachbetrieb</span>
              <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight text-white font-black">
                FLIESENLEGER LUDWIG FONK – <span className="text-[#c8a264]">HANDWERK AUS KERPEN.</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                Seit vielen Jahren steht der Name Ludwig Fonk (Fliesen Fonk) in Kerpen und dem Rhein-Erft-Kreis für erstklassige Qualität, Zuverlässigkeit und meisterhafte Verlegearbeit. Ansässig in der Concordiastraße 11 in 50169 Kerpen begleiten wir Immobilieneigentümer, Bauherren und Renovierer bei Badsanierungen und Fliesenprojekten aller Art.
              </p>
              <p className="text-stone-300 text-base leading-relaxed">
                Vom klassischen Feinsteinzeug über edlen Naturstein (Granit, Marmor, Schiefer) bis hin zu hochmodernen Großformat-XXL-Fliesen legen wir höchsten Wert auf perfekte Untergrundvorbereitung, absolut stufenlose Übergänge und dauerhafte DIN-Abdichtungen.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-[#161920] rounded-xl border border-stone-800">
                  <Award className="w-7 h-7 text-[#c8a264] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm block">Meisterqualität</span>
                    <span className="text-xs text-stone-400">Erfahrung & Sorgfalt</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#161920] rounded-xl border border-stone-800">
                  <ShieldCheck className="w-7 h-7 text-[#c8a264] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm block">Sauberer Einbau</span>
                    <span className="text-xs text-stone-400">Staubarmes Arbeiten</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#161920] rounded-xl border border-stone-800">
                  <MapPin className="w-7 h-7 text-[#c8a264] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm block">Kerpen Vor Ort</span>
                    <span className="text-xs text-stone-400">Concordiastr. 11</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ LEISTUNGEN ═══ */}
      <section id="services" className="py-24 bg-[#0c0e11] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c8a264] font-bold text-xs uppercase tracking-widest block">Unser Leistungsportfolio</span>
            <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight text-white font-black">
              FLIESEN- & NATURSTEINLEISTUNGEN
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Ob Komplettbad, barrierefreie Dusche oder Naturstein-Terrasse: Wir setzen Ihre Vorstellungen fachgerecht um.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <div key={idx} className="craft-card rounded-2xl overflow-hidden group flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-stone-900 shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#c8a264] text-black text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow">{item.badge}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between space-y-4 flex-1">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#c8a264] transition-colors">{item.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <a href="#contact-section" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c8a264] hover:text-[#b89254] transition-colors pt-2">
                    <span>Beratung anfordern</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REFERENZEN / REFERENZ-GALERIE ═══ */}
      <section id="portfolio" className="py-24 bg-[#101216] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c8a264] font-bold text-xs uppercase tracking-widest block">Einblicke in unsere Arbeiten</span>
            <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight text-white font-black">
              REFERENZEN & ARBEITSMUSTER
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Klicken Sie auf ein Bild, um die Detailansicht zu öffnen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedGalleryImg(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-stone-800 hover:border-[#c8a264]/60 transition-all duration-500 shadow-xl aspect-[4/3] bg-[#161920]"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101216]/90 via-[#101216]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-[#c8a264]/40 text-[#c8a264] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#c8a264] block">{item.category}</span>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#c8a264] transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VORTEILE / BENEFITS ═══ */}
      <section id="benefits" className="py-20 bg-[#0c0e11] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "DIN 18534 Abdichtung", text: "Zertifizierte Verbundabdichtung unter Fliesen schützt Ihr Gebäude dauerhaft vor Feuchtigkeitsschäden." },
              { icon: CheckSquare, title: "Transparente Festpreise", text: "Keine versteckten Nebenkosten. Sie erhalten vor Arbeitsbeginn ein verbindliches Detailangebot." },
              { icon: Calendar, title: "Pünktliche Fertigstellung", text: "Wir halten zugesagte Fristen zuverlässig ein, damit Ihr Bad oder Wohnbereich schnell nutzbar ist." },
            ].map((b, idx) => (
              <div key={idx} className="craft-card rounded-2xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#c8a264]/10 border border-[#c8a264]/30 text-[#c8a264] flex items-center justify-center">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{b.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FESTES INLINE-KONTAKTFORMULAR UNTEN (PFLICHT) ═══ */}
      <section id="contact-section" className="py-24 bg-[#101216] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c8a264] font-bold text-xs uppercase tracking-widest block">Jetzt unverbindlich anfragen</span>
            <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight text-white font-black">
              IHR FLIESENPROJEKT IN KERPEN ANFRAGEN
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Rufen Sie uns direkt an oder nutzen Sie das Kontaktformular für ein kostenloses Erstgespräch.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details & Map */}
            <div className="lg:col-span-5 space-y-8 bg-[#161920] border border-stone-800 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6 text-sm text-stone-300">
                <h3 className="font-heading text-2xl font-black text-white uppercase border-b border-stone-800 pb-4">
                  LUDWIG FONK FLIESENLEGER
                </h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#c8a264] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm">Standort & Adresse:</strong>
                    Concordiastr. 11, 50169 Kerpen
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneCall className="w-5 h-5 text-[#c8a264] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm">Telefon & Mobil:</strong>
                    <a href="tel:02237972504" className="hover:text-[#c8a264] font-bold text-[#c8a264] block">Festnetz: 02237 972504</a>
                    <a href="tel:01638083965" className="hover:text-[#c8a264] font-semibold text-stone-300 block">Mobil: 0163 8083965</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#c8a264] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm">Arbeitszeiten:</strong>
                    Montag – Freitag: 07:30 – 18:00 Uhr<br />
                    Samstag: 08:00 – 13:00 Uhr
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-stone-800 aspect-[16/9]">
                <iframe 
                  title="Fliesenleger Ludwig Fonk Kerpen Standorts-Karte" 
                  src="https://maps.google.com/maps?q=Concordiastra%C3%9Fe%2011%2C%2050169%20Kerpen&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0" 
                  loading="lazy" 
                />
              </div>
            </div>

            {/* Permanent Inline Form */}
            <div className="lg:col-span-7 bg-[#161920] border border-stone-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="font-heading text-2xl font-black text-white uppercase mb-2">KOSTENLOSES ANGEBOT ANFORDERN</h3>
              <p className="text-xs text-stone-400 mb-6">Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
              
              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#c8a264]/10 border border-[#c8a264]/40 text-[#c8a264] text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#c8a264] mx-auto" />
                  <h4 className="font-bold text-white text-lg">Vielen Dank für Ihre Anfrage!</h4>
                  <p className="text-xs text-stone-400">Ludwig Fonk wird Ihre Nachricht prüfen und sich kurzfristig bei Ihnen melden.</p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  {/* Honeypot Spam Protection Field */}
                  <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Ihr Name *</label>
                      <input type="text" required placeholder="z. B. Michael Weber" className="w-full bg-[#101216] border border-stone-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c8a264] outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Telefonnummer *</label>
                      <input type="tel" required placeholder="z. B. 02237 123456" className="w-full bg-[#101216] border border-stone-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c8a264] outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">E-Mail Adresse</label>
                      <input type="email" placeholder="ihre@email.de" className="w-full bg-[#101216] border border-stone-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c8a264] outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Projekt-Art</label>
                      <select className="w-full bg-[#101216] border border-stone-800 rounded-xl p-3.5 text-sm text-stone-300 focus:border-[#c8a264] outline-none transition-colors">
                        <option value="bad">Badsanierung / Dusche</option>
                        <option value="xxl">Großformat- / XXL-Fliesen</option>
                        <option value="naturstein">Natursteinarbeiten</option>
                        <option value="terrasse">Balkon / Terrasse</option>
                        <option value="sonstiges">Sonstige Fliesenarbeiten</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Projektbeschreibung / Maße *</label>
                    <textarea required rows={4} placeholder="Beschreiben Sie kurz Ihr Projekt (z. B. Badsanierung ca. 12 m² mit barrierefreier Dusche in Kerpen)..." className="w-full bg-[#101216] border border-stone-800 rounded-xl p-3.5 text-sm text-white focus:border-[#c8a264] outline-none transition-colors" />
                  </div>

                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage einverstanden (<button type="button" onClick={() => setIsDatenschutzOpen(true)} className="underline text-stone-400 hover:text-[#c8a264]">Datenschutz</button>).
                  </p>

                  <button type="submit" className="w-full bg-[#c8a264] hover:bg-[#b89254] text-black font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#c8a264]/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Unverbindliche Anfrage Absenden</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ═══ FAQ SEKTION (PFLICHT) ═══ */}
      <section id="faq" className="py-24 bg-[#0c0e11] border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#c8a264] font-bold text-xs uppercase tracking-widest block">Einwandbehandlung & Details</span>
            <h2 className="font-heading text-3xl sm:text-5xl uppercase tracking-tight text-white font-black">HÄUFIG GESTELLTE FRAGEN (FAQ)</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#161920] border border-stone-800 rounded-2xl overflow-hidden shadow-md">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-[#c8a264] transition-colors">
                    <span className="flex items-center gap-3"><HelpCircle className="w-5 h-5 text-[#c8a264] shrink-0" /><span>{faq.q}</span></span>
                    <ChevronDown className={`w-5 h-5 text-[#c8a264] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (<div className="px-6 pb-6 text-sm text-stone-300 leading-relaxed border-t border-stone-800/80 pt-4">{faq.a}</div>)}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ VOLLWERTIGER 4-SPALTEN-FOOTER (PFLICHT) ═══ */}
      <footer className="bg-[#08090c] pt-16 pb-24 lg:pb-12 text-stone-400 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#c8a264] to-[#e5c489] text-black flex items-center justify-center shadow-md">
                  <Layers className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-heading text-lg font-black uppercase text-white tracking-tight">LUDWIG <span className="text-[#c8a264]">FONK</span></span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">Meisterhafter Fliesenlegerbetrieb in Kerpen. Spezialist für Badsanierung, Naturstein & XXL-Großformatfliesen.</p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#c8a264] font-bold bg-[#c8a264]/10 border border-[#c8a264]/20 px-3 py-1.5 rounded-lg w-fit">
                <AlertCircle className="w-3.5 h-3.5 text-[#c8a264] shrink-0" />
                <span>Handwerk mit Garantie & DIN-Norm</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Leistungen</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-[#c8a264] transition-colors">Badsanierung & Duschen</a></li>
                <li><a href="#services" className="hover:text-[#c8a264] transition-colors">XXL-Großformatfliesen</a></li>
                <li><a href="#services" className="hover:text-[#c8a264] transition-colors">Natursteinverlegung</a></li>
                <li><a href="#services" className="hover:text-[#c8a264] transition-colors">Balkone & Terrassen</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Kontakt & NAP</h4>
              <div className="space-y-2 text-xs">
                <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#c8a264] shrink-0" /><span>Concordiastr. 11, 50169 Kerpen</span></p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#c8a264] shrink-0" /><a href="tel:02237972504" className="hover:text-white font-bold text-[#c8a264]">02237 972504</a></p>
                <p className="flex items-start gap-2 pt-1"><Clock className="w-3.5 h-3.5 text-[#c8a264] shrink-0 mt-0.5" /><span>Mo–Fr: 07:30–18 Uhr | Sa: 08–13 Uhr</span></p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold uppercase text-white tracking-wider">Rechtliches</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setIsImpressumOpen(true)} className="hover:text-[#c8a264] transition-colors">Impressum</button></li>
                <li><button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-[#c8a264] transition-colors">Datenschutzerklärung</button></li>
                <li><a href="#contact-section" className="hover:text-[#c8a264] transition-colors">Anfahrt & Anfragen</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <div>© 2026 Ludwig Fonk Fliesenleger • Concordiastr. 11, 50169 Kerpen</div>
            <div className="flex items-center gap-6">
              <button onClick={() => setIsImpressumOpen(true)} className="hover:text-[#c8a264] transition-colors">Impressum</button>
              <button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-[#c8a264] transition-colors">Datenschutz</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ LIGHTBOX MODAL FÜR REFERENZEN ═══ */}
      {selectedGalleryImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedGalleryImg(null)}>
          <div className="relative max-w-4xl w-full bg-[#161920] border border-[#c8a264]/40 rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedGalleryImg(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-stone-300 hover:text-white border border-stone-800">
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-[16/10] overflow-hidden bg-black">
              <img src={selectedGalleryImg.src} alt={selectedGalleryImg.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c8a264]">{selectedGalleryImg.category}</span>
              <h3 className="font-heading text-2xl font-bold text-white">{selectedGalleryImg.title}</h3>
              <p className="text-sm text-stone-300">{selectedGalleryImg.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ RECHTLICHE MODALS ═══ */}
      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#161920] border border-stone-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-stone-300">
            <div className="flex justify-between items-center border-b border-stone-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Impressum</h3>
              <button onClick={() => setIsImpressumOpen(false)} className="text-stone-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p>
              <strong>Ludwig Fonk Fliesenleger (Fliesen Fonk)</strong><br />
              Concordiastr. 11<br />
              50169 Kerpen<br />
              Telefon: 02237 972504<br />
              Mobil: 0163 8083965
            </p>
            <p>Eingetragener Fachbetrieb für Fliesen-, Platten- und Mosaikverlegung sowie Natursteinarbeiten.</p>
          </div>
        </div>
      )}

      {isDatenschutzOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#161920] border border-stone-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-stone-300">
            <div className="flex justify-between items-center border-b border-stone-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Datenschutzerklärung</h3>
              <button onClick={() => setIsDatenschutzOpen(false)} className="text-stone-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p>Verantwortlicher im Sinne der DSGVO: Ludwig Fonk Fliesenleger, Concordiastr. 11, 50169 Kerpen.</p>
            <p>Wir erheben personenbezogene Daten (Name, Telefonnummer, E-Mail) ausschließlich zur Bearbeitung Ihrer Anfrage.</p>
          </div>
        </div>
      )}

      {/* ═══ MOBILE STICKY BOTTOM ACTION BAR (1-Tap Call & Offer Request) ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e11]/95 backdrop-blur-lg p-3 border-t border-stone-800 flex items-center justify-between gap-3 lg:hidden shadow-2xl">
        <a href="tel:02237972504" className="flex-1 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-bold py-3 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-[#c8a264]" />
          <span>02237 972504</span>
        </a>
        <a href="#contact-section" className="flex-1 bg-[#c8a264] hover:bg-[#b89254] text-black font-extrabold py-3 px-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c8a264]/20">
          <Send className="w-4 h-4" />
          <span>Angebot</span>
        </a>
      </div>

    </div>
  );
}
