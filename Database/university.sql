INSERT INTO `grouptable` (`groupId`, `faculty`, `groupNumber`) VALUES
(1, 'INPE', 'B17-101'),
(2, 'INPE', 'B18-101'),
(3, 'IEPB', 'B17-201'),
(4, 'IEPB', 'B18-201'),
(5, 'ILPT', 'S17-302'),
(6, 'ILPT', 'S18-302'),
(7, 'ICIS', 'B17-502'),
(8, 'ICIS', 'B18-502'),
(9, 'INESP', 'B17-402'),
(10, 'INESP', 'B18-402'),
(11, 'INESP', 'B18-403');
COMMIT;

INSERT INTO `student` (`studentId`, `groupId`, `studentName`, `scholarship`, `dateOfEnrollment`) VALUES
(1, 1, 'Alex', 'usual', '01.09.2016'),
(2, 2, 'Dolly', 'usual', '01.09.2016'),
(3, 3, 'Rick', 'increased', '01.09.2017');
COMMIT;