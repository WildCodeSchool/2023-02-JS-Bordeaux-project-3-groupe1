const AbstractManager = require("./AbstractManager");

class TutorialManager extends AbstractManager {
  constructor() {
    super({ table: "formations" });
  }

  findFormationAndTutorial() {
    return this.database
      .query(`SELECT formations.*, GROUP_CONCAT(tutorials.name) AS tutorials_list
    FROM formations
    LEFT JOIN tutorials ON formations.id = tutorials.formation_id
    GROUP BY formations.id;`);
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
