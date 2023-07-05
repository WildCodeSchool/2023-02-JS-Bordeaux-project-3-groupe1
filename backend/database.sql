CREATE TABLE `formations` (
  `id` int(11) NOT NULL,
  `iconURL` varchar(500) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `fl_status` tinyint(1) NOT NULL,
  `levelFormation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `levelformations` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `pins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `quizz` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `firstProposal` varchar(500) NOT NULL,
  `secondProposal` varchar(500) NOT NULL,
  `response` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `quizz` (`id`, `question`, `firstProposal`, `secondProposal`, `response`) VALUES
(1, 'dfdf', 'dszz', 'dz', 'fd');

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'testnumberone'),
(2, 'testnumberTwo'),
(3, 'testnumberThree');

CREATE TABLE `steps` (
  `id` int(11) NOT NULL,
  `stepOne` tinyint(1) DEFAULT NULL,
  `stepTwo` tinyint(1) DEFAULT NULL,
  `stepThree` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `steps` (`id`, `stepOne`, `stepTwo`, `stepThree`) VALUES
(1, 0, 0, 0),
(2, 0, 0, 0),
(3, 1, 1, 1),
(4, 0, 1, 1),
(5, 0, 0, 0),
(6, NULL, NULL, NULL),
(7, 1, 0, 1),
(8, 1, 0, 1),
(9, 1, 0, 1),
(10, 1, 0, 1),
(11, 1, 0, 1),
(12, 1, 0, 1),
(13, 1, 0, 1),
(14, 1, 0, 1),
(15, 1, 0, 1),
(16, 1, 0, 1),
(17, 1, 0, 1),
(18, 1, 0, 1),
(19, 1, 0, 1),
(20, 1, 0, 1),
(21, 1, 0, 1),
(22, 1, 0, 1),
(23, 1, 0, 1),
(24, 1, 0, 1),
(25, 1, 0, 1),
(26, 1, 0, 1),
(27, 1, 0, 1),
(28, 1, 0, 1),
(29, 1, 0, 1),
(30, 1, 0, 1),
(31, 1, 0, 1),
(32, 1, 0, 1),
(33, 1, 0, 1),
(34, 1, 0, 1),
(35, 1, 0, 1),
(36, 1, 0, 1),
(37, 1, 0, 1),
(38, 1, 0, 1),
(39, 1, 0, 1),
(40, 1, 0, 1),
(41, 1, 0, 1),
(42, 1, 0, 1),
(43, 1, 0, 1),
(44, 1, 0, 1),
(45, 1, 0, 1),
(46, 1, 0, 1),
(47, 1, 0, 1),
(48, 1, 0, 1);

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tags` (`id`, `name`) VALUES
(1, 'gdsgsdg'),
(2, 'fdsfsd'),
(3, 's'),
(4, 'xxx');

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

INSERT INTO `tutorials` (`id`, `formation_id`, `quizz_id`, `level`, `name`, `urlVideo`, `pictureTuto`, `objectif`, `explication`) VALUES
(1, 2, 1, 1, 'Arrêter/démarrer le téléphone', 'tyqS8KUMdzI', NULL, 'Apprendre comment allumer et éteindre un téléphone', 'Il s\'agit de la procédure pour éteindre ou allumer votre téléphone portable'),
(2, 2, 2, 1, 'Utiliser un QR code', 'HzRxVg8awns', NULL, 'Explication des QR codes : Comprendre ce qu\'est un QR code et ses utilisations', 'Les QR codes sont des codes à barres en deux dimensions qui peuvent être scannés à l\'aide de l\'appareil photo de votre téléphone. Ils sont souvent utilisés pour accéder rapidement à des informations, des sites web, des applications'),
(3, 2, 3, 1, 'Manipuler un écran tactile', 'R5VJPh-WXrs', NULL, 'Manipuler et naviguer sur l\'écran tactile, notamment en utilisant des gestes courants', ' Il s\'agit de l\'utilisation de vos doigts ou d\'un stylet pour interagir avec l\'écran tactile d\'un appareil, comme un smartphone ou une tablette'),
(4, 2, 4, 1, 'Téléphoner', '6rENWsAuQFs', NULL, 'Composer, répondre et mettre fin à des appels téléphoniques', 'Cela fait référence à l\'action d\'utiliser votre téléphone pour passer des appels vocaux à d\'autres personnes'),
(5, 2, 5, 1, 'Différence: SMS, mail, message', 'Cm63VfyL5BQ', NULL, 'Comprendre les différences entre ces différents modes de communication', 'Cette donnée concerne la distinction entre trois moyens courants de communication : les SMS (Short Message Service) qui sont des messages textuels envoyés via le réseau mobile, les e-mails qui sont des messages électroniques envoyés via Internet, et les messages qui peuvent être des messages instantanés envoyés via des applications de messagerie comme WhatsApp, Messenger'),
(6, 2, 6, 1, 'Envoyer et recevoir un SMS', '7oBAEEGee7U', NULL, 'Apprendre à composer et à envoyer des messages textuels, ainsi qu\'à lire et à répondre aux messages reçus', 'Cela concerne l\'action d\'envoyer et de recevoir des messages textuels courts sur votre téléphone'),
(7, 2, 7, 1, 'Gestion des contacts', 'LvXX15XnqtQ', NULL, 'Ajouter, modifier et supprimer des contacts, ainsi que l\'utilisation de la fonction de recherche de contacts', 'Il s\'agit de la gestion des informations de contact sur votre téléphone, y compris l\'ajout, la modification et la suppression des contacts'),
(8, 2, 8, 1, 'Lexicologie Android', 'iuhApzdDUpE', NULL, 'pareil!!!', 'en cour de recherche!!!'),
(9, 6, 1, 1, 'Faire une photo ou une vidéo', 'GzgschJz8PU', NULL, 'Utiliser l\'application de l\'appareil photo pour prendre des photos et enregistrer des vidéos', 'Cela concerne l\'action de capturer des images fixes (photos) ou des séquences en mouvement (vidéos) à l\'aide de la caméra de votre téléphone'),
(10, 6, 2, 1, 'Partager une photo ou une vidéo', 'KhzYEpuTGNY', NULL, 'Comprendre les différentes options de partage, y compris les réseaux sociaux et les applications de messagerie', 'Il s\'agit de l\'action de partager des photos ou des vidéos prises avec votre téléphone avec d\'autres personnes via divers moyens tels que les réseaux sociaux, les messageries, les applications de partage de fichiers, etc'),
(11, 6, 3, 1, 'Écouter de la musique', 'nf7DMSXGW5Q', NULL, 'Utiliser l\'application de lecteur de musique pour écouter des chansons et des podcasts', 'Cela concerne l\'action d\'écouter des fichiers audio, tels que des chansons ou des podcasts, sur votre téléphone'),
(12, 6, 4, 1, 'Regarder des vidéos', 'VKjjWxnXBCw', NULL, 'Utiliser des applications vidéo pour regarder des vidéos en ligne et hors ligne', 'Cela fait référence à l\'action de visionner des vidéos sur votre téléphone, que ce soit des vidéos enregistrées localement, des vidéos en streaming ou des vidéos en ligne'),
(13, 6, 5, 1, 'Jouer', '0f5sh6TshFc', NULL, 'Jouer à des jeux : Découvrir et utiliser les fonctionnalités de jeu sur votre téléphone', 'Cela signifie jouer à des jeux sur votre téléphone, qu\'il s\'agisse de jeux intégrés, de jeux téléchargés à partir d\'une boutique d\'applications ou de jeux en ligne'),
(14, 6, 6, 1, 'Facebook', 'vCousHq5Usw', NULL, 'Présentation de Facebook', 'Facebook est un réseau social populaire où les utilisateurs peuvent se connecter avec des amis, partager des contenus tels que des photos et des vidéos, et interagir avec d\'autres utilisateurs via des publications, des commentaires, des messages'),
(15, 6, 7, 1, 'Instagram', 'hTryfrJuXRw', NULL, 'Présentation de Instagram', 'Instagram est une plateforme de partage de photos et de vidéos où les utilisateurs peuvent capturer, éditer et partager des contenus visuels avec leurs abonnés. Il propose également des fonctionnalités de messagerie et d\'interaction sociale'),
(16, 6, 8, 1, 'Tiktok', 'b7mlZQ9jAsY', NULL, 'Présentation de TikTok', 'TikTok est une application de médias sociaux axée sur le partage de courtes vidéos. Les utilisateurs peuvent créer, éditer et partager des vidéos de quelques secondes à une minute, accompagnées de musique, de filtres et d\'effets spéciaux'),

CREATE TABLE `tutorialstags` (
  `tutorial_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tutorialstags` (`tutorial_id`, `tag_id`) VALUES
(17, 1),
(18, 2),
(19, 3),
(20, 4);

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

INSERT INTO `users` (`id`, `role_id`, `level`, `email`, `hashedPassword`, `birthdayDate`, `firstname`, `lastname`, `location`, `gender`, `adress`, `city`, `picture`) VALUES
(1, 1, 1, 'gabyOne@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 1, 1, 'laetiTwo@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 1, 1, 'eleaThree@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

CREATE TABLE `userspins` (
  `pin_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `userstutorials` (
  `user_id` int(11) NOT NULL,
  `tutorial_id` int(11) NOT NULL,
  `step_id` int(11) NOT NULL,
  `fl_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(3, 16, 48, 0);

ALTER TABLE `formations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `levelformations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `pins`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `quizz`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `steps`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tutorials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tutorials_formations` (`formation_id`);

ALTER TABLE `tutorialstags`
  ADD KEY `fk_tutorialsTags_tags` (`tag_id`),
  ADD KEY `fk_tutorialsTags_tutorials` (`tutorial_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_roles` (`role_id`);

ALTER TABLE `userspins`
  ADD KEY `fk_usersPins_pins` (`pin_id`),
  ADD KEY `fk_usersPins_users` (`user_id`);

ALTER TABLE `userstutorials`
  ADD KEY `fk_usersTutorials_tutorials` (`tutorial_id`),
  ADD KEY `fk_usersTutorials_users` (`user_id`),
  ADD KEY `kf_usersTutorials_steps` (`step_id`);

ALTER TABLE `formations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

ALTER TABLE `levelformations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `pins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `quizz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `steps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `tutorials`
  ADD CONSTRAINT `fk_tutorials_formations` FOREIGN KEY (`formation_id`) REFERENCES `formations` (`id`);

ALTER TABLE `tutorialstags`
  ADD CONSTRAINT `fk_tutorialsTags_tags` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`),
  ADD CONSTRAINT `fk_tutorialsTags_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE;

ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

ALTER TABLE `userspins`
  ADD CONSTRAINT `fk_usersPins_pins` FOREIGN KEY (`pin_id`) REFERENCES `pins` (`id`),
  ADD CONSTRAINT `fk_usersPins_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `userstutorials`
  ADD CONSTRAINT `fk_usersTutorials_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `kf_usersTutorials_steps` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`);
