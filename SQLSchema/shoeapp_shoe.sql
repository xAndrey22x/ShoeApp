-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: shoeapp
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shoe`
--

DROP TABLE IF EXISTS `shoe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `color` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `price` float NOT NULL,
  `shoe_code` varchar(255) NOT NULL,
  `size` float NOT NULL,
  `image_url2` varchar(255) DEFAULT NULL,
  `image_url3` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoe`
--

LOCK TABLES `shoe` WRITE;
/*!40000 ALTER TABLE `shoe` DISABLE KEYS */;
INSERT INTO `shoe` VALUES (5,'Black','Yeezy Boost 350','adidas.jpg','Adidas',555.22,'de9b7c82-632a-4a06-a4fb-4988dcfd2549',42,'adidas2.jpg','adidas3.jpg',4),(6,'White','Yeezy Boost 350 V2','adidasW.jpg','Adidas',756,'ae615303-69ae-47dc-9234-f45ef3309a38',41,'adidasW2.jpg','adidasW3.jpg',6),(7,'Gray','Jordan 4 Infrared','jordan11.jpg','Nike',222.5,'c73f5405-2536-4ba1-bfde-619ec2fe1bc1',39.5,'jordan12.jpg','jordan13.jpg',9),(9,'Blue','Air Jordan 1 High UNC','jordan31.jpg','Nike',210,'73585f80-a659-4d90-8786-e050efddd31c',44,'jordan32.jpg','jordan33.jpg',8),(10,'Black','Air Jordan 1 Mid Panda','jordan41.jpg','Nike',198.6,'39b4bcab-71a6-494a-823a-bb0a7add24d2',37,'jordan42.jpg','jordan43.jpg',5),(11,'Gray','9060 Black Castlerock','nb11.jpg','New Balance',223.5,'31f4b2ac-298e-4c2c-9d77-76feb20d5fbd',43,'nb12.jpg','nb13.jpg',9),(12,'White','Air Force 1 Mid Off White','nike11.jpg','Nike',330,'49d23256-5850-4bf1-a177-3d4c09a484cf',41,'nike12.jpg','nike13.jpg',7),(13,'Red','Air Jordan 1 Retro High OG Satin Bred','nike21.jpg','Nike',215.42,'57ce7c31-de94-4618-ba18-7eca68e44c85',40,'nike22.jpg','nike23.jpg',7),(15,'White','550 Rain Cloud Panda','nb21.jpg','New Balance',199.99,'8c23a874-927b-48d4-9d3d-f415e9efeed6',41,'nb22.jpg','nb23.jpg',6),(16,'Yellow','Jordan 4 Retro Thunder','jordan21.jpg','Nike',230.42,'fe5af7b0-7391-464c-a381-cb4dd9a6a06c',43,'jordan22.jpg','jordan23.jpg',4);
/*!40000 ALTER TABLE `shoe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-17 20:12:58
