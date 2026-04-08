import { useState, useEffect, useRef, useCallback } from "react";
import { BookOpen, GraduationCap, Cpu, Globe, Star, ChevronRight, Phone, Mail, MapPin, Play, ArrowRight, Check, Users, Award, Sparkles, Heart, Zap, Building2, TrendingUp, Clock, DollarSign, Monitor } from "lucide-react";

/* ═══ PALETTE ═══ */
const C = {
  green: "#7CB342", greenDark: "#5A8A2A", greenLight: "#C5E1A5", greenPale: "#F1F8E9",
  blue: "#039BE5", blueDark: "#0277BD", blueLight: "#B3E5FC", bluePale: "#E1F5FE",
  coral: "#EF5350", coralDark: "#C62828", coralLight: "#FFCDD2", coralPale: "#FFEBEE",
  purple: "#5C6BC0", purpleDark: "#3949AB", purpleLight: "#C5CAE9",
  teal: "#00897B", tealDark: "#00695C",
  yellow: "#FDD835", yellowDark: "#F9A825",
  orange: "#FF9800",
  dark: "#1A2744", darkSoft: "#2D3A4F",
  gray: "#64748B", grayLight: "#94A3B8", grayBorder: "#E2E8F0",
  white: "#FFFFFF", offWhite: "#F8FAFC",
};

/* ═══ DATA ═══ */
const COURSES = [
  { icon: BookOpen, title: "Apoio Escolar", desc: "Reforço individualizado em Português e Matemática com ensino híbrido e acompanhamento contínuo.", color: C.blue, light: C.bluePale, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=480&h=340&fit=crop&crop=faces" },
  { icon: Cpu, title: "Robótica Educacional", desc: "Da montagem à programação: raciocínio lógico, criatividade e resolução de problemas na prática.", color: C.green, light: C.greenPale, img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=480&h=340&fit=crop" },
  { icon: Monitor, title: "Programação", desc: "Games, apps, Minecraft e lógica de programação para crianças e adolescentes dos 6 aos 14 anos.", color: C.orange, light: "#FFF3E0", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=480&h=340&fit=crop" },
  { icon: Globe, title: "Inglês", desc: "Fluência desde a infância com abordagem comunicativa e imersão no universo bilíngue.", color: C.coral, light: C.coralPale, img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=480&h=340&fit=crop&crop=faces" },
];

const REASONS = [
  { icon: Users, title: "Ensino Individualizado", desc: "Cada aluno no seu ritmo, sem formação de turmas, com mediação de instrutor especializado." },
  { icon: Zap, title: "Aulas Digitais Interativas", desc: "Gamificação, dinâmicas e jogos que transformam aprendizado em experiência envolvente." },
  { icon: TrendingUp, title: "Feedback em Tempo Real", desc: "Pais e alunos acompanham a evolução com avaliações contínuas e relatórios de desempenho." },
  { icon: Heart, title: "Universo Turma da Mônica", desc: "Licenciamento exclusivo que gera identificação imediata e confiança nas famílias brasileiras." },
  { icon: Award, title: "Metodologia Comprovada", desc: "12+ anos de resultados com o melhor das teorias construtivista e sociocultural." },
  { icon: Sparkles, title: "Profissões do Futuro", desc: "Robótica, programação e inglês preparando crianças para um mercado em transformação." },
];

const STATS = [
  { icon: DollarSign, number: "90", prefix: "R$", suffix: " mil", label: "Investimento inicial" },
  { icon: TrendingUp, number: "40", prefix: "", suffix: "%", label: "Rentabilidade média" },
  { icon: Clock, number: "12", prefix: "", suffix: " meses", label: "Retorno do investimento" },
  { icon: Building2, number: "100", prefix: "+", suffix: "", label: "Escolas no Brasil" },
];

const TESTIMONIALS = [
  { quote: "Meu filho estava com muita dificuldade em matemática. Em poucos meses na Ensina Mais, a evolução foi incrível. Ele ganhou confiança e as notas subiram!", name: "Carla Mendes", city: "São Paulo, SP", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces", stars: 5 },
  { quote: "A robótica despertou no meu filho um interesse que eu nunca tinha visto. Ele chega em casa animado, querendo construir coisas e explicar como funciona!", name: "Roberto Silva", city: "Campinas, SP", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces", stars: 5 },
  { quote: "A metodologia individualizada faz toda a diferença. Minha filha tem acompanhamento personalizado e agora ama ir pra aula. Recomendo muito!", name: "Juliana Ferreira", city: "Rio de Janeiro, RJ", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces", stars: 5 },
];

/* ═══ HOOKS ═══ */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold });
    o.observe(el); return () => o.disconnect();
  }, [threshold]);
  return [ref, v];
}

function useCounter(end, duration = 2000, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame; const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);
  return val;
}

/* ═══ PRIMITIVES ═══ */
function FadeIn({ children, delay = 0, y = 30, style = {}, className = "" }) {
  const [ref, v] = useInView();
  return <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : `translateY(${y}px)`, transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`, ...style }}>{children}</div>;
}

function Wave({ color, flip, height = 60 }) {
  return (
    <div style={{ marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0, lineHeight: 0, transform: flip ? "rotate(180deg)" : "none", overflow: "hidden" }}>
      <svg viewBox="0 0 1440 120" style={{ width: "100%", height, display: "block" }} preserveAspectRatio="none">
        <path d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,60 L1440,120 L0,120 Z" fill={color} />
      </svg>
    </div>
  );
}

function Blob({ color, size = 200, top, left, right, bottom, opacity = 0.12 }) {
  return <div style={{ position: "absolute", width: size, height: size, borderRadius: "50%", background: color, opacity, filter: "blur(40px)", top, left, right, bottom, pointerEvents: "none" }} />;
}

function DotGrid({ color = "rgba(255,255,255,0.08)", size = 300, top, right }) {
  const dots = [];
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) dots.push(<circle key={`${r}-${c}`} cx={c * 18 + 9} cy={r * 18 + 9} r="2" fill={color} />);
  return <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 144 144" style={{ position: "absolute", top, right, pointerEvents: "none", opacity: 0.6 }}>{dots}</svg>;
}

function Badge({ children, bg, color, style = {} }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Nunito, sans-serif", fontSize: 12, fontWeight: 700, color, background: bg, borderRadius: 9999, padding: "6px 14px", letterSpacing: "0.02em", ...style }}>{children}</span>;
}

/* ═══ NAVBAR ═══ */
function Navbar() {
  const [scrolled, set] = useState(false);
  useEffect(() => { const h = () => set(window.scrollY > 30); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);
  const links = ["Cursos", "Metodologia", "Escolas", "Depoimentos", "Franquia"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: scrolled ? "rgba(255,255,255,0.97)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none", transition: "all 0.4s cubic-bezier(.22,1,.36,1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: 14, background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${C.green}50` }}>
            <GraduationCap size={22} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: 18, color: scrolled ? C.dark : "#fff", lineHeight: 1.1, transition: "color 0.4s" }}>Ensina Mais</div>
            <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, fontWeight: 700, color: scrolled ? C.gray : "rgba(255,255,255,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.4s" }}>Turma da Mônica</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desk">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 700, color: scrolled ? C.dark : "rgba(255,255,255,0.9)", textDecoration: "none", transition: "color 0.3s", position: "relative" }} onMouseEnter={e => e.target.style.color = C.yellow} onMouseLeave={e => e.target.style.color = scrolled ? C.dark : "rgba(255,255,255,0.9)"}>{l}</a>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#lead" style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 800, color: C.dark, background: C.yellow, borderRadius: 12, padding: "10px 22px", textDecoration: "none", boxShadow: `0 4px 14px ${C.yellow}40`, transition: "all 0.2s" }} onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 6px 20px ${C.yellow}60`; }} onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = `0 4px 14px ${C.yellow}40`; }}>Agendar aula</a>
        </div>
      </div>
    </nav>
  );
}

/* ═══ HERO ═══ */
function Hero() {
  return (
    <section style={{ position: "relative", background: `linear-gradient(160deg, ${C.greenDark} 0%, ${C.green} 50%, #8BC34A 100%)`, paddingTop: 72, overflow: "hidden", minHeight: "85vh", display: "flex", flexDirection: "column" }}>
      <Blob color="#fff" size={500} top="-100px" right="-150px" opacity={0.06} />
      <Blob color={C.yellow} size={300} bottom="60px" left="-80px" opacity={0.1} />
      <DotGrid top="100px" right="60px" />
      <div style={{ position: "absolute", bottom: 0, right: "5%", width: "40%", height: "70%", background: "rgba(255,255,255,0.04)", borderRadius: "40% 40% 0 0", pointerEvents: "none" }} />
      <div style={{ flex: 1, maxWidth: 1200, margin: "0 auto", padding: "60px 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", position: "relative", zIndex: 2 }} className="hero-g">
        <FadeIn>
          <div>
            <Badge bg="rgba(255,255,255,0.18)" color="#fff" style={{ marginBottom: 20, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Star size={13} fill="#FDD835" color="#FDD835" /> Licenciado Turma da Mônica
            </Badge>
            <h1 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.1, color: "#fff", marginBottom: 20 }}>
              Aqui, aprender é<br />mais <span style={{ color: C.yellow, position: "relative", display: "inline-block" }}>experiência
                <svg viewBox="0 0 200 12" style={{ position: "absolute", bottom: -4, left: 0, width: "100%" }}><path d="M0,8 Q50,0 100,6 T200,4" stroke={C.yellow} strokeWidth="3" fill="none" strokeLinecap="round" /></svg>
              </span>
            </h1>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.88)", maxWidth: 460, marginBottom: 32 }}>
              Apoio escolar, Inglês, Robótica e Programação com <strong style={{ color: "#fff" }}>metodologia individualizada</strong> que desenvolve seu filho para o presente e o futuro.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <a href="#lead" style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, fontWeight: 800, color: C.greenDark, background: "#fff", borderRadius: 14, padding: "16px 32px", textDecoration: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", transition: "all 0.25s", display: "inline-flex", alignItems: "center", gap: 8 }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}>
                Agendar aula grátis <ArrowRight size={16} />
              </a>
              <a href="#cursos" style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", borderRadius: 14, padding: "16px 28px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.35)", transition: "all 0.25s", display: "inline-flex", alignItems: "center", gap: 8 }} onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.background = "transparent"; }}>
                <Play size={15} fill="#fff" /> Ver como funciona
              </a>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {[["100+", "Escolas"], ["12+", "Anos"], ["4", "Cursos"]].map(([n, l], i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 22, fontWeight: 900, color: C.yellow }}>{n}</div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 28, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", border: "4px solid rgba(255,255,255,0.15)" }}>
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=440&fit=crop&crop=faces" alt="" style={{ width: "100%", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", gap: 8 }}>
                <Badge bg="rgba(255,255,255,0.95)" color={C.dark}><Check size={12} color={C.green} strokeWidth={3} /> Metodologia Exclusiva</Badge>
                <Badge bg="rgba(255,255,255,0.95)" color={C.dark}><Check size={12} color={C.green} strokeWidth={3} /> Ensino Híbrido</Badge>
              </div>
            </div>
            <div style={{ position: "absolute", top: -16, right: -16, width: 100, height: 100, borderRadius: 24, background: C.yellow, boxShadow: `0 8px 24px ${C.yellow}50`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: "rotate(6deg)", zIndex: 3 }}>
              <Sparkles size={24} color={C.dark} strokeWidth={2.5} />
              <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 10, fontWeight: 800, color: C.dark, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 }}>Turma da</span>
              <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 10, fontWeight: 800, color: C.dark, textTransform: "uppercase" }}>Mônica</span>
            </div>
            <div style={{ position: "absolute", bottom: -20, left: -20, borderRadius: 20, overflow: "hidden", width: 140, height: 100, boxShadow: "0 8px 24px rgba(0,0,0,0.15)", border: "3px solid #fff", zIndex: 3 }}>
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=280&h=200&fit=crop&crop=faces" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </FadeIn>
      </div>
      <Wave color="#fff" height={80} />
    </section>
  );
}

/* ═══ LEAD FORM ═══ */
function LeadForm() {
  return (
    <section id="lead" style={{ background: "#fff", padding: "0 24px 60px", marginTop: -20 }}>
      <FadeIn y={20}>
        <div style={{ maxWidth: 960, margin: "0 auto", background: "#fff", borderRadius: 24, padding: "36px 40px", boxShadow: "0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)", border: `2px solid ${C.greenPale}`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${C.green}, ${C.blue}, ${C.coral}, ${C.yellow})` }} />
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h3 style={{ fontFamily: "Nunito, sans-serif", fontSize: 20, fontWeight: 800, color: C.dark, marginBottom: 6 }}>Agende uma <span style={{ color: C.green }}>aula experimental gratuita</span></h3>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, color: C.gray }}>Conheça a unidade mais perto de você. Sem compromisso.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 16 }} className="form-g">
            {[["Nome completo", "text"], ["E-mail", "email"], ["Celular", "tel"], ["Cidade", "text"]].map(([ph, t]) => (
              <div key={ph} style={{ position: "relative" }}>
                <input type={t} placeholder={ph} style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 500, padding: "14px 16px", borderRadius: 12, border: `2px solid ${C.grayBorder}`, outline: "none", width: "100%", transition: "all 0.2s", background: C.offWhite }} onFocus={e => { e.target.style.borderColor = C.green; e.target.style.background = "#fff"; e.target.style.boxShadow = `0 0 0 4px ${C.green}15`; }} onBlur={e => { e.target.style.borderColor = C.grayBorder; e.target.style.background = C.offWhite; e.target.style.boxShadow = "none"; }} />
              </div>
            ))}
          </div>
          <button style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, fontWeight: 800, color: "#fff", background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, border: "none", borderRadius: 14, padding: "16px 0", cursor: "pointer", width: "100%", boxShadow: `0 6px 20px ${C.green}40`, transition: "all 0.25s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 28px ${C.green}50`; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 6px 20px ${C.green}40`; }}>
            Quero agendar minha aula grátis <ArrowRight size={16} />
          </button>
        </div>
      </FadeIn>
    </section>
  );
}

/* ═══ ABOUT ═══ */
function About() {
  return (
    <>
      <Wave color={C.blue} flip height={70} />
      <section style={{ background: C.blue, padding: "40px 24px 60px", position: "relative", overflow: "hidden" }}>
        <Blob color="#fff" size={400} top="-100px" left="-100px" opacity={0.06} />
        <DotGrid color="rgba(255,255,255,0.06)" top="20px" right="40px" />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 2 }} className="about-g">
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=560&h=420&fit=crop&crop=faces" alt="" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ position: "absolute", bottom: -16, right: -16, background: "#fff", borderRadius: 16, padding: "16px 20px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.bluePale, display: "flex", alignItems: "center", justifyContent: "center" }}><Users size={20} color={C.blue} /></div>
                <div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 18, fontWeight: 900, color: C.dark }}>2.800+</div>
                  <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 11, color: C.gray }}>Alunos matriculados</div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <Badge bg="rgba(255,255,255,0.15)" color="#fff" style={{ marginBottom: 16, border: "1px solid rgba(255,255,255,0.2)" }}>
                <BookOpen size={12} /> Sobre a Ensina Mais
              </Badge>
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                Como transformamos a educação de base no Brasil
              </h2>
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.88)", marginBottom: 24 }}>
                Desde 2012, a Ensina Mais concilia o melhor da <strong style={{ color: "#fff" }}>Educação e da Tecnologia</strong> com ensino individualizado, aulas digitais interativas e o universo da Turma da Mônica. Desenvolvemos crianças e adolescentes em múltiplos saberes — do apoio escolar às profissões do futuro.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {["Ensino sem formação de turmas — cada aluno no seu ritmo", "Aulas digitais com gamificação e interatividade", "Avaliação pré-matrícula para plano personalizado"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Check size={13} color={C.yellow} strokeWidth={3} /></div>
                    <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.92)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <a href="#cursos" style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 800, color: C.blue, background: "#fff", borderRadius: 14, padding: "14px 28px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 20px rgba(0,0,0,0.1)", transition: "all 0.25s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>Conheça a metodologia <ChevronRight size={16} /></a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Wave color={C.blue} height={70} />
    </>
  );
}

/* ═══ REASONS ═══ */
function Reasons() {
  return (
    <section id="metodologia" style={{ background: "#fff", padding: "60px 24px 80px", position: "relative", overflow: "hidden" }}>
      <Blob color={C.coral} size={300} top="-60px" right="-80px" opacity={0.06} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Badge bg={C.coralPale} color={C.coral} style={{ marginBottom: 12 }}><Sparkles size={12} /> Diferenciais</Badge>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: C.dark, marginBottom: 12 }}>Por que escolher a Ensina Mais?</h2>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, color: C.gray, maxWidth: 520, margin: "0 auto" }}>Uma metodologia que une tecnologia, personalização e o universo que as crianças amam.</p>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="reasons-g">
          {REASONS.map((r, i) => {
            const colors = [C.blue, C.green, C.coral, C.yellow, C.purple, C.orange];
            const c = colors[i % colors.length];
            return (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", border: `1px solid ${C.grayBorder}`, transition: "all 0.3s", cursor: "default", position: "relative", overflow: "hidden" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${c}18`; e.currentTarget.style.borderColor = `${c}40`; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = C.grayBorder; }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c, opacity: 0 , transition: "opacity 0.3s" }} className="card-bar" />
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: `${c}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <r.icon size={24} color={c} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: "Nunito, sans-serif", fontSize: 17, fontWeight: 800, color: C.dark, marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, lineHeight: 1.65, color: C.gray }}>{r.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══ COURSES ═══ */
function CoursesSection() {
  const [active, setActive] = useState(0);
  const c = COURSES[active];
  return (
    <>
      <Wave color={C.greenPale} flip height={60} />
      <section id="cursos" style={{ background: C.greenPale, padding: "40px 24px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "5%", bottom: "10%", fontFamily: "Nunito, sans-serif", fontSize: "clamp(120px, 18vw, 220px)", fontWeight: 900, color: C.green, opacity: 0.06, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>E+</div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Badge bg={`${C.green}18`} color={C.greenDark} style={{ marginBottom: 12 }}><GraduationCap size={12} /> Nossos Cursos</Badge>
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: C.dark }}>Desenvolvemos múltiplos saberes</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 36, flexWrap: "wrap" }}>
              {COURSES.map((co, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 700, color: active === i ? "#fff" : C.dark, background: active === i ? co.color : "#fff", border: active === i ? "none" : `2px solid ${C.grayBorder}`, borderRadius: 14, padding: "12px 22px", cursor: "pointer", transition: "all 0.25s", display: "flex", alignItems: "center", gap: 8, boxShadow: active === i ? `0 6px 20px ${co.color}40` : "none" }}>
                  <co.icon size={16} /> {co.title}
                </button>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "center", background: "#fff", borderRadius: 28, padding: 8, boxShadow: "0 12px 40px rgba(0,0,0,0.06)", border: `1px solid ${C.grayBorder}` }} className="course-detail">
              <div style={{ borderRadius: 24, overflow: "hidden", position: "relative" }}>
                <img src={c.img} alt={c.title} style={{ width: "100%", height: 360, objectFit: "cover", display: "block", transition: "transform 0.5s" }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${c.color}CC 0%, transparent 60%)` }} />
                <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                  <Badge bg="rgba(255,255,255,0.95)" color={C.dark}><c.icon size={12} color={c.color} /> {c.title}</Badge>
                </div>
              </div>
              <div style={{ padding: "24px 24px 24px 8px" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: c.light, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <c.icon size={28} color={c.color} strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: "Nunito, sans-serif", fontSize: 26, fontWeight: 900, color: C.dark, marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, lineHeight: 1.75, color: C.gray, marginBottom: 24 }}>{c.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {["Ensino individualizado sem turmas", "Material didático interdisciplinar", "Acompanhamento contínuo dos pais"].map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 22, height: 22, borderRadius: 7, background: c.light, display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={12} color={c.color} strokeWidth={3} /></div>
                      <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 600, color: C.dark }}>{t}</span>
                    </div>
                  ))}
                </div>
                <a href="#lead" style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 800, color: "#fff", background: c.color, borderRadius: 14, padding: "14px 28px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: `0 6px 20px ${c.color}40`, transition: "all 0.25s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>Quero saber mais <ArrowRight size={15} /></a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Wave color={C.greenPale} height={60} />
    </>
  );
}

/* ═══ TESTIMONIALS ═══ */
function TestSection() {
  return (
    <section id="depoimentos" style={{ background: "#fff", padding: "40px 24px 80px", position: "relative", overflow: "hidden" }}>
      <Blob color={C.yellow} size={250} top="20px" left="-60px" opacity={0.08} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <Badge bg={`${C.yellow}20`} color={C.dark} style={{ marginBottom: 12 }}><Heart size={12} color={C.coral} fill={C.coral} /> Histórias Reais</Badge>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: C.dark }}>O que os pais dizem</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="test-g">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: "#fff", borderRadius: 24, padding: 28, border: `1px solid ${C.grayBorder}`, transition: "all 0.3s", height: "100%", display: "flex", flexDirection: "column" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>{Array(t.stars).fill(0).map((_, j) => <Star key={j} size={16} fill={C.yellow} color={C.yellow} />)}</div>
                <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, lineHeight: 1.7, color: C.darkSoft, flex: 1, marginBottom: 20 }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: `1px solid ${C.grayBorder}`, paddingTop: 16 }}>
                  <img src={t.img} alt={t.name} style={{ width: 44, height: 44, borderRadius: 14, objectFit: "cover" }} />
                  <div>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 800, color: C.dark }}>{t.name}</div>
                    <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, color: C.grayLight }}>{t.city}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ STATS / FRANCHISE ═══ */
function StatCard({ s, delay }) {
  const [ref, v] = useInView();
  const val = useCounter(parseInt(s.number), 2000, v);
  return (
    <FadeIn delay={delay}>
      <div ref={ref} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 24, padding: "32px 24px", textAlign: "center", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s" }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
          <s.icon size={22} color={C.yellow} />
        </div>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 32, fontWeight: 900, color: C.yellow, lineHeight: 1.1 }}>{s.prefix}{val}{s.suffix}</div>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>{s.label}</div>
      </div>
    </FadeIn>
  );
}

function StatsSection() {
  return (
    <>
      <Wave color={C.purple} flip height={70} />
      <section id="franquia" style={{ background: `linear-gradient(160deg, ${C.purpleDark} 0%, ${C.purple} 100%)`, padding: "40px 24px 60px", position: "relative", overflow: "hidden" }}>
        <Blob color="#fff" size={350} bottom="-80px" right="-80px" opacity={0.04} />
        <DotGrid color="rgba(255,255,255,0.05)" top="30px" right="50px" />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <Badge bg="rgba(255,255,255,0.12)" color="#fff" style={{ marginBottom: 12, border: "1px solid rgba(255,255,255,0.15)" }}><Building2 size={12} /> Seja um Franqueado</Badge>
              <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "#fff", marginBottom: 10 }}>Invista no futuro da educação</h2>
              <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto" }}>Micro franquia com o melhor custo-benefício do mercado de educação no Brasil.</p>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="stats-g">
            {STATS.map((s, i) => <StatCard key={i} s={s} delay={i * 0.08} />)}
          </div>
          <FadeIn delay={0.4}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a href="#" style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, fontWeight: 800, color: C.purpleDark, background: C.yellow, borderRadius: 16, padding: "16px 40px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: `0 8px 28px ${C.yellow}50`, transition: "all 0.25s" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 36px ${C.yellow}60`; }} onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 8px 28px ${C.yellow}50`; }}>
                Quero ser um franqueado <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      <Wave color={C.purple} height={70} />
    </>
  );
}

/* ═══ SCHOOLS GALLERY ═══ */
function SchoolsGallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
  ];
  return (
    <section id="escolas" style={{ background: "#fff", padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Badge bg={`${C.teal}15`} color={C.teal} style={{ marginBottom: 12 }}><MapPin size={12} /> Nossas Escolas</Badge>
            <h2 style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", fontWeight: 900, color: C.dark }}>Mais de 100 unidades pelo Brasil</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }} className="gallery-g">
          {imgs.map((src, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", transition: "transform 0.3s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"} onMouseLeave={e => e.currentTarget.style.transform = ""}>
                <img src={src} alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)", opacity: 0, transition: "opacity 0.3s" }} onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0"}>
                  <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                    <Badge bg="rgba(255,255,255,0.9)" color={C.dark}><MapPin size={11} /> Unidade Exemplo</Badge>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ TRUST BAR ═══ */
function TrustBar() {
  return (
    <section style={{ background: C.offWhite, borderTop: `1px solid ${C.grayBorder}`, borderBottom: `1px solid ${C.grayBorder}`, padding: "28px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", opacity: 0.5 }}>
        {["ABF", "PEGN", "Google Partner", "Facebook Partner", "Endeavor", "MoveEdu"].map(s => (
          <span key={s} style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, fontWeight: 800, color: C.gray, letterSpacing: "0.04em", textTransform: "uppercase" }}>{s}</span>
        ))}
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
function Footer() {
  return (
    <footer style={{ background: `linear-gradient(160deg, ${C.tealDark} 0%, ${C.teal} 100%)`, padding: "56px 24px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40, paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,0.1)" }} className="footer-g">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 14, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}><GraduationCap size={22} color="#fff" /></div>
              <div>
                <div style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>Ensina Mais</div>
                <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Turma da Mônica</div>
              </div>
            </div>
            <p style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>Rede de apoio escolar licenciada Turma da Mônica. Desenvolvemos crianças e adolescentes para o futuro desde 2012.</p>
            <div style={{ display: "flex", gap: 10 }}>
              {["Fb", "Ig", "Yt", "Wpp"].map(s => (
                <div key={s} style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Nunito, sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = C.yellow; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>{s}</div>
              ))}
            </div>
          </div>
          {[
            ["Links", ["Cursos", "Metodologia", "Benefícios", "Escolas", "Blog"]],
            ["Institucional", ["Seja um Franqueado", "Portal do Aluno", "Sobre Nós", "Fale Conosco"]],
          ].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, fontWeight: 800, color: "rgba(255,255,255,0.4)", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>{title}</h4>
              {links.map(l => <a key={l} href="#" style={{ display: "block", fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 12, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = C.yellow} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}>{l}</a>)}
            </div>
          ))}
          <div>
            <h4 style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, fontWeight: 800, color: "rgba(255,255,255,0.4)", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>Franqueadora</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[[Phone, "(17) 3214-8699"], [Mail, "sac@moveedu.com.br"], [MapPin, "Av. Bady Bassitt, 4960 — São José do Rio Preto, SP"]].map(([Ic, text], i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Ic size={15} color="rgba(255,255,255,0.4)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2025 Ensina Mais – Turma da Mônica. Uma marca do Grupo MoveEdu.</span>
          <div style={{ display: "flex", gap: 16 }}>
            {["Política de Privacidade", "Termos de Uso"].map(l => <a key={l} href="#" style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.6)"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══ APP ═══ */
export default function EnsinaMaisLP() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        img { display: block; }
        input::placeholder { color: #94A3B8; }
        @media (max-width: 900px) {
          .hero-g, .about-g, .course-detail { grid-template-columns: 1fr !important; }
          .form-g { grid-template-columns: 1fr 1fr !important; }
          .reasons-g, .test-g { grid-template-columns: 1fr 1fr !important; }
          .stats-g, .gallery-g { grid-template-columns: 1fr 1fr !important; }
          .footer-g { grid-template-columns: 1fr 1fr !important; }
          .nav-desk { display: none !important; }
        }
        @media (max-width: 560px) {
          .form-g, .reasons-g, .test-g, .stats-g, .gallery-g, .footer-g { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <LeadForm />
      <About />
      <Reasons />
      <CoursesSection />
      <TestSection />
      <StatsSection />
      <SchoolsGallery />
      <TrustBar />
      <Footer />
    </div>
  );
}
