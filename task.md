# Task Checklist: Mobile-First Visual & Content Refactoring Roadmap (Gelar Karya UP 60)

Dokumen pelacak progres dan roadmap berjenjang untuk refactoring antarmuka mobile-first seluruh menu Gelar Karya UP 60 (**Beranda, Jelajah, SDGs, Denah, Rute, dan Umpan**), dengan penekanan pada **hierarki tipografi yang tajam** dan **pemeringkasan kata-kata yang ringkas, padat, tanpa menghilangkan hal esensial**.

---

## 📌 Status & Milestones

- [x] **Milestone 0: Fondasi Design System, Dialog/Sheet Putih & Presisi Tombol Tutup ("X")** (Selesai)
- [x] **Milestone 1: Halaman Beranda (Home, Stats, & Gateway Presensi)** (Selesai)
- [x] **Milestone 2: Halaman Jelajah (Katalog, Pencarian Karya, & Card Hierarchy)** (Selesai)
- [x] **Milestone 3: Halaman SDGs (Pusat Keterkaitan SDGs & Active Filtering)** (Selesai)
- [x] **Milestone 4: Halaman Denah (Interactive Map, Floorplan & Card Drawer)** (Selesai)
- [x] **Milestone 5: Halaman Rute (Itinerary Kunjungan Berurutan & Aksi)** (Selesai)
- [x] **Milestone 6: Halaman Umpan Balik (Evaluasi Pameran Ringkas & Tanpa Distraksi)** (Selesai)
- [x] **Milestone 8: Ergonomi Sentuh Jempol Kanan Mobile (Right-Hand Thumb Ergonomics & Button Accessibility)** (Selesai)
- [x] **Milestone 9: Penyempurnaan Visual Peta Karya & Otomatis Zoom In Denah** (Selesai)
- [x] **Milestone 10: Gamifikasi Tantangan Berhadiah (Doorprize Rp 250.000) & Decluttering Beranda** (Selesai)
- [x] **Milestone 11: Unifikasi Latar Belakang Putih Global & Preservasi Header Biru** (Selesai)
- [x] **Milestone 12: Hero Quest Card "Misi Penjelajah Booth" Bergradasi Biru Mewah (Visual Anchor)** (Selesai)
- [x] **Milestone 13: Standardisasi Kartu Putih Bersih di Seluruh Halaman & Komponen Tersembunyi** (Selesai)
- [x] **Milestone 14: Pembersihan Total Fitur & Data Demo Presensi di app.js** (Selesai)
- [x] **Milestone 7: QA Polish, Performance, & Accessibility Audit** (Selesai)

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
- [x] **Hierarki Tipografi:** 3 level kontras kartu: Tag Kategori & Booth -> Judul Riset (15.5px bold balance) -> Nama Peneliti & Singkatan Fakultas (`shortFak`).
- [x] **Pemeringkasan Teks:** Format fakultas diringkas (*"Fak. Farmasi"*, *"Fak. Teknik"*, dll.), hilangkan label repetitif.
- [x] Input pencarian teks 16px (anti auto-zoom iOS Safari), placeholder ringkas.
- [x] Track segmented filters (`#segKat`, `#segKl`) dengan pill putih independen, elevasi lembut, dan swipe snap.
- [x] Refactoring kartu karya (`.work`): Aturan Emas radius (outer 16px, padding 14px, inner badge 9px/8px).
- [x] Empty state ringkas dengan tombol reset pencarian instan.

---

### Milestone 3: Halaman SDGs (Pusat Keterkaitan SDGs & Active Filtering)
- [x] **Filter Hanya SDGs Aktif:** Hanya tampilkan poin SDGs yang memiliki minimal 1 karya terhubung; sembunyikan kartu "0 karya".
- [x] **Radius Logo SDGs Presisi:** Gunakan radius 6px pada `.sdgt-icon` agar logo resmi PBB tidak terpotong.
- [x] **Hierarki Tipografi:** Nomor SDGs menonjol, nama tujuan resmi dalam Proper Case, badge counter jumlah karya.
- [x] **Pemeringkasan Teks:** Hapus penjelasan umum PBB yang panjang; fokus pada relevansi karya riset UP 60.
- [x] **Bottom Sheet Interaktif:** Mengetuk kartu SDG langsung membuka bottom sheet interaktif daftar booth terkait lengkap dengan aksi rute dan denah.

---

### Milestone 4: Halaman Denah (Interactive Map, Floorplan & Card Drawer)
- [x] **Hierarki Tipografi:** Nomor panel booth besar dan kontras tinggi; pill legenda bidang terbaca jelas.
- [x] **Pemeringkasan Teks:** Instruksi gestur navigasi disederhanakan menjadi satu baris instruksi ringkas.
- [x] Toolbar pencarian nomor panel booth dengan tombol fokus langsung ke pin booth.
- [x] Kontrol zoom floating (`+` dan `−`) yang ergonomis untuk jempol.
- [x] Baris legenda warna bidang (IPTEKS, Kesehatan, Soshum) dalam format pill horizontal scroll.
- [x] Drawer detail booth interaktif saat panel di peta disentuh.

---

### Milestone 5: Halaman Rute (Itinerary Kunjungan Berurutan & Aksi)
- [x] **Hierarki Tipografi:** Nomor langkah kunjungan jelas (Langkah 1, 2, 3...) sebagai penuntun visual utama.
- [x] **Pemeringkasan Teks:** Header ringkas: *"${items.length} booth tersimpan · Estimasi ~${estMin} menit"*.
- [x] Tombol aksi cepat: *"Tampilkan di Denah"*, *"Salin Rute"*, dan *"Hapus Semua"*.
- [x] Kartu langkah terurut dengan nomor booth, judul riset, dan lokasi zona denah.
- [x] Empty state informatif dan bersahabat jika rute belum diisi.

---

### Milestone 6: Halaman Umpan Balik (Evaluasi Pameran Ringkas & Tanpa Distraksi)
- [x] Terapkan reusable detail-sheet putih bersih pada form feedback modal.
- [x] Set default rating bintang 5 ("Luar biasa").
- [x] Sembunyikan field "Nama Anda" dan "Anda hadir sebagai" dari form visual (disimpan otomatis di background).
- [x] **Hierarki Tipografi:** Label form Proper Case tanpa huruf kapital berteriak.
- [x] **Pemeringkasan Teks:** Formulir 1-langkah efisien dengan dropdown booth favorit dan textarea catatan yang lega.
- [x] Tata ulang kartu evaluasi di section halaman (`#v-umpan`) agar serasi dengan desain kartu berjenjang.

---

### Milestone 8: Ergonomi Sentuh Jempol Kanan Mobile (Right-Hand Thumb Ergonomics & Button Accessibility)
- [x] **Prioritas Tombol Aksi Kanan (Right-Hand Dominance):** Tata letak tombol aksi utama, button group, card footer action (`.work .foot .row`, `.card-actions`, `.sheet-footer-bar`), dan dialog/sheet CTA berada di sisi **kanan** (`justify-content: flex-end`, right-aligned) pada tampilan mobile agar mudah dijangkau jempol tangan kanan 90% pengguna ponsel.
- [x] **Urutan Button Group Alami:** Tombol aksi primer/konfirmasi diletakkan di posisi paling kanan/bawah yang paling dekat dengan jangkauan jempol, tombol sekunder/batal di sebelah kirinya.
- [x] **Jangkauan Ergonomis:** Touch target minimum $\ge 44\text{px} - 48\text{px}$ di seluruh tombol aksi agar bebas salah sentuh (*mis-click*).

---

### Milestone 9: Penyempurnaan Visual Peta Karya & Otomatis Zoom In Denah
- [x] **Centering Sel Peta Karya (Matrix):** Update styling `.cell` pada section "Peta karya" agar nilai angka (`.cell b`) dan teks subtitle (`.cell span`) berada tepat di tengah (*centered vertically and horizontally*).
- [x] **Otomatis Zoom In Denah dari Referensi:** Pada aksi "Lihat di denah" (`showOnMap(no)`), otomatis set level zoom peta lebih dekat/fokus (`S.map.z = 2.2`) dan gulir presisi ke koordinat booth panel yang dituju.

---

### Milestone 10: Gamifikasi Tantangan Berhadiah (Doorprize Rp 250.000) & Decluttering Beranda
- [x] **Hero Quest Card Terpadu:** Menyatukan alur kunjungan, undian, dan stempel menjadi satu kartu tantangan interaktif (*"Misi Penjelajah Booth"*) berhadiah **Doorprize Rp 250.000**, lengkap dengan *dynamic progress bar* persentase, live tier status, dan tombol aksi pemindai kamera instan.
- [x] **Decluttering Beranda & Spacing Lega (`gap: 32px`):** Menghilangkan grafik batang administratif 8 fakultas & komposisi pendanaan dari feed publik beranda; menyediakannya via kartu banner & bottom sheet *"Statistik & Arsip LPPM"* agar beranda bersih dan lega.
- [x] **Penyelarasan Makro & Mikro Level Gamifikasi:**
  - *Jelajah:* Setiap kartu karya dilengkapi badge quest dinamis (`✓ Stempel Diraih` vs `🎯 Misi Booth`).
  - *Detail Booth Sheet:* Dilengkapi tombol interaktif *"🎯 Klaim Stempel"* yang langsung mengaktifkan kamera pemindai QR.
  - *Sistem Tingkatan & Ambang Batas Kupon:* Target stempel minimal 10 stempel (`CONFIG.undian.target = 10`) untuk membuka formulir kupon undian resmi, serta apresiasi progres hingga 60 booth lengkap.
- [x] **Ergonomi Aksi Cepat Jempol Kanan:** Quick nav 3 kolom (*Jelajah Booth*, *Buka Denah*, *Rute Saya*) dengan touch target nyaman.

---

### Milestone 11: Unifikasi Latar Belakang Putih Global & Preservasi Header Biru
- [x] Ubah variabel `--bg` menjadi `#ffffff` murni di `assets/css/style.css`.
- [x] Pertahankan `header` dengan gradasi biru royal Pancasila (`#0a2a66` ke `#1857c4`) dan live counter kehadiran.
- [x] Harmonisasi transisi pembatas footer dan navigasi dock bawah (`.tab-bar`) terhadap latar putih murni.

---

### Milestone 12: Hero Quest Card "Misi Penjelajah Booth" Bergradasi Biru Mewah (Visual Anchor)
- [x] Rombak kartu *"Misi Penjelajah Booth"* (`.quest-card`) menjadi berlatar gradasi biru royal eksklusif (`linear-gradient(135deg, #081d48 0%, #0f388a 50%, #1857c4 100%)`).
- [x] Berikan kontras teks putih terang, aksen nominal hadiah emas murni (`#FFD36B`), dan badge bintang berkilau.
- [x] Desain kotak progres translusen gelap dengan progress bar emas-ke-zamrud dan tombol aksi gold berenergi tinggi.

---

### Milestone 13: Standardisasi Kartu Putih Bersih di Seluruh Halaman & Komponen Tersembunyi
- [x] Pastikan seluruh kartu karya rekomendasi, grid karya, kartu SDGs, langkah rute, dan denah berlatar putih bersih (`#ffffff`) dengan border ultra-halus (`#e2e8f0`) dan bayangan lembut.
- [x] Terapkan konsistensi putih bersih ke seluruh dialog dan bottom sheet tersembunyi (Detail Booth, Form Kehadiran, Dialog Undian, Sheet SDGs, dan Sheet Arsip LPPM).

---

### Milestone 14: Pembersihan Total Fitur & Data Demo Presensi di app.js
- [x] Hapus objek `const DEMO = { ... }` dan flag `S.att.demo` dari `assets/js/app.js`.
- [x] Hapus label "Data contoh" di header dan halaman rincian kehadiran.
- [x] Hapus tombol toggle `data-act="demo"` dan handler-nya di event listener.
- [x] Pastikan hanya data riil Google Apps Script / presensi lokal yang ditampilkan.

---

### Milestone 15: Penyelarasan Style Kartu Misi, Progress Bar Emas Murni, & Threshold 60/60
- [x] Sinkronisasi style kartu `.quest-card` ke latar putih (`var(--surface, #ffffff)`), border halus (`#e2e8f0`), tipografi gelap kontras tinggi, identik dengan kartu pada `assets/archives/mockup-gelar-karya-up60.html`.
- [x] Rombak progres bar dari multi-gradasi menjadi **emas murni solid** (`var(--gold, #f5a800)`), konsisten pada `.prog i`, `.quest-prog-bar > i`, dan `.quest-progress-fill`.
- [x] Kunci ambang batas (threshold) tantangan secara mutlak di **60/60 booth** (`BOOTH_N = 60`), sinkron dengan kriteria undian di `#jelajah`.
- [x] Sinkronisasi simulator dan visualisasi di `mockup-beranda-gamifikasi.html` dan `assets/css/style.css`.

---

### Milestone 16: Menu Dok Kontras Tinggi & Gamifikasi Sprint 5 Level (Teori Goal-Gradient)
- [x] Rombak status aktif dock menu navigasi bawah (`nav.tabs button[aria-current="page"]`) menjadi pil biru dongker pekat (`linear-gradient(135deg, #0a2558, #15459e)`) dengan teks dan ikon putih bersih (`#ffffff`), bayangan nyata, memberikan orientasi visual seketika bagi pengguna.
- [x] Terapkan teori gamifikasi *Goal-Gradient Effect* dan *Cognitive Chunking*: memecah tantangan 60 booth menjadi 4 sprint mikro (per 15 booth) dengan 5 tingkatan level (Level 1: Penjelajah Mula, Level 2: Penjelajah Aktif, Level 3: Penjelajah Unggul, Level 4: Kandidat Juara, Level 5: Master Gelar Karya UP60).
- [x] Tampilkan lencana target terdekat (*Sprint Badge*) seperti "Tinggal 6 booth lagi ke Level 3" untuk mereduksi beban psikologis angka 60 sehingga terasa ringkas, dekat, dan memicu adrenalin.
- [x] Hadirkan jejak milestone (*Sprint Checkpoint Trail*) dengan 4 titik indikator: 15 (Aktif), 30 (Separuh), 45 (Juara), dan 60 (Undian 🏆).
- [x] Sinkronisasi simulator interaktif di `mockup-beranda-gamifikasi.html` beserta floating dock interaktif.

---

### Milestone 17: Kartu Misi Reusable Berwarna Biru untuk #beranda dan #jelajah
- [x] Refaktor komponen kartu misi undian menjadi fungsi tunggal yang dapat digunakan kembali (*reusable component* `questCard(opt)`), menghapus duplikasi markup dan hardcoded yang sebelumnya ada di `stampCard()`.
- [x] Terapkan warna gradasi biru royal pekat (`linear-gradient(145deg, #071c46 0%, #0d347f 50%, #15459e 100%)`) pada `.quest-card`, dengan aksen emas murni (`#f5a800`) dan tipografi kontras tinggi (`#ffffff` dan `#ffd36b`).
- [x] Sinkronisasi kedua halaman: `#beranda` dan `#jelajah` kini memanggil komponen yang sama secara konsisten (`questCard({ inJelajah: true })`), hemat memori, mudah di-maintain, dan live-sync saat stempel bertambah.
- [x] Update visual dan styles pada `mockup-beranda-gamifikasi.html`.

### Milestone 18: Perbaikan Layout Mobile Sprint Badge & Reduksi Redundansi Deskripsi Gamifikasi
- [x] Perbaiki `.quest-sprint-badge` dari `display: inline-flex` menjadi `display: block; text-align: left; line-height: 1.45;` untuk mengatasi tampilan teks yang terbelah seperti justify kiri-kanan pada layar ponsel sempit (mobile viewport).
- [x] Terapkan title kustom pengguna (Level 1: Penjelajah Pemula, Level 2: Pantang Nyerah, Level 3: Panutan, Level 4: Hampir Juara, Level 5: Calon Juara Undian).
- [x] Buat deskripsi tantangan jauh lebih ringkas, padat aksi (*action-oriented*), dan hilangkan pengulangan matematika kuota sisa booth yang sudah disampaikan di sprint badge.
- [x] Sinkronisasi nama milestone checkpoint titik stempel (15 Pantang Nyerah, 30 Panutan, 45 Hampir Juara, 60 Undian 🏆) di `assets/js/app.js` dan `mockup-beranda-gamifikasi.html`.

### Milestone 19: Penyelarasan Tipografi & Warna Teks Placeholder Formulir
- [x] Identifikasi akar masalah: ukuran `16px` dari deklarasi formulir global sebelumnya terwarisi (*inherited*) ke `::placeholder` tanpa aturan pseudo-element spesifik, sehingga teks placeholder tampak lebih besar daripada label (`13px-14px`) dan terlalu tebal/mencolok.
- [x] Terapkan aturan standar industri (*modern UI/UX best practices*): `::placeholder` dengan ukuran proporsional (`13.5px`), bobot normal (`font-weight: 400`), dan warna redup/subtle (`#94a3b8`) dengan `opacity: 1`.
- [x] Berikan padding nyaman (`10px 14px`) dan `line-height: 1.5` pada `textarea.txt` dan `input.txt` di bottom sheet (Presensi, Feedback, Undian, PIN, Pencarian) agar teks placeholder bernapas lega dan tidak mepet tepi atas-kiri.
- [x] Pastikan hierarki visual jelas: Label (tegas & jelas) > Nilai Input (kontras tinggi saat diketik) > Placeholder (redup & sebagai penunjuk).

---

### Milestone 7: QA Polish, Performance, & Accessibility Audit
- [x] Pengujian visual pada resolusi mobile sempit (360px), standar (390px - 412px), dan desktop.
- [x] Verifikasi kontras teks WCAG AAA pada kartu biru dan dock aktif.
- [x] Audit performa: zero layout shift (CLS 0) dan transisi responsif 60fps.

