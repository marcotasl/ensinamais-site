# Checklist de simplificação

## KISS

- Existe uma solução equivalente com menos estados, branches ou indireções?
- A implementação segue os padrões já presentes no projeto?

## DRY

- A mesma regra ou bloco aparece pelo menos duas vezes de forma realmente equivalente?
- A extração reduz risco de divergência, em vez de apenas diminuir linhas?

## YAGNI

- Foram adicionados flags, camadas, parâmetros ou hooks sem uso no pedido atual?
- Há generalização para um requisito apenas hipotético?

## Separação de responsabilidades

- Componentes de UI evitam falar diretamente com integrações quando o projeto usa lib ou hook?
- Configuração, domínio e I/O permanecem separáveis e testáveis?

## Organização por feature

- Código específico de uma feature está junto da feature?
- Código compartilhado é de fato usado por mais de uma feature?

## Segurança da revisão

- Não tocar em mudanças preexistentes ou fora da tarefa.
- Não trocar clareza por abstração.
- Não declarar melhoria sem preservar comportamento e verificações.
