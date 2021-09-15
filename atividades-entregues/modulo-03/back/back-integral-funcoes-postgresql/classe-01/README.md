![](https://i.imgur.com/xG74tOh.png)

# Exercício de classe 🏫

## Fazendo consultas com SELECT e Funções do PostgreSQL

Usando o SELECT e as funções do PostgreSQL para realizar consultas no banco de dado, monte queries de acordo com o solicitado abaixo.

Obs.: Para criar o banco de dados basta executar o arquivo `bancodedados.sql`.

Exemplo:

Faça uma query que retorna a quantidade de registros da tabela `usuarios`.

A resposta correta seria

```
SELECT COUNT(*) FROM usuarios;
```

1 - Faça uma query que retorna a quantidade de medicamentos da tabela `farmacia`.

2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela `usuarios`.

3 - Faça uma query que retorna apenas a idade do usuario mais velho cadastrado na tabela `usuarios`.

4 - Faça uma query que retorna a média de idade entre os usuários cadastrados na tabela `usuarios` com idade maior ou igual a 18 anos.

5 - Faça uma query que retorna a soma total do estoque de todos os medicamentos das categorias `blue` e `black` na tabela `farmacia`.

6 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos de cada categoria na tabela `farmacia`.

7 - Faça uma query que retorna a soma do estoque disponível dos medicamentos sem categoria na tabela `farmacia`.

8 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela `farmacia`.

9 - Faça uma query que retorna uma única coluna com a junção do nome do medicamento e a categoria entre parenteses de todos os registros em que a categoria não seja nula da tabela `farmacia`. Ex.: `Endocet (green)`.

10 - Faça uma query que retorna uma única coluna com a junção do identificador e o nome do medicamento separado por um hífen e a categoria entre parenteses de todos os registros da tabela `farmacia`. Quando a categoria for nula, substituir por `(sem categoria)`. Ex.: `1 - Endocet (green)` ou `1 - Endocet (sem categoria)`.

11 - Faça uma query que retorna o nome, a idade e a data de cadastro no formato `AAAA-MM-DD` de todos os cadastros que aconteceram no ano de 2020, na tabela `usuarios`.

12 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario menor de 18 anos possui cadastrado na tabela `usuarios`. O tempo precisa ser uma coluna que retorne a quantidade de anos, meses, dias, horas, minutos e segundos em um objeto. Ex.: `{"years":2,"months":2,"days":19,"hours":8,"minutes":22,"seconds":19}`.

13 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario, maior ou igual a 60 anos, possui cadastrado na tabela `usuarios`. O tempo precisa ser uma coluna que retorne apenas a quantidade de anos, meses, dias em um objeto. Ex.: `{"years":2,"months":2,"days":19}`.

14 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela `farmacia`.

15 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela `usuarios`.

16 - Faça uma query que retorna as três categorias e a soma do estoque de todos os medicamentos de cada categoria, na tabela `farmacia`.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de classe` `matemática` `nodeJS`
