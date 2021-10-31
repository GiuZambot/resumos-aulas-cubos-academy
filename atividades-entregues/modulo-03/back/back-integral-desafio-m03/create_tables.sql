DROP TABLE IF EXISTS "usuarios";

CREATE TABLE "usuarios" (
  id SERIAL PRIMARY KEY,
  nome varchar(255) NOT NULL,
  nome_loja varchar(255) NOT NULL,
  email varchar(80) NULL UNIQUE,
  senha varchar(16) NOT NULL
);

DROP TABLE IF EXISTS "produtos";

CREATE TABLE "produtos" (
  id SERIAL PRIMARY KEY,
  usuario_id int NOT NULL,
  nome varchar(255) NOT NULL,
  quantidade INT,
  categoria varchar(80),
  preco INT,
  descricao varchar(255),
  imagem varchar(255)
);