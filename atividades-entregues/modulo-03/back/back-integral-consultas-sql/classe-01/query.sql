1 - Selecione apenas os compositores e o identificador de todos os registros da tabela musicas.
SELECT id, compositor FROM "musicas";

2 - Selecione as composições e o tempo de cada composição, de todos os registros da tabela musicas, onde o tempo seja maior que 4 minutos.
SELECT composicao, tempo FROM "musicas" WHERE tempo > 4 * 60;

3 - Selecione os compositores e suas composições que tenham identificadores entre 47 e 123.
SELECT compositor, composicao FROM "musicas" WHERE id BETWEEN 47 AND 123;

4 - Selecione todos os registros com todos os campos da tabela musicas, onde o compositor não seja nulo, o tempo seja menor que 5 minutos e o nome do compositor seja diferente de Bach.
SELECT * FROM "musicas"
WHERE compositor IS NOT NULL AND tempo < 5 * 60

5 - Selecione as composições e o tempo de cada composição, de todos os registros da tabela musicas, onde o compositor seja Mozart ou Bach.
SELECT composicao, tempo FROM "musicas"
WHERE compositor = 'Mozart' OR compositor = 'Bach' 

6 - Selecione todos os registros com todos os campos da tabela musicas e faça uma ordenação pelo identificador em ordem decrescente.
SELECT * FROM "musicas"
ORDER BY id DESC

7 - Selecione todos os registros com todos os campos da tabela musicas e faça uma ordenação pelo tempo de execução de cada música, da que leva mais tempo a ser executada para a que leva menos tempo.
SELECT * FROM "musicas"
ORDER BY tempo DESC

8 - Selecione as 5 composições, com todos os campos da tabela musicas, nas quais sejam as 5 composições mais rápida em tempo de execução.
SELECT * FROM "musicas"
ORDER BY tempo ASC LIMIT 5

9 - Selecione as 10 composições, com todos os campos da tabela musicas, nas quais sejam as 10 composições que mais demora em tempo de execução.
SELECT * FROM "musicas"
ORDER BY tempo DESC LIMIT 10

10 - Selecione 10 registros, com todos os campos da tabela musicas, de forma que esses 10 registros sejam os que tenham menor tempo de execução com exceção dos 5 primeiro mais rápidos.
SELECT * FROM "musicas"
ORDER BY tempo ASC OFFSET 5 LIMIT 5

11 - Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 10 resultados, faça a listagem dos registros que correspondam a página 4.
SELECT * FROM "musicas"
OFFSET 3 * 10 LIMIT 10

12 - Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 12 resultados, faça a listagem dos registros que correspondam a página 6.
SELECT * FROM "musicas"
OFFSET 5 * 12 LIMIT 12

13 - Selecione todos os compositores da tabela musicas de forma que os resultados não sejam repetidos e não esteja nulo.
SELECT DISTINCT compositor FROM "musicas"
WHERE compositor IS NOT NULL

14 - Selecione os compositores e as composições da tabela musicas de forma que os resultados não sejam repetidos.
SELECT DISTINCT compositor, composicao FROM "musicas"

15 - Selecione todos os campos da tabela musicas e os registros que o nome do compositor comece exatamente com Bra, isso significa que se a primeira letra não form maiúscula está incorreto.
SELECT * FROM "musicas"
WHERE compositor LIKE 'Bra%'

16 - Selecione todos os campos da tabela musicas e os registros que o ritmo possua a última palavra igual a troppo independente do restante do texto que antecede, mas que seja exatamente a última palavra do texto.
SELECT * FROM "musicas"
WHERE ritmo LIKE '%troppo'

17 - Faça uma busca nos registros da tabela musicas e retorne somente os registros que possua em qualquer posição do texto, da composição, a palavra quartet, independente de ser maiúscula ou minúscula.
SELECT * FROM "musicas"
WHERE composicao ILIKE '%quartet%'

18 - Faça uma busca nos registros da tabela musicas e retorne somente os registros que não possua a palavra quintet na coluna composição, independente de ser maiúscula ou minúscula.
SELECT * FROM "musicas"
WHERE composicao NOT ILIKE '%quintet%'