![](https://i.imgur.com/xG74tOh.png)

# Exercício de casa 🏠

## Contatos frequentemente contatados

Utilizando o array `contatos` encontrado no `<script>` do arquivo HTML encontrado nessa pasta, construa uma página com no mínimo elementos já presentes no arquivo HTML.

Você deve:
1. Ordenar o array `contatos` de modo que os 5 primeiros itens sejam os contatos que tenham o maior número de `mensagens`;
2. Criar um novo array com apenas os primeiros 5 elementos do array `contatos` depois de ordenado;
3. Preenchecer os `<li>`s com os dados dos contatos (imagem, nome e descrição);

**Neste exercício usaremos:**
 - seletor de elementos da DOM
 - manipulação de texto dos elementos
 - manipulação de atributo dos elementos

<details>
  <summary>Dicas</summary>
  <ul>
    <li>Podemos usar a função <code>sort()</code> para ordenar o array</li>
    <li>Podemos usar a função <code>slice()</code> para criar um novo array com apenas os primeiros 5 elementos</li>
    <li>Podemos selecionar todos os itens da lista com <code>document.querySelectorAll('li')</code>, dar um loop na lista retornada e para cada item da lista executarmos um <code>document.querySelector()</code> em cada elemento do item da lista</li>
  </ul>
</details>

---

Preencha a checklist para finalizar o exercício:

- [x] Resolver o exercício revendo a aula se necessário
- [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `front-end` `módulo 2` `exercício de casa` `DOM` `JS`