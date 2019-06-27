-- basic schema for both tables -- see notes in seed image file longblob changed to image routes as varchar 
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

