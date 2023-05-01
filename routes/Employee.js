const mysql = require("mysql2");

class Employee {
  constructor(member) {
    this.member = member;
  }

  async viewAllEmployees() {
    const [rows] = await this.member.execute(`
      SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
      ORDER BY e.id;
    `);
    return rows;
  }
  
  async addEmployee(firstName, lastName, roleId, managerId) {
    await this.member.execute(`
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?, ?, ?, ?);
    `, [firstName, lastName, roleId, managerId]);
  }
}

module.exports = Employee;