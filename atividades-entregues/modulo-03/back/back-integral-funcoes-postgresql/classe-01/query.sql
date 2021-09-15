1 - Faça uma query que retorna a quantidade de medicamentos da tabela `farmacia`.
SELECT COUNT(*) AS "Qtd_Medicamentos" FROM farmacia;

2 - Faça uma query que retorna apenas a idade do usuario mais novo cadastrado na tabela `usuarios`.
SELECT MIN(idade) AS "User_Mais_Novo" FROM usuarios;

3 - Faça uma query que retorna apenas a idade do usuario mais velho cadastrado na tabela `usuarios`.
SELECT MAX(idade) AS "User_Mais_velho" FROM usuarios;

4 - Faça uma query que retorna a média de idade entre os usuários cadastrados na tabela `usuarios` com idade maior ou igual a 18 anos.
SELECT AVG(idade) AS "Media_Idade_Maior18" FROM usuarios WHERE idade >= 18;

5 - Faça uma query que retorna a soma total do estoque de todos os medicamentos das categorias `blue` e `black` na tabela `farmacia`.
SELECT SUM(estoque) AS soma_Estoque
FROM farmacia
WHERE categoria = 'blue' OR categoria = 'black';

6 - Faça uma query que retorna todas as categorias não nulas e a soma do estoque de todos os medicamentos de cada categoria na tabela `farmacia`.
SELECT categoria, SUM(estoque) AS soma_Estoque
FROM farmacia
WHERE categoria IS NOT NULL
GROUP BY categoria;

7 - Faça uma query que retorna a soma do estoque disponível dos medicamentos sem categoria na tabela `farmacia`.
SELECT categoria, SUM(estoque) AS soma_Estoque
FROM farmacia
WHERE categoria IS NULL
GROUP BY categoria;

8 - Faça uma query que retorna a quantidade de medicamentos sem categoria na tabela `farmacia`.
SELECT COUNT(*) AS "Qtd_Medicamentos"
FROM farmacia
WHERE categoria IS NULL;

9 - Faça uma query que retorna uma única coluna com a junção do nome do medicamento e a categoria entre parenteses de todos os registros em que a categoria não seja nula da tabela `farmacia`. Ex.: `Endocet (green)`.
SELECT CONCAT(medicamento, ' (' ,categoria, ')') AS concatenado
FROM farmacia
WHERE categoria IS NOT NULL

SELECT medicamento || ' ( ' || categoria || ')' AS concatenado
FROM farmacia
WHERE categoria IS NOT NULL

10 - Faça uma query que retorna uma única coluna com a junção do identificador e o nome do medicamento separado por um hífen e a categoria entre parenteses de todos os registros da tabela `farmacia`. Quando a categoria for nula, substituir por `(sem categoria)`. Ex.: `1 - Endocet (green)` ou `1 - Endocet (sem categoria)`.
SELECT CONCAT(id, ' - ', medicamento, ' (' , COALESCE(categoria, 'sem categoria'), ')') AS concatenado
FROM farmacia
WHERE categoria IS NOT NULL

11 - Faça uma query que retorna o nome, a idade e a data de cadastro no formato `AAAA-MM-DD` de todos os cadastros que aconteceram no ano de 2020, na tabela `usuarios`.
SELECT nome, idade, to_char(cadastro::DATE, 'YYYY-MM-DD') as datacadastro
FROM usuarios 
WHERE to_char(cadastro::date, 'YYYY') = '2020';

12 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario menor de 18 anos possui cadastrado na tabela `usuarios`. O tempo precisa ser uma coluna que retorne a quantidade de anos, meses, dias, horas, minutos e segundos em um objeto. Ex.: `{"years":2,"months":2,"days":19,"hours":8,"minutes":22,"seconds":19}`.
SELECT nome, idade, email,
AGE(NOW(),cadastro::date) as tempo
FROM usuarios
WHERE idade < 18;

13 - Faça uma query que retorna o nome, a idade, o email e o tempo que cada usuario, maior ou igual a 60 anos, possui cadastrado na tabela `usuarios`. O tempo precisa ser uma coluna que retorne apenas a quantidade de anos, meses, dias em um objeto. Ex.: `{"years":2,"months":2,"days":19}`.
SELECT nome, idade, email,
date_trunc('day', AGE(NOW(),cadastro::timestamp  )) as tempo
FROM usuarios
WHERE idade >=60;

14 - Faça uma query que retorna a categoria e a quantidade de produtos de cada categoria que não seja nula da tabela `farmacia`.
SELECT COUNT(*) AS "Qtd_Medicamentos"
FROM farmacia
WHERE categoria IS NOT NULL
GROUP BY categoria;

15 - Faça uma query que retorna a idade e a quantidade de registros de cada idade, onde a idade seja maior ou igual a 18 anos, na tabela `usuarios`.
SELECT idade, COUNT(idade)
FROM usuarios
WHERE idade >=18
GROUP BY idade;

16 - Faça uma query que retorna as três* categorias e a soma do estoque de todos os medicamentos de cada categoria, na tabela `farmacia`.
SELECT categoria, SUM(estoque)
FROM farmacia
GROUP BY categoria;

*obs não entendi