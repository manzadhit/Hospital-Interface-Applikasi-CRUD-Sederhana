class PatientView {
  static errorView(err) {
    console.log(err);
  }

  static addPatientView(data) {
    console.log(
      `save data success {"id" : ${data[0].id}, "namaPasien": ${data[0].namaPasien}, "daftarPenyakit" : [${data[0].daftarPenyakit}]}. Total Patient : ${data[1]}`
    );
  }

}

module.exports = PatientView;
