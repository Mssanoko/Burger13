DROP DATABASE IF EXISTS burgerss_db;

CREATE DATABASE burgerss_db;

USE burgerss_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);