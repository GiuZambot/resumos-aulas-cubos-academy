![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Fluxo de login

O objetivo deste exercício é criar um SPA, utilizando a biblioteca `react-router-dom`.

Este SPA terá 3 **rotas**:
- Home (`/`)
- Login (`/login`)
- Perfil (`/perfil`)

**Home**:
Na home poderemos acessar as rotas *Perfil* e *Login* por links ou botões. 

**Login**:
Na página de login poderemos acessar as rotas *Perfil* e *Home* por links ou botões. 

**Perfil**:
Na página de perfil poderemos acessar a rota *Home* e *Login* por links ou botões. 
Essa rota deverá ser protegida, somente podendo ser acessada quando o usuário estiver logado (represente isso no estado da sua aplicação).

## Fluxo extra

Modifique/crie as seguintes **rotas**:
- Login (`/login`)
- Perfil (`/:perfil`)

**Login**:
Na página de login deveremos informar, por meio de um `<input>` o nosso usuário do Github. Ao fazer isso, deveremos requisitar o recurso `https://api.github.com/users/:username` da [API do Github](https://docs.github.com/pt/rest/reference/users#get-a-user) afim de "autenticar" o nosso usuário. Se o status da resposta da requisição não estiver na casa dos 200 (OK), o nosso usuário não será autenticado, caso contrário, ele será. Após autenticado, sua aplicação deverá redirecionar o usuário a rota *Perfil*, passando o perfil recebido no input como parametro de query (ex. `/mdnm`).

**Perfil**:
Na página de perfil deveremos receber como parametro um usuário autenticado do Github. Com essa informação, poderemos requisitar o recurso `https://api.github.com/users/:username` da [API do Github](https://docs.github.com/pt/rest/reference/users#get-a-user) e com um retorno bem sucedido, mostrar em tela quaisquer dos dados que a API do Github nos retorna (ex. `name`). 
Essa rota deverá ser protegida, somente podendo ser acessada quando o usuário estiver logado (represente isso no estado da sua aplicação).

**Dicas**
- Tente guardar o estado de autenticação de sua aplicação em um Contexto, afim de reduzir *Prop-drilling*
- Utilize a API de `fetch` para requisitar a API do Github
- Leia atentamente a documentação da API do Github

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
- [ ] Realizar o pull request

###### tags: `módulo 3` `front-end` `React` `exercício de classe`
