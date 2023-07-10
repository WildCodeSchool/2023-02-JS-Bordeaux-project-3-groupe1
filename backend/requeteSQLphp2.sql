SELECT
  formations.iconURL,
  tutorials.name,
  steps.id AS stepID,
  steps.stepOne,
  steps.stepTwo,
  steps.stepThree,
  users.email,
  totals.total_stepOne,
  totals.total_stepTwo,
  totals.total_stepThree,
  totals.total_steps
FROM (
  SELECT
    tutorials.formation_id,
    SUM(steps.stepOne) AS total_stepOne,
    SUM(steps.stepTwo) AS total_stepTwo,
    SUM(steps.stepThree) AS total_stepThree,
    (SUM(steps.stepOne) + SUM(steps.stepTwo) + SUM(steps.stepThree)) AS total_steps
  FROM userstutorials
  LEFT JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
  LEFT JOIN steps ON steps.id = userstutorials.step_id
  WHERE userstutorials.user_id = 2
  GROUP BY tutorials.formation_id
) AS totals
LEFT JOIN userstutorials ON userstutorials.tutorial_id = totals.formation_id
LEFT JOIN users ON users.id = userstutorials.user_id
LEFT JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
LEFT JOIN steps ON steps.id = userstutorials.step_id
LEFT JOIN formations ON formations.id = tutorials.formation_id
WHERE users.id = 2;

SELECT
  formations.iconURL,
  tutorials.name,
  steps.id AS stepID,
  steps.stepOne,
  steps.stepTwo,
  steps.stepThree,
  users.email,
  totals.total_stepOne,
  totals.total_stepTwo,
  totals.total_stepThree,
  totals.total_steps
FROM tutorials
JOIN userstutorials ON tutorials.id = userstutorials.tutorial_id
JOIN users ON users.id = userstutorials.user_id
JOIN steps ON steps.id = userstutorials.step_id
JOIN formations ON formations.id = tutorials.formation_id
LEFT JOIN (
  SELECT
    tutorials.formation_id,
    SUM(steps.stepOne) AS total_stepOne,
    SUM(steps.stepTwo) AS total_stepTwo,
    SUM(steps.stepThree) AS total_stepThree,
    (SUM(steps.stepOne) + SUM(steps.stepTwo) + SUM(steps.stepThree)) AS total_steps
  FROM userstutorials
  JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
  JOIN steps ON steps.id = userstutorials.step_id
  WHERE userstutorials.user_id = 2
  GROUP BY tutorials.formation_id
) AS totals ON tutorials.formation_id = totals.formation_id
WHERE users.id = 2
GROUP BY
  formations.iconURL,
  tutorials.name,
  steps.id,
  steps.stepOne,
  steps.stepTwo,
  steps.stepThree,
  users.email,
  totals.total_stepOne,
  totals.total_stepTwo,
  totals.total_stepThree,
  totals.total_steps;

  SELECT total_steps_by_user_true.total_stepsTotal,  total_steps_per_formation.NB_tuto, formations.iconURL, formations.id AS formationID, tutorials.name, tutorials.formation_id AS tutoFormationID, tutorials.id AS tutoId, steps.id AS stepID, COALESCE(stepOne,0) AS stepOne, COALESCE(stepTwo,0) AS stepTwo, COALESCE(stepThree,0) AS stepThree, user_tuto.email
      FROM tutorials
      LEFT JOIN (SELECT * FROM userstutorials LEFT JOIN users ON users.id = userstutorials.user_id WHERE userstutorials.user_id = 2) AS user_tuto  ON tutorials.id = user_tuto.tutorial_id
      LEFT JOIN steps ON steps.id = user_tuto.step_id
      LEFT JOIN formations ON formations.id = tutorials.formation_id  AND (
      SELECT COUNT(*) FROM tutorials
JOIN userstutorials AS user_tuto ON tutorials.id = user_tuto.tutorial_id
      WHERE  user_tuto.user_id = 2  )
      LEFT JOIN (SELECT formation_id, COUNT(tutorials.id)*3 AS NB_tuto FROM formations
JOIN tutorials ON tutorials.formation_id = formations.id
GROUP BY formation_id) AS total_steps_per_formation
ON total_steps_per_formation.formation_id = formations.id
LEFT JOIN (SELECT
    tutorials.formation_id,
    user_id,
	SUM((steps.stepOne) + (steps.stepTwo) + (steps.stepThree)) AS total_stepsTotal
  FROM userstutorials
  LEFT JOIN tutorials ON tutorials.id = userstutorials.tutorial_id
  LEFT JOIN steps ON steps.id = userstutorials.step_id
  GROUP BY tutorials.formation_id, user_id) AS total_steps_by_user_true ON total_steps_by_user_true.user_id = user_tuto.user_id AND total_steps_by_user_true.formation_id = formations.id;