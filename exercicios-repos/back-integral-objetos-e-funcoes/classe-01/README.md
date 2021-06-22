![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Sistema de correção de provas

Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do aluno.

**a)** Declare uma função de nome `corrigirProva` que tenha apenas um parâmetro chamado `prova`. Faça commit do resultado.

**b)** Sabendo que o parâmetro `prova` será sempre um objeto com o seguinte formato:

```javascript=
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}
```

Implemente a função `corrigirProva` de modo que, ao receber um objeto como este como parâmetro, o resultado seja o seguinte.

```
O aluno(a) João acertou 3 questões e obteve nota 6
```

Para testar sua implementação, chame a função `corrigirProva` passando o objeto `prova` exemplificado acimam como argumento.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de classe` `nodeJS` `funcao` `objetos`
