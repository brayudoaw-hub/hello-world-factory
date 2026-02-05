# Arquitetura - Hello World Factory

## 1. Stack Tecnologica

### Frontend
| Tecnologia | Versao | Funcao |
|---|---|---|
| React | 18.2.0 | Biblioteca de UI (componentes) |
| TypeScript | 5.9.3 | Tipagem estatica |
| Vite | 5.0.0 | Build tool e dev server |
| React Router DOM | 7.13.0 | Roteamento SPA |

### Backend
| Tecnologia | Versao | Funcao |
|---|---|---|
| Node.js | 18 (Alpine) | Runtime JavaScript |
| Express | 4.18.2 | Framework HTTP |
| CORS | 2.8.5 | Middleware cross-origin |
| Nodemon | 3.0.0 | Hot-reload em dev |

### Infraestrutura
| Tecnologia | Funcao |
|---|---|
| Docker | Containerizacao dos servicos |
| Docker Compose | Orquestracao local |
| Railway | Deploy em producao |

---

## 2. Estrutura de Pastas

```
hello-world-factory/
├── backend/
│   ├── Dockerfile              # Imagem Docker do backend
│   ├── railway.json            # Config de deploy Railway
│   ├── package.json            # Dependencias e scripts
│   ├── server.js               # Servidor Express (entry point)
│   └── README.md
│
├── frontend/
│   ├── Dockerfile              # Imagem Docker do frontend
│   ├── railway.json            # Config de deploy Railway
│   ├── package.json            # Dependencias e scripts
│   ├── tsconfig.json           # Configuracao TypeScript
│   ├── vite.config.ts          # Configuracao Vite
│   ├── index.html              # HTML entry point
│   └── src/
│       ├── main.tsx            # Bootstrap React (ReactDOM.createRoot)
│       ├── App.tsx             # Componente raiz (router wrapper)
│       ├── About.tsx           # Landing page principal
│       └── vite-env.d.ts       # Tipos do Vite
│
├── docker-compose.yml          # Orquestracao local (frontend + backend)
└── ARCHITECTURE.md             # Este documento
```

---

## 3. Componentes Principais

### 3.1 Backend - API REST (Express)

**Arquivo:** `backend/server.js`

| Endpoint | Metodo | Descricao |
|---|---|---|
| `/hello` | GET | Retorna greeting com timestamp e status |
| `/health` | GET | Health check para monitoramento |

- Escuta na porta `3001` em `0.0.0.0`
- CORS habilitado para aceitar requests cross-origin
- Respostas em JSON

### 3.2 Frontend - SPA React

**Entry point:** `frontend/src/main.tsx`

```
index.html
  └── main.tsx          (bootstrap React)
        └── App.tsx     (componente raiz)
              └── About.tsx   (landing page)
```

**About.tsx** - Componente principal (~280 linhas):
- Hero section com titulo "Brayudo Systems Factory"
- Cards de estatisticas (Operacao, Especialidades, Atuacao)
- Secao de pilares (Identidade, Missao, Como trabalhamos)
- Secao de capacidades (Automacao, Plataformas, Experiencia, Confiabilidade)
- Timeline de jornada de entrega (4 etapas)
- Estilizacao inline com CSS-in-JS
- Animacoes de fundo (blobs flutuantes)
- Fonte: Space Grotesk (Google Fonts)

### 3.3 Containerizacao

**docker-compose.yml** orquestra dois servicos:

| Servico | Porta | Comando | Volumes |
|---|---|---|---|
| `backend` | 3001 | `npm run dev` | `./backend:/app` |
| `frontend` | 5173 | `npm run dev -- --host` | `./frontend:/app` |

- Frontend depende do backend (`depends_on`)
- Variavel `VITE_API_URL` injeta URL da API no frontend
- Volumes montados para hot-reload em desenvolvimento

---

## 4. Integracoes

### 4.1 Frontend <-> Backend

```
Browser ──→ Frontend (React/Vite :5173)
                │
                │  HTTP GET (fetch/axios)
                ▼
            Backend API (Express :3001)
                │
                ▼
          JSON Response
```

- Comunicacao via REST API sobre HTTP
- URL da API configurada via `VITE_API_URL` (variavel de ambiente)
- CORS habilitado no backend para permitir requests do frontend

### 4.2 Deploy - Railway

Cada servico possui seu proprio `railway.json`:

**Backend:**
- Builder: Dockerfile
- Start: `npm start`
- Health check: GET `/health` (timeout 100ms)
- Restart: on_failure (max 10 retries)

**Frontend:**
- Builder: Dockerfile
- Start: `npm run preview` (build otimizado servido pelo Vite)
- Restart: on_failure

### 4.3 Desenvolvimento Local

```bash
# Subir todos os servicos
docker-compose up

# Ou individualmente
cd backend && npm run dev    # porta 3001
cd frontend && npm run dev   # porta 5173
```

---

## 5. Fluxo de Dados

```
┌─────────────────────────────────────────────────┐
│                    Browser                       │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │         Frontend (React + Vite)            │  │
│  │                                            │  │
│  │  index.html → main.tsx → App.tsx → About   │  │
│  │                                            │  │
│  │  Porta: 5173                               │  │
│  └──────────────────┬─────────────────────────┘  │
│                     │                            │
└─────────────────────┼────────────────────────────┘
                      │ VITE_API_URL
                      ▼
┌─────────────────────────────────────────────────┐
│            Backend (Express.js)                  │
│                                                  │
│  GET /hello   → { message, timestamp, status }   │
│  GET /health  → { status: "healthy" }            │
│                                                  │
│  Porta: 3001                                     │
└─────────────────────────────────────────────────┘
```

---

## 6. Decisoes Arquiteturais

| Decisao | Justificativa |
|---|---|
| Monorepo com pastas separadas | Simplicidade para projeto pequeno, deploy independente via Railway |
| TypeScript no frontend | Tipagem estatica, autocompletion, menos bugs em runtime |
| JavaScript no backend | Simplicidade para API minima com 2 endpoints |
| Vite como build tool | HMR rapido, build otimizado, configuracao minima |
| Docker por servico | Isolamento, reprodutibilidade, deploy consistente |
| Inline styles (CSS-in-JS) | Componente auto-contido, sem dependencia de CSS externo |
| Railway para deploy | PaaS com suporte nativo a Docker, health checks, auto-restart |

---

## 7. Pontos de Evolucao

Areas identificadas para crescimento futuro:

- **Roteamento**: React Router DOM instalado mas sem rotas definidas alem da pagina About
- **State management**: Sem gerenciamento de estado global (adequado para escopo atual)
- **Testes**: Sem framework de testes configurado (considerar Vitest para frontend, Jest para backend)
- **CI/CD**: Sem pipeline de integracao continua (GitHub Actions seria uma opcao natural)
- **Banco de dados**: Backend stateless, sem persistencia de dados
- **Variaveis de ambiente**: `.env` nao configurado formalmente (apenas via docker-compose)
- **Linting/Formatting**: Sem ESLint ou Prettier configurados
