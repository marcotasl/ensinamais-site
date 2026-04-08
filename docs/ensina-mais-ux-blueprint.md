# UX Blueprint — Ensina Mais Turma da Mônica
## Novo Site Institucional + Conversão

> Documento estratégico para redesign do site ensinamais.com.br
> Versão 1.0 — Abril 2026
> Virtus Design para Grupo MoveEdu

---

## 1. Diagnóstico: O Que a Marca Tem na Mão

### 1.1 Ativos de Marca

A Ensina Mais está sentada em cima de uma combinação rara no mercado brasileiro de educação:

**Licenciamento Turma da Mônica.** A marca mais reconhecida do universo infantil brasileiro, com mais de 60 anos de história. Nenhum concorrente direto (Kumon, CCAA Kids, SuperGeeks) tem um ativo de identificação emocional tão forte. Os pais cresceram com a Turma da Mônica — a confiança é herdada.

**Grupo MoveEdu como retaguarda.** Maior franqueadora de educação profissional do Brasil. Infraestrutura de suporte, universidade corporativa, assessoria jurídica, treinamento comercial. O franqueado não está sozinho.

**Modelo de receita recorrente.** Mensalidades, sem estoque, operação enxuta. Rentabilidade de ~40%. Payback de 12–24 meses. Investimento a partir de R$150k. Faturamento médio de R$30k/mês por unidade (até R$360k/ano).

**Demanda estrutural crescente.** O setor de educação cresceu 9% em 2024 (ABF). A procura por apoio escolar na rede Ensina Mais subiu 70% no primeiro trimestre do ano. A pandemia criou um gap de aprendizagem que vai levar anos para ser fechado — especialmente em matemática e leitura. 26,1 milhões de matrículas no ensino fundamental (Censo 2023) é o mercado endereçável.

**100+ escolas operando.** Prova social distribuída pelo Brasil. Histórias reais de franqueados e pais.

### 1.2 O Problema Atual

O site ensinamais.com.br é um Magento e-commerce que tenta ser site institucional, loja e portal ao mesmo tempo. O resultado: não faz nada bem.

Problemas concretos:

- **Arquitetura confusa.** A navegação mistura "cursos" como produtos de e-commerce com páginas institucionais. Botão "Avise-me" em vez de "Matricule-se".
- **Zero funil de conversão.** Não há jornada clara para nenhum público. O formulário de lead compete com carrinho de compras.
- **Performance.** Magento é pesado, carrega lento, JavaScript bloqueante. Core Web Vitals provavelmente abaixo do aceitável.
- **Mobile.** Experiência quebradiça. Menus que não fecham, sliders que travam.
- **SEO fraco.** URLs genéricas (/cursos/apoio-escolar.html), meta descriptions vazias, sem schema markup, sem conteúdo indexável denso.
- **Marca subutilizada.** A Turma da Mônica aparece em banners mas não está integrada à experiência. É decoração, não estratégia.
- **Dois públicos misturados.** Pais buscando curso e investidores buscando franquia chegam no mesmo lugar sem direcionamento.

### 1.3 O Que o Novo Site Precisa Resolver

Três coisas, nessa ordem de prioridade:

1. **Gerar leads de pais** que querem matricular filhos → formulário de aula experimental
2. **Gerar leads de investidores** que querem abrir franquia → formulário de contato franquia
3. **Posicionar a marca** como referência em educação complementar no Brasil → conteúdo, SEO, autoridade

---

## 2. Públicos e Jornadas de Conversão

### 2.1 Persona Primária: Mãe/Pai (decisor de matrícula)

**Quem é:** Mãe ou pai, 28–45 anos, classe B/C+, com filho(a) de 4–15 anos no ensino fundamental. Mora em cidade média ou grande. Preocupado com desempenho escolar ou quer preparar o filho para o futuro.

**Dois perfis:**

| Perfil | Dor | Gatilho | O que busca |
|---|---|---|---|
| **Reativo** | Filho vai mal na escola, notas caindo, cobrança do colégio | "Meu filho está reprovando em matemática" | Resultado rápido, metodologia que funcione, acolhimento |
| **Proativo** | Quer dar vantagem competitiva ao filho (inglês, programação, robótica) | "Quero preparar meu filho pro futuro" | Cursos modernos, tecnologia, diferencial curricular |

**Jornada no site:**

```
Google "reforço escolar [cidade]" ou "aula de robótica para crianças"
    ↓
Landing page de curso ou Homepage
    ↓
Entende a metodologia (individualizada, híbrida, Turma da Mônica)
    ↓
Vê prova social (depoimentos de pais, números)
    ↓
Encontra escola perto de casa
    ↓
Preenche formulário → Aula experimental gratuita
    ↓
Recebe contato da unidade local
```

**KPI:** Taxa de conversão formulário de aula experimental.

### 2.2 Persona Secundária: Investidor/Franqueado

**Quem é:** Empreendedor, 30–55 anos, classe A/B, buscando primeiro negócio ou diversificação. Pode ser ex-executivo, professor/pedagogo querendo empreender, ou investidor de múltiplas franquias.

**Três perfis:**

| Perfil | Motivação | O que precisa ver |
|---|---|---|
| **Educador** | Paixão por educação, quer impacto social + renda | Propósito, metodologia, depoimentos de franqueados educadores |
| **Investidor** | ROI, rentabilidade, segurança | Números (R$150k investimento, 40% rentabilidade, 12–24 meses payback) |
| **Iniciante** | Primeiro negócio, quer segurança e suporte | Suporte MoveEdu, treinamento, acompanhamento, passo a passo |

**Jornada no site:**

```
Google "franquia de educação" ou "franquia barata lucrativa"
    ↓
Landing page Franquia ou seção "Seja um Franqueado"
    ↓
Vê números de investimento, rentabilidade, modelos
    ↓
Lê histórias de franqueados reais
    ↓
Entende o suporte MoveEdu + diferenciais (TM, território exclusivo)
    ↓
Preenche formulário → Receber apresentação comercial
    ↓
Entra no funil de vendas da franqueadora
```

**KPI:** Taxa de conversão formulário de franquia.

### 2.3 Persona Terciária: Aluno/Pai Atual

**Quem é:** Já é cliente. Precisa acessar Portal do Aluno, ver novidades, renovar matrícula.

**Necessidade no site:** Acesso rápido ao Portal do Aluno (link externo), informações de contato da unidade local, blog com conteúdo de apoio.

**KPI:** Retenção / renovação (medida fora do site).

---

## 3. Arquitetura de Conversão

### 3.1 Dois Funis, Uma Marca

O site precisa servir dois funis sem que um atrapalhe o outro:

```
                    ┌─────────────────────┐
                    │     HOMEPAGE         │
                    │  (Ensina Mais é...) │
                    └──────┬──────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
    ┌─────────────────┐      ┌──────────────────┐
    │  FUNIL PAIS     │      │  FUNIL FRANQUIA   │
    │  (B2C)          │      │  (B2B)            │
    ├─────────────────┤      ├──────────────────┤
    │ /cursos         │      │ /franquia         │
    │ /metodologia    │      │ /franquia/modelos │
    │ /escolas        │      │ /franquia/invest. │
    │ /depoimentos    │      │ /franquia/deptos  │
    ├─────────────────┤      ├──────────────────┤
    │ FORMULÁRIO:     │      │ FORMULÁRIO:       │
    │ Aula grátis     │      │ Receber proposta  │
    │ (nome, email,   │      │ (nome, email,     │
    │  cel, cidade)   │      │  cel, cidade,     │
    └─────────────────┘      │  investimento)    │
                             └──────────────────┘
```

### 3.2 Pontos de Conversão no Site

| Ponto | Tipo | Onde aparece | CTA |
|---|---|---|---|
| **Form Aula Grátis** | Lead B2C | Homepage, páginas de curso, flutuante | "Agendar aula experimental" |
| **Form Franquia** | Lead B2B | /franquia, footer, banner contextual | "Receber apresentação" |
| **WhatsApp** | Direct | Botão flutuante global | "Falar com a escola mais perto" |
| **Buscador de Escolas** | Engajamento | /escolas, homepage | "Encontrar escola" |
| **Portal do Aluno** | Retenção | Navbar, footer | "Acessar portal" |
| **Blog CTA** | Nutrição | Fim de cada post | "Conheça nossos cursos" |

### 3.3 Formulário Inteligente (Roteamento)

O formulário principal da homepage deve rotear automaticamente:

- Se o visitante selecionou uma **cidade com unidade** → Lead vai para a unidade local
- Se selecionou **cidade sem unidade** → Lead vai para franqueadora (oportunidade de franquia!)
- Se veio de uma **página de franquia** → Formulário já é de franquia

---

## 4. Sitemap Completo

### 4.1 Estrutura de Páginas

```
/                                    Homepage
│
├── /cursos                          Hub de Cursos
│   ├── /cursos/apoio-escolar        Apoio Escolar (Português + Matemática)
│   ├── /cursos/robotica             Robótica Educacional
│   ├── /cursos/programacao          Programação (Games, Apps, Code)
│   └── /cursos/ingles               Inglês
│
├── /metodologia                     Como Funciona (metodologia Ensina Mais)
│   ├── /metodologia/ensino-individualizado
│   ├── /metodologia/tecnologia-educacional
│   └── /metodologia/turma-da-monica
│
├── /escolas                         Buscador de Escolas (mapa + filtro por cidade/estado)
│   └── /escolas/[slug-cidade]       Página da unidade (endereço, cursos, contato)
│
├── /depoimentos                     Histórias Reais (pais + franqueados)
│
├── /franquia                        Seja um Franqueado (LP de conversão)
│   ├── /franquia/modelos            Modelos Smart e Center
│   ├── /franquia/investimento       Números, ROI, projeções
│   ├── /franquia/suporte            Suporte MoveEdu + treinamento
│   └── /franquia/historias          Histórias de franqueados
│
├── /sobre                           Quem Somos
│   ├── /sobre/missao                Missão, Visão, Valores
│   └── /sobre/moveedu               O Grupo MoveEdu
│
├── /blog                            Blog (conteúdo SEO)
│   ├── /blog/[slug]                 Post individual
│   └── /blog/categoria/[slug]       Categoria (educação, tecnologia, família)
│
├── /contato                         Fale Conosco
│
├── /politica-de-privacidade         LGPD
├── /termos-de-uso                   Termos
│
└── PORTAL EXTERNO
    └── portaldoaluno.ensinamais.com.br
```

### 4.2 Contagem: 18 templates únicos + dinâmicos (blog posts, páginas de escola)

---

## 5. Blueprint por Página

### 5.1 HOMEPAGE — A Porta de Entrada

**Objetivo:** Comunicar a proposta de valor em 5 segundos e direcionar o visitante ao funil correto (pai → aula grátis, investidor → franquia).

**Seções (scroll order):**

| # | Seção | Objetivo | Conteúdo |
|---|---|---|---|
| 1 | **Hero** | Impacto + CTA imediato | Headline: "Aqui, aprender é mais experiência" / Sub: apoio escolar, inglês, robótica, programação + Turma da Mônica / CTA: "Agendar aula grátis" + "Ver cursos" / Visual: composição de fotos de crianças + elementos TM |
| 2 | **Barra de Confiança** | Prova social rápida | Logos: ABF, PEGN, Google Partner, Endeavor, MoveEdu — scroll horizontal |
| 3 | **Formulário de Lead** | Conversão primária | Card flutuante com form inline: nome, email, celular, cidade, escola + "Agendar aula grátis" |
| 4 | **Cursos (Cards)** | Mostrar amplitude | 4 cards com ícone, título, descrição curta, CTA → página do curso. Cores distintas por curso |
| 5 | **Como Funciona** | Explicar a metodologia | 3 steps visuais: (1) Avaliação inicial → (2) Plano individualizado → (3) Acompanhamento contínuo. Imagem de criança estudando |
| 6 | **Números** | Credibilidade quantitativa | Stats animados: 100+ escolas, 12+ anos, 4 cursos, 2.800+ alunos. Background colorido |
| 7 | **Diferenciais** | Convencimento | 6 cards: Ensino individualizado, Aulas digitais, Feedback tempo real, Turma da Mônica, Metodologia comprovada, Profissões do futuro |
| 8 | **Depoimentos** | Prova social qualitativa | 3 cards de pais com foto, quote, nome, cidade, estrelas. Opcionalmente: embed de vídeo |
| 9 | **Buscador de Escolas** | Engajamento local | Input "Digite sua cidade" + mapa do Brasil com pontos. Preview de 3 escolas próximas |
| 10 | **CTA Franquia** | Capturar investidores | Seção com fundo roxo/escuro: "Quer ter sua própria escola?" + stats de investimento + CTA "Seja um franqueado" → /franquia |
| 11 | **Blog Preview** | SEO + autoridade | 3 posts recentes do blog com thumbnail, título, excerpt |
| 12 | **Footer** | Navegação + institucional | Logo, links, contato franqueadora, redes sociais, selos, copyright |

**Elementos persistentes:**
- Navbar sticky (transparente → sólida ao scroll)
- Botão WhatsApp flutuante (canto inferior direito)
- Form de lead repetido como modal ao tentar sair (exit intent)

---

### 5.2 PÁGINA DE CURSO (ex: /cursos/robotica)

**Objetivo:** Convencer o pai de que ESSE curso específico é o que o filho precisa → agendar aula.

**Seções:**

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Hero do Curso** | Título ("Robótica Educacional"), subtítulo, faixa etária (4–15 anos), modalidade (presencial), CTA "Agendar aula grátis" + imagem/ilustração TM |
| 2 | **O que seu filho aprende** | Lista de competências desenvolvidas (raciocínio lógico, criatividade, trabalho em equipe, resolução de problemas) com ícones |
| 3 | **Como funciona o curso** | Trilha visual: módulos/fases do curso, duração, frequência semanal |
| 4 | **Metodologia** | Detalhe do ensino individualizado aplicado a esse curso. Foto de criança + instrutor |
| 5 | **Galeria** | Fotos reais de aulas de robótica (crianças montando, programando) |
| 6 | **Depoimento específico** | Quote de pai/mãe sobre esse curso especificamente |
| 7 | **FAQ do curso** | Accordions: idade mínima, material incluído, duração, pré-requisitos, preço (direcionar para contato) |
| 8 | **CTA Final** | Form de aula grátis inline com contexto ("Agende uma aula de Robótica grátis") |
| 9 | **Cursos relacionados** | Cards dos outros 3 cursos ("Seu filho também pode gostar...") |

**SEO:** Title tag: "Robótica Educacional para Crianças | Ensina Mais Turma da Mônica", H1 otimizado, schema EducationalOrganization + Course.

---

### 5.3 /METODOLOGIA

**Objetivo:** Explicar o diferencial pedagógico para pais que precisam de mais confiança antes de agendar.

**Seções:**

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Hero** | "Uma metodologia que respeita o ritmo do seu filho" + visual de criança com instrutor |
| 2 | **O problema** | Dados sobre educação no Brasil: desempenho em matemática, leitura, gap da pandemia. Contextualizar a dor |
| 3 | **A solução Ensina Mais** | Ensino individualizado (sem turmas), avaliação pré-matrícula, plano personalizado |
| 4 | **Tecnologia + Pedagógico** | Aulas 100% digitais + mediação do instrutor. Mostrar o equilíbrio tech/humano |
| 5 | **Turma da Mônica** | Como o licenciamento funciona: ambiente temático, material didático, identificação da criança |
| 6 | **Resultados** | Métricas de evolução dos alunos (se disponíveis), ou depoimentos de resultado |
| 7 | **CTA** | "Conheça na prática: agende uma aula grátis" |

---

### 5.4 /ESCOLAS (Buscador)

**Objetivo:** Converter visitante em lead local. Encontrar a escola mais perto e agendar.

**Seções:**

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Busca** | Input "Digite sua cidade ou CEP" com autocomplete. Filtros: estado, cidade |
| 2 | **Mapa** | Mapa interativo (Google Maps ou Mapbox) com pins de todas as unidades |
| 3 | **Lista de Resultados** | Cards de escola com: nome, endereço, telefone, cursos disponíveis, foto, CTA "Agendar aula" |
| 4 | **Cidade sem unidade** | Se não encontrar: "Ainda não temos escola em [cidade]. Que tal abrir uma?" → CTA franquia |

**Subpágina /escolas/[slug-cidade]:**
Página individual da unidade com mapa embed, endereço, horários, cursos, fotos, depoimentos locais, form de agendamento pré-preenchido com a cidade.

**SEO Local:** Cada escola gera uma página indexável. Title: "Ensina Mais [Cidade] — Apoio Escolar e Robótica". Schema LocalBusiness.

---

### 5.5 /FRANQUIA (LP de Conversão B2B)

**Objetivo:** Gerar leads qualificados de potenciais franqueados.

**Seções:**

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Hero** | "Invista no futuro da educação" + stats principais (R$150k investimento, 40% rentabilidade, 12–24 meses retorno) + CTA "Receber apresentação" + foto de unidade |
| 2 | **Por que educação** | Dados do mercado: setor cresceu 9% (ABF 2024), R$273B em franquias no Brasil, demanda estrutural por apoio escolar, gap da pandemia |
| 3 | **Por que Ensina Mais** | Diferenciais vs. concorrência: Turma da Mônica, Grupo MoveEdu, receita recorrente, sem estoque, território exclusivo, operação com 3 ambientes |
| 4 | **Modelos de Franquia** | Cards detalhados: Modelo Smart (cidades menores, investimento menor) vs. Modelo Center (cidades maiores, mais cursos) com comparativo |
| 5 | **Números** | Cards com animated counters: investimento, faturamento médio, rentabilidade, payback, capital de giro |
| 6 | **Suporte** | Timeline visual do suporte: pré-abertura (ponto, projeto, seleção) → treinamento → operação (comercial semanal, pedagógico quinzenal, consultor de campo) |
| 7 | **Histórias de Franqueados** | 3–4 depoimentos em vídeo/texto de franqueados reais com nome, cidade, tempo de operação |
| 8 | **Perfil do Franqueado** | Quem a marca procura: educadores, investidores, iniciantes. "Você se encaixa?" |
| 9 | **FAQ Franquia** | Accordions: investimento total, royalties, ponto comercial, formação necessária, exclusividade territorial |
| 10 | **Form de Conversão** | Formulário completo: nome, email, celular, cidade, capital disponível, perfil (educador/investidor/iniciante), mensagem |
| 11 | **Selos** | ABF, PEGN, Endeavor, MoveEdu — credibilidade institucional |

---

### 5.6 /DEPOIMENTOS

**Objetivo:** Prova social consolidada — hub de todas as histórias.

**Seções:**

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Hero** | "Histórias Reais de quem vive a Ensina Mais" |
| 2 | **Filtro** | Tabs: "Pais e Alunos" | "Franqueados" |
| 3 | **Grid de Depoimentos** | Cards com foto, quote, nome, cidade, estrelas. Mix de texto e vídeo embed |
| 4 | **CTA contextual** | Se tab Pais → "Quer viver essa experiência?" → form aula. Se tab Franqueados → "Quer ser o próximo?" → form franquia |

---

### 5.7 /BLOG

**Objetivo:** SEO de cauda longa + nutrição de leads + autoridade.

**Categorias sugeridas:**

| Categoria | Exemplos de Pautas | Público |
|---|---|---|
| **Apoio Escolar** | "Como ajudar seu filho em matemática", "Sinais de que seu filho precisa de reforço" | Pais reativos |
| **Profissões do Futuro** | "Por que ensinar programação para crianças", "Robótica educacional: o que é" | Pais proativos |
| **Educação e Tecnologia** | "Ensino híbrido: como funciona", "Gamificação na educação" | Pais + educadores |
| **Empreendedorismo em Educação** | "Como abrir uma franquia de educação", "Mercado de apoio escolar no Brasil" | Investidores |
| **Família e Desenvolvimento** | "Como lidar com notas baixas", "Importância da leitura na infância" | Pais (topo de funil) |

**Estrutura do post:** Hero image, título, data, autor, corpo, CTA inline no meio, CTA final, posts relacionados, schema Article.

---

### 5.8 /SOBRE

**Objetivo:** Institucional — quem somos, história, propósito.

**Seções:**
- Hero com propósito ("Transformar a educação de base no Brasil")
- Timeline: 2012 fundação → 2017 licenciamento TM → marcos de crescimento → hoje
- Missão, Visão, Valores
- O Grupo MoveEdu (Microlins, Prepara, Yázigi)
- Números consolidados da rede
- CTA: "Conheça nossos cursos" ou "Seja um franqueado"

---

## 6. Componentes Globais

### 6.1 Navbar

```
┌──────────────────────────────────────────────┐
│ [Logo EM + TM]  Cursos ▾  Metodologia  Escolas  │
│                 Depoimentos  Franquia  Blog      │
│                              [Portal do Aluno]   │
│                              [Agendar Aula] ●    │
└──────────────────────────────────────────────┘
```

- Sticky, transparente sobre hero → branca ao scroll
- Dropdown "Cursos" com os 4 cursos
- "Agendar Aula" como CTA principal (amarelo)
- "Portal do Aluno" como link secundário
- Mobile: hamburger com menu full-screen

### 6.2 Footer

```
┌──────────────────────────────────────────────┐
│ Logo + desc.  │  Cursos    │  Institucional  │  Contato        │
│ Redes sociais │  Apoio     │  Franquia       │  (17) 3214-8699 │
│               │  Robótica  │  Portal Aluno   │  sac@moveedu    │
│               │  Program.  │  Sobre Nós      │  Endereço       │
│               │  Inglês    │  Privacidade    │                 │
├──────────────────────────────────────────────┤
│ Selos: ABF │ PEGN │ Google │ Endeavor │ MoveEdu           │
├──────────────────────────────────────────────┤
│ © 2025 Ensina Mais – Turma da Mônica         │ Privacidade │ Termos │
└──────────────────────────────────────────────┘
```

### 6.3 Formulário de Lead (B2C)

Campos: Nome completo*, Email*, Celular* (máscara BR), Cidade* (autocomplete), Escola (select dinâmico baseado na cidade).

Validação: Zod no front, sanitização no back. Celular com regex BR.

Após envio: tela de sucesso com "Entraremos em contato em até 24h" + WhatsApp da unidade.

### 6.4 WhatsApp Flutuante

Botão fixo no canto inferior direito. Ao clicar: abre WhatsApp Web/App com mensagem pré-preenchida "Olá, tenho interesse em cursos da Ensina Mais!". Número: central ou unidade mais próxima (via geolocalização se disponível).

---

## 7. SEO & Performance

### 7.1 Estratégia de SEO

**Head terms (alta competição, brand):**
- "ensina mais" → Homepage
- "ensina mais turma da mônica" → Homepage
- "apoio escolar turma da mônica" → /cursos/apoio-escolar

**Mid-tail (intenção de compra):**
- "reforço escolar [cidade]" → /escolas/[cidade]
- "aula de robótica para crianças [cidade]" → /cursos/robotica + /escolas/[cidade]
- "franquia de educação barata" → /franquia
- "franquia ensina mais valor" → /franquia/investimento

**Long-tail (topo de funil, blog):**
- "como ajudar meu filho em matemática" → blog post
- "robótica educacional o que é" → blog post
- "quanto custa abrir franquia de educação" → blog post
- "melhores franquias de educação 2025" → blog post

### 7.2 Schema Markup

| Página | Schema |
|---|---|
| Homepage | Organization + EducationalOrganization |
| Cursos | Course |
| Escolas | LocalBusiness (por unidade) |
| Franquia | Offer + Organization |
| Blog | Article + BreadcrumbList |
| Depoimentos | Review |

### 7.3 Core Web Vitals Target

| Métrica | Target |
|---|---|
| LCP | < 2.5s |
| FID/INP | < 200ms |
| CLS | < 0.1 |

Next.js + ISR + next/image + next/font garantem isso com margem.

---

## 8. Métricas de Sucesso

### 8.1 KPIs Primários

| KPI | Métrica | Meta Mês 1 | Meta Mês 6 |
|---|---|---|---|
| Leads B2C (aula grátis) | Forms submetidos / mês | Baseline | +50% vs. atual |
| Leads B2B (franquia) | Forms submetidos / mês | Baseline | +30% vs. atual |
| Taxa de conversão B2C | Visits → Form submit | 2% | 4% |
| Taxa de conversão B2B | Visits /franquia → Form | 3% | 6% |

### 8.2 KPIs Secundários

| KPI | Métrica |
|---|---|
| Tráfego orgânico | Sessões vindas de Google / mês |
| Bounce rate homepage | < 45% |
| Páginas por sessão | > 2.5 |
| Tempo na página /franquia | > 3 minutos |
| CTR WhatsApp | Cliques no botão / sessões |
| Blog: posições top 10 | Número de keywords rankeando |

---

## 9. Fases de Implementação

### Fase 1 — MVP (4–6 semanas)
- Homepage
- 4 páginas de curso
- /metodologia
- /franquia (LP completa)
- /contato
- Footer, Navbar, Form de lead, WhatsApp
- SEO on-page básico
- Deploy em Vercel

### Fase 2 — Escolas + Conteúdo (4 semanas)
- /escolas (buscador + mapa)
- Páginas individuais de escola (dinâmicas)
- /depoimentos
- /sobre
- Blog com 10 posts iniciais
- Schema markup completo

### Fase 3 — Otimização (contínuo)
- A/B testing no form de lead (posição, copy, campos)
- Otimização de CTA por página
- Expansão do blog (2 posts/semana)
- Integração com CRM do cliente
- Analytics avançado (funil completo no GA4)
- SEO local para cada escola

---

## 10. Conclusão: O Potencial de Vendas

A Ensina Mais tem todos os ingredientes de uma marca que deveria dominar o segmento de apoio escolar digital no Brasil:

**Marca emocional** (Turma da Mônica) + **Modelo de negócio provado** (franquia rentável) + **Demanda estrutural** (gap educacional brasileiro) + **Retaguarda corporativa** (MoveEdu).

O que falta é um site à altura. O Magento atual é um obstáculo, não um ativo. Cada dia com ele rodando é lead perdido.

O novo site em Next.js, com arquitetura de conversão clara, dois funis bem definidos, SEO robusto e uma experiência visual que honra a identidade da marca, tem potencial para dobrar a geração de leads em 6 meses — tanto de pais quanto de investidores.

A conta é simples: se cada lead B2C vale uma matrícula de ~R$350/mês e cada lead B2B vale um contrato de franquia de R$150k+, o ROI do projeto se paga no primeiro mês de operação.

---

*Documento preparado por Virtus Design para Grupo MoveEdu.*
*Versão 1.0 — Abril 2026.*
