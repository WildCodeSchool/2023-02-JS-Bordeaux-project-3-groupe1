const AbstractManager = require("./AbstractManager");

class TutorialManager extends AbstractManager {
  constructor() {
    super({ table: "formations" });
  }

  // findFormationAndTutorial() {
  //   return this.database.query(`SELECT
  //   formations.iconDescription,
  //     GROUP_CONCAT(tutorials.name) AS BANANA
  // FROM formations
  // left outer join tutorials on formations.id = tutorials.formation_id
  // WHERE trim(lower(formations.id)) = 2
  // GROUP BY
  // formations.iconDescription;

  //     `);
  // }
  findFormationAndTutorial(id) {
    return this.database.query(
      `SELECT tutorials.name
      FROM tutorials
      WHERE tutorials.formation_id = ?`,
      [id]
    );
  }

  insert(tutorial) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      tutorial.title,
    ]);
  }

  update(tutorial) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [tutorial.title, tutorial.id]
    );
  }
}

module.exports = TutorialManager;
