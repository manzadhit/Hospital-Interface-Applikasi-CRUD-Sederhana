const Employee = require("../model/employee");
const EmployeeView = require("../view/employeeView.js");

class EmployeeController {
  static register(name, password, position) {
    Employee.register(name, password, position, (err, objArr) => {
      if (err) {
        EmployeeView.errorView(err);
      } else {
        EmployeeView.registerView(objArr);
      }
    });
  }

  static login(name, password) {
    Employee.login(name, password, (err, user) => {
      if (err) {
        EmployeeView.errorView(err);
      } else {
        EmployeeView.loginView(user);
      }
    });
  }

  static logout() {
    Employee.logout((err, user) => {
      if (err) {
        EmployeeView.errorView(err);
      } else {
        EmployeeView.logoutView(user);
      }
    });
  }

  static showEmployee() {
    Employee.showEmployee((err, data) => {
      if (err) {
        EmployeeView.errorView(err);
      } else {
        EmployeeView.showEmployeeView(data);
      }
    });
  }

  static help() {
    EmployeeView.help();
  }
}

module.exports = EmployeeController;
