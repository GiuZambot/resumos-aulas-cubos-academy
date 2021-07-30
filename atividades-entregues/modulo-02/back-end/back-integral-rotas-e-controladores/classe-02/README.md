![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Cadastro de alunos

Neste exercício será necessário criar uma API REST para realização de cadastro de alunos, mas para satisfazer a demanda, será necessário contemplar alguns requisitos e regras obrigatórios.

**Regras da API:**

* Deverá estar disponível no endereço http://localhost:8000
* Deverá seguir o padrão REST, contemplando os métodos (verbos) **HTTP GET**, **POST** e **DELETE**.
* Os códigos de status (status codes) a serem retornados deverão seguir a especificação de cada método (mais abaixo).
* Deverá possuir apenas um recurso **alunos** que deverá ser acessado através do endereço http://localhost:8000/alunos
* Deverá ser organizado em diferentes camadas (dados, controladores, roteador, intermediarios). A organização será detalhada mais abaixo.
* Deverá ser protegida por uma autenticação simples através de senha passada por parâmetro do tipo query chamado **senha**. As regras da autenticação serão explicadas mais abaixo.
* Todos os métodos do recurso único **alunos** deverão possuir as validações necessárias que serão detalhadas para cada método mais abaixo.
* Na camada de dados deverá existir uma coleção (array) de alunos, onde cada item é um objeto representando um aluno. **A coleção deverá ser iniciada vazia**.
* Cada objeto alunos deverá possuir 5 propriedades:
    * **id** (número)
    * **nome** (string)
    * **sobrenome** (string)
    * **idade** (número)
    * **curso** (string)
```json
//Exemplo de aluno

{
    "id": 3,
    "nome": "Marcos",
    "sobrenome": "Silveira",
    "idade": 36,
    "curso": "Programação do Zero"
}
```
    
**Organização do código da API:**

Abaixo será definida como deverá ser feita a organização do código desta API (as tabulações indicarão o nível hierárquico dos diretórios):

* nome-do-projeto (raiz do projeto node)
    * controladores (diretório)
        * recurso-a.js
        * recurso-b.js
        * .
        * .
        * recurso-z.js
    * dados (diretório)
        * colecao-a.js
        * colecao-b.js
        * .
        * .
        * colecao-z.js
    * index.js (arquivo principal do servidor)
    * intermediarios.js (middlewares - se houver)
    * roteador.js (configuração de rotas)

**Formato (exemplo) de objeto de retorno em caso de erro de validação:**

```json
{
    "mensagem": "Esta é uma mensagem para explicar o erro e/ou código de status retornado."
}
```

**Autenticação simples - proteção por senha:**

Todas as requisições deverão verificar se a senha está correta através de intermediário (middleware) e a senha correta deverá ser: **cubos123**.
Caso a senha não seja informada ou seja informada incorretamente, deverá ser retornado código 401 (Unauthorized - não autorizado) com uma mensagem de erro conforme padrão de retorno acima dizendo que a senha está incorreta.

**Especificações e validações de cada método:**

**A) GET**

**A1) GET sem parâmetros**

Não deverá ter validações. Deverá retornar a coleção completa (array completo) mesmo que ele esteja vazio.

O código de status a ser retornado deverá ser sempre 200 (Ok).

**A2) GET /id (com parâmetro tipo path id)**

Deverá retornar um objeto de aluno quando o mesmo existir para o ID informado com código de status 200 (Ok).

Caso o valor do parâmetro não seja um número válido deverá ser retornado 400 (Bad Request) com mensagem dizendo que o ID deve ser um número válido.

Caso o parâmetro seja válido, mas não existir aluno para aquele número de ID, deverá ser retornado 404 (Not Found) com mensagem dizendo que o aluno não foi encontrado.

**B) POST**

Não deverá receber nenhum parâmetro, apenas o body (conteúdo) da requisição, que deverá ser um objeto json de aluno completo com as 4 propriedades exceto o ID que deverá ser controlado (gerado) pelo servidor e portanto não deverá ser informado no request.

Deverá ser retornado 400 (Bad Request) com mensagem explicando o motivo do erro em qualquer um dos seguintes casos:

1) Qualquer uma das 4 propriedades (nome, sobrenome, idade ou curso) não estiver presente no objeto aluno a ser criado.
2) Qualquer uma das propriedades de texto (nome, sobrenome ou curso) possuir como valor string vazia ou string que possua apenas espaços.
3) Se a idade do aluno a ser adicionado for menor que 18 anos.

Caso o objeto aluno a ser adicionado passe em todas as validações acima, deverá ser retornado 201 (Created) sem qualquer conteúdo no body do response.

**C) DELETE**

Deverá receber apenas o parâmetro do tipo path **id** para indicar o id do aluno a ser excluído. Não deverá receber qualquer conteúdo no corpo (body) da requisição.

Caso o valor do parâmetro não seja um número válido deverá ser retornado 400 (Bad Request) com mensagem dizendo que o ID deve ser um número válido.

Caso não exista aluno para o id informado, deverá ser retornado 404 (Not Found) com mensagem apropriada informando que o aluno a ser excluído não foi encontrado.

Caso exista na coleção um objeto de aluno com o id informado pelo parâmetro, o objeto deverá ser removido do array e deverá ser retornado status 200 (Ok) com o objeto removido no corpo (body) da resposta (response).

**EXTRAS!!! (para ser feito caso sobre tempo da aula prática):**

1) Crie um novo arquivo na camada de dados (**cursos.js**) para guardar e exportar um array de strings dos cursos válidos e adicione às validações do POST uma verificação se o curso informado pelo request é um curso válido deste array de cursos.
2) Implemente os métodos PUT e PATCH com todas as validações que considerar necessárias de acordo com o que foi aprendido na aula e retornando os status codes corretos seguindo o REST. Pense em fazer de uma forma que as validações possam ser reutilizadas em todos os métodos que fizer sentido.

---

Preencha a checklist para finalizar o exercício:

- [x] Resolver o exercício
- [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `nodeJS` `módulo 2` `exercício de classe` `express` `http` `api` `controladores` `controllers` `roteadores` `routers` `validacoes` `validations` `intermediários` `middlewares`
