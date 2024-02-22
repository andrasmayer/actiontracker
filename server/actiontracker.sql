-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 02:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `actiontracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `erTypes` int(11) NOT NULL,
  `responsible` int(11) NOT NULL,
  `status_1` int(11) NOT NULL,
  `status_2` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `creationDate` date NOT NULL,
  `expireDate` date NOT NULL,
  `addin` text NOT NULL,
  `topicid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `erTypes`, `responsible`, `status_1`, `status_2`, `comment`, `creationDate`, `expireDate`, `addin`, `topicid`) VALUES
(1, 0, 12345, 0, 0, 'Mintakomment', '2024-02-22', '2024-02-25', '{\"0\":\"\",\"1\":\"\",\"2\":\"random\",\"3\":\"radnom\"}', 1),
(2, 0, 12345, 0, 0, 'Mintakomment', '2024-02-22', '2024-02-25', '{\"0\":\"\",\"1\":\"\",\"2\":\"random\",\"3\":\"radnom\"}', 1);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `creator` int(11) NOT NULL,
  `creationDate` datetime NOT NULL,
  `contributors` text NOT NULL,
  `erTypes` text NOT NULL,
  `privateHeaders` text NOT NULL,
  `lastModified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `title`, `creator`, `creationDate`, `contributors`, `erTypes`, `privateHeaders`, `lastModified`) VALUES
(1, 'asdfg', 270287, '2024-02-22 13:00:24', '[266248, 270287]', '{\"0\":{\"title\":\"Kérlek válassz\"},\"1\":{\"title\":\"Vevői reklamáció\"},\"2\":{\"title\":\"Egyéb\"}}', '{\"0\":\"Col 1\",\"1\":\"Col 2\",\"2\":\"Col 3\",\"3\":\"Col 4\"}', '2024-02-22 13:07:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `dolszam` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `dolszam`) VALUES
(1, 'Tóth Kristóf Bence', 270287);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
