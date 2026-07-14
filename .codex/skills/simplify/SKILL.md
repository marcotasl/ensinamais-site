---
name: simplify
description: Revisa o diff de uma tarefa de código para reduzir complexidade e melhorar reuso, qualidade e eficiência sem ampliar o escopo. Use antes de reportar como concluída qualquer tarefa que edite código nos projetos Virtus; não use em mudanças exclusivamente documentais ou de configuração.
---

# Simplificar o diff

1. Identificar o diff pertencente à tarefa e excluir mudanças preexistentes ou não relacionadas.
2. Ler [references/checklist.md](references/checklist.md).
3. Revisar o diff contra os cinco princípios, priorizando problemas concretos sobre preferências estilísticas.
4. Corrigir diretamente apenas problemas claros, locais e dentro do escopo autorizado. Para mudança material de arquitetura, retornar a recomendação ao orquestrador.
5. Reexecutar as verificações afetadas quando houver correção.
6. Informar concisamente:
   - problemas encontrados e corrigidos;
   - simplificações rejeitadas por serem prematuras ou fora de escopo;
   - verificações executadas.

Não reformatar arquivos inteiros, criar abstrações especulativas nem alterar comportamento intencional para satisfazer o checklist.
