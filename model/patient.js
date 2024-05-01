const fs = require("fs");
const path = require("path");
class Patient {
  constructor(id, namaPasien, daftarPenyakit) {
    this.id = id;
    this.namaPasien = namaPasien;
    this.daftarPenyakit = daftarPenyakit;
  }

  static findAllData(cb) {
    fs.readFile(
      path.resolve(__dirname, "../dataset/patient.json"),
      "utf8",
      (err, data) => {
        if (err) {
          cb(err);
        } else {
          cb(null, JSON.parse(data));
        }
      }
    );
  }

  static saveData(data, cb) {
    fs.writeFile(
      path.resolve(__dirname, "../dataset/patient.json"),
      JSON.stringify(data),
      (err) => {
        if (err) {
          cb(err);
        } else {
          cb(null);
        }
      }
    );
  }

  static isDokterLoggedIn(cb) {
    fs.readFile(
      path.resolve(__dirname, "../dataset/employee.json"),
      "utf8",
      (err, data) => {
        if (err) {
          cb(err);
        } else {
          const employee = JSON.parse(data)
          const userLogin = employee.find((user) => user.login == true);
          if (!userLogin) {
            cb("no user is logged in");
          } else if (userLogin.position !== "dokter") {
            cb(
              "Access denied: You do not have the doctor role to perform this operation"
            );
          } else {
            cb(null);
          }
        }
      }
    );
  }

  static addPatient(id, namaPasien, daftarPenyakit, cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        this.isDokterLoggedIn((err) => {
          if (err) {
            cb(err);
          } else {
            const currentData = data;
            const newPatient = new Patient(id, namaPasien, daftarPenyakit);
            currentData.push(newPatient);

            const obj = [];
            obj.push(newPatient);
            obj.push(currentData.length);

            this.saveData(currentData, (err) => {
              if (err) {
                cb(err);
              } else {
                cb(null, obj);
              }
            });
          }
        });
      }
    });
  }

  static updatePatient(id, namaPasien, daftarPenyakit, cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        this.isDokterLoggedIn((err) => {
          if (err) {
            cb(err);
          } else {
            let patient = data.find((patient) => patient.id === id);

            if (!patient) {
              cb("Patient not found");
            } else {
              patient.id = id;
              patient.namaPasien = namaPasien;
              patient.daftarPenyakit = daftarPenyakit;

              this.saveData(data, (err) => {
                if (err) {
                  cb(err);
                } else {
                  cb(null, patient);
                }
              });
            }
          }
        });
      }
    });
  }

  static deletePatient(id, cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        this.isDokterLoggedIn((err) => {
          if (err) {
            cb(err);
          } else {
            const patientIndex = data.findIndex((patient) => patient.id === id);

            if (patientIndex == -1) {
              cb("Patient not found");
            } else {
              data.splice(patientIndex, 1);
              this.saveData(data, (err) => {
                if (err) {
                  cb(err);
                } else {
                  cb(null, data);
                }
              });
            }
          }
        });
      }
    });
  }

  static showPatient(cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, data);
      }
    });
  }

  static findPatientBy(namaOrId, cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        const patient = data.filter(
          (patient) =>
            patient.namaPasien === namaOrId || patient.id === namaOrId
        );

        if (!patient) {
          cb("Patient not found");
        } else {
          cb(null, patient);
        }
      }
    });
  }
}

module.exports = Patient;
