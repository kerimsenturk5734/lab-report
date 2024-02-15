CREATE DATABASE  IF NOT EXISTS `lab_report` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lab_report`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: lab_report
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `diseases`
--

DROP TABLE IF EXISTS `diseases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diseases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lab_request_type` enum('BIOPSY','BLOOD_ANALYSIS','URINE_TEST') DEFAULT NULL,
  `diagnostic_report_id` varchar(255) DEFAULT NULL,
  `doctor_id` varchar(255) DEFAULT NULL,
  `lab_technician_id` varchar(255) DEFAULT NULL,
  `pathologic_report_id` varchar(255) DEFAULT NULL,
  `patient_id` varchar(255) DEFAULT NULL,
  `disease_state` enum('DELETED','DIAGNOSTIC_RESULTED','PATHOLOGIC_RESULTED','UPDATED','WAITING_RESULTS','PATHOLOGIC_UPDATED','DIAGNOSTIC_UPDATED') DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_fhkdq2qnqc2nm7g93ryf56m4y` (`diagnostic_report_id`),
  UNIQUE KEY `UK_hymon9x8huprjowy7dfj3t8xj` (`pathologic_report_id`),
  KEY `FKle38tecjwj83jsnuo9cqhrr45` (`doctor_id`),
  KEY `FKfe9vuh169btar5upppylnxw9x` (`lab_technician_id`),
  KEY `FKg8m25nmowehf2an24qhsngitn` (`patient_id`),
  CONSTRAINT `FKfe9vuh169btar5upppylnxw9x` FOREIGN KEY (`lab_technician_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKg1egbho4ew01gmejxavk93xoh` FOREIGN KEY (`pathologic_report_id`) REFERENCES `reports` (`report_id`),
  CONSTRAINT `FKg8m25nmowehf2an24qhsngitn` FOREIGN KEY (`patient_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKle38tecjwj83jsnuo9cqhrr45` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKm39siqct8dqyqwqqqpfkx4ooh` FOREIGN KEY (`diagnostic_report_id`) REFERENCES `reports` (`report_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diseases`
--

LOCK TABLES `diseases` WRITE;
/*!40000 ALTER TABLE `diseases` DISABLE KEYS */;
INSERT INTO `diseases` VALUES (7,'BLOOD_ANALYSIS',NULL,'1234567',NULL,NULL,'98765432109','WAITING_RESULTS','2023-05-25 14:15:52'),(8,'URINE_TEST','98765432109_fb00a997-fd22-48e9-8642-466bad817f2f','1234567','1234568','98765432109_ac27ef9f-6556-4542-a731-86517d2467f5','98765432109','DIAGNOSTIC_RESULTED','2024-01-30 04:15:41'),(10,'BLOOD_ANALYSIS','65458165401_4933e5ca-c566-4ae6-9bed-a55086c18c0e','1234567','1234568','65458165401_6ab934d5-124a-4406-a146-cf589f562e15','65458165401','DIAGNOSTIC_UPDATED','2024-01-27 00:58:20'),(11,'URINE_TEST',NULL,'1234567','1234568','65458165400_3e93c191-3219-489c-b1fa-f9eca387b069','65458165400','PATHOLOGIC_RESULTED','2024-01-31 18:41:36'),(12,'BIOPSY',NULL,'1234567',NULL,NULL,'65458165400','WAITING_RESULTS','2024-01-31 18:42:06'),(13,'BIOPSY',NULL,'1234567','1234568','98765432109_8df4eda9-9202-4a26-9045-3e2f40716de6','98765432109','PATHOLOGIC_RESULTED','2024-02-09 12:51:02');
/*!40000 ALTER TABLE `diseases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `report_id` varchar(255) NOT NULL,
  `details` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `issue_date` datetime(6) DEFAULT NULL,
  `report_type` enum('DIAGNOSTIC','PATHOLOGICAL') DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES ('65458165400_3e93c191-3219-489c-b1fa-f9eca387b069','This test created by using new ui','src/main/resources/reports/pathological/65458165400_PAT_2024-02-01 03.29.34.351.pdf','2024-02-01 03:29:34.354000','PATHOLOGICAL','Urine Analysis'),('65458165401_4933e5ca-c566-4ae6-9bed-a55086c18c0e','diagnostic report details is here','src/main/resources/reports/diagnostic/65458165401_DIA_2024-02-01 19.13.02.303.pdf','2024-02-01 23:20:00.361000','DIAGNOSTIC','REport title'),('65458165401_6ab934d5-124a-4406-a146-cf589f562e15','This is detailed string for pathological report','src/main/resources/reports/pathological/65458165401_PAT_2024-01-28 23.39.22.749.pdf','2024-02-01 23:00:34.749000','PATHOLOGICAL','This title'),('98765432109_8df4eda9-9202-4a26-9045-3e2f40716de6','pathologic report content bla bla','src/main/resources/reports/pathological/98765432109_PAT_2024-02-09 13.53.48.570.pdf','2024-02-09 13:53:48.570000','PATHOLOGICAL','pathologic report '),('98765432109_ac27ef9f-6556-4542-a731-86517d2467f5','pathologic report created by using ui','src/main/resources/reports/pathological/98765432109_PAT_2024-02-01 23.03.36.804.pdf','2024-02-01 23:16:30.925000','PATHOLOGICAL','pathologic report'),('98765432109_fb00a997-fd22-48e9-8642-466bad817f2f','This diagnostic for you Mss. Solmaz','src/main/resources/reports/diagnostic/98765432109_DIA_2024-02-02 20.34.23.700.pdf','2024-02-02 20:34:23.705000','DIAGNOSTIC','Diagnostic Report');
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','DOCTOR','LAB_TECHNICIAN','PATIENT') DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1234567','Buray','$2a$10$vL0VlIzkkPCX2N9a6NXGPOJ3q5IySGU0CLVL215fayv6Ov2uC00/i','DOCTOR','Updated Surname'),('1234568','Joe','$2a$10$vL0VlIzkkPCX2N9a6NXGPOJ3q5IySGU0CLVL215fayv6Ov2uC00/i','LAB_TECHNICIAN','Dao'),('48959615634','James','$2a$10$Rp.VN1R.Wyg8IKTM9qwnguJqjHZgoZKsfdgpI.ersbFHYw0DkSDma','PATIENT','Thrill'),('51651879229','Geralt','$2a$10$a2D4kqBK7hhSI42T7Y8ueudPEqKkn6zlV5hNHambfCSE4lztjXuAi','PATIENT','Rivia'),('65214578923','David','$2a$10$9t3qsZ9GUCrVHumywIpvtunjQrAqeIPaIXw7p96bpf.pzgKRf1DSC','PATIENT','Petterson'),('6545816','Ahmet','','ADMIN','Sonuç'),('65458165400','Utku','$2a$10$7Leq.ZisZMhqB7FWqdnh4uHO9IhGNuvWwWrYCY6vbitQepITsfluC','LAB_TECHNICIAN','Aksoy'),('65458165401','string','$2a$10$NpZixQWeylZNovl.2dUU7OmLP1OvojBx9HiyQfK6pPkdGwLvQC9e2','PATIENT','string'),('4561234','Alper','$2a$10$9IXUS714CmxgYwItHAMFyeIoc5L6IWjAGqx3QcWipWlcA.xBt.NnW','ADMIN','Senturk'),('98765432103','Kerim','$2a$10$Lddvd9uaPzQD5iOV.zT7C.I5JMlGMpQenqWGuljqMr6RZajfEc/va','PATIENT','Senturk'),('98765432109','Ayşe','$2a$10$jLLFgXE7a1hOxUruy9ZlYuSf/fVoAQMEj5eJPsOb57oVZrmZdPWOu','PATIENT','Solmaz');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 14:44:09
