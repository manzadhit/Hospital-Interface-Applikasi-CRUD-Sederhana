const fs = require("fs");
const path = require("path")



// class Employee {
//   constructor(username, password, position) {
//     this.username = username;
//     this.password = password;
//     this.position = position;
//     this.login = false;
//   }

//   static findAll(cb) {
//     fs.readFile("../data/employee.json", "utf8", (err, data) => {
//       if (err) {
//         cb(err);
//       } else {
//         cb(err, JSON.parse(data));
//       }
//     });
//   }

//   static register(name, password, role, cb) {
//     this.findAll((err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         let obj = new Employee(name, password, role);
//         let newData = data;
//         newData.push(obj);

//         let objArr = [];
//         objArr.push(obj);
//         objArr.push(newData.length);

//         fs.writeFile("../data/employee.json", JSON.stringify(newData), (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             cb(err, objArr);
//           }
//         });
//       }
//     });
//   }

// }

class Employee {
  constructor(username, password, position) {
    this.username = username;
    this.password = password;
    this.position = position;
    this.login = false;
  }

  static findAllData(cb) {
    fs.readFile(
      path.resolve(__dirname, "../dataset/employee.json"),
      "utf8",
      (err, data) => {
        if (err) {
          cb(err);
        } else {
          cb(err, JSON.parse(data));
        }
      }
    );
  }

  static register(username, password, position, cb) {
    this.findAllData((err, data) => {
      if (err) {
        console.log(err);
      } else {
        let obj = new Employee(username, password, position);
        let newData = data;
        newData.push(obj);

        let objArr = [];
        objArr.push(obj);
        objArr.push(newData.length);

        fs.writeFile(
          path.resolve(__dirname, "../dataset/employee.json"),
          JSON.stringify(newData),
          (err) => {
            if (err) {
              console.log(err);
            } else {
              cb(err, objArr);
            }
          }
        );
      }
    });
  }

  static login(username, password, cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        let newData = data;
        newData.forEach((user) => {
          if (user.username == username && user.password == password) {
            user.login = true;

            fs.writeFile(
              path.resolve(__dirname, "../dataset/employee.json"),
              JSON.stringify(newData),
              (err) => {
                if (err) {
                  cb(err);
                } else {
                  cb(err, user);
                }
              }
            );
          }
        });
      }
    });
  }
  static logout(cb) {
    this.findAllData((err, data) => {
      if (err) {
        cb(err);
      } else {
        let newData = data;
        newData.forEach((user) => {
          if (user.login == true) {
            user.login = false;

            fs.writeFile(
              path.resolve(__dirname, "../dataset/employee.json"),
              JSON.stringify(newData),
              (err) => {
                if (err) {
                  cb(err);
                } else {
                  cb(err, user);
                }
              }
            );
          }
        });
      }
    });
  }
}

module.exports = Employee;
