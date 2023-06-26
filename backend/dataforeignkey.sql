
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

