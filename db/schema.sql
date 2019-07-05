CREATE DATABASE meme_db;
USE meme_db;

CREATE TABLE text_tb
(id int NOT NULL AUTO_INCREMENT,
mood varchar(255) NOT NULL,
content varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE images_tb
(id int NOT NULL AUTO_INCREMENT,
mood varchar(255) NOT NULL,
content varchar(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE memes_tb
(id int NOT NULL AUTO_INCREMENT,
mood varchar(255) NOT NULL,
content varchar(255) NOT NULL,
top_text varchar(255) NOT NULL,
bottom_text varchar(255) NOT NULL,
PRIMARY KEY (id)
);