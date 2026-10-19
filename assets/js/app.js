/* ===== KONFIGURASI PANITIA ===== */
const CONFIG = {
  publicUrl: "", // Kosongkan agar otomatis menggunakan URL web aktif saat ini (Vercel / domain UP)
  pinPanitia: "1966", // PIN verifikasi panitia (default: 1966 - tahun berdirinya UP)
  gasUrl:
    "https://script.google.com/macros/s/AKfycbyt1GXR_mPDL5pJo8Gqi8GNRMfNdUHhdHGnXsr4E-R-hdKGz3SgvAp-J_ngJu2PgupD/exec", // backend endpoint Google Apps Script
  panel: {}, // pemetaan nomor karya ke nomor panel bila berbeda, contoh {7: 12}
  jamBuka: 8,
  jamTutup: 16, // rentang grafik kehadiran per jam
  fakultas: [
    "Fakultas Ekonomi & Bisnis",
    "Fakultas Farmasi",
    "Fakultas Hukum",
    "Fakultas Ilmu Komunikasi",
    "Fakultas Pariwisata",
    "Fakultas Psikologi",
    "Fakultas Teknik",
    "Sekolah Pascasarjana",
    "Unit atau program lain",
  ],
  jenisMitra: [
    "Pemerintah",
    "Industri atau dunia usaha",
    "Perguruan tinggi atau lembaga riset",
    "Alumni",
    "Sekolah",
    "Lainnya",
  ],
  hadir: {
    // Mode Google Form + Sheets (untuk halaman yang di-hosting umum). Kosongkan bila tidak dipakai.
    csvUrl: "", // Sheets jawaban formulir > Publikasikan ke web > CSV
    formAction: "", // https://docs.google.com/forms/d/e/XXXX/formResponse
    fields: { nama: "", peran: "", asal: "" }, // kode entry.XXXXXXX tiap pertanyaan
  },
  undian: {
    hadiah: "Rp 150.000", // hadiah undian bagi pengunjung yang memindai booth
    kuota: 3, // 3 pemenang penerima doorprize @ Rp 150.000
    target: 60, // Syarat 60 booth lengkap konsisten dengan #jelajah
    garam: "up60-gk-2026", // ubah sebelum mencetak QR; kode booth dihitung dari nilai ini
    jeda: 8, // detik minimal antarpindaian, mencegah pindai beruntun tanpa berkunjung
    formAction: "", // opsional: Google Form pendaftaran undian
    fields: { nama: "", wa: "", peran: "", kode: "" },
  },
  umpan: {
    // Google Form umpan balik (untuk halaman yang di-hosting umum). Kosongkan bila tidak dipakai.
    formAction: "", // https://docs.google.com/forms/d/e/XXXX/formResponse
    fields: { peran: "", nilai: "", karya: "", komentar: "" },
  },
};
const DATA = [
  {
    "no": 1,
    "judul": "Pengembangan Model Massive Transformative Purpose untuk Mendukung Kebijakan Reformasi Birokrasi Institutional branding Direktorat Jenderal Bea Cukai Indonesia",
    "ketua": "Prof. Dr. Ir. Arissetyanto Nugroho, M.M.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Terapan",
    "dana": 47800000,
    "dampak": "Kebijakan: rekomendasi branding institusi untuk instansi pemerintah (DJBC)",
    "sdg": [
      16
    ],
    "zona": "C",
    "panel": 1
  },
  {
    "no": 2,
    "judul": "Model Pengembangan Koperasi Merah Putih Desa Antajaya Tanjungsari Bogor Berbasis Tata Kelola, Literasi Keuangan, dan Digitalisasi untuk Mewujudkan Koperasi Desa Sehat dan Berkelanjutan",
    "ketua": "Prof. Dr. Sri Widyastuti, S.E., M.M., M.Si.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Terapan",
    "dana": 54800000,
    "dampak": "Terapan: model koperasi desa dengan lokasi mitra jelas",
    "sdg": [
      8,
      1
    ],
    "zona": "C",
    "panel": 2
  },
  {
    "no": 3,
    "judul": "Sizing Rooftop Solar PV for Campus Decarbonisation in Indonesia: When Is It Worth Waiting to Verify Energy Savings?",
    "ketua": "Eka Sudarmaji, S.E., M.M., M.Com.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Terapan",
    "dana": 59800000,
    "dampak": "Terapan: modul dan aplikasi efisiensi energi gedung",
    "sdg": [
      7,
      11,
      12
    ],
    "zona": "A",
    "panel": 3,
    "judul0": "Modul and Aplikasi Optimasi Energi Efisiensi Gedung Berbasis Algoritma Cascading LCCA untuk Maksimalisasi ROI dan Efisiensi Energi"
  },
  {
    "no": 4,
    "judul": "Model Implementasi SAK Entitas Privat Berbasis Transvaluasi Nilai dan Aplikasi Web: Pelaporan Keuangan Berkelanjutan bagi UMKM, BUMDes, dan Koperasi",
    "ketua": "Dr. Syahril Djaddang, S.E., M.Si.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Terapan",
    "dana": 29900000,
    "dampak": "Terapan: aplikasi pelaporan keuangan UMKM, Bumdes, koperasi",
    "sdg": [
      8,
      9
    ],
    "zona": "C",
    "panel": 4,
    "judul0": "Model Implementasi Standar Akuntansi Keuangan Entitas Privat Pelaporan Keuangan UMKM, Bumdes, Koperasi Berkelanjutan Berbasis Transvaluasi Nilai Dan Aplikasi Android."
  },
  {
    "no": 5,
    "judul": "Perceived Income Stability and Financial Security among Gig Workers in Indonesia: A Comparative Analysis across Socioeconomic and Occupational Dimensions",
    "ketua": "Prof. Dr. Nurmala Ahmar, S.E., M.Si.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 34850000,
    "dampak": "Sosial: kerentanan finansial pekerja gig, terkait SDGs",
    "sdg": [
      8,
      10
    ],
    "zona": "C",
    "panel": 5,
    "judul0": "Dampak Algoritma Penilaian Kinerja Platform terhadap Ketidakpastian Pendapatan dan Stres Finansial Pekerja Gig: Implikasi bagi Pencapaian SDGs"
  },
  {
    "no": 6,
    "judul": "Simulasi Keputusan Kewirausahaan: Bagaimana Pemuda Muslim Merespons Risiko, Pembiayaan, dan Dukungan Zakat-Wakaf di Indonesia",
    "ketua": "Gunawan Baharuddin, S.E., M.Ec., Ph.D.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Sosial-ekonomi: kewirausahaan melalui ekosistem zakat-wakaf",
    "sdg": [
      8,
      1
    ],
    "zona": "C",
    "panel": 6,
    "judul0": "Membangun Generasi Wirausaha Muslim: Model Empiris Determinan Niat Kewirausahaan dalam Ekosistem Zakat–Wakaf"
  },
  {
    "no": 7,
    "judul": "Revolusi Literasi Pajak Digital Berbasis CoreTax dan AI: Intervensi Cerdas untuk Tingkatkan Kepatuhan UMKM Jawa Barat",
    "ketua": "Dr. Indah Masri, S.E., M.S.Ak.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Terapan: intervensi literasi pajak digital UMKM",
    "sdg": [
      8,
      16
    ],
    "zona": "C",
    "panel": 7
  },
  {
    "no": 8,
    "judul": "Sinergi Faktor Institusional dan Adopsi Teknologi: Model Peningkatan Efektivitas E-Government di Era Birokrasi 4.0",
    "ketua": "Rafrini Amyulianthy, S.E., CA., M.S., Ak., Ph.D.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 41850000,
    "dampak": "Kebijakan: efektivitas e-government dan layanan publik",
    "sdg": [
      16,
      9
    ],
    "zona": "C",
    "panel": 8
  },
  {
    "no": 9,
    "judul": "Studi BPR dan BPRS di Wilayah Pangan Strategis Indonesia: Analisis Dampak dengan Propensity Score Matching dan Difference-in-Difference",
    "ketua": "Dr. Chaerani Nisa, S.E., M.S.M.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 29900000,
    "dampak": "Evaluasi dampak program BPR/BPRS di wilayah pangan (PSM-DiD)",
    "sdg": [
      2,
      8
    ],
    "zona": "C",
    "panel": 9
  },
  {
    "no": 10,
    "judul": "Aksi Governansi Emisi Karbon: Demi Bumi dan Keberlanjutan Perusahaan (Carbon Emission Governance in Action)",
    "ketua": "Widyaningsih Azizah, S.E., Ak., M.Sc.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 34850000,
    "dampak": "Lingkungan: tata kelola emisi karbon",
    "sdg": [
      13,
      12
    ],
    "zona": "C",
    "panel": 10,
    "judul0": "Aksi Governansi Emisi Karbon : Demi Bumi dan Keberlanjutan Perusahaan"
  },
  {
    "no": 11,
    "judul": "Whistleblowing System, Professional Skepticism, dan AI Readiness dalam Meningkatkan Efektivitas Deteksi Kecurangan di Perguruan Tinggi",
    "ketua": "Tryas Chas Biandani, SE.,M.S.Ak",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 29900000,
    "dampak": "Tata kelola: deteksi kecurangan di perguruan tinggi",
    "sdg": [
      16,
      4
    ],
    "zona": "C",
    "panel": 11,
    "judul0": "Integrasi Artificial Intelligence, Whistleblowing, dan Skeptisisme Auditor dalam Deteksi Kecurangan Perguruan Tinggi"
  },
  {
    "no": 12,
    "judul": "Transport CO2 Emissions in Indonesia Before and After the Emissions-Based Luxury Goods Sales Tax (PPnBM) on Motor Vehicles",
    "ketua": "Dr. Yuli Ardianto, S.E., M.Si.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Kebijakan: pajak emisi karbon sektor transportasi",
    "sdg": [
      13,
      11
    ],
    "zona": "C",
    "panel": 12,
    "judul0": "Analisis Efektivitas Pigouvian Tax terhadap Pengurangan Emisi Karbon pada Sektor Transportasi di Indonesia"
  },
  {
    "no": 13,
    "judul": "Integrasi Konsumsi Halal dan Ekonomi Hijau: Model Perilaku Konsumsi terhadap Produk Pangan Berkelanjutan",
    "ketua": "Dr. Nurul Hilmiyah, S.E., M.Ec.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44800000,
    "dampak": "Lingkungan-sosial: konsumsi halal dan ekonomi hijau",
    "sdg": [
      12,
      13
    ],
    "zona": "C",
    "panel": 13
  },
  {
    "no": 14,
    "judul": "Transformasi dan Inovasi Bisnis UMKM Agri-Food Indonesia: Desain dan Pengembangan Circular Business Model Canvas (CBMC)",
    "ketua": "Dr. Amelia Oktrivina D.S., S.E., M.Ak.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 29900000,
    "dampak": "Terapan: model bisnis sirkular UMKM agri-food",
    "sdg": [
      12,
      8
    ],
    "zona": "C",
    "panel": 14
  },
  {
    "no": 15,
    "judul": "Pengembangan Model Strategi Pemasaran Koperasi Berbasis Perilaku Anggota untuk Keberlanjutan dan Daya Saing Koperasi Desa/Kelurahan Merah Putih Indonesia",
    "ketua": "Dr. Lola Fitria Sari, S.E., M.M.",
    "fak": "Fakultas Ekonomi & Bisnis",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Terapan: strategi pemasaran koperasi desa/kelurahan",
    "sdg": [
      8,
      1
    ],
    "zona": "C",
    "panel": 15
  },
  {
    "no": 16,
    "judul": "Unlocking Pomegranate's Anti-Aging Potential! Inovasi Bahan Baku Kosmetik Berbasis Fermentasi Kulit Buah Delima: Scale-Up, Karakterisasi, dan Uji Keamanan",
    "ketua": "Dr. apt. Faizatun, S.Si., M.Si.",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44800000,
    "dampak": "Hilirisasi: bahan baku kosmetik skala-up untuk industri",
    "sdg": [
      9,
      12,
      3
    ],
    "zona": "D",
    "panel": 16,
    "judul0": "Karakterisasi dan Evaluasi Keamanan Bahan Baku Kosmetik Anti Aging Berbasis Fermentasi Kulit Buah Delima (Punica granatum L) Hasil Optimasi Scale-Up"
  },
  {
    "no": 17,
    "judul": "Pemetaan Profil Pasien Tuberkulosis: Langkah Awal Menuju Strategi Peningkatan Kepatuhan Pengobatan",
    "ketua": "Dr. Nurita Andayani, S.Si., M.Si.",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44700000,
    "dampak": "Kesehatan publik: kepatuhan obat pasien TB di DKI Jakarta",
    "sdg": [
      3
    ],
    "zona": "D",
    "panel": 17,
    "judul0": "Inovasi Strategi Peningkatan Kepatuhan Minum Obat di DKI Jakarta melalui Pendekatan Berbasis Analisis Klaster untuk Segmentasi Pasien Tuberkulosis"
  },
  {
    "no": 18,
    "judul": "Development of 70% Ethanol Extract of Soybean (Glycine max L.) as an Anti-Depressant Functional Food Using Tail Suspension and Forced Swimming Test Methods",
    "ketua": "apt. Sarah Zaidan, S.Si., M.Farm.",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44700000,
    "dampak": "Produk: pangan fungsional antidepresan",
    "sdg": [
      3,
      2
    ],
    "zona": "D",
    "panel": 18,
    "judul0": "Pengembangan Kombinasi Nanoteknologi Gelasi Ionik Dan Fitosom Ekstrak Etanol Biji Kedelai Sebagai Pangan Fungsional Dengan Aktivitas AntiDepresan Secara In vivo"
  },
  {
    "no": 19,
    "judul": "Inovasi Mikroemulsi Minyak Atsiri Serai Wangi dan Uji In Vitro terhadap Pediculus humanus",
    "ketua": "apt. Safira Nafisa, S.Farm., M.Si.",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44600000,
    "dampak": "Produk: mikroemulsi untuk pedikulosis",
    "sdg": [
      3
    ],
    "zona": "D",
    "panel": 19
  },
  {
    "no": 20,
    "judul": "Tren Penggunaan, Rasionalitas, dan Kesesuaian Antibiotik pada Pasien Pneumonia Dewasa Tahun 2025 untuk Penguatan Antimicrobial Stewardship",
    "ketua": "Dr. apt. Sondang Khairani, S.Farm., M.Farm.",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44600000,
    "dampak": "Kesehatan publik: antimicrobial stewardship di rumah sakit",
    "sdg": [
      3,
      17
    ],
    "zona": "D",
    "panel": 20,
    "judul0": "Tren Penggunaan, Kesesuaian Antibiotik Pasien Pneumonia Dewasa 2025 di RS Persahabatan dan RSUD Muhammad Sani Karimun untuk Penguatan Antimicrobial Stewardship"
  },
  {
    "no": 21,
    "judul": "Dekolorisasi Ekstrak Etanol Daun Kelor (Moringa oleifera L.) Menggunakan Karbon Aktif dan Pelarut Nonpolar",
    "ketua": "Dr. Dra. apt. Liliek Nurhidayati, M.Si.",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44800000,
    "dampak": "Hilirisasi: penguatan bahan baku lokal (kelor) untuk industri kosmetika",
    "sdg": [
      9,
      12
    ],
    "zona": "D",
    "panel": 21,
    "judul0": "Studi Dekolorisasi Ekstrak Daun Kelor (Moringa oleifera) sebagai Inovasi dalam Peningkatan Daya Saing Bahan Baku Lokal untuk Industri Kosmetika"
  },
  {
    "no": 22,
    "judul": "Integrasi Edukasi dan Dukungan Psikososial kepada Keluarga Pasien TBC sebagai Strategi Universitas Pancasila dan Puskesmas Ciracas dalam Program Kemitraan Masyarakat",
    "ketua": "Dr. apt. Rahmatul Qodriah, S.Farm., M.Farm.",
    "fak": "Fakultas Farmasi",
    "kat": "PKM",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Pengabdian Kepada Masyarakat",
    "dana": 19150000,
    "dampak": "Pengabdian: edukasi dan dukungan psikososial TB di Puskesmas Ciracas",
    "sdg": [
      3,
      17
    ],
    "zona": "E",
    "panel": 22,
    "judul0": "Integrasi Edukasi Hari TB Sedunia dan Dukungan Psikososial sebagai Strategi Puskesmas Ciracas dalam Program Kemitraan Masyarakat"
  },
  {
    "no": 23,
    "judul": "Model Perlindungan Hukum Terhadap Satwa Dalam Menghadapi Kerentanan Ekosistem Akibat Perubahan Iklim",
    "ketua": "Dr. Rury Octaviani, S.H., M.H.",
    "fak": "Fakultas Hukum",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Lingkungan-hukum: perlindungan satwa dan perubahan iklim",
    "sdg": [
      15,
      13,
      16
    ],
    "zona": "C",
    "panel": 23
  },
  {
    "no": 24,
    "judul": "Eksplorasi Indikator Fisiologis dan Kebahagiaan Digital sebagai Upaya Meningkatkan Produktivitas Tenaga Kerja Industri dengan Pendekatan Machine learning",
    "ketua": "Desinta Rahayu Ningtyas, S.T., M.T.",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 43800000,
    "dampak": "Terapan: produktivitas dan kesejahteraan pekerja industri",
    "sdg": [
      8,
      9
    ],
    "zona": "A",
    "panel": 24
  },
  {
    "no": 25,
    "judul": "Digital Twin Elektro–Termal Adaptif berbasis RL–MORL untuk Portable Charger PMSG Mandiri yang Efisien",
    "ketua": "Dr. Ainil Syafitri, S.T., M.T.",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 42350000,
    "dampak": "Inovasi teknologi: charger mandiri energi",
    "sdg": [
      7,
      9
    ],
    "zona": "A",
    "panel": 25,
    "judul0": "Digital Twin Elektro–Termal Adaptif berbasis RL-MORL untuk Portable Charger PMSG Mandiri yang Effisien"
  },
  {
    "ketua": "Belum tertera pada poster",
    "fak": null,
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "Penelitian Tesis Magister",
    "dana": 32050000,
    "dampak": "",
    "sdg": [
      16,
      17
    ],
    "judul": "Analisis Persepsi Masyarakat terhadap Respon Komunikasi Krisis Humas Polri dalam Kasus Band Sukatani",
    "no": 26,
    "zona": "C",
    "panel": 26
  },
  {
    "ketua": "Ionia Veritawati",
    "fak": "Fakultas Teknik",
    "kat": "PKM",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Pengabdian Kepada Masyarakat",
    "dana": 0,
    "dampak": "",
    "sdg": [
      8,
      9,
      11
    ],
    "judul": "Development of Mobile and Spatial Based Smart Community Applications to Improve the Community Economy",
    "no": 27,
    "zona": "E",
    "panel": 27
  },
  {
    "no": 28,
    "judul": "Pengembangan Model Deteksi Anomali Struktural Jembatan Baja KA Tua Berbasis Reduksi Derau Stokastik dan Algoritma Lightweight Machine Learning On-Device",
    "ketua": "Ir. Eka Maulana, M.M.",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44800000,
    "dampak": "Keselamatan: deteksi anomali struktur jembatan KA",
    "sdg": [
      9,
      11
    ],
    "zona": "A",
    "panel": 28
  },
  {
    "no": 29,
    "judul": "Reimagining Kawasan Gedung A.A. Maramis dan Lapangan Banteng sebagai World-Class Art Venue di Jakarta",
    "ketua": "Dr. Ir. Yuke Ardhiati, M.T.",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 44800000,
    "dampak": "Perkotaan-budaya: revitalisasi kawasan seni Jakarta",
    "sdg": [
      11,
      8
    ],
    "zona": "C",
    "panel": 29
  },
  {
    "no": 30,
    "judul": "Sustainable Supplier Selection for Potatoes in Potato Chips Agroindustry Using PROMETHEE and Digital Business Ecosystem",
    "ketua": "Dr. Ririn Regiana Dwi Satya, S.T., M.T.",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 42850000,
    "dampak": "Terapan: susut pascapanen agroindustri",
    "sdg": [
      2,
      12
    ],
    "zona": "A",
    "panel": 30,
    "judul0": "Model Interdependensi Antarrisiko Post Harvest Losses dalam Rantai Pasok Agroindustri Potato chips Menggunakan Fuzzy Interpretive Structural Modelling"
  },
  {
    "no": 31,
    "judul": "Model Kesehatan Mental Berbasis Komunitas: Kesejahteraan Psikologis Masyarakat Lokal dalam Konteks Mass Tourism (Pariwisata Masal) di Labuan Bajo",
    "ketua": "Dr. Ayu Dwi Nindyati, S.Psi., M.Si.",
    "fak": "Fakultas Psikologi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 43800000,
    "dampak": "Sosial: kesehatan mental komunitas di Labuan Bajo",
    "sdg": [
      3,
      11,
      8
    ],
    "zona": "D",
    "panel": 31
  },
  {
    "ketua": "Aprilianti Pratiwi",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 121660000,
    "dampak": "",
    "sdg": [
      11,
      16,
      10
    ],
    "judul": "Ruang Publik dan Perlawanan Budaya: Komunikasi Gerakan Masyarakat Kota Bandung, Jawa Barat dalam Konflik Lahan",
    "no": 32,
    "zona": "C",
    "panel": 32
  },
  {
    "no": 33,
    "judul": "Efektivitas Teknik Inokulasi dalam Mengurangi Kepercayaan terhadap Berita Palsu pada Komunitas Ibu PKK RW 05 Serengseng Sawah",
    "ketua": "Dr. Vinaya, S.Psi., M.Si.",
    "fak": "Fakultas Psikologi",
    "kat": "PKM",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Pengabdian Kepada Masyarakat",
    "dana": 19150000,
    "dampak": "Pengabdian: literasi hoaks Ibu PKK",
    "sdg": [
      16,
      4
    ],
    "zona": "E",
    "panel": 33,
    "judul0": "Efektifitas Teknik Inokulasi dalam Mengurangi Kepercayaan terhadap Berita Palsu pada komunitas Ibu PKK RW 05 Srengseng Sawah"
  },
  {
    "no": 34,
    "judul": "Era Post-Truth: Simulacrum Deepfake Politik di TikTok terhadap Selective Exposure dan Echo Chambers Kognitif Pemilih Indonesia",
    "ketua": "Joko Utomo Hadibroto, S.Sos., M.I.Kom.",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Sosial-politik: deepfake dan literasi pemilih",
    "sdg": [
      16
    ],
    "zona": "C",
    "panel": 34,
    "judul0": "Era Post-Truth: Simulacrum Deepfake Politik Di Tiktok Terhadap Selective Exposure Dan Echo Chambers Kognitif Pemilih Indonesia"
  },
  {
    "no": 35,
    "judul": "Model Literasi Digital untuk Ketahanan Informasi Masyarakat Urban",
    "ketua": "Nurul Hidayat, S.Sos., M.Han.",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Sosial: ketahanan informasi masyarakat urban",
    "sdg": [
      16,
      11
    ],
    "zona": "C",
    "panel": 35,
    "judul0": "Model Komunikasi Digital untuk Ketahanan Informasi Masyarakat Urban"
  },
  {
    "no": 36,
    "judul": "A Maestro-Based 3D Digital Heritage Framework for Preserving the Aesthetic Authenticity of Betawi Performing Arts: Case Study Tari Topeng Tunggal Betawi",
    "ketua": "Dr. Ir. Sarojini Imran, M.Si",
    "fak": "Fakultas Pariwisata",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Terapan",
    "dana": 34850000,
    "dampak": "Budaya: arsip digital seni pertunjukan Betawi",
    "sdg": [
      11,
      8
    ],
    "zona": "C",
    "panel": 36,
    "judul0": "Arsip Digital 3D Estetika Seni Pertunjukan WBTB Betawi Dalam Penguatan Pariwisata Budaya"
  },
  {
    "no": 37,
    "judul": "Peran Supermarket Tourism dalam mendukung Pengembangan Wisata Belanja Berbasis Produk Lokal",
    "ketua": "Dr. Yustisia Pasfatima Mbulu, S.ST.Par., M.Si.",
    "fak": "Fakultas Pariwisata",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental Reguler",
    "dana": 39850000,
    "dampak": "Ekonomi lokal: wisata belanja produk lokal",
    "sdg": [
      8,
      12
    ],
    "zona": "C",
    "panel": 37
  },
  {
    "no": 38,
    "judul": "Penerapan Digitalisasi Berbasis Aplikasi untuk Tari Keser Bojong dalam Pelestarian Budaya di Kampung Wisata Lembur Sawah Bogor",
    "ketua": "Nungky Puspita, S.E., M.M.",
    "fak": "Fakultas Pariwisata",
    "kat": "PKM",
    "kl": "Soshum",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Pengabdian Kepada Masyarakat",
    "dana": 19150000,
    "dampak": "Pengabdian: digitalisasi tari di kampung wisata",
    "sdg": [
      11,
      8
    ],
    "zona": "E",
    "panel": 38
  },
  {
    "no": 39,
    "judul": "Sintesis Hijau dan Karakterisasi Nanopartikel Seng Oksida (ZnO) Menggunakan Ekstrak Air Daun Sirih Merah (Piper porphyrophyllum)",
    "ketua": "Deni Rahmat",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PDD",
    "dana": 50120000,
    "dampak": "",
    "sdg": [
      3,
      9
    ],
    "zona": "D",
    "panel": 39,
    "judul0": "Sintesis Hijau Nanopartikel Zinc Oxide Menggunakan Ekstrak Daun Sirih Merah (Piper porphyrophyllum) sebagai Agen Bioreduktor untuk Pengembangan Gel Topikal Antiinflamasi"
  },
  {
    "no": 40,
    "judul": "Pengembangan Kandidat Obat Antiinflamasi Berbasis Propolis: Kombinasi Analisis Metabolomik, Uji Seluler, dan Pemodelan Komputasional",
    "ketua": "Diah Kartika Pratami",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 90000000,
    "dampak": "",
    "sdg": [
      3
    ],
    "zona": "D",
    "panel": 40
  },
  {
    "no": 41,
    "judul": "Potensi Kombinasi Glukomanan dan Ekstrak Daun Kelor sebagai Anti-Ulcerative Colitis pada Hewan Coba Mencit",
    "ketua": "Dian Ratih L",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 124060000,
    "dampak": "",
    "sdg": [
      3
    ],
    "zona": "D",
    "panel": 41,
    "judul0": "Potensi Kombinasi Glukomanan dan Ekstrak Daun Kelor sebagai Antiulcerative Colitis pada Hewan Coba Mencit"
  },
  {
    "no": 42,
    "judul": "Pengembangan Formula Paper Soap dengan Manfaat 3 in 1 (Pembersih, Antioksidan, dan Antibakteri) dengan Bahan Aktif Nanopartikel EHP-Kitosan",
    "ketua": "Esti Mumpuni",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PT-LP",
    "dana": 245770000,
    "dampak": "",
    "sdg": [
      3,
      12
    ],
    "zona": "D",
    "panel": 42,
    "judul0": "Pengembangan Formula Paper Soap dengan Manfaat 3 in 1 (Pembersih, Antioksidan, dan Antibakteri) dengan bahan aktif Nanopartikel EHP-Kitosan"
  },
  {
    "no": 43,
    "judul": "Eksplorasi Aktivitas Sitotoksik Kalkon dan Derivat Pirazolin serta Pengembangan dan Karakterisasi Nanoformulasi Kalkon",
    "ketua": "Moordiani",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PDP",
    "dana": 47470000,
    "dampak": "",
    "sdg": [
      3
    ],
    "zona": "D",
    "panel": 43,
    "judul0": "Eksplorasi Aktivitas Antikanker Derivat Pirazolin dari Kalkon α,β-Unsaturated Ketone dan Evaluasi Peran Nanoformulasi dalam Meningkatkan Aktivitas"
  },
  {
    "no": 44,
    "judul": "Pengembangan Koil RF Heksagonal Berbasis Substrat Rogers RT/duroid 5880 untuk MRI 1,5T/3T",
    "ketua": "Adhi Mahendra",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 122750000,
    "dampak": "",
    "sdg": [
      3,
      9
    ],
    "zona": "A",
    "panel": 44,
    "judul0": "Sintesis Konvergen Koil RF Dual-Resonansi 1,5T/3T Berbasis Substrat Dielektrik Tinggi: Analisis Karakteristik Elektromagnetik dan Miniaturisasi Geometri"
  },
  {
    "ketua": "Riza Darma Putra",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "PKM",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - PkM",
    "skema": "PKM",
    "dana": 0,
    "dampak": "",
    "sdg": [
      13,
      11,
      4
    ],
    "judul": "Membangun Keluarga Tangguh Bencana melalui Literasi Bencana Berbasis Komunikasi Risiko di Desa Bayah Barat, Kabupaten Lebak, Banten",
    "no": 45,
    "zona": "E",
    "panel": 45
  },
  {
    "ketua": "Ninuk Wiliani",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Internal UP",
    "hibah": "Hibah Internal",
    "skema": "Penelitian Fundamental",
    "dana": 0,
    "dampak": "",
    "sdg": [
      7,
      9
    ],
    "judul": "Pengaruh Karakteristik Fitur Tekstur terhadap Kinerja Model Deep Learning pada Klasifikasi Kerusakan Solar Panel",
    "no": 46,
    "zona": "A",
    "panel": 46
  },
  {
    "no": 47,
    "judul": "Pengembangan High Density Concrete (HDC) Berbasis Material Lokal Indonesia untuk Aplikasi Proteksi Radiasi dan Infrastruktur Berat",
    "ketua": "Jonbi",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PT-LP",
    "dana": 401940000,
    "dampak": "",
    "sdg": [
      9,
      11
    ],
    "zona": "A",
    "panel": 47,
    "judul0": "Pengembangan High Density Concrete (Hdc) Berbasis Material Lokal Indonesia Untuk Aplikasi Proteksi Radiasi Dan Infrastruktur Berat"
  },
  {
    "no": 48,
    "judul": "Pengembangan converter kit swap EV battery cooling menggunakan negative coefficient thermal energy material untuk ekosistem industri mobil listrik di Indonesia",
    "ketua": "Reza Abdu Rahman",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 109000000,
    "dampak": "",
    "sdg": [
      7,
      9,
      13
    ],
    "zona": "A",
    "panel": 48
  },
  {
    "no": 49,
    "judul": "Dari Influencer ke Relawan Digital: Kredibilitas Aktor dalam Narasi ‘Warga Bantu Warga’ pada Krisis Bencana Banjir Sumatera",
    "ketua": "Aprilianti Pratiwi",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PTM",
    "dana": 33190000,
    "dampak": "",
    "sdg": [
      13,
      11,
      17
    ],
    "zona": "C",
    "panel": 49
  },
  {
    "no": 50,
    "judul": "Pemetaan Narasi Warga tentang Program Makan Bergizi Gratis: Studi Kualitatif Komunikasi Krisis di Tingkat Komunitas",
    "ketua": "Aprilianti Pratiwi",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PTM",
    "dana": 31910000,
    "dampak": "",
    "sdg": [
      2,
      16
    ],
    "zona": "C",
    "panel": 50
  },
  {
    "no": 51,
    "judul": "Penguatan Modal Sosial melalui Kapabilitas Digital Partisipatif untuk CBT",
    "ketua": "Retor Aquinaldo Wirabuanaputera Kaligis",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 119640000,
    "dampak": "",
    "sdg": [
      8,
      17,
      11
    ],
    "zona": "C",
    "panel": 51,
    "judul0": "Penguatan Modal Sosial melalui Digital Storytelling dan Literasi Keuangan Digital Partisipatif untuk Pengembangan Community-Based Tourism Berbasis Digital di Kabupaten Bogor"
  },
  {
    "no": 52,
    "judul": "Co-Design Kearifan Lokal untuk Komunikasi Risiko Tsunami",
    "ketua": "Riza Darma Putra",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 134330000,
    "dampak": "",
    "sdg": [
      13,
      11,
      4
    ],
    "zona": "C",
    "panel": 52,
    "judul0": "Komunikasi Risiko Tsunami Partisipatif berbasis Boardgame dan Pengetahuan Lokal untuk meningkatkan Resiliensi Berkelanjutan di Pesisir Donggala dan lombok"
  },
  {
    "no": 53,
    "judul": "Kecerdasan Artifisial dan Praktik Pembelajaran Digital: Dampak yang Berbeda terhadap Capaian dan Kepuasan Belajar Mahasiswa Indonesia",
    "ketua": "Umar Halim",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - Penelitian",
    "skema": "PFR",
    "dana": 110540000,
    "dampak": "",
    "sdg": [
      10,
      9
    ],
    "zona": "C",
    "panel": 53,
    "judul0": "Inklusivitas Sosial-Digital dalam Peluang dan Hasil Digital di Kalangan Masyarakat"
  },
  {
    "ketua": "Riza Darma Putra",
    "fak": "Fakultas Ilmu Komunikasi",
    "kat": "Penelitian",
    "kl": "Soshum",
    "sumber": "SHAPE-SEA",
    "hibah": "SHAPE-SEA RGS 2026",
    "skema": "Student Category (M.A./PhD)",
    "dana": 0,
    "dampak": "",
    "sdg": [
      13,
      10,
      16
    ],
    "judul": "Komunikasi untuk Resiliensi: Photovoice bersama Komunitas Bajo Menghadapi Ekspansi Pertambangan",
    "no": 54,
    "zona": "C",
    "panel": 54
  },
  {
    "no": 55,
    "judul": "Pengembangan Kandang Cerdas Terintegrasi Berbasis IoT untuk Optimalisasi Kesehatan dan Produktivitas Kambing",
    "ketua": "Bambang Cahyadi",
    "fak": "Fakultas Teknik",
    "kat": "PKM",
    "kl": "IPTEKS",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - PkM",
    "skema": "PKM",
    "dana": 45910000,
    "dampak": "",
    "sdg": [
      2,
      9
    ],
    "zona": "E",
    "panel": 55
  },
  {
    "no": 56,
    "judul": "Pemanfaatan Sampah Organik untuk Produksi Pakan Ternak dan Ikan Lele sebagai Upaya Peningkatan Ekonomi dan Lingkungan Berkelanjutan",
    "ketua": "Dwi Ariyani",
    "fak": "Fakultas Teknik",
    "kat": "PKM",
    "kl": "IPTEKS",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - PkM",
    "skema": "PKM",
    "dana": 48310000,
    "dampak": "",
    "sdg": [
      12,
      2,
      8
    ],
    "zona": "E",
    "panel": 56,
    "judul0": "Pemanfaatan Sampah Organik Sisa Makan Bergizi Gratis (MBG) untuk Produksi Pakan Ternak dan Ikan Lele sebagai Upaya Peningkatan Ekonomi dan Lingkungan Berkelanjutan"
  },
  {
    "no": 57,
    "judul": "Peningkatan Kapasitas Produksi dan Penjualan Abon Lele melalui Penerapan Teknologi Mesin Pengaduk dan Pemasaran Digital",
    "ketua": "Nur Yulianti Hidayah",
    "fak": "Fakultas Teknik",
    "kat": "PKM",
    "kl": "IPTEKS",
    "sumber": "BIMA Kemdiktisaintek",
    "hibah": "BIMA - PkM",
    "skema": "PKM",
    "dana": 31840000,
    "dampak": "",
    "sdg": [
      8,
      12
    ],
    "zona": "E",
    "panel": 57,
    "judul0": "Peningkatan Kapasitas Produksi dan Penjualan Abon Lele Melalui Penerapan Teknologi Mesin Pengaduk dan Pemasaran Digital"
  },
  {
    "no": 58,
    "judul": "Pengembangan Produk Jamu Poliherbal menjadi OHT (Obat Herbal Terstandar) Anti-DM",
    "ketua": "Ni Made Dwi Sandhiutami",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "Kemdiktisaintek",
    "hibah": "Hilirisasi",
    "skema": "Inovasi sosial BOPTN",
    "dana": 187500000,
    "dampak": "",
    "sdg": [
      3,
      9
    ],
    "zona": "D",
    "panel": 58,
    "judul0": "Pengembangan Produk Jamu Poliherbal menjadi Obat Herbal Terstandar (OHT) sebagai Antidiabetes"
  },
  {
    "no": 59,
    "judul": "Engineered Cementitious Composite (ECC) Ramah Lingkungan melalui Chemical Enhancer Berbasis Semen Hijau",
    "ketua": "Jonbi",
    "fak": "Fakultas Teknik",
    "kat": "Penelitian",
    "kl": "IPTEKS",
    "sumber": "Kemdiktisaintek",
    "hibah": "Hilirisasi",
    "skema": "Ajakan Industri",
    "dana": 348099000,
    "dampak": "",
    "sdg": [
      9,
      13
    ],
    "zona": "A",
    "panel": 59,
    "judul0": "Pengembangan Engineered Cementitious Composite (ECC) ramah lingkungan melalui chemical enhancer berbasis Semen Hijau"
  },
  {
    "no": 60,
    "judul": "Inovasi Hilirisasi Kesehatan: Eksplorasi dan Saintifikasi Plant Derived Exosome-Like Nanoparticles (PDELNs) Jahe Merah sebagai Solusi Adjuvan pada Penyakit Paru Obstruksi Kronis (PPOK) dengan Manifestasi Eksaserbasi Akut",
    "ketua": "Ni Made Dwi Sandhiutami",
    "fak": "Fakultas Farmasi",
    "kat": "Penelitian",
    "kl": "Kesehatan",
    "sumber": "BRIN",
    "hibah": "RIIM",
    "skema": "Riset dan Inovasi untuk Indonesia Maju Kompetisi Gelombang X",
    "dana": 219700000,
    "dampak": "",
    "sdg": [
      3
    ],
    "zona": "D",
    "panel": 60
  }
];
/* ===== AKHIR KONFIGURASI ===== */

const SDGINFO = {
  1: ["Tanpa Kemiskinan", "#E5243B"],
  2: ["Tanpa Kelaparan", "#DDA63A"],
  3: ["Kehidupan Sehat dan Sejahtera", "#4C9F38"],
  4: ["Pendidikan Berkualitas", "#C5192D"],
  5: ["Kesetaraan Gender", "#FF3A21"],
  6: ["Air Bersih dan Sanitasi Layak", "#26BDE2"],
  7: ["Energi Bersih dan Terjangkau", "#FCC30B"],
  8: ["Pekerjaan Layak dan Pertumbuhan Ekonomi", "#A21942"],
  9: ["Industri, Inovasi dan Infrastruktur", "#FD6925"],
  10: ["Berkurangnya Kesenjangan", "#DD1367"],
  11: ["Kota dan Permukiman Berkelanjutan", "#FD9D24"],
  12: ["Konsumsi dan Produksi Bertanggung Jawab", "#BF8B2E"],
  13: ["Penanganan Perubahan Iklim", "#3F7E44"],
  14: ["Ekosistem Lautan", "#0A97D9"],
  15: ["Ekosistem Daratan", "#56C02B"],
  16: ["Perdamaian, Keadilan dan Kelembagaan Tangguh", "#00689D"],
  17: ["Kemitraan untuk Mencapai Tujuan", "#19486A"],
};
const KLASTER = {
  IPTEKS: "IPTEKS",
  Kesehatan: "Kesehatan",
  Soshum: "Sosial Humaniora",
};
// DENAH_SVG kini dipisahkan ke assets/js/denah-svg.js (dan file SVG assets/img/denah.svg)
var DENAH_SVG = typeof window !== "undefined" && window.DENAH_SVG ? window.DENAH_SVG : "";
const PANELS = {"1": [618, 200.0, 36, 34.7], "2": [618, 234.7, 36, 34.7], "3": [618, 269.5, 36, 34.7], "4": [618, 304.2, 36, 34.7], "5": [618, 338.9, 36, 34.7], "6": [618, 373.7, 36, 34.7], "7": [618, 408.4, 36, 34.7], "8": [618, 443.2, 36, 34.7], "9": [618, 477.9, 36, 34.7], "10": [618, 512.6, 36, 34.7], "11": [618, 547.4, 36, 34.7], "12": [618, 582.1, 36, 34.7], "13": [618, 616.8, 36, 34.7], "14": [618, 651.6, 36, 34.7], "15": [618, 686.3, 36, 34.7], "16": [618, 721.1, 36, 34.7], "17": [618, 755.8, 36, 34.7], "18": [618, 790.5, 36, 34.7], "19": [618, 825.3, 36, 34.7], "20": [593.7, 860, 22.3, 38], "21": [571.5, 860, 22.3, 38], "22": [549.2, 860, 22.3, 38], "23": [527.0, 860, 22.3, 38], "24": [504.7, 860, 22.3, 38], "25": [482.4, 860, 22.3, 38], "26": [460.2, 860, 22.3, 38], "27": [437.9, 860, 22.3, 38], "28": [415.7, 860, 22.3, 38], "29": [393.4, 860, 22.3, 38], "30": [371.1, 860, 22.3, 38], "31": [348.9, 860, 22.3, 38], "32": [326.6, 860, 22.3, 38], "33": [304.3, 860, 22.3, 38], "34": [282.1, 860, 22.3, 38], "35": [259.8, 860, 22.3, 38], "36": [237.6, 860, 22.3, 38], "37": [215.3, 860, 22.3, 38], "38": [193.0, 860, 22.3, 38], "39": [170.8, 860, 22.3, 38], "40": [148.5, 860, 22.3, 38], "41": [126.3, 860, 22.3, 38], "42": [104.0, 860, 22.3, 38], "43": [66, 859.2, 36, 38.8], "44": [66, 820.4, 36, 38.8], "45": [66, 781.7, 36, 38.8], "46": [66, 742.9, 36, 38.8], "47": [66, 704.1, 36, 38.8], "48": [66, 665.3, 36, 38.8], "49": [66, 626.6, 36, 38.8], "50": [66, 587.8, 36, 38.8], "51": [66, 549.0, 36, 38.8], "52": [66, 510.2, 36, 38.8], "53": [66, 471.4, 36, 38.8], "54": [66, 432.7, 36, 38.8], "55": [66, 393.9, 36, 38.8], "56": [66, 355.1, 36, 38.8], "57": [66, 316.3, 36, 38.8], "58": [66, 277.6, 36, 38.8], "59": [66, 238.8, 36, 38.8], "60": [66, 200.0, 36, 38.8]}; // nomor panel -> [x, y, lebar, tinggi] pada denah vektor 720x980 (nomor sama dengan label QR poster)
const AREA = [[1,6,"Dinding kanan aula, dekat pintu masuk"],[7,13,"Dinding kanan aula, depan tempat wudhu"],[14,19,"Dinding kanan aula, menuju sudut bawah"],[20,26,"Deret bawah aula, sisi kanan"],[27,35,"Deret bawah aula, bagian tengah"],[36,42,"Deret bawah aula, sisi kiri"],[43,48,"Dinding kiri aula, sudut bawah"],[49,55,"Dinding kiri aula, bagian tengah"],[56,60,"Dinding kiri aula, dekat pintu keluar"]];
const KCOL = { IPTEKS: "#1857C4", Kesehatan: "#0E8F82", Soshum: "#C77D00" };
const PERAN = {
  dosen: {
    nama: "Dosen Tendik",
    ket: "Skema dan kolaborasi",
    warna: "var(--r-dosen)",
  },
  rektorat: {
    nama: "Rektorat",
    ket: "Pimpinan & Pegawai",
    warna: "var(--r-rektorat)",
  },
  mahasiswa: {
    nama: "Mahasiswa",
    ket: "Topik dan inspirasi",
    warna: "var(--r-mahasiswa)",
  },
  mitra: {
    nama: "Mitra",
    ket: "Dampak dan hilirisasi",
    warna: "var(--r-mitra)",
  },
  umum: { nama: "Umum", ket: "Manfaat dan lokasi", warna: "var(--r-umum)" },
};
const TABS = [
  [
    "beranda",
    "Beranda",
    "M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  ],
  ["jelajah", "Jelajah", "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16l-4-4"],
  [
    "sdgs",
    "SDGs",
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  ],
  ["denah", "Denah", "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"],
  [
    "rute",
    "Rute",
    "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  ],
  [
    "umpan",
    "Umpan",
    "M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  ],
];

/* ---------- Utilitas ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem("up60." + k);
      return v == null ? d : JSON.parse(v);
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem("up60." + k, JSON.stringify(v));
    } catch (e) {}
  },
  del(k) {
    try {
      localStorage.removeItem("up60." + k);
    } catch (e) {}
  },
};
const rp = (n) =>
  n >= 1e9
    ? "Rp " + (n / 1e9).toFixed(2).replace(".", ",") + " miliar"
    : "Rp " +
      (n / 1e6).toFixed(1).replace(".", ",").replace(",0", "") +
      " juta";
const panelOf = (d) => (CONFIG.panel && CONFIG.panel[d.no]) || d.no;
const stan = (d) => "Panel " + panelOf(d);
const panelArea = (n) =>
  (AREA.find((a) => n >= a[0] && n <= a[1]) || [0, 0, ""])[2];
const fakOf = (d) => d.fak || "Belum tercantum";
const shortFak = (f) =>
  !f || f === "Belum tercantum" || f === "-"
    ? "UP"
    : f.replace(/^Fakultas\s+/i, "Fak. ");
const ink = (hex) => {
  const n = parseInt(hex.slice(1), 16),
    r = n >> 16,
    g = (n >> 8) & 255,
    b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 170 ? "#1a1a1a" : "#fff";
};
const sdgChip = (n) =>
  `<img class="sdg" src="assets/img/sdgs_logo/sdg-${n}.webp" alt="SDGs ${n}: ${esc(SDGINFO[n]?.[0] || "")}" title="SDGs ${n}: ${esc(SDGINFO[n]?.[0] || "")}" width="26" height="26" loading="lazy" />`;
const terapan = (d) =>
  d.hibah === "Hilirisasi" ||
  d.hibah === "RIIM" ||
  d.skema === "Penelitian Terapan" ||
  d.skema === "PT-LP" ||
  d.kat === "PKM";
const count = (arr, f) =>
  arr.reduce((m, x) => {
    const k = f(x);
    m[k] = (m[k] || 0) + 1;
    return m;
  }, {});

/* ---------- State ---------- */
const S = {
  tab: "beranda",
  peran: store.get("peran", ""),
  rute: store.get("rute", []),
  f: { q: "", kat: "", kl: "", sdg: "", fak: "" },
  att: {
    mode: "local",
    counts: { dosen: 0, mahasiswa: 0, mitra: 0, umum: 0 },
    hours: {},
    total: 0,
    ready: false,
    canWrite: true,
    uid: null,
    admin: false,
  },
  checked: store.get("hadir", false),
  isPanitia: store.get("panitia", false),
  stamp: store.get("stamp", {}),
  fb: { n: 0, avg: 0 },
  fbDone: store.get("umpan", false),
  nilai: 0,
  skip: false,
  map: {
    kat: "",
    kl: "",
    q: "",
    route: false,
    sel: 0,
    pending: 0,
    z: window.innerWidth < 700 ? 1.6 : 1,
  },
};
let lastFocus = null;

/* ---------- Navigasi ---------- */
function renderTabs() {
  $("#tabs").innerHTML = TABS.map(
    ([
      id,
      l,
      p,
    ]) => `<button data-go="${id}" ${S.tab === id ? 'aria-current="page"' : ""}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${p}"/></svg>${l}
    ${id === "rute" && S.rute.length ? `<span class="n">${S.rute.length}</span>` : ""}</button>`,
  ).join("");
}
function show(tab, opts = {}) {
  if (!TABS.some((t) => t[0] === tab) && tab !== "hadir" && tab !== "qrbooth" && tab !== "pengundian")
    tab = "beranda";
  S.tab = tab;
  document.documentElement.dataset.tab = tab;
  document
    .querySelectorAll("[data-view]")
    .forEach((el) => (el.hidden = el.dataset.view !== tab));
  renderTabs();
  render(tab);
  if (!opts.keep) window.scrollTo({ top: 0 });
}
function go(tab) {
  if (location.hash.slice(1) === tab) show(tab);
  else location.hash = tab;
}
window.addEventListener("hashchange", () => {
  const h = location.hash.slice(1);
  if (h.startsWith("b=")) {
    handleDeepCode(h.slice(2));
    return;
  }
  if (h === "daftar") {
    show("beranda");
    if (S.checked) toast("Anda sudah tercatat hadir");
    else openGate();
    return;
  }
  if (h === "umpan") {
    show("umpan");
    openFeedback();
    return;
  }
  show(h || "beranda");
});

/* ---------- Statistik kepala ---------- */
function renderStats() {
  const sdgUsed = new Set(DATA.flatMap((d) => d.sdg)).size;
  const pen = DATA.filter((d) => d.kat === "Penelitian").length;
  const pkm = DATA.length - pen;
  const att = effective().total;
  const isLive = S.att.mode !== "local";
  const attLabel = "Pengunjung hadir hari ini";

  $("#stats").innerHTML = `
    <div class="stats-grid">
      <div class="stat"><b class="num">${DATA.length}</b><span>Total Karya</span></div>
      <div class="stat"><b class="num">${pen}</b><span>Penelitian</span></div>
      <div class="stat"><b class="num">${pkm}</b><span>Pengabdian (PKM)</span></div>
      <div class="stat"><b class="num">${sdgUsed}</b><span>Poin SDGs</span></div>
    </div>
    <button class="stat-attend ${isLive ? "live" : ""}" data-go="hadir" aria-label="Lihat rincian kehadiran pameran">
      <span class="stat-attend-info">
        <span class="stat-attend-dot"></span>
        <span class="stat-attend-text"><b>${att}</b> ${attLabel}</span>
      </span>
      <span class="stat-attend-action">Rincian <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
    </button>
  `;
}

/* ---------- Peran ---------- */
function roleChooser() {
  return `<div class="roles" role="radiogroup" aria-label="Peran pengunjung">${Object.entries(
    PERAN,
  )
    .map(
      ([k, p]) =>
        `<button class="role" role="radio" aria-checked="${S.peran === k}" data-peran="${k}"><span class="role-name">${p.nama}</span><small>${p.ket}</small></button>`,
    )
    .join("")}</div>`;
}
const SOROT = {
  dosen: {
    judul: "Pendanaan Terbesar",
    ket: "Karya dengan pendanaan tertinggi untuk pertimbangan kolaborasi riset lanjutan.",
    pick: () => [...DATA].sort((a, b) => b.dana - a.dana).slice(0, 4),
  },
  rektorat: {
    judul: "Dampak Strategis & Unggulan Institusi",
    ket: "Karya inovasi berbobot strategis dengan capaian pendanaan, hilirisasi, dan kontribusi IKU tertinggi.",
    pick: () =>
      [...DATA]
        .sort((a, b) => b.dana - a.dana || b.sdg.length - a.sdg.length)
        .slice(0, 4),
  },
  mahasiswa: {
    judul: "Inspirasi Lintas Bidang",
    ket: "Karya perwakilan bidang dengan kaitan SDGs terluas sebagai referensi tugas akhir atau magang.",
    pick: () => {
      const out = [];
      [
        ["Soshum", "Penelitian"],
        ["Kesehatan", "Penelitian"],
        ["IPTEKS", "Penelitian"],
        ["IPTEKS", "PKM"],
      ].forEach(([kl, kat]) => {
        const c = DATA.filter((d) => d.kl === kl && d.kat === kat).sort(
          (a, b) => b.sdg.length - a.sdg.length || a.no - b.no,
        )[0];
        if (c) out.push(c);
      });
      return out;
    },
  },
  mitra: {
    judul: "Orientasi Terapan & Hilirisasi",
    ket: "Riset terapan, hilirisasi, dan PKM yang siap berkolaborasi dengan dunia industri dan mitra.",
    pick: () =>
      [...DATA]
        .filter(terapan)
        .sort(
          (a, b) =>
            (b.hibah === "Hilirisasi" || b.hibah === "RIIM") -
              (a.hibah === "Hilirisasi" || a.hibah === "RIIM") ||
            b.dana - a.dana,
        )
        .slice(0, 4),
  },
  umum: {
    judul: "Inovasi untuk Masyarakat",
    ket: "Program pengabdian masyarakat dan riset kesehatan yang manfaatnya langsung dirasakan publik.",
    pick: () =>
      [
        ...DATA.filter((d) => d.kat === "PKM"),
        ...DATA.filter((d) => d.kl === "Kesehatan" && d.kat === "Penelitian"),
      ].slice(0, 4),
  },
};

/* ---------- Kartu karya (isi menonjol sesuai peran) ---------- */
function workCard(d, opt = {}) {
  const p = S.peran,
    inRoute = S.rute.includes(d.no),
    panel = panelOf(d),
    rate = Rating.get(panel);
  let meta = "";
  if (p === "dosen" || p === "rektorat")
    meta = `<div class="meta"><div><span class="k">Skema</span><br>${esc(d.hibah)} · ${esc(d.skema)}</div><div><span class="k">Dana disetujui</span><br><b class="num">${rp(d.dana)}</b></div></div>`;
  else if (p === "mahasiswa")
    meta = `<div class="meta"><div class="chips">${d.sdg.map(sdgChip).join("")}</div><div class="who">${esc(shortFak(fakOf(d)))}</div></div>`;
  else if (p === "mitra")
    meta = `<div class="meta">${terapan(d) ? '<div><span class="badge">Orientasi terapan</span></div>' : ""}<div>${esc(d.dampak || "Hibah eksternal: " + d.sumber)}</div></div>`;
  else if (p === "umum")
    meta = `<div class="meta"><div>${esc(d.dampak || "Penelitian dengan pendanaan eksternal (" + d.sumber + ")")}</div></div>`;
  else meta = `<div class="chips">${d.sdg.map(sdgChip).join("")}</div>`;
  return `<article class="work">
    <div class="top">
      <span class="pill"><i class="dot"></i>${esc(d.kat)} · ${esc(KLASTER[d.kl])}</span>
      <span class="pill stan-pill">Panel ${panel}</span>
      ${
        S.stamp[panel]
          ? '<span class="pill ok quest-badge-tag done"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:2px"><polyline points="20 6 9 17 4 12"></polyline></svg>Stempel Diraih</span>'
          : '<span class="pill quest-badge-tag todo" style="opacity:0.85">🎯 Misi Booth</span>'
      }
    </div>
    <button style="all:unset;cursor:pointer;display:block;width:100%" data-open="${d.no}" aria-label="Buka detail karya ${d.no}">
      <h3 class="work-title">${esc(d.judul)}</h3>
    </button>
    <div class="who">${esc(d.ketua)}${p !== "mahasiswa" ? " · " + esc(shortFak(fakOf(d))) : ""}</div>
    ${meta}
    <div class="foot">
      <div class="rate-thumbs" role="group" aria-label="Apresiasi karya booth ${panel}">
        <button class="thumb-btn up ${rate.myVote === "up" ? "active" : ""}" data-rate="${panel}" data-vote="up" title="Sukai karya ini" aria-label="Sukai karya panel ${panel}">
          <span class="thumb-icon">👍</span>
          <span class="thumb-txt">Sukai</span>
          ${rate.up > 0 ? `<span class="thumb-cnt">${rate.up}</span>` : ""}
        </button>
      </div>
      <span class="row card-actions" style="gap:8px;margin-left:auto;justify-content:flex-end">
        <button class="maplink" data-map="${d.no}" aria-label="Lihat panel ${panel} di denah"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:3px"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg><u>Denah</u></button>
        ${inRoute ? '<span class="added">✓ Di Rute</span>' : `<button class="btn sm ghost" data-add="${d.no}">+ Rute</button>`}
        <button class="btn sm" data-open="${d.no}">Detail</button>
      </span>
    </div>
  </article>`;
}

/* ---------- Beranda (Decluttered & Gamifikasi Reward) ---------- */
function questCard(opt = {}) {
  const n = Object.keys(S.stamp).length;
  const target = BOOTH_N; // 60
  const pct = Math.min(100, Math.round((n / target) * 100));
  const done = store.get("undian", null);
  const inJelajah = !!opt.inJelajah;

  // Gamifikasi 5 Level (Bite-sized Sprints @ 15 Booths - Goal-Gradient Effect)
  let level = 1;
  let levelTitle = "Level 1: Penjelajah Pemula";
  let sprintMsg = `🚀 Langkah Awal: Tinggal <b>${15 - n} booth lagi</b> menuju Level 2.`;
  let desc = `Pindai QR di bawah poster setiap booth untuk kumpulkan stempel undian doorprize.`;

  if (n >= target) {
    level = 5;
    levelTitle = "Level 5: Calon Juara Undian";
    sprintMsg = "🏆 Target 60/60 Tercapai! Kupon Undian Siap Diundi.";
    desc = done
      ? `Kupon undian Anda resmi terdaftar: <b>#${esc(done.kode)}</b>. Simpan bukti ini untuk sesi pengundian doorprize!`
      : `Semua 60 booth selesai! Daftarkan kupon undian doorprize ${esc(CONFIG.undian.hadiah)} Anda sekarang.`;
  } else if (n >= 45) {
    level = 4;
    levelTitle = "Level 4: Hampir Juara";
    const sisa = 60 - n;
    sprintMsg = `🔥 Sprint akhir: Tinggal <b>${sisa} booth lagi</b> menuju Kupon Undian!`;
    desc = `Tinggal selangkah lagi untuk mengaktifkan kupon undian doorprize ${esc(CONFIG.undian.hadiah)}.`;
  } else if (n >= 30) {
    level = 3;
    levelTitle = "Level 3: Panutan";
    const sisa = 45 - n;
    sprintMsg = `⚡ Separuh tuntas! Tinggal <b>${sisa} booth lagi</b> menuju Level 4.`;
    desc = `Lebih dari separuh pameran telah dijelajahi. Teruskan langkah ke babak penentuan!`;
  } else if (n >= 15) {
    level = 2;
    levelTitle = "Level 2: Pantang Nyerah";
    const sisa = 30 - n;
    sprintMsg = `✨ Momentum bagus! Tinggal <b>${sisa} booth lagi</b> menuju Titik Separuh (30 Booth).`;
    desc = `Pertahankan ritme jelajah Anda dan temukan berbagai inovasi karya menarik.`;
  } else if (n > 0) {
    const sisa = 15 - n;
    sprintMsg = `🚀 Langkah awal! Tinggal <b>${sisa} booth lagi</b> menuju Level 2.`;
    desc = `Pindai QR di bawah poster setiap booth untuk kumpulkan stempel undian doorprize.`;
  }

  return `
  <div class="card quest-card" role="region" aria-label="Tantangan Berhadiah Booth">
    <div class="quest-top">
      <div class="quest-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>Misi Undian</span>
      </div>
      <div class="quest-reward">
        <span>Hadiah Undian</span>
        <b class="reward-val">${esc(CONFIG.undian.hadiah)}</b>
      </div>
    </div>

    <div class="quest-body">
      <div class="quest-headline-row">
        <h2 class="quest-title">Undian ${esc(CONFIG.undian.hadiah)}</h2>
        <span class="quest-tier-pill">${level === 5 ? "🏆 Master 60/60" : `Level ${level} • ${n}/${target}`}</span>
      </div>
      <div class="quest-tier-name">${esc(levelTitle)}</div>
      <div class="quest-sprint-badge">${sprintMsg}</div>
      <p class="quest-desc">${desc}</p>

      <div class="quest-progress-box">
        <div class="quest-prog-meta">
          <span class="quest-count"><b>${n}</b> / ${target} booth dikunjungi</span>
          <span class="quest-pct">${pct}%</span>
        </div>
        <div class="prog quest-prog-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${target}" aria-valuenow="${n}">
          <i style="width:${pct}%"></i>
        </div>
        <div class="quest-milestones-row">
          <div class="quest-milestone-item ${n >= 15 ? "reached" : level === 1 ? "current" : ""}">
            <span class="m-dot"></span>
            <span>15 (Pemula)</span>
          </div>
          <div class="quest-milestone-item ${n >= 30 ? "reached" : level === 2 ? "current" : ""}">
            <span class="m-dot"></span>
            <span>30 (Panutan)</span>
          </div>
          <div class="quest-milestone-item ${n >= 45 ? "reached" : level === 3 ? "current" : ""}">
            <span class="m-dot"></span>
            <span>45 (Hampir)</span>
          </div>
          <div class="quest-milestone-item ${n >= 60 ? "reached" : level === 4 ? "current" : ""}">
            <span class="m-dot"></span>
            <span>60 (Undian 🏆)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="quest-actions">
      ${!inJelajah ? '<button class="btn sm ghost" data-go="jelajah">Jelajah Booth</button>' : '<button class="btn sm ghost" data-go="denah">Lihat Denah</button>'}
      <button class="btn sm gold" data-act="scan">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="margin-right:4px"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
        Pindai QR
      </button>
      ${
        n >= target && !done
          ? '<button class="btn sm gold animate-pulse" data-act="undian">Daftar Undian</button>'
          : ""
      }
      ${done ? '<button class="btn sm ghost" data-act="undian">Kupon Saya</button>' : ""}
    </div>
  </div>`;
}

function openLppmStats() {
  const fak = Object.entries(count(DATA, fakOf)).sort((a, b) => b[1] - a[1]);
  const maxF = Math.max(...fak.map((x) => x[1]));
  const src = count(DATA, (d) => d.sumber);

  $("#layer").innerHTML = `
  <div class="scrim" data-close="1">
    <div class="sheet detail-sheet" role="dialog" aria-modal="true" aria-labelledby="lppm-t" style="max-height:85vh">
      <div class="sheet-handle-bar"></div>
      <div class="sheet-top-bar">
        <div class="sheet-badge-group">
          <span class="tag-pill"><i class="dot"></i>LPPM UP 60</span>
          <span class="tag-panel">Analisis Data</span>
        </div>
        <button class="x close-btn" data-close="1" aria-label="Tutup Dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="sheet-scroll-body" style="padding-bottom:24px">
        <h2 id="lppm-t" style="font-size:18px;font-weight:800;margin:0 0 4px">Statistik & Arsip Pameran</h2>
        <p style="margin:0 0 18px;color:var(--mut);font-size:14px">Distribusi karya berdasarkan fakultas pengusul dan skema sumber pendanaan.</p>

        <div class="card" style="margin-bottom:18px">
          <h3 style="font-size:15px;font-weight:700;margin:0 0 10px">Distribusi 8 Fakultas</h3>
          <div class="bars">
            ${fak
              .map(
                ([n, v]) =>
                  `<button class="bar" data-filter='${JSON.stringify({ fak: n === "Belum tercantum" ? "-" : n })}'><span class="t">${esc(n.replace("Fakultas ", ""))}</span><span class="tr"><i style="width:${(v / maxF) * 100}%"></i></span><span class="v num">${v}</span></button>`,
              )
              .join("")}
          </div>
        </div>

        <div class="card">
          <h3 style="font-size:15px;font-weight:700;margin:0 0 10px">Komposisi Sumber Pendanaan</h3>
          <div class="bars">
            ${Object.entries(src)
              .map(
                ([n, v]) =>
                  `<div class="bar"><span class="t">${esc(n)}</span><span class="tr"><i style="width:${(v / 60) * 100}%"></i></span><span class="v num">${v}</span></div>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ==========================================================================
   Rating & Apresiasi Booth (Thumbs Up / Down & Logging ke Google Sheets)
   ========================================================================== */
const Rating = {
  get(p) {
    p = Number(p);
    const ratings = store.get("ratings", {});
    const allStats = store.get("ratingStats", {}) || {};
    const s = allStats[p] || { up: 0, down: 0 };
    const myVote = ratings[p] || null;
    const total = (s.up || 0) + (s.down || 0);
    const pct = total ? Math.round(((s.up || 0) / total) * 100) : 100;
    return { up: s.up || 0, down: s.down || 0, myVote, pct };
  },

  vote(p, vote) {
    p = Number(p);
    const ratings = store.get("ratings", {});
    const allStats = store.get("ratingStats", {}) || {};
    if (!allStats[p]) allStats[p] = { up: 0, down: 0 };

    const oldVote = ratings[p];
    let nextState = "NONE";

    if (oldVote === vote) {
      // Pembatalan vote (Unvote) -> hapus dari ratings
      delete ratings[p];
      if (vote === "up" && allStats[p].up > 0) allStats[p].up--;
      if (vote === "down" && allStats[p].down > 0) allStats[p].down--;
      nextState = "NONE";
    } else {
      // Vote baru atau perpindahan suara (misal UP -> DOWN)
      if (oldVote === "up" && allStats[p].up > 0) allStats[p].up--;
      if (oldVote === "down" && allStats[p].down > 0) allStats[p].down--;
      ratings[p] = vote;
      if (vote === "up") allStats[p].up++;
      if (vote === "down") allStats[p].down++;
      nextState = vote.toUpperCase();
    }

    store.set("ratings", ratings);
    store.set("ratingStats", allStats);

    const d = DATA.find((x) => panelOf(x) === p);
    logRatingToGas({
      boothNo: p,
      boothJudul: d ? d.judul : "-",
      boothFak: d ? d.fak : "-",
      state: nextState,
      vote: nextState,
      totalUp: allStats[p].up,
      totalDown: allStats[p].down,
    });

    try {
      navigator.vibrate && navigator.vibrate(40);
    } catch (e) {}

    toast(
      nextState === "NONE"
        ? "Penilaian dibatalkan."
        : nextState === "UP"
        ? "Apresiasi 👍 dicatat! Terima kasih."
        : "Umpan balik 👎 dicatat! Terima kasih.",
    );

    if (S.tab === "beranda") viewBeranda();
    else if (S.tab === "jelajah") renderList();
    else render(S.tab);

    if ($("#layer") && $("#layer .detail-sheet") && d) {
      openDetail(d.no);
    }
  },

  getTopFav(limit = 3) {
    const allStats = store.get("ratingStats", {}) || {};
    return [...DATA]
      .map((d) => {
        const p = panelOf(d);
        const s = allStats[p] || { up: 0, down: 0 };
        const total = s.up + s.down;
        const pct = total ? Math.round((s.up / total) * 100) : 100;
        return { ...d, up: s.up, down: s.down, pct, p };
      })
      .filter((d) => d.up > 0)
      .sort((a, b) => b.up - a.up || a.p - b.p)
      .slice(0, limit);
  },

  async syncFromGas() {
    if (!CONFIG.gasUrl) return;
    try {
      const res = await fetch(CONFIG.gasUrl + "?action=ratingStats");
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.booths) {
        store.set("ratingStats", data.booths);
        if (S.tab === "beranda") viewBeranda();
        else if (S.tab === "jelajah") renderList();
      }
    } catch (e) {
      // offline / kendala jaringan, biarkan memakai cache localStorage
    }
  },
};

async function logRatingToGas(info) {
  const payload = {
    action: "rating",
    uid: Undi.id(),
    nama: store.get("nama", "-"),
    peran: S.peran || store.get("peran", "umum"),
    asal: store.get("asal", store.get("fakultas", "-")),
    t: new Date().toISOString(),
    ...info,
  };

  try {
    let queue = store.get("ratingQueue", []);
    // Coalesce / Idempotent: jika dalam antrean sudah ada permintaan untuk booth ini, ganti dengan state terakhir
    const existingIdx = queue.findIndex((x) => x.boothNo === payload.boothNo);
    if (existingIdx !== -1) {
      queue[existingIdx] = payload;
    } else {
      queue.push(payload);
    }
    store.set("ratingQueue", queue);
  } catch (e) {}

  flushRatingQueue();
}

let isFlushingRating = false;
async function flushRatingQueue() {
  if (isFlushingRating) return;
  if (!CONFIG.gasUrl && S.att.mode !== "gas") return;
  let queue = store.get("ratingQueue", []);
  if (!queue || !queue.length) return;

  isFlushingRating = true;
  const item = queue[0];
  try {
    if (S.att.mode === "gas" && window.google && google.script && google.script.run) {
      google.script.run
        .withSuccessHandler(() => {
          let q = store.get("ratingQueue", []);
          q.shift();
          store.set("ratingQueue", q);
          isFlushingRating = false;
          if (q.length) setTimeout(flushRatingQueue, 350);
          else setTimeout(() => Rating.syncFromGas(), 1000);
        })
        .withFailureHandler(() => {
          isFlushingRating = false;
        })
        .recordRating(item);
      return;
    }

    await fetch(CONFIG.gasUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(item),
    });

    let q = store.get("ratingQueue", []);
    q.shift();
    store.set("ratingQueue", q);
    isFlushingRating = false;
    if (q.length) setTimeout(flushRatingQueue, 350);
    else setTimeout(() => Rating.syncFromGas(), 1200);
  } catch (e) {
    isFlushingRating = false;
  }
}

window.addEventListener("online", flushRatingQueue);

function promptBoothRating(p) {
  const d = DATA.find((x) => panelOf(x) === p);
  if (!d) return;
  const rate = Rating.get(p);

  $("#layer").innerHTML = `
  <div class="scrim" data-close="1">
    <div class="sheet rating-sheet" role="dialog" aria-modal="true" aria-labelledby="rtt">
      <button class="x" data-close="1" aria-label="Tutup">×</button>
      <span class="rating-sheet-pill">Stempel Booth ${p} Tercatat ✨</span>
      <h3 id="rtt" class="rating-sheet-title">${esc(d.judul)}</h3>
      <div class="rating-sheet-sub">${esc(d.ketua)} · ${esc(shortFak(fakOf(d)))}</div>

      <div class="rating-box">
        <p class="rating-box-q">Bagaimana kesan Anda terhadap inovasi ini?</p>
        <div class="rating-choice-grid">
          <button class="rating-large-btn up ${rate.myVote === "up" ? "active" : ""}" data-rate="${p}" data-vote="up" data-autoclose="1">
            <span class="r-emoji">👍🏻</span>
            <span class="r-lbl">Sukai</span>
          </button>
        </div>
      </div>

      <div class="row" style="justify-content:center;margin-top:4px">
        <button class="rating-skip-btn" data-close="1" aria-label="Lewati rating dan lanjut menjelajah">Lanjut Menjelajah →</button>
      </div>
    </div>
  </div>`;
}

function favBoothsCard() {
  const top = Rating.getTopFav(3);
  if (!top || !top.length) return "";
  return `
  <section class="sec" aria-labelledby="sec-fav-title" style="margin-top:0">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
      <div>
        <h2 id="sec-fav-title" style="font-size:17px;font-weight:800;margin-bottom:2px">🏆 3 Booth Paling Favorit</h2>
        <p class="lead" style="margin:0">Karya inovasi dengan apresiasi jempol 👍 tertinggi dari pengunjung.</p>
      </div>
      <button class="link" data-go="jelajah" data-sort="fav" style="font-size:12.5px;font-weight:700;white-space:nowrap">Lihat Semua →</button>
    </div>
    <div class="fav-grid">
      ${top
        .map((d, idx) => {
          const rank = idx + 1;
          const medal =
            rank === 1
              ? "🥇 #1 Terfavorit"
              : rank === 2
                ? "🥈 #2 Favorit"
                : "🥉 #3 Favorit";
          return `
          <div class="fav-card" data-open="${d.no}" role="button" tabindex="0" aria-label="Buka karya ${esc(d.judul)}">
            <div class="fav-card-top">
              <span class="fav-rank-badge ${rank === 1 ? "rank-1" : ""}">${medal}</span>
              <span class="pill stan-pill" style="margin:0">Panel ${d.p}</span>
              <span class="rate-thumbs" style="margin-left:auto;pointer-events:none">
                <span class="thumb-btn up active">
                  <span class="thumb-icon">👍</span>
                  <span class="thumb-cnt">${d.up}</span>
                </span>
              </span>
            </div>
            <h3 class="fav-card-title">${esc(d.judul)}</h3>
            <div class="fav-card-sub">${esc(d.ketua)} · ${esc(shortFak(fakOf(d)))}</div>
          </div>`;
        })
        .join("")}
    </div>
  </section>`;
}

function viewBeranda() {
  const el = $("#v-beranda");
  const kats = ["Penelitian", "PKM"],
    kls = ["IPTEKS", "Kesehatan", "Soshum"];
  const cnt = count(DATA, (d) => d.kat + "|" + d.kl);
  const sg = SOROT[S.peran];

  el.innerHTML = `
  <div class="beranda-flow">
    <!-- Section 1: Hero Quest Card (Tantangan Berhadiah) -->
    ${questCard()}

    <!-- Section 2: Quick Navigation Mobile (Ergonomis Jempol Kanan) -->
    <nav class="quick-nav" aria-label="Aksi cepat beranda">
      <button class="quick-btn primary" data-go="jelajah" aria-label="Mulai jelajahi 60 karya">
        <svg class="quick-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <span>Jelajah Booth</span>
      </button>
      <button class="quick-btn" data-go="denah" aria-label="Buka denah booth pameran">
        <svg class="quick-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
        <span>Buka Denah</span>
      </button>
      <button class="quick-btn" data-go="rute" aria-label="Buka rute kunjungan Anda">
        <svg class="quick-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a4.5 4.5 0 0 0 0-9H7"></path><polyline points="10 6 7 9 10 12"></polyline></svg>
        <span>Rute Saya${S.rute.length ? ` <b class="quick-badge">${S.rute.length}</b>` : ""}</span>
      </button>
    </nav>

    <!-- Section 3: 3 Booth Terfavorit Pengunjung -->
    ${favBoothsCard()}

    <!-- Section 4: Rekomendasi Berdasarkan Peran -->
    <section class="sec" style="margin-top:0" aria-labelledby="sec-peran-title">
      <h2 id="sec-peran-title" style="font-size:17px;font-weight:800;margin-bottom:4px">Rekomendasi Sesuai Peran</h2>
      <p class="lead">${S.peran ? esc(SOROT[S.peran].ket) + " Ketuk peran lain untuk mengganti filter kurasi." : "Pilih peran Anda untuk mendapatkan rekomendasi booth pameran yang paling relevan."}</p>
      <div class="card" style="margin-top:8px">
        ${roleChooser()}
      </div>
    </section>

    <!-- Section 4: Sorotan Karya Terpilih (Sesuai Peran) -->
    ${
      sg
        ? `<section class="sec" aria-labelledby="sec-sorot-title">
            <h2 id="sec-sorot-title" style="font-size:17px;font-weight:800;margin-bottom:4px">${esc(sg.judul)}</h2>
            <p class="lead">${esc(sg.ket)}</p>
            <div class="grid">${sg.pick().map((d) => workCard(d)).join("")}</div>
          </section>`
        : `<section class="sec" aria-labelledby="sec-eksplor-title">
            <h2 id="sec-eksplor-title" style="font-size:17px;font-weight:800;margin-bottom:4px">Mulai Eksplorasi Pameran</h2>
            <p class="lead">Pilih peran di atas untuk kurasi khusus, atau langsung telusuri seluruh 60 booth karya inovasi.</p>
            <div style="display:flex;justify-content:flex-end">
              <button class="btn gold" data-go="jelajah">Jelajahi 60 Karya</button>
            </div>
          </section>`
    }

    <!-- Section 5: Peta Distribusi Zona Pameran (Matrix) -->
    <section class="sec" aria-labelledby="sec-distribusi-title">
      <h2 id="sec-distribusi-title" style="font-size:17px;font-weight:800;margin-bottom:4px">Peta Distribusi Karya</h2>
      <p class="lead">Sentuh salah satu kotak zona untuk langsung menyaring karya pameran.</p>
      <div class="card">
        <div class="matrix">
          <span></span>${kls.map((k) => `<span class="h">${KLASTER[k]}</span>`).join("")}
          ${kats
            .map(
              (kat) =>
                `<span class="rl">${kat}</span>` +
                kls
                  .map((kl) => {
                    const n = cnt[kat + "|" + kl] || 0;
                    return `<button class="cell ${n ? "" : "zero"}" data-filter='${JSON.stringify({ kat, kl })}'><b class="num">${n}</b><span>karya</span></button>`;
                  })
                  .join(""),
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Section 6: Statistik & Rekapitulasi LPPM (Rapi tanpa bikin sesak) -->
    <section class="sec lppm-archive-sec" aria-labelledby="sec-lppm-title">
      <div class="card lppm-banner-card">
        <div class="lppm-banner-meta">
          <span class="lppm-badge">Arsip & Analitik</span>
          <h3 id="sec-lppm-title" class="lppm-title">Statistik Fakultas & Sumber Pendanaan</h3>
          <p class="lppm-desc">Data sebaran 8 fakultas pengusul dan rincian hibah penelitian/PKM LPPM Universitas Pancasila.</p>
        </div>
        <div class="row card-actions" style="margin-top:12px;justify-content:flex-end">
          <button class="btn ghost sm" data-act="lppmStats">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="margin-right:5px"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            Buka Statistik Lengkap
          </button>
        </div>
      </div>
    </section>
  </div>`;
}
function journeyCard() {
  const seen = store.get("dilihat", []).length;
  const steps = [
    {
      ok: S.checked,
      t: "Daftar Hadir",
      s: S.checked
        ? "Kehadiran Anda sudah tercatat"
        : "Presensi pengunjung satu kali",
      a: 'data-act="gate"',
      b: "Daftar",
    },
    {
      ok: seen > 0,
      t: "Jelajahi Karya",
      s: seen
        ? seen + " karya sudah dibuka"
        : "Eksplorasi 60 riset & pengabdian",
      a: 'data-go="jelajah"',
      b: "Jelajah",
    },
    {
      ok: Object.keys(S.stamp).length >= BOOTH_N,
      t: "Pindai QR",
      s:
        Object.keys(S.stamp).length +
        " dari " +
        BOOTH_N +
        " booth · Syarat undian " +
        CONFIG.undian.hadiah,
      a: 'data-act="scan"',
      b: "Pindai",
    },
    {
      ok: S.rute.length > 0,
      t: "Susun Rute Kunjungan",
      s: S.rute.length
        ? S.rute.length + " karya di rute Anda"
        : "Tandai karya dan pantau di denah",
      a: 'data-go="rute"',
      b: "Rute",
    },
    {
      ok: S.fbDone,
      t: "Beri Umpan Balik",
      s: S.fbDone
        ? "Terima kasih atas penilaian Anda"
        : "Evaluasi singkat 1 menit",
      a: 'data-go="umpan"',
      b: "Isi",
    },
  ];
  const next = steps.findIndex((x) => !x.ok);
  return `<div class="card"><h2 style="font-size:16px;margin-bottom:10px">Alur Kunjungan Anda</h2><ol class="jr">${steps.map((x, i) => `<li class="${x.ok ? "done" : i === next ? "next" : ""}"><span class="n">${x.ok ? "✓" : i + 1}</span><span><span class="t">${x.t}</span><br><span class="s">${x.s}</span></span><button class="btn sm ${i === next ? "gold" : "ghost"}" ${x.a}>${x.ok ? "Buka" : x.b}</button></li>`).join("")}</ol></div>`;
}
function viewUmpan() {
  const seen = store.get("dilihat", []).length;
  const stampsCount = Object.keys(S.stamp).length;
  const target = BOOTH_N;
  const myFb = store.get("myFb", null);
  const doneUndian = store.get("undian", null);

  $("#v-umpan").innerHTML = `
    <div class="sec" style="margin-top:0">
      <h2>Selesai Berkunjung</h2>
      <p class="lead">Rangkuman perjalanan jelajah Anda di Gelar Karya 60 Tahun UP dan evaluasi pameran terpadu.</p>
    </div>

    <!-- Rekap Aktivitas Pengunjung (Stempel, Rute, Karya Dibuka) -->
    <div class="card" style="margin-bottom:14px;">
      <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;color:var(--ink)">Aktivitas Kunjungan Anda</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(130px, 1fr));gap:12px;margin-bottom:12px;">
        <div style="background:var(--tint);padding:10px 12px;border-radius:10px;">
          <span style="font-size:11px;color:var(--mut);text-transform:uppercase;font-weight:700;letter-spacing:0.02em;">Stempel Booth</span>
          <div style="font-size:24px;font-weight:800;color:var(--ink);margin-top:2px;">
            <b class="num">${stampsCount}</b><span style="font-size:14px;font-weight:500;color:var(--mut);"> / ${target}</span>
          </div>
          <small style="font-size:11.5px;color:${stampsCount >= target ? 'var(--ok, #15803d)' : 'var(--primary, #15459e)'};font-weight:700;">
            ${stampsCount >= target ? (doneUndian ? "🏆 Kupon Terdaftar" : "🏆 Siap Diundi") : `Tinggal ${target - stampsCount} lagi`}
          </small>
        </div>

        <div style="background:var(--tint);padding:10px 12px;border-radius:10px;">
          <span style="font-size:11px;color:var(--mut);text-transform:uppercase;font-weight:700;letter-spacing:0.02em;">Karya Dibuka</span>
          <div style="font-size:24px;font-weight:800;color:var(--ink);margin-top:2px;">
            <b class="num">${seen}</b><span style="font-size:14px;font-weight:500;color:var(--mut);"> karya</span>
          </div>
          <small style="font-size:11.5px;color:var(--mut);">Eksplorasi panel</small>
        </div>

        <div style="background:var(--tint);padding:10px 12px;border-radius:10px;">
          <span style="font-size:11px;color:var(--mut);text-transform:uppercase;font-weight:700;letter-spacing:0.02em;">Rute Pilihan</span>
          <div style="font-size:24px;font-weight:800;color:var(--ink);margin-top:2px;">
            <b class="num">${S.rute.length}</b><span style="font-size:14px;font-weight:500;color:var(--mut);"> karya</span>
          </div>
          <small style="font-size:11.5px;color:var(--mut);">Disimpan di rute</small>
        </div>
      </div>

      <div class="row card-actions" style="margin-top:10px;justify-content:flex-end;gap:8px;">
        <button class="btn ghost sm" data-go="jelajah">Jelajah Booth</button>
        <button class="btn ghost sm" data-go="rute">Lihat Rute Saya</button>
      </div>
    </div>

    ${myFbCard(myFb)}
    ${fbCard()}`;

  // Tarik data evaluasi pameran terkini secara live dari Google Sheets
  try {
    Fb.fetchLive();
  } catch (e) {}
}

/* ---------- Jelajah ---------- */
function filtered() {
  const f = S.f,
    q = f.q.trim().toLowerCase();
  let list = DATA.filter(
    (d) =>
      (!f.kat || d.kat === f.kat) &&
      (!f.kl || d.kl === f.kl) &&
      (!f.sdg || d.sdg.includes(+f.sdg)) &&
      (!f.fak || (f.fak === "-" ? !d.fak : d.fak === f.fak)) &&
      (!q ||
        (d.judul + " " + (d.judul0 || "") + " " + d.ketua + " " + (d.fak || "") + " " + d.skema)
          .toLowerCase()
          .includes(q)),
  );
  if (f.sort === "fav") {
    const stats = store.get("ratingStats", {}) || {};
    list = [...list].sort((a, b) => {
      const upA = stats[panelOf(a)]?.up || 0;
      const upB = stats[panelOf(b)]?.up || 0;
      return upB - upA || a.no - b.no;
    });
  }
  return list;
}
function viewJelajah() {
  const el = $("#v-jelajah"),
    f = S.f;
  const faks = [...new Set(DATA.map((d) => d.fak).filter(Boolean))].sort();
  if (!el.dataset.built) {
    el.dataset.built = 1;
    el.innerHTML = `<div class="tools">
      <label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input id="q" type="search" placeholder="Cari karya, peneliti, atau fakultas..." autocomplete="off" aria-label="Cari karya"></label>
      <div id="stampj"></div>
      <div class="seg" id="segKat" role="group" aria-label="Jenis karya"></div>
      <div class="seg" id="segKl" role="group" aria-label="Bidang"></div>
      <div class="sels"><select id="selSdg" aria-label="Filter SDGs"><option value="">Semua SDGs</option>${Object.entries(
        SDGINFO,
      )
        .map(
          ([n, [l]]) => `<option value="${n}">SDGs ${n} · ${esc(l)}</option>`,
        )
        .join("")}</select>
      <select id="selFak" aria-label="Filter fakultas"><option value="">Semua fakultas</option>${faks.map((x) => `<option value="${esc(x)}">${esc(shortFak(x))}</option>`).join("")}${DATA.some((d) => !d.fak) ? '<option value="-">Belum tercantum</option>' : ""}</select></div>
    </div><div class="count count-bar"><span class="count-label" id="cnt"></span><div class="count-actions"><button type="button" class="btn-sort-fav ${f.sort === "fav" ? "active" : ""}" data-sort="fav" aria-pressed="${f.sort === "fav"}" title="Urutkan berdasarkan jumlah bintang"><span class="sort-icon">${f.sort === "fav" ? "✓" : "⭐"}</span><span class="sort-text">${f.sort === "fav" ? "Terfavorit" : "Urutkan Terfavorit"}</span></button><button type="button" class="btn-reset-filter" data-act="reset" title="Atur ulang filter"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg><span>Atur Ulang</span></button></div></div><div class="grid" id="list"></div>`;
    $("#q").addEventListener("input", (e) => {
      S.f.q = e.target.value;
      renderList();
    });
    $("#selSdg").addEventListener("change", (e) => {
      S.f.sdg = e.target.value;
      renderList();
    });
    $("#selFak").addEventListener("change", (e) => {
      S.f.fak = e.target.value;
      renderList();
    });
  }
  $("#stampj").innerHTML = stampCard();
  $("#q").value = f.q;
  $("#selSdg").value = f.sdg;
  $("#selFak").value = f.fak;
  renderList();
}
function renderList() {
  const f = S.f;
  $("#segKat").innerHTML = [
    ["", "Semua"],
    ["Penelitian", "Penelitian"],
    ["PKM", "PKM"],
  ]
    .map(
      ([v, l]) =>
        `<button data-seg="kat" data-v="${v}" aria-pressed="${f.kat === v}">${l}</button>`,
    )
    .join("");
  $("#segKl").innerHTML = [
    ["", "Semua"],
    ["IPTEKS", "IPTEKS"],
    ["Kesehatan", "Kesehatan"],
    ["Soshum", "Soshum"],
  ]
    .map(
      ([v, l]) =>
        `<button data-seg="kl" data-v="${v}" aria-pressed="${f.kl === v}">${l}</button>`,
    )
    .join("");
  const list = filtered();
  $("#cnt").textContent = list.length + " dari " + DATA.length + " karya";
  const sortBtn = $(".btn-sort-fav");
  if (sortBtn) {
    const isFav = f.sort === "fav";
    sortBtn.classList.toggle("active", isFav);
    sortBtn.setAttribute("aria-pressed", isFav ? "true" : "false");
    const icon = sortBtn.querySelector(".sort-icon");
    const txt = sortBtn.querySelector(".sort-text");
    if (icon) icon.textContent = isFav ? "✓" : "⭐";
    if (txt) txt.textContent = isFav ? "Terfavorit" : "Urutkan Terfavorit";
  }
  $("#list").innerHTML = list.length
    ? list.map((d) => workCard(d)).join("")
    : `<div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <p class="empty-title">Tidak ada karya yang sesuai</p>
        <p class="empty-sub">Coba ubah kata kunci atau atur ulang filter pencarian.</p>
        <button class="btn sm gold" data-act="reset">Atur Ulang Filter</button>
      </div>`;
}

/* ---------- SDGs ---------- */
function viewSdgs() {
  const c = count(
    DATA.flatMap((d) => d.sdg),
    (x) => x,
  );
  const activeEntries = Object.entries(SDGINFO).filter(([n]) => (c[n] || 0) > 0);
  $("#v-sdgs").innerHTML =
    `<div class="sec" style="margin-top:0"><h2>Keterkaitan SDGs</h2><p class="lead">Ketuk salah satu untuk melihat daftar booth terkait.</p></div>
  <div class="sdgs">${activeEntries
    .map(([n, [l]]) => {
      const v = c[n] || 0;
      return `<button class="sdgt" data-open-sdg="${n}" aria-label="SDGs ${n}: ${esc(l)}, ${v} karya">
        <div class="sdgt-head">
          <img src="assets/img/sdgs_logo/sdg-${n}.webp" alt="SDGs ${n}: ${esc(l)}" class="sdgt-icon" width="52" height="52" loading="lazy" />
          <span class="c">${v} karya</span>
        </div>
        <div class="sdgt-body">
          <span class="n num">SDGs ${n}</span>
          <span class="l">${esc(l)}</span>
        </div>
      </button>`;
    })
    .join("")}</div>`;
}

/* ---------- Denah interaktif ---------- */
function viewDenah() {
  const el = $("#v-denah"),
    m = S.map;
  if (!el.dataset.built) {
    el.dataset.built = 1;
    el.innerHTML = `<div class="sec" style="margin-top:0"><h2>Denah Pameran</h2><p class="lead">Sentuh nomor panel untuk melihat detail karya. Warna menunjukkan bidang. Geser dan cubit peta untuk eksplorasi.</p></div>
    <div class="tools">
      <label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input id="mq" type="search" inputmode="search" placeholder="Cari nomor panel, judul, atau peneliti..." autocomplete="off" aria-label="Cari panel"></label>
      <div class="chiprow"><div class="seg" id="mseg" role="group" aria-label="Jenis karya"></div>
      <div class="leg" id="mleg"></div></div>
      <div class="row mrow" style="justify-content:space-between;flex-wrap:nowrap;align-items:center"><span id="mcnt" style="font-size:13.5px;color:var(--mut);font-weight:600"></span><span class="zoom">Zoom <button data-mz="-" aria-label="Perkecil">−</button><button data-mz="+" aria-label="Perbesar">+</button></span></div>
    </div>
    <div class="mapwrap" id="mapwrap" style="margin-top:10px"><svg id="mapsvg" viewBox="0 0 720 980" role="group" aria-label="Denah pameran dengan 60 panel poster A0"><defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#fff" stroke-width="2.4" stroke-opacity=".8"/></pattern></defs>${DENAH_SVG}<g id="ov"></g></svg></div>
    <p class="maphint" style="color:var(--mut);font-size:13px;margin:10px 0 0">Pintu masuk di kanan atas, pintu keluar di kiri atas. Nomor mengikuti arah jalan: 1–19 dinding kanan, 20–42 deret bawah, 43–60 dinding kiri.</p>`;
    pinchInit($("#mapwrap"));
    $("#mq").addEventListener("input", (e) => {
      S.map.q = e.target.value;
      renderMap();
      const hit = matchPanels();
      if (hit.length === 1) focusPanel(hit[0].no);
    });
  }
  $("#mq").value = m.q;
  renderMap();
  if (m.pending) {
    const n = m.pending;
    m.pending = 0;
    setTimeout(() => focusPanel(n), 50);
  } else if (!el.dataset.pos) {
    el.dataset.pos = 1;
    const k = $("#mapsvg").getBoundingClientRect().width / 720;
    $("#mapwrap").scrollTop = 40 * k;
  }
}
function pinchInit(w) {
  let d0 = 0,
    z0 = 1,
    c = null;
  const dist = (t) =>
    Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  w.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 2) {
        d0 = dist(e.touches);
        z0 = S.map.z;
        const r = w.getBoundingClientRect(),
          mx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left,
          my = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top,
          W = $("#mapsvg").getBoundingClientRect().width;
        c = { mx, my, fx: (w.scrollLeft + mx) / W, fy: (w.scrollTop + my) / W };
      }
    },
    { passive: true },
  );
  w.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length !== 2 || !d0) return;
      e.preventDefault();
      const z = Math.max(1, Math.min(4, (z0 * dist(e.touches)) / d0));
      S.map.z = z;
      const svg = $("#mapsvg");
      svg.style.width = z * 100 + "%";
      const W = svg.getBoundingClientRect().width;
      w.scrollLeft = c.fx * W - c.mx;
      w.scrollTop = c.fy * W - c.my;
    },
    { passive: false },
  );
  w.addEventListener(
    "touchend",
    (e) => {
      if (e.touches.length < 2) d0 = 0;
    },
    { passive: true },
  );
}
function matchPanels() {
  const m = S.map,
    q = m.q.trim().toLowerCase();
  return DATA.filter(
    (d) =>
      (!m.kat || d.kat === m.kat) &&
      (!m.kl || d.kl === m.kl) &&
      (!m.route || S.rute.includes(d.no)) &&
      (!q ||
        String(panelOf(d)) === q ||
        (d.judul + " " + (d.judul0 || "") + " " + d.ketua).toLowerCase().includes(q)),
  );
}
function renderMap() {
  if (!$("#ov")) return;
  const m = S.map,
    hit = new Set(matchPanels().map((d) => d.no));
  const order = [...S.rute]
    .map((n) => DATA.find((d) => d.no === n))
    .filter(Boolean)
    .sort((a, b) => panelOf(a) - panelOf(b))
    .map((d) => d.no);
  let g = "";
  DATA.forEach((d) => {
    const r = PANELS[panelOf(d)];
    if (!r) return;
    const [x, y, w, h] = r,
      on = hit.has(d.no),
      inR = S.rute.includes(d.no),
      cx = x + w / 2,
      cy = y + h / 2;
    g += `<rect class="pn" x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${on ? KCOL[d.kl] : "#DCE2EC"}" fill-opacity="${on ? 0.96 : 0.92}" data-open="${d.no}" tabindex="0" role="button" aria-label="Panel ${panelOf(d)}: ${esc(d.judul)}" ${inR ? 'stroke="#F5A800" stroke-width="3"' : ""}/>`;
    if (d.kat === "PKM")
      g += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="url(#hatch)" fill-opacity="${on ? 1 : 0.25}" pointer-events="none"/>`;
    g += `<text x="${cx}" y="${cy + 0.5}" text-anchor="middle" dominant-baseline="central" font-size="${w < 26 || h < 26 ? 11.5 : 13}" font-weight="800" fill="${on ? "#fff" : "#6B7686"}" font-family="system-ui,Arial,sans-serif" pointer-events="none">${panelOf(d)}</text>`;
  });
  DATA.forEach((d) => {
    if (!S.stamp[panelOf(d)]) return;
    const r = PANELS[panelOf(d)];
    if (!r) return;
    const bx = r[0] + 3,
      by = r[1] + 3;
    g += `<circle cx="${bx}" cy="${by}" r="7" fill="#0F7B4B" stroke="#fff" stroke-width="1.5" pointer-events="none"/><path d="M${bx - 3} ${by} l2 2.2 l4 -4.4" fill="none" stroke="#fff" stroke-width="1.8" pointer-events="none"/>`;
  });
  order.forEach((no, i) => {
    const d = DATA.find((x) => x.no === no),
      r = PANELS[panelOf(d)];
    if (!r) return;
    const bx = r[0] + r[2] - 2,
      by = r[1] + 3;
    g += `<circle cx="${bx}" cy="${by}" r="8" fill="#F5A800" stroke="#fff" stroke-width="1.5" pointer-events="none"/><text x="${bx}" y="${by + 0.5}" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="800" fill="#2E1F00" pointer-events="none">${i + 1}</text>`;
  });
  if (m.sel && PANELS[panelOf(DATA.find((d) => d.no === m.sel) || { no: 0 })]) {
    const r = PANELS[panelOf(DATA.find((d) => d.no === m.sel))];
    g += `<rect class="sel" x="${r[0] - 3}" y="${r[1] - 3}" width="${r[2] + 6}" height="${r[3] + 6}" rx="4"/>`;
  }
  $("#ov").innerHTML = g;
  $("#mseg").innerHTML = [
    ["", "Semua"],
    ["Penelitian", "Penelitian"],
    ["PKM", "PKM"],
  ]
    .map(
      ([v, l]) =>
        `<button data-mseg="${v}" aria-pressed="${m.kat === v}">${l}</button>`,
    )
    .join("");
  $("#mleg").innerHTML =
    Object.keys(KCOL)
      .map(
        (k) =>
          `<button data-mkl="${k}" aria-pressed="${m.kl === k}"><i style="background:${KCOL[k]}"></i>${esc(KLASTER[k])}</button>`,
      )
      .join("") +
    `<button data-mroute="1" aria-pressed="${m.route}"><i style="background:#F5A800"></i>Rute saya (${S.rute.length})</button>`;
  $("#mcnt").textContent = hit.size + " dari " + DATA.length + " panel";
  const z = m.z;
  $("#mapsvg").style.width = z * 100 + "%";
}
function zoomMap(dir) {
  const Z = [1, 1.6, 2.2, 3];
  let i = Z.findIndex((v) => v >= S.map.z - 0.01);
  if (i < 0) i = 0;
  i = Math.max(0, Math.min(Z.length - 1, i + (dir === "+" ? 1 : -1)));
  S.map.z = Z[i];
  renderMap();
  if (S.map.sel) focusPanel(S.map.sel, true);
}
function focusPanel(no, instant) {
  const d = DATA.find((x) => x.no === no);
  if (!d) return;
  const r = PANELS[panelOf(d)];
  if (!r) return;
  S.map.sel = no;
  renderMap();
  const wrap = $("#mapwrap"),
    svg = $("#mapsvg");
  if (!wrap || !svg) return;
  const k = svg.getBoundingClientRect().width / 720;
  wrap.scrollTo({
    left: (r[0] + r[2] / 2) * k - wrap.clientWidth / 2,
    top: (r[1] + r[3] / 2) * k - wrap.clientHeight / 2,
    behavior: instant ? "auto" : "smooth",
  });
}
function showOnMap(no) {
  closeLayer();
  S.map = {
    ...S.map,
    kat: "",
    kl: "",
    q: "",
    route: false,
    sel: no,
    pending: no,
    z: 2.2, // Otomatis perbesar/zoom in agar lokasi booth langsung fokus dan jelas
  };
  if (S.tab === "denah") viewDenah();
  else go("denah");
}
document.addEventListener("keydown", (e) => {
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.classList &&
    e.target.classList.contains("pn")
  ) {
    e.preventDefault();
    openDetail(+e.target.dataset.open);
  }
});

/* ---------- Rute ---------- */
function viewRute() {
  const items = S.rute
    .map((n) => DATA.find((d) => d.no === n))
    .filter(Boolean)
    .sort((a, b) => panelOf(a) - panelOf(b));

  if (!items.length) {
    $("#v-rute").innerHTML = `
      <div class="sec" style="margin-top:0">
        <h2>Rute Kunjungan</h2>
        <p class="lead">Simpan karya yang ingin Anda kunjungi agar alur langkah pameran lebih efisien.</p>
      </div>
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="6" cy="19" r="3"></circle>
            <path d="M9 19h8.5a4.5 4.5 0 0 0 0-9H7"></path>
            <polyline points="10 6 7 9 10 12"></polyline>
          </svg>
        </div>
        <p class="empty-title">Rute Kunjungan Masih Kosong</p>
        <p class="empty-sub">Pilih "+ Rute" pada kartu karya di menu Jelajah untuk menyusun rencana kunjungan Anda.</p>
        <button class="btn sm gold" data-go="jelajah">Jelajahi Karya</button>
      </div>`;
    return;
  }

  const estMin = items.length * 4;
  $("#v-rute").innerHTML = `
    <div class="sec" style="margin-top:0">
      <h2>Rute Kunjungan</h2>
      <p class="lead">${items.length} booth tersimpan · Estimasi ~${estMin} menit. Urutan otomatis disesuaikan denah.</p>
    </div>

    <div class="row card-actions" style="margin-bottom:14px; gap:8px; justify-content:flex-end;">
      <button class="btn sm ghost" data-act="copyRute">Salin Rute</button>
      <button class="btn sm ghost" data-act="clearRute" style="color:var(--err)">Hapus Semua</button>
      <button class="btn sm gold" data-act="routeMap">Lihat di Denah</button>
    </div>

    <div class="grid">
      ${items
        .map(
          (d, i) => `
        <article class="work">
          <div class="top">
            <span class="pill stan-pill">Langkah ${i + 1} · Panel ${panelOf(d)}</span>
            <span class="pill"><i class="dot"></i>${esc(d.kat)} · ${esc(KLASTER[d.kl])}</span>
            ${S.stamp[panelOf(d)] ? '<span class="pill ok">✓ Dikunjungi</span>' : ""}
          </div>
          <button style="all:unset;cursor:pointer;display:block;width:100%" data-open="${d.no}" aria-label="Buka detail karya ${d.no}">
            <h3 class="work-title">${esc(d.judul)}</h3>
          </button>
          <div class="who">${esc(d.ketua)} · <span class="fak-text">${esc(shortFak(fakOf(d)))}</span></div>
          <div class="foot">
            <button class="maplink" data-map="${d.no}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:3px"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg><u>Lihat di Denah</u></button>
            <span class="row card-actions" style="gap:8px;margin-left:auto;justify-content:flex-end">
              <button class="btn sm ghost" data-del="${d.no}">Hapus</button>
              <button class="btn sm" data-open="${d.no}">Detail</button>
            </span>
          </div>
        </article>`,
        )
        .join("")}
    </div>

    <div class="row card-actions" style="margin-top:16px; gap:8px; justify-content:flex-end;">
      <button class="btn ghost" data-act="copyRute">Salin Rute</button>
      <button class="btn gold" data-act="routeMap">Tampilkan di Denah</button>
    </div>`;
}

/* ---------- Detail ---------- */
function openDetail(no) {
  const d = DATA.find((x) => x.no === no);
  if (!d) return;
  {
    const v = store.get("dilihat", []);
    if (!v.includes(no)) {
      v.push(no);
      store.set("dilihat", v);
    }
  }
  lastFocus = document.activeElement;
  const p = S.peran,
    inRoute = S.rute.includes(d.no);

  const cleanName = (d.ketua || "")
    .replace(/(Prof|Dr|Dra|Drs|Ir|apt|H\.|Hj\.)\b/gi, "")
    .replace(/,[^,]+$/g, "")
    .trim();
  const parts = cleanName.split(/\s+/).filter((w) => /^[a-zA-Z]/.test(w));
  const initials =
    (parts.length >= 2
      ? parts[0][0] + parts[parts.length - 1][0]
      : cleanName.slice(0, 2)
    ).toUpperCase() || "UP";

  const pNum = String(panelOf(d)).padStart(2, "0");
  const pArea = panelArea(panelOf(d)) || "Pameran";
  const isStamped = !!S.stamp[panelOf(d)];

  const cta =
    {
      rektorat: "Pantau inovasi unggulan",
      dosen: "Catat untuk kolaborasi",
      mahasiswa: "Simpan sebagai inspirasi",
      mitra: "Catat untuk kemitraan",
      umum: "Tandai untuk dikunjungi",
    }[p] || "Tambah ke rute";

  const sdgHtml =
    Array.isArray(d.sdg) && d.sdg.length
      ? d.sdg
          .map((n) => {
            const relCount = DATA.filter(
              (x) => Array.isArray(x.sdg) && x.sdg.includes(n),
            ).length;
            return `
        <div class="sdg-chip-row" data-open-sdg="${n}" data-from="${d.no}" role="button" tabindex="0" aria-label="Lihat ${relCount} karya terkait SDGs ${n}">
          <div class="sdg-chip-left">
            <img src="assets/img/sdgs_logo/sdg-${n}.webp" alt="SDGs ${n}" width="28" height="28" loading="lazy">
            <div class="sdg-chip-meta">
              <span class="sdg-chip-title">SDGs ${n} · ${esc(SDGINFO[n]?.[0] || "Tujuan PBB")}</span>
              <span class="sdg-chip-sub">${relCount} booth pameran terkait</span>
            </div>
          </div>
          <div class="sdg-chip-right">
            <span>Lihat booth</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>`;
          })
          .join("")
      : `<div style="font-size:12px;color:var(--mut)">Tidak ada SDGs terkait yang dispesifikasikan.</div>`;

  $("#layer").innerHTML = `
    <div class="scrim" data-close="1">
      <article class="sheet detail-sheet" role="dialog" aria-modal="true" aria-labelledby="dt">
        <div class="sheet-handle-bar"></div>

        <div class="sheet-top-bar">
          <div class="sheet-badge-group">
            <span class="tag-pill">
              <i class="dot"></i>
              ${esc(d.kat)} · ${esc(KLASTER[d.kl])}
            </span>
            <span class="tag-panel">
              Booth #${pNum}
            </span>
          </div>
          <button class="x close-btn" data-close="1" aria-label="Tutup Dialog">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="sheet-scroll-body">
          <div class="hero-card">
            <h2 class="hero-title" id="dt">${esc(d.judul)}</h2>
            <div class="researcher-row">
              <div class="researcher-avatar">${esc(initials)}</div>
              <div class="researcher-meta">
                <span class="researcher-name">${esc(d.ketua)}</span>
                <span class="researcher-fak">${esc(fakOf(d))}</span>
              </div>
            </div>
          </div>

          <div class="loc-card">
            <div class="loc-left">
              <div class="loc-panel-num">${pNum}</div>
              <div class="loc-info">
                <div class="loc-info-title">Panel Poster A0 · ${esc(pArea)}</div>
                <div class="loc-info-sub">${isStamped ? "Stempel misi tersimpan · Menambah peluang undian " + esc(CONFIG.undian.hadiah) : "Kunjungi booth fisik ini dan pindai kode QR untuk klaim stempel!"}</div>
              </div>
            </div>
            ${
              isStamped
                ? '<div class="loc-status-pill ok">✓ Stempel Diraih</div>'
                : '<button class="btn sm gold" data-act="scan" style="margin-left:auto;white-space:nowrap">🎯 Klaim Stempel</button>'
            }
          </div>

          <div class="detail-rate-bar">
            <div class="detail-rate-info">
              <span class="detail-rate-label">Apresiasi Pengunjung</span>
              <span class="detail-rate-sub">${Rating.get(panelOf(d)).up > 0 ? `${Rating.get(panelOf(d)).pct}% pengunjung menyukai inovasi ini (${Rating.get(panelOf(d)).up} suka)` : "Belum ada apresiasi. Jadilah yang pertama!"}</span>
            </div>
            <div class="rate-thumbs" role="group" aria-label="Penilaian booth">
              <button class="thumb-btn up ${Rating.get(panelOf(d)).myVote === "up" ? "active" : ""}" data-rate="${panelOf(d)}" data-vote="up" aria-label="Sukai inovasi ini">
                <span class="thumb-icon">👍🏻</span>
                <span class="thumb-txt">Sukai</span>
                ${Rating.get(panelOf(d)).up > 0 ? `<span class="thumb-cnt">${Rating.get(panelOf(d)).up}</span>` : ""}
              </button>
            </div>
          </div>

          <div class="desktop-grid">
            <div class="info-card ${p === "dosen" || p === "rektorat" ? "highlight" : ""}">
              <div class="info-card-header">
                <span class="info-card-label">Skema & Pendanaan</span>
                <span class="tag-pill" style="font-size:10.5px;padding:2px 8px;">${esc(d.sumber)}</span>
              </div>
              <div class="info-card-content">
                ${esc(d.hibah)} · ${esc(d.skema)}
              </div>
              ${d.dana ? `<div class="funding-tag">${rp(d.dana)}</div>` : ""}
            </div>

            <div class="info-card ${p === "mitra" || p === "umum" ? "highlight" : ""}">
              <div class="info-card-header">
                <span class="info-card-label">${p === "umum" ? "Manfaat Bagi Masyarakat" : "Fokus & Dampak Inovasi"}</span>
                ${terapan(d) ? '<span style="font-size:11px;font-weight:700;color:var(--gold);">Orientasi Terapan</span>' : ""}
              </div>
              <div class="info-card-content">
                ${esc(d.dampak || "Pendanaan eksternal (" + d.sumber + "); ringkasan dampak menyusul dari peneliti.")}
              </div>
            </div>

            <div class="info-card ${p === "mahasiswa" ? "highlight" : ""}" style="grid-column: 1 / -1;">
              <div class="info-card-header" ${Array.isArray(d.sdg) && d.sdg[0] ? `data-open-sdg="${d.sdg[0]}" data-from="${d.no}" style="cursor:pointer"` : ""}>
                <span class="info-card-label">Keterkaitan SDGs</span>
                <span style="font-size:11px;font-weight:700;color:var(--primary);display:inline-flex;align-items:center;gap:4px;">
                  Lihat Booth Terkait
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </span>
              </div>
              <div class="sdg-chip-list">
                ${sdgHtml}
              </div>
            </div>
          </div>
        </div>

        <div class="sheet-footer-bar">
          <button class="btn-action-map" data-map="${d.no}">
            Lihat di Denah
          </button>
          ${
            inRoute
              ? `<button class="btn-action-route in-route" data-del="${d.no}" data-keep="1" aria-label="Hapus dari rute">Tersimpan di Rute (Hapus)</button>`
              : `<button class="btn-action-route" data-add="${d.no}" data-keep="1" aria-label="${cta}">${cta}</button>`
          }
        </div>
      </article>
    </div>`;
  $(".sheet .x").focus();
}

/* ---------- SDGs Detail Sheet (Related Booths) ---------- */
function openSdgSheet(sdgNum, fromBoothNo) {
  const n = +sdgNum || 1;
  const info = SDGINFO[n];
  if (!info) return;

  lastFocus = document.activeElement;
  const currentBooth = fromBoothNo
    ? DATA.find((x) => x.no === fromBoothNo)
    : null;
  const related = DATA.filter(
    (x) => Array.isArray(x.sdg) && x.sdg.includes(n),
  ).sort((a, b) => panelOf(a) - panelOf(b));

  const multiTabs =
    currentBooth &&
    Array.isArray(currentBooth.sdg) &&
    currentBooth.sdg.length > 1
      ? `<div class="sdg-tabs-row">
        ${currentBooth.sdg
          .map(
            (sn) => `
          <button class="sdg-tab-btn ${sn === n ? "active" : ""}" data-open-sdg="${sn}" data-from="${fromBoothNo}">
            <img src="assets/img/sdgs_logo/sdg-${sn}.webp" width="16" height="16" alt="" loading="lazy">
            SDGs ${sn}
          </button>
        `,
          )
          .join("")}
      </div>`
      : "";

  $("#layer").innerHTML = `
    <div class="scrim" data-close="1">
      <article class="sheet detail-sheet" role="dialog" aria-modal="true" aria-labelledby="sdgt">
        <div class="sheet-handle-bar"></div>

        <div class="sheet-top-bar">
          <div class="sheet-badge-group">
            <span class="tag-pill">
              <i class="dot"></i>
              Keterkaitan SDGs
            </span>
            <span class="tag-panel">
              SDGs ${n}
            </span>
          </div>
          <button class="x close-btn" data-close="1" aria-label="Tutup Dialog">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="sheet-scroll-body">
          <div class="sdg-header-hero">
            <img src="assets/img/sdgs_logo/sdg-${n}.webp" alt="SDGs ${n}" width="48" height="48" loading="lazy">
            <div class="sdg-header-meta">
              <h2 class="sdg-header-title" id="sdgt">SDGs ${n} · ${esc(info[0])}</h2>
              <span class="sdg-header-sub">Menampilkan ${related.length} booth pameran yang berkontribusi pada tujuan ini</span>
            </div>
          </div>

          ${multiTabs}

          <div class="sdg-works-list">
            ${
              related.length
                ? related
                    .map((item) => {
                      const pNum = String(panelOf(item)).padStart(2, "0");
                      const isCurrent = fromBoothNo && item.no === fromBoothNo;
                      return `
              <div class="sdg-work-card ${isCurrent ? "is-current" : ""}">
                <div class="sdg-work-top">
                  <span class="tag-panel">Booth #${pNum}</span>
                  <span class="tag-pill"><i class="dot"></i>${esc(item.kat)} · ${esc(KLASTER[item.kl])}</span>
                  ${isCurrent ? '<span class="tag-current">Karya Saat Ini</span>' : ""}
                </div>

                <h3 class="sdg-work-title">${esc(item.judul)}</h3>

                <div class="researcher-meta">
                  <span class="researcher-name">${esc(item.ketua)}</span>
                  <span class="researcher-fak">${esc(fakOf(item))}</span>
                </div>

                <div class="sdg-work-foot">
                  <button class="btn sm ghost" data-map="${item.no}">
                    Lihat di Denah
                  </button>
                  <button class="btn sm gold" data-open="${item.no}">
                    ${isCurrent ? "Buka Detail Ini" : "Buka Detail Booth"}
                  </button>
                </div>
              </div>`;
                    })
                    .join("")
                : '<div class="info-card" style="text-align:center;color:var(--mut);padding:24px;">Belum ada booth terdaftar pada tujuan ini.</div>'
            }
          </div>
        </div>

        <div class="sheet-footer-bar">
          ${
            fromBoothNo
              ? `<button class="btn-action-map" data-open="${fromBoothNo}">
                   Kembali ke Booth
                 </button>
                 <button class="btn-action-route" data-close="1">
                   Tutup
                 </button>`
              : `<button class="btn-action-route" data-close="1" style="flex:1">
                   Tutup
                 </button>`
          }
        </div>
      </article>
    </div>`;
  $(".sheet .x").focus();
}
function closeLayer() {
  $("#layer").innerHTML = "";
  if (lastFocus && lastFocus.focus) {
    try {
      lastFocus.focus();
    } catch (e) {}
  }
  lastFocus = null;
  if (S.tab === "qrbooth" && !S.isPanitia) {
    go("hadir");
  }
}

function getPublicUrl() {
  const custom = (store.get("url", CONFIG.publicUrl || "") || "").trim();
  if (
    (custom.startsWith("http://") || custom.startsWith("https://")) &&
    !custom.includes("script.google.com")
  ) {
    return custom.replace(/\/$/, "");
  }
  if (
    typeof window !== "undefined" &&
    window.location &&
    window.location.origin
  ) {
    const origin = window.location.origin;
    if (origin && origin !== "null" && origin.startsWith("http")) {
      return (origin + window.location.pathname).replace(/\/$/, "");
    }
  }
  return "";
}

function promptPanitiaPin(onSuccess, onCancel) {
  lastFocus = document.activeElement;
  $("#layer").innerHTML =
    `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="pt">
    <button type="button" class="x" data-close="1" aria-label="Tutup">×</button>
    <h2 id="pt">Akses Khusus Panitia</h2>
    <p style="color:var(--mut);margin:6px 0 14px;font-size:14px">Fitur cetak QR booth dan undian doorprize hanya dapat diakses oleh panitia pelaksana.</p>
    <form id="pinf" novalidate>
      <label class="f">PIN Panitia
        <input class="txt" id="pin-val" type="password" inputmode="numeric" placeholder="Masukkan PIN" autocomplete="on" required>
      </label>
      <p id="pin-err" style="color:var(--err);margin:8px 0 0;font-size:13.5px" hidden></p>
      <div class="row" style="margin-top:16px">
        <button type="submit" class="btn gold">Masuk</button>
        <button type="button" class="btn ghost" data-close="1">Batal</button>
      </div>
    </form></div></div>`;
  const inp = $("#pin-val");
  if (inp) setTimeout(() => inp.focus(), 80);
  const f = $("#pinf");
  if (f) {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = (inp ? inp.value : "").trim();
      if (val === (CONFIG.pinPanitia || "1966")) {
        S.isPanitia = true;
        store.set("panitia", true);
        closeLayer();
        toast("Akses panitia diverifikasi");
        if (onSuccess) onSuccess();
      } else {
        const err = $("#pin-err");
        if (err) {
          err.textContent = "PIN salah. Hubungi panitia pelaksana.";
          err.hidden = false;
        }
        if (inp) inp.select();
      }
    });
  }
}

/* ---------- Kehadiran ---------- */
function effective() {
  return S.att;
}
function viewHadir() {
  const a = effective(),
    tot = a.total || 0,
    max = Math.max(1, ...Object.values(a.counts));
  const modeLbl =
    {
      gas: "",
      "gas-api": "Langsung",
      sheet: "Langsung",
      local: "Lokal di perangkat ini",
    }[S.att.mode] || "Langsung";
  const hrs = [];
  for (let h = CONFIG.jamBuka; h <= CONFIG.jamTutup; h++) hrs.push(h);
  const maxH = Math.max(1, ...hrs.map((h) => a.hours[h] || 0));
  const url = getPublicUrl();
  $("#v-hadir").innerHTML = `
  <button class="link" data-go="beranda">← Kembali ke beranda</button>
  <div class="sec" style="margin-top:0"><h2>Kehadiran Pengunjung</h2></div>
  <div class="card">
    <div class="row" style="justify-content:space-between"><span class="pill">${esc(modeLbl || "Sistem Presensi")}</span>${S.checked ? '<span class="added">Anda sudah tercatat hadir</span>' : ""}</div>
    <div class="big" style="margin-top:10px"><b class="num">${tot}</b><span>pengunjung tercatat</span></div>
    ${tot === 0 ? `<p style="color:var(--mut);margin:8px 0 0;font-size:14px">Belum ada pengunjung tercatat. Angka bertambah saat peserta memindai QR daftar hadir.</p>` : ""}
    ${Object.entries(PERAN)
      .map(
        ([k, p]) =>
          `<div class="rolebar"><span>${p.nama}</span><span class="tr"><i style="width:${((a.counts[k] || 0) / max) * 100}%;background:${p.warna}"></i></span><b class="num" style="text-align:right">${a.counts[k] || 0}</b></div>`,
      )
      .join("")}
    <div class="row card-actions" style="margin-top:16px;justify-content:flex-end"><button class="btn gold" data-act="form">${S.checked ? "Isi lagi untuk orang lain" : "Isi daftar hadir"}</button></div>
  </div>
  <div class="sec"><h2>Kunjungan per jam</h2><div class="card"><div class="hours">${hrs
    .map((h) => {
      const v = a.hours[h] || 0;
      return `<div><em class="num">${v || ""}</em><i style="height:${(v / maxH) * 78}px"></i>${String(h).padStart(2, "0")}</div>`;
    })
    .join("")}</div></div></div>
  ${undianPanel()}
  <div class="sec"><h2>Untuk panitia</h2><div class="card">
    <p style="margin:0;color:var(--mut);font-size:14px">Tautan publik halaman ini untuk membuat QR pintu masuk di meja registrasi dan QR umpan balik di pintu keluar.</p>
    <label class="f" style="margin-top:10px">Tautan publik<input class="txt" id="pubUrl" type="url" inputmode="url" placeholder="https://..." value="${esc(url)}"></label>
    <div class="qrs"><div class="qrbox"><div class="qrimg" id="qr1"></div><b>QR pintu masuk</b><span>Registrasi kehadiran, lalu katalog</span></div><div class="qrbox"><div class="qrimg" id="qr2"></div><b>QR pintu keluar</b><span>Langsung ke umpan balik</span></div></div>
    <details><summary>Menyambungkan penyimpanan kehadiran</summary>
      <ol class="steps"><li>Data kehadiran tersimpan otomatis dan terhubung ke backend Google Sheets melalui Google Apps Script Web App.</li>
      <li>Tautan publik di atas otomatis mendeteksi alamat website (misal URL Vercel atau domain UP).</li>
      <li>Pengunjung memindai QR pintu masuk untuk registrasi kehadiran dan menjelajahi katalog karya inovasi.</li>
      <li>Data pengunjung dan kunjungan per jam diperbarui secara berkala otomatis.</li></ol></details>
  </div></div>`;
  $("#pubUrl").addEventListener("change", (e) => {
    store.set("url", e.target.value.trim());
    makeQR();
  });
  makeQR();
}
function makeQR() {
  const u = getPublicUrl();
  [
    ["qr1", u],
    ["qr2", u ? u + "#umpan" : ""],
  ].forEach(([id, t]) => {
    const box = document.getElementById(id);
    if (!box) return;
    box.innerHTML = "";
    if (
      (!u.startsWith("http://") && !u.startsWith("https://")) ||
      typeof QRCode === "undefined"
    ) {
      box.innerHTML =
        '<span style="color:#52617D;font-size:13px;padding:8px">QR muncul setelah tautan publik diisi</span>';
      return;
    }
    try {
      new QRCode(box, {
        text: t,
        width: 176,
        height: 176,
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {}
  });
}
function formFields(gate) {
  return `<div><span class="k" style="font-size:12.5px;font-weight:700;color:var(--ink);letter-spacing:0.01em;">Anda Datang Sebagai</span>
        <div class="roles" id="fr" role="radiogroup" aria-label="Peran" style="margin-top:8px">${Object.entries(
          PERAN,
        )
          .map(
            ([k, p]) =>
              `<button type="button" class="role" role="radio" aria-checked="${S.peran === k}" data-fr="${k}">${p.nama}${gate ? `<small>${p.ket}</small>` : ""}</button>`,
          )
          .join("")}</div></div>
      <div id="dyn" class="kv" style="margin-top:0;gap:14px" aria-live="polite"></div>
      <p id="fe" style="color:var(--err);margin:0;font-size:14px" role="alert" hidden></p>
      <button class="btn gold" type="submit" id="fs" hidden>Catat Kehadiran</button>`;
}
const opts = (arr, ph) =>
  `<option value="">${ph}</option>` +
  arr.map((x) => `<option value="${esc(x)}">${esc(x)}</option>`).join("");
function renderDyn(focus) {
  const box = $("#dyn");
  if (!box) return;
  const p = S.peran;
  let h = "";
  if (p === "mahasiswa" || p === "dosen") {
    h += `<label class="f">Fakultas Asal <span style="color:var(--err);font-weight:700">*</span><select class="txt" id="fa" required>${opts(CONFIG.fakultas, "Pilih fakultas")}</select></label>`;
  } else if (p === "rektorat") {
    h += `<label class="f">Jabatan / Unit Kerja <span style="color:var(--err);font-weight:700">*</span><input class="txt" id="fa" placeholder="Contoh: Rektorat / WR / Lembaga / Biro" required></label>`;
  } else if (p === "mitra") {
    h += `<label class="f">Jenis Mitra <span style="color:var(--err);font-weight:700">*</span><select class="txt" id="fj" required>${opts(CONFIG.jenisMitra, "Pilih jenis mitra")}</select></label><label class="f">Nama Instansi <span style="color:var(--err);font-weight:700">*</span><input class="txt" id="fi" autocomplete="organization" placeholder="Nama perusahaan / instansi" required></label>`;
  } else if (p === "umum") {
    h += `<label class="f">Asal Instansi / Kota <span style="font-size:11.5px;color:var(--mut);font-weight:normal">(opsional)</span><input class="txt" id="fa" placeholder="Contoh: Alumni UP / Praktisi / Jakarta"></label>`;
  }
  // Nama Lengkap wajib diisi untuk semua peran
  if (p) {
    h += `<label class="f">Nama Lengkap <span style="color:var(--err);font-weight:700">*</span><input class="txt" id="fn" autocomplete="name" required placeholder="Masukkan nama lengkap Anda"></label>`;
  }
  box.innerHTML = h;

  // Isi otomatis dari riwayat localStorage
  const savedNama = store.get("nama", ""),
    savedAsal = store.get("asal", ""),
    savedFak = store.get("fakultas", ""),
    savedUnit = store.get("unitKerja", ""),
    savedJenis = store.get("jenisMitra", ""),
    savedInstansi = store.get("instansi", "");

  const fa = $("#fa");
  if (fa) {
    if (p === "rektorat" && (savedUnit || savedAsal)) fa.value = savedUnit || savedAsal;
    else if (savedFak || savedAsal) fa.value = savedFak || savedAsal;
  }
  const fj = $("#fj");
  if (fj && savedJenis) fj.value = savedJenis;
  const fi = $("#fi");
  if (fi && savedInstansi) fi.value = savedInstansi;
  const fn = $("#fn");
  if (fn && savedNama) fn.value = savedNama;

  const b = $("#fs");
  if (b) b.hidden = !p;
  box.classList.remove("in");
  void box.offsetWidth;
  if (p) box.classList.add("in");
  if (focus && p) {
    const f = box.querySelector("select,input");
    if (f) f.focus({ preventScroll: true });
    box.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}
function openForm() {
  lastFocus = document.activeElement;
  $("#layer").innerHTML = `
    <div class="scrim" data-close="1">
      <form class="sheet detail-sheet" id="hf" role="dialog" aria-modal="true" aria-labelledby="ft" novalidate style="max-height:90vh;">
        <div class="sheet-handle-bar"></div>
        <div class="sheet-top-bar">
          <div class="sheet-badge-group">
            <span class="tag-pill"><i class="dot"></i>Presensi</span>
            <span class="tag-panel">Daftar Hadir</span>
          </div>
          <button type="button" class="close-btn" data-close="1" aria-label="Tutup Dialog">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="sheet-scroll-body">
          <div class="hero-card">
            <h2 id="ft" class="hero-title">Presensi Pengunjung</h2>
            <p style="color:var(--mut);margin:0;font-size:13.5px;line-height:1.5">Untuk mencatat kehadiran atau mengganti peran. Isian menyesuaikan peran yang dipilih.</p>
          </div>
          <div class="info-card">
            <div class="kv" style="margin-top:0;gap:14px">${formFields(false)}</div>
          </div>
        </div>
      </form>
    </div>`;
  renderDyn(false);
  const first = $("#fr button");
  if (first) first.focus();
}
function openGate() {
  $("#layer").innerHTML =
    `<div class="gate" role="dialog" aria-modal="true" aria-labelledby="gt">
    <div class="hero"><div class="wrap"><img src="${$("header.hero img").src}" alt="Logo Dies Natalis ke-60 Universitas Pancasila" width="76" height="72"><div><p class="eyebrow">Selamat datang</p><h1 id="gt">Gelar Karya Penelitian dan PKM, 60 Tahun UP</h1></div></div></div>
    <form class="wrapin" id="hf" novalidate>
      <ol class="flow" aria-label="Alur kunjungan"><li class="on"><b>1</b>Hadir</li><li><b>2</b>Jelajah</li><li><b>3</b>Rute</li><li><b>4</b>Umpan balik</li></ol>
      <h2 style="font-size:20px">Daftar hadir dulu</h2>
      <p style="color:var(--mut);margin:6px 0 16px;font-size:14.5px">Mulai dari peran Anda; isian berikutnya menyesuaikan. Data digunakan untuk absensi kehadiran, interaksi booth pameran, dan kelayakan undian doorprize Dies Natalis ke-60 UP. Peran juga menentukan rekomendasi yang ditonjolkan di katalog.</p>
      <div class="kv" style="margin-top:0;gap:14px">${formFields(true)}</div>
      <div style="text-align:center;margin-top:12px"><button type="button" class="link" data-act="skip">Lewati dulu, lihat katalog</button></div>
    </form></div>`;
  renderDyn(false);
  const first = $("#fr button");
  if (first) first.focus();
}
async function submitForm(ev) {
  ev.preventDefault();
  const peran = S.peran,
    nama = $("#fn") ? ($("#fn").value || "").trim() : "";
  const err = (m) => {
    const e = $("#fe");
    e.textContent = m;
    e.hidden = false;
  };
  if (!peran) return err("Pilih peran Anda terlebih dahulu.");
  if (!nama) {
    if ($("#fn")) $("#fn").focus();
    return err("Nama lengkap wajib diisi.");
  }
  let asal = "";
  if (peran === "mahasiswa" || peran === "dosen") {
    asal = $("#fa") ? $("#fa").value : "";
    if (!asal) {
      if ($("#fa")) $("#fa").focus();
      return err("Pilih fakultas asal Anda.");
    }
    store.set("fakultas", asal);
  } else if (peran === "rektorat") {
    asal = $("#fa") ? ($("#fa").value || "").trim() : "";
    if (!asal) {
      if ($("#fa")) $("#fa").focus();
      return err("Isi jabatan atau unit kerja Anda di Rektorat.");
    }
    store.set("unitKerja", asal);
    store.set("fakultas", asal);
  } else if (peran === "mitra") {
    const j = $("#fj") ? $("#fj").value : "",
      n = $("#fi") ? ($("#fi").value || "").trim() : "";
    if (!j) {
      if ($("#fj")) $("#fj").focus();
      return err("Pilih jenis mitra.");
    }
    if (!n) {
      if ($("#fi")) $("#fi").focus();
      return err("Isi nama instansi mitra.");
    }
    asal = j + " - " + n;
    store.set("jenisMitra", j);
    store.set("instansi", n);
  } else if (peran === "umum") {
    asal = $("#fa") ? ($("#fa").value || "").trim() : "";
    if (!asal) asal = "Umum";
    store.set("asal", asal);
  }
  const btn = ev.target.querySelector("button[type=submit]");
  btn.disabled = true;
  try {
    const uid = Undi.id();
    await Att.submit({ nama, peran, asal, uid, t: new Date().toISOString() });
    const wasGate = !!$(".gate");
    S.checked = true;
    store.set("hadir", true);
    store.set("peran", S.peran);
    store.set("nama", nama);
    store.set("asal", asal);
    Undi.sync();
    closeLayer();
    toast("Kehadiran tercatat. Silakan jelajahi karya.");
    refreshAtt();
    if (wasGate) {
      go("beranda");
      if (!store.get("kamera", false)) setTimeout(openCamPrime, 350);
    } else render(S.tab);
  } catch (e) {
    btn.disabled = false;
    err(
      e && e.message === "readonly"
        ? "Akun Anda hanya dapat melihat halaman ini. Minta panitia memberi akses Contributor atau gunakan tautan formulir publik."
        : "Kehadiran belum tercatat. Periksa koneksi lalu coba lagi.",
    );
  }
}

/* ---------- Umpan balik ---------- */
function myFbCard(myFb) {
  if (!S.fbDone || !myFb) return "";
  const starsStr = "★".repeat(myFb.nilai || 5) + "☆".repeat(5 - (myFb.nilai || 5));
  const boothFav = myFb.karya ? DATA.find((x) => x.no === myFb.karya) : null;

  return `
    <div class="card" style="margin-bottom:14px;border:1.5px solid #bbf7d0;background:#f0fdf4;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <span style="font-size:12px;font-weight:700;color:#15803d;display:inline-flex;align-items:center;gap:4px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Umpan Balik Anda Telah Tercatat
        </span>
        <span style="font-size:11px;color:#166534;background:#dcfce7;padding:2px 8px;border-radius:999px;font-weight:600;">
          Google Sheets ✓
        </span>
      </div>
      <div style="margin-bottom:6px;">
        <span style="color:#d97706;font-size:16px;letter-spacing:2px;font-weight:700;">${starsStr}</span>
        <span style="font-size:13px;font-weight:700;color:#166534;margin-left:6px;">${myFb.nilai}/5 (${NILAI[(myFb.nilai || 5) - 1] || "Sangat baik"})</span>
      </div>
      ${boothFav ? `<p style="font-size:12.5px;color:#1f2937;margin:4px 0;"><b>Karya Berkesan:</b> Booth #${boothFav.no} · ${esc(boothFav.judul)}</p>` : ""}
      ${myFb.komentar ? `<p style="font-size:12.5px;color:#374151;margin:6px 0 4px;font-style:italic;background:#ffffff;padding:8px 10px;border-radius:8px;border:1px solid #dcfce7;">"${esc(myFb.komentar)}"</p>` : ""}
      <div style="margin-top:10px;display:flex;justify-content:flex-end;">
        <button class="btn sm ghost" data-act="umpan" style="font-size:12px;padding:6px 12px;">Ubah Penilaian</button>
      </div>
    </div>`;
}

function fbCard() {
  const f = S.fb;
  return `
    <div class="sec">
      <h2>Statistik Umpan Balik Pameran</h2>
      <div class="card">
        <p style="margin:0 0 12px;color:var(--mut);font-size:14px;line-height:1.5">
          Penilaian dari pengunjung digunakan oleh panitia dan LPPM Universitas Pancasila untuk mengevaluasi penyelenggaraan serta mengapresiasi karya riset.
        </p>
        ${
          f.n
            ? `<div class="big" style="margin-bottom:12px">
                <b class="num" style="font-size:36px;color:var(--ink);">${f.avg.toFixed(1).replace(".", ",")}</b>
                <span style="font-size:13px;color:var(--mut);">Rata-rata dari <b>${f.n} responden</b> (skala 5) terdata di Google Spreadsheet</span>
              </div>`
            : `<div style="margin-bottom:12px;font-size:13px;color:var(--mut);font-style:italic;">Memuat statistik terbaru dari Google Spreadsheet...</div>`
        }
        <div class="row card-actions" style="justify-content:flex-end; gap:8px;">
          ${
            S.fbDone
              ? '<span class="added" style="margin-right:auto;font-size:12.5px;">✓ Anda sudah memberi masukan</span>'
              : ""
          }
          <button class="btn ${S.fbDone ? "ghost" : "gold"}" data-act="umpan">
            ${S.fbDone ? "Beri Masukan Lagi" : "Beri Umpan Balik"}
          </button>
        </div>
      </div>
    </div>`;
}
const NILAI = ["Kurang", "Cukup", "Baik", "Sangat baik", "Luar biasa"];
function openFeedback() {
  lastFocus = document.activeElement;
  S.nilai = 5;
  const currentNama = store.get("nama", "") || "Pengunjung";
  $("#layer").innerHTML = `
    <div class="scrim" data-close="1">
      <form class="sheet detail-sheet" id="ff" role="dialog" aria-modal="true" aria-labelledby="ut" novalidate style="max-height:90vh;">
        <div class="sheet-handle-bar"></div>

        <div class="sheet-top-bar">
          <div class="sheet-badge-group">
            <span class="tag-pill">
              <i class="dot"></i>
              Umpan Balik
            </span>
            <span class="tag-panel">
              Evaluasi Pameran
            </span>
          </div>
          <button type="button" class="close-btn" data-close="1" aria-label="Tutup Dialog">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="sheet-scroll-body">
          <div class="hero-card">
            <h2 id="ut" class="hero-title">Beri Masukan & Evaluasi</h2>
            <p style="color:var(--mut);margin:0;font-size:13.5px;line-height:1.5">Masukan Anda sangat berharga bagi evaluasi pameran Gelar Karya UP 60 dan pengembangan karya berikutnya.</p>
          </div>

          <!-- Hidden identification (Nama & Peran disembunyikan sesuai preferensi) -->
          <input type="hidden" id="ff-nama" value="${esc(currentNama)}">

          <!-- Rating Card (Default: 5 Luar Biasa) -->
          <div class="info-card">
            <div class="info-card-header">
              <span class="info-card-label">Penilaian Pameran</span>
            </div>
            <p style="font-size:12.5px;color:var(--mut);margin:0 0 10px">Tingkat kepuasan Anda terhadap penyelenggaraan pameran:</p>
            <div class="stars" role="radiogroup" aria-label="Penilaian 1 sampai 5">
              ${NILAI.map((l, i) => {
                const n = i + 1;
                const isChecked = n === 5;
                return `<button type="button" class="star" role="radio" aria-checked="${isChecked}" data-nilai="${n}"><span aria-hidden="true">${n}</span><small>${l}</small></button>`;
              }).join("")}
            </div>
          </div>

          <!-- Pilihan Karya & Komentar -->
          <div class="info-card">
            <div class="info-card-header">
              <span class="info-card-label">Karya Berkesan & Masukan</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:12px;margin-top:2px;">
              <label class="f" style="display:flex;flex-direction:column;gap:5px;font-size:13px;font-weight:700;color:var(--ink);">
                Karya yang Paling Berkesan (Opsional)
                <select class="txt" id="fk" style="margin-top:2px;">
                  <option value="">Tidak memilih</option>
                  ${DATA.map((d) => `<option value="${d.no}">Booth #${String(d.no).padStart(2, "0")} · ${esc(d.judul.length > 60 ? d.judul.slice(0, 60) + "…" : d.judul)}</option>`).join("")}
                </select>
              </label>

              <label class="f" style="display:flex;flex-direction:column;gap:5px;font-size:13px;font-weight:700;color:var(--ink);">
                Komentar atau Saran (Opsional)
                <textarea class="txt" id="fc" maxlength="500" placeholder="Tuliskan saran atau apresiasi Anda selama berkunjung..." style="margin-top:2px;min-height:90px;"></textarea>
              </label>
            </div>
          </div>

          <p id="fe" style="color:var(--err);margin:0;font-size:13px;padding:8px 12px;background:#fef2f2;border:1px solid #fecaca;border-radius:10px;" role="alert" hidden></p>
        </div>

        <div class="sheet-footer-bar">
          <button type="button" class="btn-action-map" data-close="1">Batal</button>
          <button type="submit" class="btn-action-route" style="flex:1.4;">Kirim Umpan Balik</button>
        </div>
      </form>
    </div>`;
  const star5 = document.querySelector('.star[data-nilai="5"]');
  if (star5) star5.focus();
}
async function submitFeedback(ev) {
  ev.preventDefault();
  const err = (m) => {
    const e = $("#fe");
    e.textContent = m;
    e.hidden = false;
  };
  if (!S.nilai) S.nilai = 5;
  const namaInput = $("#ff-nama") ? $("#ff-nama").value.trim() : "";
  const nama = namaInput || store.get("nama", "") || "Pengunjung";
  if (namaInput) store.set("nama", namaInput);

  const row = {
    nama: nama,
    peran: S.peran || store.get("peran", "") || "umum",
    asal: store.get("asal", "-"),
    nilai: S.nilai,
    karya: +($("#fk").value || 0) || 0,
    komentar: ($("#fc").value || "").trim().slice(0, 500),
    uid: Undi.id(),
    t: new Date().toISOString(),
  };
  const btn = ev.target.querySelector("button[type=submit]");
  btn.disabled = true;
  try {
    await Fb.submit(row);
    S.fbDone = true;
    store.set("umpan", true);
    store.set("myFb", row);

    // Perbarui data lokal segera (optimistic UI) - Idempotent
    let rowsFb = store.get("rowsFb", []);
    const existingIdx = rowsFb.findIndex((x) => x.uid === row.uid);
    if (existingIdx !== -1) {
      rowsFb[existingIdx] = row;
    } else {
      rowsFb.push(row);
    }
    store.set("rowsFb", rowsFb);
    if (!S.fb.n) {
      S.fb = { n: rowsFb.length, avg: row.nilai };
    }

    closeLayer();
    toast("Umpan balik terkirim. Terima kasih.");
    if (S.tab === "umpan") viewUmpan();
    else render(S.tab);
  } catch (e) {
    btn.disabled = false;
    err(
      e && e.message === "readonly"
        ? "Akun Anda hanya dapat melihat halaman ini. Gunakan tautan formulir publik."
        : "Umpan balik belum terkirim. Periksa koneksi lalu coba lagi.",
    );
  }
}
const Fb = {
  fetchLive() {
    if (CONFIG.gasUrl) {
      fetch(CONFIG.gasUrl + "?action=fbStats")
        .then((r) => r.json())
        .then((res) => {
          if (res && res.n !== undefined) {
            S.fb = res;
            renderStats();
            if (S.tab === "umpan") {
              const fbSec = document.querySelector("#v-umpan .sec:last-of-type .card");
              if (fbSec && res.n) {
                const big = fbSec.querySelector(".big") || document.createElement("div");
                big.className = "big";
                big.style.marginBottom = "12px";
                big.innerHTML = `<b class="num" style="font-size:36px;color:var(--ink);">${res.avg.toFixed(1).replace(".", ",")}</b><span style="font-size:13px;color:var(--mut);">Rata-rata dari <b>${res.n} responden</b> (skala 5) terdata di Google Spreadsheet</span>`;
                const p = fbSec.querySelector("p");
                if (p && !fbSec.querySelector(".big")) {
                  p.after(big);
                  const loadingMsg = fbSec.querySelector("div[style*='italic']");
                  if (loadingMsg) loadingMsg.remove();
                }
              }
            }
          }
        })
        .catch(() => {});
    }
  },
  watch() {
    this.fetchLive();
    setInterval(() => this.fetchLive(), 25000); // Polling live sync berkala
    if (S.att.mode === "gas") {
      google.script.run
        .withSuccessHandler((res) => {
          if (res) {
            S.fb = res;
            if (!$("#layer").innerHTML && (S.tab === "umpan" || S.tab === "beranda"))
              render(S.tab);
          }
        })
        .getFeedbackStats();
      return;
    }
    if (Att.db) {
      Att.db.collection("umpan").onSnapshot(
        (snap) => {
          const v = snap.docs
            .map((d) => +(d.data() || {}).nilai)
            .filter((n) => n >= 1 && n <= 5);
          S.fb = {
            n: v.length,
            avg: v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0,
          };
          if (S.tab === "umpan" || S.tab === "beranda") {
            if (!$("#layer").innerHTML) render(S.tab);
          }
        },
        () => {},
      );
    } else {
      this.local();
    }
  },
  local() {
    const v = store.get("rowsFb", []).map((r) => r.nilai);
    S.fb = {
      n: v.length,
      avg: v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0,
    };
  },
  async submit(row) {
    if (S.att.mode === "gas-api") {
      try {
        await fetch(CONFIG.gasUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ action: "feedback", ...row }),
        });
        setTimeout(() => {
          this.fetchLive();
        }, 1200);
      } catch (e) {}
      return;
    }
    if (S.att.mode === "gas") {
      return new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler((res) => {
            if (res && res.fb) {
              S.fb = res.fb;
              renderStats();
              if (S.tab === "umpan") viewUmpan();
            }
            resolve(res);
          })
          .withFailureHandler((err) => reject(err))
          .recordFeedback(row);
      });
    }
    if (S.att.mode === "db") {
      if (!S.att.canWrite) throw new Error("readonly");
      const c = Att.db.collection("umpan");
      const ref = S.att.uid ? c.doc(S.att.uid) : c.doc();
      await ref.set(row);
      return;
    }
    const U = CONFIG.umpan;
    if (U.formAction) {
      const fd = new FormData(),
        F = U.fields;
      if (F.peran) fd.append(F.peran, row.peran ? PERAN[row.peran].nama : "");
      if (F.nilai) fd.append(F.nilai, String(row.nilai));
      if (F.karya) fd.append(F.karya, row.karya ? String(row.karya) : "");
      if (F.komentar) fd.append(F.komentar, row.komentar);
      await fetch(U.formAction, { method: "POST", mode: "no-cors", body: fd });
      return;
    }
    const rows = store.get("rowsFb", []);
    rows.push({ nilai: row.nilai, t: row.t });
    store.set("rowsFb", rows);
    this.local();
  },
};

/* ---------- Penyimpanan kehadiran: GAS, db, Google Sheets, atau lokal ---------- */
const Att = {
  db: null,
  col: null,
  async init() {
    // Deteksi lingkungan Google Apps Script
    if (window.google && google.script && google.script.run) {
      S.att.mode = "gas";
      this.pollGas();
      setInterval(() => this.pollGas(), 20000);
      return;
    }
    if (CONFIG.gasUrl) {
      S.att.mode = "gas-api";
      this.pollGasApi();
      setInterval(() => this.pollGasApi(), 20000);
      return;
    }
    try {
      const db = window.claude && (await window.claude.use("db"));
      if (db) {
        this.db = db;
        this.col = db.collection("hadir");
        S.att.mode = "db";
        try {
          const u = await window.claude.use("user");
          if (u) {
            S.att.uid = await u.id();
            const w = await u.can("data.write");
            S.att.canWrite = w !== false;
            S.att.admin = !!(u.canEdit && u.canEdit());
          }
        } catch (e) {}
        this.col.onSnapshot(
          (snap) => {
            this.ingest(snap.docs.map((x) => x.data() || {}));
          },
          () => {},
        );
        return;
      }
    } catch (e) {}
    if (CONFIG.hadir.csvUrl) {
      S.att.mode = "sheet";
      this.poll();
      setInterval(() => this.poll(), 30000);
      return;
    }
    S.att.mode = "local";
    this.ingest(store.get("rowsLocal", []));
  },
  pollGasApi() {
    fetch(CONFIG.gasUrl + "?action=stats")
      .then((r) => r.json())
      .then((res) => {
        if (res && res.counts) {
          S.att.counts = res.counts;
          S.att.hours = res.hours || {};
          S.att.total = res.total || 0;
          S.att.ready = true;
          refreshAtt();
        }
      })
      .catch(() => {});
  },
  pollGas() {
    google.script.run
      .withSuccessHandler((res) => {
        if (res && res.counts) {
          S.att.counts = res.counts;
          S.att.hours = res.hours || {};
          S.att.total = res.total || 0;
          S.att.ready = true;
          refreshAtt();
        }
      })
      .getLiveStats();
  },
  ingest(rows) {
    const counts = { dosen: 0, mahasiswa: 0, mitra: 0, umum: 0 },
      hours = {};
    rows.forEach((r) => {
      const k = String(r.peran || "").toLowerCase();
      if (counts[k] !== undefined) {
        counts[k]++;
        const h = hourOf(r.t);
        if (h != null) hours[h] = (hours[h] || 0) + 1;
      }
    });
    S.att.counts = counts;
    S.att.hours = hours;
    S.att.total = Object.values(counts).reduce((a, b) => a + b, 0);
    S.att.ready = true;
    refreshAtt();
  },
  async poll() {
    try {
      const r = await fetch(CONFIG.hadir.csvUrl, { cache: "no-store" });
      const txt = await r.text();
      const rows = parseCsv(txt);
      if (!rows.length) return this.ingest([]);
      const head = rows[0].map((h) => h.toLowerCase().replace(/[^a-z]/g, ""));
      const ip = head.findIndex((h) =>
          ["peran", "sebagai", "hadirsebagai", "andahadirsebagai"].includes(h),
        ),
        it = head.findIndex((h) =>
          ["timestamp", "capwaktu", "waktu"].includes(h),
        );
      if (ip < 0) return;
      this.ingest(
        rows
          .slice(1)
          .map((c) => ({ peran: normPeran(c[ip]), t: it >= 0 ? c[it] : "" })),
      );
    } catch (e) {}
  },
  async submit(row) {
    if (S.att.mode === "gas-api") {
      try {
        await fetch(CONFIG.gasUrl, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ action: "attendance", ...row }),
        });
        setTimeout(() => this.pollGasApi(), 1200);
      } catch (e) {}
      return;
    }
    if (S.att.mode === "gas") {
      return new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler((res) => {
            if (res && res.stats) {
              S.att.counts = res.stats.counts;
              S.att.hours = res.stats.hours || {};
              S.att.total = res.stats.total || 0;
              refreshAtt();
            }
            resolve(res);
          })
          .withFailureHandler((err) => reject(err))
          .recordAttendance(row);
      });
    }
    if (S.att.mode === "db") {
      if (!S.att.canWrite) throw new Error("readonly");
      const ref = S.att.uid ? this.col.doc(S.att.uid) : this.col.doc();
      await ref.set({ nama: row.nama, peran: row.peran, asal: row.asal, t: row.t });
      return;
    }
    if (S.att.mode === "sheet" && CONFIG.hadir.formAction) {
      const fd = new FormData(),
        F = CONFIG.hadir.fields;
      if (F.nama) fd.append(F.nama, row.nama);
      if (F.peran) fd.append(F.peran, PERAN[row.peran].nama);
      if (F.asal) fd.append(F.asal, row.asal);
      await fetch(CONFIG.hadir.formAction, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });
      setTimeout(() => this.poll(), 4000);
      return;
    }
    const rows = store.get("rowsLocal", []);
    rows.push({ nama: row.nama, peran: row.peran, asal: row.asal, t: row.t });
    store.set("rowsLocal", rows);
    this.ingest(rows);
  },
};
function normPeran(v) {
  v = String(v || "").toLowerCase();
  return v.includes("rektorat")
    ? "rektorat"
    : (v.includes("dosen") || v.includes("tendik"))
      ? "dosen"
      : v.includes("mahasiswa")
        ? "mahasiswa"
        : v.includes("mitra")
          ? "mitra"
          : "umum";
}
function hourOf(t) {
  if (!t) return null;
  if (/^\d{4}-\d{2}-\d{2}T/.test(t)) {
    const d = new Date(t);
    return isNaN(d) ? null : d.getHours();
  }
  const m = String(t).match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);
  if (!m) return null;
  let h = +m[1];
  if (m[3]) {
    const pm = m[3].toUpperCase() === "PM";
    if (pm && h < 12) h += 12;
    if (!pm && h === 12) h = 0;
  }
  return h;
}
function parseCsv(t) {
  const rows = [];
  let row = [],
    cur = "",
    q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) {
      if (c === '"') {
        if (t[i + 1] === '"') {
          cur += '"';
          i++;
        } else q = false;
      } else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") {
      row.push(cur);
      cur = "";
    } else if (c === "\n") {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
    } else if (c !== "\r") cur += c;
  }
  if (cur || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows;
}
function refreshAtt() {
  renderStats();
  if (S.tab === "hadir") viewHadir();
  else if (S.tab === "beranda") viewBeranda();
}

/* ---------- Stempel booth dan undian ---------- */
const BOOTH_N = 60;
function boothCode(p) {
  let h = 2166136261;
  const s = CONFIG.undian.garam + "|" + p;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return (
    "UP60-" +
    String(p).padStart(2, "0") +
    "-" +
    h.toString(36).toUpperCase().padStart(7, "0").slice(-4)
  );
}
function parseCode(raw) {
  const m = String(raw || "")
    .toUpperCase()
    .match(/UP60-(\d{2})-([A-Z0-9]{4})/);
  if (!m) return null;
  const p = +m[1];
  return p >= 1 && p <= BOOTH_N && boothCode(p) === m[0] ? p : null;
}
function recordStamp(raw, metode = "kamera") {
  const p = parseCode(raw);
  if (!p)
    return {
      ok: false,
      msg: "Kode tidak dikenali. Pastikan QR berasal dari poster booth.",
    };
  const d = DATA.find((x) => panelOf(x) === p),
    nama = d ? "Booth " + p : "Booth " + p;
  if (S.stamp[p])
    return {
      ok: false,
      dup: true,
      p,
      msg: nama + " sudah tercatat. Lanjut ke booth lain.",
    };
  const last = store.get("lastStamp", 0),
    wait = CONFIG.undian.jeda * 1000 - (Date.now() - last);
  if (Object.keys(S.stamp).length && wait > 0)
    return {
      ok: false,
      msg:
        "Terlalu cepat. Kunjungi booth, lalu pindai lagi dalam " +
        Math.ceil(wait / 1000) +
        " detik.",
    };
  S.stamp[p] = new Date().toISOString();
  store.set("stamp", S.stamp);
  store.set("lastStamp", Date.now());
  Undi.sync();
  renderMapSafe();
  if ($("#stampj")) $("#stampj").innerHTML = questCard({ inJelajah: true });
  const n = Object.keys(S.stamp).length;
  const target = BOOTH_N;

  // Logging ke Google Sheets (Sheet "ScanBooth") secara aman & asinkron
  logScanToGas({
    boothNo: p,
    boothJudul: d ? d.judul : "-",
    boothFak: d ? d.fak : "-",
    totalStempel: n,
    metode: metode,
  });

  return {
    ok: true,
    p,
    n,
    msg:
      nama +
      " tercatat! Total " +
      n +
      "/" +
      target +
      " booth" +
      (n >= target
        ? " · Lengkap seluruh 60 booth! Kupon Undian Terbuka!"
        : " (Tinggal " + (target - n) + " booth lagi ke undian)"),
  };
}

async function logScanToGas(info) {
  const payload = {
    action: "scan",
    uid: Undi.id(),
    nama: store.get("nama", "-"),
    peran: S.peran || store.get("peran", "umum"),
    asal: store.get("asal", store.get("fakultas", "-")),
    t: new Date().toISOString(),
    ...info,
  };

  // Simpan ke antrean lokal (offline-first resilience) dengan idempotensi antrean
  try {
    let queue = store.get("scanQueue", []);
    const existingIdx = queue.findIndex((x) => x.boothNo === payload.boothNo);
    if (existingIdx !== -1) {
      queue[existingIdx] = payload;
    } else {
      queue.push(payload);
    }
    store.set("scanQueue", queue);
  } catch (e) {}

  flushScanQueue();
}

let isFlushingScan = false;
async function flushScanQueue() {
  if (isFlushingScan) return;
  if (!CONFIG.gasUrl && S.att.mode !== "gas") return;
  let queue = store.get("scanQueue", []);
  if (!queue || !queue.length) return;

  isFlushingScan = true;
  const item = queue[0];
  try {
    if (S.att.mode === "gas" && window.google && google.script && google.script.run) {
      google.script.run
        .withSuccessHandler(() => {
          let q = store.get("scanQueue", []);
          q.shift();
          store.set("scanQueue", q);
          isFlushingScan = false;
          if (q.length) setTimeout(flushScanQueue, 350);
        })
        .withFailureHandler(() => {
          isFlushingScan = false;
        })
        .recordScan(item);
      return;
    }

    // Mode gas-api (fetch no-cors ke Web App Apps Script)
    await fetch(CONFIG.gasUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(item),
    });

    let q = store.get("scanQueue", []);
    q.shift();
    store.set("scanQueue", q);
    isFlushingScan = false;
    if (q.length) setTimeout(flushScanQueue, 350);
  } catch (e) {
    // Offline / jaringan terputus sementara: biarkan tetap di antrean
    isFlushingScan = false;
  }
}

window.addEventListener("online", flushScanQueue);

function renderMapSafe() {
  try {
    if ($("#ov")) renderMap();
  } catch (e) {}
}
function handleDeepCode(raw, fromStart) {
  const r = recordStamp(decodeURIComponent(raw), "tautan");
  history.replaceState(null, "", "#jelajah");
  if (!fromStart) show("jelajah");
  setTimeout(() => {
    toast(r.msg);
    if (r.ok && r.n >= BOOTH_N) openUndian();
    else if (r.ok && r.p) promptBoothRating(r.p);
  }, 300);
}
function stampCard() {
  return questCard({ inJelajah: true });
}
/* kamera */
let scanState = null;
function loadJsQR() {
  return window.jsQR ? Promise.resolve() : Promise.reject();
}
function openScan() {
  const n = Object.keys(S.stamp).length;
  $("#scanlayer").innerHTML =
    `<div class="scan" role="dialog" aria-modal="true" aria-label="Pindai QR">
    <div class="scan-top"><b id="sc-p">Booth ${n} dari ${BOOTH_N}</b><button data-act="scanx" aria-label="Tutup pemindai">×</button></div>
    <div class="scan-view"><video id="sc-v" playsinline muted></video><div class="scan-frame"></div></div>
    <div class="scan-msg" id="sc-m" role="status" aria-live="polite">Memulai kamera. Pilih Izinkan bila diminta.</div>
    <form class="scan-man" id="sc-f" novalidate><label>Kamera tidak bisa dipakai? Ketik kode di bawah QR<input id="sc-i" placeholder="UP60-07-XXXX" autocapitalize="characters" autocomplete="off" spellcheck="false"></label><button class="btn gold" type="submit">Catat</button></form>
    <div id="sc-sheet-slot"></div>
  </div>`;
  scanState = { stream: null, on: true, paused: false, lastRaw: "", lastAt: 0 };
  scanStart();
}
function scanMsg(t, k) {
  const m = $("#sc-m");
  if (!m) return;
  m.textContent = t;
  m.className = "scan-msg" + (k ? " " + k : "");
}
async function scanStart() {
  const st = scanState,
    v = $("#sc-v");
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    scanMsg(
      "Peramban ini tidak mendukung kamera. Ketik kode di bawah QR.",
      "err",
    );
    return;
  }
  try {
    st.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false,
    });
    if (!st.on) {
      st.stream.getTracks().forEach((t) => t.stop());
      return;
    }
    v.srcObject = st.stream;
    await v.play();
    store.set("kamera", 1);
  } catch (e) {
    scanMsg(
      e && e.name === "NotAllowedError"
        ? "Izin kamera ditolak. Aktifkan kamera untuk situs ini di pengaturan peramban, atau ketik kode di bawah QR."
        : "Kamera tidak bisa dibuka di jendela ini. Pindai QR dengan aplikasi kamera ponsel, atau ketik kode di bawah QR.",
      "err",
    );
    return;
  }
  let det = null;
  if ("BarcodeDetector" in window) {
    try {
      det = new BarcodeDetector({ formats: ["qr_code"] });
    } catch (e) {}
  }
  if (!det) {
    try {
      await loadJsQR();
    } catch (e) {
      scanMsg("Pemindai gagal dimuat. Ketik kode di bawah QR.", "err");
      return;
    }
  }
  scanMsg("Arahkan kamera ke QR di bawah poster booth.");
  const cv = document.createElement("canvas"),
    cx = cv.getContext("2d", { willReadFrequently: true });
  const tick = async () => {
    if (!st.on) return;
    if (st.paused) {
      setTimeout(tick, 200);
      return;
    }
    let raw = "";
    try {
      if (v.readyState >= 2 && v.videoWidth) {
        if (det) {
          const r = await det.detect(v);
          raw = r[0] ? r[0].rawValue : "";
        } else {
          const k = Math.min(1, 640 / v.videoWidth);
          cv.width = v.videoWidth * k;
          cv.height = v.videoHeight * k;
          cx.drawImage(v, 0, 0, cv.width, cv.height);
          const im = cx.getImageData(0, 0, cv.width, cv.height);
          const q = window.jsQR(im.data, cv.width, cv.height, {
            inversionAttempts: "dontInvert",
          });
          raw = q ? q.data : "";
        }
      }
    } catch (e) {}
    if (raw && !(raw === st.lastRaw && Date.now() - st.lastAt < 3000)) {
      st.lastRaw = raw;
      st.lastAt = Date.now();
      scanResult(recordStamp(raw, "kamera"));
      setTimeout(tick, 1400);
      return;
    }
    setTimeout(tick, 200);
  };
  tick();
}
function scanResult(r) {
  scanMsg(r.msg, r.ok ? "ok" : "err");
  try {
    navigator.vibrate && navigator.vibrate(r.ok ? [60] : [30, 40, 30]);
  } catch (e) {}
  const target = BOOTH_N;
  const p = $("#sc-p");
  if (p)
    p.textContent =
      "Stempel " + Object.keys(S.stamp).length + " dari " + target + " booth";

  if (r.ok && r.p) {
    promptScanSuccess(r);
  }
}

function promptScanSuccess(r) {
  const slot = $("#sc-sheet-slot");
  if (!slot) return;
  const p = r.p;
  const d = DATA.find((x) => panelOf(x) === p);
  if (!d) return;
  const rate = Rating.get(p);
  const target = BOOTH_N;
  const pct = Math.min(100, Math.round((r.n / target) * 100));

  if (scanState) scanState.paused = true;

  slot.innerHTML = `
  <div class="scan-rate-scrim" data-act="scanRateClose">
    <div class="scan-rate-sheet" role="dialog" aria-modal="true" aria-labelledby="sc-r-title" onclick="event.stopPropagation()">
      <div class="scan-rate-header">
        <span class="scan-rate-pill">✅ Stempel Booth ${p} Berhasil Dicatat!</span>
        <button class="scan-rate-close" data-act="scanRateClose" aria-label="Lanjut Memindai">×</button>
      </div>

      <h3 id="sc-r-title" class="scan-rate-title">${esc(d.judul)}</h3>
      <div class="scan-rate-sub">${esc(d.ketua)} · ${esc(shortFak(fakOf(d)))}</div>

      <div class="scan-rate-progress-box">
        <div class="scan-rate-progress-text">
          <b>Total ${r.n} dari ${target} Booth</b>
          <span>${r.n >= target ? "🎉 Kupon Undian Siap Dibuka!" : `(Tinggal ${target - r.n} booth lagi ke undian)`}</span>
        </div>
        <div class="scan-rate-bar"><div class="scan-rate-bar-fill" style="width:${pct}%"></div></div>
      </div>

      <div class="scan-rate-box">
        <p class="scan-rate-q">Bagaimana kesan Anda terhadap inovasi ini?</p>
        <div class="rating-choice-grid">
          <button class="rating-large-btn up ${rate.myVote === "up" ? "active" : ""}" data-scan-rate="${p}" data-vote="up">
            <span class="r-emoji">👍🏻</span>
            <span class="r-lbl">Sukai</span>
          </button>
        </div>
      </div>

      <div class="scan-rate-footer" style="text-align:center;margin-top:2px">
        ${
          r.n >= target
            ? `<button class="btn gold scan-continue-btn" data-act="scanRateClose">🎉 Lengkap! Buka Undian Sekarang →</button>`
            : `<button class="rating-skip-btn" data-act="scanRateClose" style="font-size:12.5px;padding:7px 16px">Lewati (Lanjut Memindai) →</button>`
        }
      </div>
    </div>
  </div>`;
}

function closeScanRateSheet() {
  const slot = $("#sc-sheet-slot");
  if (slot) slot.innerHTML = "";
  if (scanState) {
    scanState.paused = false;
    scanState.lastRaw = "";
    scanState.lastAt = Date.now();
  }
}

function scanManual() {
  const i = $("#sc-i");
  if (!i || !i.value.trim()) return;
  scanResult(recordStamp(i.value, "manual"));
  i.value = "";
}
function closeScan() {
  if (scanState) {
    scanState.on = false;
    if (scanState.stream) scanState.stream.getTracks().forEach((t) => t.stop());
    scanState = null;
  }
  $("#scanlayer").innerHTML = "";
  render(S.tab);
  renderMapSafe();
}
/* izin kamera setelah registrasi */
function openCamPrime() {
  $("#layer").innerHTML =
    `<div class="scrim"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="cp">
    <h2 id="cp">Aktifkan kamera untuk undian</h2>
    <p style="color:var(--mut);font-size:14.5px;margin:8px 0 14px">Setiap booth punya QR di bawah posternya. Pindai ${BOOTH_N} QR untuk ikut undian ${esc(CONFIG.undian.hadiah)}. Peramban akan meminta izin kamera; gambar tidak disimpan.</p>
    <div class="row"><button class="btn gold" data-act="prime">Izinkan kamera</button><button class="btn ghost" data-act="primex">Nanti saja</button></div></div></div>`;
}
async function camPrime() {
  try {
    const s = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    s.getTracks().forEach((t) => t.stop());
    store.set("kamera", 1);
    closeLayer();
    toast("Kamera siap. Mulai jelajahi booth.");
    go("jelajah");
  } catch (e) {
    store.set("kamera", 1);
    closeLayer();
    toast("Kamera belum diizinkan. Anda bisa mengaktifkannya saat memindai.");
    go("jelajah");
  }
}
/* pendaftaran undian */
const Undi = {
  col: null,
  rows: [],
  init() {
    if (Att.db) {
      this.col = Att.db.collection("undian");
      this.col.onSnapshot(
        (sn) => {
          this.rows = sn.docs.map((x) => x.data() || {});
          if (S.tab === "hadir") viewHadir();
        },
        () => {},
      );
    }
  },
  id() {
    if (S.att.uid) return S.att.uid;
    let v = store.get("lid", "");
    if (!v) {
      v = "UP60-" + Math.random().toString(36).slice(2, 8).toUpperCase();
      store.set("lid", v);
    }
    return v;
  },
  async sync() {
    if (S.att.mode !== "db" || !this.col || !S.att.canWrite) return;
    const u = store.get("undian", {}) || {};
    try {
      await this.col.doc(this.id()).set({
        peran: S.peran || "",
        asal: store.get("asal", ""),
        stamps: Object.keys(S.stamp).map(Number),
        n: Object.keys(S.stamp).length,
        upd: new Date().toISOString(),
        ...u,
      });
    } catch (e) {}
  },
};
function undianKode(nama, t) {
  let h = 5381;
  const s = CONFIG.undian.garam + "|" + nama + "|" + t;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return "UND-" + h.toString(36).toUpperCase().padStart(6, "0").slice(-5);
}
function openUndian() {
  const n = Object.keys(S.stamp).length,
    target = (CONFIG.undian && CONFIG.undian.target) || 10,
    u = store.get("undian", null);
  if (n < target) {
    toast(
      "Kumpulkan minimal " +
        target +
        " stempel untuk membuka kupon undian (" +
        n +
        "/" +
        target +
        ").",
    );
    return;
  }
  if (u) {
    $("#layer").innerHTML =
      `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="ut"><button class="x close-btn" data-close="1" aria-label="Tutup Dialog"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><h2 id="ut" style="font-size:18px;font-weight:800;margin:0 0 4px">Kupon Undian Aktif</h2>
    <div class="loc" style="margin-top:14px"><b>${n}/${BOOTH_N} Stempel</b><span>${esc(u.nama)}<br>Kode Kupon: <b style="color:var(--gold);font-size:16px">${esc(u.kode)}</b></span></div>
    <p style="color:var(--mut);font-size:14px;margin-top:14px">Simpan kupon ini. Pengundian hadiah ${esc(CONFIG.undian.hadiah)} dilakukan panitia di akhir pameran.</p></div></div>`;
    return;
  }
  $("#layer").innerHTML =
    `<div class="scrim"><form class="sheet" id="uf" role="dialog" aria-modal="true" aria-labelledby="ut" novalidate>
    <div class="sheet-handle-bar"></div>
    <div class="sheet-top-bar" style="margin-bottom:8px">
      <div class="sheet-badge-group">
        <span class="tag-pill"><i class="dot"></i>Kupon Resmi</span>
        <span class="tag-panel">${n}/${BOOTH_N} Booth</span>
      </div>
      <button class="x close-btn" data-close="1" aria-label="Tutup Dialog">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <h2 id="ut" style="font-size:18px;font-weight:800;margin:0 0 4px">Klaim Kupon Undian ${esc(CONFIG.undian.hadiah)}</h2>
    <p style="color:var(--mut);font-size:14px;margin:0 0 16px">Selamat! Anda telah mengumpulkan ${n} stempel booth (syarat minimal: ${target}). Isi kontak di bawah untuk nomor undian resmi Anda.</p>
    <div class="kv" style="margin-top:0;gap:14px"><label class="f">Nama lengkap<input class="txt" id="un" autocomplete="name" value="${esc(store.get("nama", ""))}" required></label>
    <label class="f">Nomor WhatsApp<input class="txt" id="uw" type="tel" inputmode="tel" autocomplete="tel" placeholder="08xxxxxxxxxx" required></label>
    <p id="ue" style="color:var(--err);margin:0;font-size:14px" role="alert" hidden></p>
    <div style="display:flex;justify-content:flex-end;margin-top:8px">
      <button class="btn gold" type="submit">Daftarkan Kupon Undian</button>
    </div></div></form></div>`;
  $("#un").focus();
}
async function submitUndian(ev) {
  ev.preventDefault();
  const nama = $("#un").value.trim(),
    wa = $("#uw").value.replace(/[^\d+]/g, ""),
    err = (m) => {
      const e = $("#ue");
      e.textContent = m;
      e.hidden = false;
      const b = ev.target.querySelector("button[type=submit]");
      if (b) {
        b.disabled = false;
        b.textContent = "Daftarkan Kupon Undian";
      }
    };
  if (!nama) return err("Isi nama lengkap Anda.");
  if (!/^(\+62|62|0)8\d{7,12}$/.test(wa))
    return err("Nomor WhatsApp tidak valid. Contoh: 08123456789.");

  const btn = ev.target.querySelector("button[type=submit]");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Mendaftarkan Kupon...";
  }

  const existing = store.get("undian");
  const tu = existing && existing.tu ? existing.tu : new Date().toISOString(),
    kode = existing && existing.kode ? existing.kode : undianKode(nama, tu),
    rec = { nama, wa, kode, tu, boothCount: Object.keys(S.stamp).length };
  store.set("undian", rec);
  if (S.att.mode === "gas") {
    try {
      await new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler((res) => resolve(res))
          .withFailureHandler((err) => reject(err))
          .recordUndian({
            nama,
            wa,
            kode,
            boothCount: Object.keys(S.stamp).length,
            peran: S.peran || "",
            asal: store.get("asal", ""),
            uid: Undi.id(),
          });
      });
    } catch (e) {}
  } else if (S.att.mode === "gas-api") {
    try {
      await fetch(CONFIG.gasUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          action: "undian",
          nama,
          wa,
          kode,
          boothCount: Object.keys(S.stamp).length,
          peran: S.peran || "",
          asal: store.get("asal", ""),
          uid: Undi.id(),
        }),
      });
    } catch (e) {}
  } else {
    await Undi.sync();
    const C = CONFIG.undian;
    if (C.formAction) {
      try {
        const fd = new FormData(),
          F = C.fields || {};
        if (F.nama) fd.append(F.nama, nama);
        if (F.wa) fd.append(F.wa, wa);
        if (F.peran) fd.append(F.peran, S.peran || "");
        if (F.kode) fd.append(F.kode, kode);
        await fetch(C.formAction, {
          method: "POST",
          mode: "no-cors",
          body: fd,
        });
      } catch (e) {}
    }
  }
  closeLayer();
  render(S.tab);
  openUndian();
}
function undianPanel() {
  const isGas = S.att.mode === "gas",
    isDb = S.att.mode === "db";
  const rows = Undi.rows,
    adm = (S.att.admin && isDb) || isGas,
    done = rows.filter((r) => r.kode && (r.n || 0) >= BOOTH_N);
  const per = {};
  rows.forEach((r) =>
    (r.stamps || []).forEach((p) => (per[p] = (per[p] || 0) + 1)),
  );
  const low = [...Array(BOOTH_N)]
    .map((_, i) => [i + 1, per[i + 1] || 0])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .slice(0, 8);
  return `<div class="sec"><h2>Undian kunjungan booth</h2><div class="card">
    ${
      isGas
        ? `<p style="margin:0;font-size:14px;color:var(--mut)">Data peserta undian yang menyelesaikan ${BOOTH_N} booth otomatis masuk ke sheet "Undian". Panitia dapat mengundi pemenang secara acak dari tombol di bawah.</p>`
        : isDb
          ? `<div class="row" style="justify-content:space-between"><span><b class="num" style="font-size:28px">${rows.length}</b> peserta memindai</span><span><b class="num" style="font-size:28px">${done.length}</b> lengkap ${BOOTH_N}</span></div>
    <p style="margin:10px 0 0;font-size:14px;color:var(--mut)">Booth paling sedikit dikunjungi: ${low.map(([p, c]) => `<b>${p}</b> (${c})`).join(", ")}.</p>`
          : `<p style="margin:0;color:var(--mut);font-size:14px">Peserta lengkap masuk ke Google Sheets undian.</p>`
    }
    <div class="row" style="margin-top:12px;gap:8px;flex-wrap:wrap"><button class="btn ghost" data-act="qrbooth">QR booth untuk dicetak</button><button class="btn gold" data-go="pengundian">Buka Panggung Pengundian</button>${adm ? '<button class="btn ghost" data-act="draw" style="font-size:12.5px">Undi Cepat</button>' : ""}</div></div></div>`;
}
function drawWinner() {
  if (S.att.mode === "gas-api") {
    fetch(CONFIG.gasUrl + "?action=draw")
      .then((r) => r.json())
      .then((res) => {
        if (!res || res.status !== "success") {
          toast(
            res && res.message
              ? res.message
              : "Belum ada peserta undian yang terdaftar.",
          );
          return;
        }
        const w = res.winner;
        $("#layer").innerHTML =
          `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="wt"><button class="x" data-close="1" aria-label="Tutup">×</button><h2 id="wt">Pemenang undian</h2>
          <div class="loc" style="margin-top:14px"><b>★</b><span><b style="font-size:20px;color:#FFD36B">${esc(w.nama)}</b><br>${esc(w.wa)} · ${esc(w.kode)}<br>${esc(w.asal || "")}</span></div>
          <p style="color:var(--mut);font-size:14px">Pemenang diundi acak langsung dari sheet "Undian". Panggil nama pemenang di aula dan cocokkan kodenya.</p>
          <div class="row"><button class="btn gold" data-act="draw">Undi lagi</button></div></div></div>`;
      })
      .catch(() =>
        toast("Gagal mengundi. Periksa koneksi ke Google Apps Script."),
      );
    return;
  }
  if (S.att.mode === "gas") {
    google.script.run
      .withSuccessHandler((res) => {
        if (!res || res.status !== "success") {
          toast(
            res && res.message
              ? res.message
              : "Belum ada peserta undian yang terdaftar.",
          );
          return;
        }
        const w = res.winner;
        $("#layer").innerHTML =
          `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="wt"><button class="x" data-close="1" aria-label="Tutup">×</button><h2 id="wt">Pemenang undian</h2>
          <div class="loc" style="margin-top:14px"><b>★</b><span><b style="font-size:20px;color:#FFD36B">${esc(w.nama)}</b><br>${esc(w.wa)} · ${esc(w.kode)}<br>${esc(w.asal || "")}</span></div>
          <p style="color:var(--mut);font-size:14px">Pemenang diundi acak langsung dari sheet "Undian" (Kuota: 3 orang @ ${esc(CONFIG.undian.hadiah)}). Panggil nama pemenang di aula dan cocokkan kodenya.</p>
          <div class="row"><button class="btn gold" data-act="draw">Undi lagi</button></div></div></div>`;
      })
      .drawLotteryWinner();
    return;
  }
  const won = store.get("pemenang", []),
    pool = Undi.rows.filter(
      (r) => r.kode && (r.n || 0) >= BOOTH_N && !won.includes(r.kode),
    );
  if (!pool.length) {
    toast("Tidak ada peserta lengkap yang tersisa.");
    return;
  }
  const w = pool[Math.floor(Math.random() * pool.length)];
  won.push(w.kode);
  store.set("pemenang", won);
  $("#layer").innerHTML =
    `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="wt"><button class="x" data-close="1" aria-label="Tutup">×</button><h2 id="wt">Pemenang undian (${won.length}/3)</h2>
    <div class="loc" style="margin-top:14px"><b>★</b><span><b style="font-size:20px;color:#FFD36B">${esc(w.nama)}</b><br>${esc(w.wa)} · ${esc(w.kode)}<br>${esc(w.asal || "")}</span></div>
    <p style="color:var(--mut);font-size:14px">Pemenang ke-${won.length} dari 3 kuota doorprize @ ${esc(CONFIG.undian.hadiah)}. Panggil nama ini di lokasi dan cocokkan dengan kode undian di ponsel pemenang.</p>
    <div class="row"><button class="btn gold" data-act="draw">Undi lagi</button></div></div></div>`;
}
/* QR booth untuk dicetak panitia */
function viewQrBooth() {
  if (!S.isPanitia) {
    promptPanitiaPin(
      () => {
        render("qrbooth");
      },
      () => {
        go("hadir");
      },
    );
    return;
  }
  const u = getPublicUrl(),
    web = u.startsWith("http://") || u.startsWith("https://");
  $("#v-qrbooth").innerHTML =
    `<div class="noprint"><button class="link" data-go="hadir">← Kembali ke kehadiran</button>
    <div class="sec" style="margin-top:0"><h2>QR Booth untuk Dicetak Panitia</h2><p class="lead">Format utama: <b>1 QR per 1 lembar A4</b> untuk dipajang sebagai standing poster di setiap meja booth (panel 1 s.d. 60). ${web ? `QR berisi tautan web <b>${esc(u)}</b> beserta kode panel otomatis.` : "Tautan publik belum diisi di halaman Kehadiran, jadi QR hanya berisi kode teks."}</p>
    <div class="row" style="gap:10px;flex-wrap:wrap"><button class="btn gold" data-act="print-a4" style="font-weight:700">🖨️ Cetak (1 QR per Lembar A4)</button><button class="btn ghost" data-act="print-stiker" style="font-size:13px">📑 Format Lembar Stiker (6 per A4)</button></div></div></div>
    <div class="qrgrid" style="margin-top:14px">${DATA.map((d) => panelOf(d))
      .sort((a, b) => a - b)
      .map((p) => {
        return `<div class="qcard">
          <div class="qcard-print-header">
            <div class="qcard-univ">UNIVERSITAS PANCASILA · DIES NATALIS KE-60</div>
            <div class="qcard-event">Gelar Karya Inovasi &amp; Riset 2026</div>
          </div>
          <div class="qcard-panel-wrap">
            <span class="qcard-panel-lbl">BOOTH / PANEL</span>
            <span class="pn1">${p}</span>
          </div>
          <div class="qi" id="qb${p}"></div>
          <div class="qcard-code-wrap">
            <span class="qcard-code-lbl">KODE MANUAL:</span>
            <span class="cd">${boothCode(p)}</span>
          </div>
          <small class="qcard-screen-note"><b>Pindai untuk mencatat kunjungan</b></small>
          <div class="qcard-print-footer">
            <div class="qcard-instruksi">Pindai QR dengan kamera ponsel atau fitur Scan di web aplikasi</div>
            <div class="qcard-note">Kumpulkan 60 booth untuk klaim Kupon Doorprize Rp 150.000!</div>
          </div>
        </div>`;
      })
      .join("")}</div>`;
  if (typeof QRCode === "undefined") return;
  DATA.forEach((d) => {
    const p = panelOf(d),
      box = document.getElementById("qb" + p);
    if (!box) return;
    const c = boothCode(p);
    try {
      new QRCode(box, {
        text: web ? u.replace(/#.*$/, "") + "#b=" + c : c,
        width: 380,
        height: 380,
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {}
  });
}

/* ---------- Panggung Pengundian Doorprize (#pengundian) ---------- */
let undianAudioCtx = null;
let undianTickCount = 0;
let undianSoundEnabled = true;
let undianActivePool = [];
let undianFlaggedList = [];
let undianWinnersAudit = [];
let undianTableTab = "valid";
let undianIsSpinning = false;
let undianSelectedWinner = null;
let undianCurrentAngle = 0;
let undianConfettiList = [];

function evaluateLocalUndianRows() {
  const pool = [];
  const flagged = [];
  const seenUids = {};
  const wonCodes = new Set((undianWinnersAudit || []).filter((w) => w.status === "verified").map((w) => w.kode));

  // Ambil data kupon lokal dari store
  const savedMyUndian = store.get("undian", null);
  const rows = [...(Undi.rows || [])];
  if (savedMyUndian && savedMyUndian.kode && !rows.some((r) => r.kode === savedMyUndian.kode)) {
    rows.push({
      nama: savedMyUndian.nama || S.nama || "Pengunjung",
      wa: savedMyUndian.wa || "",
      kode: savedMyUndian.kode,
      n: Object.keys(S.stamp || {}).length,
      peran: S.peran || "umum",
      asal: S.asal || "Universitas Pancasila",
      uid: S.uid || ""
    });
  }

  rows.forEach((r, idx) => {
    if (!r || !r.kode) return;
    const stempel = Number(r.n || (r.stamps ? r.stamps.length : 0)) || 0;
    const uid = String(r.uid || "").trim();
    const nama = sanitize_(r.nama || "-");
    const wa = sanitize_(r.wa || "-");
    const kode = sanitize_(r.kode || "");

    let maskedWa = wa;
    if (wa.length >= 8) {
      maskedWa = wa.slice(0, 4) + "-****-" + wa.slice(-4);
    }

    const candidate = {
      id: idx + 1,
      nama: nama,
      wa: maskedWa,
      kode: kode,
      stempel: stempel,
      peran: r.peran ? (PERAN[r.peran] ? PERAN[r.peran].nama : r.peran) : "Pengunjung",
      fak: r.asal || "Universitas Pancasila",
      uid: uid
    };

    // Rule 1: Wajib 60 Booth
    if (stempel < BOOTH_N) {
      flagged.push({
        ...candidate,
        alasan: `Stempel belum lengkap (${stempel}/${BOOTH_N} booth)`,
        kategoriAnomali: "Syarat Belum Terpenuhi"
      });
      return;
    }

    // Rule 2: Anti-Duplikasi Pemenang Sah Terdahulu
    if (wonCodes.has(kode)) {
      flagged.push({
        ...candidate,
        alasan: "Sudah terdata sebagai pemenang sah sebelumnya",
        kategoriAnomali: "Pemenang Terdahulu"
      });
      return;
    }

    // Rule 3: Deteksi Multi-Akun Perangkat Sama
    if (uid) {
      seenUids[uid] = (seenUids[uid] || 0) + 1;
      if (seenUids[uid] > 1) {
        flagged.push({
          ...candidate,
          alasan: "Perangkat terdeteksi mendaftarkan nama/kupon ganda",
          kategoriAnomali: "Multi-Akun Perangkat Sama"
        });
        return;
      }
    }

    // Lolos Verifikasi Sah Masuk Roda
    pool.push(candidate);
  });

  return { pool, flagged };
}

function initUndianDataset() {
  undianWinnersAudit = store.get("undian_winners", []) || [];
  const cachedPool = store.get("undian_pool", null);
  const cachedFlagged = store.get("undian_flagged", null);
  if (Array.isArray(cachedPool)) {
    undianActivePool = cachedPool;
    undianFlaggedList = Array.isArray(cachedFlagged) ? cachedFlagged : [];
  } else {
    const localEval = evaluateLocalUndianRows();
    undianActivePool = localEval.pool;
    undianFlaggedList = localEval.flagged;
  }
}

function initUndianAudio() {
  if (!undianAudioCtx) {
    undianAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (undianAudioCtx.state === "suspended") {
    undianAudioCtx.resume();
  }
}

function playClockTick(speedFactor = 1) {
  if (!undianSoundEnabled) return;
  initUndianAudio();
  try {
    undianTickCount++;
    const isTick = undianTickCount % 2 === 0;
    const baseFreq = isTick ? 2200 : 1650;
    const osc = undianAudioCtx.createOscillator();
    const gain = undianAudioCtx.createGain();
    const filter = undianAudioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(baseFreq + (Math.random() * 80 - 40), undianAudioCtx.currentTime);
    filter.Q.setValueAtTime(6.5, undianAudioCtx.currentTime);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(baseFreq, undianAudioCtx.currentTime);
    const volume = Math.min(0.28, 0.09 + speedFactor * 0.14);
    gain.gain.setValueAtTime(volume, undianAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, undianAudioCtx.currentTime + 0.009);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(undianAudioCtx.destination);
    osc.start();
    osc.stop(undianAudioCtx.currentTime + 0.01);
  } catch (e) {}
}

function playCrystalTing() {
  if (!undianSoundEnabled) return;
  initUndianAudio();
  try {
    const osc = undianAudioCtx.createOscillator();
    const gain = undianAudioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1046.5, undianAudioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, undianAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, undianAudioCtx.currentTime + 1.4);
    osc.connect(gain);
    gain.connect(undianAudioCtx.destination);
    osc.start();
    osc.stop(undianAudioCtx.currentTime + 1.4);
  } catch (e) {}
}

function triggerUndianConfetti() {
  const c = document.getElementById("confettiCanvas");
  if (!c) return;
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const ctx = c.getContext("2d");
  undianConfettiList = [];
  const palette = ["#0a2a66", "#1857c4", "#f5a800", "#ffd36b", "#0f7b4b", "#ffffff"];
  for (let i = 0; i < 160; i++) {
    undianConfettiList.push({
      x: c.width / 2,
      y: c.height * 0.4,
      vx: (Math.random() - 0.5) * 24,
      vy: (Math.random() - 0.75) * 26,
      size: Math.random() * 8 + 4,
      color: palette[Math.floor(Math.random() * palette.length)],
      rot: Math.random() * 360,
      vrot: (Math.random() - 0.5) * 14,
      alpha: 1
    });
  }
  function animate() {
    ctx.clearRect(0, 0, c.width, c.height);
    let alive = false;
    undianConfettiList.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45;
      p.rot += p.vrot;
      p.alpha -= 0.007;
      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });
    if (alive) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

const UNDIAN_SECTOR_COLORS = [
  "#0a2a66",
  "#1857c4",
  "#f5a800",
  "#0f7b4b",
  "#1e293b",
  "#0284c7"
];

function drawUndianWheel() {
  const canvas = document.getElementById("wheelCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const num = (undianActivePool || []).length;
  const radius = canvas.width / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!num) {
    ctx.save();
    ctx.translate(radius, radius);
    ctx.beginPath();
    ctx.arc(0, 0, radius - 14, 0, 2 * Math.PI);
    ctx.fillStyle = "#f8fafc";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 8]);
    ctx.strokeStyle = "#cbd5e1";
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "700 24px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#475569";
    ctx.fillText("Menunggu Peserta Sah", 0, -12);
    ctx.font = "600 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Wajib Menyelesaikan 60 Booth", 0, 18);
    ctx.restore();
    return;
  }

  const arc = (2 * Math.PI) / num;
  ctx.save();
  ctx.translate(radius, radius);
  ctx.rotate(undianCurrentAngle);
  for (let i = 0; i < num; i++) {
    const sectorAngle = i * arc;
    ctx.beginPath();
    ctx.fillStyle = UNDIAN_SECTOR_COLORS[i % UNDIAN_SECTOR_COLORS.length];
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius - 14, sectorAngle, sectorAngle + arc);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.save();
    ctx.rotate(sectorAngle + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 24px 'Plus Jakarta Sans', sans-serif";
    ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
    ctx.shadowBlur = 4;
    let name = undianActivePool[i].nama;
    if (name.length > 17) name = name.substring(0, 16) + "…";
    ctx.fillText(name, radius - 46, 8);
    ctx.restore();

    ctx.save();
    ctx.rotate(sectorAngle);
    ctx.beginPath();
    ctx.arc(radius - 14, 0, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#f5a800";
    ctx.fill();
    ctx.restore();
  }
  ctx.restore();
}

function spinUndianWheelAction() {
  if (undianIsSpinning) return;
  if (!undianActivePool || undianActivePool.length === 0) {
    toast("Belum ada peserta sah yang menyelesaikan 60 booth di Google Sheets.");
    return;
  }
  const verifiedCount = (undianWinnersAudit || []).filter((w) => w.status === "verified").length;
  if (verifiedCount >= 3) {
    toast("Kuota pemenang (3 orang) telah terpenuhi.");
    return;
  }
  undianIsSpinning = true;
  const btn = document.getElementById("btnSpin");
  if (btn) btn.disabled = true;

  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  const winnerIdx = randomBuffer[0] % undianActivePool.length;
  undianSelectedWinner = undianActivePool[winnerIdx];

  const arc = (2 * Math.PI) / undianActivePool.length;
  const targetAngle = (3 * Math.PI) / 2 - (winnerIdx * arc + arc / 2);
  const fullRotations = 8;
  const totalDelta = fullRotations * 2 * Math.PI + (targetAngle - (undianCurrentAngle % (2 * Math.PI)));

  const duration = 6500;
  const startTime = performance.now();
  const initialAngle = undianCurrentAngle;
  let lastPegIndex = Math.floor(undianCurrentAngle / arc);
  const pointer = document.getElementById("wheelPointer");

  function spinFrame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 5);
    undianCurrentAngle = initialAngle + totalDelta * ease;
    drawUndianWheel();

    const currentPegIndex = Math.floor(undianCurrentAngle / arc);
    if (currentPegIndex !== lastPegIndex) {
      const speedFactor = 1 - progress;
      playClockTick(speedFactor);
      if (pointer) {
        pointer.classList.remove("recoil-left", "recoil-right");
        pointer.classList.add(undianTickCount % 2 === 0 ? "recoil-left" : "recoil-right");
        setTimeout(() => {
          if (pointer) pointer.classList.remove("recoil-left", "recoil-right");
        }, 32);
      }
      lastPegIndex = currentPegIndex;
    }

    if (progress < 1) {
      requestAnimationFrame(spinFrame);
    } else {
      undianIsSpinning = false;
      if (btn) btn.disabled = false;
      playCrystalTing();
      triggerUndianConfetti();
      openUndianWinnerModal(undianSelectedWinner);
    }
  }
  requestAnimationFrame(spinFrame);
}

function openUndianWinnerModal(c) {
  if (!c) return;
  const modal = document.getElementById("winnerModal");
  if (!modal) return;
  const nameEl = document.getElementById("modalWinnerName");
  const fakEl = document.getElementById("modalWinnerFak");
  const coupEl = document.getElementById("modalCoupon");
  const phoneEl = document.getElementById("modalPhone");
  if (nameEl) nameEl.textContent = c.nama;
  if (fakEl) fakEl.textContent = `${c.fak || "Universitas Pancasila"} · ${c.peran || "Pengunjung"}`;
  if (coupEl) coupEl.textContent = c.kode;
  if (phoneEl) phoneEl.textContent = c.wa || "-";
  modal.classList.add("show");
}

function renderUndianTable() {
  const searchEl = document.getElementById("inputSearch");
  const q = searchEl ? searchEl.value.toLowerCase() : "";
  const tbody = document.getElementById("tableBody");
  const thead = document.getElementById("tableHeaderRow");
  if (!tbody || !thead) return;

  if (undianTableTab === "valid") {
    thead.innerHTML = `
      <th>No</th>
      <th>Nomor Kupon</th>
      <th>Nama Lengkap</th>
      <th>Fakultas / Instansi</th>
      <th>Kontak Disamarkan</th>
      <th>Stempel Booth</th>
      <th>Status Validasi</th>
    `;
    const filtered = (undianActivePool || []).filter(
      (p) =>
        p.nama.toLowerCase().includes(q) ||
        p.kode.toLowerCase().includes(q) ||
        (p.fak && p.fak.toLowerCase().includes(q))
    );
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:36px 20px;color:var(--mut)"><div style="font-weight:800;font-size:14px;color:var(--ink);margin-bottom:6px">Belum Ada Peserta Sah yang Memenuhi Syarat</div><div style="font-size:12.5px;max-width:480px;margin:0 auto;line-height:1.5">Pengunjung harus menyelesaikan pemindaian seluruh 60 booth dan terdata di buku tamu registrasi aula agar masuk ke roda undian.</div></td></tr>`;
      return;
    }
    tbody.innerHTML = filtered
      .map(
        (p, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-family:monospace;font-weight:700;color:var(--primary)">${esc(p.kode)}</td>
        <td style="font-weight:700">${esc(p.nama)}</td>
        <td>${esc(p.fak)}</td>
        <td style="font-family:monospace;color:var(--mut)">${esc(p.wa)}</td>
        <td><b style="color:var(--ok)">${p.stempel || 60}</b> dari 60 booth</td>
        <td><span class="badge-status valid">Sah Masuk Roda</span></td>
      </tr>
    `
      )
      .join("");
  } else if (undianTableTab === "anomaly") {
    thead.innerHTML = `
      <th>No</th>
      <th>Nomor Kupon</th>
      <th>Nama Peserta</th>
      <th>Fakultas / Asal</th>
      <th>Stempel</th>
      <th>Kategori Anomali</th>
      <th>Alasan Diskualifikasi</th>
    `;
    const filtered = (undianFlaggedList || []).filter(
      (p) =>
        p.nama.toLowerCase().includes(q) ||
        p.kode.toLowerCase().includes(q) ||
        (p.alasan && p.alasan.toLowerCase().includes(q))
    );
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:36px 20px;color:var(--mut)"><div style="font-weight:800;font-size:14px;color:var(--ink);margin-bottom:6px">Tidak Ada Anomali Terdeteksi</div><div style="font-size:12.5px;max-width:480px;margin:0 auto;line-height:1.5">Seluruh data yang masuk diverifikasi secara berkala dari Google Sheets.</div></td></tr>`;
      return;
    }
    tbody.innerHTML = filtered
      .map(
        (p, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-family:monospace;font-weight:700;color:var(--mut)">${esc(p.kode)}</td>
        <td style="font-weight:700">${esc(p.nama)}</td>
        <td>${esc(p.fak)}</td>
        <td>${p.stempel}/60</td>
        <td><span class="badge-status anomaly">${esc(p.kategoriAnomali || "Anomali")}</span></td>
        <td style="color:var(--err);font-weight:600;font-size:12.5px">${esc(p.alasan)}</td>
      </tr>
    `
      )
      .join("");
  } else if (undianTableTab === "winners") {
    thead.innerHTML = `
      <th>No</th>
      <th>Nomor Kupon</th>
      <th>Nama Pemenang</th>
      <th>Fakultas / Asal</th>
      <th>Hadiah</th>
      <th>Waktu Pengesahan</th>
      <th>Status Keputusan</th>
    `;
    const filtered = (undianWinnersAudit || []).filter(
      (p) =>
        p.nama.toLowerCase().includes(q) ||
        p.kode.toLowerCase().includes(q)
    );
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:36px 20px;color:var(--mut)"><div style="font-weight:800;font-size:14px;color:var(--ink);margin-bottom:6px">Belum Ada Riwayat Pemenang</div><div style="font-size:12.5px;max-width:480px;margin:0 auto;line-height:1.5">Putar roda undian di atas untuk menetapkan pemenang doorprize resmi.</div></td></tr>`;
      return;
    }
    tbody.innerHTML = filtered
      .map(
        (p, idx) => `
      <tr>
        <td>${idx + 1}</td>
        <td style="font-family:monospace;font-weight:700;color:var(--primary)">${esc(p.kode)}</td>
        <td style="font-weight:700">${esc(p.nama)}</td>
        <td>${esc(p.fak)}</td>
        <td><b>${esc(p.prize)}</b></td>
        <td style="font-family:monospace;color:var(--mut)">${esc(p.time)}</td>
        <td>${p.status === "verified" ? '<span class="badge-status valid">Resmi Sah</span>' : '<span class="badge-status anomaly">Gugur</span>'}</td>
      </tr>
    `
      )
      .join("");
  }
}

function renderUndianAllViews() {
  drawUndianWheel();
  const verifiedWinners = (undianWinnersAudit || []).filter((w) => w.status === "verified");
  const isComplete = verifiedWinners.length >= 3;

  const chip = document.getElementById("winnerCountChip");
  if (chip) {
    chip.textContent = isComplete ? "3 / 3 Kuota Terpenuhi" : `${verifiedWinners.length} / 3 Terpilih`;
    chip.className = isComplete ? "badge-chip active" : "badge-chip";
  }

  const spinBtn = document.getElementById("btnSpin");
  const spinText = document.getElementById("btnSpinText");
  if (spinBtn && spinText) {
    if (isComplete) {
      spinBtn.disabled = true;
      spinText.textContent = "Semua 3 Pemenang Telah Sah";
    } else if ((undianActivePool || []).length === 0) {
      spinBtn.disabled = true;
      spinText.textContent = "Menunggu Peserta Sah (60 Booth)";
    } else {
      if (!undianIsSpinning) {
        spinBtn.disabled = false;
        spinText.textContent = `Putar Undian`;
      }
    }
  }

  const poolLive = document.getElementById("poolLiveText");
  if (poolLive) {
    poolLive.textContent = `Peserta Sah di Roda: ${(undianActivePool || []).length} Orang (60 Booth)`;
  }

  const podiumList = document.getElementById("podiumSlotsList");
  if (podiumList) {
    let slotsHtml = "";
    for (let i = 1; i <= 3; i++) {
      const winner = verifiedWinners[i - 1];
      if (winner) {
        slotsHtml += `
          <div class="podium-slot filled">
            <div class="slot-top-row">
              <span class="slot-label">Pemenang ke-${i}</span>
              <span class="slot-amount-tag">Rp 150.000</span>
            </div>
            <div class="slot-name">${esc(winner.nama)}</div>
            <div class="slot-meta">
              <span class="coupon-badge">${esc(winner.kode)}</span>
              <span>·</span>
              <span>${esc(winner.fak)}</span>
              <span style="margin-left:auto;font-family:monospace;color:var(--mut);font-size:11px">${esc(winner.time)}</span>
            </div>
          </div>
        `;
      } else {
        const isNext = i === verifiedWinners.length + 1;
        slotsHtml += `
          <div class="podium-slot ${isNext ? "active-target" : ""}">
            <div class="slot-top-row">
              <span class="slot-label">Slot Pemenang ke-${i}</span>
              <span style="font-size:11px;color:var(--mut)">Rp 150.000</span>
            </div>
            <div class="slot-empty-notice">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${isNext ? "Siap diundi pada putaran saat ini" : "Menunggu giliran putaran"}</span>
            </div>
          </div>
        `;
      }
    }
    podiumList.innerHTML = slotsHtml;
  }

  const bValid = document.getElementById("badgeCountValid");
  if (bValid) bValid.textContent = (undianActivePool || []).length;
  const bAnomaly = document.getElementById("badgeCountAnomaly");
  if (bAnomaly) bAnomaly.textContent = (undianFlaggedList || []).length;
  const bWinners = document.getElementById("badgeCountWinners");
  if (bWinners) bWinners.textContent = (undianWinnersAudit || []).length;

  renderUndianTable();
}

async function syncUndianFromGoogleSheets(silent = false) {
  const btn = document.getElementById("btnSyncSheet");
  const lbl = document.getElementById("syncLabel");
  const bSheet = document.getElementById("sheetStatusBadge");
  if (btn) btn.classList.add("loading");
  if (lbl) lbl.textContent = "Menghubungkan...";
  if (bSheet) bSheet.textContent = "Menyinkronkan...";

  try {
    const res = await fetch(CONFIG.gasUrl + "?action=getUndianPool");
    const json = await res.json();
    if (json && (json.status === "success" || json.status === "empty")) {
      undianActivePool = json.pool || [];
      undianFlaggedList = json.flagged || [];
      if (Array.isArray(json.winners)) {
        undianWinnersAudit = json.winners;
      }
      store.set("undian_pool", undianActivePool);
      store.set("undian_flagged", undianFlaggedList);
      store.set("undian_winners", undianWinnersAudit);
      if (bSheet) bSheet.textContent = "Live Terhubung";
      if (!silent) {
        toast(`Data Sheets terhubung: ${undianActivePool.length} peserta sah (60 booth).`);
      }
    } else {
      const localEval = evaluateLocalUndianRows();
      undianActivePool = localEval.pool;
      undianFlaggedList = localEval.flagged;
      if (bSheet) bSheet.textContent = "Offline (Lokal)";
      if (!silent) toast("Google Sheets belum merespons. Menampilkan data lokal.");
    }
  } catch (err) {
    console.warn("Gagal terhubung ke GAS getUndianPool:", err);
    const localEval = evaluateLocalUndianRows();
    undianActivePool = localEval.pool;
    undianFlaggedList = localEval.flagged;
    if (bSheet) bSheet.textContent = "Offline (Lokal)";
    if (!silent) toast("Koneksi cloud offline. Menampilkan antrean data lokal.");
  } finally {
    if (btn) btn.classList.remove("loading");
    if (lbl) lbl.textContent = "Sinkronkan Sheets";
    renderUndianAllViews();
  }
}

function viewPengundian() {
  initUndianDataset();
  const sec = $("#v-pengundian");
  if (!sec) return;

  sec.innerHTML = `
    <!-- Header Panggung -->
    <header class="stage-header">
      <div class="header-brand">
        <span class="brand-tag">Dies Natalis 60 UP</span>
        <div class="header-title-box">
          <h1>Sesi Pengundian Doorprize</h1>
          <p>Gelar Karya Penelitian dan Pengabdian kepada Masyarakat</p>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn-header-tool" id="btnSyncSheet" title="Tarik dan sinkronkan data terbaru dari Google Sheets">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
          <span id="syncLabel">Sinkronkan Sheets</span>
        </button>
        <button class="btn-header-tool" id="btnResetWinners" title="Kosongkan riwayat pemenang (reset sesi undian)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          <span>Reset Sesi</span>
        </button>
        <button class="btn-header-tool" id="btnSound">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          <span id="soundLabel">${undianSoundEnabled ? "Audio: Aktif" : "Audio: Senyap"}</span>
        </button>
        <button class="btn-header-tool" id="btnFullscreen">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
          <span>Layar Penuh</span>
        </button>
        <button class="btn-header-tool" data-go="beranda">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Kembali</span>
        </button>
      </div>
    </header>

    <!-- Konten Panggung Utama -->
    <main class="stage-content">
      <!-- Arena Roda -->
      <section class="arena-card">
        <div class="prize-banner">
          <div>
            <div class="prize-title-text">Hadiah Utama: Saldo Rp 150.000</div>
            <div style="font-size:12px;color:var(--mut);margin-top:2px">Kuota: 3 Orang Pemenang · Wajib Hadir Fisik & Scan 60/60 Booth</div>
          </div>
          <span class="prize-rule-badge">Syarat: 60 Booth Lengkap</span>
        </div>

        <div class="wheel-stage-wrapper">
          <div class="wheel-pointer" id="wheelPointer"></div>
          <canvas id="wheelCanvas" width="880" height="880"></canvas>
          <div class="wheel-hub">
            <span class="wheel-hub-text">UP 60</span>
            <span class="wheel-hub-sub">60 BOOTH</span>
          </div>
        </div>

        <button class="btn-spin-action" id="btnSpin">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          <span id="btnSpinText">Putar Roda Undian</span>
        </button>
      </section>

      <!-- Sidebar Podium -->
      <aside class="sidebar-wrapper">
        <div class="winner-podium-card">
          <div class="card-heading">
            <div>
              <h2>Daftar Pemenang Sah</h2>
              <p style="font-size:12px;color:var(--mut);margin-top:2px">Saldo Rp 150.000 (3 Kuota)</p>
            </div>
            <span class="badge-chip active" id="winnerCountChip">0 / 3 Terpilih</span>
          </div>

          <div class="podium-slots-list" id="podiumSlotsList"></div>

          <div class="podium-card-footer">
            <div style="display:flex;align-items:center;gap:6px">
              <span class="status-dot-pulse"></span>
              <span id="poolLiveText">Peserta Sah di Roda: 0 Orang</span>
            </div>
            <span class="badge-chip" id="sheetStatusBadge">Sheet Sinkron</span>
          </div>
        </div>
      </aside>
    </main>

    <!-- Bagian Tabel Peserta -->
    <section class="table-container-section">
      <div class="table-card-box">
        <div class="table-top-bar">
          <div class="table-nav-tabs">
            <button class="tab-btn active" id="tabBtnValid" data-utab="valid">
              <span>Eligble</span>
              <span class="tab-count" id="badgeCountValid">0</span>
            </button>
            <button class="tab-btn" id="tabBtnAnomaly" data-utab="anomaly">
              <span>Gugur</span>
              <span class="tab-count" id="badgeCountAnomaly">0</span>
            </button>
            <button class="tab-btn" id="tabBtnWinners" data-utab="winners">
              <span>Pemenang</span>
              <span class="tab-count" id="badgeCountWinners">0</span>
            </button>
          </div>
          <input type="search" id="inputSearch" class="table-search-input" placeholder="Cari nama atau nomor kupon..." />
        </div>

        <table class="data-table-el">
          <thead>
            <tr id="tableHeaderRow"></tr>
          </thead>
          <tbody id="tableBody"></tbody>
        </table>
      </div>
    </section>

    <!-- Modal Verifikasi -->
    <div class="modal-scrim-layer" id="winnerModal">
      <div class="modal-content-card">
        <span class="modal-tag">Hadiah Utama: Saldo Rp 150.000</span>
        <h2 class="modal-winner-title" id="modalWinnerName">Nama Peserta</h2>
        <p class="modal-winner-affiliation" id="modalWinnerFak">Fakultas Teknik · Mahasiswa</p>

        <div class="modal-details-grid">
          <div class="detail-row">
            <span class="detail-label">Nomor Kupon:</span>
            <span class="detail-value" id="modalCoupon">#UP60-XXXXX</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Nomor WhatsApp:</span>
            <span class="detail-value" id="modalPhone">0812-****-XXXX</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Validasi Misi:</span>
            <span class="detail-value" id="modalStamps" style="color:var(--ok)">60 dari 60 Booth Selesai</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Status Hadir:</span>
            <span class="detail-value" style="color:var(--ok)">Terdaftar di Buku Tamu</span>
          </div>
        </div>

        <div class="modal-actions-bar">
          <button class="btn-modal-confirm" id="btnConfirmWinner">Sahkan Pemenang</button>
          <button class="btn-modal-disqualify" id="btnDisqualifyWinner">Gugur (Panggil 3x)</button>
        </div>
      </div>
    </div>
  `;

  // Bind Events
  const spinBtn = document.getElementById("btnSpin");
  if (spinBtn) spinBtn.onclick = spinUndianWheelAction;

  const syncBtn = document.getElementById("btnSyncSheet");
  if (syncBtn) syncBtn.onclick = syncUndianFromGoogleSheets;

  const soundBtn = document.getElementById("btnSound");
  if (soundBtn) {
    soundBtn.onclick = () => {
      undianSoundEnabled = !undianSoundEnabled;
      const sLbl = document.getElementById("soundLabel");
      if (sLbl) sLbl.textContent = undianSoundEnabled ? "Audio: Aktif" : "Audio: Senyap";
      toast(undianSoundEnabled ? "Audio jam berputar diaktifkan" : "Audio dimatikan");
    };
  }

  const fsBtn = document.getElementById("btnFullscreen");
  if (fsBtn) {
    fsBtn.onclick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen();
      }
    };
  }

  const btnReset = document.getElementById("btnResetWinners");
  if (btnReset) {
    btnReset.onclick = async () => {
      if (confirm("Kosongkan daftar pemenang sah dan reset sesi roda undian?\n\n(Tindakan ini akan mengosongkan riwayat lokal dan sheet PemenangUndian)")) {
        undianWinnersAudit = [];
        store.set("undian_winners", []);
        store.set("pemenang", []);
        try {
          fetch(CONFIG.gasUrl + "?action=resetWinners").catch(() => {});
        } catch (e) {}
        renderUndianAllViews();
        renderUndianTable();
        toast("Daftar pemenang berhasil dikosongkan.");
      }
    };
  }

  const sInput = document.getElementById("inputSearch");
  if (sInput) sInput.oninput = renderUndianTable;

  document.querySelectorAll("[data-utab]").forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll("[data-utab]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      undianTableTab = btn.dataset.utab;
      renderUndianTable();
    };
  });

  const btnConfirm = document.getElementById("btnConfirmWinner");
  if (btnConfirm) {
    btnConfirm.onclick = () => {
      if (!undianSelectedWinner) return;
      const winner = {
        nama: undianSelectedWinner.nama,
        fak: undianSelectedWinner.fak,
        kode: undianSelectedWinner.kode,
        prize: "Rp 150.000",
        status: "verified",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " WIB"
      };
      undianWinnersAudit.unshift(winner);
      undianActivePool = undianActivePool.filter((p) => p.kode !== undianSelectedWinner.kode);
      store.set("undian_pool", undianActivePool);
      store.set("undian_winners", undianWinnersAudit);

      try {
        fetch(
          CONFIG.gasUrl +
            `?action=confirmWinner&kode=${encodeURIComponent(undianSelectedWinner.kode)}&nama=${encodeURIComponent(undianSelectedWinner.nama)}&hadiah=${encodeURIComponent("Hadiah Utama Saldo Rp 150.000")}&uid=${encodeURIComponent(undianSelectedWinner.uid || "")}`
        ).catch(() => {});
      } catch (e) {}

      renderUndianAllViews();
      const modal = document.getElementById("winnerModal");
      if (modal) modal.classList.remove("show");
      toast(`Pemenang ${winner.nama} resmi disahkan!`);
    };
  }

  const btnDisqualify = document.getElementById("btnDisqualifyWinner");
  if (btnDisqualify) {
    btnDisqualify.onclick = () => {
      if (!undianSelectedWinner) return;
      if (confirm(`Sahkan diskualifikasi untuk ${undianSelectedWinner.nama} karena tidak memenuhi 3x panggilan di aula?`)) {
        undianWinnersAudit.unshift({
          nama: undianSelectedWinner.nama,
          fak: undianSelectedWinner.fak,
          kode: undianSelectedWinner.kode,
          prize: "Rp 150.000",
          status: "disqualified",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " WIB"
        });
        undianActivePool = undianActivePool.filter((p) => p.kode !== undianSelectedWinner.kode);
        store.set("undian_pool", undianActivePool);
        store.set("undian_winners", undianWinnersAudit);
        renderUndianAllViews();
        const modal = document.getElementById("winnerModal");
        if (modal) modal.classList.remove("show");
        toast(`Pemenang digugurkan. Roda siap diundi kembali.`);
      }
    };
  }

  renderUndianAllViews();
  setTimeout(() => syncUndianFromGoogleSheets(true), 120);
}

/* ---------- Render & aksi ---------- */
function render(tab) {
  ({
    beranda: viewBeranda,
    jelajah: viewJelajah,
    sdgs: viewSdgs,
    denah: viewDenah,
    rute: viewRute,
    umpan: viewUmpan,
    hadir: viewHadir,
    qrbooth: viewQrBooth,
    pengundian: viewPengundian,
  })[tab]();
}
function toast(m) {
  const t = document.createElement("div");
  t.className = "toast";
  t.setAttribute("role", "status");
  t.textContent = m;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}
function addRoute(n) {
  if (!S.rute.includes(n)) {
    S.rute.push(n);
    store.set("rute", S.rute);
    toast("Ditambahkan ke rute");
  }
  renderTabs();
}
function delRoute(n) {
  S.rute = S.rute.filter((x) => x !== n);
  store.set("rute", S.rute);
  renderTabs();
}

document.addEventListener("click", async (e) => {
  const t = e.target.closest(
    "[data-go],[data-open],[data-open-sdg],[data-add],[data-del],[data-filter],[data-seg],[data-peran],[data-fr],[data-nilai],[data-act],[data-close],[data-map],[data-mseg],[data-mkl],[data-mroute],[data-mz],[data-rate],[data-sort],[data-scan-rate]",
  );
  if (!t) return;
  const d = t.dataset;
  if (d.scanRate && d.vote) {
    e.stopPropagation();
    Rating.vote(+d.scanRate, d.vote);
    const parent = t.closest(".rating-choice-grid");
    if (parent) {
      parent.querySelectorAll(".rating-large-btn").forEach((btn) => {
        if (btn === t) btn.classList.add("active");
        else btn.classList.remove("active");
      });
    }
    const currentN = Object.keys(S.stamp).length;
    setTimeout(() => {
      closeScanRateSheet();
      if (currentN >= BOOTH_N && !store.get("undian", null)) {
        closeScan();
        setTimeout(openUndian, 300);
      }
    }, 250);
    return;
  }
  if (d.act === "scanRateClose") {
    e.stopPropagation();
    const currentN = Object.keys(S.stamp).length;
    closeScanRateSheet();
    if (currentN >= BOOTH_N && !store.get("undian", null)) {
      closeScan();
      setTimeout(openUndian, 300);
    }
    return;
  }
  if (d.rate && d.vote) {
    e.stopPropagation();
    Rating.vote(+d.rate, d.vote);
    if (d.autoclose) {
      setTimeout(closeLayer, 350);
    }
    return;
  }
  if (d.sort === "fav") {
    S.f.sort = S.f.sort === "fav" ? "" : "fav";
    if (S.tab !== "jelajah") go("jelajah");
    else renderList();
    return;
  }
  if (d.map) {
    showOnMap(+d.map);
    return;
  }
  if (d.mseg !== undefined) {
    S.map.kat = d.mseg;
    renderMap();
    return;
  }
  if (d.mkl !== undefined) {
    S.map.kl = S.map.kl === d.mkl ? "" : d.mkl;
    renderMap();
    return;
  }
  if (d.mroute) {
    S.map.route = !S.map.route;
    renderMap();
    return;
  }
  if (d.mz) {
    zoomMap(d.mz);
    return;
  }
  if (d.act === "routeMap") {
    S.map = { ...S.map, kat: "", kl: "", q: "", route: true };
    go("denah");
    return;
  }
  if (d.close) {
    if (t.classList.contains("scrim") && e.target !== t) return;
    closeLayer();
    return;
  }
  if (d.go) {
    go(d.go);
    return;
  }
  if (d.open) {
    openDetail(+d.open);
    return;
  }
  if (d.openSdg) {
    openSdgSheet(+d.openSdg, d.from ? +d.from : null);
    return;
  }
  if (d.add) {
    addRoute(+d.add);
    if (d.keep) openDetail(+d.add);
    else render(S.tab);
    return;
  }
  if (d.del) {
    delRoute(+d.del);
    if (d.keep) openDetail(+d.del);
    else render(S.tab);
    return;
  }
  if (d.filter) {
    S.f = { q: "", kat: "", kl: "", sdg: "", fak: "", ...JSON.parse(d.filter) };
    go("jelajah");
    return;
  }
  if (d.seg) {
    S.f[d.seg] = d.v;
    renderList();
    return;
  }
  if (d.peran) {
    S.peran = S.peran === d.peran ? "" : d.peran;
    store.set("peran", S.peran);
    render(S.tab);
    return;
  }
  if (d.nilai) {
    S.nilai = +d.nilai;
    document
      .querySelectorAll("[data-nilai]")
      .forEach((b) =>
        b.setAttribute("aria-checked", b.dataset.nilai === d.nilai),
      );
    return;
  }
  if (d.act === "umpan") {
    openFeedback();
    return;
  }
  if (d.fr) {
    S.peran = d.fr;
    store.set("peran", S.peran);
    document
      .querySelectorAll("[data-fr]")
      .forEach((b) => b.setAttribute("aria-checked", b.dataset.fr === S.peran));
    renderDyn(true);
    return;
  }
  if (d.act === "lppmStats") {
    openLppmStats();
    return;
  }
  if (d.act === "scan") {
    openScan();
    return;
  }
  if (d.act === "scanx") {
    closeScan();
    return;
  }
  if (d.act === "undian") {
    openUndian();
    return;
  }
  if (d.act === "qrbooth") {
    if (!S.isPanitia) {
      promptPanitiaPin(() => {
        go("qrbooth");
      });
      return;
    }
    go("qrbooth");
    return;
  }
  if (d.act === "draw") {
    if (!S.isPanitia) {
      promptPanitiaPin(() => {
        drawWinner();
      });
      return;
    }
    drawWinner();
    return;
  }
  if (d.act === "prime") {
    camPrime();
    return;
  }
  if (d.act === "primex") {
    store.set("kamera", 1);
    closeLayer();
    go("jelajah");
    return;
  }
  if (d.act === "print-a4" || d.act === "print") {
    document.body.classList.remove("print-stiker");
    window.print();
    return;
  }
  if (d.act === "print-stiker") {
    document.body.classList.add("print-stiker");
    window.print();
    window.addEventListener(
      "afterprint",
      () => {
        document.body.classList.remove("print-stiker");
      },
      { once: true },
    );
    return;
  }
  if (d.act === "form") {
    openForm();
    return;
  }
  if (d.act === "gate") {
    openGate();
    return;
  }
  if (d.act === "skip") {
    S.skip = true;
    closeLayer();
    render(S.tab);
    return;
  }
  if (d.act === "reset") {
    S.f = { q: "", kat: "", kl: "", sdg: "", fak: "", sort: "" };
    viewJelajah();
    return;
  }
  if (d.act === "clearRute") {
    if (confirm("Hapus semua karya dari rute kunjungan Anda?")) {
      S.rute = [];
      store.set("rute", S.rute);
      viewRute();
      toast("Semua karya telah dihapus dari rute");
    }
    return;
  }
  if (d.act === "copyRute") {
    const items = S.rute
      .map((n) => DATA.find((x) => x.no === n))
      .filter(Boolean)
      .sort((a, b) => panelOf(a) - panelOf(b));
    const txt =
      "Rute Gelar Karya UP 60 Tahun\n" +
      items
        .map((d, i) => `${i + 1}. [${stan(d)}] ${d.judul} (${d.ketua})`)
        .join("\n");
    try {
      await navigator.clipboard.writeText(txt);
      toast("Rute disalin");
    } catch (err) {
      toast("Salin manual dari daftar di layar");
    }
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "sc-f") {
    e.preventDefault();
    scanManual();
  }
  if (e.target.id === "uf") submitUndian(e);
  if (e.target.id === "hf") submitForm(e);
  if (e.target.id === "ff") submitFeedback(e);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && $("#layer").innerHTML && !$(".gate")) closeLayer();
});

function boot() {
  document.documentElement.setAttribute("data-theme", "light");

  try {
    if (!store.get("ratingSynced_v2", 0)) {
      store.del("ratingStats");
      store.set("ratingSynced_v2", 1);
    }
    Rating.syncFromGas();
    setInterval(() => Rating.syncFromGas(), 45000);
  } catch (e) {
    console.warn("Rating sync init:", e);
  }

  const h = location.hash.slice(1);
  const initialTab =
    TABS.some((t) => t[0] === h) || h === "hadir" || h === "qrbooth" || h === "pengundian"
      ? h
      : h === "umpan"
        ? "umpan"
        : "beranda";
  show(initialTab);
  renderStats();
  renderTabs();
  if (!S.checked && h !== "hadir" && h !== "qrbooth" && h !== "umpan" && h !== "pengundian")
    openGate();
  if (h === "umpan") openFeedback();
  if (h.startsWith("b=")) handleDeepCode(h.slice(2), true);

  try {
    const ready = Att.init();
    if (ready && typeof ready.then === "function") {
      ready
        .then(() => {
          try {
            Fb.watch();
          } catch (e) {}
          try {
            Undi.init();
          } catch (e) {}
          try {
            flushScanQueue();
          } catch (e) {}
        })
        .catch((err) => console.warn("Att.init:", err));
    }
  } catch (e) {
    console.warn("Boot init:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
