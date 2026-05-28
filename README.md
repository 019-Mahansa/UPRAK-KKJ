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

1.Kita memanggil data dari API menggunakan fetch() dengan menggunakan useEffect agar setiap kali web di refresh maka kode akan jalan terus

<img src="./src/assets/readme-image/FetchIMG.png" style="width=200px">

