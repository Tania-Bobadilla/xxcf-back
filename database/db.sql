CREATE DATABASE formdb;

CREATE TABLE form (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255) UNIQUE,
    description VARCHAR (255) UNIQUE
);

CREATE TABLE public.form (
	user_id int NOT NULL,
	nombres varchar NOT NULL,
	direccion varchar NOT NULL,
	pais varchar NOT NULL,
	ciudad varchar NOT NULL,
	CONSTRAINT form_pk PRIMARY KEY (user_id)
);