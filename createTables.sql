CREATE TABLE `spikedb`.`dbuser` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `phoneNumber`VARCHAR(45) NULL, #DOES this need to be integer?
  `address1` VARCHAR(45) NULL,
  `address2` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state1` VARCHAR(45) NULL,
  `zipcode` VARCHAR(45) NULL, #DOES this need to be integer?
  `role` VARCHAR(45) NULL,
  `balance` FLOAT NULL,
  `desiredApartment` VARCHAR(45) NULL,
  `beds` VARCHAR(45) NULL,
  `applicationStatus` VARCHAR(45) NULL,
  PRIMARY KEY (`uid`));
  
  CREATE TABLE `spikedb`.`properties` (
  `pid` INT NOT NULL AUTO_INCREMENT,
  `uid` INT NULL,
  `oid` INT NULL,
  `rent` FLOAT NULL,
  PRIMARY KEY (`pid`),
  FOREIGN KEY (`uid`) REFERENCES dbuser(`uid`));
  
CREATE TABLE `spikedb`.`maintenencerequests` (
  `rid` INT NOT NULL AUTO_INCREMENT,
  `uid` INT NULL,
  `message` VARCHAR(1000) NULL,
  `submissionDate` VARCHAR(45) NULL,
  PRIMARY KEY (`rid`),
  FOREIGN KEY (`uid`) REFERENCES dbuser(`uid`));
  
INSERT INTO `spikedb`.`dbuser` (firstName, lastName, email, password, role) VALUES ('John','admin','admin@gmail.com', 'password', 'admin');
INSERT INTO `spikedb`.`dbuser` (email, password) VALUES ('test@gmail.com', 'password');

