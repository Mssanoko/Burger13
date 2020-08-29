
DROP DATABASE IF EXISTS burgerss_db;

CREATE DATABASE burgerss_db;

USE poyv3tl135zxzxoi;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

USE poyv3tl135zxzxoi;

INSERT INTO burgers(burger_name, devoured)
VALUES ("hamburger", false), ("cheeseburger",false), ("veggieburger", false);

SELECT * FROM burgers;