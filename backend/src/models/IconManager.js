const AbstractManager = require("./AbstractManager");

class IconManager extends AbstractManager {
  constructor() {
    super({ table: "icons" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(icon) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      icon.title,
    ]);
  }

  update(icon) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [icon.title, icon.id]
    );
  }
}

module.exports = IconManager;
