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
- RD Station Conversion API para registrar o lead, curso, unidade, campanha e
  UTMs.

As credenciais Basic Auth da MoveEdu ficam exclusivamente no servidor:

```dotenv
MOVEEDU_API_USERNAME=
MOVEEDU_API_PASSWORD=
```

No deploy da Vercel, configure essas duas variáveis nos ambientes desejados. O
token público e o identificador oficial do RD possuem os mesmos valores de
fallback usados pelo site oficial, mas também podem ser sobrescritos pelas
variáveis documentadas em `.env.example`.

O código da campanha cadastrada no HUB deve ser configurado no servidor para
preencher o campo `codigo_campanha_sistema` do RD:

```dotenv
RD_STATION_CAMPAIGN_CODE=428
```

## Verificação

```bash
npm run lint
npm run build
```
