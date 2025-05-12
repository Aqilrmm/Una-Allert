# Una-Alert

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Sistem notifikasi alert dan toast yang ringan, modern, dan dapat disesuaikan untuk aplikasi web. Una-Alert menyediakan alert dan notifikasi toast yang indah dan animasi yang dapat dengan mudah diintegrasikan ke dalam proyek apa pun.

![Pratinjau Una-Alert](https://via.placeholder.com/800x400?text=Pratinjau+Una-Alert)

## Fitur

- 🎨 **Desain Cantik** - Desain modern dan bersih dengan animasi halus
- 🚀 **Ringan** - Tanpa dependensi, di bawah 10KB setelah diminifikasi
- 🔌 **Mudah Digunakan** - API sederhana untuk menampilkan alert dan notifikasi toast
- 🔄 **Konfirmasi** - Dukungan bawaan untuk dialog konfirmasi
- 📱 **Responsif** - Bekerja di semua perangkat dan ukuran layar
- 🌈 **Dapat Disesuaikan** - Mudah disesuaikan dengan variabel CSS
- 🖼️ **Ikon SVG** - Ikon SVG bawaan untuk berbagai jenis alert

## Instalasi

### Opsi 1: Unduh File

Unduh file `una-alert.js` dan `una-alert.css` dari repositori ini dan sertakan dalam proyek Anda.

```html
<link rel="stylesheet" href="path/to/una-alert.css">
<script src="path/to/una-alert.js"></script>
```

### Opsi 2: CDN

Sertakan langsung dari CDN (ganti dengan CDN pilihan Anda jika tersedia):

```html
<!-- Segera hadir -->
```

### Opsi 3: NPM

```
npm install una-alert
```

## Mulai Cepat

Inisialisasi Una-Alert saat DOM Anda siap:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    unaAlert.init();
});
```

## Penggunaan Dasar

### Tampilkan Alert Sederhana

```javascript
unaAlert.show('success', 'Berhasil!', 'File Anda telah berhasil diunggah.');
```

### Tampilkan Notifikasi Toast

```javascript
unaAlert.toast('success', 'Berhasil!', 'Tindakan Anda telah berhasil diselesaikan');
```

### Tampilkan Dialog Konfirmasi

```javascript
unaAlert.confirm(
    'Apakah Anda yakin?', 
    'Tindakan ini tidak dapat dibatalkan. Apakah Anda ingin melanjutkan?', 
    function() {
        // Fungsi ini akan dipanggil jika pengguna mengklik "Konfirmasi"
        unaAlert.toast('success', 'Dikonfirmasi!', 'Tindakan Anda telah diproses');
    }
);
```

## Referensi API

### Tipe Alert

Una-Alert mendukung 5 tipe alert:

- `success` - Untuk operasi yang berhasil
- `info` - Untuk pesan informasi
- `warning` - Untuk pesan peringatan
- `error` - Untuk pesan kesalahan
- `question` - Untuk dialog konfirmasi (otomatis digunakan oleh metode `confirm()`)

### Metode

#### `unaAlert.init()`

Menginisialisasi Una-Alert dengan membuat elemen DOM yang diperlukan. Metode ini dipanggil secara otomatis saat menggunakan metode lain, tetapi disarankan untuk memanggilnya secara eksplisit saat DOM Anda siap.

#### `unaAlert.show(type, title, message, options)`

Menampilkan dialog alert.

- `type` (string): Tipe alert ('success', 'info', 'warning', 'error')
- `title` (string): Judul alert
- `message` (string): Pesan alert
- `options` (object, opsional): Opsi tambahan (saat ini tidak digunakan)

#### `unaAlert.confirm(title, message, callback, options)`

Menampilkan dialog konfirmasi.

- `title` (string): Judul konfirmasi
- `message` (string): Pesan konfirmasi
- `callback` (function): Fungsi yang akan dipanggil saat pengguna mengklik tombol konfirmasi
- `options` (object, opsional): Opsi tambahan
    - `confirmText` (string): Teks khusus untuk tombol konfirmasi
    - `cancelText` (string): Teks khusus untuk tombol batal
    - `verticalButtons` (boolean): Apakah tombol harus ditumpuk secara vertikal

#### `unaAlert.toast(type, title, message, duration)`

Menampilkan notifikasi toast.

- `type` (string): Tipe toast ('success', 'info', 'warning', 'error')
- `title` (string): Judul toast
- `message` (string): Pesan toast
- `duration` (number, opsional): Durasi dalam milidetik sebelum toast otomatis tertutup (default: 4000)

#### `unaAlert.close()`

Menutup dialog alert yang sedang terbuka.

## Kustomisasi

Una-Alert dapat dengan mudah disesuaikan dengan menimpa variabel atau kelas CSS. Lihat [Panduan Kustomisasi](CUSTOMIZATION.md) untuk detail lebih lanjut.

## Dukungan Browser

Una-Alert bekerja di semua browser modern (Chrome, Firefox, Safari, Edge).

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.

## Kontribusi

Kontribusi dipersilakan! Jangan ragu untuk membuka masalah atau mengirimkan permintaan tarik.

## Ucapan Terima Kasih

- Ikon SVG berdasarkan [Heroicons](https://heroicons.com/)