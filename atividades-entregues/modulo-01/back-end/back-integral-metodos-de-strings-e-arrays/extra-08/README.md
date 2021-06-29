![](https://i.imgur.com/xG74tOh.png)

# Exercício extra 🌟

## Validação de e-mail

Faça um sistema que verifique se um e-mail é válido

Dicas:

-   Sempre tem que ter @
-   Sempre tem que ter pelo menos um .
-   Nunca pode começar com .
-   Nunca pode terminar com .

| Entrada                      | Saída           |
| ---------------------------- | --------------- |
| `jose@cubos.academy`         | E-mail válido   |
| `jose@cubos.academy.br`      | E-mail válido   |
| `jose.messias@cubos.academy` | E-mail válido   |
| `jose.messias@cubos.io`      | E-mail válido   |
| `jose@cubos`                 | E-mail inválido |
| `jose.messias@cubos`         | E-mail válido   |
| `jose.messias@.`             | E-mail inválido |
| `jose.@cubos`                | E-mail válido   |
| `.@`                         | E-mail inválido |
| `@.`                         | E-mail inválido |
| `jose.messias@cubos.`        | E-mail inválido |
| `.messias@cubos.`            | E-mail inválido |
| `.messias@cubos`             | E-mail inválido |

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício de classe` `nodeJS` `JavaScript`
