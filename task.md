# Task Checklist: Mobile-First Visual Refactoring Roadmap (Gelar Karya UP 60)

Dokumen pelacak progres dan roadmap berjenjang untuk refactoring antarmuka mobile-first seluruh menu Gelar Karya UP 60 (Beranda, Jelajah, SDGs, Denah, Rute, dan Umpan).

---

## 📌 Status & Milestones

- [x] **Milestone 0: Fondasi Design System & Dialog/Sheet Putih Bersih** (Selesai)
- [x] **Milestone 0.1: Quick Fix Input Putih & Radius SDGs** (Selesai)
- [ ] **Milestone 1: Halaman Beranda (Home & Gateway Presensi)** (Antrean)
- [ ] **Milestone 2: Halaman Jelajah (Katalog & Pencarian Karya)** (Antrean)
- [ ] **Milestone 3: Halaman SDGs (Pusat Keterkaitan SDGs)** (Dalam Pengerjaan)
- [ ] **Milestone 4: Halaman Denah (Interactive Map & Floorplan)** (Antrean)
- [ ] **Milestone 5: Halaman Rute (Itinerary Kunjungan Pribadi)** (Antrean)
- [ ] **Milestone 6: Halaman Umpan Balik (Evaluasi & Kuesioner)** (Selesai Sebagian di Sheet)
- [ ] **Milestone 7: QA Polish, Performance, & Accessibility Audit** (Antrean)

---

## 🚀 Rincian Pekerjaan Berjenjang

### Milestone 0: Fondasi Design System & Dialog/Sheet Putih Bersih
- [x] Unifikasi warna dialog dan bottom sheet ke pure white (`#ffffff !important`).
- [x] Implementasi interior kanvas grouped surface (`#f8fafc`) dengan Aturan Emas radius: outer 26px, padding 20px, inner 16px.
- [x] Tombol silang tutup presisi vektor SVG tanpa emoji.
- [x] Komponen bottom sheet interaktif SDGs dan detail booth.

### Milestone 0.1: Form Input Putih & Radius Logo SDGs
- [x] Buat form input (`input.txt`, `select.txt`, `textarea.txt`) di bottom sheet dan dialog berwarna putih bersih (`#ffffff !important`) dengan border halus (`#cbd5e1 !important`).
- [x] Kurangi radius gambar logo SDGs ke `6px` / `4px` agar tidak memotong teks dan nomor di sudut logo.
- [x] Filter halaman menu SDGs agar hanya memunculkan poin SDGs yang memiliki karya terhubung ($>0$ karya).

---

### Milestone 1: Halaman Beranda (Home & Gateway Presensi)
- [ ] Tata ulang Hero Header: Logo 60 Tahun proporsional, status live tanggal dan tempat pameran yang lega.
- [ ] Rapikan grid kartu statistik (2x2 seimbang) dan kartu presensi aktif.
- [ ] Perbaiki kartu pilihan peran ("Anda Datang Sebagai": Dosen, Mahasiswa, Mitra, Umum) dengan touch target $\ge 52\text{px}$ dan visual aktif yang tegas.
- [ ] Sediakan baris aksi cepat (*Quick Action shortcuts*) langsung menuju Jelajah, Denah, dan Rute.

---

### Milestone 2: Halaman Jelajah (Katalog & Pencarian Karya)
- [ ] Search input berukuran teks 16px (anti auto-zoom iOS Safari) dengan padding lapang dan ikon pencarian rapi.
- [ ] Track segmented filters (`#segKat`, `#segKl`) dengan pill putih mandiri, elevasi lembut, dan swipe snap.
- [ ] Refactoring kartu karya (`.work`): badge hierarki, judul seimbang (`text-wrap: balance`), nama ketua & avatar, serta aksi cepat ("Detail" & "Tambah Rute").
- [ ] Perbaiki empty state saat pencarian tidak menemukan hasil.

---

### Milestone 3: Halaman SDGs (Pusat Keterkaitan SDGs)
- [x] Filter hanya SDGs yang aktif (memiliki minimal 1 karya).
- [x] Atur radius gambar ikon SDGs agar tidak terpotong (6px).
- [ ] Refactoring grid kartu SDG di halaman utama: spacing lega, counter karya badge pill, dan efek hover/active modern.
- [ ] Sinkronisasi pembukaan sheet detail karya terkait saat kartu SDG diklik.

---

### Milestone 4: Halaman Denah (Interactive Map & Floorplan)
- [ ] Toolbar pencarian nomor panel booth dengan tombol fokus langsung ke pin booth.
- [ ] Kontrol zoom floating (`+` dan `−`) yang ergonomis di layar ponsel.
- [ ] Baris legenda warna bidang (IPTEKS, Kesehatan, Soshum) dalam format pill horizontal scroll yang rapi.
- [ ] Preview drawer kartu booth saat panel di peta disentuh.

---

### Milestone 5: Halaman Rute (Itinerary Kunjungan Pribadi)
- [ ] Header ringkasan rute: jumlah booth terpilih, estimasi waktu, dan tombol "Lihat Rute di Denah".
- [ ] Desain kartu langkah kunjungan bernomor besar (Langkah 1, 2, 3...) yang mudah di-scanning.
- [ ] Tombol hapus cepat per item dari rute.
- [ ] Desain empty state informatif jika belum ada karya yang dimasukkan ke rute.

---

### Milestone 6: Halaman Umpan Balik (Evaluasi & Kuesioner)
- [x] Terapkan reusable detail-sheet putih bersih pada form feedback modal.
- [x] Set default rating bintang 5 ("Luar biasa").
- [x] Sembunyikan field "Nama Anda" dan "Anda hadir sebagai" dari tampilan (disimpan secara otomatis).
- [ ] Tata ulang kartu evaluasi di section halaman (`#v-umpan`) agar serasi dengan desain kartu berjenjang.

---

### Milestone 7: QA Polish, Performance, & Accessibility Audit
- [ ] Pengujian responsive breakpoint (360px, 390px, 412px, desktop).
- [ ] Validasi kontras teks WCAG AAA pada mode terang dan mode gelap.
- [ ] Verifikasi ketiadaan layout shift (CLS 0) dan transisi 60fps.
