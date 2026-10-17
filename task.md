# Task Checklist: Deep Mobile-First Refactoring (HTML/CSS)

Dokumen pelacak progres pengerjaan refactoring antarmuka mobile-first Gelar Karya UP 60.

---

## 📌 Status Keseluruhan
- [x] **Batch 1: Sistem Tipografi & Spacing Fluid** (Selesai)
- [x] **Batch 2: Hero Header & Bottom Navigation Bar** (Selesai)
- [ ] **Batch 3: Kartu Karya (Jelajah), Filter Sticky & Search**
- [ ] **Batch 4: Modal Bottom Sheet, Denah & Scanner**

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
- [ ] Redesain kartu katalog karya (`.item` & `.card`): hierarki badge, judul, peneliti, dan tombol aksi.
- [ ] Perbaiki input pencarian (`#q`) dengan font 16px (anti auto-zoom di iOS) dan tombol reset sentuh.
- [ ] Buat filter segmen & kategori swipe horizontal dengan snap (`scroll-snap-type: x mandatory`).
- [ ] Rapikan matriks kategori dan SDG cards agar tidak berjejal di layar 360px.

### Batch 4: Modal Bottom Sheet, Denah & Scanner
- [ ] Ubah modal dialog `.sheet` menjadi bottom sheet mobile native lengkap dengan drag handle indicator.
- [ ] Perhalus tampilan gerbang registrasi `.gate` dan form umpan balik `.sheet`.
- [ ] Tingkatkan kenyamanan sentuh tombol tutup ('×') dan aksi simpan/batal.
- [ ] Rapikan denah pameran dan panduan rute di layar sempit.
- [ ] Uji responsivitas viewfinder kamera scanner QR.
