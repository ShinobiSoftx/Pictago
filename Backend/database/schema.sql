-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pictago
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pictago
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pictago` DEFAULT CHARACTER SET utf8 ;
USE `pictago` ;

-- -----------------------------------------------------
-- Table `pictago`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`posts` (
  `ID_post` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `image_url` LONGTEXT NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`ID_post`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pictago`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`comments` (
  `ID_comment` INT NOT NULL AUTO_INCREMENT,
  `body` LONGTEXT NOT NULL,
  PRIMARY KEY (`ID_comment`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
