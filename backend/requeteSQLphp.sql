SELECT users.*, steps.*, tutorials.name FROM usersTutorials JOIN users ON userstutorials.user_id = users.id JOIN steps ON steps.step_user_id = userstutorials.user_id JOIN tutorials ON userstutorials.tutorial_id = tutorials.id;


SELECT users.email AS userMail, users.id AS userID, steps.stepOne, steps.id AS stepID, tutorials.name AS tutoName, tutorials.id AS tutoID
FROM usersTutorials
JOIN users ON userstutorials.user_id = users.id
JOIN steps ON steps.step_user_id = userstutorials.user_id
JOIN tutorials ON userstutorials.tutorial_id = tutorials.id;


SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id;

SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, tutorials.name, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID, steps.stepOne, steps.stepTwo, steps.stepThree FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id;

SELECT users.id AS usersID, users.email AS mail, userstutorials.user_id AS TutoUserID, steps.id AS stepsID, tutorials.id AS tutoID, tutorials.name, userstutorials.tutorial_id As tutoTutoID, userstutorials.step_id AS tutoStepID, steps.stepOne, steps.stepTwo, steps.stepThree, formations.iconURL, formations.name FROM userstutorials JOIN users ON users.id = userstutorials.user_id JOIN steps ON steps.id = userstutorials.step_id JOIN tutorials ON tutorials.id = userstutorials.tutorial_id JOIN formations ON tutorials.formation_id = formations.id;



SELECT formations.iconURL, tutorials.name, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, users.email
FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN formations ON formations.id = tutorials.formation_id
WHERE users.id = 2
AND EXISTS (
  SELECT 1
  FROM tutorials
  JOIN userstutorials ON tutorials.id = userstutorials.tutorial_id
  WHERE userstutorials.user_id = 2
  AND tutorials.formation_id = formations.id
  AND steps.stepOne = 1
  AND steps.stepTwo = 1
  AND steps.stepThree = 1
);


SELECT formations.iconURL, tutorials.name, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, users.email
FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN formations ON formations.id = tutorials.formation_id
WHERE users.id = 2
AND (
  SELECT COUNT(*)
  FROM tutorials
  JOIN userstutorials ON tutorials.id = userstutorials.tutorial_id
  WHERE userstutorials.user_id = 2
  AND tutorials.formation_id = formations.id
  AND steps.stepOne = 1
  AND steps.stepTwo = 1
  AND steps.stepThree = 1
) = 8


SELECT formations.iconURL, tutorials.name, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, users.email
FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN formations ON formations.id = tutorials.formation_id
WHERE users.id = 2
GROUP BY tutorials.id
HAVING SUM(steps.stepOne = 1) = 8
  AND SUM(steps.stepTwo = 1) = 8
  AND SUM(steps.stepThree = 1) = 8;

SELECT users.id AS user_id, users.email, SUM(steps.stepOne) AS total_stepOne, SUM(steps.stepTwo) AS total_stepTwo, SUM(steps.stepThree) AS total_stepThree
FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN steps ON steps.id = userstutorials.step_id
WHERE users.id = 2
GROUP BY users.id, users.email;

SELECT formations.iconURL, tutorials.name, steps.id AS stepID, steps.stepOne, steps.stepTwo, steps.stepThree, users.email
FROM userstutorials
JOIN users ON users.id = userstutorials.user_id
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN formations ON formations.id = tutorials.formation_id
WHERE users.id = 2
GROUP BY tutorials.id, steps.id
HAVING SUM(steps.stepOne = 1) = COUNT(*)
  AND SUM(steps.stepTwo = 1) = COUNT(*)
  AND SUM(steps.stepThree = 1) = COUNT(*);

  SELECT tutorials.formation_id, 
       SUM(steps.stepOne) AS total_stepOne, 
       SUM(steps.stepTwo) AS total_stepTwo, 
       SUM(steps.stepThree) AS total_stepThree,
       (SUM(steps.stepOne) + SUM(steps.stepTwo) + SUM(steps.stepThree)) AS total_steps
FROM userstutorials
JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
JOIN steps ON steps.id = userstutorials.step_id
WHERE userstutorials.user_id = 2
GROUP BY tutorials.formation_id;
