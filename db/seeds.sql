USE burgerss_db;

INSERT INTO burgers(burger_name, devoured)
VALUES ("hamburger", false), ("cheeseburger",false), ("veggieburger", false);

SELECT DISTINCT * FROM burgers