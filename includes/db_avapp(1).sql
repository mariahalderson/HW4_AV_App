-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 07, 2018 at 10:28 PM
-- Server version: 5.7.21
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_avapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(150) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category_video`
--

DROP TABLE IF EXISTS `tbl_category_video`;
CREATE TABLE IF NOT EXISTS `tbl_category_video` (
  `category_video_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` int(10) UNSIGNED NOT NULL,
  `video_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`category_video_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

DROP TABLE IF EXISTS `tbl_comments`;
CREATE TABLE IF NOT EXISTS `tbl_comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_text` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_uname` varchar(150) NOT NULL,
  `user_password` varchar(500) NOT NULL,
  `user_fname` varchar(150) NOT NULL,
  `user_lname` varchar(150) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_access` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video`
--

DROP TABLE IF EXISTS `tbl_video`;
CREATE TABLE IF NOT EXISTS `tbl_video` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_title` varchar(250) NOT NULL,
  `video_cast` varchar(250) NOT NULL,
  `video_director` varchar(150) NOT NULL,
  `video_desc` text NOT NULL,
  `video_duration` varchar(6) NOT NULL,
  `video_year` smallint(6) NOT NULL,
  `video_img` varchar(500) NOT NULL DEFAULT 'images/video_default.jpg',
  `video_stars` int(11) NOT NULL,
  `video_access` tinyint(1) NOT NULL,
  `video_rating` varchar(10) NOT NULL,
  `video_url` varchar(250) NOT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_video`
--

INSERT INTO `tbl_video` (`video_id`, `video_title`, `video_cast`, `video_director`, `video_desc`, `video_duration`, `video_year`, `video_img`, `video_stars`, `video_access`, `video_rating`, `video_url`) VALUES
(1, 'movie test', 'actor1, actor2, actor3', 'video director', 'a description about a fake movie', '1h17', 1995, 'images/video_default.jpg', 4, 1, '5', '');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
CREATE TABLE IF NOT EXISTS `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `col1` varchar(25) NOT NULL,
  `col2` varchar(25) NOT NULL,
  `col3` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `col1`, `col2`, `col3`) VALUES
(1, 'col1row1', 'col2row1', 'col3row1'),
(2, 'col1row2', 'col2row2', 'col3row2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
