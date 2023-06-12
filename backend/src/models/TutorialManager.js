const AbstractManager = require("./AbstractManager");

class TutorialManager extends AbstractManager {
  constructor() {
    super({ table: "formations" });
  }

  findFormationAndTutorial() {
    return this.database.query(`SELECT * FROM  ${this.table} 
    JOIN tutorials ON tutorials.formation_id = ${this.table}.id`);
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
