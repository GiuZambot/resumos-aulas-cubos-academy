![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Integrando com PokeApi

Neste exercício criaremos uma API para responder informações de pokemons.
Para isso, utilizaremos como fonte dos dados uma API já existente que é a https://pokeapi.co/api/v2/pokemon/.

Deste modo, o fluxo acabará sendo:

1. O usuário vai chamar a API que você vai criar
2. Sua API vai chamar a pokeAPI e aguardar o retorno dela
3. Sua API vai retornar os dados que forem pedidos abaixo para o usuário

Para realizar a integração com a API existente de pokemons deveremos utilizar o **axios**.
Todas as chamadas para a API externa deverão ser **assíncronas aguardando o retorno de cada chamada** antes de executar qualquer outro comando.

Criaremos apenas dois métodos (verbos HTTP) para o mesmo recurso **pokemon** (http://localhost:8000/pokemon):
- GET para listar os pokemons
- GET com id ou nome para retornar informações de 1 pokemon

Abaixo detalharemos como cada um dos métodos deverão funcionar:

**A) GET sem id e sem nome**

Como a quantidade existente de pokemons é bem grande será necessário trabalhar com paginação dos dados.

A pokeapi que utilizaremos já é preparada para a paginação, sendo possível utilizar os parâmetros do tipo query **offset** e **limit**.
O parâmetro **offset** é utilizado para informar a partir de qual pokemon queremos que seja retornado (sendo 0 o primeiro pokemon).
O parâmetro **limit** é a quantidade de pokemons a serem retornados a partir daquele informado no **offset**.

Nossa API deverá também receber parâmetros do tipo query **inicio** e **quantidade** para serem repassados à pokeapi para os parâmetros **offset** e **limit** respectivamente.

Portanto, ao requisitarmos à api pokeapi a seguinte requisição:
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3

Será retornado da pokeapi os 3 primeiros pokemons: 
```json
{
  "count": 1118,
  "next": "https://pokeapi.co/api/v2/pokemon/?offset=3&limit=3",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    }
  ]
}
```
**IMPORTANTE:**

Perceba que são retornadas algumas informações sobre a paginação além dos objetos dos pokemons que estão na propriedade **results**.

Na nossa API queremos retornar apenas os objetos dos pokemons, portanto deveremos retornar apenas o array que está em **results** do retorno da **pokeapi**.

**B) GET com id ou nome**

Agora criaremos um novo método em nova rota GET que receba um parâmetro do tipo path (params) que poderá ser o **id** ou o **nome** (em inglês) do pokemon.

A PokeApi já é preparada para receber uma requisição com id ou nome nos seguintes formatos:

https://pokeapi.co/api/v2/pokemon/1/

ou

https://pokeapi.co/api/v2/pokemon/bulbasaur/

Nossa API deverá receber o id ou nome da mesma forma, através de um parâmetro do tipo path (params) **idOuNome** que será repassado para a PokeApi no formato acima.

Porém o objeto retornado pela PokeApi é bastaaaaanteee grandeeee!!!
E nós não precisamos de todas as propriedades. Portanto, selecionaremos algumas propriedades do pokemon retornado pela PokeAPI para repassar para os consumidores da nossa api. As propriedades selecionadas deverão ser:
- id
- name
- height
- weight
- base_experience
- forms
- abilities
- species

Sendo assim, como exemplo, ao requisitarmos http://localhost:8000/pokemon/1/ ou http://localhost:8000/pokemon/bulbasaur/ na nossa API, deverá ser retornado:

```json
{
  "id": 1,
  "name": "bulbasaur",
  "height": 7,
  "weight": 69,
  "base_experience": 64,
  "forms": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
    }
  ],
  "abilities": [
    {
      "ability": {
        "name": "overgrow",
        "url": "https://pokeapi.co/api/v2/ability/65/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "chlorophyll",
        "url": "https://pokeapi.co/api/v2/ability/34/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
  "species": {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
}
```

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `nodeJS` `módulo 2` `exercício de classe` `express` `http` `api` `async` `await`
