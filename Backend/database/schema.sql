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
-- Table `pictago`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`users` (
  `ID_user` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pictago`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`posts` (
  `ID_post` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `url_image` LONGTEXT NOT NULL,
  `users_ID_user` INT NOT NULL,
  PRIMARY KEY (`ID_post`, `users_ID_user`),
  INDEX `fk_posts_users_idx` (`users_ID_user` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users`
    FOREIGN KEY (`users_ID_user`)
    REFERENCES `pictago`.`users` (`ID_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pictago`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pictago`.`comments` (
  `ID_comment` INT NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `users_ID_user` INT NOT NULL,
  `posts_ID_post` INT NOT NULL,
  `posts_users_ID_user` INT NOT NULL,
  PRIMARY KEY (`ID_comment`, `users_ID_user`, `posts_ID_post`, `posts_users_ID_user`),
  INDEX `fk_comments_users1_idx` (`users_ID_user` ASC) VISIBLE,
  INDEX `fk_comments_posts1_idx` (`posts_ID_post` ASC, `posts_users_ID_user` ASC) VISIBLE,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_ID_user`)
    REFERENCES `pictago`.`users` (`ID_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_posts1`
    FOREIGN KEY (`posts_ID_post` , `posts_users_ID_user`)
    REFERENCES `pictago`.`posts` (`ID_post` , `users_ID_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
