SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

DROP DATABASE IF EXISTS soap_database;
CREATE DATABASE IF NOT EXISTS soap_database;
USE soap_database;

CREATE TABLE IF NOT EXISTS `Logging` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(256) NOT NULL,
  `IP` varchar(128) NOT NULL,
  `endpoint` varchar(256) NOT NULL,
  `requested_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Logging` (`description`, `IP`, `endpoint`, `requested_at`) VALUES
('ini testing saja','192.168.0.1','localhost','2022-11-27 21:00:00'),
('ini testing saja','192.168.0.1','localhost','2022-11-27 21:00:00');

CREATE TABLE IF NOT EXISTS `Subscription` (
  `creator_id` int NOT NULL,
  `subscriber_id` int NOT NULL,
  `status` enum('PENDING','ACCEPTED','REJECTED') NOT NULL DEFAULT 'PENDING',
  PRIMARY KEY (`creator_id`,`subscriber_id`)
);

INSERT INTO `Subscription` (`creator_id`, `subscriber_id`, `status`) VALUES
(3,5,'ACCEPTED'),
(4,6,'PENDING'),
(5,7,'PENDING'),
(6,8,'PENDING'),
(7,9,'PENDING'),
(8,10,'ACCEPTED'),
(9,11,'PENDING'),
(10,12,'PENDING'),
(3,13,'PENDING'),
(4,14,'PENDING'),
(5,15,'ACCEPTED'),
(6,16,'REJECTED'),
(7,5,'PENDING'),
(8,6,'PENDING'),
(9,7,'PENDING'),
(10,8,'ACCEPTED'),
(3,9,'PENDING'),
(4,10,'PENDING'),
(5,11,'PENDING'),
(6,12,'PENDING'),
(7,13,'ACCEPTED'),
(8,14,'PENDING'),
(9,15,'PENDING'),
(10,16,'PENDING');

COMMIT;