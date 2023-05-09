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
-- Table `pictago`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`user` (
  `ID_user` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pictago`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`post` (
  `ID_post` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `url_image` LONGTEXT NOT NULL,
  `user_ID_user` INT NOT NULL,
  PRIMARY KEY (`ID_post`, `user_ID_user`),
  INDEX `fk_post_user_idx` (`user_ID_user` ASC) VISIBLE,
  CONSTRAINT `fk_post_user`
    FOREIGN KEY (`user_ID_user`)
    REFERENCES `pictago`.`user` (`ID_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pictago`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`comments` (
  `ID_comment` INT NOT NULL AUTO_INCREMENT,
  `body` VARCHAR(255) NOT NULL,
  `post_ID_post` INT NOT NULL,
  `post_user_ID_user` INT NOT NULL,
  PRIMARY KEY (`ID_comment`, `post_ID_post`, `post_user_ID_user`),
  INDEX `fk_comments_post1_idx` (`post_ID_post` ASC, `post_user_ID_user` ASC) VISIBLE,
  CONSTRAINT `fk_comments_post1`
    FOREIGN KEY (`post_ID_post` , `post_user_ID_user`)
    REFERENCES `pictago`.`post` (`ID_post` , `user_ID_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
