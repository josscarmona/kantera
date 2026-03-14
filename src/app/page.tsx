import { Fragment } from "react";
import Image from "next/image";
import Script from "next/script";

const pipelineNodes = [
  {
    num: "01",
    name: "Challenge",
    desc: "Un escenario profesional real. Tu proceso de decisión se hace visible antes de ejecutar nada.",
  },
  {
    num: "02",
    name: "Evaluación",
    desc: "Un framework calibrado revisa tu razonamiento, no tu output. La autoría se verifica.",
  },
  {
    num: "03",
    name: "Señal",
    desc: "Un informe estructurado que documenta cómo piensas. Portable, comparable, re-certificable.",
  },
  {
    num: "04",
    name: "Perfil",
    desc: "La señal viaja contigo. Se acumula. Se convierte en historial de criterio profesional.",
  },
];

const truthStatements = [
  {
    title: "El portfolio ya no certifica criterio.",
    body: "Con IA, cualquiera puede producir un case study de aspecto impecable. El output es fácil. El razonamiento detrás de él, no.",
  },
  {
    title: "Las entrevistas no son reproducibles.",
    body: "Cada hiring manager mide cosas distintas en condiciones distintas. El resultado depende del entrevistador, no del candidato.",
  },
  {
    title: "Los títulos han perdido valor diferencial.",
    body: "Tener las credenciales correctas ya no distingue cómo piensas. Y los equipos lo saben.",
  },
];

const properties = [
  {
    label: "Verificada",
    statement: "La señal prueba que el criterio es tuyo.",
    body: "Kantera verifica autoría e independencia. En un mundo donde la IA puede producir cualquier output, eso ya no es trivial.",
  },
  {
    label: "Calibrada",
    statement: "La evaluación es consistente entre personas y contextos.",
    body: "Un framework compartido garantiza que la señal es comparable. No depende de quién evalúa ni de cuándo.",
  },
  {
    label: "Portable",
    statement: "La señal viaja contigo fuera del sistema que la generó.",
    body: "Tu señal Kantera no vive en una plataforma. Es tuya. La compartes, la actualizas, la acumulas con el tiempo.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        /* ── Focus ── */
        *:focus-visible {
          outline: 2px solid #4ED067;
          outline-offset: 2px;
        }

        /* ── Nav ── */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: 104px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 56px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
          transition: box-shadow 0.25s ease;
        }
        .nav--scrolled {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
        }

        /* ── Buttons ── */
        .btn-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 28px;
          border-radius: 999px;
          background: #4ED067;
          color: #070907;
          font-family: var(--font-poppins), sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.18s ease, transform 0.15s ease,
                      box-shadow 0.18s ease;
        }
        .btn-pill:hover {
          background: #3BC45A;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(78, 208, 103, 0.28);
        }
        .btn-pill:active { transform: translateY(0); box-shadow: none; }

        .btn-lg {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 40px;
          border-radius: 999px;
          background: #4ED067;
          color: #070907;
          font-family: var(--font-poppins), sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.18s ease, transform 0.15s ease,
                      box-shadow 0.18s ease;
        }
        .btn-lg:hover {
          background: #3BC45A;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(78, 208, 103, 0.28);
        }
        .btn-lg:active { transform: translateY(0); box-shadow: none; }

        /* ── Hero animations ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          50%  { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes float1 {
          0%, 100% { transform: rotate(-4.5deg) translateY(0); }
          50%       { transform: rotate(-4.5deg) translateY(-8px); }
        }
        @keyframes float2 {
          0%, 100% { transform: rotate(-1deg) translateY(0); }
          50%       { transform: rotate(-1deg) translateY(-11px); }
        }
        @keyframes float3 {
          0%, 100% { transform: rotate(3deg) translateY(0); }
          50%       { transform: rotate(3deg) translateY(-7px); }
        }
        @keyframes shimmerCard {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 100vh;
          background: #F8F9FB;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
          padding: 104px 72px 80px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 580px;
        }
        .hero-content > * {
          animation: fadeInUp 0.65s ease both;
        }
        .hero-content > *:nth-child(1) { animation-delay: 0.05s; }
        .hero-content > *:nth-child(2) { animation-delay: 0.20s; }
        .hero-content > *:nth-child(3) { animation-delay: 0.35s; }
        .hero-content > *:nth-child(4) { animation-delay: 0.50s; }

        .hero-headline {
          margin: 0;
          font-size: 64px;
          font-weight: 500;
          line-height: 72px;
          text-decoration: none;
          background: linear-gradient(
            90deg,
            #070907 0%,
            #070907 20%,
            #1E874C 52%,
            #070907 80%,
            #070907 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 10s ease-in-out infinite;
        }

        /* ── Hero visual — 3-card stack ── */
        .cards-stack {
          position: relative;
          width: 560px;
          height: 500px;
          flex-shrink: 0;
        }

        .kcard {
          position: absolute;
          width: 300px;
          border-radius: 14px;
          padding: 26px;
        }

        .kcard--1 {
          top: 0; left: 0; z-index: 1;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          animation: float1 7s ease-in-out infinite;
        }

        .kcard--2 {
          top: 40px; left: 100px; z-index: 2;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09);
          animation: float2 8.5s ease-in-out 1.4s infinite;
        }

        .kcard--3 {
          top: 80px; left: 200px; z-index: 3;
          background: #0A0C0A;
          border: 1px solid rgba(30, 135, 76, 0.22);
          box-shadow: 0 0 80px rgba(30, 135, 76, 0.10),
                      0 20px 56px rgba(0, 0, 0, 0.22);
          overflow: hidden;
          animation: float3 6.5s ease-in-out 0.7s infinite;
        }

        .kcard-bar-track {
          height: 3px;
          background: rgba(0, 0, 0, 0.07);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 5px;
        }

        .kcard-bar-track--dark {
          height: 2px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 2px;
          overflow: hidden;
        }

        .kcard-shimmer {
          position: absolute;
          top: 0; bottom: 0;
          width: 50px;
          background: linear-gradient(
            90deg, transparent,
            rgba(78, 208, 103, 0.05),
            transparent
          );
          animation: shimmerCard 5.5s ease-in-out infinite;
          pointer-events: none;
        }

        /* ── Shared ── */
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .label {
          display: block;
          font-size: 11px;
          font-weight: 400;
          color: #1E874C;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
        }

        /* ── Pipeline ── */
        .pipeline-row {
          display: flex;
          align-items: stretch;
          width: 100%;
        }
        .pipeline-node {
          flex: 1;
          padding: 40px 32px;
          border-left: 1px solid #1A1C1A;
          transition: border-left-color 0.2s ease;
        }
        .pipeline-node:hover { border-left-color: #1E874C; }
        .pipeline-node--first {
          border-left: none;
        }
        .pipeline-node--first:hover { border-left: none; }
        .pipeline-connector {
          display: flex;
          align-items: center;
          padding: 0 2px;
          color: #1E874C;
          font-size: 14px;
          flex-shrink: 0;
          user-select: none;
        }

        /* ── Why Now ── */
        .why-grid {
          display: flex;
          gap: 100px;
          align-items: center;
        }
        .why-image-wrap {
          flex: 0 0 45%;
          order: 1;
          position: relative;
          height: 500px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #1E874C;
        }
        .why-text {
          flex: 1;
          order: 2;
        }
        .truth-statement {
          border-left: 3px solid #1A1C1A;
          padding-left: 20px;
          transition: border-left-color 0.2s ease;
        }
        .truth-statement:hover { border-left-color: #1E874C; }

        /* ── Standard Properties ── */
        .properties-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .property-col {
          padding: 0 56px;
          border-left: 1px solid #1A1C1A;
        }
        .property-col:first-child {
          padding-left: 0;
          border-left: none;
        }

        /* ── Footer ── */
        .footer {
          background: #070907;
          border-top: 1px solid #1A1C1A;
          padding: 40px 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .hero { gap: 56px; }
        }

        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 64px;
            padding: 120px 40px 80px;
          }
          .hero-content { max-width: 100%; }
          .cards-stack {
            align-self: center;
            width: 448px;
            height: 400px;
          }
          .kcard { width: 240px; padding: 20px; border-radius: 12px; }
          .kcard--2 { top: 32px; left: 80px; }
          .kcard--3 { top: 64px; left: 160px; }
        }

        @media (max-width: 768px) {
          .nav { padding: 0 24px; height: 80px; }

          .hero {
            padding: 100px 24px 64px;
            min-height: 100svh;
            gap: 0;
          }
          .hero-headline {
            font-size: 40px;
            line-height: 52px;
          }
          .cards-stack { display: none; }

          .pipeline-row { flex-direction: column; }
          .pipeline-node {
            border-left: none;
            border-top: 1px solid #1A1C1A;
          }
          .pipeline-node--first { border-top: none; }
          .pipeline-connector {
            justify-content: center;
            padding: 4px 0;
            transform: rotate(90deg);
          }

          .why-grid { flex-direction: column; gap: 48px; }
          .why-image-wrap { flex: none; width: 100%; order: 2; height: 320px; }
          .why-text { order: 1; }

          .properties-grid { grid-template-columns: 1fr; }
          .property-col {
            padding: 40px 0;
            border-left: none;
            border-top: 1px solid #1A1C1A;
          }
          .property-col:first-child { padding-top: 0; border-top: none; }

          .footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
            gap: 16px;
          }
          .footer-center { display: none; }

          .section-pad { padding: 96px 24px !important; }
        }
      `}</style>

      {/* Transparent → white-glass nav on scroll */}
      <Script id="nav-scroll" strategy="afterInteractive">{`
        (function () {
          var nav = document.getElementById('main-nav');
          if (!nav) return;
          function update() {
            if (window.scrollY > 60) {
              nav.classList.add('nav--scrolled');
            } else {
              nav.classList.remove('nav--scrolled');
            }
          }
          window.addEventListener('scroll', update, { passive: true });
          update();
        })();
      `}</Script>

      {/* ── NAV ── */}
      <nav id="main-nav" className="nav" aria-label="Navegación principal">
        <span
          style={{
            fontWeight: 600,
            fontSize: "22px",
            color: "#070907",
            letterSpacing: "-0.02em",
          }}
        >
          Kantera.
        </span>
        <a href="#cta" className="btn-pill">
          Hacer el challenge
        </a>
      </nav>

      <main>
        {/* ── SECTION 1: HERO ── */}
        <section className="hero" id="inicio" aria-label="Introducción">
          {/* Text content — left aligned */}
          <div className="hero-content">
            <p
              style={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#1E874C",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: "20px",
              }}
            >
              Para product designers
            </p>
            <h1 className="hero-headline">
              El criterio es
              <br />
              la única señal
              <br />
              que no se fabrica.
            </h1>
            <p
              style={{
                fontWeight: 300,
                fontSize: "20px",
                lineHeight: "32px",
                color: "#070907",
                textAlign: "left",
                textDecoration: "none",
                maxWidth: "550px",
                marginTop: "32px",
                marginBottom: "32px",
              }}
            >
              Los portfolios se optimizan. Los títulos se inflan. El output de
              IA es indistinguible del humano. Lo que sigue siendo escaso es el
              juicio. Kantera lo hace visible.
            </p>
            <div>
              <a href="#cta" className="btn-pill">
                Hacer el challenge
              </a>
            </div>
          </div>

          {/* 3-card stack — Challenge → Evaluation → Verified Signal */}
          <div className="cards-stack" aria-hidden="true">

            {/* Card 1: Challenge Brief */}
            <div className="kcard kcard--1">
              <p style={{ fontSize: "9px", fontWeight: 500, color: "#1E874C", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
                01 — Challenge Brief
              </p>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#070907", lineHeight: "1.4", marginBottom: "16px" }}>
                Rediseña el flujo de onboarding para reducir abandono
              </p>
              <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", marginBottom: "14px" }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ fontSize: "10px", fontWeight: 400, padding: "3px 8px", borderRadius: "4px", background: "#F0F2F0", color: "#555" }}>90 min</span>
                <span style={{ fontSize: "10px", fontWeight: 400, padding: "3px 8px", borderRadius: "4px", background: "#F0F2F0", color: "#555" }}>Intermedio</span>
                <span style={{ fontSize: "10px", fontWeight: 500, padding: "3px 8px", borderRadius: "4px", background: "rgba(30,135,76,0.08)", color: "#1E874C" }}>Decisión de producto</span>
              </div>
            </div>

            {/* Card 2: Evaluation */}
            <div className="kcard kcard--2">
              <p style={{ fontSize: "9px", fontWeight: 500, color: "#1E874C", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "14px" }}>
                02 — Evaluación
              </p>
              {[
                { name: "Definición del problema", score: "88%", width: "88%" },
                { name: "Priorización", score: "72%", width: "72%" },
                { name: "Razonamiento", score: "95%", width: "95%" },
              ].map((c) => (
                <div key={c.name} style={{ marginBottom: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "11px", fontWeight: 400, color: "#333" }}>{c.name}</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "#1E874C" }}>{c.score}</span>
                  </div>
                  <div className="kcard-bar-track">
                    <div style={{ height: "100%", width: c.width, background: "#1E874C", borderRadius: "3px" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Card 3: Verified Signal */}
            <div className="kcard kcard--3">
              <div className="kcard-shimmer" />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "-0.02em" }}>Kantera.</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "9px", fontWeight: 500, color: "#4ED067", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ED067", flexShrink: 0, display: "inline-block" }} />
                  Verificado
                </span>
              </div>
              <div style={{ marginBottom: "18px" }}>
                <div style={{ fontSize: "16px", fontWeight: 500, color: "#FFFFFF", marginBottom: "3px" }}>Sofia Morales</div>
                <div style={{ fontSize: "13px", fontWeight: 400, color: "rgba(255,255,255,0.65)" }}>Product Designer · Cohorte 01</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "9px", fontWeight: 400, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Score</span>
                <span style={{ fontSize: "9px", fontWeight: 600, color: "#4ED067" }}>91 / 100</span>
              </div>
              <div className="kcard-bar-track--dark" style={{ marginBottom: "18px" }}>
                <div style={{ height: "100%", width: "91%", background: "#1E874C", borderRadius: "2px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "1px" }} />
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", width: "74%" }} />
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", width: "52%" }} />
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: THE PIPELINE ── */}
        <section
          id="sistema"
          className="section-pad"
          style={{
            background: "#070907",
            padding: "160px 56px",
            borderTop: "1px solid #1A1C1A",
          }}
        >
          <div className="container">
            <div style={{ maxWidth: "600px", marginBottom: "100px" }}>
              <span className="label">El sistema</span>
              <h2
                style={{
                  fontWeight: 300,
                  fontSize: "48px",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                Un pipeline que transforma criterio en señal.
              </h2>
            </div>

            {/* Pipeline nodes */}
            <div className="pipeline-row">
              {pipelineNodes.map((node, i) => (
                <Fragment key={node.num}>
                  {i > 0 && (
                    <div className="pipeline-connector">→</div>
                  )}
                  <div
                    className={`pipeline-node${i === 0 ? " pipeline-node--first" : ""}`}
                  >
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "11px",
                        color: "#1E874C",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "16px",
                      }}
                    >
                      {node.num}
                    </p>
                    <p
                      style={{
                        fontWeight: 300,
                        fontSize: "32px",
                        color: "#FFFFFF",
                        lineHeight: 1.2,
                        marginBottom: "12px",
                      }}
                    >
                      {node.name}
                    </p>
                    <p
                      style={{
                        fontWeight: 300,
                        fontSize: "14px",
                        color: "#888888",
                        lineHeight: 1.65,
                      }}
                    >
                      {node.desc}
                    </p>
                    <div
                      style={{
                        marginTop: "32px",
                        width: "40px",
                        height: "1px",
                        background: "#1A1C1A",
                      }}
                    />
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Closing statement */}
            <p
              style={{
                fontWeight: 300,
                fontSize: "22px",
                color: "#888888",
                lineHeight: 1.6,
                maxWidth: "700px",
                marginTop: "80px",
              }}
            >
              Kantera no evalúa lo que produces. Evalúa si sabes por qué lo
              produces.
            </p>
          </div>
        </section>

        {/* ── SECTION 3: WHY NOW ── */}
        <section
          id="por-que"
          className="section-pad"
          style={{
            background: "#0F110F",
            padding: "160px 56px",
            borderTop: "1px solid #1A1C1A",
          }}
        >
          <div className="container">
            <div className="why-grid">
              {/* Text column — first in DOM, visually right on desktop */}
              <div className="why-text">
                <span className="label">Por qué ahora</span>
                <h2
                  style={{
                    fontWeight: 300,
                    fontSize: "42px",
                    color: "#FFFFFF",
                    lineHeight: 1.15,
                    marginBottom: "40px",
                  }}
                >
                  El sistema de señal profesional ha colapsado.
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    marginBottom: "48px",
                  }}
                >
                  {truthStatements.map((s) => (
                    <div key={s.title} className="truth-statement">
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: "16px",
                          color: "#FFFFFF",
                          marginBottom: "8px",
                        }}
                      >
                        {s.title}
                      </p>
                      <p
                        style={{
                          fontWeight: 300,
                          fontSize: "14px",
                          color: "#888888",
                          lineHeight: 1.7,
                        }}
                      >
                        {s.body}
                      </p>
                    </div>
                  ))}
                </div>

                <blockquote
                  style={{
                    borderLeft: "2px solid #1E874C",
                    paddingLeft: "20px",
                    margin: 0,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "18px",
                      color: "#FFFFFF",
                      lineHeight: 1.6,
                    }}
                  >
                    "En un mundo donde el output es fácil, el criterio es
                    infraestructura."
                  </p>
                </blockquote>
              </div>

              {/* Image column — second in DOM, visually left on desktop */}
              <div className="why-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=1200&q=85"
                  alt="Professional in deep focus — the kind of thinking Kantera evaluates"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(7,9,7,0.6)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: THE STANDARD ── */}
        <section
          id="estandar"
          className="section-pad"
          style={{
            background: "#070907",
            padding: "160px 56px",
            borderTop: "1px solid #1A1C1A",
          }}
        >
          <div className="container">
            <span className="label">El estándar</span>
            <h2
              style={{
                fontWeight: 300,
                fontSize: "48px",
                color: "#FFFFFF",
                lineHeight: 1.1,
                maxWidth: "600px",
                marginBottom: "100px",
              }}
            >
              Las propiedades que definen la señal Kantera.
            </h2>

            <div className="properties-grid">
              {properties.map((prop) => (
                <div key={prop.label} className="property-col">
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: "11px",
                      color: "#4ED067",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      marginBottom: "24px",
                    }}
                  >
                    {prop.label}
                  </p>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "24px",
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                      marginBottom: "20px",
                    }}
                  >
                    {prop.statement}
                  </p>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#888888",
                      lineHeight: 1.7,
                    }}
                  >
                    {prop.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: CTA FINAL ── */}
        <section
          id="cta"
          className="section-pad"
          style={{
            background: "#17472C",
            padding: "200px 56px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                fontWeight: 400,
                fontSize: "11px",
                color: "#4ED067",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: "32px",
              }}
            >
              Primera cohorte
            </p>
            <h2
              style={{
                fontWeight: 300,
                fontSize: "clamp(40px, 5.5vw, 64px)",
                color: "#FFFFFF",
                lineHeight: 1.08,
                marginBottom: "24px",
              }}
            >
              Los primeros en tener
              <br />
              una{" "}
              <span style={{ fontWeight: 500, color: "#4ED067" }}>señal</span>
              {" "}Kantera.
            </h2>
            <p
              style={{
                fontWeight: 300,
                fontSize: "18px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
                marginBottom: "56px",
              }}
            >
              El challenge está disponible ahora. Sin registro previo.
            </p>
            <a href="#" className="btn-lg">
              Hacer el challenge
            </a>
            <p
              style={{
                fontWeight: 300,
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "24px",
              }}
            >
              Gratis. Para product designers y PMs.
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span
          style={{
            fontWeight: 600,
            fontSize: "17px",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          Kantera.
        </span>
        <span
          className="footer-center"
          style={{
            fontWeight: 300,
            fontSize: "13px",
            color: "#888888",
            textAlign: "center",
          }}
        >
          El estándar de evaluación profesional para la era de la IA.
        </span>
        <span
          style={{
            fontWeight: 300,
            fontSize: "13px",
            color: "#888888",
            flexShrink: 0,
          }}
        >
          © 2026 Kantera
        </span>
      </footer>
    </>
  );
}
