const mysql = require("mysql2");

class Role {
   constructor(position) {
    this.position = position;
  }

  async viewAllRoles() {
    const [rows] = await this.position.execute("SELECT * FROM role");
    return rows;
  }

  async addRole(title, salary, department_id) {
    await this.position.execute("INSERT INTO role SET ?", {
      title: title,
      salary: salary,
      department_id: department_id,
    });
  }
}

module.exports = Role;