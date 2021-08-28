![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Referendo por localização

Neste exercício será necessário criar uma API para registrar votos de uma votação por localização. 

A ideia é que em uma votação, a API possa verificar se o usuário que está enviando o voto está realmente no país correto da votação antes de registrar o voto.

Para isto utilizaremos uma API externa **IP Geolocation API** da **Abstract API** (https://www.abstractapi.com/ip-geolocation-api) que exige **autenticação**.

**Buscando a localização por IP na API externa**

Para encontrar a localização a partir de um IP utilizando a API mencionada acima deveremos utilizar o seguinte endereço:

```
https://ipgeolocation.abstractapi.com/v1/
```
Passando dois parâmetros do tipo **query**:
* **api_key**: que deverá receber como valor a chave de teste **58cafbe4558f425d8e8c731e3b26fbe0** para a autenticação
* **ip_address**: que deverá receber o IP do usuário, por exemplo: **192.168.0.1**

**Obs.:** Em um caso real, o IP seria identificado diretamente da requisição, mas isso só seria possível com uma API exposta na internet. Portanto, para facilitar, receberemos o IP do usuário por parâmetro, assim como receberemos o país onde ele se encontra também por parâmetro.

Dito isto, nossa API deverá possuir um único recurso chamado **votacao** que receberá dois parâmetros obrigatórios na rota (path): **pais** e **ip**.

**POST /votacao/:pais/:ip**

Este nosso recurso deverá estar disponível no endereço http://localhost:8000/votacao, deverá receber apenas requisições **POST** e deverá receber dois parâmetros do tipo path (params) obrigatórios:

* **pais**: deverá receber o nome do país em inglês ("Brazil", com "z", por exemplo) onde está acontecendo o referendo.
* **ip**: deverá receber o endereço IP do usuário que está enviando o voto.

Além dos parâmetros, deverá também ser enviado no corpo (body) da requisição, um objeto contendo uma propriedade **voto** que deve possuir valor booleano **true** ou **false**, representando respectivamente **sim** ou **nao** para o referendo. Portanto o corpo da nossa requisição deverá seguir o formato:

```json
{
    "voto": true
}
```

O IP recebido deverá ser enviado à API externa. Após receber o retorno da API externa, **caso o IP não seja válido**, deverá ser retornado ao usuário da nossa API um response com **status 400 (Bad Request)** e mensagem apropriada informando que o IP enviado não é válido.

Caso **o retorno** da API externa **seja válido**, deveremos selecionar a propriedade **country** deste retorno e comparar com o valor do parâmetro **pais** informado pelo nosso usuário. Caso sejam iguais, deveremos considerar o voto válido, caso não sejam, deveremos retornar um response com **status 400 (Bad Request)** informando que o IP enviado não coincide com o país da votação.

**Voto Válido**

Após validar o país da localização do endereço IP, deveremos adicionar o voto em um **array** que deverá existir em um arquivo **votos.json** em nosso servidor. 

Para adicionar o voto, deveremos criar um objeto que contenha duas propriedades: o **ip** informado pelo usuário e o **voto** (true ou false). Portanto deverá seguir o formato:

```json
{
    "ip": "200.45.187.22",
    "voto": false
}
```

**Para testar**

Para testar nossa API, sugiro que seja anotado alguns endereços IPs do mesmo país para podermos simular alguns diferentes votos verificando se todos serão validados e irão para o arquivo JSON. Sugiro que você anote o seu IP e solicite o IP de amigos ou colegas para a realização dos testes.

Podemos facilmente descobrir nosso IP na internet acessando:

http://www.meuip.com/

**EXTRA (para fazer caso sobre tempo na aula)**

Crie uma nova rota GET para que seja possível consultar todos os votos. A função para esta rota deverá ler todo o array do arquivo **votos.json** e retornar no response da requisição.

---

Preencha a checklist para finalizar o exercício:

- [x] Resolver o exercício
- [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `nodeJS` `módulo 2` `exercício de classe` `express` `http` `api` `integracao com api` `api de terceiros` `autenticacao`