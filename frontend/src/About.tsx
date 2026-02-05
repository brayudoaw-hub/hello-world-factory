import React from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #fff6e5 0%, #f0eee6 30%, #e6ebe7 100%)",
    fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
    color: "#111111",
    position: "relative",
    overflow: "hidden",
  },
  backgroundAccent: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  blobPrimary: {
    position: "absolute",
    width: "520px",
    height: "520px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 174, 64, 0.45) 0%, rgba(255, 174, 64, 0) 70%)",
    top: "-140px",
    right: "-120px",
    animation: "floatOne 16s ease-in-out infinite",
  },
  blobSecondary: {
    position: "absolute",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(30, 138, 122, 0.35) 0%, rgba(30, 138, 122, 0) 70%)",
    bottom: "-160px",
    left: "-120px",
    animation: "floatTwo 18s ease-in-out infinite",
  },
  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "72px 24px 96px",
    display: "flex",
    flexDirection: "column",
    gap: "48px",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  overline: {
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#1e8a7a",
  },
  title: {
    fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
    fontWeight: 700,
    lineHeight: 1.05,
    margin: 0,
  },
  subtitle: {
    fontSize: "1.1rem",
    maxWidth: "640px",
    lineHeight: 1.6,
    margin: 0,
    color: "#2f2f2f",
  },
  heroPanel: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "8px",
  },
  statCard: {
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "18px",
    padding: "18px",
    boxShadow: "0 10px 30px rgba(17, 17, 17, 0.08)",
    border: "1px solid rgba(17, 17, 17, 0.08)",
  },
  statLabel: {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#4a4a4a",
    marginBottom: "8px",
  },
  statValue: {
    fontSize: "1.4rem",
    fontWeight: 700,
    margin: 0,
  },
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.88)",
    borderRadius: "20px",
    padding: "24px",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    boxShadow: "0 16px 40px rgba(17, 17, 17, 0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    margin: 0,
  },
  cardText: {
    fontSize: "0.98rem",
    lineHeight: 1.6,
    margin: 0,
    color: "#2f2f2f",
  },
  timeline: {
    display: "grid",
    gap: "14px",
  },
  timelineItem: {
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
    background: "rgba(17, 17, 17, 0.04)",
    borderRadius: "14px",
    padding: "14px 16px",
  },
  timelineDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#ff8a00",
    marginTop: "6px",
    boxShadow: "0 0 0 4px rgba(255, 138, 0, 0.2)",
    flexShrink: 0,
  },
  timelineText: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.5,
    color: "#2f2f2f",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    fontSize: "0.9rem",
    color: "#4a4a4a",
  },
} satisfies Record<string, React.CSSProperties>;

const stats = [
  { label: "Operacao integrada", value: "Planejamento ao deploy" },
  { label: "Especialidades", value: "Produto, IA, automacao" },
  { label: "Atuacao", value: "Industria 4.0" },
];

const pillars = [
  {
    title: "Identidade",
    text:
      "A Brayudo Systems Factory e uma fabrica de sistemas que combina engenharia, design e automacao para acelerar a criacao de produtos digitais com impacto industrial.",
  },
  {
    title: "Missao",
    text:
      "Transformar desafios operacionais em plataformas confiaveis, escalaveis e observaveis, conectando dados, pessoas e processos.",
  },
  {
    title: "Como trabalhamos",
    text:
      "Times multidisciplinares entregam em ciclos curtos, com foco em seguranca, rastreabilidade e melhoria continua em cada release.",
  },
];

const capabilities = [
  {
    title: "Automacao inteligente",
    text: "Orquestracao de fluxos com IA aplicada, integracoes e robos de tarefas.",
  },
  {
    title: "Plataformas industriais",
    text: "Solucoes de MES, digital twins e paines de operacao para linhas criticas.",
  },
  {
    title: "Experiencia operacional",
    text: "Interfaces pensadas para equipes no chao de fabrica e supervisao remota.",
  },
  {
    title: "Confiabilidade",
    text: "Observabilidade, alertas e resiliencia como padrao de entrega.",
  },
];

const journey = [
  "Diagnostico profundo dos processos e dados existentes.",
  "Arquitetura de sistemas com foco em seguranca e disponibilidade.",
  "Prototipos validados com usuarios de operacao.",
  "Deploy continuo e governanca para evolucao sustentavel.",
];

export default function About() {
  return (
    <div style={styles.page}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
        @keyframes floatOne { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(18px); } }
        @keyframes floatTwo { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-22px); } }
        `}
      </style>
      <div style={styles.backgroundAccent} aria-hidden>
        <div style={styles.blobPrimary} />
        <div style={styles.blobSecondary} />
      </div>

      <main style={styles.container}>
        <header style={styles.hero}>
          <span style={styles.overline}>Sobre nos</span>
          <h1 style={styles.title}>Brayudo Systems Factory</h1>
          <p style={styles.subtitle}>
            Criamos sistemas que conectam estrategia, engenharia e operacao. Atuamos como uma fabrica de
            produtos digitais para a industria, com foco em previsibilidade, dados em tempo real e entrega
            rapida de valor.
          </p>
          <div style={styles.heroPanel}>
            {stats.map((stat) => (
              <div key={stat.label} style={styles.statCard}>
                <div style={styles.statLabel}>{stat.label}</div>
                <p style={styles.statValue}>{stat.value}</p>
              </div>
            ))}
          </div>
        </header>

        <section style={styles.section}>
          {pillars.map((pillar) => (
            <article key={pillar.title} style={styles.card}>
              <h2 style={styles.cardTitle}>{pillar.title}</h2>
              <p style={styles.cardText}>{pillar.text}</p>
            </article>
          ))}
        </section>

        <section style={styles.section}>
          {capabilities.map((capability) => (
            <article key={capability.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{capability.title}</h3>
              <p style={styles.cardText}>{capability.text}</p>
            </article>
          ))}
        </section>

        <section style={styles.card}>
          <h3 style={styles.cardTitle}>Jornada de entrega</h3>
          <div style={styles.timeline}>
            {journey.map((item) => (
              <div key={item} style={styles.timelineItem}>
                <span style={styles.timelineDot} />
                <p style={styles.timelineText}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <footer style={styles.footer}>
          <span>Brayudo Systems Factory · Engenharia aplicada ao chao de fabrica</span>
          <span>Contato: parcerias@brayudo.systems</span>
        </footer>
      </main>
    </div>
  );
}
