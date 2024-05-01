const Patient = require("../model/patient");
const PatientView = require("../view/patientView");

class PatientController {
  static addPatient(id, namaPasien, daftarPenyakit) {
    Patient.addPatient(id, namaPasien, daftarPenyakit, (err, data) => {
      if (err) {
        PatientView.errorView(err);
      } else {
        PatientView.addPatientView(data);
      }
    });
  }

  static updatePatient(id, namaPasien, daftarPenyakit) {
    Patient.updatePatient(id, namaPasien, daftarPenyakit, (err, data) => {
      if(err) {
        PatientView.errorView(err);
      } else {
        PatientView.updatePatientView(data);
      }
    })
  }

  static deletePatient(id) {
    Patient.deletePatient(id, (err, data) => {
      if(err) {
        PatientView.errorView(err);
      } else {
        PatientView.deletePatientView(data);
      }
    })
  }

  static showPatient() {
    Patient.showPatient((err, data) => {
      if(err) {
        PatientView.errorView(err);
      } else {
        PatientView.showPatientView(data);
      }
    })
  }

  static findPatientBy(namaOrId) {
    Patient.findPatientBy(namaOrId, (err, data) => {
      if(err) {
        PatientView.errorView(err);
      } else {
        PatientView.findPatientView(data);
      }
    })
  }
}

module.exports = PatientController;