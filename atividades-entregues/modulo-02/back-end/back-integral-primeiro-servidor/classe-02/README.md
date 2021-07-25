![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Estagiário empolgado

Em uma escola de programação foi solicitado a um estagiário que criasse com javascript um array de cadastro a partir dos dados dos alunos. Mas esse estagiário bastante motivado e empolgado acabou criando um cadastro com dados demais dos alunos.

Neste exercício, teremos que resumir o cadastro de alunos criando um novo array a partir do que o estagiário criou inicialmente. Abaixo podemos ver o array **alunos** criado pelo estagiário:

```javascript=
const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];
```

Após perguntarmos ao líder dos cadastros, ele nos disse que, de cada aluno, só precisa de **nome**, **idade**, **email** e **curso**.
Portanto deveremos criar um novo array chamado **alunosResumido** que deverá possuir para cada item, apenas as propriedades solicitadas pelo líder de cadastros. Os valores das propriedades deverão ser copiadas do array original **alunos**.

**IMPORTANTE!!! Regra do exercício:**
* Deve ser utilizada a desestruturação para selecionar as propriedades de cada item.

Após a criação o novo array **alunosResumido** deverá ser impresso no console e esta impressão deverá ficar assim:

```
[
  {
    nome: 'Paula',
    idade: 26,
    email: 'paulete123@gmail.com',
    curso: 'PDZ'
  },
  {
    nome: 'Felisberto',
    idade: 20,
    email: 'betinho.felis@gmail.com',
    curso: 'PDZ'
  }
]
```

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `nodeJS` `módulo 2` `exercício de classe` `desestruturacao` `desestructuring`
