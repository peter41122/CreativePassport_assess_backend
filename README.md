# Getting Started with Creative Passport Assessment Backend

## Install MySQL Database

At first, you have to create database on your local.
If you don't have mysql service on your system, you have to intall MySQL server.

After that, you can create database and table for this project.
`mysql -u root`

#### create database:
`CREATE DATABASE IF NOT EXISTS cpassess;`

#### use created database:
`USE cpassess;`

#### create table:
```
CREATE TABLE `storage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL COMMENT 'First Name',
  `lastname` varchar(255) NOT NULL COMMENT 'Last Name',
  `birthday` date NOT NULL COMMENT 'Birthday',
  `interests` varchar(255) NOT NULL COMMENT 'Interest',
  `mutitle` varchar(255) NOT NULL COMMENT 'Music file title',
  `mupath` varchar(255) NOT NULL COMMENT 'Music file path',
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## Install Node modules
`yarn install`

## Start Node server
`yarn start`

Server runs on [http://localhost:5000](http://localhost:5000)

