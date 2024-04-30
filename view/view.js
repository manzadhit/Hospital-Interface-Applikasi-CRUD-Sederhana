class HospitalView {
  static registerView(objArr) {
    console.log(
      `save data success {"username":${objArr[0].username},"password":${objArr[0].password},"role":${objArr[0].position}. Total employee : ${objArr[1]}`
    );
  }

  static loginView(user) {
    console.log(`${user.username} berhasil login`);
  }

  static logoutView(user) {
    console.log(`${user.username} berhasil logout`);
  }

  static errorView(err) {
    console.log(err);
  }
  // lanjutkan method lain
}

module.exports = HospitalView;
