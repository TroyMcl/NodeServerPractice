DROP DATABASE IF EXISTS practice;
CREATE DATABASE  practice;

USE practice;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  PRIMARY KEY (id)
)