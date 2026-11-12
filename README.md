# Ensina Mais

Site institucional da Ensina Mais, desenvolvido em Next.js.

## Desenvolvimento

Instale as dependências, copie as variáveis de `.env.example` para `.env.local`
e execute:

```bash
npm run dev
```

## Formulários e integrações

Os formulários de aula experimental usam:

- MoveEdu, com `marca=ensina-mais` e `modalidade=presencial`, para carregar
  estado, cidade e unidade;
- a API da MoveEdu (`POST /api/hubspot/novo`) para registrar o lead no HubSpot,
  com os mesmos campos do plugin de formulários usado em Prepara e Microlins;
- RD Station Conversion API em paralelo, mantida temporariamente até 15/11. O
  resultado do RD não altera a resposta ao visitante.

As credenciais Basic Auth da MoveEdu ficam exclusivamente no servidor e são as
mesmas da API de unidades e do envio de leads ao HubSpot:

```dotenv
MOVEEDU_API_USERNAME=
MOVEEDU_API_PASSWORD=
```

No deploy da Vercel, configure essas duas variáveis nos ambientes desejados. O
token público e o identificador oficial do RD possuem os mesmos valores de
fallback usados pelo site oficial, mas também podem ser sobrescritos pelas
variáveis documentadas em `.env.example`.

O código da campanha cadastrada no HUB deve ser configurado no servidor para
preencher `codigo_campanha_sistema` no RD e `codigo_campanha` no HubSpot:

```dotenv
RD_STATION_CAMPAIGN_CODE=428
```

## Verificação

```bash
npm test
npx tsc --noEmit
npm run lint
npm run build
```
