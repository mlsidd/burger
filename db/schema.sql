### SCHEMA

Create DATABASE burgers_db;
USE  burgers_db;

Create TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);