-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 13, 2019 at 05:02 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `comment_id` int(11) NOT NULL,
  `comment_text` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

CREATE TABLE `tbl_music` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `music_artist` varchar(250) NOT NULL,
  `year` int(11) NOT NULL,
  `genre` varchar(250) NOT NULL,
  `img` varchar(500) NOT NULL,
  `stars` int(11) NOT NULL,
  `access` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`id`, `title`, `music_artist`, `year`, `genre`, `img`, `stars`, `access`) VALUES
(1, 'Heartbreak Hotel', 'Elvis Presley', 1950, 'Rock', '50-Elvis.jpg', 1, 1),
(2, 'Someday', 'Ray Charles', 1950, 'Blues', '50-Ray.jpg', 1, 1),
(3, 'I\'ll Never Get Out Of This World Alive', 'Hank Williams', 1950, 'Country', '50-Hank.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

CREATE TABLE `tbl_tv` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `cast` varchar(250) NOT NULL,
  `director` varchar(150) NOT NULL,
  `desc` text NOT NULL,
  `year` smallint(6) NOT NULL,
  `img` varchar(500) NOT NULL,
  `thumb` varchar(500) NOT NULL,
  `stars` int(11) NOT NULL,
  `access` tinyint(4) NOT NULL,
  `rating` varchar(15) NOT NULL,
  `category` varchar(50) NOT NULL,
  `duration` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`id`, `title`, `cast`, `director`, `desc`, `year`, `img`, `thumb`, `stars`, `access`, `rating`, `category`, `duration`) VALUES
(1, 'I Love Lucy', 'Lucille Ball, Desi Arnaz, Vivian Vance', 'William Asher', 'A daffy woman constantly strives to become a star along with her bandleader husband and gets herself in the strangest situations.', 1950, '50-ILoveLucy.jpg', '50-ILoveLucy.jpg', 1, 1, '1', 'Comedy', '12'),
(2, 'Gunsmoke', 'James Arness, Milburn Stone, Amanda Blake', 'Andrew V. McLaglen	', 'Marshal Matt Dillon keeps the peace in rough and tumble Dodge City.', 1950, '50-Gunsmoke.jpg', '50-Gunsmoke.jpg', 1, 1, '1', 'Action', '12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` tinyint(11) UNSIGNED NOT NULL,
  `user_name` varchar(150) NOT NULL DEFAULT '',
  `user_password` varchar(500) NOT NULL,
  `user_fname` varchar(150) DEFAULT '',
  `user_lname` varchar(150) DEFAULT '',
  `user_email` varchar(250) DEFAULT '',
  `user_access` tinyint(1) NOT NULL,
  `user_admin` tinyint(3) NOT NULL,
  `user_avatar` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_password`, `user_fname`, `user_lname`, `user_email`, `user_access`, `user_admin`, `user_avatar`) VALUES
(1, 'dani', '123', 'Daniela', 'Dantas', 'dani@test.com', 5, 1, 'robot.svg'),
(2, 'kid', '321', 'Kid', '', '', 2, 0, 'astronaut.svg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video`
--

CREATE TABLE `tbl_video` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `cast` varchar(250) NOT NULL,
  `director` varchar(150) NOT NULL,
  `desc` text NOT NULL,
  `duration` varchar(10) NOT NULL,
  `year` smallint(6) NOT NULL,
  `img` varchar(500) NOT NULL DEFAULT 'images/video_default.jpg',
  `thumb` varchar(30) NOT NULL,
  `stars` int(11) NOT NULL,
  `access` tinyint(1) NOT NULL,
  `rating` varchar(15) NOT NULL,
  `category` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_video`
--

INSERT INTO `tbl_video` (`id`, `title`, `cast`, `director`, `desc`, `duration`, `year`, `img`, `thumb`, `stars`, `access`, `rating`, `category`) VALUES
(1, 'The Tingler', 'Vincent Price, Judith Evelyn, Darryl Hickman', 'William Castle', 'Dr. Warren Chapin (Vincent Price) has made a surprising discovery -- the spine-chilling sensation that people get when scared is due to a parasite that he dubs the \"tingler.\" Chapin concludes that in extreme circumstances, prolonged fear can cause the creature to damage a person\'s spine and even cause death if the victim can\'t scream, a theory that Oliver Higgins (Philip Coolidge) uses to deadly effect on his wife (Judith Evelyn). Soon the tingler that killed the woman is on the loose.', '82min', 1959, '50-theTingler.jpg', '', 3, 2, 'Rated PG-13', 'Horror'),
(2, 'Lola Montes', 'Martine Carol, Peter Ustinov, Anton Walbrook', 'Max Ophüls', 'Once, Lola Montes (Martine Carol) was a famous cabaret dancer and the lover of many of 19th-century Europe\'s most prominent men. Now she works in a seedy American circus, where a circus master (Peter Ustinov) tells her life story as the main attraction. After her mother\'s lover (Ivan Desny) marries Lola instead, she is abducted by Russian cossacks. Her many affairs end in marriage to King Ludwig I of Bavaria (Anton Walbrook). She then flees when revolution threatens his kingdom.', '116min', 1955, '50-lolaMontes.jpg', '', 3, 1, 'Rated GP', 'Drama'),
(3, 'Kanal', ' Teresa Izewska, Tadeusz Janczar, Wienczyslaw Glinski ', 'Andrzej Wajda', 'A symbolic depiction of hell on Earth, set in the last days of the Warsaw uprising in 1944. Lieutenant Zadra is commanding a company of 43 men in a desperate battle amidst the ruins. Facing German offense and cut off from their comrades, Zadra is commanded to retreat his men through the sewer system (\'kanal\'). Zadra and his men are reluctant to do so, as it would indicate that they have lost the battle, but decide to obey the orders. However, as the men (and women) retreat, it becomes clear that their desperate attempt to flee from the hell of battle will result only in more death and suffering…\r\n', '91min', 1957, '50-Kanal.jpg', '', 2, 1, 'Rated: R', 'Drama'),
(4, 'Blackboard Jungle', 'Glenn Ford, Anne Francis, Louis Calhern', 'Richard Brooks', 'Richard Dadier earns a teaching assignment at a tough high school, where the teenagers make the rules and the staff meekly accept the fact that they\'ve lost control. When Dadier tries exerting his authority, he receives much hostility from both students and faculty, culminating with his pregnant wife receiving anonymous letters with false accusations that he is romantically involved with another woman at school. In anger, Dadier hurls an accusation at Gregory Miller, a black youth whom he fears is against him. Miller doesn\'t deny the accusation. Instead he escalates the confrontation, but does that mean that he was the culprit?', '101min', 1955, '50-blackboardJungle.jpg', '', 2, 2, 'Rated G', 'Drama'),
(5, 'Ace in the Hole', 'Kirk Douglas, Jan Sterling, Robert Arthur', 'Billy Wilder', 'With flaws that outweigh his talent, reporter Chuck Tatum (Kirk Douglas) has bounced across the country from job to job. Winding up in New Mexico, Tatum gets work from the local newspaper, but finds that there\'s not much in the way of pressing news. However, when Tatum catches wind of a treasure hunter (Richard Benedict) trapped in a mineshaft, he turns the story into a media sensation. Soon Tatum is using unscrupulous tactics to draw out the situation, an approach that comes back to haunt him.', '111min', 1951, '50-aceInTheHole.jpg', '', 4, 1, 'Rated R', 'Drama'),
(6, 'Curse of Frankenstein', ' Peter Cushing, Hazel Court, Robert Urquhart', 'Terence Fisher', 'Victor Frankenstein (Peter Cushing) is a brilliant scientist willing to stop at nothing in his quest to reanimate a deceased body. After alienating his longtime friend and partner, Paul Krempe (Robert Urquhart), with his extreme methods, Frankenstein assembles a hideous creature (Christopher Lee) out of dead body parts and succeeds in bringing it to life. But the monster is not as obedient or docile as Frankenstein expected, and it runs amok, resulting in murder and mayhem.', '82min', 1957, '50-frankenstein.jpg', '', 3, 1, 'Rated PG', 'Horror'),
(7, 'Psycho', 'Anthony Perkins, Janet Leigh, Vera Miles, John Gavin', 'Alfred Hitchcock', 'In this film based on John Steinbeck\'s epic novel, Cal Trask (James Dean), the son of a California farmer (Raymond Massey), feels that his father cares only about his brother, Aron (Richard Davalos). When Cal embarks on a business venture to gain the favor of his dad, he finds himself dealing with his estranged mother (Jo Van Fleet), now the owner of a brothel, and tensions in the family rise even further when he begins to fall for Aron\'s girlfriend, Abra (Julie Harris).\r\n', '109 min	', 1960, '60-psycho.jpg', '', 4, 1, 'Rated R', 'Horror'),
(8, 'To Kill A Mockingbird', 'Gregory Peck, John Megna, Frank Overton, Rosemary Murphy', 'Robert Mulligan', 'Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his children against prejudice.', '129 min', 1962, '60-mockingBird.jpg', '', 3, 1, 'Rated R', 'Drama'),
(9, 'Midnight Cowboy', ' Dustin Hoffman, Jon Voight, Sylvia Miles, John McGiver', 'John Schlesinger', 'A naive hustler travels from Texas to New York City to seek personal fortune, finding a new friend in the process.', '113 min', 1966, '60-midnightCowboy.jpg', '', 2, 1, 'Rated R', 'Drama'),
(10, 'The Good, The Bad, and The Ugly', 'Clint Eastwood, Eli Wallach, Lee Van Cleef, Aldo Giuffrè', 'Sergio Leone', 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.', '178 min', 1966, '60-goodBadUgly.jpg', '', 4, 1, 'Rated R', 'Action'),
(11, 'The Wild Bunch', 'William Holden, Ernest Borgnine, Robert Ryan, Edmond O\'Brien', 'Sam Peckinpah', 'An aging group of outlaws look for one last big score as the \"traditional\" American West is disappearing around them.', '135 min	', 1966, '60-wildBunch.jpg', '', 3, 1, 'Rated: R', 'Action'),
(12, 'The Apartment', 'Jack Lemmon, Shirley MacLaine, Fred MacMurray, Ray Walston', 'Billy Wilder', 'A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.', '125 min', 1960, '60-apartment.jpg', '', 3, 2, 'Rated PG', 'Comedy'),
(13, 'Taxi Driver', 'Robert De Niro, Jodie Foster, Cybill Shepherd, Albert Brooks', 'Martin Scorsese', 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.', '', 1976, '70-taxiDriver.jpg', '', 4, 1, 'Rated R', 'Drama'),
(14, 'Mean Streets', 'Robert De Niro, Harvey Keitel, David Proval, Amy Robinson', 'Martin Scorsese', 'A small-time hood aspires to work his way up the ranks of a local mob.', '112 min', 1973, '70-meanStreets.jpg', '', 3, 1, 'Rated R', 'Drama'),
(15, 'One Flew Over the Cuckoo\'s Nest', 'Jack Nicholson, Louise Fletcher, Will Sampson, Michael Berryman', 'Milos Forman', 'A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.', '133 min', 1975, '70-cuckoosNest.jpg', '', 4, 1, 'Rated R', 'Drama'),
(16, 'The Godfather', 'Marlon Brando, Al Pacino, James Caan, Diane Keaton', 'Francis Ford Coppola', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', '175 min', 1972, '70-godfather.jpg', '', 4, 1, 'Rated R', 'Drama'),
(17, 'Jaws ', 'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary', 'Steven Spielberg', 'When a killer shark unleashes chaos on a beach resort, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', '124 min', 1975, '70-jaws.jpg', '', 4, 1, 'Rated R', 'Action'),
(18, 'A Clockwork Orange', 'Malcolm McDowell, Patrick Magee, Michael Bates, Warren Clarke\r\n', 'Stanley Kubrick', 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.', '136 min', 1971, '70-clockworkOrange.jpg', '', 4, 1, 'Rated R', 'Drama'),
(19, 'Amadeus', 'F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice', 'Milos Forman', 'The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporary composer who was insanely jealous of Mozart\'s talent and claimed to have murdered him.', '160 min', 1984, '80-amadeus.jpg', '', 4, 1, 'Rated R', 'Drama'),
(20, 'Raiders of the Lost Ark', 'Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies', 'Steven Spielberg', 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler\'s Nazis can obtain its awesome powers.', '115 min', 1981, '80-idianaJones.jpg', '', 4, 2, 'Rated PG', 'Action'),
(21, 'Cinema Paradiso', 'Philippe Noiret, Enzo Cannavale,Antonella Attili, Isa Danieli', 'Giuseppe Tornatore', 'A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema\'s projectionist.', '155 min', 1988, '80-cinemaParadiso.jpg', '', 4, 1, 'Rated: R', 'Drama'),
(22, 'E.T. The Extra-Terrestrial', 'Henry Thomas, Drew Barrymore, Peter Coyote, Dee Wallace', 'Steven Spielberg', 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.', '115 min', 1982, '80-et.jpg', '', 3, 2, 'Rated PG', 'Drama'),
(23, 'Back to the Future', 'Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover', 'Robert Zemeckis', 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.', '116 min', 1985, '80-backFuture.jpg', '', 3, 2, 'Rated PG', 'Comedy'),
(24, 'The Shining', 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers', 'Stanley Kubrick', 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.', '146 min', 1980, '80-theShining.jpg', '', 4, 1, 'Rated R', 'Horror'),
(25, 'American Beauty', 'Kevin Spacey, Annette Bening, Thora Birch,Wes Bentley', 'Sam Mendes', 'A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter\'s best friend.', '122 min', 1999, '90-americanBeauty.jpg', '', 3, 1, 'Rated R', 'Drama'),
(26, 'Pulp Fiction', 'John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis', 'Quentin Tarantino', 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', '154 min', 1994, '90-pulpFiction.jpg', '', 4, 1, 'Rated R', 'Drama'),
(27, 'The Silence of the Lambs', 'Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, Kasi Lemmons', 'Jonathan Demme', 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', '118 min', 1991, '90-silenceLambs.jpg', '', 4, 1, 'Rated R', 'Drama'),
(28, 'The Matrix', 'Keanu Reeves,Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving', 'Lana Wachowski, Lilly Wachowski', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', '136 min', 1999, '90-Matrix.jpg', '', 4, 1, 'Rated R', 'Action'),
(29, 'Titanic', 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates', 'James Cameron', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', '194 min', 1997, '90-titanic.jpg', '', 4, 2, 'Rated PG-13', 'Drama'),
(30, 'The Truman Show', 'Jim Carrey, Ed Harris, Laura Linney, Noah Emmerich', 'Peter Weir', 'An insurance salesman discovers his whole life is actually a reality TV show.', '103 min', 1998, '90-trumanShow.jpg', '', 3, 2, 'Rated PG', 'Comedy');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `col1` varchar(25) NOT NULL,
  `col2` varchar(25) NOT NULL,
  `col3` varchar(25) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `col1`, `col2`, `col3`) VALUES
(1, 'col1row1', 'col2row1', 'col3row1'),
(2, 'col1row2', 'col2row2', 'col3row2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `tbl_music`
--
ALTER TABLE `tbl_music`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tv`
--
ALTER TABLE `tbl_tv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_video`
--
ALTER TABLE `tbl_video`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_music`
--
ALTER TABLE `tbl_music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_tv`
--
ALTER TABLE `tbl_tv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` tinyint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_video`
--
ALTER TABLE `tbl_video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
