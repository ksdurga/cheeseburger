DROP DATABASE IF EXISTS cheeseburgerDB;

-- Create the database cheeseburgerDB and specified it for use.
CREATE DATABASE cheeseburgerDB;

USE cheeseburgerDB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);