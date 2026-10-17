# Task Checklist: Mobile-First Visual & Content Refactoring Roadmap (Gelar Karya UP 60)

Dokumen pelacak progres dan roadmap berjenjang untuk refactoring antarmuka mobile-first seluruh menu Gelar Karya UP 60 (**Beranda, Jelajah, SDGs, Denah, Rute, dan Umpan**), dengan penekanan pada **hierarki tipografi yang tajam** dan **pemeringkasan kata-kata yang ringkas, padat, tanpa menghilangkan hal esensial**.

---

## 📌 Status & Milestones

- [x] **Milestone 0: Fondasi Design System, Dialog/Sheet Putih & Presisi Tombol Tutup ("X")** (Selesai)
- [x] **Milestone 1: Halaman Beranda (Home, Stats, & Gateway Presensi)** (Selesai)
- [ ] **Milestone 2: Halaman Jelajah (Katalog, Pencarian Karya, & Card Hierarchy)** (Berikutnya)
- [ ] **Milestone 3: Halaman SDGs (Pusat Keterkaitan SDGs & Active Filtering)** (Dalam Pengerjaan)
- [ ] **Milestone 4: Halaman Denah (Interactive Map, Floorplan & Card Drawer)** (Antrean)
- [ ] **Milestone 5: Halaman Rute (Itinerary Kunjungan Berurutan & Aksi)** (Antrean)
- [ ] **Milestone 6: Halaman Umpan Balik (Evaluasi Pameran Ringkas & Tanpa Distraksi)** (Selesai Sebagian di Sheet)
- [ ] **Milestone 7: QA Polish, Performance, & Accessibility Audit** (Antrean)
- [ ] **Milestone 8: Ergonomi Sentuh Jempol Kanan Mobile (Right-Hand Thumb Ergonomics & Button Accessibility)** (Antrean)
- [ ] **Milestone 9: Penyempurnaan Visual Peta Karya & Otomatis Zoom In Denah** (Antrean)

---

## 🚀 Rincian Pekerjaan Berjenjang

### Milestone 0: Fondasi Design System, Dialog/Sheet Putih & Presisi Tombol Tutup ("X")
- [x] Unifikasi container dialog dan bottom sheet ke pure white (`#ffffff !important`).
- [x] Form input pada sheet dan dialog diatur berlatar putih bersih (`#ffffff`) dengan border halus (`#cbd5e1`).
- [x] **Perbaikan tombol tutup ("X"):**
  - Posisi vertikal presisi di tengah top bar dengan `top: 50%; transform: translateY(-50%); right: 16px;`.
  - Area sentuh diperluas menjadi 48px via pseudo-element `::before`.
  - SVG silang diberi `pointer-events: none;` dan event handler `d.close` diperbaiki agar responsif instan saat disentuh.
- [x] Dikecilkan radius sudut logo SDGs ke 6px / 4px agar teks dan angka di sudut logo tidak terpotong.

---

### Milestone 1: Halaman Beranda (Home, Stats, & Gateway Presensi)
- [x] **Hierarki Tipografi:** Kontras tegas `h1` judul pameran (`text-wrap: balance`), label tanggal/waktu, dan angka statistik tabular.
- [x] **Pemeringkasan Teks:** Ringkaskan deskripsi pembuka menjadi 1 baris padat informatif (*Senin, 19 Okt 2026 · 08.00–16.00 WIB · Aula Masjid At-Taqwa UP*).
- [x] **Grid Statistik Seimbang & Banner Presensi:** Metrik pameran 2x2 simetris (Total Karya, Penelitian, Pengabdian, SDGs) + interactive full-width live attendance badge dengan pulse dot.
- [x] **Kartu Peran Ergonomis:** Format Proper Case ("Dosen", "Mahasiswa", "Mitra", "Umum") dengan touch target $\ge 56\text{px}$, teks instruksi lugas tanpa basa-basi.
- [x] **Baris Aksi Cepat (*Quick Actions*):** Navigasi thumb-accessible di Beranda: *"Mulai Jelajah"*, *"Buka Denah"*, *"Rute Saya"* (lengkap dengan live badge counter rute).
- [x] **Alur Kunjungan & Undian Ringkas:** Pemeringkasan micro-copy pada `journeyCard` dan `stampCard` dengan Proper Case.

---

### Milestone 2: Halaman Jelajah (Katalog, Pencarian Karya, & Card Hierarchy)
- [ ] **Hierarki Tipografi:** 3 level kontras kartu: Tag Kategori/Booth -> Judul Riset (15.5px bold balance) -> Nama Peneliti & Singkatan Fakultas.
- [ ] **Pemeringkasan Teks:** Singkat format fakultas (misal: *"Fak. Farmasi"*), hilangkan label teks ganda yang repetitif.
- [ ] Input pencarian teks 16px (anti auto-zoom iOS Safari), placeholder ringkas.
- [ ] Track segmented filters (`#segKat`, `#segKl`) dengan pill putih independen, elevasi lembut, dan swipe snap.
- [ ] Refactoring kartu karya (`.work`): Aturan Emas radius (outer 16px, padding 14px, inner badge 8px).
- [ ] Empty state ringkas dengan tombol reset pencarian instan.

---

### Milestone 3: Halaman SDGs (Pusat Keterkaitan SDGs & Active Filtering)
- [x] **Filter Hanya SDGs Aktif:** Hanya tampilkan poin SDGs yang memiliki minimal 1 karya terhubung; sembunyikan kartu "0 karya".
- [x] **Radius Logo SDGs Presisi:** Gunakan radius 6px pada `.sdgt-icon` agar logo resmi PBB tidak terpotong.
- [ ] **Hierarki Tipografi:** Nomor SDGs menonjol, nama tujuan resmi dalam Proper Case, badge counter jumlah karya.
- [ ] **Pemeringkasan Teks:** Hapus penjelasan umum PBB yang panjang; fokus pada relevansi karya riset UP 60.
- [ ] Bottom sheet interaktif daftar booth terkait saat kartu SDG diklik.

---

### Milestone 4: Halaman Denah (Interactive Map, Floorplan & Card Drawer)
- [ ] **Hierarki Tipografi:** Nomor panel booth besar dan kontras tinggi; pill legenda bidang terbaca jelas.
- [ ] **Pemeringkasan Teks:** Instruksi gestur navigasi disederhanakan menjadi satu baris instruksi ringkas.
- [ ] Toolbar pencarian nomor panel booth dengan tombol fokus langsung ke pin booth.
- [ ] Kontrol zoom floating (`+` dan `−`) yang ergonomis untuk jempol.
- [ ] Baris legenda warna bidang (IPTEKS, Kesehatan, Soshum) dalam format pill horizontal scroll.
- [ ] Preview drawer kartu booth saat panel di peta disentuh.

---

### Milestone 5: Halaman Rute (Itinerary Kunjungan Berurutan & Aksi)
- [ ] **Hierarki Tipografi:** Nomor langkah kunjungan besar (Langkah 1, 2, 3...) sebagai penuntun visual utama.
- [ ] **Pemeringkasan Teks:** Header ringkas: *"X booth dipilih · Estimasi ~Y menit"* tanpa narasi pengantar panjang.
- [ ] Tombol aksi cepat: *"Tampilkan Rute di Denah"* dan *"Hapus Semua"*.
- [ ] Kartu langkah terurut dengan nomor booth, judul riset, dan lokasi zona denah.
- [ ] Empty state informatif dan bersahabat jika rute belum diisi.

---

### Milestone 6: Halaman Umpan Balik (Evaluasi Pameran Ringkas & Tanpa Distraksi)
- [x] Terapkan reusable detail-sheet putih bersih pada form feedback modal.
- [x] Set default rating bintang 5 ("Luar biasa").
- [x] Sembunyikan field "Nama Anda" dan "Anda hadir sebagai" dari form visual (disimpan otomatis di background).
- [ ] **Hierarki Tipografi:** Label form Proper Case tanpa huruf kapital berteriak.
- [ ] **Pemeringkasan Teks:** Formulir 1-langkah efisien dengan dropdown booth favorit dan textarea catatan yang lega.
- [ ] Tata ulang kartu evaluasi di section halaman (`#v-umpan`) agar serasi dengan desain kartu berjenjang.

---

### Milestone 7: QA Polish, Performance, & Accessibility Audit
- [ ] Pengujian visual pada resolusi mobile sempit (360px), standar (390px - 412px), dan desktop.
- [ ] Verifikasi kontras teks WCAG AAA pada mode terang dan mode gelap.
- [ ] Audit performa: zero layout shift (CLS 0) dan transisi responsif 60fps.

---

### Milestone 8: Ergonomi Sentuh Jempol Kanan Mobile (Right-Hand Thumb Ergonomics & Button Accessibility)
- [ ] **Prioritas Tombol Aksi Kanan (Right-Hand Dominance):** Tata letak tombol aksi utama, button group, card footer action, dan dialog/sheet CTA berada di sisi **kanan** (`justify-content: flex-end`, right-aligned) pada tampilan mobile agar mudah dijangkau jempol tangan kanan 90% pengguna ponsel.
- [ ] **Urutan Button Group Alami:** Tombol aksi primer/konfirmasi diletakkan di posisi paling kanan/bawah yang paling dekat dengan jangkauan jempol, tombol sekunder/batal di sebelah kirinya.
- [ ] **Jangkauan Ergonomis:** Touch target minimum $\ge 44\text{px} - 48\text{px}$ di seluruh tombol aksi agar bebas salah sentuh (*mis-click*).

---

### Milestone 9: Penyempurnaan Visual Peta Karya & Otomatis Zoom In Denah
- [ ] **Centering Sel Peta Karya (Matrix):** Update styling `.cell` pada section "Peta karya" agar nilai angka (`.cell b`) dan teks subtitle (`.cell span`) berada tepat di tengah (*centered vertically and horizontally*).
- [ ] **Otomatis Zoom In Denah dari Referensi:** Pada aksi "Lihat di denah" (`showOnMap(no)`), otomatis set level zoom peta lebih dekat/fokus (misal: `S.map.z = 2.2`) dan gulir presisi ke koordinat booth panel yang dituju.
