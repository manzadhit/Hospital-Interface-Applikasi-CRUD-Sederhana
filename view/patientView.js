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

  static showPatientView(data) {
    data.forEach((patient, index) => {
      console.log(`Data pasien ke-${index + 1}`);
      console.log(`ID pasien : ${patient.id}`);
      console.log(`Nama pasien : ${patient.namaPasien}`);
      console.log(
        `Daftar Penyakit pasien : ${patient.daftarPenyakit.join(", ")}`
      );
      console.log("\n");
    });
  }

  static findPatientView(data) {
    console.log(`pasien ditemukan`);
    data.forEach((patient) => {
      console.log('ID pasien :', patient.id);
      console.log('Nama pasien :', patient.namaPasien);
      console.log('Daftar penyakit pasien :', patient.daftarPenyakit.join(", "));
      console.log("\n");
    })
  }
}

module.exports = PatientView;
