CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL PRIMARY KEY,
  messages varchar(255),
  U_ID int FOREIGN KEY REFERENCES usernames(ID),
  Room_ID int FOREIGN KEY REFERENCES rooms(ID)
);

CREATE TABLE usernames (
  ID int NOT NULL PRIMARY KEY,
  username varchar(255)
);

CREATE TABLE rooms (
  ID int NOT NULL PRIMARY KEY,
  roomname varchar(255)
);
/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* /server/schema.sql */