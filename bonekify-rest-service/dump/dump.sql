SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

DROP DATABASE IF EXISTS rest_database;
CREATE DATABASE IF NOT EXISTS rest_database;
USE rest_database;

CREATE TABLE IF NOT EXISTS `User` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `username` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE (`email`),
  UNIQUE (`username`)
);

INSERT INTO `User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES
(1, 'admin1@admin.com', '$2b$10$e1VnuBaUwF95XMpM16aIyuy8Y3jny/wtJrQtcIcB233Ncl4bXMo7.', 'admin1', 'Admin1', 1),
(2, 'admin2@admin.com', '$2b$10$c9UT0BodbsNCYBdHme186Ok7LqRrWnmJDMumgN7.RE/QWII6o5TXi', 'admin2', 'Admin2', 1),
(3, 'katyperry@gmail.com', '$2b$10$aoPdMz7DWa3RblLt25Vw6.opf3rTQeMH/j1mmlLI50pEIOUzvBjG6', 'katyperry', 'Katy Perry', 0),
(4, 'coldplay@gmail.com', '$2b$10$5wv0nNQDekPTtsN8fqNiru9LzmKHCxXdrk/UcuOcZpNeqLQR2gdQ2', 'coldplay', 'Coldplay', 0),
(5, 'oasis@gmail.com', '$2b$10$lNy9.Uev/w7Xx6.6fXtdn.UAN3bPwSYhAzoE8Yrdqoluqb2lSpNwq', 'oasis', 'Oasis', 0),
(6, 'beatles@gmail.com', '$2b$10$bP9pTdfani6qzStOQeaOnec/wIsFv0S05uwfdqnRz1WTh8pOr3a4q', 'beatles', 'The Beatles', 0),
(7, 'johnwilliams@gmail.com', '$2b$10$2qKxmm2FlMEso0.SuR2CVuY2sj7XLdg3JC7/k87odhCLNwnKfvjSS', 'johnwilliams', 'John Williams', 0),
(8, 'billyjoel@gmail.com', '$2b$10$MgSZ4WWYp9gFsMocx/9lGOhhMHFLCO4M7xS6E4ATXurzTOHQVj6ea', 'billyjoel', 'Billy Joel', 0),
(9, 'westlife@gmail.com', '$2b$10$M9bxUrAR1Ab2NLNdvAjLfuoBL35jLAmb9LKxh/H43d1JN/OuADaUi', 'westlife', 'Westlife', 0),
(10, 'backstreetboys@gmail.com', '$2b$10$ZwCNVKU3Cf0HgtAGURf22evMU2lBwbUZNeGYVtyLl.yeWVv3XGHta', 'backstreetboys', 'Backstreet Boys', 0);

CREATE TABLE IF NOT EXISTS `Song` (
  `song_id` int NOT NULL AUTO_INCREMENT,
  `Judul` varchar(64) NOT NULL,
  `penyanyi_id` int DEFAULT NULL,
  `Audio_path` varchar(256) NOT NULL,
  PRIMARY KEY (`song_id`),
  FOREIGN KEY (`penyanyi_id`) REFERENCES `User`(`user_id`)
);

INSERT INTO `Song` (`song_id`, `Judul`, `penyanyi_id`, `Audio_path`) VALUES
(1, 'Dark Horse', 3, '1669926519107.mp3'),
(2, 'Roar', 3, '1669926729795.mp3'),
(3, 'Firework', 3, '1669926792918.mp3'),
(4, 'Paradise', 4, '1669926964005.mp3'),
(5, 'Hymn For The Weekend', 4, '1669927075513.mp3'),
(6, 'My Universe', 4, '1669927173987.mp3'),
(7, 'Wonderwall', 5, '1669927325494.mp3'),
(8, 'Don''t Look Back In Anger', 5, '1669928040671.mp3'),
(9, 'Champagne Supernova', 5, '1669928101378.mp3'),
(10, 'Yesterday', 6, '1669928203581.mp3'),
(11, 'Blackbird', 6, '1669928270969.mp3'),
(12, 'Help!', 6, '1669928319454.mp3'),
(13, 'The Throne Room and End Title', 7, '1669928441590.mp3'),
(14, 'E.T. Flying Theme', 7, '1669928517363.mp3'),
(15, 'Star Wars Main Theme', 7, '1669928607185.mp3'),
(16, 'Piano Man', 8, '1669928704067.mp3'),
(17, 'Uptown Girl', 8, '1669928768311.mp3'),
(18, 'Vienna', 8, '1669928844385.mp3'),
(19, 'Fool Again', 9, '1669928931058.mp3'),
(20, 'My Love', 9, '1669928979850.mp3'),
(21, 'Swear It Again', 9, '1669929051120.mp3'),
(22, 'I Want It That Way', 10, '1669929162536.mp3'),
(23, 'Shape Of My Heart', 10, '1669929230314.mp3'),
(24, 'Everybody (Backstreet''s Back)', 10, '1669929334371.mp3');

COMMIT;