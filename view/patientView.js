class PatientView {
  static errorView(err) {
    console.log(err);
  }

  static addPatientView(data) {
    console.log(
      `save data success {"id" : ${data[0].id}, "namaPasien": ${data[0].namaPasien}, "daftarPenyakit" : [${data[0].daftarPenyakit}]}. Total Patient : ${data[1]}`
    );
  }

  static updatePatientView(data) {
    console.log(
      `update data success {"id" : ${data.id}, "namaPasien": ${data.namaPasien}, "daftarPenyakit" : [${data.daftarPenyakit}]}`
    );
  }

  static deletePatientView(data) {
    console.log(`Data with id ${data.id} was successfully deleted`);
  }
}

module.exports = PatientView;
