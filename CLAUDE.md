# CLAUDE.md — Ensina Mais Landing Page (Redesign)

## Contexto do Projeto

Estamos redesenhando a landing page da **Ensina Mais – Turma da Mônica**, marca do grupo **MoveEdu**. A Ensina Mais é uma rede de franquias de apoio escolar com licenciamento da Turma da Mônica, com +100 escolas no Brasil.

O site atual (ensinamais.com.br) roda em WordPress/Magento e está desatualizado. O redesign será implementado em **Next.js** (App Router) como parte de um projeto maior de migração digital das marcas MoveEdu (Microlins, Prepara, Yázigi).

A agência responsável é a **Virtus Design** (virtusdesign.com.br).

## Arquivos de Referência

- `docs/ensina-mais-design-tokens-v2.md` — Design tokens extraídos da identidade visual da marca (paleta, tipografia, espaçamento, componentes, anatomia da página)
- `docs/ensina-mais-landing-v3.jsx` — Protótipo React funcional da landing page (componentes, dados, layout, animações). Usar como base para os componentes Next.js.

**Leia ambos os arquivos antes de qualquer implementação.**

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS 3.4+ |
| Fontes | `next/font/google` → Nunito (400–900) |
| Ícones | lucide-react |
| Animações | framer-motion (scroll-triggered, counters, page transitions) |
| Formulários | react-hook-form + zod |
| Imagens | next/image com placeholder blur |
| Deploy | Vercel (ou AWS Amplify, a definir com cliente) |
| CMS | A definir — provavelmente Payload CMS (já usado em outros projetos Virtus) |

## Paleta de Cores (Tailwind Config)

```js
// tailwind.config.ts → theme.extend.colors
colors: {
  em: {
    green: { DEFAULT: '#7CB342', dark: '#5A8A2A', light: '#C5E1A5', pale: '#F1F8E9' },
    blue: { DEFAULT: '#039BE5', dark: '#0277BD', light: '#B3E5FC', pale: '#E1F5FE' },
    coral: { DEFAULT: '#EF5350', dark: '#C62828', light: '#FFCDD2', pale: '#FFEBEE' },
    purple: { DEFAULT: '#5C6BC0', dark: '#3949AB', light: '#C5CAE9' },
    teal: { DEFAULT: '#00897B', dark: '#00695C' },
    yellow: { DEFAULT: '#FDD835', dark: '#F9A825' },
    orange: { DEFAULT: '#FF9800' },
    dark: { DEFAULT: '#1A2744', soft: '#2D3A4F' },
  }
}
```

## Tipografia

Uma única família: **Nunito** (sans-serif, arredondada). Importar via `next/font/google`:

```ts
import { Nunito } from 'next/font/google';
const nunito = Nunito({ subsets: ['latin'], weight: ['400','500','600','700','800','900'] });
```

Pesos usados:
- 400 → body text
- 500 → labels, captions
- 600 → subheadings, links
- 700 → card titles, nav
- 800 → section headings, CTAs
- 900 → hero heading, stats numbers

## Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx              # Root layout (font, metadata, analytics)
│   ├── page.tsx                # Landing page principal (compõe as sections)
│   ├── globals.css             # Tailwind directives + custom utilities
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Wave.tsx            # SVG wave divider reutilizável
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── LeadForm.tsx
│   │   ├── About.tsx
│   │   ├── Reasons.tsx         # Diferenciais (6 cards)
│   │   ├── Courses.tsx         # Tab switcher de cursos
│   │   ├── Testimonials.tsx
│   │   ├── Stats.tsx           # Franquia / investimento
│   │   ├── SchoolsGallery.tsx
│   │   └── TrustBar.tsx
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── FadeIn.tsx          # Wrapper scroll-triggered (framer-motion)
│   │   ├── Counter.tsx         # Animated number counter
│   │   ├── Blob.tsx            # Decorative blur blob
│   │   └── DotGrid.tsx         # Decorative dot pattern
│   └── forms/
│       └── LeadCaptureForm.tsx # react-hook-form + zod validation
├── lib/
│   ├── constants.ts            # Dados estáticos (cursos, stats, testimonials, reasons)
│   └── utils.ts                # cn() helper, formatters
├── types/
│   └── index.ts                # Interfaces TypeScript
└── public/
    ├── images/
    │   ├── hero/               # Fotos do hero (crianças, escola)
    │   ├── courses/            # Fotos por curso
    │   ├── schools/            # Fotos de unidades reais
    │   └── turma-da-monica/    # Assets licenciados TM (receber do cliente)
    └── icons/                  # Favicons, touch icons
docs/
├── ensina-mais-design-tokens-v2.md
└── ensina-mais-landing-v3.jsx
```

## Componentes-Chave — Notas de Implementação

### Navbar
- Sticky com `backdrop-blur` no scroll
- Transparente sobre o hero (texto branco), sólida após scroll (texto escuro)
- Logo: ícone GraduationCap + "Ensina Mais" / "Turma da Mônica" em 2 linhas
- CTA amarelo "Agendar aula" sempre visível
- Mobile: hamburger menu com sheet/drawer

### Hero
- Background: gradient verde `from-em-green-dark via-em-green to-[#8BC34A]`
- Grid 2 colunas: texto + composição de imagens
- Imagem principal com rounded corners, gradient overlay, badges sobrepostos
- Imagem secundária flutuante (offset negativo, borda branca)
- Badge "Turma da Mônica" rotacionado (transform rotate-6)
- Mini-stats no rodapé (100+ Escolas | 12+ Anos | 4 Cursos)
- Wave SVG no bottom transitando para branco
- Blobs decorativos e DotGrid em background

### LeadForm
- Card flutuando (-mt no CSS), shadow forte
- Barra gradient multicolorida (4px) no topo do card
- 4 inputs em grid + botão full-width abaixo
- Validação: nome (required), email (email format), celular (pattern BR), cidade (required)
- Submit: integrar com API do cliente ou webhook (a definir)
- Focus states: ring na cor verde, fundo branco

### Courses (Tab Switcher)
- 4 botões de curso no topo (tab selector)
- Ao clicar, muda o card grande abaixo com animação (framer-motion AnimatePresence)
- Card: imagem com gradient overlay na cor do curso + área de texto com ícone, heading, descrição, checklist, CTA
- Cada curso tem cor própria (azul, verde, laranja, coral)

### Stats (Franquia)
- Background: gradient purple
- 4 cards com glassmorphism (bg-white/8, backdrop-blur)
- Números com animated counter (framer-motion useInView + useMotionValue)
- CTA amarelo "Quero ser um franqueado"

### Wave Divider
- Componente reutilizável: `<Wave color="..." flip={boolean} height={number} />`
- SVG com path curvo, `preserveAspectRatio="none"`
- Usado entre TODAS as seções coloridas para transição suave

### FadeIn
- Wrapper com framer-motion `motion.div`
- Props: `delay`, `y` (offset inicial), `duration`
- Trigger: `whileInView` com `viewport={{ once: true, margin: "-50px" }}`

## Dados Estáticos (lib/constants.ts)

Todos os dados da landing estão hardcoded no protótipo JSX. Extrair para `constants.ts` como arrays tipados:

- `COURSES` — 4 cursos (icon, title, desc, color, light, img)
- `REASONS` — 6 diferenciais (icon, title, desc)
- `STATS` — 4 métricas de franquia (icon, number, prefix, suffix, label)
- `TESTIMONIALS` — 3 depoimentos (quote, name, city, img, stars)
- `NAV_LINKS` — links do navbar
- `FOOTER_LINKS` — links agrupados por coluna

## Responsividade

3 breakpoints:
- **Desktop** (>900px): grids completos, navbar com links
- **Tablet** (560–900px): grids 2 colunas, navbar com hamburger
- **Mobile** (<560px): grids 1 coluna, form empilhado

O protótipo JSX usa media queries inline. No Next.js, usar classes responsivas do Tailwind (`md:`, `lg:`).

## SEO & Performance

- Metadata via `generateMetadata()` no layout
- Open Graph e Twitter cards configurados
- `next/image` com `priority` no hero, `loading="lazy"` no resto
- Fonte Nunito via `next/font` (sem CLS, sem FOUT)
- Preconnect para domínio de imagens externas
- Schema.org: Organization + EducationalOrganization

## O que NÃO implementar agora

- Blog / conteúdo editorial (fase 2)
- Buscador de escolas por CEP/cidade (precisa API do cliente)
- Integração com e-commerce Magento (manter separado)
- Portal do Aluno (sistema externo)
- Chat widget / WhatsApp flutuante (adicionar depois)
- Personagens Turma da Mônica renderizados (aguardar assets licenciados)

## Convenções de Código

- **Componentes**: PascalCase, um por arquivo
- **Arquivos**: kebab-case para utils, PascalCase para componentes
- **CSS**: Tailwind utility-first. Evitar `@apply` exceto para base styles
- **Imports**: Ordem — React → Next → libs externas → componentes → types → utils
- **Comments**: Português para contexto de negócio, inglês para comentários técnicos

## Comandos

```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Production build
npm run lint       # ESLint
npm run type-check # TypeScript check
```
