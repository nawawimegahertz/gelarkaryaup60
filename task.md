# Task Checklist: Deep Mobile-First Refactoring (HTML/CSS)

Dokumen pelacak progres pengerjaan refactoring antarmuka mobile-first Gelar Karya UP 60.

---

## 📌 Status Keseluruhan
- [x] **Batch 1: Sistem Tipografi & Spacing Fluid** (Selesai)
- [x] **Batch 2: Hero Header & Bottom Navigation Bar** (Selesai)
- [x] **Batch 3: Kartu Karya (Jelajah), Filter Sticky & Search** (Selesai)
- [x] **Batch 4: Modal Bottom Sheet, Denah & Scanner** (Selesai)

---

## 🚀 Rincian Pekerjaan Tiap Batch

### Batch 1: Sistem Tipografi & Spacing Fluid
- [x] Tentukan token CSS `--text-xs` hingga `--text-3xl` dengan formula `clamp()`.
- [x] Tentukan token skala jarak `--space-2xs` (4px) hingga `--space-2xl` (36px).
- [x] Terapkan `text-wrap: balance` pada judul (`h1`, `h2`, `h3`) dan `text-wrap: pretty` pada paragraf.
- [x] Integrasikan `100dvh` dan `env(safe-area-inset-bottom)` pada root layout.
- [x] Validasi kontras teks gelap/terang dan keterbacaan di layar kecil (360px).

### Batch 2: Hero Header & Bottom Navigation Bar
- [x] Redesain layout `.hero .wrap` menjadi mobile-first stack yang ringkas.
- [x] Format counter kartu `.stat` agar seimbang (tidak ada kartu melompong ganjil, 2x2 + 1 featured live attendance card).
- [x] Buat navigasi bawah `.tabs` model floating dock dengan touch target min 48px dan indikator pill aktif.
- [x] Optimalkan touch target kartu peran `.roles` (Dosen, Mahasiswa, Mitra, Umum) dalam grid 2x2 mobile.
- [x] Tambahkan animasi mikro transisi aktif yang halus (`livePulse`, active scale, active indicators).

### Batch 3: Kartu Karya (Jelajah), Filter Sticky & Search
- [x] Redesain kartu katalog karya (`.work` & `.card`): hierarki badge, judul balance, peneliti, dan tombol aksi terstruktur.
- [x] Perbaiki input pencarian (`#q`, `.search input`) dengan font 16px (anti auto-zoom di iOS) dan padding sentuh yang lapang.
- [x] Buat filter segmen & kategori swipe horizontal dengan snap (`scroll-snap-type: x mandatory`).
- [x] Rapikan matriks kategori dan SDG cards agar tidak berjejal di layar 360px dengan `overflow-x: auto` dan typography fluid.

### Batch 4: Modal Bottom Sheet, Denah & Scanner
- [x] Ubah modal dialog `.sheet` menjadi bottom sheet mobile native lengkap dengan drag handle indicator (`.sheet::before`).
- [x] Perhalus tampilan gerbang registrasi `.gate` dan form umpan balik `.sheet`.
- [x] Tingkatkan kenyamanan sentuh tombol tutup ('×') 40px dan aksi simpan/batal dengan safe area insets.
- [x] Rapikan denah pameran (`.mapwrap`) dan panduan rute dengan container overscroll yang terisolasi.
- [x] Lengkapi viewfinder kamera scanner QR dengan targeting frame dan animasi laser scanning (`scanLaser`).
