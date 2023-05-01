const mysql = require("mysql2");

class Department {
  constructor(dpt) {
    this.dpt = dpt;
  }

  async viewAllDepartments() {
    const [rows] = await this.dpt.execute("SELECT * FROM department");
    return rows;
  }

  async addDepartment(name) {
    await this.dpt.execute("INSERT INTO department (name) VALUES (?)", [name]);
  };
  }


module.exports = Department;