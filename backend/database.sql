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
  `name` varchar(200), -- iconDescription
  `iconURL` varchar(500) NOT NULL,
  `fl_status` boolean NOT NULL,
  `levelFormation_id` integer NOT NULL
  `name` varchar(200),
  `fl_status` boolean NOT NULL
);

CREATE TABLE `usersTutorials` (
  `user_id` integer NOT NULL,
  `tutorial_id` integer NOT NULL,
  `step_id` integer NOT NULL,
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
  `step_user_id` integer NOT NULL,
  `stepOne` boolean,
  `stepTwo` boolean,
  `stepThree` boolean
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

-- --                  firebase storage


ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_users FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE;

ALTER TABLE
usersTutorials
ADD
  CONSTRAINT kf_usersTutorials_users FOREIGN KEY (step_id) REFERENCES users(id) ON UPDATE CASCADE;

ALTER TABLE
steps
ADD
  CONSTRAINT fk_steps_usersTutorials FOREIGN KEY (step_user_id) REFERENCES usersTutorials(step_id) ON UPDATE CASCADE;

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

ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);

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
    users(role_id, level, email)
VALUES 
(1, 1, 'gabyOne@gmail.com'),
(1, 1, 'laetiTwo@gmail.com'),
(1, 1, 'eleaThree@gmail.com');

INSERT INTO
  formations (iconURL, name)
VALUES
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fgridicons_phone.svg?alt=media&token=b85fa5ee-a833-4ce1-8b28-2a1c8aa14f99&_gl=1*1mp7uoc*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODc1OS4wLjAuMA..',
    'Utiliser ligne bleu'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_cellphone.svg?alt=media&token=7701c1ce-f719-4cfe-91ae-4c865862d718&_gl=1*ntspgp*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODg3NS4wLjAuMA..',
    'Utiliser mon téléphone'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-mail.svg?alt=media&token=58a57754-e76a-491d-93bb-2ae032a123d5&_gl=1*1f21nxw*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODkwNi4wLjAuMA..',
    'Mes mails'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fpepicons-pencil_internet.svg?alt=media&token=6fe88df0-16f9-4d1f-9f33-b9d485d18dd3&_gl=1*1gcvyue*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODk5MS4wLjAuMA..',
    'Aller sur internet'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmaterial-symbols_security.svg?alt=media&token=c35b77b1-1c0f-4433-a76e-9e28211fc7fe&_gl=1*tv4z9o*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA2MS4wLjAuMA..',
    'Utiliser mon téléphone en sécurité'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_round-music-note.svg?alt=media&token=6b8b6256-dc56-4e96-8441-50baef9ad6a5&_gl=1*ayfkjy*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTA4OS4wLjAuMA..',
    'Me divertir avec mon téléphone'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Ffe_phone.svg?alt=media&token=4f867375-87ff-45d6-bcd8-d4cd81c3d7dc&_gl=1*1w7ut5m*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTExMS4wLjAuMA..',
    'Communiquer'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_bike.svg?alt=media&token=293c7632-7fb8-42e2-98fc-7304c581a8e3&_gl=1*dd8bzq*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIwMS4wLjAuMA..',
    'Se faire aider'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fic_baseline-plus.svg?alt=media&token=08c843cb-6d62-4407-9af6-607dffe8ca73&_gl=1*asz2xl*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTIyOS4wLjAuMA..',
    'Pour aller plus loin'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fmdi_biker.svg?alt=media&token=add74c9c-3747-4225-864b-beef8066a1a7&_gl=1*1sp6ziu*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTMxMy4wLjAuMA..',
    'Applications utiles pour se déplacer'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fbxs_home.svg?alt=media&token=9dd8aa5c-3816-42cf-bd87-b645760a8062&_gl=1*11d2lb0*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM0OS4wLjAuMA..',
    'Applications utiles pour la vie courante'
  ),
  (
    'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fclarity_applications-solid.svg?alt=media&token=f07bf611-ff15-4927-8298-ed686322d6c6&_gl=1*1j0qjgr*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxOTM3Ni4wLjAuMA..',
    'Tous les tutos'
  );


INSERT INTO
  `tutorials` (formation_id, level, quizz_id, name)
VALUES
  (2, 1, 1, 'Arrêter/démarrer le téléphone'),
  (2, 1, 2, 'Utiliser un QR code'),
  (2, 1, 3, 'Manipuler un écran tactile'),
  (2, 1, 4, 'Téléphoner'),
  (2, 1, 5, 'Différence: SMS, mail, message'),
  (2, 1, 6, 'Envoyer et recevoir un SMS'),
  (2, 1, 7, 'Gestion des contacts'),
  (2, 1, 8, 'Lexicologie Android'),
  (6, 1, 1, 'Faire une photo ou une vidéo'),
  (6, 1, 2, 'Partager une photo ou une vidéo'),
  (6, 1, 3, 'Écouter de la musique'),
  (6, 1, 4, 'Regarder des vidéos'),
  (6, 1, 5, 'Jouer'),
  (6, 1, 6, 'Facebook'),
  (6, 1, 7, 'Instagram'),
  (6, 1, 8, 'Tiktok');
ALTER TABLE
  usersPins
ADD
  CONSTRAINT fk_usersPins_users FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);

ALTER TABLE
  usersTutorials
ADD
  CONSTRAINT fk_usersTutorials_steps FOREIGN KEY (step_id) REFERENCES steps(id);

ALTER TABLE
  tutorialsTags
ADD
  CONSTRAINT fk_tutorialsTags_tags FOREIGN KEY (tag_id) REFERENCES tags(id);

ALTER TABLE
  tutorialsTags
ADD
  CONSTRAINT fk_tutorialsTags_tutorials FOREIGN KEY (tutorial_id) REFERENCES tutorials(id);

ALTER TABLE
  tutorials
ADD
  CONSTRAINT fk_tutorials_formations FOREIGN KEY (formation_id) REFERENCES formations(id);

ALTER TABLE `lignebleue`.`tutorialstags` DROP FOREIGN KEY `fk_tutorialsTags_tags`;
ALTER TABLE `lignebleue`.`tutorialstags` DROP FOREIGN KEY `fk_tutorialsTags_tutorials`;
ALTER TABLE `lignebleue`.`tutorialstags` ADD CONSTRAINT `fk_tutorialsTags_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE;
-- ALTER TABLE
--   tutorials
-- ADD
--   CONSTRAINT fk_tutorials_quizz FOREIGN KEY (quizz_id) REFERENCES quizz(id);

--   ALTER TABLE
--   formations
-- ADD
--   CONSTRAINT fk_formations_levelFormation FOREIGN KEY (levelFormation_id) REFERENCES levelFormations(id);

--                  firebase storage

INSERT INTO usersTutorials ( tutorial_id )
VALUES 
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(6),
(6),
(6),
(6),
(6),
(6),
(6);

INSERT INTO steps (stepOne, stepTwo, stepThree)
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

