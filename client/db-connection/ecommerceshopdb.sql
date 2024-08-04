-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: kamet.liara.cloud    Database: ecommerceshopdb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `tbl_product`
--

DROP TABLE IF EXISTS `tbl_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_product` (
  `pID` varchar(10) NOT NULL,
  `pShopID` varchar(10) NOT NULL,
  `pImages` json DEFAULT NULL,
  `pTitle` varchar(100) DEFAULT NULL,
  `pDescription` varchar(500) DEFAULT NULL,
  `pMaterials` json DEFAULT NULL,
  `pColor` varchar(45) DEFAULT NULL,
  `pSize` varchar(45) DEFAULT NULL,
  `pTotal` int DEFAULT NULL,
  `pPrice` varchar(45) DEFAULT NULL,
  `pType` int DEFAULT NULL,
  `pSeason` int DEFAULT NULL,
  PRIMARY KEY (`pID`),
  UNIQUE KEY `pID_UNIQUE` (`pID`),
  KEY `fn_shop_pshop_idx` (`pShopID`),
  CONSTRAINT `fn_shop_pshop` FOREIGN KEY (`pShopID`) REFERENCES `tbl_shop` (`shID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_product`
--

LOCK TABLES `tbl_product` WRITE;
/*!40000 ALTER TABLE `tbl_product` DISABLE KEYS */;
INSERT INTO `tbl_product` VALUES ('e9V04dGDZQ','RvMcuJ0F8y','[\"image3\"]','شلوار بگ','فول دابل پرس','[\"نخ پنبه\"]','red','34',20,'650000',2,1),('wuJ0F9CrdB','RvMcuJ0F8y','[\"image1.jpg\", \"image2.jpg\"]','لباس اندرارمور','لباس اندر ارمور طرحدار','[\"کشدار\", \"استرچ\"]','قرمز','24',50,'6700000',2,2);
/*!40000 ALTER TABLE `tbl_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_seller`
--

DROP TABLE IF EXISTS `tbl_seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_seller` (
  `sID` varchar(10) NOT NULL,
  `sUID` varchar(10) NOT NULL,
  `sCode` varchar(45) NOT NULL,
  PRIMARY KEY (`sID`),
  UNIQUE KEY `sID_UNIQUE` (`sID`),
  UNIQUE KEY `sUID_UNIQUE` (`sUID`),
  UNIQUE KEY `sCode_UNIQUE` (`sCode`),
  KEY `FN_sUserID_uID_idx` (`sUID`),
  CONSTRAINT `FN_sUserID_uID` FOREIGN KEY (`sUID`) REFERENCES `tbl_user` (`uID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_seller`
--

LOCK TABLES `tbl_seller` WRITE;
/*!40000 ALTER TABLE `tbl_seller` DISABLE KEYS */;
INSERT INTO `tbl_seller` VALUES ('jhiuokkvoh','2JlpQRy5yn','0023566689'),('NnlqU9Px4A','m6fO7Zq0CU','0036259'),('ru0nIh7zmT','qZwtButJ40','Zamanian'),('sRJVhtonwk','UwJVhtl8uR','0215588'),('VttJ6brtTS','XhnQW3gYVz','252885858'),('z1haOqxgvz','YJAAZ257aj','25889');
/*!40000 ALTER TABLE `tbl_seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_shop`
--

DROP TABLE IF EXISTS `tbl_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_shop` (
  `shID` varchar(10) NOT NULL,
  `sellerID` varchar(10) NOT NULL,
  `shName` varchar(45) DEFAULT NULL,
  `shDescription` varchar(200) DEFAULT NULL,
  `shAddress` varchar(45) DEFAULT NULL,
  `shPhone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`shID`),
  KEY `fn_sID_idx` (`sellerID`),
  CONSTRAINT `fn_sID` FOREIGN KEY (`sellerID`) REFERENCES `tbl_seller` (`sID`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_shop`
--

LOCK TABLES `tbl_shop` WRITE;
/*!40000 ALTER TABLE `tbl_shop` DISABLE KEYS */;
INSERT INTO `tbl_shop` VALUES ('7kbJZzHEYN','ru0nIh7zmT','Hamiall Phone center','Hadish','Hadishmal','09558'),('b5Kh033YxB','NnlqU9Px4A','2 بوتیک جدید علی خاوری','هرچی خوبه','تهران مرزداران - بانک کشاورزی','021-255'),('RvMcuJ0F8y','NnlqU9Px4A','بوتیک جدید علی خاوری','هرچی خوبه','تهران مرزداران - بانک کشاورزی','021-255'),('VB5v3CMU0b','NnlqU9Px4A',' بوتیک cdcdcd متر خاوری','من هرچی خوبه','تهران مرزداران - بانک کشاورزی','021-25555'),('VN1xwOk257','z1haOqxgvz','Milad Phone center','Hadish','Hadishmal','09558');
/*!40000 ALTER TABLE `tbl_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user` (
  `uID` varchar(10) NOT NULL,
  `uName` varchar(45) DEFAULT NULL,
  `uLastName` varchar(45) DEFAULT NULL,
  `uPhone` varchar(20) NOT NULL,
  `uPassword` varchar(45) NOT NULL,
  `uGmail` varchar(60) DEFAULT NULL,
  `uAddress` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`uID`),
  UNIQUE KEY `uPhone_UNIQUE` (`uPhone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user`
--

LOCK TABLES `tbl_user` WRITE;
/*!40000 ALTER TABLE `tbl_user` DISABLE KEYS */;
INSERT INTO `tbl_user` VALUES ('2JlpQRy5yn','Mina','Ahmadian','789','021',NULL,NULL),('3eN9evGJu3','samira','heidssaar','dfr','06ddgtgtgcdcdccdc9*99',NULL,NULL),('A5xfvCoWp2','Soli','Ggggg','۰۹۹۹۹۸۸۸۸۸','۴۵۶۷۷tggv',NULL,NULL),('AYWFlwtCwy','Mohammad','Ahmadi','09338900605','123',NULL,NULL),('B5u0nHeUID','gholammiddddm','heidar','72cc848','06ddcdc9*99',NULL,NULL),('CP81ywNhRg','Ali','Zamanian','099366599','1668',NULL,NULL),('FhfegtoqLp','samira','Meshkini','074566','55de',NULL,NULL),('gusGR7RM79','Shima','Aslanifard','963','369',NULL,NULL),('jmGeTEqZxw','edf','rfrf','frfrfrfssde','rffsdde',NULL,NULL),('m6fO7Zq0CU','Ali','Khavari','099365825','32055s',NULL,NULL),('NQEBRkUn0L','Hadis','Younesi','09362295514','12345678',NULL,NULL),('Q4DRchD9GN','Ali','Zamanian','admin','admin','alizamaniandev@gmail.com',NULL),('qZwtButJ40','RyHane','Zamani','02213265','35648','Ry.com','Newwork'),('RAc2t6V8Ka','sxs','ehsanxxi','02c654','dedd262e',NULL,NULL),('s0tcodLZuj','AliZamanian','Ali Zamanian','093865206800','800',NULL,NULL),('UwJVhtl8uR','gholammim','heidar','72848','069*99',NULL,NULL),('VDf9QAgo2R','gholam','heidar','62626','0699',NULL,NULL),('XhnQW3gYVz','gholammiddddm','heidar','72ccxsx848','06ddcdcdccdc9*99',NULL,NULL),('XNU2jilFbI','Jamira','ehsani','02654','ded262e',NULL,NULL),('YJAAZ257aj','Ati','Che','0940838373','1233',NULL,NULL);
/*!40000 ALTER TABLE `tbl_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ecommerceshopdb'
--

--
-- Dumping routines for database 'ecommerceshopdb'
--
/*!50003 DROP FUNCTION IF EXISTS `FN_GenerateOTP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `FN_GenerateOTP`() RETURNS varchar(4) CHARSET utf8mb4
    NO SQL
BEGIN
    DECLARE num1 INT;
    DECLARE num2 INT;
    DECLARE num3 INT;
    DECLARE num4 INT;
    DECLARE random_number VARCHAR(4);

    SET num1 = FLOOR(1 + (RAND() * 9));  -- Random number between 1 and 9
    SET num2 = FLOOR(1 + (RAND() * 9));
    SET num3 = FLOOR(1 + (RAND() * 9));
    SET num4 = FLOOR(1 + (RAND() * 9));

    SET random_number = CONCAT(num1, num2, num3, num4);

    -- Return the generated OTP
    RETURN random_number;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `FN_GENERATE_STRING_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `FN_GENERATE_STRING_ID`() RETURNS varchar(10) CHARSET utf8mb4
    NO SQL
BEGIN
    DECLARE random_string VARCHAR(10) DEFAULT '';
    DECLARE characters VARCHAR(62) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    DECLARE i INT DEFAULT 0;
    DECLARE char_length INT;

    SET char_length = LENGTH(characters);

    WHILE i < 10 DO
        SET random_string = CONCAT(random_string, SUBSTRING(characters, FLOOR(1 + RAND() * char_length), 1));
        SET i = i + 1;
    END WHILE;

    RETURN random_string;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_PRODUCT_ADD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_PRODUCT_ADD`(
    IN p_pShopID VARCHAR(10), 
    IN p_pImages JSON, 
    IN p_pTitle VARCHAR(100),  
    IN p_pDescription VARCHAR(500),  
    IN p_pMaterials JSON,  
    IN p_pColor VARCHAR(45),  
    IN p_pSize VARCHAR(45),  
    IN p_pTotal INT,  
    IN p_pPrice VARCHAR(45),
     In p_pType int,
    In p_pSeason int
)
BEGIN  
    DECLARE generated_uid VARCHAR(10);
    DECLARE adjusted_pImages JSON;

    SET generated_uid = FN_GENERATE_STRING_ID();
    
    -- Set p_pImages to NULL if it is NULL or an empty string
    IF p_pImages IS NULL OR p_pImages = '' THEN
        SET adjusted_pImages = NULL;
    ELSE
        SET adjusted_pImages = CAST(p_pImages AS CHAR CHARACTER SET utf8mb4);
    END IF;

    INSERT INTO `ecommerceshopdb`.`tbl_product` (`pID`, `pShopID`, `pImages`, `pTitle`, `pDescription`, `pMaterials`, `pColor`, `pSize`, `pTotal`, `pPrice`,`pType`,`pSeason`)   
    VALUES (generated_uid, p_pShopID, adjusted_pImages, p_pTitle, p_pDescription, p_pMaterials, p_pColor, p_pSize, p_pTotal, p_pPrice,p_pType,p_pSeason);  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_PRODUCT_DELETE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_PRODUCT_DELETE`(
in productID varchar(10)
)
BEGIN
DELETE FROM `ecommerceshopdb`.`tbl_product` WHERE (`pID` = productID);
select "Item Deleted" as message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_PRODUCT_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_PRODUCT_ID`(
in productID varchar(10)
)
BEGIN
SELECT * FROM ecommerceshopdb.tbl_product where pID=productID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_PRODUCT_LIST` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_PRODUCT_LIST`()
BEGIN
SELECT * FROM ecommerceshopdb.tbl_product;SELECT * FROM ecommerceshopdb.tbl_product;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_PRODUCT_UPDATE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_PRODUCT_UPDATE`(
    IN p_pID VARCHAR(10),
    IN p_pShopID VARCHAR(10), 
    IN p_pImages JSON, 
    IN p_pTitle VARCHAR(100),  
    IN p_pDescription VARCHAR(500),  
    IN p_pMaterials JSON,  
    IN p_pColor VARCHAR(45),  
    IN p_pSize VARCHAR(45),  
    IN p_pTotal INT,  
    IN p_pPrice VARCHAR(45),
        In p_pType int,
    In p_pSeason int
)
BEGIN  
    DECLARE adjusted_pImages JSON;

    -- Set p_pImages to NULL if it is NULL or an empty string
    IF p_pImages IS NULL OR p_pImages = '' THEN
        SET adjusted_pImages = NULL;
    ELSE
        SET adjusted_pImages = CAST(p_pImages AS CHAR CHARACTER SET utf8mb4);
    END IF;

    UPDATE `ecommerceshopdb`.`tbl_product`
    SET 
        
        `pImages` = adjusted_pImages,
        `pTitle` = p_pTitle,
        `pDescription` = p_pDescription,
        `pMaterials` = p_pMaterials,
        `pColor` = p_pColor,
        `pSize` = p_pSize,
        `pTotal` = p_pTotal,
        `pPrice` = p_pPrice,
        `pType`=p_pType,
        `pSeason`=p_pSeason
    WHERE `pID` = p_pID and `pShopID` = p_pShopID;
    select "Item Updated" as message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SELLER_ADD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SELLER_ADD`(
    IN p_sUID VARCHAR(10),
    IN p_sCode varchar(45)

)
BEGIN
    DECLARE generated_uid VARCHAR(10);

    SET generated_uid = FN_GENERATE_STRING_ID();
    
    INSERT INTO `ecommerceshopdb`.`tbl_seller` (`sID`, `sUID`, `sCode`)
    VALUES (generated_uid, p_sUID, p_sCode);


    SELECT 'Seller Added Successfully.' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SELLER_DELETE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SELLER_DELETE`(
    IN p_sID VARCHAR(10)
)
BEGIN
  DELETE FROM ecommerceshopdb.tbl_seller WHERE sID = p_sID;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SELLER_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SELLER_ID`(
IN userID varchar(10)
)
BEGIN
SELECT s.sID,u.uID,u.uName,u.uLastName,u.uPhone,u.uPassword,u.uGmail,u.uAddress
FROM ecommerceshopdb.tbl_user as u
inner join ecommerceshopdb.tbl_seller as s on u.uID=s.sUID where u.uID=userID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SELLER_LIST` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SELLER_LIST`()
BEGIN
SELECT s.sID,u.uID,u.uName,u.uLastName,u.uPhone,u.uPassword,u.uGmail,u.uAddress
FROM ecommerceshopdb.tbl_user as u
inner join ecommerceshopdb.tbl_seller as s on u.uID=s.sUID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SELLER_UPDATE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SELLER_UPDATE`(
    IN p_sID VARCHAR(10),
    IN p_sUID VARCHAR(10),
    IN p_sCode VARCHAR(45)
)
BEGIN
    UPDATE `ecommerceshopdb`.`tbl_seller`
    SET `sUID` = p_sUID,
        `sCode` = p_sCode
    WHERE `sID` = p_sID;
    
    SELECT "Updated" AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SHOP_ADD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SHOP_ADD`(
  IN p_sellerID VARCHAR(10),
  IN p_shName VARCHAR(45),
  IN p_shDescription VARCHAR(200),
  IN p_shAddress VARCHAR(45),
  IN p_shPhone VARCHAR(20)
)
BEGIN

    DECLARE generated_uid VARCHAR(10);

    SET generated_uid = FN_GENERATE_STRING_ID();

  INSERT INTO `ecommerceshopdb`.`tbl_shop` (
    `shID`,
    `sellerID`,
    `shName`,
    `shDescription`,
    `shAddress`,
    `shPhone`
  )
  VALUES (
    generated_uid,
    p_sellerID,
    p_shName,
    p_shDescription,
    p_shAddress,
    p_shPhone
  );
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SHOP_DELETE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SHOP_DELETE`(
  IN p_shID VARCHAR(10)
)
BEGIN
  DELETE FROM `ecommerceshopdb`.`tbl_shop`
  WHERE `shID` = p_shID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SHOP_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SHOP_ID`(
    IN sellerID VARCHAR(10)
)
BEGIN
    SELECT 
        shop.shID,
        shop.shName,
        shop.shDescription,
        shop.shAddress,
        shop.shPhone AS shopPhone,
        seller.sID AS sellerID,
        seller.sUID AS userID,
        u.uName AS ownerName,
        u.uLastName AS ownerLastName
    FROM ecommerceshopdb.tbl_shop AS shop
    INNER JOIN ecommerceshopdb.tbl_seller AS seller
        ON seller.sID = shop.sellerID
    INNER JOIN ecommerceshopdb.tbl_user AS u
        ON u.uID = seller.sUID
    WHERE seller.sID = sellerID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SHOP_LIST` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SHOP_LIST`()
BEGIN
  SELECT 
    shop.shID,
    shop.shName,
    shop.shDescription,
    shop.shAddress,
    shop.shPhone as shopPhone,
    seller.sID as sellerID,
    seller.sUID as userID,
    u.uName as ownerName,
    u.uLastName as ownerLastName
  FROM 
    ecommerceshopdb.tbl_shop AS shop
  INNER JOIN 
    ecommerceshopdb.tbl_seller AS seller
    ON shop.sellerID = seller.sID
  INNER JOIN 
    ecommerceshopdb.tbl_user AS u
    ON u.uID = seller.sUID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_SHOP_UPDATE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_SHOP_UPDATE`(
  IN p_shID VARCHAR(10),
  IN p_sellerID VARCHAR(10),
  IN p_shName VARCHAR(45),
  IN p_shDescription VARCHAR(200),
  IN p_shAddress VARCHAR(45),
  IN p_shPhone VARCHAR(20)
)
BEGIN
  UPDATE `ecommerceshopdb`.`tbl_shop`
  SET 
    `shName` = p_shName,
    `shDescription` = p_shDescription,
    `shAddress` = p_shAddress,
    `shPhone` = p_shPhone
  WHERE `shID` = p_shID AND `sellerID` = p_sellerID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_USER_ADD` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_USER_ADD`(
    IN p_uName VARCHAR(45),
    IN p_uLastName VARCHAR(45),
    IN p_uPhone varchar(20),
    IN p_uPassword VARCHAR(45)

)
BEGIN
    DECLARE generated_uid VARCHAR(10);

    SET generated_uid = FN_GENERATE_STRING_ID();

    INSERT INTO tbl_user (uID, uName, uLastName, uPhone, uPassword,uGmail,uAddress)
    VALUES (generated_uid, p_uName, p_uLastName, p_uPhone, p_uPassword,null,null);

    SELECT 'User Added Successfully.' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_USER_DELETE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_USER_DELETE`(in p_uID varchar(10))
BEGIN
DELETE FROM `ecommerceshopdb`.`tbl_user` WHERE (`uID` = p_uID);
SELECT "Item deleted Successfully" AS messages;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_USER_ID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_USER_ID`(IN p_uID varchar(10))
BEGIN
Select * from tbl_user
where uID=p_uID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_USER_LIST` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_USER_LIST`()
BEGIN
SELECT * from tbl_user;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_USER_UPDATE` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `SP_USER_UPDATE`(
	IN p_uID VARCHAR(45),
    IN p_uName VARCHAR(45),
    IN p_uLastName VARCHAR(45),
    IN p_uPhone varchar(20),
    IN p_uPassword VARCHAR(45),
     IN p_uGmail VARCHAR(45),
     IN p_uAddress varchar(500)
)
BEGIN
UPDATE tbl_user
    SET
        uName = p_uName,
        uLastName = p_uLastName,
        uPhone = p_uPhone,
        uPassword = p_uPassword,
        uGmail = p_uGmail,
        uAddress=p_uAddress
    WHERE
        uID = p_uID;
        
    SELECT 'User Updated Successfully.' AS message;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-04 13:48:02
