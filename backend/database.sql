CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');


CREATE TABLE `users` (
  `user_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
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
  `role_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `levelFormation` (
  `levelFormation_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `level` integer NOT NULL
);

CREATE TABLE `formations` (
  `formation_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `fl_status` boolean NOT NULL,
  `levelFormation_id` integer NOT NULL
);

CREATE TABLE `usersTutorials` (
  `user_id` integer NOT NULL,
  `tutorial_id` integer NOT NULL,
  `step_id` integer NOT NULL,
  `fl_status` boolean NOT NULL
);

CREATE TABLE `tutorials` (
  `tutorial_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `formation_id` integer NOT NULL,
  `quizz_id` integer NOT NULL,
  `level` integer NOT NULL,
  `name` varchar(255) NOT NULL,
  `urlVideo` varchar(255),
  `pictureTuto` varchar(255),
  `objectif` text NOT NULL,
  `explication` text NOT NULL,
  `pictureExplication` varchar(255) NOT NULL
);

CREATE TABLE `steps` (
  `step_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stepOne` boolean,
  `stepTwo` boolean,
  `stepThree` boolean
);

CREATE TABLE `pins` (
  `pin_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `quizz` (
  `quizz_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `firstProposal` varchar(500) NOT NULL,
  `secondProposal` varchar(500) NOT NULL,
  `thirdProposal` varchar(500) NOT NULL,
  `response` integer NOT NULL
);

CREATE TABLE `tutorialsTags` (
  `tutorial_id` integer NOT NULL,
  `tag_id` integer NOT NULL
);

CREATE TABLE `tags` (
  `tag_id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `usersPins` (
  `pin_id` integer NOT NULL,
  `user_id` integer NOT NULL
);

ALTER TABLE users
ADD CONSTRAINT fk_users_roles
FOREIGN KEY (role_id) 
REFERENCES roles(role_id);

ALTER TABLE formations
ADD CONSTRAINT fk_formations_levelFormation
FOREIGN KEY (levelFormation_id)
REFERENCES levelFormation(levelFormation_id);

ALTER TABLE usersPins
ADD CONSTRAINT fk_usersPins_pins
FOREIGN KEY (pin_id)
REFERENCES pins(pin_id);

ALTER TABLE usersPins
ADD CONSTRAINT fk_usersPins_users
FOREIGN KEY (user_id)
REFERENCES users(user_id);

ALTER TABLE usersTutorials
ADD CONSTRAINT fk_usersTutorials_tutorials
FOREIGN KEY (tutorial_id)
REFERENCES tutorials(tutorial_id);

ALTER TABLE usersTutorials
ADD CONSTRAINT fk_usersTutorials_steps
FOREIGN KEY (step_id)
REFERENCES steps(step_id);

ALTER TABLE tutorials
ADD CONSTRAINT fk_tutorials_quizz
FOREIGN KEY (quizz_id)
REFERENCES quizz(quizz_id);

ALTER TABLE tutorialsTags
ADD CONSTRAINT fk_tutorialsTags_tags
FOREIGN KEY (tag_id)
REFERENCES tags(tag_id);

ALTER TABLE tutorialsTags
ADD CONSTRAINT fk_tutorialsTags_tutorials
FOREIGN KEY (tutorial_id)
REFERENCES tutorials(tutorial_id);

ALTER TABLE tutorials
ADD CONSTRAINT fk_tutorials_formations
FOREIGN KEY (formation_id)
REFERENCES formations(formation_id);

ALTER TABLE usersTutorials
ADD CONSTRAINT fk_usersTutorials_users
FOREIGN KEY (user_id)
REFERENCES users(user_id);
