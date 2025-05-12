# Panduan Kustomisasi Una-Alert

Una-Alert dirancang agar mudah disesuaikan dengan sistem desain proyek Anda. Panduan ini menjelaskan cara menyesuaikan tampilan dan perilaku Una-Alert.

## Gaya Dasar

Cara termudah untuk menyesuaikan Una-Alert adalah dengan menimpa gaya default di CSS Anda. Berikut adalah beberapa contoh:

### Mengubah Warna

```css
/* Mengubah warna utama (digunakan untuk tombol konfirmasi dan ikon pertanyaan) */
.una-alert-btn-confirm {
    background-color: #3b82f6; /* Ubah ke warna utama Anda */
}
.una-alert-btn-confirm:hover {
    background-color: #2563eb; /* Warna lebih gelap untuk hover */
}
.una-alert-question .una-alert-icon {
    background-color: rgba(59, 130, 246, 0.1); /* Latar belakang terang */
    color: #3b82f6; /* Warna ikon */
}

/* Mengubah warna sukses */
.una-alert-success .una-alert-icon {
    background-color: rgba(34, 197, 94, 0.1); /* Latar belakang terang */
    color: #22c55e; /* Warna ikon */
}
.una-toast-success {
    border-left: 3px solid #22c55e;
}
.una-toast-success .una-toast-icon {
    color: #22c55e;
}

/* Perubahan serupa dapat dilakukan untuk jenis info, peringatan, dan kesalahan */
```

### Mengubah Font

```css
.una-alert, .una-toast {
    font-family: 'Your-Font', sans-serif;
}
```

### Mengubah Radius Border

```css
.una-alert {
    border-radius: 8px; /* Sudut yang kurang membulat */
}

.una-alert-btn {
    border-radius: 4px;
}

.una-toast {
    border-radius: 8px;
}
```

### Mengubah Animasi

```css
/* Mengubah animasi alert */
.una-alert {
    transform: translateY(50px);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.una-alert-overlay.show .una-alert {
    transform: translateY(0);
}

/* Mengubah animasi toast */
@keyframes custom-toast-in {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes custom-toast-out {
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(50px);
    }
}

.una-toast {
    animation: custom-toast-in 0.3s ease forwards;
}

.una-toast.hide {
    animation: custom-toast-out 0.3s ease forwards;
}
```

## Kustomisasi Tingkat Lanjut

### Ikon Kustom

Anda dapat mengganti ikon SVG default dengan memodifikasi objek `icons` di `una-alert.js`:

```javascript
// Membuat instance baru dengan ikon kustom
const myAlert = (function() {
    // Salin implementasi unaAlert
    const implementation = { ...unaAlert };
    
    // Timpa ikon
    const icons = {
        success: `<svg>...</svg>`,
        info: `<svg>...</svg>`,
        warning: `<svg>...</svg>`,
        error: `<svg>...</svg>`,
        question: `<svg>...</svg>`,
        close: `<svg>...</svg>`
    };
    
    // Timpa fungsi init untuk menggunakan ikon kustom
    const originalInit = implementation.init;
    implementation.init = function() {
        originalInit();
        // Terapkan ikon kustom
        // ...
    };
    
    return implementation;
})();
```

### Kustom Posisi Toast

Anda dapat mengubah posisi notifikasi toast dengan memodifikasi CSS:

```css
/* Memposisikan toast di sudut kanan atas */
.una-toast-container {
    bottom: auto;
    top: 24px;
    left: auto;
    right: 24px;
    transform: none;
}

/* Sesuaikan animasi agar sesuai dengan posisi baru */
@keyframes toast-in {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes toast-out {
    to {
        opacity: 0;
        transform: translateX(20px);
    }
}

.una-toast {
    transform: translateX(20px);
}
```

### Membuat Mode Gelap

```css
/* Gaya mode gelap */
.dark-mode .una-alert {
    background-color: #1f2937;
    color: #f3f4f6;
}

.dark-mode .una-alert-message {
    color: #d1d5db;
}

.dark-mode .una-alert-actions {
    border-top-color: #374151;
}

.dark-mode .una-alert-btn-cancel {
    background-color: #374151;
    color: #f3f4f6;
}

.dark-mode .una-alert-btn-cancel:hover {
    background-color: #4b5563;
}

.dark-mode .una-toast {
    background-color: #1f2937;
    color: #f3f4f6;
}

.dark-mode .una-toast-message {
    color: #d1d5db;
}
```

Untuk mengaktifkan mode gelap, tambahkan kelas `dark-mode` ke body atau elemen induk:

```javascript
// Contoh: Mengaktifkan/menonaktifkan mode gelap
document.body.classList.toggle('dark-mode');
```

## Contoh Tema

### Tema Material Design

```css
/* Tema terinspirasi Material Design */
.una-alert {
    border-radius: 4px;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);
}

.una-alert-btn {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.5px;
    border-radius: 4px;
}

.una-toast {
    border-radius: 4px;
    border-left: none;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12);
}
```

### Tema Soft UI

```css
/* Tema Soft UI / Neumorphism */
.una-alert {
    border-radius: 24px;
    background: #f0f0f3;
    box-shadow: 20px 20px 60px #ccccce, -20px -20px 60px #ffffff;
    border: none;
}

.una-alert-btn {
    border-radius: 12px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
    border: none;
}

.una-alert-btn-confirm {
    background: linear-gradient(145deg, #6e76ff, #5c64d9);
    color: white;
}

.una-toast {
    border-radius: 16px;
    background: #f0f0f3;
    box-shadow: 8px 8px 16px #ccccce, -8px -8px 16px #ffffff;
    border-left: none;
}
```

### Tema Glassmorphism

```css
/* Tema Glassmorphism */
.una-alert-overlay {
    backdrop-filter: blur(10px);
}

.una-alert {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.una-alert-actions {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.una-alert-btn {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.una-alert-btn-confirm {
    background: rgba(99, 102, 241, 0.8);
    color: white;
}

.una-toast {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 3px solid;
    border-radius: 16px;
}
```

## Desain Responsif

Una-Alert dirancang responsif secara default, tetapi Anda dapat menyesuaikan perilaku responsif:

```css
/* Sesuaikan ukuran alert pada perangkat seluler */
@media (max-width: 640px) {
    .una-alert {
        max-width: 100%;
        border-radius: 0;
        margin: 0;
    }
    
    .una-alert-overlay {
        padding: 0;
    }
    
    .una-alert-title {
        font-size: 20px;
    }
    
    .una-alert-message {
        font-size: 14px;
    }
    
    .una-toast-container {
        max-width: 100%;
        padding: 0 8px;
        bottom: 16px;
    }
}
```

## Jenis Alert Kustom

Anda dapat membuat jenis alert kustom dengan menambahkan kelas CSS baru:

```css
/* Jenis alert kustom: "purple" */
.una-alert-purple .una-alert-icon {
    background-color: rgba(147, 51, 234, 0.1);
    color: #9333ea;
}

.una-toast-purple {
    border-left: 3px solid #9333ea;
}

.una-toast-purple .una-toast-icon {
    color: #9333ea;
}
```

Kemudian di JavaScript Anda:

```javascript
// Tambahkan ikon kustom ke objek icons
const customIcons = {
    // ... ikon yang ada
    purple: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
};

// Gunakan jenis alert kustom
unaAlert.show('purple', 'Custom Alert', 'This is a custom purple alert!');
unaAlert.toast('purple', 'Custom Toast', 'This is a custom purple toast!');
```

## Kustomisasi Animasi

Anda dapat menambahkan animasi yang lebih canggih ke alert dan toast Anda:

```css
/* Animasi zoom-in untuk alert */
.una-alert {
    transform: scale(0.8);
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.una-alert-overlay.show .una-alert {
    transform: scale(1);
    opacity: 1;
}

/* Animasi bounce untuk toast */
@keyframes toast-bounce-in {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    70% {
        transform: translateY(-8px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes toast-bounce-out {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    30% {
        transform: translateY(-8px);
    }
    100% {
        opacity: 0;
        transform: translateY(40px);
    }
}

.una-toast {
    animation: toast-bounce-in 0.5s ease forwards;
}

.una-toast.hide {
    animation: toast-bounce-out 0.5s ease forwards;
}
```

## Peningkatan Aksesibilitas

Untuk meningkatkan aksesibilitas, tambahkan gaya ini:

```css
/* Gaya fokus untuk tombol */
.una-alert-btn:focus, .una-alert-btn-close:focus, .una-toast-close:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

/* Tingkatkan kontras untuk teks */
.una-alert-message {
    color: #1f2937; /* Teks lebih gelap untuk kontras yang lebih baik */
}

.una-toast-message {
    color: #374151;
}
```

Dan tambahkan modifikasi JavaScript ini untuk navigasi keyboard:

```javascript
// Tambahkan dukungan keyboard (tombol Escape untuk menutup)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('show')) {
        close();
    }
});

// Tambahkan manajemen fokus yang tepat
const trapFocus = () => {
    // Implementasi perangkap fokus
    // ...
};
```

## Integrasi dengan Framework CSS

### Tailwind CSS

Jika Anda menggunakan Tailwind CSS, Anda dapat memanfaatkan kelas utilitas:

```html
<style>
    /* Override minimal yang dibutuhkan */
    .una-alert {
        @apply bg-white rounded-xl shadow-xl max-w-md w-full;
    }
    .una-alert-btn {
        @apply py-3 px-4 font-medium rounded-lg transition-colors;
    }
    .una-alert-btn-confirm {
        @apply bg-indigo-600 text-white hover:bg-indigo-700;
    }
    /* ... override lainnya */
</style>
```

### Bootstrap

Untuk integrasi Bootstrap:

```css
/* Gaya seperti Bootstrap */
.una-alert {
    border-radius: 0.375rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.una-alert-btn {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
}

.una-alert-btn-confirm {
    background-color: #0d6efd;
}

.una-toast {
    border-radius: 0.25rem;
}
```

## Kesimpulan

Desain Una-Alert yang fleksibel memungkinkan kustomisasi ekstensif untuk menyesuaikan gaya visual proyek apa pun. Dengan menimpa gaya CSS dan memperluas fungsionalitas JavaScript, Anda dapat membuat integrasi yang mulus dengan sistem desain aplikasi Anda.

Untuk contoh lebih lanjut dan penggunaan tingkat lanjut, lihat dokumentasi dan halaman demo.