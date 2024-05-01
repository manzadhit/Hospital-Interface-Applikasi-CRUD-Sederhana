const command = process.argv[2];
const argument = process.argv.slice(3);
const EmployeeController = require("./controller/employeeController");
const PatientController = require("./controller/patientController")

/*
NOTE :

1. HANYA DOKTER SAJA YANG BOLEH PAKAI COMMAND CRUD PATIENT.
2. TIDAK BISA LOGIN BERSAMAAN.
3. HANYA ADMIN SAJA YANG BISA MELIHAT SEMUA DATA EMPLOYEE.

*/

switch (command) {
  case "register":
    EmployeeController.register(argument[0], argument[1], argument[2]);
    break;
  case "login":
    EmployeeController.login(argument[0], argument[1]);
    break;
  case "addPatient":
    PatientController.addPatient(argument[0], argument[1], argument.slice(2));
    break;
  case "updatePatient":
    PatientController.updatePatient(argument[0], argument[1], argument.slice(2));
    break;
  case "deletePatient":
    PatientController.deletePatient(argument[0]);
    break;
  case "logout" :
    EmployeeController.logout();
    break;
  case "show":
    if(argument[0] == "employee") {
      EmployeeController.showEmployee()
    } else {
      PatientController.showPatient()
    }
    break;

  case "findPatientBy: <name/id>":
    PatientController.findPatientBy(argument[0]);
    break;
  default:
    EmployeeController.help()
    break;
}
