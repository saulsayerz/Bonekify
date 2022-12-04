SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

DROP DATABASE IF EXISTS plain_database;
CREATE DATABASE IF NOT EXISTS plain_database;
USE plain_database;


CREATE TABLE IF NOT EXISTS `User` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `username` varchar(256) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `playCount` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE (`email`),
  UNIQUE (`username`)
);

INSERT INTO `User` (`user_id`, `email`, `password`, `username`, `isAdmin`, `playCount`) VALUES
(1, 'admin1@admin.com', '$2y$10$Xy4nmPczcHGJ2dyOosposeWCImI/tg8o2tlaun4qLcsh29FiqcuHO', 'AdminAdmin1', 1, 0),
(2, 'admin2@admin.com', '$2y$10$22s8ADAerpxxG0vC87k1V.CD5uum2n/XoQYJGZ0lKcjU8dw/yQi4e', 'AdminAdmin2', 1, 0),
(3, 'admin3@admin.com', '$2y$10$cX22Y4/aHkq7qybcxQSFJekyBgRb35POgbb7Gkv8WIv1Kyje9tdlW', 'AdminAdmin3', 1, 0),
(4, 'admin4@admin.com', '$2y$10$yq0Jb7h46x2FbHGTVdKZH.LYkG6E/JwIXZrahElpMqmgk5WBJdfU2', 'AdminAdmin4', 1, 0),
(5, 'user1@user.com', '$2y$10$DQ4EjlFTkqMcbQI3u2ULCedEQBlcinqKrtW7kjutQv4QiIN/yJ1v.', 'UserUser1', 0, 0),
(6, 'user2@user.com', '$2y$10$7/cCLpqa4YPaD3dXyjlka.cIvOOHOhg6an518j.IfdtUJnFaixg9K', 'UserUser2', 0, 0),
(7, 'user3@user.com', '$2y$10$JjaAn/NwkwBqSc/5qA6jFeKQXEYSmOWsf0P82TVyH1KOMgMs8KY4O', 'UserUser3', 0, 0),
(8, 'user4@user.com', '$2y$10$R/n2HVDakLbqICsGdcFxf.7rN63D5XmaLNVMn3L7HLEOfItkG0WRm', 'UserUser4', 0, 0),
(9, 'user5@user.com', '$2y$10$E951f3K2l4KMgRuL3hYg0Oc4qjFSxKnT0XFsKldUcijuu2KjCze02', 'UserUser5', 0, 0),
(10, 'user6@user.com', '$2y$10$jSZv6jtd6ABLPTEMsERES.b.vpNa0101S2Koyu5W6B2Z1ZakeEJXW', 'UserUser6', 0, 0),
(11, 'user7@user.com', '$2y$10$XrbhuW.awe84jNv8HUuOXOVx60kvB77/9ltOO6Z7oH3IDjmUqwzzW', 'UserUser7', 0, 0),
(12, 'user8@user.com', '$2y$10$4t3rjh/tYuBh0mkAMQfna.tRU5BPtk5/h0sAU3OBWgg.DCJQlssw2', 'UserUser8', 0, 0),
(13, 'user9@user.com', '$2y$10$0Iu5s8CVwNDpLevH3KwbM.GCWr9MLEa6ALgCkmRFwLEYZ5WxIp8ha', 'UserUser9', 0, 0),
(14, 'user10@user.com', '$2y$10$mXG5Qiscwc3WA9ny9L6qiuJN3pkLonlzCB7sDGg3NOU.F60ZkYQli', 'UserUser10', 0, 0),
(15, 'user11@user.com', '$2y$10$ApVT4R0JgG9f7L2H6Khuu.JUsDu/NOg9bIB2FAhPdqB0jJ1yVwp1G', 'UserUser11', 0, 0),
(16, 'user12@user.com', '$2y$10$P2Jaz/FsZM2PuRIIJgWNKeGxayE0YkZ64X.xOjQPM2SJWUfis48oS', 'UserUser12', 0, 0);

CREATE TABLE IF NOT EXISTS `Album` (
  `album_id` int NOT NULL AUTO_INCREMENT,
  `Judul` varchar(64) NOT NULL,
  `Penyanyi` varchar(128) NOT NULL,
  `Total_duration` int NOT NULL,
  `Image_path` varchar(256) NOT NULL,
  `Tanggal_terbit` date NOT NULL,
  `Genre` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`album_id`)
);

INSERT INTO `Album` (`album_id`, `Judul`, `Penyanyi`, `Total_duration`, `Image_path`, `Tanggal_terbit`, `Genre`) VALUES
(1, '30', 'Adele', 3509, 'd5a7f2aeabcde0040e08294d6b02c430.png', '2019-11-19', 'Pop'),
(2, 'Menari Dengan Bayangan', 'Hindia', 3441, 'a6d24e9900462d6f7044b2f5f9835068.jpg', '2019-11-29', 'Rock Alternatif'),
(3, 'Sentimental', 'Juicy Luicy', 2451, 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', '2020-11-06', 'Pop Indonesia'),
(4, 'The Blue Room', 'Coldplay', 1173, '29a4f03ad3b79758780b01d76b659b96.jpeg', '1999-10-11', 'Rock Alternatif');

CREATE TABLE IF NOT EXISTS `Song` (
  `song_id` int NOT NULL AUTO_INCREMENT,
  `Judul` varchar(64) NOT NULL,
  `Penyanyi` varchar(128) DEFAULT NULL,
  `Tanggal_terbit` date NOT NULL,
  `Genre` varchar(64) DEFAULT NULL,
  `Duration` int NOT NULL,
  `Audio_path` varchar(256) NOT NULL,
  `Image_path` varchar(256) DEFAULT NULL,
  `album_id` int DEFAULT NULL,
  PRIMARY KEY (`song_id`),
  FOREIGN KEY (`album_id`) REFERENCES `Album`(`album_id`)
);

INSERT INTO `Song` (`song_id`, `Judul`, `Penyanyi`, `Tanggal_terbit`, `Genre`, `Duration`, `Audio_path`, `Image_path`, `album_id`) VALUES
(1, 'Strangers By Nature', 'Adele', '2019-11-19', 'Pop', 183, '4428a274882ca0c9f700b8152845e0b6.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(2, 'Easy On Me', 'Adele', '2019-11-19', 'Pop', 226, '6b32763d8a81a9e1e6a49f85bae78da1.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(3, 'My Little Love', 'Adele', '2019-11-19', 'Pop', 390, '87916529878102d3320fe64971da5e55.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(4, 'Cry Your Heart Out', 'Adele', '2019-11-19', 'Pop', 256, '95d6ff8e32cc3cc51fefa9c3e5a6ef6d.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(5, 'Oh My God', 'Adele', '2019-11-19', 'Pop', 226, '29b1551210f59db20fbe904c5c5c91d0.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(6, 'Can I Get It', 'Adele', '2019-11-19', 'Pop', 211, '0e7a1f1d9e7d50f5655286e738fcc79c.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(7, 'I Drink Wine', 'Adele', '2019-11-19', 'Pop', 377, '6e1075cdb2d153c63025e80ba43188de.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(8, 'All Night Parking (with Erroll Garner) Interlude', 'Adele', '2019-11-19', 'Pop', 163, '4327276b522152a74a0c455e7b74f035.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(9, 'Woman Like Me', 'Adele', '2019-11-19', 'Pop', 301, '5bcf17d1b7dbb76f8fcc1718f8fdc0bf.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(10, 'Hold On', 'Adele', '2019-11-19', 'Pop', 367, '802987ae9bd92765ce3aac03cb558c9b.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(11, 'To Be Loved', 'Adele', '2019-11-19', 'Pop', 405, 'a249be71972eaa76b57fa4ba60333bca.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(12, 'Love Is A Game', 'Adele', '2019-11-19', 'Pop', 404, 'e9147407ee309896153e5bae71c6aaf7.mp3', 'd5a7f2aeabcde0040e08294d6b02c430.png', 1),
(13, 'Evakuasi', 'Hindia', '2019-11-29', 'Rock Alternatif', 206, 'da36c657c32c5f59a11c21960fdd8ef5.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(14, 'Wejangan Mama', 'Hindia', '2019-11-29', 'Rock Alternatif', 145, 'ea5f664789ee99d2ad80860def6298ac.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(15, 'Besok Mungkin Kita Sampai', 'Hindia', '2019-11-29', 'Rock Alternatif', 241, '72282410421550ba256565d70bf8298e.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(16, 'Jam Makan Siang', 'Hindia', '2019-11-29', 'Rock Alternatif', 282, 'd5030e54e227a099a16f138df9fdae14.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(17, 'Dehidrasi', 'Hindia', '2019-11-29', 'Rock Alternatif', 240, 'f906f670835dcd3cc211dd9209b712c7.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(18, 'Untuk Apa / Untuk Apa?', 'Hindia', '2019-11-29', 'Rock Alternatif', 379, '73038102bc211122f065556286daba04.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(19, 'Voice Note Anggra', 'Hindia', '2019-11-29', 'Rock Alternatif', 37, 'da6a0e4800ea53eff798e501ef097d1f.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(20, 'Secukupnya', 'Hindia', '2019-11-29', 'Rock Alternatif', 206, 'f0c3b875c1afb8cc69787ec69238fb3e.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(21, 'Belum Tidur', 'Hindia', '2019-11-29', 'Rock Alternatif', 221, '5edc4a5557a03e401a40439f87d3a07b.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(22, 'Apapun Yang Terjadi', 'Hindia', '2019-11-29', 'Rock Alternatif', 229, 'cb17d88e573cb0e97aafb3f5cd28e0e8.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(23, 'Membasuh', 'Hindia', '2019-11-29', 'Rock Alternatif', 374, 'f584bd0aa9fada384fa930eb797af0bd.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(24, 'Rumah Ke Rumah', 'Hindia', '2019-11-29', 'Rock Alternatif', 278, 'd9dd1a055a4a0a9f20500f6c2d69800d.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(25, 'Mata Air', 'Hindia', '2019-11-29', 'Rock Alternatif', 227, 'eb69234a727c0e69d4df9ada9e5ecc63.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(26, 'Wejangan Caca', 'Hindia', '2019-11-29', 'Rock Alternatif', 87, 'c05f6dfbba9848cb7d8c0adfb1b29777.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(27, 'Evaluasi', 'Hindia', '2019-11-29', 'Rock Alternatif', 202, '6bb186096c30831a7ea40e3c8855fe64.mp3', 'a6d24e9900462d6f7044b2f5f9835068.jpg', 2),
(28, 'Di Balik Layar', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 246, 'b2e045e717941ea421ca6651315ba4de.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(29, 'H-5', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 205, '4586549eaeb10a9e3b238079a68daa60.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(30, 'Jemari', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 216, 'f4e6c7842d9fc843db81eb3d05e118a9.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(31, 'Kembali Kesepian', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 251, '97fb3ba83bee90ebb7f2178feb1c18d7.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(32, 'Lagu Terakhir', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 179, '33b54d3651726a20f52e66bb7f4e68a8.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(33, 'Lantas', 'Juicy Luicy', '2020-11-02', 'Pop Indonesia', 234, '8e0c4abac6cfec13fb9ee0c778d22179.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(34, 'Mawar Jingga', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 211, '9f615b6ac90a376b15e213f4863ae766.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(35, 'Siapa Tahu', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 203, 'f56e4b92c3d2a06ec830ffd45f6641ec.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(36, 'Tak Terbaca', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 205, 'efa73e5d3291196a357f697fda0bdba7.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(37, 'Tanpa Tergesa', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 220, 'b0f2e3e42405bcd41826b22b938f0069.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(38, 'Terlalu Tinggi', 'Juicy Luicy', '2020-11-06', 'Pop Indonesia', 281, 'd1865fb3b1188bc841c3d5424d34a181.mp3', 'e9a98158f673b0da9f8c7a3a7d2d83b3.jpg', 3),
(39, 'I Want To Hold Your Hand', 'The Beatles', '1963-11-29', 'Rock and Roll', 146, '0eb0b0339a58fe00bf3ea957e3aa56e5.mp3', 'bafa15991d9f3e4f54196911e4786ea2.jpeg', NULL),
(40, 'Hey Jude', 'The Beatles', '1968-08-26', 'Pop Rock', 426, 'e8648b5a6771080723d5eeded235ae33.mp3', 'af5366cc620b39b5d0716b85f4fdb4ce.jpeg', NULL),
(41, 'Bigger Stronger', 'Coldplay', '1999-10-11', 'Rock Alternatif', 289, '1c95a2f978b99cf085908473e332b462.mp3', '29a4f03ad3b79758780b01d76b659b96.jpeg', 4),
(42, 'Don''t Panic', 'Coldplay', '1999-10-11', 'Rock Alternatif', 158, '92b3a130394793e027a1474cf2720a0e.mp3', '29a4f03ad3b79758780b01d76b659b96.jpeg', 4),
(43, 'See You Soon', 'Coldplay', '1999-10-11', 'Rock Alternatif', 171, '2a760e4071b8fd73e9797356ae6625b2.mp3', '29a4f03ad3b79758780b01d76b659b96.jpeg', 4),
(44, 'High Speed', 'Coldplay', '1999-10-11', 'Rock Alternatif', 257, '2d91990c4a920e01e610037b40691478.mp3', '29a4f03ad3b79758780b01d76b659b96.jpeg', 4),
(45, 'Such a Rush', 'Coldplay', '1999-10-11', 'Rock Alternatif', 298, 'f73f7b7f41c80109453c981c942d1dc9.mp3', '29a4f03ad3b79758780b01d76b659b96.jpeg', 4);

CREATE TABLE IF NOT EXISTS `Subscription` (
  `creator_id` int NOT NULL,
  `subscriber_id` int NOT NULL,
  `status` enum('PENDING','ACCEPTED','REJECTED') NOT NULL DEFAULT 'PENDING',
  PRIMARY KEY (`creator_id`,`subscriber_id`),
  FOREIGN KEY (`subscriber_id`) REFERENCES `User`(`user_id`)
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