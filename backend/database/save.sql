CREATE TABLE `formations` (
  `id` int(11) NOT NULL,
  `iconURL` varchar(500) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `fl_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `formations`
--

INSERT INTO `formations` (`id`, `iconURL`, `name`, `fl_status`) VALUES
(1, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fgridicons_phone.svg?alt=media&token=b85fa5ee-a833-4ce1-8b28-2a1c8aa14f99&_gl=1*1mp7uoc*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODc1OS4wLjAuMA..', 'Utiliser ligne bleue', 0),
(2, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_cellphone.svg?alt=media&token=7701c1ce-f719-4cfe-91ae-4c865862d718&_gl=1*ntspgp*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODg3NS4wLjAuMA..', 'Utiliser mon téléphone', 0),
(3, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-mail.svg?alt=media&token=58a57754-e76a-491d-93bb-2ae032a123d5&_gl=1*1f21nxw*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODkwNi4wLjAuMA..', 'Mes mails', 0),
(4, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fpepicons-pencil_internet.svg?alt=media&token=6fe88df0-16f9-4d1f-9f33-b9d485d18dd3&_gl=1*1gcvyue*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODk5MS4wLjAuMA..', 'Aller sur internet', 0),
(5, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmaterial-symbols_security.svg?alt=media&token=c35b77b1-1c0f-4433-a76e-9e28211fc7fe&_gl=1*tv4z9o*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA2MS4wLjAuMA..', 'Utiliser mon telephone en sécurité', 0),
(6, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-music-note.svg?alt=media&token=6b8b6256-dc56-4e96-8441-50baef9ad6a5&_gl=1*ayfkjy*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA4OS4wLjAuMA..', 'Me divertir avec mon téléphone', 0),
(7, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Ffe_phone.svg?alt=media&token=4f867375-87ff-45d6-bcd8-d4cd81c3d7dc&_gl=1*1w7ut5m*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTExMS4wLjAuMA..', 'Communiquer', 0),
(8, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_bike.svg?alt=media&token=293c7632-7fb8-42e2-98fc-7304c581a8e3&_gl=1*dd8bzq*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIwMS4wLjAuMA..', 'Se faire aider', 0),
(9, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_baseline-plus.svg?alt=media&token=08c843cb-6d62-4407-9af6-607dffe8ca73&_gl=1*asz2xl*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIyOS4wLjAuMA..', 'Pour aller plus loin', 0),
(10, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_biker.svg?alt=media&token=add74c9c-3747-4225-864b-beef8066a1a7&_gl=1*1sp6ziu*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTMxMy4wLjAuMA..', 'Applications utiles pour se déplacer', 0),
(11, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fbxs_home.svg?alt=media&token=9dd8aa5c-3816-42cf-bd87-b645760a8062&_gl=1*11d2lb0*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM0OS4wLjAuMA..', 'Applications utiles pour la vie courante', 0),
(12, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fclarity_applications-solid.svg?alt=media&token=f07bf611-ff15-4927-8298-ed686322d6c6&_gl=1*1j0qjgr*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM3Ni4wLjAuMA..', 'Tous les tutos', 0);

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

INSERT INTO `quizz` VALUES (1,'Comment éteindre ou allumer un téléphone ?','En retirant ou en insérant la batterie.','En secouant le téléphone.','En appuyant sur le bouton d\'alimentation jusqu\'à ce qu\'un menu apparaisse.'),(2,'Qu\'est-ce qu\'un QR code ?','Un code utilisé pour envoyer des messages texte.','Un code utilisé pour écouter de la musique en streaming.','Un code utilisé pour scanner et accéder rapidement à des informations.'),(3,'Comment interagir avec un écran tactile ?','En utilisant un stylet uniquement.','En appuyant fermement avec les ongles sur l\'écran.','En touchant l\'écran avec le doigt ou un stylet.'),(4,'Comment composer un numéro de téléphone sur un téléphone mobile ?','En utilisant les touches de l\'alphabet pour saisir les lettres du numéro.','En parlant le numéro à voix haute près du téléphone.','En appuyant sur les touches numériques correspondant aux chiffres du numéro.'),(5,'Qu\'est-ce qu\'un e-mail ?','Un message court envoyé via une application de messagerie instantanée.','Un message texte envoyé d\'un téléphone à un autre.','Un message électronique envoyé via Internet à une adresse e-mail.'),(6,'Comment envoyer un SMS depuis un téléphone ?','En utilisant une application de messagerie instantanée.','En envoyant un e-mail avec le message à un numéro de téléphone spécifique.','En composant le numéro de téléphone du destinataire et en rédigeant le message dans l\'application de messagerie du téléphone.'),(7,'Où sont généralement stockés les contacts sur un téléphone ?','Dans l\'application de messagerie.','Dans l\'application de calendrier.','Dans l\'application de contacts ou le répertoire téléphonique.'),(8,'Comment prendre une photo avec un téléphone ?','En appuyant sur le bouton d\'alimentation du téléphone.','App Package Keyboard.','En se servant de l\'interface photo du téléphone'),(9,'Comment partager une photo ou une vidéo prise avec un téléphone ?','En envoyant un e-mail avec la pièce jointe de la photo ou de la vidéo.','En publiant la photo ou la vidéo sur les réseaux sociaux tels que Facebook ou Instagram.','En utilisant l\'option de partage intégrée dans l\'application de galerie ou l\'application de médias du téléphone.'),(10,'Comment écouter de la musique sur un téléphone ?','En utilisant un lecteur CD externe connecté au téléphone.','En téléchargeant les chansons sur une clé USB à connecter au téléphone.','En utilisant une application de lecteur de musique intégrée ou en streaming via une application de musique en ligne.'),(11,'Comment regarder des vidéos sur un téléphone ?','En insérant un DVD dans le lecteur du téléphone.','En téléchargeant les vidéos sur une clé USB à connecter au téléphone.','En utilisant une application de lecteur vidéo intégrée ou en streaming via une application de vidéo en ligne'),(12,'Comment jouer à des jeux sur un téléphone ?','En insérant un disque de jeu dans le lecteur du téléphone.','En téléchargeant les jeux sur une clé USB à connecter au téléphone.','En téléchargeant et installant des jeux depuis une boutique d\'applications telle que Google Play Store ou l\'App Store, puis en les lançant sur le téléphone.'),(13,'Comment utiliser Facebook sur un téléphone ?','En accédant au site web de Facebook via le navigateur du téléphone.','En envoyant un SMS à Facebook pour recevoir les mises à jour.','En téléchargeant et installant l\'application Facebook depuis la boutique d\'applications, puis en se connectant à l\'application avec un compte Facebook existant ou en créant un nouveau compte.'),(14,'Comment utiliser Instagram sur un téléphone ?','En accédant au site web d\'Instagram via le navigateur du téléphone.','En envoyant des messages textes à Instagram pour publier des photos.','En téléchargeant et installant l\'application Instagram depuis la boutique d\'applications, puis en se connectant à l\'application avec un compte Instagram existant ou en créant un nouveau compte.'),(15,'Comment utiliser TikTok sur un téléphone ?','En accédant au site web de TikTok via le navigateur du téléphone.','En envoyant des messages textes à TikTok pour publier des vidéos.','En téléchargeant et installant l\'application TikTok depuis la boutique d\'applications, puis en se connectant à l\'application avec un compte TikTok existant ou en créant un nouveau compte.');

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
(1, '441655156655116515451'),
(2, '77788888999966666666111');

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
-- Structure de la table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tags` VALUES (1,'Démarrer,Arrêter,Téléphone'),(2,'QR code'),(3,'Écran,Tactile,Manipuler'),(4,'Téléphoner,Téléphone'),(5,'SMS,Mail,Message'),(6,'Envoyer,Recevoir,SMS'),(7,'Contacts,Ajouter,Supprimer'),(8,'Photo,Vidéo'),(9,'Photo,Vidéo,Partager'),(10,'Musique,Écouter'),(11,'Regarder,Vidéo'),(12,'Jouer,Jeu'),(13,'Facebook'),(14,'Instagram'),(15,'Tiktok');

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

INSERT INTO `tutorials` VALUES (1,2,1,1,'Arrêter/démarrer le téléphone','https://www.youtube.com/watch?v=tyqS8KUMdzI&ab_channel=BRFormation','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Farre%C3%8C%C2%82ter_te%C3%8C%C2%81le%C3%8C%C2%81phone_picture-1689839171921.jpg?alt=media&token=8e10a561-e711-4390-a98f-7896aedf05a9','Apprendre comment allumer et éteindre un téléphone','Pour allumer votre téléphone mobile, effectuez un appui long sur le bouton [Power]. Une vibration peut se faire sentir, relâchez le bouton à ce moment.\r\n\r\nBien que l’allumage s’effectue à l’aide du bouton Power, sur la plupart des smartphones l’extinction s’effectue depuis les menus. En général pour faire apparaître ce menu il faut appuyer quelque secondes sur le bouton power.\r\nÉteignez le smartphone avec le bouton Power uniquement lorsque celui-ci est complètement figé ou que vous ne pouvez accéder au menu pour l’éteindre.\r\n'),(2,2,2,1,'Utiliser un QR code','https://www.youtube.com/watch?v=HzRxVg8awns&ab_channel=Phonandroid','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2FQr_Code_Picture-1689839588592.jpg?alt=media&token=22c2faa5-dfe1-4ff0-a679-21c0f61d3551','Comprendre ce qu\'est un QR code et ses utilisations','Les QR codes sont des codes à barres en deux dimensions qui peuvent être scannés à l\'aide de l\'appareil photo de votre téléphone. Ils sont souvent utilisés pour accéder rapidement à des informations, des sites web, des applications'),(3,2,3,1,'Manipuler un écran tactile','https://www.youtube.com/watch?v=R5VJPh-WXrs&ab_channel=PoissonF%C3%A9cond','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fe%C3%8C%C2%81cran_tactile-1689839827214.jpg?alt=media&token=97d10877-5080-4b35-8ea6-8365b8e15963','Manipuler et naviguer sur l\'écran tactile, notamment en utilisant des gestes courants','Il s\'agit de l\'utilisation de vos doigts ou d\'un stylet pour interagir avec l\'écran tactile d\'\'un appareil, comme un smartphone ou une tablette'),(4,2,4,1,'Téléphoner','https://www.youtube.com/watch?v=6rENWsAuQFs&ab_channel=Jeanviet','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2FTe%C3%8C%C2%81le%C3%8C%C2%81phoner_picture-1689840921476.jpg?alt=media&token=18646f32-a55a-4e11-98d8-7372e95131fd','Composer, répondre et mettre fin à des appels téléphoniques','Cela fait référence à l\'action d\'utiliser votre téléphone pour passer des appels vocaux à d\'autres personnes'),(5,2,5,1,'Différence: SMS, mail, message','https://www.youtube.com/watch?v=7oBAEEGee7U&ab_channel=TidouTidou','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fenvoyer_sms_picture-1689841114701.jpg?alt=media&token=37454bbb-d021-41eb-9e6f-cdbf4754161a','Comprendre les différences entre ces différents modes de communication','Cette donnée concerne la distinction entre trois moyens courants de communication : les SMS (Short Message Service) qui sont des messages textuels envoyés via le réseau mobile, les e-mails qui sont des messages électroniques envoyés via Internet, et les messages qui peuvent être des messages instantanés envoyés via des applications de messagerie comme WhatsApp, Messenger'),(6,2,6,1,'Envoyer et recevoir un SMS','https://www.youtube.com/watch?v=7oBAEEGee7U&ab_channel=TidouTidou','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2FSMS_message_picture-1689841397615.jpg?alt=media&token=e1a74b16-a668-4a29-a3b3-10609b74d480','Apprendre à composer et à envoyer des messages textuels, ainsi qu\'à lire et à répondre aux messages reçus','Cela concerne l\'action d\'envoyer et de recevoir des messages textuels courts sur votre téléphone'),(7,2,7,1,'Gestion des contacts','https://www.youtube.com/watch?v=LvXX15XnqtQ&ab_channel=B.A-BAd%27android','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fgestion_contact_picture-1689841579004.jpg?alt=media&token=5e136c90-4052-4687-bb06-7d8c1ad8b8c1','Ajouter, modifier et supprimer des contacts, ainsi que l\'utilisation de la fonction de recherche de contacts','Il s\'agit de la gestion des informations de contact sur votre téléphone, y compris l\'ajout, la modification et la suppression des contacts'),(8,6,8,1,'Faire une photo ou une vidéo','https://www.youtube.com/watch?v=GzgschJz8PU&ab_channel=AlexJackson','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Ffaire_photo_picture-1689841880911.jpg?alt=media&token=019de0c0-4229-471d-ba1c-c454dba7c766','Utiliser l\'application de l\'appareil photo pour prendre des photos et enregistrer des vidéos','Cela concerne l\'action de capturer des images fixes (photos) ou des séquences en mouvement (vidéos) à l\'aide de la caméra de votre téléphone'),(9,6,9,1,'Partager une photo ou une vidéo','https://www.youtube.com/watch?v=KhzYEpuTGNY&ab_channel=AmzeeeL','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fpartager_photo-picture-1689842047164.jpg?alt=media&token=cf6235ad-f03c-431b-8125-ace35eb71d5a','Comprendre les différentes options de partage, y compris les réseaux sociaux et les applications de messagerie','Il s\'agit de l\'action de partager des photos ou des vidéos prises avec votre téléphone avec d\'autres personnes via divers moyens tels que les réseaux sociaux, les messageries, les applications de partage de fichiers, etc'),(10,6,10,1,'Écouter de la musique','https://www.youtube.com/watch?v=nf7DMSXGW5Q&ab_channel=BIFIX','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fe%C3%8C%C2%81couter_musique_picture-1689842207730.jpg?alt=media&token=a42a4037-f76d-4087-8ba3-f6f1555dafb9','Utiliser l\'application de lecteur de musique pour écouter des chansons et des podcasts','Cela concerne l\'action d\'écouter des fichiers audio, tels que des chansons ou des podcasts, sur votre téléphone'),(11,6,11,1,'Regarder des vidéos','https://www.youtube.com/watch?v=VKjjWxnXBCw&ab_channel=Alphamugisa','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fregarder_vide%C3%8C%C2%81o_picture-1689842328466.jpg?alt=media&token=4e85a6d6-23e7-4fb0-98f7-3b5bc4e47357','Utiliser des applications vidéo pour regarder des vidéos en ligne et hors ligne','Cela fait référence à l\'action de visionner des vidéos sur votre téléphone, que ce soit des vidéos enregistrées localement, des vidéos en streaming ou des vidéos en ligne'),(12,6,12,1,'Jouer','https://www.youtube.com/watch?v=0f5sh6TshFc&ab_channel=iMendi','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Fjouer_picture-1689842455810.jpg?alt=media&token=771afc0e-646c-4f92-bd24-1a887d435771','Jouer à des jeux : Découvrir et utiliser les fonctionnalités de jeu sur votre téléphone','Cela signifie jouer à des jeux sur votre téléphone, qu\'il s\'agisse de jeux intégrés, de jeux téléchargés à partir d\'une boutique d\'applications ou de jeux en ligne'),(13,6,13,1,'Facebook','https://www.youtube.com/watch?v=vCousHq5Usw&ab_channel=MinuteFacile','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Ffacebook_picture-1689842598959.jpg?alt=media&token=a927e512-6379-4260-a277-0ddcf105cd52','Présentation de Facebook','Facebook est un réseau social populaire où les utilisateurs peuvent se connecter avec des amis, partager des contenus tels que des photos et des vidéos, et interagir avec d\'autres utilisateurs via des publications, des commentaires, des messages'),(14,6,14,1,'Instagram','https://www.youtube.com/watch?v=hTryfrJuXRw&ab_channel=AbsysFormation','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Finstagram_picture-1689842806104.png?alt=media&token=46aa5218-2f9c-40ef-8bf7-993fd005cb8d','Présentation de Instagram','Instagram est une plateforme de partage de photos et de vidéos où les utilisateurs peuvent capturer, éditer et partager des contenus visuels avec leurs abonnés. Il propose également des fonctionnalités de messagerie et d\'interaction sociale'),(15,6,15,1,'Tiktok','https://www.youtube.com/watch?v=b7mlZQ9jAsY&ab_channel=ren%C3%A9Duranti','https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/images%2Ftiktok_picture-1689842956312.png?alt=media&token=c55ade57-d597-4b89-9e18-bcedf74969b4','Présentation de TikTok','TikTok est une application de médias sociaux axée sur le partage de courtes vidéos. Les utilisateurs peuvent créer, éditer et partager des vidéos de quelques secondes à une minute, accompagnées de musique, de filtres et d\'effets spéciaux');

--
-- Structure de la table `tutorialstags`
--

CREATE TABLE `tutorialstags` (
  `tutorial_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tutorialstags` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15);

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `birthdayDate` date DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` VALUES (1,2,NULL,'admin@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$ms9IT1vDs0Ll9jRyrKsxJQ$oNAC746uZPvWb20dl8cZCWLqvVlKW19WNsZ1ayH5e6E',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,1,1,'user@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$v3DBU68ti0EW8e5Uk3zc3g$GKyGJnK2twVbfrUR8iCpepxTWgD3H/itR8oGNTvAKMU',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

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
-- Index pour les tables déchargées
--

--
-- Index pour la table `formations`
--
ALTER TABLE `formations`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `quizz`
--
ALTER TABLE `quizz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `steps`
--
ALTER TABLE `steps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `tutorials`
--
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

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
  ADD CONSTRAINT `fk_tutorialsTags_tags` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_tutorialsTags_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE;
  
--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `userstutorials`
--
ALTER TABLE `userstutorials`
  ADD CONSTRAINT `fk_usersTutorials_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_steps_delete` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_users_delete` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;
