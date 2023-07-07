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
(1, 'https://firebasestorage.googleapis.com/v0/b/fir-c9cc8.appspot.com/o/icone%2Fgridicons_phone.svg?alt=media&token=b85fa5ee-a833-4ce1-8b28-2a1c8aa14f99&_gl=1*1mp7uoc*_ga*MTc3ODE1NDMzNy4xNjg2MTIxOTA3*_ga_CW55HF8NVT*MTY4NjIxNjM5Mi43LjEuMTY4NjIxODc1OS4wLjAuMA..', 'Utiliser ligne bleue', 0, 0),
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
-- Structure de la table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Structure de la table `tutorialstags`
--

CREATE TABLE `tutorialstags` (
  `tutorial_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(3, 2, 1, 'eleaThree@gmail.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

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
  ADD CONSTRAINT `fk_usersTutorials_steps_delete` FOREIGN KEY (`step_id`) REFERENCES `steps` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_tutorials` FOREIGN KEY (`tutorial_id`) REFERENCES `tutorials` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usersTutorials_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

--
-- Contraintes pour la table `userstutorials`
--
