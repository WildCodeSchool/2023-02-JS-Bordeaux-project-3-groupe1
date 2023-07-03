CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_id` integer NOT NULL,
  `level` integer NOT NULL,
  `email` varchar(255) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `birthdayDate` date,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `location` integer,
  `gender` varchar(255),
  `adress` varchar(255),
  `city` varchar(255),
  `picture` varchar(255)
);

CREATE TABLE `roles` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `levelFormations` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `level` integer NOT NULL
);

CREATE TABLE `formations` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `iconURL` varchar(500) NOT NULL,
  `fl_status` boolean NOT NULL,
  `levelFormation_id` integer NOT NULL
);

CREATE TABLE `usersTutorials` (
  `user_id` integer NOT NULL,
  `tutorial_id` integer NOT NULL,
  `fl_status` boolean NOT NULL
);

CREATE TABLE `tutorials` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `formation_id` integer NOT NULL,
  `quizz_id` integer NOT NULL,
  `level` integer NOT NULL,
  `name` varchar(255) NOT NULL,
  `urlVideo` varchar(255),
  `pictureTuto` varchar(255),
  `objectif` text NOT NULL,
  `explication` text NOT NULL
);

CREATE TABLE `steps` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stepOne` boolean,
  `stepTwo` boolean,
  `stepThree` boolean
);

CREATE TABLE `tutorialsSteps` (
  `tutorial_id` integer NOT NULL,
  `step_id` integer NOT NULL
);

CREATE TABLE `pins` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `quizz` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `firstProposal` varchar(500) NOT NULL,
  `secondProposal` varchar(500) NOT NULL,
  `response` varchar(500) NOT NULL
);

CREATE TABLE `tutorialsTags` (
  `tutorial_id` integer NOT NULL,
  `tag_id` integer NOT NULL
);

CREATE TABLE `tags` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `usersPins` (
  `pin_id` integer NOT NULL,
  `user_id` integer NOT NULL
);

ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_users FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE;

ALTER TABLE
  users
ADD
  CONSTRAINT fk_users_roles FOREIGN KEY (role_id) REFERENCES roles(id);

-- 
ALTER TABLE
  usersPins
ADD
  CONSTRAINT fk_usersPins_pins FOREIGN KEY (pin_id) REFERENCES pins(id);

ALTER TABLE
  usersPins
ADD
  CONSTRAINT fk_usersPins_users FOREIGN KEY (user_id) REFERENCES users(id);

-- ALTER TABLE
--   usersTutorials
-- ADD
--   CONSTRAINT fk_usersTutorials_steps FOREIGN KEY (step_id) REFERENCES steps(id);

ALTER TABLE
  tutorialsTags
ADD
  CONSTRAINT fk_tutorialsTags_tags FOREIGN KEY (tag_id) REFERENCES tags(id);

ALTER TABLE
  tutorialsTags
ADD
  CONSTRAINT fk_tutorialsTags_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);

ALTER TABLE
  tutorialsSteps
ADD
  CONSTRAINT fk_tutorialsSteps_steps FOREIGN KEY (step_id) REFERENCES steps(id);

ALTER TABLE
  tutorialsSteps
ADD
  CONSTRAINT fk_tutorialsSteps_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);


ALTER TABLE
  tutorials
ADD
  CONSTRAINT fk_tutorials_formations FOREIGN KEY (formation_id) REFERENCES formations(id);

-- ALTER TABLE
--   tutorials
-- ADD
--   CONSTRAINT fk_tutorials_quizz FOREIGN KEY (quizz_id) REFERENCES quizz(id);

--   ALTER TABLE
--   formations
-- ADD
--   CONSTRAINT fk_formations_levelFormation FOREIGN KEY (levelFormation_id) REFERENCES levelFormations(id);


-- UPDATE table_enfant
-- SET colonne_enfant = (SELECT colonne_parente FROM table_parente WHERE table_parente.id = table_enfant.id)


INSERT INTO 
    roles (name)
VALUES
('testnumberone'),
('testnumberTwo'),
('testnumberThree');

INSERT INTO 
    levelFormations (level)
VALUES
(1),
(2);

INSERT INTO 
    users(role_id, level, email, hashedPassword)
VALUES 
(1, 1, 'gabyOne@gmail.com', "jhoqhdfqbfnqbflkqnblfnblqbfbq"),
(1, 1, 'laetiTwo@gmail.com', "jhoqhdfqbfnqbflkqnblfnblqbfbq"),
(1, 1, 'eleaThree@gmail.com', "jhoqhdfqbfnqbflkqnblfnblqbfbq");

INSERT INTO
  formations (iconURL, name, fl_status, levelFormation_id)
VALUES
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fgridicons_phone.svg?alt=media&token=b85fa5ee-a833-4ce1-8b28-2a1c8aa14f99&_gl=1*1mp7uoc*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODc1OS4wLjAuMA..',
    'Utiliser ligne bleu',
    false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_cellphone.svg?alt=media&token=7701c1ce-f719-4cfe-91ae-4c865862d718&_gl=1*ntspgp*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODg3NS4wLjAuMA..',
    'Utiliser mon téléphone',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-mail.svg?alt=media&token=58a57754-e76a-491d-93bb-2ae032a123d5&_gl=1*1f21nxw*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODkwNi4wLjAuMA..',
    'Mes mails',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fpepicons-pencil_internet.svg?alt=media&token=6fe88df0-16f9-4d1f-9f33-b9d485d18dd3&_gl=1*1gcvyue*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODk5MS4wLjAuMA..',
    'Aller sur internet',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmaterial-symbols_security.svg?alt=media&token=c35b77b1-1c0f-4433-a76e-9e28211fc7fe&_gl=1*tv4z9o*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA2MS4wLjAuMA..',
    'Utiliser mon téléphone en sécurité',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-music-note.svg?alt=media&token=6b8b6256-dc56-4e96-8441-50baef9ad6a5&_gl=1*ayfkjy*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA4OS4wLjAuMA..',
    'Me divertir avec mon téléphone',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Ffe_phone.svg?alt=media&token=4f867375-87ff-45d6-bcd8-d4cd81c3d7dc&_gl=1*1w7ut5m*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTExMS4wLjAuMA..',
    'Communiquer',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_bike.svg?alt=media&token=293c7632-7fb8-42e2-98fc-7304c581a8e3&_gl=1*dd8bzq*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIwMS4wLjAuMA..',
    'Se faire aider',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_baseline-plus.svg?alt=media&token=08c843cb-6d62-4407-9af6-607dffe8ca73&_gl=1*asz2xl*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIyOS4wLjAuMA..',
    'Pour aller plus loin',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_biker.svg?alt=media&token=add74c9c-3747-4225-864b-beef8066a1a7&_gl=1*1sp6ziu*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTMxMy4wLjAuMA..',
    'Applications utiles pour se déplacer',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fbxs_home.svg?alt=media&token=9dd8aa5c-3816-42cf-bd87-b645760a8062&_gl=1*11d2lb0*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM0OS4wLjAuMA..',
    'Applications utiles pour la vie courante',
        false,
    1
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fclarity_applications-solid.svg?alt=media&token=f07bf611-ff15-4927-8298-ed686322d6c6&_gl=1*1j0qjgr*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM3Ni4wLjAuMA..',
    'Tous les tutos',
        false,
    1
  );

/* INSERT INTO `tutorials` (`id`, `formation_id`, `quizz_id`, `level`, `name`, `urlVideo`, `pictureTuto`, `objectif`, `explication`) VALUES
(1, 2, 1, 1, 'Arrêter/démarrer le téléphone', NULL, NULL, 'Apprendre comment allumer et éteindre un téléphone', `Il s'agit de la procédure pour éteindre ou allumer votre téléphone portable`),
(2, 2, 2, 1, 'Utiliser un QR code', NULL, NULL, `Explication des QR codes : Comprendre ce qu'est un QR code et ses utilisations`, `Les QR codes sont des codes à barres en deux dimensions qui peuvent être scannés à l'aide de l'appareil photo de votre téléphone. Ils sont souvent utilisés pour accéder rapidement à des informations, des sites web, des applications`),
(3, 2, 3, 1, 'Manipuler un écran tactile', NULL, NULL, `Manipuler et naviguer sur l'écran tactile, notamment en utilisant des gestes courants`, `Il s'agit de l'utilisation de vos doigts ou d'un stylet pour interagir avec l'écran tactile d'un appareil, comme un smartphone ou une tablette`),
(4, 2, 4, 1, 'Téléphoner', NULL, NULL, `Composer, répondre et mettre fin à des appels téléphoniques', 'Cela fait référence à l'action d'utiliser votre téléphone pour passer des appels vocaux à d'autres personnes`),
(5, 2, 5, 1, 'Différence: SMS, mail, message', NULL, NULL, 'Comprendre les différences entre ces différents modes de communication', 'Cette donnée concerne la distinction entre trois moyens courants de communication : les SMS (Short Message Service) qui sont des messages textuels envoyés via le réseau mobile, les e-mails qui sont des messages électroniques envoyés via Internet, et les messages qui peuvent être des messages instantanés envoyés via des applications de messagerie comme WhatsApp, Messenger'),
(6, 2, 6, 1, 'Envoyer et recevoir un SMS', NULL, NULL, `Apprendre à composer et à envoyer des messages textuels, ainsi qu'à lire et à répondre aux messages reçus`, `Cela concerne l'action d'envoyer et de recevoir des messages textuels courts sur votre téléphone`),
(7, 2, 7, 1, 'Gestion des contacts', NULL, NULL, `Ajouter, modifier et supprimer des contacts, ainsi que l'utilisation de la fonction de recherche de contacts`, `Il s'agit de la gestion des informations de contact sur votre téléphone, y compris l'ajout, la modification et la suppression des contacts`),
(8, 2, 8, 1, 'Lexicologie Android', NULL, NULL, 'pareil!!!', 'en cour de recherche!!!'),
(9, 6, 1, 1, 'Faire une photo ou une vidéo', NULL, NULL, `Utiliser l'application de l'appareil photo pour prendre des photos et enregistrer des vidéos`, `Cela concerne l'action de capturer des images fixes (photos) ou des séquences en mouvement (vidéos) à l'aide de la caméra de votre téléphone`),
(10, 6, 2, 1, 'Partager une photo ou une vidéo', NULL, NULL, 'Comprendre les différentes options de partage, y compris les réseaux sociaux et les applications de messagerie', `Il s'agit de l'action de partager des photos ou des vidéos prises avec votre téléphone avec d'autres personnes via divers moyens tels que les réseaux sociaux, les messageries, les applications de partage de fichiers, etc`),
(11, 6, 3, 1, 'Écouter de la musique', NULL, NULL, `Utiliser l'application de lecteur de musique pour écouter des chansons et des podcasts`, `Cela concerne l'action d'écouter des fichiers audio, tels que des chansons ou des podcasts, sur votre téléphone`),
(12, 6, 4, 1, 'Regarder des vidéos', NULL, NULL, 'Utiliser des applications vidéo pour regarder des vidéos en ligne et hors ligne', `Cela fait référence à l'action de visionner des vidéos sur votre téléphone, que ce soit des vidéos enregistrées localement, des vidéos en streaming ou des vidéos en ligne`),
(13, 6, 5, 1, 'Jouer', NULL, NULL, 'Jouer à des jeux : Découvrir et utiliser les fonctionnalités de jeu sur votre téléphone', `Cela signifie jouer à des jeux sur votre téléphone, qu'il s'agisse de jeux intégrés, de jeux téléchargés à partir d'une boutique d'applications ou de jeux en ligne`),
(14, 6, 6, 1, 'Facebook', NULL, NULL, 'Présentation de Facebook', `Facebook est un réseau social populaire où les utilisateurs peuvent se connecter avec des amis, partager des contenus tels que des photos et des vidéos, et interagir avec d'autres utilisateurs via des publications, des commentaires, des messages`),
(15, 6, 7, 1, 'Instagram', NULL, NULL, 'Présentation de Instagram', `Instagram est une plateforme de partage de photos et de vidéos où les utilisateurs peuvent capturer, éditer et partager des contenus visuels avec leurs abonnés. Il propose également des fonctionnalités de messagerie et d'interaction sociale`),
(16, 6, 8, 1, 'Tiktok', NULL, NULL, 'Présentation de TikTok', `TikTok est une application de médias sociaux axée sur le partage de courtes vidéos. Les utilisateurs peuvent créer, éditer et partager des vidéos de quelques secondes à une minute, accompagnées de musique, de filtres et d'effets spéciaux`);
  */ 
ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);
  
  ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_user FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE `mvc_express`.`tutorialstags` DROP FOREIGN KEY `fk_tutorialsTags_tags`;
ALTER TABLE `mvc_express`.`tutorialstags` DROP FOREIGN KEY `fk_tutorialsTags_tutorials`;
ALTER TABLE `mvc_express`.`tutorialstags` ADD CONSTRAINT `fk_tutorialsTags_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE;

ALTER TABLE `mvc_express`.`tutorialsSteps` DROP FOREIGN KEY `fk_tutorialsSteps_steps`;
ALTER TABLE `mvc_express`.`tutorialsSteps` DROP FOREIGN KEY `fk_tutorialsSteps_tutorials`;
ALTER TABLE `mvc_express`.`tutorialsSteps` ADD CONSTRAINT `fk_tutorialsSteps_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE;

-- ALTER TABLE
--   tutorials
-- ADD
--   CONSTRAINT fk_tutorials_quizz FOREIGN KEY (quizz_id) REFERENCES quizz(id);

--   ALTER TABLE
--   formations
-- ADD
--   CONSTRAINT fk_formations_levelFormation FOREIGN KEY (levelFormation_id) REFERENCES levelFormations(id);

--                  firebase storage

/* INSERT INTO usersTutorials ( tutorial_id, user_id, fl_status )
VALUES 
(2, 1, 0),
 */

/* INSERT INTO steps (stepOne, stepTwo, stepThree)
VALUES
(1, 0, 1),
(0, 0, 0),
(1, 1, 1),
(0, 1, 1),
(0, 0, 1),
(0, 0, 1),
(1, 0, 0),
(1, 0, 0),
(1, 0, 0),
(1, 0, 1),
(1, 0, 1),
(1, 1, 0),
(1, 1, 0),
(1, 1, 0),
(1, 1, 0),
(1, 0, 1);
 */