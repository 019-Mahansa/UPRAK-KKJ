# UPRAK KKJ

Uprak KKJ kali ini mengharuskan kami untuk menggunakan react + hooks untuk membuat sebuah media sosial sederhana dengan menggunakan API dari https://jsonplaceholder.typicode.com/users sebagai data utama

## Instalasi

Clone repository ini dan taruh di folder projek anda

```git
https://github.com/019-Mahansa/UPRAK-KKJ.git
```

Kemudian install node module dengan menggunakan NPM atau PNPM

PNPM

```bash
pnpm install
```

NPM

```bash
npm install
```

Setelah itu run di terminal dengan menggunakan run dev

NPM / PNPM

```bash
npm run dev
atau
pnpm run dev
```

# Alur kode

## hierarki kode
```bash
📦src
 ┣ 📂assets
 ┃ ┣ 📂readme-image
 ┃ ┣ 📜hero.png
 ┃ ┣ 📜icon.jpeg
 ┃ ┣ 📜icon.png
 ┃ ┣ 📜react.svg
 ┃ ┗ 📜vite.svg
 ┣ 📂components
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📜UserDetail.css
 ┃ ┃ ┣ 📜card.css
 ┃ ┃ ┣ 📜footer.css
 ┃ ┃ ┗ 📜navbar.module.css
 ┃ ┣ 📜UserDetail.jsx
 ┃ ┣ 📜card.jsx
 ┃ ┣ 📜footer.jsx
 ┃ ┗ 📜navabar.jsx
 ┣ 📂contexts
 ┃ ┗ 📜inputContext.jsx
 ┣ 📜App.jsx
 ┣ 📜app.css
 ┗ 📜main.jsx
```

**PENJELASAN**

Assets: Berisi semua gambar yang di perlukan dalam website

Components: Berisi semua komponent yang di perlukan dalam page seperti Navbar,footer dan user details

Contexts: Berisi sebagai wadah utama pembuatan context dengan useContext

App.jsx: File utama yang berisi Sistem dan penyusunan komponen

**CARA KERJA**

1. Kita memanggil data dari API menggunakan fetch() dengan menggunakan useEffect agar setiap kali web di refresh maka kode akan jalan terus. Dan menyimpannya di dalam useState

<img src="./src/assets/readme-image/StateUserandother.png" style="width=100px">
<img src="./src/assets/readme-image/FetchIMG.png" style="width=100px">

Penjelasan:

Kita menggunakan async function agar sistem yang lain selain pengambilan API dapat berjalan walaupun API belum selesai di panggil, kemudian di dalamnya kita menambahkan try catch yang berfungsi untuk Mencoba dulu memanggil data dan ketika terdeteksi erorr maka akan di lanjutkan oleh catch dan ketika tidak maka catch nya akan di abaikan dan masuk ke finally dengan setloading(false) yang artinya pemanggilan telah selesai

2. Setelah API berhasil terpanggil, sekarang kita membuat tempat(card) untuk kita tampilkan ke UI

<img src="./src/assets/readme-image/Card.png" style="width=100px">

3. Kemudian kita isi card tersebut dengan menggunakan function map() untuk mengeluarkan semua isi data dari array. Lalu seperti yang terlihat di bawah gambar terdapat function setSelectedUser(item) yang dimana ini akan kita gunakan nanti untuk mengvalidasi input teks

<img src="./src/assets/readme-image/MemasukanDatakeCard.png">

4.Sistem Pencarian (Search & Filter) dengan Context API
Kita membuat fitur pencarian dengan memanfaatkan filter() pada array user berdasarkan state inputSearch. Agar komponen Navbar dan App bisa saling berbagi data input tanpa perlu prop drilling yang rumit, kita menggunakan Context API (searchcontex).

<img src="./src/assets/readme-image/filerinput.png" style="width:100px">
<img src="./src/assets/readme-image/contex.png" style="width:100px">