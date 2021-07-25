![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Desestruturando uma pessoa

A partir do objeto pessoa abaixo, deverão ser criadas três variáveis **nomeDaPessoa**, **idadeDaPessoa** e **infosAdicionais** através da desestruturação, de forma que estas variáveis recebam, respectivamente, os valores das propriedades do objeto pessoa: **nome**, **idade** e o restante do objeto (**cidade** e **apelidos**).

```javascript=
const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "Porto Alegre",
    apelidos: [
        "Carlão",
        "Carlinhos",
        "Carluxo"
    ]
};
```

Após a criação das três variáveis utilizando desestruturação, cada uma delas deverá ser impressa no console, uma de cada vez.
Estas impressões no console deverão ficar assim:

```
Carlos
28
{
  cidade: 'Porto Alegre',
  apelidos: [ 'Carlão', 'Carlinhos', 'Carluxo' ]
}
```

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `nodeJS` `módulo 2` `exercício de classe` `desestruturacao` `desestructuring`
