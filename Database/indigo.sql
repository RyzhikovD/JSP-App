SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `students`;

CREATE TABLE IF NOT EXISTS `students` (
  `studentId` int(11) NOT NULL AUTO_INCREMENT,
  `faculty` varchar(255) DEFAULT NULL,
  `groupNumber` varchar(255) DEFAULT NULL,
  `studentName` varchar(255) DEFAULT NULL,
  `scholarship` varchar(255) DEFAULT NULL,
  `dateOfEnrollment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `students` (`studentId`, `faculty`, `groupNumber`, `studentName`, `scholarship`, `dateOfEnrollment`) VALUES
(1, 'ICIS', 'hello@gmail.com', 'Alex', 'usual', '01.09.2016'),
(2, 'ICIS', 'dolly@gmail.com', 'Dolly', 'usual', '01.09.2016'),
(3, 'ILPT', 'sonoo@gmail.com', 'Sonoo', 'increased', '01.09.2017');

COMMIT;