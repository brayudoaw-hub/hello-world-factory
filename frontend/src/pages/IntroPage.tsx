import styles from "./IntroPage.module.css";

export default function IntroPage() {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <header className={styles.hero}>
        <p className={styles.kicker}>Fábrica 100% automatizada</p>
        <h1 className={styles.title}>Fábrica de Software Automatizada</h1>
        <p className={styles.subtitle}>
          Uma linha de producao digital onde agentes de IA criam, revisam e
          entregam software com precisao industrial.
        </p>
        <div className={styles.heroCards}>
          <div className={styles.heroCard}>
            <h3>Operacao sempre ativa</h3>
            <p>Times de agentes trabalham em paralelo, 24/7.</p>
          </div>
          <div className={styles.heroCard}>
            <h3>Escala sob demanda</h3>
            <p>Aloca agentes extras quando o backlog cresce.</p>
          </div>
          <div className={styles.heroCard}>
            <h3>Governanca total</h3>
            <p>Rastreabilidade de decisoes, commits e entregas.</p>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Agentes de IA como especialistas</h2>
            <p>
              Codex, Claude e Brayudo atuam como profissionais digitais focados
              em tarefas especificas: planejar arquitetura, escrever codigo,
              revisar qualidade e documentar entregas. O orquestrador coordena
              cada etapa, garantindo que o fluxo avance sem atrito.
            </p>
          </div>
          <div className={styles.agentGrid}>
            <article className={styles.agentCard}>
              <div className={styles.agentBadge}>Codex</div>
              <h3>Engenharia de producao</h3>
              <p>
                Cria componentes, integra APIs e automatiza rotinas com foco em
                velocidade.
              </p>
            </article>
            <article className={styles.agentCard}>
              <div className={styles.agentBadge}>Claude</div>
              <h3>Revisao e consistencia</h3>
              <p>
                Audita requisitos, valida regras de negocio e reduz riscos antes
                do deploy.
              </p>
            </article>
            <article className={styles.agentCard}>
              <div className={styles.agentBadge}>Brayudo</div>
              <h3>Contexto e documentacao</h3>
              <p>
                Mantem memoria do projeto, escreve guias e acelera onboarding.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Fluxo automatizado de ponta a ponta</h2>
            <p>
              O orquestrador distribui demandas, os agentes executam em paralelo
              e o codigo final e entregue pronto para producao.
            </p>
          </div>
          <div className={styles.flow}>
            <div className={styles.flowNode}>
              <span className={styles.flowLabel}>Orquestrador</span>
              <p>Define prioridades, divide tarefas e monitora.</p>
            </div>
            <div className={styles.flowArrow} aria-hidden="true">
              <span />
            </div>
            <div className={styles.flowNode}>
              <span className={styles.flowLabel}>Agents</span>
              <p>Codex, Claude e Brayudo executam em celulas.</p>
            </div>
            <div className={styles.flowArrow} aria-hidden="true">
              <span />
            </div>
            <div className={styles.flowNode}>
              <span className={styles.flowLabel}>Codigo</span>
              <p>Entrega revisada, testada e documentada.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Beneficios que mudam o jogo</h2>
            <p>
              A fabricacao automatizada reduz gargalos e libera tempo para o que
              importa: evoluir o produto.
            </p>
          </div>
          <div className={styles.benefits}>
            <article className={styles.benefitCard}>
              <h3>Velocidade</h3>
              <p>
                Entregas diarias com pipelines automáticos e sem espera por fila.
              </p>
            </article>
            <article className={styles.benefitCard}>
              <h3>Consistencia</h3>
              <p>
                Padroes de codigo e UX aplicados em cada novo modulo criado.
              </p>
            </article>
            <article className={styles.benefitCard}>
              <h3>Qualidade</h3>
              <p>
                Revisoes continuas, testes automatizados e logging pronto para
                escala.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
