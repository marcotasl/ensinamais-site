# Design Tokens — Ensina Mais (Identidade Real)

> Extraídos da LP oficial da Ensina Mais – Turma da Mônica para implementação no novo site dentro do ecossistema MoveEdu.

---

## 1. Paleta de Cores

### 1.1 Cores Primárias (Blocos Full-Bleed)

| Token | Hex | Uso |
|---|---|---|
| `--em-green` | `#8BC34A` | Hero, fundo principal, identidade primária da marca |
| `--em-green-dark` | `#6EA832` | Hover states do verde, navbar |
| `--em-blue` | `#00AEEF` | Seção "Sobre / Como funciona" |
| `--em-blue-dark` | `#0288D1` | Hover states do azul |
| `--em-coral` | `#EF5350` | Seção de diferenciais, depoimentos |
| `--em-coral-dark` | `#D32F2F` | Hover states do coral |
| `--em-teal` | `#00897B` | Footer, cards de modelos de franquia |
| `--em-teal-dark` | `#00695C` | Hover states do teal |
| `--em-purple` | `#5C6BC0` | Seção de investimento/stats |
| `--em-yellow` | `#FFCC00` | Acentos, badges, ícones |
| `--em-orange` | `#FF9800` | Acentos terciários, ícones de categorias |

### 1.2 Cores de Suporte

| Token | Hex | Uso |
|---|---|---|
| `--em-white` | `#FFFFFF` | Cards, texto sobre fundo colorido, seções neutras |
| `--em-off-white` | `#F5F5F5` | Fundo de seções neutras alternadas |
| `--em-dark` | `#1A2744` | Texto sobre fundos claros |
| `--em-text-light` | `#FFFFFF` | Texto sobre fundos coloridos |
| `--em-text-muted` | `rgba(255,255,255,0.8)` | Texto secundário sobre fundos coloridos |
| `--em-text-body` | `#4A5568` | Texto body em seções brancas |
| `--em-overlay` | `rgba(0,0,0,0.15)` | Overlay sutil sobre imagens |

### 1.3 Lógica de Aplicação

A LP alterna blocos full-bleed de cor em sequência:

```
Verde → Branco (form) → Azul → Coral → Branco (cards) →
Branco (cursos) → Coral (depoimentos) → Roxo (stats) →
Branco (galeria) → Teal (modelos) → Teal escuro (footer)
```

> **Regra:** Cada seção tem UMA cor dominante. Texto é sempre branco sobre fundo colorido, escuro sobre fundo branco. Sem gradientes complexos — cor chapada e saturada.

---

## 2. Tipografia

### 2.1 Observações da LP

| Elemento | Estilo | Peso | Tamanho Estimado |
|---|---|---|---|
| **Hero heading** | Sans-serif arredondada, amigável | Bold (700–800) | ~40–52px |
| **Section heading** | Mesma sans-serif | Bold (700) | ~28–36px |
| **Card title** | Sans-serif | Semi-bold (600) | ~18–20px |
| **Body text** | Sans-serif | Regular (400) | ~14–16px |
| **CTA button** | Sans-serif | Bold (700) | ~14–16px, uppercase ou capitalized |
| **Stats numbers** | Sans-serif | Extra-bold (800) | ~36–48px |
| **Form labels** | Sans-serif | Medium (500) | ~13–14px |
| **Nav links** | Sans-serif | Medium (500) | ~14px |

### 2.2 Stack Tipográfico

A Ensina Mais usa tipografia **100% sans-serif** — sem serifs. O tom é **amigável, arredondado, legível**. Nada editorial, nada sofisticado. Clareza e alegria.

| Função | Fonte | Fallback |
|---|---|---|
| **Headings** | `Nunito` (800, 700) | `Quicksand`, `Poppins` |
| **Body** | `Nunito` (400, 500, 600) | `Open Sans` |

> **Nunito** tem terminais arredondados que combinam com o universo Turma da Mônica. É a fonte mais alinhada com a identidade observada na LP — friendly, rounded, mas profissional.

### 2.3 Escala

```
--font-family:     'Nunito', sans-serif;

--text-xs:    0.75rem;    /* 12px */
--text-sm:    0.875rem;   /* 14px */
--text-base:  1rem;       /* 16px */
--text-lg:    1.125rem;   /* 18px */
--text-xl:    1.25rem;    /* 20px */
--text-2xl:   1.5rem;     /* 24px */
--text-3xl:   1.875rem;   /* 30px */
--text-4xl:   2.25rem;    /* 36px */
--text-5xl:   3rem;       /* 48px */

--weight-regular:    400;
--weight-medium:     500;
--weight-semibold:   600;
--weight-bold:       700;
--weight-extrabold:  800;

--leading-tight:   1.2;
--leading-normal:  1.5;
--leading-relaxed: 1.7;
```

---

## 3. Espaçamento & Layout

### 3.1 Estrutura

| Token | Valor | Nota |
|---|---|---|
| `--container-max` | `1200px` | Conteúdo centralizado |
| `--container-padding` | `20px` (mobile) / `48px` (desktop) | |
| `--section-padding-y` | `60px` (mobile) / `80px` (desktop) | Vertical dentro de cada bloco |
| `--section-gap` | `0px` | Seções são adjacentes, sem gap — blocos de cor se encostam |

### 3.2 Escala de Espaçamento

```
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-8:   32px;
--space-10:  40px;
--space-12:  48px;
--space-16:  64px;
--space-20:  80px;
```

---

## 4. Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, tags |
| `--radius-md` | `12px` | Cards pequenos |
| `--radius-lg` | `16px` | Cards de curso, imagens |
| `--radius-xl` | `20px` | Cards featured |
| `--radius-2xl` | `24px` | Containers de seção com borda |
| `--radius-full` | `9999px` | Botões pill, badges |

> **Padrão:** Tudo arredondado, consistente com o universo infantil. Nenhum canto vivo.

---

## 5. Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-card` | `0 4px 16px rgba(0,0,0,0.10)` | Cards sobre fundo branco |
| `--shadow-card-hover` | `0 8px 28px rgba(0,0,0,0.14)` | Cards ao hover |
| `--shadow-button` | `0 3px 8px rgba(0,0,0,0.15)` | Botões sobre fundos coloridos |
| `--shadow-none` | `none` | Cards sobre fundos coloridos (a cor já separa) |

> **Nota:** Sombras são usadas APENAS em seções brancas. Sobre fundo colorido, os cards são chapados sem shadow.

---

## 6. Componentes

### 6.1 Navbar

| Propriedade | Valor |
|---|---|
| Fundo | `--em-green-dark` (verde escuro) sólido |
| Altura | ~60px |
| Logo | Esquerda — logo Ensina Mais + Turma da Mônica |
| Links | Centro, branco, sans-serif medium |
| CTA | Direita, botão pill com fundo azul escuro/roxo |
| Comportamento | Sticky |

### 6.2 Hero

| Propriedade | Valor |
|---|---|
| Fundo | `--em-green` — verde chapado, full-bleed |
| Layout | Texto à esquerda (50%) + Ilustração Turma da Mônica à direita (50%) |
| Heading | Branco, sans-serif extrabold, ~40–52px |
| Parágrafo | Branco, opacidade 0.85, ~15px |
| CTA | Botão pill verde escuro ou branco com texto escuro |
| Decorativo | Personagens Turma da Mônica (Mônica, Cebolinha, Cascão, Magali) como ilustração grande |

### 6.3 Formulário de Lead

| Propriedade | Valor |
|---|---|
| Posição | Imediatamente abaixo do hero, fundo branco ou verde claro |
| Layout | Horizontal (4 campos + botão) no desktop, empilhado no mobile |
| Inputs | Border-radius 8px, borda cinza clara, padding 12px |
| Botão | Pill, fundo verde `--em-green`, texto branco |
| Sombra | Card shadow leve para destacar do hero |

### 6.4 Seção Colorida (padrão recorrente)

| Propriedade | Valor |
|---|---|
| Fundo | Uma das cores primárias (azul, coral, purple, teal), full-bleed |
| Texto | 100% branco |
| Heading | Sans-serif bold, ~28–36px |
| Layout | Geralmente 2 colunas: texto + imagem/ilustração |
| Imagem | Border-radius 16px, dentro do container |

### 6.5 Cards de Categoria (Cursos)

| Propriedade | Valor |
|---|---|
| Fundo | Branco |
| Borda | Nenhuma — usa shadow |
| Border-radius | 16–20px |
| Ícone | Círculo colorido com ícone branco (cada curso tem sua cor) |
| Título | Sans-serif semibold, cor escura |
| Layout | Grid 2x2 ou 3+1 no desktop |
| Hover | Scale sutil (1.02) + sombra aumentada |

**Cores por curso:**
- Apoio Escolar → Azul `#00AEEF`
- Robótica → Verde `#8BC34A`
- Programação → Laranja `#FF9800`
- Inglês → Coral `#EF5350`

### 6.6 Seção de Stats (Investimento)

| Propriedade | Valor |
|---|---|
| Fundo | `--em-purple` |
| Layout | Grid 2x2 com cards de stat |
| Número | Extrabold, branco, ~36–48px |
| Label | Regular, branco/opacidade 0.8, ~13px |
| Card stat | Sem borda, sem shadow — ícone + número + label |

### 6.7 Depoimentos

| Propriedade | Valor |
|---|---|
| Fundo | `--em-coral` |
| Layout | Cards com vídeo embed ou foto + quote |
| Cards | Fundo branco, border-radius 16px, shadow |
| Texto | Escuro dentro dos cards brancos |

### 6.8 Galeria de Fotos

| Propriedade | Valor |
|---|---|
| Fundo | Branco |
| Layout | Grid de fotos (~3 colunas) com border-radius |
| Imagens | Fotos reais de escolas/unidades |

### 6.9 Cards de Modelo de Franquia

| Propriedade | Valor |
|---|---|
| Fundo card | `--em-teal` |
| Texto | Branco |
| Layout | 2 colunas: "Modelo Smart" e "Modelo Center" |
| Border-radius | 20px |
| Ícone | Badge ou selo no topo do card |

### 6.10 Footer

| Propriedade | Valor |
|---|---|
| Fundo | `--em-teal-dark` (~#00695C) |
| Layout | Multi-coluna: logo, links, redes sociais, selos |
| Texto | Branco / branco com opacidade |
| Selos | ABF, Google Partner, Facebook Partner, PEGN, Endeavor |
| Social | Ícones circulares com borda branca |

### 6.11 Botões

| Variante | Fundo | Texto | Radius | Padding |
|---|---|---|---|---|
| **Primary** | `--em-green` | Branco | `9999px` | `14px 32px` |
| **Secondary** | `#FFFFFF` | `--em-green` | `9999px` | `14px 32px` |
| **CTA Escuro** | `--em-dark` | Branco | `9999px` | `14px 32px` |
| **Outline** | Transparente | Branco | `9999px` | `12px 28px`, borda 2px branca |

> Botões sempre pill (full radius). Sem ícone de seta — diferente da ref. TriVision. Texto pode ser uppercase ou capitalize.

---

## 7. Anatomia da Página

```
┌──────────────────────────────────────────┐
│  NAVBAR (verde escuro, sticky)           │
│  Logo EM + TM | Links | CTA Franquia     │
├══════════════════════════════════════════╡ ← Full-bleed verde
│  HERO                                    │
│  Texto branco + CTA    │  Turma da       │
│  à esquerda            │  Mônica (ilust.) │
├══════════════════════════════════════════╡ ← Branco/verde claro
│  FORMULÁRIO DE LEAD (horizontal)         │
│  Nome | Email | Cel | Cidade | [Enviar]  │
├══════════════════════════════════════════╡ ← Full-bleed azul
│  COMO FUNCIONA / SOBRE                   │
│  Texto + foto de criança estudando       │
├══════════════════════════════════════════╡ ← Full-bleed coral
│  MOTIVOS / DIFERENCIAIS                  │
│  Ícones + texto — por que escolher EM    │
├══════════════════════════════════════════╡ ← Branco
│  CATEGORIAS DE CURSOS (cards grid)       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│  │Apoio │ │Robot.│ │Progr.│ │Inglês│    │
│  └──────┘ └──────┘ └──────┘ └──────┘    │
├══════════════════════════════════════════╡ ← Branco
│  CURSOS DETALHADOS                       │
│  Cards com descrição + ilustração TM     │
├══════════════════════════════════════════╡ ← Full-bleed coral
│  DEPOIMENTOS (vídeos/quotes)             │
├══════════════════════════════════════════╡ ← Full-bleed roxo
│  INVESTIMENTO / STATS                    │
│  R$90k | 30-40% | 12 meses | R$50k      │
├══════════════════════════════════════════╡ ← Branco
│  GALERIA DE FOTOS (escolas reais)        │
├══════════════════════════════════════════╡ ← Full-bleed teal
│  MODELOS DE FRANQUIA                     │
│  [Smart] [Center]                        │
├══════════════════════════════════════════╡ ← Teal escuro
│  FOOTER                                  │
│  Logo | Links | Social | Selos | ©       │
└──────────────────────────────────────────┘
```

---

## 8. Princípios de Design (Identidade Ensina Mais)

1. **Cor Chapada, Saturada, Full-Bleed** — Cada seção é um bloco sólido de cor. Sem gradientes sutis, sem off-whites. Cor vibrante e direta.

2. **100% Sans-Serif** — Tipografia arredondada e amigável. Nunito ou similar. Nada de serifs editoriais.

3. **Turma da Mônica como Protagonista Visual** — Os personagens aparecem no hero e em seções-chave. São o diferencial visual da marca.

4. **Texto Branco sobre Cor** — A legibilidade vem do contraste alto entre texto branco e fundos saturados. Nada de texto cinza.

5. **Zero Gap entre Seções** — Os blocos de cor se encostam. Não há espaço branco entre seções coloridas.

6. **Cards Brancos sobre Fundo Branco** — Nas seções neutras, cards se destacam por shadow. Nas seções coloridas, cards brancos flutuam.

7. **Lúdico e Acessível** — O tom visual é alegre, energético, confiável. Fala com pais, mas remete ao universo infantil.

8. **Franchise-First** — A LP tem forte ênfase em conversão de franqueados (stats de investimento, modelos, ROI). Isso diferencia do site institucional.
