drop table if exists produtos;

drop table if exists usuarios;

create table usuarios (
	id serial primary key,
  	nome text not null,
  	nome_loja text not null,
  	email text not null unique,
  	senha text not null
);

create table produtos (
	id serial primary key,
  	usuario_id integer not null,
  	nome text not null,
  	estoque integer not null,
  	preco integer not null,
  	categoria text,
  	descricao text,
  	imagem text,
  	foreign key (usuario_id) references usuarios (id)
);