DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY(id)
)