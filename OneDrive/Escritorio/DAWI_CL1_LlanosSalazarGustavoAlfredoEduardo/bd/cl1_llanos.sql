-- borra la bd si existe
DROP DATABASE IF EXISTS CL1_Llanos;
-- creamos la bd
CREATE DATABASE CL1_Llanos;
-- activamos la bd
USE CL1_Llanos;

create table tema(
idtema int not null primary key,
nombre varchar(45)
);

create table libro(
idlibro int not null primary key,
titulo varchar(45) not null,
precio decimal(8,2) not null,
cantEjemplares int not null,
origen varchar(45),
idtema int,
constraint fk_tema foreign key (idtema) references tema(idtema)
);

insert into tema values (1, 'Historia');
insert into tema values (2, 'Ciencia-Ficción');
insert into tema values (3, 'Fantasía');

insert into libro values (1, 'Primera Guerra Mundial', 59.90, 5, 'Estados Unidos', 1);
insert into libro values (2, 'El Tunche', 9.90, 8, 'Perú', 3);
insert into libro values (3, 'La Guerra de los Mundos', 89.90, 5, 'Inglaterra', 2);

select * from tema;
select * from libro;

