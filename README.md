# Hospital Interface Application (CRUD)

## Gambaran Umum Proyek

Hospital Interface Application (CRUD) adalah sebuah aplikasi antarmuka sederhana untuk mengelola data pasien dan karyawan di rumah sakit. Aplikasi ini memungkinkan pengguna (dokter dan admin) untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data pasien, serta mengelola data karyawan (hanya untuk admin).

Latar belakang dan motivasi di balik pengembangan proyek ini adalah untuk menyediakan solusi yang efisien dan terorganisir dalam mengelola data pasien dan karyawan di lingkungan rumah sakit. Aplikasi ini dirancang untuk membantu dokter dan admin dalam menjalankan tugas mereka dengan lebih mudah dan efektif.

Dalam aplikasi ini, terdapat dua peran utama:

1. **Dokter**
   - Dokter memiliki hak akses untuk melakukan operasi CRUD pada data pasien, seperti menambahkan, memperbarui, menghapus, dan mencari data pasien.
   - Namun, dokter tidak memiliki akses untuk mengelola data karyawan.

2. **Admin**
   - Admin memiliki hak akses yang lebih luas dibandingkan dokter.
   - Admin dapat melihat daftar pasien dan mencari data pasien berdasarkan nama atau ID, tetapi tidak dapat melakukan operasi CRUD pada data pasien.
   - Admin memiliki hak akses untuk mengelola data karyawan, seperti mendaftarkan karyawan baru (dokter atau admin lainnya) dan melihat daftar karyawan yang terdaftar.

## Persyaratan Sistem

Proyek ini dikembangkan menggunakan Node.js, sehingga Anda memerlukan Node.js yang terpasang di lingkungan Anda untuk dapat menjalankannya. Versi Node.js yang disarankan adalah versi terbaru yang stabil.

## Instalasi dan Penggunaan

Untuk menginstal dan menjalankan proyek ini, ikuti langkah-langkah berikut:
  1.  Unduh atau clone repositori proyek ini ke direktori lokal Anda.
  ```bash
  git clone https://github.com/manzadhit/Hospital-Interface-Applikasi-CRUD-Sederhana.git
  ```
  2.  Buka terminal atau command prompt dan navigasikan ke direktori proyek.
  3.  Jalankan perintah node index.js untuk melihat daftar perintah yang tersedia.
  ```bash
  node index.js
  ```

## Penggunaan

Untuk menggunakan aplikasi ini, jalankan perintah `node index.js` di terminal atau command prompt untuk melihat daftar perintah yang tersedia. Beberapa perintah utama yang tersedia adalah:

- `node index.js register <username> <password> <jabatan>`: Mendaftarkan karyawan baru (hanya admin yang dapat mengakses perintah ini).
- `node index.js login <username> <password>`: Login sebagai dokter atau admin.
- `node index.js addPatient <namaPasien> <penyakit1> <penyakit2> ...`: Menambahkan pasien baru (hanya dokter yang dapat mengakses perintah ini).
- `node index.js updatePatient <namaPasien> <penyakit1> <penyakit2> ...`: Memperbarui data pasien (hanya dokter yang dapat mengakses perintah ini).
- `node index.js deletePatient <id>`: Menghapus data pasien (hanya dokter yang dapat mengakses perintah ini).
- `node index.js logout`: Keluar dari aplikasi.
- `node index.js show <employee/patient>`: Menampilkan daftar karyawan (hanya admin yang dapat mengakses perintah ini untuk karyawan) atau daftar pasien.
- `node index.js findPatientBy: <name/id> <namePatient/idPatient>`: Mencari data pasien berdasarkan nama atau ID pasien.

Untuk contoh penggunaan atau skenario lebih lanjut, jalankan perintah `node index.js` dan ikuti petunjuk yang diberikan.

## Struktur Proyek

Proyek ini menggunakan konsep MVC (Model-View-Controller) dan memiliki struktur direktori sebagai berikut:

- `models/`: Berisi file-file yang mendefinisikan skema data untuk pasien dan karyawan.
- `views/`: Berisi file-file tampilan (jika ada) untuk menampilkan data atau antarmuka pengguna.
- `controllers/`: Berisi file-file yang menangani logika bisnis dan operasi pada data pasien dan karyawan.
- `dataset/`: Berisi file-file yang menyimpan data pasien dan karyawan (sebagai pengganti basis data sesungguhnya).
- `index.js`: File utama yang menjalankan aplikasi dan menangani perintah-perintah dari pengguna.
