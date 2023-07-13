-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 06 juil. 2023 à 09:55
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ligne_bleue`
--

-- --------------------------------------------------------

--
-- Structure de la table `formations`
--

CREATE TABLE `formations` (
  `id` int(11) NOT NULL,
  `iconURL` varchar(500) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `fl_status` tinyint(1) NOT NULL,
  `levelFormation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `formations`
--

INSERT INTO `formations` (`id`, `iconURL`, `name`, `fl_status`, `levelFormation_id`) VALUES
(1, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fgridicons_phone.svg?alt=media&token=b85fa5ee-a833-4ce1-8b28-2a1c8aa14f99&_gl=1*1mp7uoc*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODc1OS4wLjAuMA..', 'Utiliser ligne bleu', 0, 0),
(2, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_cellphone.svg?alt=media&token=7701c1ce-f719-4cfe-91ae-4c865862d718&_gl=1*ntspgp*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODg3NS4wLjAuMA..', 'Utiliser mon téléphone', 0, 0),
(3, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-mail.svg?alt=media&token=58a57754-e76a-491d-93bb-2ae032a123d5&_gl=1*1f21nxw*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODkwNi4wLjAuMA..', 'Mes mails', 0, 0),
(4, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fpepicons-pencil_internet.svg?alt=media&token=6fe88df0-16f9-4d1f-9f33-b9d485d18dd3&_gl=1*1gcvyue*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODk5MS4wLjAuMA..', 'Aller sur internet', 0, 0),
(5, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmaterial-symbols_security.svg?alt=media&token=c35b77b1-1c0f-4433-a76e-9e28211fc7fe&_gl=1*tv4z9o*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA2MS4wLjAuMA..', 'Utiliser mon telephone en sécurité', 0, 0),
(6, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-music-note.svg?alt=media&token=6b8b6256-dc56-4e96-8441-50baef9ad6a5&_gl=1*ayfkjy*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA4OS4wLjAuMA..', 'Me divertir avec mon téléphone', 0, 0),
(7, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Ffe_phone.svg?alt=media&token=4f867375-87ff-45d6-bcd8-d4cd81c3d7dc&_gl=1*1w7ut5m*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTExMS4wLjAuMA..', 'Communiquer', 0, 0),
(8, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_bike.svg?alt=media&token=293c7632-7fb8-42e2-98fc-7304c581a8e3&_gl=1*dd8bzq*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIwMS4wLjAuMA..', 'Se faire aider', 0, 0),
(9, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_baseline-plus.svg?alt=media&token=08c843cb-6d62-4407-9af6-607dffe8ca73&_gl=1*asz2xl*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIyOS4wLjAuMA..', 'Pour aller plus loin', 0, 0),
(10, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_biker.svg?alt=media&token=add74c9c-3747-4225-864b-beef8066a1a7&_gl=1*1sp6ziu*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTMxMy4wLjAuMA..', 'Applications utiles pour se déplacer', 0, 0),
(11, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fbxs_home.svg?alt=media&token=9dd8aa5c-3816-42cf-bd87-b645760a8062&_gl=1*11d2lb0*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM0OS4wLjAuMA..', 'Applications utiles pour la vie courante', 0, 0),
(12, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fclarity_applications-solid.svg?alt=media&token=f07bf611-ff15-4927-8298-ed686322d6c6&_gl=1*1j0qjgr*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM3Ni4wLjAuMA..', 'Tous les tutos', 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `levelformations`
--

CREATE TABLE `levelformations` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pins`
--

CREATE TABLE `pins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `quizz`
--

CREATE TABLE `quizz` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `firstProposal` varchar(500) NOT NULL,
  `secondProposal` varchar(500) NOT NULL,
  `response` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `quizz`
--

INSERT INTO `quizz` (`id`, `question`, `firstProposal`, `secondProposal`, `response`) VALUES
(1, 'dfdf', 'dszz', 'dz', 'fd');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'testnumberone'),
(2, 'testnumberTwo'),
(3, 'testnumberThree');

-- --------------------------------------------------------

--
-- Structure de la table `steps`
--

CREATE TABLE `steps` (
  `id` int(11) NOT NULL,
  `stepOne` tinyint(1) DEFAULT NULL,
  `stepTwo` tinyint(1) DEFAULT NULL,
  `stepThree` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `steps`
--

INSERT INTO `steps` (`id`, `stepOne`, `stepTwo`, `stepThree`) VALUES
(1, 0, 0, 0),
(2, 0, 0, 0),
(3, 1, 1, 1),
(4, 1, 1, 1),
(5, 1, 1, 1),
(6, 1, 1, 1),
(7, 0, 0, 1),
(8, 0, 0, 1),
(9, 0, 0, 1),
(10, 0, 0, 1),
(11, 0, 0, 1),
(12, 0, 0, 1),
(13, 0, 0, 1),
(14, 0, 0, 1),
(15, 0, 0, 1),
(16, 0, 0, 1),
(17, 0, 0, 1),
(18, 0, 0, 1),
(19, 0, 0, 1),
(20, 0, 0, 1),
(21, 0, 0, 1),
(22, 0, 0, 1),
(23, 1, 1, 1),
(24, 1, 1, 1),
(25, 1, 1, 1),
(26, 1, 1, 1),
(27, 1, 1, 1),
(28, 1, 1, 1),
(29, 1, 1, 1),
(30, 1, 1, 1),
(31, 1, 1, 1),
(32, 1, 1, 1),
(33, 1, 1, 1),
(34, 1, 1, 1),
(35, 1, 1, 1),
(36, 0, 0, 1),
(37, 0, 0, 1),
(38, 0, 0, 1),
(39, 0, 0, 1),
(40, 0, 0, 1),
(41, 0, 0, 1),
(42, 0, 0, 1),
(43, 0, 0, 1),
(44, 0, 0, 1),
(45, 0, 0, 1),
(46, 0, 0, 1),
(47, 0, 0, 1),
(48, 0, 0, 1),
(49, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(1, 'gdsgsdg'),
(2, 'fdsfsd'),
(3, 's'),
(4, 'xxx');

-- --------------------------------------------------------

--
-- Structure de la table `tutorials`
--

CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL,
  `formation_id` int(11) NOT NULL,
  `quizz_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `urlVideo` varchar(255) DEFAULT NULL,
  `pictureTuto` varchar(255) DEFAULT NULL,
  `objectif` text NOT NULL,
  `explication` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tutorials`
--

INSERT INTO `tutorials` (`id`, `formation_id`, `quizz_id`, `level`, `name`, `urlVideo`, `pictureTuto`, `objectif`, `explication`) VALUES
(1, 2, 1, 1, 'Arrêter/démarrer le téléphone', 'tyqS8KUMdzI', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Farr%C3%AAter_t%C3%A9l%C3%A9phone_picture.jpg?alt=media&token=5ab45a0f-2744-441b-bcb2-4ccd079f04a8", 'Apprendre comment allumer et éteindre un téléphone', 'Il s\'agit de la procédure pour éteindre ou allumer votre téléphone portable'),
(2, 2, 2, 1, 'Utiliser un QR code', 'HzRxVg8awns', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2FQr_Code_Picture.jpg?alt=media&token=5bab5d9d-a3ca-4e12-95a9-535aee0d7054", 'Explication des QR codes : Comprendre ce qu\'est un QR code et ses utilisations', 'Les QR codes sont des codes à barres en deux dimensions qui peuvent être scannés à l\'aide de l\'appareil photo de votre téléphone. Ils sont souvent utilisés pour accéder rapidement à des informations, des sites web, des applications'),
(3, 2, 3, 1, 'Manipuler un écran tactile', 'R5VJPh-WXrs', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2F%C3%A9cran_tactile.jpg?alt=media&token=f259cd74-975c-4abf-ad94-0e449f7c2b81", 'Manipuler et naviguer sur l\'écran tactile, notamment en utilisant des gestes courants', ' Il s\'agit de l\'utilisation de vos doigts ou d\'un stylet pour interagir avec l\'écran tactile d\'un appareil, comme un smartphone ou une tablette'),
(4, 2, 4, 1, 'Téléphoner', '6rENWsAuQFs', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2FT%C3%A9l%C3%A9phoner_picture.jpg?alt=media&token=20c7985e-1753-4c9b-88d6-128105020418", 'Composer, répondre et mettre fin à des appels téléphoniques', 'Cela fait référence à l\'action d\'utiliser votre téléphone pour passer des appels vocaux à d\'autres personnes'),
(5, 2, 5, 1, 'Différence: SMS, mail, message', 'Cm63VfyL5BQ', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2FSMS_message_picture.jpg?alt=media&token=da2f6f35-87d2-4c3d-a67f-2a174da7b6b0", 'Comprendre les différences entre ces différents modes de communication', 'Cette donnée concerne la distinction entre trois moyens courants de communication : les SMS (Short Message Service) qui sont des messages textuels envoyés via le réseau mobile, les e-mails qui sont des messages électroniques envoyés via Internet, et les messages qui peuvent être des messages instantanés envoyés via des applications de messagerie comme WhatsApp, Messenger'),
(6, 2, 6, 1, 'Envoyer et recevoir un SMS', '7oBAEEGee7U', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Fenvoyer_sms_picture.jpg?alt=media&token=f1ac19ee-8c7d-40bb-995f-d4d71fb0591c", 'Apprendre à composer et à envoyer des messages textuels, ainsi qu\'à lire et à répondre aux messages reçus', 'Cela concerne l\'action d\'envoyer et de recevoir des messages textuels courts sur votre téléphone'),
(7, 2, 7, 1, 'Gestion des contacts', 'LvXX15XnqtQ', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Fgestion_contact_picture.jpg?alt=media&token=b4a016c0-06a3-4fd5-bf6e-59e9b9348285", 'Ajouter, modifier et supprimer des contacts, ainsi que l\'utilisation de la fonction de recherche de contacts', 'Il s\'agit de la gestion des informations de contact sur votre téléphone, y compris l\'ajout, la modification et la suppression des contacts'),
(8, 2, 8, 1, 'Lexicologie Android', 'iuhApzdDUpE', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Fandroid_picture.jpg?alt=media&token=f6c7a197-2ca9-4fe8-b9d2-37896435298c", 'pareil!!!', 'en cour de recherche!!!'),
(9, 6, 9, 1, 'Faire une photo ou une vidéo', 'GzgschJz8PU', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Ffaire_photo_picture.jpg?alt=media&token=512606e2-5e41-49a1-92b4-18b4f2935877", 'Utiliser l\'application de l\'appareil photo pour prendre des photos et enregistrer des vidéos', 'Cela concerne l\'action de capturer des images fixes (photos) ou des séquences en mouvement (vidéos) à l\'aide de la caméra de votre téléphone'),
(10, 6, 10, 1, 'Partager une photo ou une vidéo', 'KhzYEpuTGNY', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Fpartager_photo-picture.jpg?alt=media&token=55bdb78c-1e83-4a0c-9663-7000b374a9e1", 'Comprendre les différentes options de partage, y compris les réseaux sociaux et les applications de messagerie', 'Il s\'agit de l\'action de partager des photos ou des vidéos prises avec votre téléphone avec d\'autres personnes via divers moyens tels que les réseaux sociaux, les messageries, les applications de partage de fichiers, etc'),
(11, 6, 11, 1, 'Écouter de la musique', 'nf7DMSXGW5Q', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2F%C3%A9couter_musique_picture.jpg?alt=media&token=19389f6b-8a55-4698-8979-c83e809fec1a", 'Utiliser l\'application de lecteur de musique pour écouter des chansons et des podcasts', 'Cela concerne l\'action d\'écouter des fichiers audio, tels que des chansons ou des podcasts, sur votre téléphone'),
(12, 6, 12, 1, 'Regarder des vidéos', 'VKjjWxnXBCw', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Fregarder_vid%C3%A9o_picture.jpg?alt=media&token=2893925e-8665-49f9-b5da-f2a030b3ca43", 'Utiliser des applications vidéo pour regarder des vidéos en ligne et hors ligne', 'Cela fait référence à l\'action de visionner des vidéos sur votre téléphone, que ce soit des vidéos enregistrées localement, des vidéos en streaming ou des vidéos en ligne'),
(13, 6, 13, 1, 'Jouer', '0f5sh6TshFc', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Fjouer_picture.jpg?alt=media&token=f9b9fdfe-64ea-47db-bc47-f47b582491a8", 'Jouer à des jeux : Découvrir et utiliser les fonctionnalités de jeu sur votre téléphone', 'Cela signifie jouer à des jeux sur votre téléphone, qu\'il s\'agisse de jeux intégrés, de jeux téléchargés à partir d\'une boutique d\'applications ou de jeux en ligne'),
(14, 6, 14, 1, 'Facebook', 'vCousHq5Usw', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Ffacebook_picture.jpg?alt=media&token=6322b2fe-1355-4341-87f1-a3499ccac8e3", 'Présentation de Facebook', 'Facebook est un réseau social populaire où les utilisateurs peuvent se connecter avec des amis, partager des contenus tels que des photos et des vidéos, et interagir avec d\'autres utilisateurs via des publications, des commentaires, des messages'),
(15, 6, 15, 1, 'Instagram', 'hTryfrJuXRw', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Finstagram_picture.png?alt=media&token=2b0dd95e-e05b-4d0f-b0be-edeb66f28c63", 'Présentation de Instagram', 'Instagram est une plateforme de partage de photos et de vidéos où les utilisateurs peuvent capturer, éditer et partager des contenus visuels avec leurs abonnés. Il propose également des fonctionnalités de messagerie et d\'interaction sociale'),
(16, 6, 16, 1, 'Tiktok', 'b7mlZQ9jAsY', "https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/pictures%2Ftiktok_picture.png?alt=media&token=ad7d690d-a8c7-49fa-abe9-4936fed9cfa6", 'Présentation de TikTok', 'TikTok est une application de médias sociaux axée sur le partage de courtes vidéos. Les utilisateurs peuvent créer, éditer et partager des vidéos de quelques secondes à une minute, accompagnées de musique, de filtres et d\'effets spéciaux'),
(17, 3, 1, 2, 'dssg', 'fdfdf', 'https://firebasestorage.googleapis.com/v0/b/ligne-bleue-65740.appspot.com/o/images%2F%60-1688544028172.jpg?alt=media&token=46881998-143b-409d-a6f9-7a12da81c65b', 'dfefdf', 'dsfdfd'),
(18, 9, 2, 2, 'fsdf', 'dfsds', 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2F%60-1688544242486.jpg?alt=media&token=4cb7d5f3-ab53-42f2-83a7-dc53b17d660c', 'dfs', 'sdff'),
(19, 1, 3, 1, 'ssssss', 'ssss', 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2F%60-1688545250537.jpg?alt=media&token=0f996e25-5d2a-48d9-b3d8-5a78489a1cef', 'ss', 'ssss'),
(20, 1, 4, 1, 'xxxx', 'xxxxx', 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2F%60-1688545415890.jpg?alt=media&token=cded34bb-1907-408a-a834-543da22a9312', 'xxxx', 'xxx');

-- --------------------------------------------------------

--
-- Structure de la table `tutorialstags`
--

CREATE TABLE `tutorialstags` (
  `tutorial_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tutorialstags`
--

INSERT INTO `tutorialstags` (`tutorial_id`, `tag_id`) VALUES
(17, 1),
(18, 2),
(19, 3),
(20, 4);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `birthdayDate` date DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `role_id`, `level`, `email`, `hashedPassword`, `birthdayDate`, `firstname`, `lastname`, `location`, `gender`, `adress`, `city`, `picture`) VALUES
(1, 1, 1, 'gabyOne@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, 1, 'laetiTwo@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 1, 'eleaThree@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `userspins`
--

CREATE TABLE `userspins` (
  `pin_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `userstutorials`
--

CREATE TABLE `userstutorials` (
  `user_id` int(11) NOT NULL,
  `tutorial_id` int(11) NOT NULL,
  `step_id` int(11) NOT NULL,
  `fl_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `userstutorials`
--

INSERT INTO `userstutorials` (`user_id`, `tutorial_id`, `step_id`, `fl_status`) VALUES
(1, 1, 1, 0),
(1, 2, 2, 0),
(1, 3, 3, 0),
(2, 1, 4, 0),
(2, 2, 5, 0),
(2, 3, 6, 0),
(3, 1, 7, 0),
(3, 2, 8, 0),
(3, 3, 9, 0),
(1, 4, 10, 0),
(1, 5, 11, 0),
(1, 6, 12, 0),
(1, 7, 13, 0),
(1, 8, 14, 0),
(1, 9, 15, 0),
(1, 10, 16, 0),
(1, 11, 17, 0),
(1, 12, 18, 0),
(1, 13, 19, 0),
(1, 14, 20, 0),
(1, 15, 21, 0),
(1, 16, 22, 0),
(2, 4, 23, 0),
(2, 5, 24, 0),
(2, 6, 25, 0),
(2, 7, 26, 0),
(2, 8, 27, 0),
(2, 9, 28, 0),
(2, 10, 29, 0),
(2, 11, 30, 0),
(2, 12, 31, 0),
(2, 13, 32, 0),
(2, 14, 33, 0),
(2, 15, 34, 0),
(2, 16, 35, 0),
(3, 4, 36, 0),
(3, 5, 37, 0),
(3, 6, 38, 0),
(3, 7, 39, 0),
(3, 8, 40, 0),
(3, 9, 41, 0),
(3, 10, 42, 0),
(3, 11, 43, 0),
(3, 12, 44, 0),
(3, 13, 45, 0),
(3, 14, 46, 0),
(3, 15, 47, 0),
(3, 16, 48, 0),
(2, 3, 49, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `formations`
--
ALTER TABLE `formations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `levelformations`
--
ALTER TABLE `levelformations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pins`
--
ALTER TABLE `pins`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `quizz`
--
ALTER TABLE `quizz`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `steps`
--
ALTER TABLE `steps`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tutorials`
--
ALTER TABLE `tutorials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tutorials_formations` (`formation_id`);

--
-- Index pour la table `tutorialstags`
--
ALTER TABLE `tutorialstags`
  ADD KEY `fk_tutorialsTags_tags` (`tag_id`),
  ADD KEY `fk_tutorialsTags_tutorials` (`tutorial_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_roles` (`role_id`);

--
-- Index pour la table `userspins`
--
ALTER TABLE `userspins`
  ADD KEY `fk_usersPins_pins` (`pin_id`),
  ADD KEY `fk_usersPins_users` (`user_id`);

--
-- Index pour la table `userstutorials`
--
ALTER TABLE `userstutorials`
  ADD KEY `fk_usersTutorials_tutorials` (`tutorial_id`),
  ADD KEY `fk_usersTutorials_users` (`user_id`),
  ADD KEY `kf_usersTutorials_steps` (`step_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `formations`
--
ALTER TABLE `formations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `levelformations`
--
ALTER TABLE `levelformations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pins`
--
ALTER TABLE `pins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `quizz`
--
ALTER TABLE `quizz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `steps`
--
ALTER TABLE `steps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `tutorials`
--
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `tutorials`
--
ALTER TABLE `tutorials`
  ADD CONSTRAINT `fk_tutorials_formations` FOREIGN KEY (`formation_id`) REFERENCES `formations` (`id`);

--
-- Contraintes pour la table `tutorialstags`
--
ALTER TABLE `tutorialstags`
  ADD CONSTRAINT `fk_tutorialsTags_tags` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`),
  ADD CONSTRAINT `fk_tutorialsTags_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Contraintes pour la table `userspins`
--
ALTER TABLE `userspins`
  ADD CONSTRAINT `fk_usersPins_pins` FOREIGN KEY (`pin_id`) REFERENCES `pins` (`id`),
  ADD CONSTRAINT `fk_usersPins_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `userstutorials`
--
ALTER TABLE `userstutorials`
  ADD CONSTRAINT `fk_usersTutorials_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `kf_usersTutorials_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;s