let Patient = require("../model/patient");
let Employee = require("../model/employee");
let HospitalView = require("../view/view");

class HospitalController {
  static register(name, password, role) {
    Employee.register(name, password, role, (err, objArr) => {
      if (err) {
        HospitalView.errorView(err);
      } else {
        HospitalView.registerView(objArr);
      }
    });
  }

  static login(name, password) {
    Employee.login(name, password, (err, user) => {
      if(err) {
        HospitalView.errorView(err);
      } else {
        HospitalView.loginView(user);
      }
    })
  }
  static logout() {
    Employee.logout((err, user) => {
      if(err) {
        HospitalView.errorView(err);
      } else {
        HospitalView.logoutView(user);
      }
    })
  }
  

}

module.exports = HospitalController;
