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
    hadiah: "Rp 250.000", // hadiah undian bagi pengunjung yang memindai seluruh booth
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
    no: 1,
    judul:
      "Pengembangan Model Massive Transformative Purpose untuk Mendukung Kebijakan Reformasi Birokrasi Institutional branding Direktorat Jenderal Bea Cukai Indonesia",
    ketua: "Prof. Dr. Ir. Arissetyanto Nugroho, M.M.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Terapan",
    dana: 47800000,
    dampak:
      "Kebijakan: rekomendasi branding institusi untuk instansi pemerintah (DJBC)",
    sdg: [16],
    zona: "C",
    panel: 1,
  },
  {
    no: 2,
    judul:
      "Model Pengembangan Koperasi Merah Putih Desa Antajaya Tanjungsari Bogor Berbasis Tata Kelola, Literasi Keuangan, dan Digitalisasi untuk Mewujudkan Koperasi Desa Sehat dan Berkelanjutan",
    ketua: "Prof. Dr. Sri Widyastuti, S.E., M.M., M.Si.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Terapan",
    dana: 54800000,
    dampak: "Terapan: model koperasi desa dengan lokasi mitra jelas",
    sdg: [8, 1],
    zona: "C",
    panel: 2,
  },
  {
    no: 3,
    judul:
      "Modul and Aplikasi Optimasi Energi Efisiensi Gedung Berbasis Algoritma Cascading LCCA untuk Maksimalisasi ROI dan Efisiensi Energi",
    ketua: "Eka Sudarmaji, S.E., M.M., M.Com.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Terapan",
    dana: 59800000,
    dampak: "Terapan: modul dan aplikasi efisiensi energi gedung",
    sdg: [7, 11, 12],
    zona: "A",
    panel: 1,
  },
  {
    no: 4,
    judul:
      "Model Implementasi Standar Akuntansi Keuangan Entitas Privat Pelaporan Keuangan UMKM, Bumdes, Koperasi Berkelanjutan Berbasis Transvaluasi Nilai Dan Aplikasi Android.",
    ketua: "Dr. Syahril Djaddang, S.E., M.Si.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Terapan",
    dana: 29900000,
    dampak: "Terapan: aplikasi pelaporan keuangan UMKM, Bumdes, koperasi",
    sdg: [8, 9],
    zona: "C",
    panel: 3,
  },
  {
    no: 5,
    judul:
      "Dampak Algoritma Penilaian Kinerja Platform terhadap Ketidakpastian Pendapatan dan Stres Finansial Pekerja Gig: Implikasi bagi Pencapaian SDGs",
    ketua: "Prof. Dr. Nurmala Ahmar, S.E., M.Si.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 34850000,
    dampak: "Sosial: kerentanan finansial pekerja gig, terkait SDGs",
    sdg: [8, 10],
    zona: "C",
    panel: 4,
  },
  {
    no: 6,
    judul:
      "Membangun Generasi Wirausaha Muslim: Model Empiris Determinan Niat Kewirausahaan dalam Ekosistem Zakat–Wakaf",
    ketua: "Gunawan Baharuddin, S.E., M.Ec., Ph.D.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Sosial-ekonomi: kewirausahaan melalui ekosistem zakat-wakaf",
    sdg: [8, 1],
    zona: "C",
    panel: 5,
  },
  {
    no: 7,
    judul:
      "Revolusi Literasi Pajak Digital Berbasis CoreTax dan AI: Intervensi Cerdas untuk Tingkatkan Kepatuhan UMKM Jawa Barat",
    ketua: "Dr. Indah Masri, S.E., M.S.Ak.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Terapan: intervensi literasi pajak digital UMKM",
    sdg: [8, 16],
    zona: "C",
    panel: 6,
  },
  {
    no: 8,
    judul:
      "Sinergi Faktor Institusional dan Adopsi Teknologi: Model Peningkatan Efektivitas E-Government di Era Birokrasi 4.0",
    ketua: "Rafrini Amyulianthy, S.E., CA., M.S., Ak., Ph.D.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 41850000,
    dampak: "Kebijakan: efektivitas e-government dan layanan publik",
    sdg: [16, 9],
    zona: "C",
    panel: 7,
  },
  {
    no: 9,
    judul:
      "Studi BPR dan BPRS di Wilayah Pangan Strategis Indonesia: Analisis Dampak dengan Propensity Score Matching dan Difference-in-Difference",
    ketua: "Dr. Chaerani Nisa, S.E., M.S.M.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 29900000,
    dampak: "Evaluasi dampak program BPR/BPRS di wilayah pangan (PSM-DiD)",
    sdg: [2, 8],
    zona: "C",
    panel: 8,
  },
  {
    no: 10,
    judul:
      "Aksi Governansi Emisi Karbon : Demi Bumi dan Keberlanjutan Perusahaan",
    ketua: "Widyaningsih Azizah, S.E., Ak., M.Sc.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 34850000,
    dampak: "Lingkungan: tata kelola emisi karbon",
    sdg: [13, 12],
    zona: "C",
    panel: 9,
  },
  {
    no: 11,
    judul:
      "Integrasi Artificial Intelligence, Whistleblowing, dan Skeptisisme Auditor dalam Deteksi Kecurangan Perguruan Tinggi",
    ketua: "Tryas Chas Biandani, SE.,M.S.Ak",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 29900000,
    dampak: "Tata kelola: deteksi kecurangan di perguruan tinggi",
    sdg: [16, 4],
    zona: "C",
    panel: 10,
  },
  {
    no: 12,
    judul:
      "Analisis Efektivitas Pigouvian Tax terhadap Pengurangan Emisi Karbon pada Sektor Transportasi di Indonesia",
    ketua: "Dr. Yuli Ardianto, S.E., M.Si.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Kebijakan: pajak emisi karbon sektor transportasi",
    sdg: [13, 11],
    zona: "C",
    panel: 11,
  },
  {
    no: 13,
    judul:
      "Integrasi Konsumsi Halal dan Ekonomi Hijau: Model Perilaku Konsumsi terhadap Produk Pangan Berkelanjutan",
    ketua: "Dr. Nurul Hilmiyah, S.E., M.Ec.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44800000,
    dampak: "Lingkungan-sosial: konsumsi halal dan ekonomi hijau",
    sdg: [12, 13],
    zona: "C",
    panel: 12,
  },
  {
    no: 14,
    judul:
      "Transformasi dan Inovasi Bisnis UMKM Agri-Food Indonesia: Desain dan Pengembangan Circular Business Model Canvas (CBMC)",
    ketua: "Dr. Amelia Oktrivina D.S., S.E., M.Ak.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 29900000,
    dampak: "Terapan: model bisnis sirkular UMKM agri-food",
    sdg: [12, 8],
    zona: "C",
    panel: 13,
  },
  {
    no: 15,
    judul:
      "Pengembangan Model Strategi Pemasaran Koperasi Berbasis Perilaku Anggota untuk Keberlanjutan dan Daya Saing Koperasi Desa/Kelurahan Merah Putih Indonesia",
    ketua: "Dr. Lola Fitria Sari, S.E., M.M.",
    fak: "Fakultas Ekonomi & Bisnis",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Terapan: strategi pemasaran koperasi desa/kelurahan",
    sdg: [8, 1],
    zona: "C",
    panel: 14,
  },
  {
    no: 16,
    judul:
      "Karakterisasi dan Evaluasi Keamanan Bahan Baku Kosmetik Anti Aging Berbasis Fermentasi Kulit Buah Delima (Punica granatum L) Hasil Optimasi Scale-Up",
    ketua: "Dr. apt. Faizatun, S.Si., M.Si.",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44800000,
    dampak: "Hilirisasi: bahan baku kosmetik skala-up untuk industri",
    sdg: [9, 12, 3],
    zona: "D",
    panel: 1,
  },
  {
    no: 17,
    judul:
      "Inovasi Strategi Peningkatan Kepatuhan Minum Obat di DKI Jakarta melalui Pendekatan Berbasis Analisis Klaster untuk Segmentasi Pasien Tuberkulosis",
    ketua: "Dr. Nurita Andayani, S.Si., M.Si.",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44700000,
    dampak: "Kesehatan publik: kepatuhan obat pasien TB di DKI Jakarta",
    sdg: [3],
    zona: "D",
    panel: 2,
  },
  {
    no: 18,
    judul:
      "Pengembangan Kombinasi Nanoteknologi Gelasi Ionik Dan Fitosom Ekstrak Etanol Biji Kedelai Sebagai Pangan Fungsional Dengan Aktivitas AntiDepresan Secara In vivo",
    ketua: "apt. Sarah Zaidan, S.Si., M.Farm.",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44700000,
    dampak: "Produk: pangan fungsional antidepresan",
    sdg: [3, 2],
    zona: "D",
    panel: 3,
  },
  {
    no: 19,
    judul:
      "Inovasi Mikroemulsi Minyak Atsiri Serai Wangi dan Uji In Vitro terhadap Pediculus humanus",
    ketua: "apt. Safira Nafisa, S.Farm., M.Si.",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44600000,
    dampak: "Produk: mikroemulsi untuk pedikulosis",
    sdg: [3],
    zona: "D",
    panel: 4,
  },
  {
    no: 20,
    judul:
      "Tren Penggunaan, Kesesuaian Antibiotik Pasien Pneumonia Dewasa 2025 di RS Persahabatan dan RSUD Muhammad Sani Karimun untuk Penguatan Antimicrobial Stewardship",
    ketua: "Dr. apt. Sondang Khairani, S.Farm., M.Farm.",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44600000,
    dampak: "Kesehatan publik: antimicrobial stewardship di rumah sakit",
    sdg: [3, 17],
    zona: "D",
    panel: 5,
  },
  {
    no: 21,
    judul:
      "Studi Dekolorisasi Ekstrak Daun Kelor (Moringa oleifera) sebagai Inovasi dalam Peningkatan Daya Saing Bahan Baku Lokal untuk Industri Kosmetika",
    ketua: "Dr. Dra. apt. Liliek Nurhidayati, M.Si.",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44800000,
    dampak:
      "Hilirisasi: penguatan bahan baku lokal (kelor) untuk industri kosmetika",
    sdg: [9, 12],
    zona: "D",
    panel: 6,
  },
  {
    no: 22,
    judul:
      "Integrasi Edukasi Hari TB Sedunia dan Dukungan Psikososial sebagai Strategi Puskesmas Ciracas dalam Program Kemitraan Masyarakat",
    ketua: "Dr. apt. Rahmatul Qodriah, S.Farm., M.Farm.",
    fak: "Fakultas Farmasi",
    kat: "PKM",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Pengabdian Kepada Masyarakat",
    dana: 19150000,
    dampak:
      "Pengabdian: edukasi dan dukungan psikososial TB di Puskesmas Ciracas",
    sdg: [3, 17],
    zona: "E",
    panel: 1,
  },
  {
    no: 23,
    judul:
      "Model Perlindungan Hukum Terhadap Satwa Dalam Menghadapi Kerentanan Ekosistem Akibat Perubahan Iklim",
    ketua: "Dr. Rury Octaviani, S.H., M.H.",
    fak: "Fakultas Hukum",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Lingkungan-hukum: perlindungan satwa dan perubahan iklim",
    sdg: [15, 13, 16],
    zona: "C",
    panel: 15,
  },
  {
    no: 24,
    judul:
      "Eksplorasi Indikator Fisiologis dan Kebahagiaan Digital sebagai Upaya Meningkatkan Produktivitas Tenaga Kerja Industri dengan Pendekatan Machine learning",
    ketua: "Desinta Rahayu Ningtyas, S.T., M.T.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 43800000,
    dampak: "Terapan: produktivitas dan kesejahteraan pekerja industri",
    sdg: [8, 9],
    zona: "A",
    panel: 2,
  },
  {
    no: 25,
    judul:
      "Digital Twin Elektro–Termal Adaptif berbasis RL-MORL untuk Portable Charger PMSG Mandiri yang Effisien",
    ketua: "Dr. Ainil Syafitri, S.T., M.T.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 42350000,
    dampak: "Inovasi teknologi: charger mandiri energi",
    sdg: [7, 9],
    zona: "A",
    panel: 3,
  },
  {
    no: 26,
    judul:
      "Edge-Aware Multi-Task Convolutional Neural Network untuk Klasifikasi dan Interpretasi Artefak Purbakala",
    ketua: "Dr. Ir. Iman Paryudi, M.Sc",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44800000,
    dampak: "Budaya: interpretasi artefak purbakala dengan AI",
    sdg: [11, 9],
    zona: "A",
    panel: 4,
  },
  {
    no: 27,
    judul:
      "Change detection untuk Early Warning Potensi Ilegal Logging Kawasan Hutan Indonesia",
    ketua: "Dr. Ionia Veritawati, S.Si., M.T.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44750000,
    dampak: "Lingkungan: peringatan dini pembalakan liar",
    sdg: [15, 13],
    zona: "A",
    panel: 5,
  },
  {
    no: 28,
    judul:
      "Pengembangan Model Deteksi Anomali Struktural Jembatan Baja KA Tua Berbasis Reduksi Derau Stokastik dan Algoritma Lightweight Machine Learning On-Device",
    ketua: "Ir. Eka Maulana, M.M.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44800000,
    dampak: "Keselamatan: deteksi anomali struktur jembatan KA",
    sdg: [9, 11],
    zona: "A",
    panel: 6,
  },
  {
    no: 29,
    judul:
      "Reimagining Kawasan Gedung A.A. Maramis dan Lapangan Banteng sebagai World-Class Art Venue di Jakarta",
    ketua: "Dr. Ir. Yuke Ardhiati, M.T.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44800000,
    dampak: "Perkotaan-budaya: revitalisasi kawasan seni Jakarta",
    sdg: [11, 8],
    zona: "C",
    panel: 16,
  },
  {
    no: 30,
    judul:
      "Pengaruh clearance progressive punching terhadap tegangang sisa dan ketahanan korosi implant micro-plate dalam mendukung kemandirian industri implant dalam negeri",
    ketua: "Dr. Yani Kurniawan, S.T., M.T.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 44300000,
    dampak: "Kemandirian industri implant dalam negeri",
    sdg: [9, 3],
    zona: "A",
    panel: 7,
  },
  {
    no: 31,
    judul:
      "Model Interdependensi Antarrisiko Post Harvest Losses dalam Rantai Pasok Agroindustri Potato chips Menggunakan Fuzzy Interpretive Structural Modelling",
    ketua: "Dr. Ririn Regiana Dwi Satya, S.T., M.T.",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 42850000,
    dampak: "Terapan: susut pascapanen agroindustri",
    sdg: [2, 12],
    zona: "A",
    panel: 8,
  },
  {
    no: 32,
    judul:
      "Model Kesehatan Mental Berbasis Komunitas: Kesejahteraan Psikologis Masyarakat Lokal dalam Konteks Mass Tourism (Pariwisata Masal) di Labuan Bajo",
    ketua: "Dr. Ayu Dwi Nindyati, S.Psi., M.Si.",
    fak: "Fakultas Psikologi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 43800000,
    dampak: "Sosial: kesehatan mental komunitas di Labuan Bajo",
    sdg: [3, 11, 8],
    zona: "D",
    panel: 7,
  },
  {
    no: 33,
    judul:
      "Efektifitas Teknik Inokulasi dalam Mengurangi Kepercayaan terhadap Berita Palsu pada komunitas Ibu PKK RW 05 Srengseng Sawah",
    ketua: "Dr. Vinaya, S.Psi., M.Si.",
    fak: "Fakultas Psikologi",
    kat: "PKM",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Pengabdian Kepada Masyarakat",
    dana: 19150000,
    dampak: "Pengabdian: literasi hoaks Ibu PKK",
    sdg: [16, 4],
    zona: "E",
    panel: 2,
  },
  {
    no: 34,
    judul:
      "Era Post-Truth: Simulacrum Deepfake Politik Di Tiktok Terhadap Selective Exposure Dan Echo Chambers Kognitif Pemilih Indonesia",
    ketua: "Joko Utomo Hadibroto, S.Sos., M.I.Kom.",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Sosial-politik: deepfake dan literasi pemilih",
    sdg: [16],
    zona: "C",
    panel: 17,
  },
  {
    no: 35,
    judul:
      "Model Komunikasi Digital untuk Ketahanan Informasi Masyarakat Urban",
    ketua: "Nurul Hidayat, S.Sos., M.Han.",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Sosial: ketahanan informasi masyarakat urban",
    sdg: [16, 11],
    zona: "C",
    panel: 18,
  },
  {
    no: 36,
    judul:
      "Arsip Digital 3D Estetika Seni Pertunjukan WBTB Betawi Dalam Penguatan Pariwisata Budaya",
    ketua: "Dr. Ir. Sarojini Imran, M.Si",
    fak: "Fakultas Pariwisata",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Terapan",
    dana: 34850000,
    dampak: "Budaya: arsip digital seni pertunjukan Betawi",
    sdg: [11, 8],
    zona: "C",
    panel: 19,
  },
  {
    no: 37,
    judul:
      "Peran Supermarket Tourism dalam mendukung Pengembangan Wisata Belanja Berbasis Produk Lokal",
    ketua: "Dr. Yustisia Pasfatima Mbulu, S.ST.Par., M.Si.",
    fak: "Fakultas Pariwisata",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Penelitian Fundamental Reguler",
    dana: 39850000,
    dampak: "Ekonomi lokal: wisata belanja produk lokal",
    sdg: [8, 12],
    zona: "C",
    panel: 20,
  },
  {
    no: 38,
    judul:
      "Penerapan Digitalisasi Berbasis Aplikasi untuk Tari Keser Bojong dalam Pelestarian Budaya di Kampung Wisata Lembur Sawah Bogor",
    ketua: "Nungky Puspita, S.E., M.M.",
    fak: "Fakultas Pariwisata",
    kat: "PKM",
    kl: "Soshum",
    sumber: "Internal UP",
    hibah: "Hibah Internal",
    skema: "Pengabdian Kepada Masyarakat",
    dana: 19150000,
    dampak: "Pengabdian: digitalisasi tari di kampung wisata",
    sdg: [11, 8],
    zona: "E",
    panel: 3,
  },
  {
    no: 39,
    judul:
      "Sintesis Hijau Nanopartikel Zinc Oxide Menggunakan Ekstrak Daun Sirih Merah (Piper porphyrophyllum) sebagai Agen Bioreduktor untuk Pengembangan Gel Topikal Antiinflamasi",
    ketua: "Deni Rahmat",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PDD",
    dana: 50120000,
    dampak: "",
    sdg: [3, 9],
    zona: "D",
    panel: 8,
  },
  {
    no: 40,
    judul:
      "Pengembangan Kandidat Obat Antiinflamasi Berbasis Propolis: Kombinasi Analisis Metabolomik, Uji Seluler, dan Pemodelan Komputasional",
    ketua: "Diah Kartika Pratami",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 90000000,
    dampak: "",
    sdg: [3],
    zona: "D",
    panel: 9,
  },
  {
    no: 41,
    judul:
      "Potensi Kombinasi Glukomanan dan Ekstrak Daun Kelor sebagai Antiulcerative Colitis pada Hewan Coba Mencit",
    ketua: "Dian Ratih L",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 124060000,
    dampak: "",
    sdg: [3],
    zona: "D",
    panel: 10,
  },
  {
    no: 42,
    judul:
      "Pengembangan Formula Paper Soap dengan Manfaat 3 in 1 (Pembersih, Antioksidan, dan Antibakteri) dengan bahan aktif Nanopartikel EHP-Kitosan",
    ketua: "Esti Mumpuni",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PT-LP",
    dana: 245770000,
    dampak: "",
    sdg: [3, 12],
    zona: "D",
    panel: 11,
  },
  {
    no: 43,
    judul:
      "Eksplorasi Aktivitas Antikanker Derivat Pirazolin dari Kalkon α,β-Unsaturated Ketone dan Evaluasi Peran Nanoformulasi dalam Meningkatkan Aktivitas",
    ketua: "Moordiani",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PDP",
    dana: 47470000,
    dampak: "",
    sdg: [3],
    zona: "D",
    panel: 12,
  },
  {
    no: 44,
    judul:
      "Sintesis Konvergen Koil RF Dual-Resonansi 1,5T/3T Berbasis Substrat Dielektrik Tinggi: Analisis Karakteristik Elektromagnetik dan Miniaturisasi Geometri",
    ketua: "Adhi Mahendra",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 122750000,
    dampak: "",
    sdg: [3, 9],
    zona: "A",
    panel: 9,
  },
  {
    no: 45,
    judul:
      "Pemanfaatan Teknologi Modified Atmosphere Storage (MAS) Berbasis IoT untuk Mengurangi Food Loss sebagai Upaya Peningkatan Kualitas Rantai Pasok Buah",
    ketua: "Agri Suwandi",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PT-LP",
    dana: 268860000,
    dampak: "",
    sdg: [2, 12],
    zona: "A",
    panel: 10,
  },
  {
    no: 46,
    judul:
      "Studi Performa Konversi Energi Panas Komposit Polyols–Carbon sebagai Material Thermal Back-Up pada Heat Energy Storage Hybrid",
    ketua: "Dwi Rahmalina",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 124560000,
    dampak: "",
    sdg: [7, 13],
    zona: "A",
    panel: 11,
  },
  {
    no: 47,
    judul:
      "Pengembangan High Density Concrete (Hdc) Berbasis Material Lokal Indonesia Untuk Aplikasi Proteksi Radiasi Dan Infrastruktur Berat",
    ketua: "Jonbi",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PT-LP",
    dana: 401940000,
    dampak: "",
    sdg: [9, 11],
    zona: "A",
    panel: 12,
  },
  {
    no: 48,
    judul:
      "Pengembangan converter kit swap EV battery cooling menggunakan negative coefficient thermal energy material untuk ekosistem industri mobil listrik di Indonesia",
    ketua: "Reza Abdu Rahman",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 109000000,
    dampak: "",
    sdg: [7, 9, 13],
    zona: "A",
    panel: 13,
  },
  {
    no: 49,
    judul:
      "Dari Influencer ke Relawan Digital: Kredibilitas Aktor dalam Narasi ‘Warga Bantu Warga’ pada Krisis Bencana Banjir Sumatera",
    ketua: "Aprilianti Pratiwi",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PTM",
    dana: 33190000,
    dampak: "",
    sdg: [13, 11, 17],
    zona: "C",
    panel: 21,
  },
  {
    no: 50,
    judul:
      "Pemetaan Narasi Warga tentang Program Makan Bergizi Gratis: Studi Kualitatif Komunikasi Krisis di Tingkat Komunitas",
    ketua: "Aprilianti Pratiwi",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PTM",
    dana: 31910000,
    dampak: "",
    sdg: [2, 16],
    zona: "C",
    panel: 22,
  },
  {
    no: 51,
    judul:
      "Penguatan Modal Sosial melalui Digital Storytelling dan Literasi Keuangan Digital Partisipatif untuk Pengembangan Community-Based Tourism Berbasis Digital di Kabupaten Bogor",
    ketua: "Retor Aquinaldo Wirabuanaputera Kaligis",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 119640000,
    dampak: "",
    sdg: [8, 17, 11],
    zona: "C",
    panel: 23,
  },
  {
    no: 52,
    judul:
      "Komunikasi Risiko Tsunami Partisipatif berbasis Boardgame dan Pengetahuan Lokal untuk meningkatkan Resiliensi Berkelanjutan di Pesisir Donggala dan lombok",
    ketua: "Riza Darma Putra",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 134330000,
    dampak: "",
    sdg: [13, 11, 4],
    zona: "C",
    panel: 24,
  },
  {
    no: 53,
    judul:
      "Inklusivitas Sosial-Digital dalam Peluang dan Hasil Digital di Kalangan Masyarakat",
    ketua: "Umar Halim",
    fak: "Fakultas Ilmu Komunikasi",
    kat: "Penelitian",
    kl: "Soshum",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - Penelitian",
    skema: "PFR",
    dana: 110540000,
    dampak: "",
    sdg: [10, 9],
    zona: "C",
    panel: 25,
  },
  {
    no: 54,
    judul:
      "Integrasi Budidaya Maggot BSF dan Perencanaan Lingkungan Boarding School Al-Azhar Asy-Syarif untuk Reduksi Sampah Organik dan Produksi Pakan Ternak Nutrasetika",
    ketua: "Diah Kartika Pratami",
    fak: "Fakultas Farmasi",
    kat: "PKM",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - PkM",
    skema: "PKM",
    dana: 40000000,
    dampak: "",
    sdg: [12, 2],
    zona: "E",
    panel: 4,
  },
  {
    no: 55,
    judul:
      "Pengembangan Kandang Cerdas Terintegrasi Berbasis IoT untuk Optimalisasi Kesehatan dan Produktivitas Kambing",
    ketua: "Bambang Cahyadi",
    fak: "Fakultas Teknik",
    kat: "PKM",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - PkM",
    skema: "PKM",
    dana: 45910000,
    dampak: "",
    sdg: [2, 9],
    zona: "E",
    panel: 5,
  },
  {
    no: 56,
    judul:
      "Pemanfaatan Sampah Organik Sisa Makan Bergizi Gratis (MBG) untuk Produksi Pakan Ternak dan Ikan Lele sebagai Upaya Peningkatan Ekonomi dan Lingkungan Berkelanjutan",
    ketua: "Dwi Ariyani",
    fak: "Fakultas Teknik",
    kat: "PKM",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - PkM",
    skema: "PKM",
    dana: 48310000,
    dampak: "",
    sdg: [12, 2, 8],
    zona: "E",
    panel: 6,
  },
  {
    no: 57,
    judul:
      "Peningkatan Kapasitas Produksi dan Penjualan Abon Lele Melalui Penerapan Teknologi Mesin Pengaduk dan Pemasaran Digital",
    ketua: "Nur Yulianti Hidayah",
    fak: "Fakultas Teknik",
    kat: "PKM",
    kl: "IPTEKS",
    sumber: "BIMA Kemdiktisaintek",
    hibah: "BIMA - PkM",
    skema: "PKM",
    dana: 31840000,
    dampak: "",
    sdg: [8, 12],
    zona: "E",
    panel: 7,
  },
  {
    no: 58,
    judul:
      "Pengembangan Produk Jamu Poliherbal menjadi Obat Herbal Terstandar (OHT) sebagai Antidiabetes",
    ketua: "Ni Made Dwi Sandhiutami",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "Kemdiktisaintek",
    hibah: "Hilirisasi",
    skema: "Inovasi sosial BOPTN",
    dana: 187500000,
    dampak: "",
    sdg: [3, 9],
    zona: "D",
    panel: 13,
  },
  {
    no: 59,
    judul:
      "Pengembangan Engineered Cementitious Composite (ECC) ramah lingkungan melalui chemical enhancer berbasis Semen Hijau",
    ketua: "Jonbi",
    fak: "Fakultas Teknik",
    kat: "Penelitian",
    kl: "IPTEKS",
    sumber: "Kemdiktisaintek",
    hibah: "Hilirisasi",
    skema: "Ajakan Industri",
    dana: 348099000,
    dampak: "",
    sdg: [9, 13],
    zona: "A",
    panel: 14,
  },
  {
    no: 60,
    judul:
      "Inovasi Hilirisasi Kesehatan: Eksplorasi dan Saintifikasi Plant Derived Exosome-Like Nanoparticles (PDELNs) Jahe Merah sebagai Solusi Adjuvan pada Penyakit Paru Obstruksi Kronis (PPOK) dengan Manifestasi Eksaserbasi Akut",
    ketua: "Ni Made Dwi Sandhiutami",
    fak: "Fakultas Farmasi",
    kat: "Penelitian",
    kl: "Kesehatan",
    sumber: "BRIN",
    hibah: "RIIM",
    skema: "Riset dan Inovasi untuk Indonesia Maju Kompetisi Gelombang X",
    dana: 219700000,
    dampak: "",
    sdg: [3],
    zona: "D",
    panel: 14,
  },
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
const DENAH_SRC =
  "https://lh3.googleusercontent.com/d/1jhUx3sGFD8cxGM7cvoV4yPT8D4rPzvDc";
const PANELS = {
  1: [288.0, 829, 29.0, 27],
  2: [317.0, 829, 29.0, 27],
  3: [346.0, 829, 29.0, 27],
  4: [375.0, 829, 29.0, 27],
  5: [144.0, 830, 29.5, 26],
  6: [173.5, 830, 29.5, 26],
  7: [203.0, 830, 29.5, 26],
  8: [232.5, 830, 29.5, 26],
  9: [133.0, 909, 24.7, 30],
  10: [157.7, 909, 24.7, 30],
  11: [435, 757.1, 40, 23.9],
  12: [435, 733.2, 40, 23.9],
  13: [435, 709.3, 40, 23.9],
  14: [435, 685.4, 40, 23.9],
  15: [435, 661.5, 40, 23.9],
  16: [435, 637.6, 40, 23.9],
  17: [435, 613.7, 40, 23.9],
  18: [435, 589.8, 40, 23.9],
  19: [435, 565.9, 40, 23.9],
  20: [435, 542.0, 40, 23.9],
  21: [73, 542.0, 38, 23.7],
  22: [73, 565.7, 38, 23.7],
  23: [73, 589.4, 38, 23.7],
  24: [73, 613.1, 38, 23.7],
  25: [73, 636.7, 38, 23.7],
  26: [73, 660.4, 38, 23.7],
  27: [73, 684.1, 38, 23.7],
  28: [73, 707.8, 38, 23.7],
  29: [73, 731.5, 38, 23.7],
  30: [73, 755.2, 38, 23.7],
  31: [73, 778.8, 38, 23.7],
  32: [73, 802.5, 38, 23.7],
  33: [73, 826.2, 38, 23.7],
  34: [73, 849.9, 38, 23.7],
  35: [73, 873.6, 38, 23.7],
  36: [73, 897.3, 38, 23.7],
  37: [73, 920.9, 38, 23.7],
  38: [73, 944.6, 38, 23.7],
  39: [73, 968.3, 38, 23.7],
  40: [102.0, 1000, 33.7, 32],
  41: [135.7, 1000, 33.7, 32],
  42: [169.4, 1000, 33.7, 32],
  43: [203.1, 1000, 33.7, 32],
  44: [236.8, 1000, 33.7, 32],
  45: [270.5, 1000, 33.7, 32],
  46: [304.2, 1000, 33.7, 32],
  47: [337.9, 1000, 33.7, 32],
  48: [371.6, 1000, 33.7, 32],
  49: [405.3, 1000, 33.7, 32],
  50: [182.3, 909, 24.7, 30],
  51: [207.0, 909, 24.7, 30],
  52: [231.7, 909, 24.7, 30],
  53: [256.3, 909, 24.7, 30],
  54: [300.0, 909, 23.1, 30],
  55: [323.1, 909, 23.1, 30],
  56: [346.3, 909, 23.1, 30],
  57: [369.4, 909, 23.1, 30],
  58: [392.6, 909, 23.1, 30],
  59: [415.7, 909, 23.1, 30],
  60: [438.9, 909, 23.1, 30],
}; // nomor panel -> [x, y, lebar, tinggi] pada gambar denah 757x1600
const AREA = [
  [1, 4, "Tengah aula, sisi kanan, dekat kursi diskusi"],
  [5, 8, "Tengah aula, sisi kiri, dekat kursi diskusi"],
  [9, 10, "Deret belakang tengah, sisi kiri"],
  [50, 53, "Deret belakang tengah, sisi kiri"],
  [54, 60, "Deret belakang tengah, sisi kanan, dekat pintu keluar"],
  [11, 20, "Dinding kanan aula, dekat pintu masuk"],
  [21, 39, "Dinding kiri aula"],
  [40, 49, "Dinding belakang aula, berhadapan dengan panggung"],
];
const KCOL = { IPTEKS: "#1857C4", Kesehatan: "#0E8F82", Soshum: "#C77D00" };
const PERAN = {
  dosen: {
    nama: "Dosen",
    ket: "Skema dan kolaborasi",
    warna: "var(--r-dosen)",
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
const ink = (hex) => {
  const n = parseInt(hex.slice(1), 16),
    r = n >> 16,
    g = (n >> 8) & 255,
    b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 170 ? "#1a1a1a" : "#fff";
};
const sdgChip = (n) =>
  `<span class="sdg" title="SDGs ${n}: ${esc(SDGINFO[n][0])}" style="background:${SDGINFO[n][1]};color:${ink(SDGINFO[n][1])}">${n}</span>`;
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
    demo: false,
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
  if (!TABS.some((t) => t[0] === tab) && tab !== "hadir" && tab !== "qrbooth")
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
  const items = [
    [DATA.length, "karya"],
    [pen, "penelitian"],
    [DATA.length - pen, "PKM"],
    [sdgUsed, "dari 17 SDGs"],
    [effective().total, S.att.demo ? "hadir (contoh)" : "pengunjung hadir"],
  ];
  $("#stats").innerHTML = items
    .map(([v, l], i) =>
      i === 4
        ? `<button class="stat ${S.att.mode !== "local" && !S.att.demo ? "live" : ""}" data-go="hadir" aria-label="Lihat rincian kehadiran"><b class="num">${v}</b><span>${l}</span></button>`
        : `<div class="stat"><b class="num">${v}</b><span>${l}</span></div>`,
    )
    .join("");
}

/* ---------- Peran ---------- */
function roleChooser() {
  return `<div class="roles" role="radiogroup" aria-label="Peran pengunjung">${Object.entries(
    PERAN,
  )
    .map(
      ([k, p]) =>
        `<button class="role" role="radio" aria-checked="${S.peran === k}" data-peran="${k}">${p.nama}<small>${p.ket}</small></button>`,
    )
    .join("")}</div>`;
}
const SOROT = {
  dosen: {
    judul: "Pendanaan terbesar",
    ket: "Karya dengan dana disetujui tertinggi, lengkap dengan skema untuk mencari rekan kolaborasi.",
    pick: () => [...DATA].sort((a, b) => b.dana - a.dana).slice(0, 4),
  },
  mahasiswa: {
    judul: "Inspirasi topik lintas bidang",
    ket: "Satu karya dari tiap bidang dengan kaitan SDGs paling luas, sebagai titik awal topik skripsi atau magang.",
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
    judul: "Berorientasi terapan dan hilirisasi",
    ket: "Hibah hilirisasi, RIIM, penelitian terapan, dan PKM yang sudah berhubungan dengan mitra atau pengguna.",
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
    judul: "Karya yang dekat dengan kehidupan sehari-hari",
    ket: "Program pengabdian dan riset kesehatan yang manfaatnya langsung dirasakan masyarakat.",
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
    inRoute = S.rute.includes(d.no);
  let meta = "";
  if (p === "dosen")
    meta = `<div class="meta"><div><span class="k">Skema</span><br>${esc(d.hibah)} · ${esc(d.skema)}</div><div><span class="k">Dana disetujui</span><br><b class="num">${rp(d.dana)}</b></div></div>`;
  else if (p === "mahasiswa")
    meta = `<div class="meta"><div class="chips">${d.sdg.map(sdgChip).join("")}</div><div class="who">${esc(fakOf(d))}</div></div>`;
  else if (p === "mitra")
    meta = `<div class="meta">${terapan(d) ? '<div><span class="badge">Orientasi terapan</span></div>' : ""}<div>${esc(d.dampak || "Hibah eksternal: " + d.sumber)}</div></div>`;
  else if (p === "umum")
    meta = `<div class="meta"><div>${esc(d.dampak || "Penelitian dengan pendanaan eksternal (" + d.sumber + ")")}</div></div>`;
  else meta = `<div class="chips">${d.sdg.map(sdgChip).join("")}</div>`;
  return `<article class="work">
    <div class="top"><span class="pill"><i class="dot"></i>${esc(d.kat)} · ${esc(KLASTER[d.kl])}</span>${S.stamp[panelOf(d)] ? '<span class="pill ok">✓ Dikunjungi</span>' : ""}</div>
    <button style="all:unset;cursor:pointer;display:block" data-open="${d.no}" aria-label="Buka detail karya ${d.no}"><h3>${esc(d.judul)}</h3></button>
    <div class="who">${esc(d.ketua)}${p !== "mahasiswa" ? " · " + esc(fakOf(d)) : ""}</div>
    ${meta}
    <div class="foot"><button class="maplink" data-map="${d.no}" aria-label="Lihat panel ${panelOf(d)} di denah">Panel <span class="stan">${panelOf(d)}</span> · <u>Lihat di denah</u></button>
      <span class="row" style="gap:8px">${inRoute ? '<span class="added">Ada di rute</span>' : `<button class="btn sm ghost" data-add="${d.no}">Tambah ke rute</button>`}<button class="btn sm" data-open="${d.no}">Detail</button></span></div>
  </article>`;
}

/* ---------- Beranda ---------- */
function viewBeranda() {
  const el = $("#v-beranda");
  const kats = ["Penelitian", "PKM"],
    kls = ["IPTEKS", "Kesehatan", "Soshum"];
  const cnt = count(DATA, (d) => d.kat + "|" + d.kl);
  const fak = Object.entries(count(DATA, fakOf)).sort((a, b) => b[1] - a[1]);
  const maxF = Math.max(...fak.map((x) => x[1]));
  const src = count(DATA, (d) => d.sumber);
  const sg = SOROT[S.peran];
  el.innerHTML = `
  ${journeyCard()}
  <div style="margin-top:14px">${stampCard()}</div>
  <div class="card" style="margin-top:14px">
    <h2 style="font-size:16px;margin-bottom:4px">Tampilan untuk peran Anda</h2>
    <p style="margin:0 0 10px;color:var(--mut);font-size:14px">${S.peran ? esc(SOROT[S.peran].ket) + ". Ketuk peran lain untuk mengganti." : "Pilih satu peran. Informasi yang ditonjolkan menyesuaikan kebutuhan Anda."}</p>
    ${roleChooser()}
  </div>

  <div class="sec"><h2>Peta karya</h2><p class="lead">Ketuk satu kotak untuk melihat daftar karyanya.</p>
    <div class="card"><div class="matrix">
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
    </div></div></div>

  ${
    sg
      ? `<div class="sec"><h2>${esc(sg.judul)}</h2><p class="lead">${esc(sg.ket)}</p><div class="grid">${sg
          .pick()
          .map((d) => workCard(d))
          .join("")}</div></div>`
      : `<div class="sec"><h2>Mulai dari mana?</h2><p class="lead">Pilih peran di atas untuk sorotan karya yang sesuai, atau langsung jelajahi seluruh karya.</p><button class="btn" data-go="jelajah">Jelajahi 60 karya</button></div>`
  }

  <div class="sec"><h2>Karya per fakultas</h2>
    <div class="card"><div class="bars">${fak.map(([n, v]) => `<button class="bar" data-filter='${JSON.stringify({ fak: n === "Belum tercantum" ? "-" : n })}'><span class="t">${esc(n.replace("Fakultas ", ""))}</span><span class="tr"><i style="width:${(v / maxF) * 100}%"></i></span><span class="v num">${v}</span></button>`).join("")}</div></div></div>

  <div class="sec"><h2>Sumber pendanaan</h2>
    <div class="card"><div class="bars">${Object.entries(src)
      .map(
        ([n, v]) =>
          `<div class="bar"><span class="t">${esc(n)}</span><span class="tr"><i style="width:${(v / 60) * 100}%"></i></span><span class="v num">${v}</span></div>`,
      )
      .join("")}</div></div></div>

  <div class="sec"><h2>Kehadiran hari ini</h2>
    <div class="card"><div class="big"><b class="num">${S.att.total}</b><span>${S.att.demo ? "pengunjung (data contoh)" : "pengunjung tercatat"}</span></div>
    <div class="row" style="margin-top:12px">${S.checked ? "" : '<button class="btn gold" data-act="gate">Daftar hadir</button>'}<button class="btn ghost" data-go="hadir">Lihat rincian</button></div></div></div>`;
}
function journeyCard() {
  const seen = store.get("dilihat", []).length;
  const steps = [
    {
      ok: S.checked,
      t: "Daftar hadir",
      s: S.checked
        ? "Anda sudah tercatat hadir"
        : "Langkah pertama, hanya satu kali",
      a: 'data-act="gate"',
      b: "Daftar",
    },
    {
      ok: seen > 0,
      t: "Jelajahi karya",
      s: seen
        ? seen + " karya sudah Anda buka"
        : "Cari menurut bidang, SDGs, atau kata kunci",
      a: 'data-go="jelajah"',
      b: "Jelajah",
    },
    {
      ok: Object.keys(S.stamp).length >= BOOTH_N,
      t: "Pindai QR " + BOOTH_N + " booth",
      s:
        Object.keys(S.stamp).length +
        " dari " +
        BOOTH_N +
        " booth · syarat undian " +
        CONFIG.undian.hadiah,
      a: 'data-act="scan"',
      b: "Pindai",
    },
    {
      ok: S.rute.length > 0,
      t: "Susun rute kunjungan",
      s: S.rute.length
        ? S.rute.length + " karya di rute Anda"
        : "Simpan karya yang ingin ditemui, lihat posisinya di denah",
      a: 'data-go="rute"',
      b: "Rute",
    },
    {
      ok: S.fbDone,
      t: "Beri umpan balik",
      s: S.fbDone
        ? "Terima kasih atas masukan Anda"
        : "Sebelum pulang, empat isian singkat",
      a: 'data-go="umpan"',
      b: "Isi",
    },
  ];
  const next = steps.findIndex((x) => !x.ok);
  return `<div class="card"><h2 style="font-size:16px;margin-bottom:10px">Alur kunjungan Anda</h2><ol class="jr">${steps.map((x, i) => `<li class="${x.ok ? "done" : i === next ? "next" : ""}"><span class="n">${x.ok ? "✓" : i + 1}</span><span><span class="t">${x.t}</span><br><span class="s">${x.s}</span></span><button class="btn sm ${i === next ? "gold" : "ghost"}" ${x.a}>${x.ok ? "Buka" : x.b}</button></li>`).join("")}</ol></div>`;
}
function viewUmpan() {
  const seen = store.get("dilihat", []).length;
  $("#v-umpan").innerHTML =
    `<div class="sec" style="margin-top:0"><h2>Selesai berkunjung</h2><p class="lead">Langkah terakhir sebelum meninggalkan pameran. Karya yang Anda buka dan simpan tetap dapat diakses di perangkat ini.</p></div>
  <div class="card"><div class="row" style="justify-content:space-between"><span><b class="num" style="font-size:28px">${seen}</b> karya dibuka</span><span><b class="num" style="font-size:28px">${S.rute.length}</b> karya di rute</span></div>
  <div class="row" style="margin-top:12px"><button class="btn ghost sm" data-go="rute">Lihat rute</button></div></div>
  ${fbCard()}`;
}

/* ---------- Jelajah ---------- */
function filtered() {
  const f = S.f,
    q = f.q.trim().toLowerCase();
  return DATA.filter(
    (d) =>
      (!f.kat || d.kat === f.kat) &&
      (!f.kl || d.kl === f.kl) &&
      (!f.sdg || d.sdg.includes(+f.sdg)) &&
      (!f.fak || (f.fak === "-" ? !d.fak : d.fak === f.fak)) &&
      (!q ||
        (d.judul + " " + d.ketua + " " + (d.fak || "") + " " + d.skema)
          .toLowerCase()
          .includes(q)),
  );
}
function viewJelajah() {
  const el = $("#v-jelajah"),
    f = S.f;
  const faks = [...new Set(DATA.map((d) => d.fak).filter(Boolean))].sort();
  if (!el.dataset.built) {
    el.dataset.built = 1;
    el.innerHTML = `<div class="tools">
      <label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16l-4-4"/></svg><input id="q" type="search" placeholder="Cari judul, peneliti, atau fakultas" autocomplete="off" aria-label="Cari karya"></label>
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
      <select id="selFak" aria-label="Filter fakultas"><option value="">Semua fakultas</option>${faks.map((x) => `<option value="${esc(x)}">${esc(x.replace("Fakultas ", ""))}</option>`).join("")}${DATA.some((d) => !d.fak) ? '<option value="-">Belum tercantum</option>' : ""}</select></div>
    </div><div class="count"><span id="cnt"></span><button class="link" data-act="reset">Atur ulang</button></div><div class="grid" id="list"></div>`;
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
  $("#list").innerHTML = list.length
    ? list.map((d) => workCard(d)).join("")
    : `<div class="empty" style="grid-column:1/-1">Tidak ada karya yang cocok. Ubah kata kunci atau atur ulang filter.</div>`;
}

/* ---------- SDGs ---------- */
function viewSdgs() {
  const c = count(
    DATA.flatMap((d) => d.sdg),
    (x) => x,
  );
  $("#v-sdgs").innerHTML =
    `<div class="sec" style="margin-top:0"><h2>Keterkaitan dengan SDGs</h2><p class="lead">${Object.keys(c).length} dari 17 tujuan terhubung dengan karya yang dipamerkan. Satu karya dapat terhubung ke lebih dari satu tujuan. Ketuk satu tujuan untuk melihat karyanya.</p></div>
  <div class="sdgs">${Object.entries(SDGINFO)
    .map(([n, [l, col]]) => {
      const v = c[n] || 0;
      return `<button class="sdgt ${v ? "" : "zero"}" ${v ? `data-filter='${JSON.stringify({ sdg: n })}'` : "disabled"} style="background:${col};color:${ink(col)}"><span class="n num">${n}</span><span class="l">${esc(l)}</span><span class="c">${v ? v + " karya" : "Belum ada karya"}</span></button>`;
    })
    .join("")}</div>`;
}

/* ---------- Denah interaktif ---------- */
function viewDenah() {
  const el = $("#v-denah"),
    m = S.map;
  if (!el.dataset.built) {
    el.dataset.built = 1;
    el.innerHTML = `<div class="sec" style="margin-top:0"><h2>Denah pameran</h2><p class="lead">Ketuk nomor panel untuk melihat karyanya. Warna menunjukkan bidang; garis serong menandai PKM. Di ponsel, cubit untuk memperbesar.</p></div>
    <div class="tools">
      <label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16l-4-4"/></svg><input id="mq" type="search" inputmode="search" placeholder="Cari nomor panel, judul, atau peneliti" autocomplete="off" aria-label="Cari panel"></label>
      <div class="chiprow"><div class="seg" id="mseg" role="group" aria-label="Jenis karya"></div>
      <div class="leg" id="mleg"></div></div>
      <div class="row mrow" style="justify-content:space-between;flex-wrap:nowrap"><span id="mcnt" style="font-size:14px;color:var(--mut)"></span><span class="zoom">Perbesar <button data-mz="-" aria-label="Perkecil">−</button><button data-mz="+" aria-label="Perbesar">+</button></span></div>
    </div>
    <div class="mapwrap" id="mapwrap" style="margin-top:10px"><svg id="mapsvg" viewBox="0 0 757 1600" role="group" aria-label="Denah pameran dengan 60 panel poster A0"><defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#fff" stroke-width="2.4" stroke-opacity=".8"/></pattern></defs><image href="${DENAH_SRC}" x="0" y="0" width="757" height="1600"/><g id="ov"></g></svg></div>
    <p class="maphint" style="color:var(--mut);font-size:13px;margin:10px 0 0">Geser peta untuk menjelajah. Pintu masuk di kanan atas, pintu keluar di kanan bawah.</p>`;
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
    const k = $("#mapsvg").getBoundingClientRect().width / 757;
    $("#mapwrap").scrollTop = 500 * k;
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
        (d.judul + " " + d.ketua).toLowerCase().includes(q)),
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
  const k = svg.getBoundingClientRect().width / 757;
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
  $("#v-rute").innerHTML =
    `<div class="sec" style="margin-top:0"><h2>Rute Saya</h2><p class="lead">Karya yang Anda simpan, diurutkan menurut nomor panel supaya langkah Anda efisien. Rute tersimpan di perangkat ini.</p></div>` +
    (items.length
      ? `<div class="grid">${items.map((d) => `<article class="work"><div class="top"><span class="pill"><i class="dot"></i>${esc(d.kat)} · ${esc(KLASTER[d.kl])}</span></div><button style="all:unset;cursor:pointer;display:block" data-open="${d.no}"><h3>${esc(d.judul)}</h3></button><div class="who">${esc(d.ketua)}</div><div class="foot"><button class="maplink" data-map="${d.no}">Panel <span class="stan">${panelOf(d)}</span> · <u>Lihat di denah</u></button><button class="btn sm ghost" data-del="${d.no}">Hapus</button></div></article>`).join("")}</div>
  <div class="row" style="margin-top:16px"><button class="btn" data-act="copyRute">Salin daftar rute</button><button class="btn ghost" data-act="routeMap">Lihat rute di denah</button></div>`
      : `<div class="card empty">Belum ada karya di rute. Buka tab Jelajah, lalu pilih "Tambah ke rute".<br><br><button class="btn" data-go="jelajah">Jelajahi karya</button></div>`);
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
  const blocks = {
    skema: `<div class="${p === "dosen" ? "hi" : ""}"><span class="k">Skema dan pendanaan</span>${esc(d.hibah)} · ${esc(d.skema)}<br>${esc(d.sumber)}${p === "dosen" || !p ? ` · <b class="num">${rp(d.dana)}</b>` : ""}</div>`,
    sdg: `<div class="${p === "mahasiswa" ? "hi" : ""}"><span class="k">Terkait SDGs</span><div class="chips" style="margin-top:4px">${d.sdg.map((n) => `<span style="display:inline-flex;gap:6px;align-items:center;font-size:13.5px">${sdgChip(n)}${esc(SDGINFO[n][0])}</span>`).join("")}</div></div>`,
    dampak: `<div class="${p === "mitra" || p === "umum" ? "hi" : ""}"><span class="k">${p === "umum" ? "Manfaat" : "Aspek dampak"}</span>${esc(d.dampak || "Pendanaan eksternal (" + d.sumber + "); ringkasan dampak menyusul dari peneliti.")}${p === "mitra" && terapan(d) ? '<br><span class="badge" style="display:inline-block;margin-top:6px">Orientasi terapan</span>' : ""}</div>`,
    tim: `<div><span class="k">Ketua pengusul</span>${esc(d.ketua)}<br><span style="color:var(--mut)">${esc(fakOf(d))}</span></div>`,
  };
  const order = {
    dosen: ["skema", "tim", "dampak", "sdg"],
    mahasiswa: ["sdg", "dampak", "tim", "skema"],
    mitra: ["dampak", "tim", "skema", "sdg"],
    umum: ["dampak", "tim", "sdg", "skema"],
  }[p] || ["tim", "skema", "dampak", "sdg"];
  const cta =
    {
      dosen: "Catat untuk kolaborasi",
      mahasiswa: "Simpan sebagai inspirasi",
      mitra: "Catat untuk kemitraan",
      umum: "Tandai untuk dikunjungi",
    }[p] || "Tambah ke rute";
  $("#layer").innerHTML =
    `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="dt">
    <button class="x" data-close="1" aria-label="Tutup">×</button>
    <span class="pill"><i class="dot"></i>${esc(d.kat)} · ${esc(KLASTER[d.kl])}</span>
    <h2 id="dt" style="margin-top:10px">${esc(d.judul)}</h2>
    <div class="loc"><b>${panelOf(d)}</b><span>Panel poster ${panelOf(d)}, ukuran A0<br>${esc(panelArea(panelOf(d)))}<br>${S.stamp[panelOf(d)] ? "✓ Kunjungan tercatat" : "Pindai QR di bawah poster untuk mencatat kunjungan"}</span></div>
    <div class="row" style="margin-top:12px"><button class="btn ghost sm" data-map="${d.no}">Lihat di denah</button>${inRoute ? '<span class="added">Sudah ada di rute Anda</span><button class="btn ghost sm" data-del="${d.no}" data-keep="1">Hapus dari rute</button>'.replace("${d.no}", d.no) : `<button class="btn gold" data-add="${d.no}" data-keep="1">${cta}</button>`}</div>
    <div class="kv">${order.map((k) => blocks[k]).join("")}</div>
  </div></div>`;
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
const DEMO = {
  counts: { dosen: 41, mahasiswa: 126, mitra: 23, umum: 38 },
  hours: { 8: 18, 9: 46, 10: 51, 11: 33, 12: 12, 13: 29, 14: 34, 15: 5, 16: 0 },
};
function effective() {
  return S.att.demo
    ? {
        counts: DEMO.counts,
        hours: DEMO.hours,
        total: Object.values(DEMO.counts).reduce((a, b) => a + b, 0),
      }
    : S.att;
}
function viewHadir() {
  const a = effective(),
    tot = a.total || 0,
    max = Math.max(1, ...Object.values(a.counts));
  const modeLbl =
    {
      gas: "Langsung",
      "gas-api": "Langsung (Google Sheets via Apps Script)",
      sheet: "Langsung (Google Sheets)",
      local: "Lokal di perangkat ini",
    }[S.att.mode] || "Langsung";
  const hrs = [];
  for (let h = CONFIG.jamBuka; h <= CONFIG.jamTutup; h++) hrs.push(h);
  const maxH = Math.max(1, ...hrs.map((h) => a.hours[h] || 0));
  const url = getPublicUrl();
  $("#v-hadir").innerHTML = `
  <button class="link" data-go="beranda">← Kembali ke beranda</button>
  <div class="sec" style="margin-top:0"><h2>Kehadiran pengunjung</h2></div>
  <div class="card">
    <div class="row" style="justify-content:space-between"><span class="pill">${S.att.demo ? "Data contoh" : esc(modeLbl)}</span>${S.checked ? '<span class="added">Anda sudah tercatat hadir</span>' : ""}</div>
    <div class="big" style="margin-top:10px"><b class="num">${tot}</b><span>${S.att.demo ? "pengunjung (data contoh)" : "pengunjung tercatat"}</span></div>
    ${tot === 0 && !S.att.demo ? `<p style="color:var(--mut);margin:8px 0 0;font-size:14px">Belum ada pengunjung tercatat. Angka bertambah saat peserta memindai QR daftar hadir.</p>` : ""}
    ${Object.entries(PERAN)
      .map(
        ([k, p]) =>
          `<div class="rolebar"><span>${p.nama}</span><span class="tr"><i style="width:${((a.counts[k] || 0) / max) * 100}%;background:${p.warna}"></i></span><b class="num" style="text-align:right">${a.counts[k] || 0}</b></div>`,
      )
      .join("")}
    <div class="row" style="margin-top:16px"><button class="btn gold" data-act="form">${S.checked ? "Isi lagi untuk orang lain" : "Isi daftar hadir"}</button>${tot === 0 || S.att.demo ? `<button class="btn ghost" data-act="demo">${S.att.demo ? "Sembunyikan contoh" : "Lihat contoh tampilan"}</button>` : ""}</div>
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
  return `<div><span class="k" style="font-size:12px;font-weight:700;color:var(--mut);letter-spacing:.04em;text-transform:uppercase">Anda datang sebagai</span>
        <div class="roles" id="fr" role="radiogroup" aria-label="Peran" style="margin-top:6px">${Object.entries(
          PERAN,
        )
          .map(
            ([k, p]) =>
              `<button type="button" class="role" role="radio" aria-checked="${S.peran === k}" data-fr="${k}">${p.nama}${gate ? `<small>${p.ket}</small>` : ""}</button>`,
          )
          .join("")}</div></div>
      <div id="dyn" class="kv" style="margin-top:0;gap:14px" aria-live="polite"></div>
      <p id="fe" style="color:var(--err);margin:0;font-size:14px" role="alert" hidden></p>
      <button class="btn gold" type="submit" id="fs" hidden>Catat kehadiran</button>`;
}
const opts = (arr, ph) =>
  `<option value="">${ph}</option>` +
  arr.map((x) => `<option value="${esc(x)}">${esc(x)}</option>`).join("");
function renderDyn(focus) {
  const box = $("#dyn");
  if (!box) return;
  const p = S.peran,
    needName = S.att.mode !== "db";
  let h = "";
  if (p === "mahasiswa" || p === "dosen")
    h += `<label class="f">Fakultas asal<select class="txt" id="fa" required>${opts(CONFIG.fakultas, "Pilih fakultas")}</select></label>`;
  else if (p === "mitra")
    h += `<label class="f">Jenis mitra<select class="txt" id="fj" required>${opts(CONFIG.jenisMitra, "Pilih jenis mitra")}</select></label><label class="f">Nama instansi<input class="txt" id="fi" autocomplete="organization" required></label>`;
  if (needName)
    h += `<label class="f">${p === "mitra" ? "Nama Anda" : "Nama"}<input class="txt" id="fn" autocomplete="name" required></label>`;
  if (!h && p)
    h = `<p style="margin:0;color:var(--mut);font-size:14px">Tidak ada isian tambahan. Ketuk tombol di bawah untuk mencatat kehadiran.</p>`;
  box.innerHTML = h;

  // Isi otomatis dari riwayat localStorage
  const savedNama = store.get("nama", ""),
    savedAsal = store.get("asal", ""),
    savedFak = store.get("fakultas", ""),
    savedJenis = store.get("jenisMitra", ""),
    savedInstansi = store.get("instansi", "");

  const fa = $("#fa");
  if (fa && (savedFak || savedAsal)) fa.value = savedFak || savedAsal;
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
  $("#layer").innerHTML =
    `<div class="scrim" data-close="1"><form class="sheet" id="hf" role="dialog" aria-modal="true" aria-labelledby="ft" novalidate>
    <button type="button" class="x" data-close="1" aria-label="Tutup">×</button>
    <h2 id="ft">Daftar hadir</h2>
    <p style="color:var(--mut);margin:6px 0 14px;font-size:14px">Untuk mencatat pengunjung tambahan atau mengganti peran. Isian menyesuaikan peran yang dipilih.</p>
    <div class="kv" style="margin-top:0;gap:14px">${formFields(false)}</div></form></div>`;
  renderDyn(false);
  const first = $("#fr button");
  if (first) first.focus();
}
function openGate() {
  const dbm = S.att.mode === "db";
  $("#layer").innerHTML =
    `<div class="gate" role="dialog" aria-modal="true" aria-labelledby="gt">
    <div class="hero"><div class="wrap"><img src="${$("header.hero img").src}" alt="Logo Dies Natalis ke-60 Universitas Pancasila" width="76" height="72"><div><p class="eyebrow">Selamat datang</p><h1 id="gt">Gelar Karya Penelitian dan PKM, 60 Tahun UP</h1></div></div></div>
    <form class="wrapin" id="hf" novalidate>
      <ol class="flow" aria-label="Alur kunjungan"><li class="on"><b>1</b>Hadir</li><li><b>2</b>Jelajah</li><li><b>3</b>Rute</li><li><b>4</b>Umpan balik</li></ol>
      <h2 style="font-size:20px">Daftar hadir dulu</h2>
      <p style="color:var(--mut);margin:6px 0 16px;font-size:14.5px">Mulai dari peran Anda; isian berikutnya menyesuaikan. ${dbm ? "Nama tidak disimpan; hanya peran dan asal untuk penghitungan." : "Data dipakai untuk penghitungan pengunjung dan e-sertifikat."} Peran juga menentukan informasi yang ditonjolkan di katalog.</p>
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
  if (!peran) return err("Pilih peran Anda.");
  let asal = "";
  if (peran === "mahasiswa" || peran === "dosen") {
    asal = $("#fa") ? $("#fa").value : "";
    if (!asal) return err("Pilih fakultas asal Anda.");
    store.set("fakultas", asal);
  }
  if (peran === "mitra") {
    const j = $("#fj") ? $("#fj").value : "",
      n = $("#fi") ? ($("#fi").value || "").trim() : "";
    if (!j) return err("Pilih jenis mitra.");
    if (!n) return err("Isi nama instansi.");
    asal = j + " - " + n;
    store.set("jenisMitra", j);
    store.set("instansi", n);
  }
  if ($("#fn") && !nama) return err("Isi nama Anda.");
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
function fbCard() {
  const f = S.fb;
  return `<div class="sec"><h2>Umpan balik pameran</h2><div class="card">
    <p style="margin:0 0 12px;color:var(--mut);font-size:14.5px">Empat isian singkat. Masukan Anda dipakai panitia untuk menilai pameran dan menindaklanjuti karya yang diminati.</p>
    ${f.n ? `<div class="big" style="margin-bottom:12px"><b class="num" style="font-size:40px">${f.avg.toFixed(1).replace(".", ",")}</b><span>rata-rata dari ${f.n} penilaian (skala 5)</span></div>` : ""}
    <div class="row">${S.fbDone ? '<span class="added">Umpan balik Anda sudah terkirim</span>' : ""}<button class="btn ${S.fbDone ? "ghost" : "gold"}" data-act="umpan">${S.fbDone ? "Kirim lagi" : "Beri umpan balik"}</button></div>
  </div></div>`;
}
const NILAI = ["Kurang", "Cukup", "Baik", "Sangat baik", "Luar biasa"];
function openFeedback() {
  lastFocus = document.activeElement;
  S.nilai = 0;
  $("#layer").innerHTML =
    `<div class="scrim" data-close="1"><form class="sheet" id="ff" role="dialog" aria-modal="true" aria-labelledby="ut" novalidate>
    <button type="button" class="x" data-close="1" aria-label="Tutup">×</button>
    <h2 id="ut">Umpan balik</h2>
    <p style="color:var(--mut);margin:6px 0 14px;font-size:14px">Masukan Anda sangat berharga bagi evaluasi pameran dan tindak lanjut karya.</p>
    <div class="kv" style="margin-top:0;gap:14px">
      <label class="f">Nama Anda<input class="txt" id="ff-nama" autocomplete="name" placeholder="Nama Anda" value="${esc(store.get("nama", ""))}" required></label>
      <div><span class="k">Anda hadir sebagai</span><div class="roles" role="radiogroup" aria-label="Peran" style="margin-top:6px">${Object.entries(
        PERAN,
      )
        .map(
          ([k, p]) =>
            `<button type="button" class="role" role="radio" aria-checked="${S.peran === k}" data-fr="${k}">${p.nama}</button>`,
        )
        .join("")}</div></div>
      <div><span class="k">Penilaian pameran</span><div class="stars" role="radiogroup" aria-label="Penilaian 1 sampai 5" style="margin-top:6px">${NILAI.map((l, i) => `<button type="button" class="star" role="radio" aria-checked="false" data-nilai="${i + 1}"><span aria-hidden="true">${i + 1}</span><small>${l}</small></button>`).join("")}</div></div>
      <label class="f">Karya yang paling berkesan (opsional)<select class="txt" id="fk"><option value="">Tidak memilih</option>${DATA.map((d) => `<option value="${d.no}">${d.no}. ${esc(d.judul.length > 70 ? d.judul.slice(0, 70) + "…" : d.judul)}</option>`).join("")}</select></label>
      <label class="f">Komentar (opsional)<textarea class="txt" id="fc" maxlength="500" placeholder="Saran atau kesan Anda"></textarea></label>
      <p id="fe" style="color:var(--err);margin:0;font-size:14px" role="alert" hidden></p>
      <button class="btn gold" type="submit">Kirim umpan balik</button>
    </div></form></div>`;
  $(".stars .star").focus();
}
async function submitFeedback(ev) {
  ev.preventDefault();
  const err = (m) => {
    const e = $("#fe");
    e.textContent = m;
    e.hidden = false;
  };
  if (!S.nilai) return err("Pilih penilaian 1 sampai 5.");
  const namaInput = $("#ff-nama") ? $("#ff-nama").value.trim() : "";
  const nama = namaInput || store.get("nama", "") || "Anonim";
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
    closeLayer();
    toast("Umpan balik terkirim. Terima kasih.");
    render(S.tab);
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
  watch() {
    if (S.att.mode === "gas-api") {
      fetch(CONFIG.gasUrl + "?action=fbStats")
        .then((r) => r.json())
        .then((res) => {
          if (res) {
            S.fb = res;
            if (
              !$("#layer").innerHTML &&
              (S.tab === "umpan" || S.tab === "beranda")
            )
              render(S.tab);
          }
        })
        .catch(() => {});
      return;
    }
    if (S.att.mode === "gas") {
      google.script.run
        .withSuccessHandler((res) => {
          if (res) {
            S.fb = res;
            if (
              !$("#layer").innerHTML &&
              (S.tab === "umpan" || S.tab === "beranda")
            )
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
          fetch(CONFIG.gasUrl + "?action=fbStats")
            .then((r) => r.json())
            .then((res) => {
              if (res) {
                S.fb = res;
                renderStats();
              }
            })
            .catch(() => {});
        }, 1200);
      } catch (e) {}
      return;
    }
    if (S.att.mode === "gas") {
      return new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler((res) => {
            if (res && res.fb) S.fb = res.fb;
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
      await ref.set({ peran: row.peran, asal: row.asal, t: row.t });
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
    rows.push({ peran: row.peran, t: row.t });
    store.set("rowsLocal", rows);
    this.ingest(rows);
  },
};
function normPeran(v) {
  v = String(v || "").toLowerCase();
  return v.includes("dosen")
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
function recordStamp(raw) {
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
  const n = Object.keys(S.stamp).length;
  return {
    ok: true,
    p,
    n,
    msg:
      nama +
      " tercatat (" +
      n +
      " dari " +
      BOOTH_N +
      ")." +
      (n >= BOOTH_N ? " Lengkap!" : ""),
  };
}
function renderMapSafe() {
  try {
    if ($("#ov")) renderMap();
  } catch (e) {}
}
function handleDeepCode(raw, fromStart) {
  const r = recordStamp(decodeURIComponent(raw));
  history.replaceState(null, "", "#jelajah");
  if (!fromStart) show("jelajah");
  setTimeout(() => {
    toast(r.msg);
    if (r.ok && r.n >= BOOTH_N) openUndian();
  }, 300);
}
function stampCard() {
  const n = Object.keys(S.stamp).length,
    done = store.get("undian", null);
  return `<div class="card stamp"><div class="row" style="justify-content:space-between;flex-wrap:nowrap;align-items:baseline"><h2 style="font-size:16px">Undian ${esc(CONFIG.undian.hadiah)}</h2><b class="num" style="font-size:24px;color:var(--ok)">${n}/${BOOTH_N}</b></div>
    <p style="margin:4px 0 0;color:var(--mut);font-size:14px">Pindai QR di bawah poster setiap booth. Pengunjung yang melengkapi ${BOOTH_N} booth berhak ikut undian.</p>
    <div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="${BOOTH_N}" aria-valuenow="${n}" aria-label="Booth dikunjungi"><i style="width:${(n / BOOTH_N) * 100}%"></i></div>
    <div class="row"><button class="btn gold" data-act="scan">Pindai QR booth</button>${n >= BOOTH_N && !done ? '<button class="btn" data-act="undian">Daftar undian</button>' : ""}${done ? `<button class="btn ghost" data-act="undian">Bukti undian</button>` : ""}</div></div>`;
}
/* kamera */
let scanState = null;
function loadJsQR() {
  return window.jsQR ? Promise.resolve() : Promise.reject();
}
function openScan() {
  const n = Object.keys(S.stamp).length;
  $("#scanlayer").innerHTML =
    `<div class="scan" role="dialog" aria-modal="true" aria-label="Pindai QR booth">
    <div class="scan-top"><b id="sc-p">Booth ${n} dari ${BOOTH_N}</b><button data-act="scanx" aria-label="Tutup pemindai">×</button></div>
    <div class="scan-view"><video id="sc-v" playsinline muted></video><div class="scan-frame"></div></div>
    <div class="scan-msg" id="sc-m" role="status" aria-live="polite">Memulai kamera. Pilih Izinkan bila diminta.</div>
    <form class="scan-man" id="sc-f" novalidate><label>Kamera tidak bisa dipakai? Ketik kode di bawah QR<input id="sc-i" placeholder="UP60-07-XXXX" autocapitalize="characters" autocomplete="off" spellcheck="false"></label><button class="btn gold" type="submit">Catat</button></form>
  </div>`;
  scanState = { stream: null, on: true, lastRaw: "", lastAt: 0 };
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
      scanResult(recordStamp(raw));
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
  const p = $("#sc-p");
  if (p)
    p.textContent = "Booth " + Object.keys(S.stamp).length + " dari " + BOOTH_N;
  if (r.ok && r.n >= BOOTH_N) {
    closeScan();
    setTimeout(openUndian, 200);
  }
}
function scanManual() {
  const i = $("#sc-i");
  if (!i || !i.value.trim()) return;
  scanResult(recordStamp(i.value));
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
    u = store.get("undian", null);
  if (n < BOOTH_N) {
    toast("Baru " + n + " dari " + BOOTH_N + " booth. Lanjutkan memindai.");
    return;
  }
  if (u) {
    $("#layer").innerHTML =
      `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="ut"><button class="x" data-close="1" aria-label="Tutup">×</button><h2 id="ut">Anda terdaftar undian</h2>
    <div class="loc" style="margin-top:14px"><b>${BOOTH_N}/${BOOTH_N}</b><span>${esc(u.nama)}<br>Kode undian <b style="color:#FFD36B">${esc(u.kode)}</b></span></div>
    <p style="color:var(--mut);font-size:14px">Simpan layar ini. Pengumuman pemenang dilakukan panitia di lokasi pameran.</p></div></div>`;
    return;
  }
  $("#layer").innerHTML =
    `<div class="scrim"><form class="sheet" id="uf" role="dialog" aria-modal="true" aria-labelledby="ut" novalidate>
    <h2 id="ut">Seluruh ${BOOTH_N} booth lengkap</h2>
    <p style="color:var(--mut);font-size:14.5px;margin:8px 0 14px">Isi data kontak agar panitia dapat menghubungi pemenang undian ${esc(CONFIG.undian.hadiah)}.</p>
    <div class="kv" style="margin-top:0;gap:14px"><label class="f">Nama lengkap<input class="txt" id="un" autocomplete="name" value="${esc(store.get("nama", ""))}" required></label>
    <label class="f">Nomor WhatsApp<input class="txt" id="uw" type="tel" inputmode="tel" autocomplete="tel" placeholder="08xxxxxxxxxx" required></label>
    <p id="ue" style="color:var(--err);margin:0;font-size:14px" role="alert" hidden></p>
    <button class="btn gold" type="submit">Daftar undian</button></div></form></div>`;
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
    };
  if (!nama) return err("Isi nama lengkap Anda.");
  if (!/^(\+62|62|0)8\d{7,12}$/.test(wa))
    return err("Nomor WhatsApp tidak valid. Contoh: 08123456789.");
  const tu = new Date().toISOString(),
    kode = undianKode(nama, tu),
    rec = { nama, wa, kode, tu };
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
    <div class="row" style="margin-top:12px"><button class="btn ghost" data-act="qrbooth">QR booth untuk dicetak</button>${adm ? '<button class="btn gold" data-act="draw">Undi pemenang</button>' : ""}</div></div></div>`;
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
          <p style="color:var(--mut);font-size:14px">Pemenang diundi acak langsung dari sheet "Undian". Panggil nama pemenang di aula dan cocokkan kodenya.</p>
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
    `<div class="scrim" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="wt"><button class="x" data-close="1" aria-label="Tutup">×</button><h2 id="wt">Pemenang undian</h2>
    <div class="loc" style="margin-top:14px"><b>★</b><span><b style="font-size:20px;color:#FFD36B">${esc(w.nama)}</b><br>${esc(w.wa)} · ${esc(w.kode)}<br>${esc(w.asal || "")}</span></div>
    <p style="color:var(--mut);font-size:14px">Dari ${pool.length} peserta yang tersisa. Panggil nama ini di lokasi dan cocokkan dengan kode undian di ponsel pemenang.</p>
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
    <div class="sec" style="margin-top:0"><h2>QR booth untuk dicetak</h2><p class="lead">Satu QR per panel; tempel di bawah poster nomor yang sama. ${web ? `QR berisi tautan web <b>${esc(u)}</b> beserta kode panel.` : "Tautan publik belum diisi di halaman Kehadiran, jadi QR hanya berisi kode dan hanya terbaca oleh pemindai di dalam halaman ini."}</p>
    <div class="row"><button class="btn gold" data-act="print">Cetak (2 × 3 per A4)</button></div></div></div>
    <div class="qrgrid" style="margin-top:14px">${DATA.map((d) => panelOf(d))
      .sort((a, b) => a - b)
      .map((p) => {
        const d = DATA.find((x) => panelOf(x) === p);
        return `<div class="qcard"><span class="pn1">Panel ${p}</span><div class="qi" id="qb${p}"></div><span class="cd">${boothCode(p)}</span><small>${esc(d.judul.length > 80 ? d.judul.slice(0, 78) + "…" : d.judul)}</small><small><b>Pindai untuk mencatat kunjungan</b></small></div>`;
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
        width: 176,
        height: 176,
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {}
  });
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
    "[data-go],[data-open],[data-add],[data-del],[data-filter],[data-seg],[data-peran],[data-fr],[data-nilai],[data-act],[data-close],[data-map],[data-mseg],[data-mkl],[data-mroute],[data-mz]",
  );
  if (!t) return;
  const d = t.dataset;
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
    if (e.target === t || t.classList.contains("x")) closeLayer();
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
  if (d.act === "print") {
    window.print();
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
    S.f = { q: "", kat: "", kl: "", sdg: "", fak: "" };
    viewJelajah();
    return;
  }
  if (d.act === "demo") {
    S.att.demo = !S.att.demo;
    renderStats();
    viewHadir();
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
  const h = location.hash.slice(1);
  const initialTab =
    TABS.some((t) => t[0] === h) || h === "hadir" || h === "qrbooth"
      ? h
      : h === "umpan"
        ? "umpan"
        : "beranda";
  show(initialTab);
  renderStats();
  renderTabs();
  if (!S.checked && h !== "hadir" && h !== "qrbooth" && h !== "umpan")
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
