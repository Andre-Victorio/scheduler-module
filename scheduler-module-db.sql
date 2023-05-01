-- MariaDB dump 10.19  Distrib 10.4.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: scheduler-module-db
-- ------------------------------------------------------
-- Server version	10.4.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrator` (
  `AdminId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Role` varchar(25) NOT NULL,
  `UserType` varchar(25) NOT NULL,
  `ID` varchar(25) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`AdminId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES (1,'admin','admin@gmail.com','admin','admin','admin','123456789',0);
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointment` (
  `AppointmentId` int(11) NOT NULL AUTO_INCREMENT,
  `ScheduleId` int(11) NOT NULL,
  `StudentId` int(11) NOT NULL,
  `PriorityNumber` int(60) DEFAULT NULL,
  `Description` varchar(255) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`AppointmentId`),
  KEY `fk_student_id` (`StudentId`),
  KEY `fk_schedule_id` (`ScheduleId`),
  CONSTRAINT `fk_schedule_id` FOREIGN KEY (`ScheduleId`) REFERENCES `schedule` (`ScheduleId`),
  CONSTRAINT `fk_student_id` FOREIGN KEY (`StudentId`) REFERENCES `student` (`StudentId`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (23,14,45,1,'1','consultation',1),(25,18,44,3,'helo','miscellaneous',1),(27,10,45,2,'hehe','greviances',1),(29,18,44,4,'plssssss AHHHHHHH','miscellaneous',1);
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty` (
  `FacultyId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `UserType` varchar(25) NOT NULL,
  `ID` varchar(25) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`FacultyId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (11,'John Anthony Torrejas','123@g.c','1234','program coordinator','faculty','18102597',1),(12,'2','2@g','1234','program coordinator','faculty','2',0),(13,'3','3@g','1234','lab technician','faculty','3',0),(16,'7','7@g','1234','full time instructor','faculty','7',0),(17,'4','4@g','1234','lab technician','faculty','4',0),(18,'5','5@g','1234','program coordinator','faculty','5',0),(19,'6','6@g','1234','full time instructor','faculty','6',0),(20,'z','z@g','1234','program coordinator','faculty','z',0),(21,'x','x@g','1234','program coordinator','faculty','x',0),(22,'q33','q44@g','1234','full time instructor','faculty','qcc',0),(23,'faculty','faculty@gmail.com','1234','full time instructor','faculty','1234',0);
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `ScheduleId` int(11) NOT NULL AUTO_INCREMENT,
  `FacultyId` int(11) NOT NULL,
  `Date` date NOT NULL,
  `StartTime` time NOT NULL,
  `EndTime` time NOT NULL,
  `Location` varchar(50) NOT NULL,
  PRIMARY KEY (`ScheduleId`),
  KEY `fk_facultyId` (`FacultyId`),
  CONSTRAINT `fk_facultyId` FOREIGN KEY (`FacultyId`) REFERENCES `faculty` (`FacultyId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (7,11,'2023-04-27','01:29:00','01:35:00','1'),(8,11,'2023-04-29','12:05:00','12:09:00','33'),(10,22,'2023-04-30','04:15:00','04:17:00','5555'),(11,23,'2023-04-29','13:55:00','01:49:00','123'),(12,23,'2023-04-30','13:58:00','12:52:00','123'),(14,23,'2023-05-01','16:39:00','16:39:00','may 1'),(15,23,'2023-05-01','20:45:00','16:42:00','may 1 gihapon yes'),(16,23,'2023-04-30','00:28:00','12:28:00','12344'),(18,12,'2023-04-30','03:02:00','17:02:00','asd');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `StudentId` int(11) NOT NULL AUTO_INCREMENT,
  `Course` varchar(50) DEFAULT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `ID` varchar(25) NOT NULL,
  `Role` varchar(25) NOT NULL,
  `UserType` varchar(25) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`StudentId`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (44,'11','1','1@1','1234','12222222','student','student',0),(45,NULL,'student','student@gmail.com','1234','12444','student','student',0);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-01 18:37:59
