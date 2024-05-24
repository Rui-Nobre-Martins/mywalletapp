# ************************************************************
# Sequel Ace SQL dump
# Versão 20067
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Servidor: localhost (MySQL 5.5.5-10.4.28-MariaDB)
# Banco de Dados: my_wallet_app
# Tempo de geração: 2024-05-24 17:05:07 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump de tabela transactions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `transactions`;

CREATE TABLE `transactions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;

INSERT INTO `transactions` (`id`, `user_id`, `amount`, `description`, `created_at`, `updated_at`)
VALUES
	(1,1,100.00,'income','2024-04-23 18:45:48','2024-04-23 18:45:48'),
	(2,3,200.00,'income','2024-04-23 18:47:21','2024-04-28 20:21:45'),
	(3,2,300.00,'income','2024-04-23 18:48:12','2024-04-28 20:21:48'),
	(4,1,1000.00,NULL,'2024-04-29 18:39:57','2024-04-29 18:39:57'),
	(10,1,1500.00,'new income','2024-04-29 21:52:23','2024-04-29 21:52:23'),
	(11,2,2500.00,'new income','2024-04-29 21:53:14','2024-04-29 22:18:12'),
	(13,3,500.00,'income','2024-04-30 18:02:29','2024-04-30 18:02:29'),
	(54,20,10000.00,'cookies','2024-05-09 19:15:33','2024-05-09 19:15:46'),
	(55,20,2000.00,'lalal','2024-05-09 19:16:17','2024-05-09 19:16:17'),
	(57,20,1.00,'euro','2024-05-09 19:16:26','2024-05-09 19:16:26'),
	(58,20,5.00,'despesa','2024-05-10 18:58:57','2024-05-10 18:58:57'),
	(59,20,-5.00,'despesa','2024-05-10 18:59:09','2024-05-10 18:59:09'),
	(60,20,-15.00,'despesa','2024-05-10 18:59:40','2024-05-10 18:59:40'),
	(61,2,-2801.00,'despesa','2024-05-10 22:01:47','2024-05-10 22:01:47'),
	(62,2,-5.00,'despesa','2024-05-10 22:02:24','2024-05-10 22:02:24'),
	(63,19,2.00,NULL,'2024-05-12 21:22:02','2024-05-12 21:22:02'),
	(64,19,-3.00,NULL,'2024-05-12 21:22:11','2024-05-12 21:22:11'),
	(65,22,3.00,'income','2024-05-13 18:38:14','2024-05-13 18:38:14'),
	(66,22,1000.00,'Stocks','2024-05-13 18:38:33','2024-05-13 18:38:33'),
	(67,22,-1000.00,'rent ','2024-05-13 18:38:55','2024-05-13 18:38:55'),
	(68,22,100.00,NULL,'2024-05-17 19:10:54','2024-05-17 19:10:54'),
	(69,22,1.00,NULL,'2024-05-17 19:12:03','2024-05-17 19:12:03'),
	(70,22,-101.00,NULL,'2024-05-17 19:12:09','2024-05-17 19:12:09'),
	(73,29,100.00,'test','2024-05-21 19:23:18','2024-05-21 19:23:18'),
	(76,29,1000.00,'test2','2024-05-21 19:53:23','2024-05-21 19:53:23'),
	(77,29,-100.00,'market','2024-05-21 22:21:34','2024-05-21 22:21:34'),
	(78,29,-100.00,'market','2024-05-21 22:21:36','2024-05-21 22:21:36'),
	(79,29,-100.00,'market','2024-05-21 22:21:37','2024-05-21 22:21:37'),
	(81,29,1000.00,'Salary','2024-05-22 20:25:27','2024-05-22 20:25:27'),
	(82,29,-50.00,'gym','2024-05-22 20:27:06','2024-05-23 18:22:11'),
	(83,29,1001.00,'income','2024-05-23 17:49:23','2024-05-23 18:24:51'),
	(84,29,-30.00,'market','2024-05-23 18:30:22','2024-05-23 18:30:22');

/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump de tabela users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`)
VALUES
	(1,'Rui','rui@gmail.com','123456','2024-04-23 18:17:47','2024-04-27 21:30:29'),
	(2,'filipa ','filipa@hotmail.com','1234','2024-04-23 18:46:18','2024-04-23 18:46:29'),
	(3,'helder','helder@iol.com','123','2024-04-23 18:47:48','2024-04-23 18:47:48'),
	(4,'fernando','fernando@gmail.com','1234567','2024-04-27 21:32:34','2024-04-27 21:37:26'),
	(7,'Isadora','Isadora@gmail.com','12345','2024-04-29 20:15:41','2024-04-29 20:15:41'),
	(8,'Rodrigo','rodrigo@gmail.com','12345','2024-04-29 20:16:07','2024-04-29 20:16:07'),
	(9,'Rui223344556','rui32333333@gmail.com','123456','2024-05-06 16:23:30','2024-05-06 16:23:30'),
	(10,'Rui223344556','rui323aaaaaaaaa@gmail.com','123456','2024-05-06 16:26:40','2024-05-06 16:26:40'),
	(11,'vamosla','ruisssssss@gmail.com','123456','2024-05-06 17:15:41','2024-05-06 17:15:41'),
	(12,'hashTest','hashTest@gmail.com','123','2024-05-08 15:32:59','2024-05-08 15:32:59'),
	(13,'hashTest','hashTest1@gmail.com','123','2024-05-08 15:35:52','2024-05-08 15:35:52'),
	(14,'Rui hash123','hashTest224@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$4QZUD4groDi4x8ras8WIug$P5RYeAV3YHqT7M2N6+lPlyBvrLUFVMeuUXCavdJ3MCc','2024-05-08 16:46:19','2024-05-08 16:46:19'),
	(15,'test1234','hashTest10000@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$94/kVQHwWnRgOopZ3nVWfw$LRYd/rdt4o37nkKbhGdnMew/C4Idy1GeNEemtm39Z1U','2024-05-08 16:53:55','2024-05-08 16:53:55'),
	(16,'Ruitest','ruiteststst@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$tuuc0WOFM6PgtQR+qU6e5w$TFjYMVnW5zrYW81IwJW/zN4MknknWcQGf+p93fGhw/o','2024-05-08 17:01:34','2024-05-08 17:01:34'),
	(17,'Rui Martins','ruimartins@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$DzmZz5t1qE2k2B99WC99kQ$BHktUxRYyW4oPsMWy/Hsk6jUNoKr71RJN+8vuTM33Ho','2024-05-08 20:36:42','2024-05-08 20:36:42'),
	(19,'filipa','filipa@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$Y+64ebhBN8cXSYloIy4XPQ$Bj1s8Hdei6uFxQJxHFd0IOS+6AI85xIM+fNBfhrBn4A','2024-05-09 15:49:46','2024-05-09 15:49:46'),
	(20,'Rui Nobre','ruinobre@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$ZYvI/j8IIGXVWwmL4hpmMQ$01SpvalwVWO+W1bJRxJZfYb65iQQ/FpNWc/lSimKSvE','2024-05-09 19:11:00','2024-05-09 19:11:00'),
	(22,'Rui Nobre Martins','ruinobremartins@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$qSacq+M7Sbfxyn3KhSFz2A$pYGhmrRkZS3kJQLFah5T41MbKWzSUkpJ5XL2KDUUwGs','2024-05-13 16:57:48','2024-05-13 16:57:48'),
	(25,'test','test@test.com','$argon2id$v=19$m=65536,t=3,p=4$zr1IknQPpQoJUwFVWS7Wnw$5OETAS8+l6TQZBa42CZxFPzZMlTEg/tO4Y+1vdwiJJM','2024-05-15 17:20:18','2024-05-15 17:20:18'),
	(26,'Rui','ruitest@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$rSL2EWcGocuelEdYtHCCjw$2CEfO1odPFgRa1AVXlJ6mpaQKXSSI5dzLxDf1qXfM0U','2024-05-15 19:21:10','2024-05-15 19:21:10'),
	(27,'test1','test1@test.com','$argon2id$v=19$m=65536,t=3,p=4$CkgltbAgikLhv+Vk76882g$8/ccgdsw0R/dvOZpPRXxgJt7mUJknNUrfW4tx9U7Fmg','2024-05-15 19:29:09','2024-05-15 19:29:09'),
	(28,'testlalala','testlalala@test.com','$argon2id$v=19$m=65536,t=3,p=4$ZSexFw3qmLKT3sdMkNTRTg$IaEFcNHJ+oNygdZ+2ZYL6E4IgjDV66aXEN14ecbR9H8','2024-05-15 19:54:28','2024-05-15 19:54:28'),
	(29,'testla','testla@test.com','$argon2id$v=19$m=65536,t=3,p=4$46TFF1hpGNeWjMheNUeR1g$9FH5iFt2MY6G3Qxsuram1K2buMtDwQzvI3BoLSXR7yM','2024-05-15 19:56:31','2024-05-15 19:56:31'),
	(30,'testla1','testla1@test.com','$argon2id$v=19$m=65536,t=3,p=4$3ftpRIFOM3yZYZU4g/tGxw$DtzEEDF/cIAlQQB0gN7Q+zqATj8C49okdOrHg+0h5uA','2024-05-15 20:30:35','2024-05-15 20:30:35'),
	(33,'ruivamoslala','ruivamoslala@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$IKzvJOU8q2T+O7jwWQgvqQ$KH5fw+h+Zfcs22Hl4osdyLbwkBePhBZ9tIU/97lUBUY','2024-05-19 19:25:24','2024-05-19 19:28:44'),
	(35,'teste','teste@gmail.com','test','2024-05-24 17:42:16','2024-05-24 17:43:41');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump de tabela wallet
# ------------------------------------------------------------

DROP TABLE IF EXISTS `wallet`;

CREATE TABLE `wallet` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `currency` enum('EUR','USD','GBP') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `wallet_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;

INSERT INTO `wallet` (`id`, `user_id`, `currency`, `created_at`, `updated_at`)
VALUES
	(1,1,'USD','2024-04-23 18:45:15','2024-04-29 17:06:58'),
	(2,3,'USD','2024-04-23 18:46:40','2024-04-28 20:21:32'),
	(3,2,'GBP','2024-04-23 18:47:58','2024-04-28 20:21:29'),
	(4,4,'USD','2024-04-28 21:52:52','2024-04-28 21:54:11'),
	(7,8,'GBP','2024-04-30 18:26:45','2024-04-30 18:32:13'),
	(8,7,'GBP','2024-04-30 18:31:08','2024-04-30 18:31:08'),
	(9,20,'EUR','2024-05-09 19:11:33','2024-05-09 19:11:33'),
	(10,19,'USD','2024-05-12 21:21:49','2024-05-12 21:21:49');

/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
