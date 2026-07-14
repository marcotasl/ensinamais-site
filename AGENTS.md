<!-- VIRTUS GPT HARNESS:START -->
# Virtus GPT Harness

## Papel do agente principal

- Atue como orquestrador: entenda o pedido, reúna evidências, defina a solução, delegue implementação delimitada, revise os resultados e faça a verificação final.
- Preserve mudanças preexistentes e não relacionadas. Nunca use comandos destrutivos para limpar o worktree sem autorização explícita.
- Consulte o `CLAUDE.md` do repositório quando existir: ele continua sendo fonte válida de contexto do projeto. Em conflito operacional, estas regras e o `AGENTS.md` mais próximo prevalecem para o Codex.

## Delegação

- Delegue trabalho independente quando isso reduzir tempo ou poluição de contexto.
- Prefira agentes read-only para exploração, pesquisa e revisão.
- Dê a cada worker uma spec com objetivo, escopo de leitura/escrita, restrições, critérios de aceitação e comandos de verificação.
- Não execute escritas paralelas nos mesmos arquivos nem paralelize etapas com dependência real.
- O agente principal integra, verifica e reporta; o worker não amplia a própria spec.

## Roteamento

- `explorer`: mapear código e reunir evidências, sem editar.
- `worker`: implementar uma spec fechada.
- `reviewer`: revisar correção, regressões, segurança e testes, sem editar.
- `advisor`: usar GPT-5.6 Sol somente para forks de arquitetura, contratos, segurança, persistência, migrações difíceis de reverter ou ambiguidades materiais.
- Não chamar o advisor para nomes, formatação, lint ou escolhas equivalentes.

## Escalação do worker

Se encontrar fork de arquitetura, ambiguidade real de requisito ou ação irreversível não coberta pela spec, pare antes de editar essa parte e devolva `ESCALATION_REQUEST` com:

- pergunta de decisão;
- opções viáveis;
- evidências locais;
- impacto de cada opção;
- recomendação provisória, se houver.

O agente principal consulta o `advisor` e retoma o trabalho com a decisão. Trivialidades devem ser decididas pelo worker e anotadas no relatório.

## Qualidade e conclusão

- Aplique KISS, DRY depois da segunda repetição real, YAGNI, separação de responsabilidades e organização por feature.
- Antes de concluir uma tarefa com mudanças de código, invoque `$simplify` sobre o diff da tarefa.
- Execute verificações proporcionais ao risco. Para projetos Next, respeite os comandos definidos no `AGENTS.md`, `CLAUDE.md` e `package.json` locais.
- Não declare sucesso sem informar as verificações executadas e seus resultados.
- Ao final, registre aprendizados reutilizáveis apenas quando forem não óbvios e realmente úteis em sessões futuras.
<!-- VIRTUS GPT HARNESS:END -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
