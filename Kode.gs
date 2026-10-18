/**
 * BACKEND GELAR KARYA 60 TAHUN UP (Lengkap untuk Vercel + Google Spreadsheet)
 * Relasi terhubung via: ID Pengunjung (UID), Nama, Peran, dan Asal
 */

// Helper: Memastikan Sheet ada, jika belum ada otomatis dibuat dengan header
function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    if (headers && headers.length) {
      sheet.appendRow(headers);
    }
  }
  return sheet;
}

/**
 * Jalankan fungsi ini SEKALI di editor Google Apps Script (klik dropdown fungsi > setupInitialSheets > Run)
 * jika ingin seluruh sheet (Hadir, UmpanBalik, Undian, ScanBooth) langsung dibuat seketika dengan header lengkap.
 */
function setupInitialSheets() {
  getOrCreateSheet("Hadir", ["Timestamp", "Nama", "Peran", "Fakultas / Asal", "ID Pengunjung"]);
  getOrCreateSheet("UmpanBalik", ["Timestamp", "Nama", "Peran", "Fakultas / Asal", "Nilai", "Karya", "Komentar", "ID Pengunjung"]);
  getOrCreateSheet("Undian", ["Timestamp", "Nama", "WhatsApp", "Kode", "Jumlah Booth", "Peran", "Asal", "ID Pengunjung"]);
  getOrCreateSheet("ScanBooth", ["Timestamp", "ID Pengunjung", "Nama", "Peran", "Fakultas / Asal", "No Booth", "Judul Karya", "Fakultas Booth", "Total Stempel", "Metode"]);
  getOrCreateSheet("RatingBooth", ["Timestamp", "ID Pengunjung", "Nama", "Peran", "Fakultas / Asal", "No Booth", "Judul Karya", "Rating", "Total Up", "Total Down"]);
}

// Helper: Sanitasi input teks
function sanitize_(val) {
  if (val === undefined || val === null) return "";
  return String(val)
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 500);
}

// 1. Melayani Request GET (API Stats, Feedback Stats, Undian, Scan Stats, atau Tampilan Web)
function doGet(e) {
  if (e && e.parameter) {
    const action = e.parameter.action;
    if (action === "stats") {
      return ContentService.createTextOutput(JSON.stringify(getLiveStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "fbStats") {
      return ContentService.createTextOutput(JSON.stringify(getFeedbackStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "draw") {
      return ContentService.createTextOutput(JSON.stringify(drawLotteryWinner()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "scanStats") {
      return ContentService.createTextOutput(JSON.stringify(getScanStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "ratingStats") {
      return ContentService.createTextOutput(JSON.stringify(getRatingStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // Fallback jika dibuka langsung via link Web App GAS
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Gelar Karya 60 Tahun UP")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag("viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
}

// 2. Menerima Data POST dari Frontend (Vercel)
function doPost(e) {
  try {
    let data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    const action = data.action;
    let result = {};

    if (action === "attendance") {
      result = recordAttendance(data);
    } else if (action === "undian") {
      result = recordUndian(data);
    } else if (action === "feedback") {
      result = recordFeedback(data);
    } else if (action === "scan") {
      result = recordScan(data);
    } else if (action === "rating") {
      result = recordRating(data);
    } else {
      result = { status: "unknown_action" };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 3. Pencatatan Kehadiran (Sheet "Hadir")
function recordAttendance(data) {
  data = data || {};
  const sheet = getOrCreateSheet("Hadir", ["Timestamp", "Nama", "Peran", "Fakultas / Asal", "ID Pengunjung"]);
  const t = data.t ? new Date(data.t) : new Date();
  const nama = sanitize_(data.nama || "-");
  const peran = sanitize_(data.peran || "umum");
  const asal = sanitize_(data.asal || "-");
  const uid = sanitize_(data.uid || "-");

  sheet.appendRow([t, nama, peran, asal, uid]);
  return { status: "success", stats: getLiveStats() };
}

// 4. Pencatatan Umpan Balik (Sheet "UmpanBalik") - Relasional dengan Nama & ID Pengunjung
function recordFeedback(data) {
  data = data || {};
  const sheet = getOrCreateSheet("UmpanBalik", ["Timestamp", "Nama", "Peran", "Fakultas / Asal", "Nilai", "Karya", "Komentar", "ID Pengunjung"]);
  const t = data.t ? new Date(data.t) : new Date();
  const nama = sanitize_(data.nama || "-");
  const peran = sanitize_(data.peran || "umum");
  const asal = sanitize_(data.asal || "-");
  const nilai = Number(data.nilai) || 0;
  const karya = data.karya ? Number(data.karya) : "";
  const komentar = sanitize_(data.komentar || "");
  const uid = sanitize_(data.uid || "-");

  sheet.appendRow([t, nama, peran, asal, nilai, karya, komentar, uid]);
  return { status: "success", fb: getFeedbackStats() };
}

// 5. Pencatatan Undian Kunjungan Booth (Sheet "Undian")
function recordUndian(data) {
  data = data || {};
  const sheet = getOrCreateSheet("Undian", ["Timestamp", "Nama", "WhatsApp", "Kode", "Jumlah Booth", "Peran", "Asal", "ID Pengunjung"]);
  const t = new Date();
  const nama = sanitize_(data.nama || "Tes Panitia");
  const wa = sanitize_(data.wa || "-");
  const kode = sanitize_(data.kode || "TEST");
  const boothCount = Number(data.boothCount) || 0;
  const peran = sanitize_(data.peran || "-");
  const asal = sanitize_(data.asal || "-");
  const uid = sanitize_(data.uid || "-");

  sheet.appendRow([t, nama, wa, kode, boothCount, peran, asal, uid]);
  return { status: "success" };
}

// 6. Pencatatan Scan QR Booth (Sheet "ScanBooth") - Relasional & Realtime
function recordScan(data) {
  data = data || {};
  const sheet = getOrCreateSheet("ScanBooth", [
    "Timestamp",
    "ID Pengunjung",
    "Nama",
    "Peran",
    "Fakultas / Asal",
    "No Booth",
    "Judul Karya",
    "Fakultas Booth",
    "Total Stempel",
    "Metode"
  ]);
  const t = data.t ? new Date(data.t) : new Date();
  const uid = sanitize_(data.uid || "-");
  const nama = sanitize_(data.nama || "-");
  const peran = sanitize_(data.peran || "umum");
  const asal = sanitize_(data.asal || "-");
  const boothNo = data.boothNo !== undefined ? Number(data.boothNo) || sanitize_(data.boothNo) : "-";
  const boothJudul = sanitize_(data.boothJudul || "-");
  const boothFak = sanitize_(data.boothFak || "-");
  const totalStempel = Number(data.totalStempel) || 0;
  const metode = sanitize_(data.metode || "kamera");

  sheet.appendRow([t, uid, nama, peran, asal, boothNo, boothJudul, boothFak, totalStempel, metode]);
  return { status: "success", count: totalStempel };
}

// 7. Pencatatan Rating Thumbs Up / Down Booth (Sheet "RatingBooth") - Idempotent In-Place Upsert
function recordRating(data) {
  data = data || {};
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return { status: "busy", message: "Server sedang sibuk memproses antrean" };
  }

  try {
    const sheet = getOrCreateSheet("RatingBooth", [
      "Timestamp",
      "ID Pengunjung",
      "Nama",
      "Peran",
      "Fakultas / Asal",
      "No Booth",
      "Judul Karya",
      "Rating",
      "Total Up",
      "Total Down"
    ]);

    const t = data.t ? new Date(data.t) : new Date();
    const uid = sanitize_(data.uid || "-");
    const nama = sanitize_(data.nama || "-");
    const peran = sanitize_(data.peran || "umum");
    const asal = sanitize_(data.asal || "-");
    const boothNo = data.boothNo !== undefined ? Number(data.boothNo) || sanitize_(data.boothNo) : "-";
    const boothJudul = sanitize_(data.boothJudul || "-");
    const state = sanitize_(data.state || data.vote || data.rating || "NONE").toUpperCase();
    const totalUp = Number(data.totalUp) || 0;
    const totalDown = Number(data.totalDown) || 0;

    const values = sheet.getDataRange().getValues();
    const headers = values[0] || [];
    const colUid = headers.indexOf("ID Pengunjung") !== -1 ? headers.indexOf("ID Pengunjung") : 1;
    const colBooth = headers.indexOf("No Booth") !== -1 ? headers.indexOf("No Booth") : 5;
    const colRating = headers.indexOf("Rating") !== -1 ? headers.indexOf("Rating") : 7;
    const colTime = headers.indexOf("Timestamp") !== -1 ? headers.indexOf("Timestamp") : 0;
    const colUp = headers.indexOf("Total Up") !== -1 ? headers.indexOf("Total Up") : 8;
    const colDown = headers.indexOf("Total Down") !== -1 ? headers.indexOf("Total Down") : 9;

    let rowIndex = -1;
    if (uid && uid !== "-" && boothNo && boothNo !== "-") {
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][colUid]).trim() === uid && String(values[i][colBooth]) === String(boothNo)) {
          rowIndex = i + 1; // 1-indexed baris sheet
          break;
        }
      }
    }

    if (state === "NONE") {
      // Hapus data rating jika pengunjung membatalkan pilihannya
      if (rowIndex > 0) {
        sheet.deleteRow(rowIndex);
      }
      return { status: "success", action: "deleted", boothNo: boothNo };
    } else if (rowIndex > 0) {
      // Perbarui in-place di baris yang sama (hindari baris ganda)
      sheet.getRange(rowIndex, colTime + 1).setValue(t);
      sheet.getRange(rowIndex, colRating + 1).setValue(state);
      if (colUp !== -1) sheet.getRange(rowIndex, colUp + 1).setValue(totalUp);
      if (colDown !== -1) sheet.getRange(rowIndex, colDown + 1).setValue(totalDown);
      return { status: "success", action: "updated", boothNo: boothNo, rating: state };
    } else {
      // Tambahkan baris baru untuk penilaian pertama kali
      sheet.appendRow([t, uid, nama, peran, asal, boothNo, boothJudul, state, totalUp, totalDown]);
      return { status: "success", action: "created", boothNo: boothNo, rating: state };
    }
  } finally {
    lock.releaseLock();
  }
}

// Rekapitulasi Statistik Rating per Booth (Idempotent Anti Duplikasi)
function getRatingStats() {
  const sheet = getOrCreateSheet("RatingBooth", [
    "Timestamp",
    "ID Pengunjung",
    "Nama",
    "Peran",
    "Fakultas / Asal",
    "No Booth",
    "Judul Karya",
    "Rating",
    "Total Up",
    "Total Down"
  ]);
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return { totalRatings: 0, booths: {} };

  const headers = values[0] || [];
  const colUid = headers.indexOf("ID Pengunjung") !== -1 ? headers.indexOf("ID Pengunjung") : 1;
  const colBooth = headers.indexOf("No Booth") !== -1 ? headers.indexOf("No Booth") : 5;
  const colRating = headers.indexOf("Rating") !== -1 ? headers.indexOf("Rating") : 7;

  const booths = {};
  let totalUpCount = 0;
  const visited = {};

  // Iterasi dari baris terbaru ke terlama untuk akurasi tertinggi
  for (let i = values.length - 1; i >= 1; i--) {
    const row = values[i];
    const uid = String(row[colUid] || "").trim();
    const b = Number(row[colBooth]) || row[colBooth];
    const r = String(row[colRating] || "").toUpperCase();
    if (!b) continue;

    const key = (uid || ("row_" + i)) + "_" + b;
    if (visited[key]) continue;
    visited[key] = true;

    if (!booths[b]) booths[b] = { up: 0, down: 0 };
    if (r === "UP") {
      booths[b].up++;
      totalUpCount++;
    } else if (r === "DOWN") {
      booths[b].down++;
    }
  }

  return { totalRatings: totalUpCount, booths: booths };
}

// 7. Hitung Statistik Pengunjung Live
function getLiveStats() {
  const sheet = getOrCreateSheet("Hadir", ["Timestamp", "Nama", "Peran", "Fakultas / Asal", "ID Pengunjung"]);
  const values = sheet.getDataRange().getValues();

  const counts = { dosen: 0, mahasiswa: 0, mitra: 0, umum: 0 };
  const hours = {};

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const t = new Date(row[0]);
    const peran = String(row[2] || "").toLowerCase().trim();

    if (counts[peran] !== undefined) counts[peran]++;
    if (!isNaN(t.getHours())) {
      const h = t.getHours();
      hours[h] = (hours[h] || 0) + 1;
    }
  }

  return {
    total: Math.max(0, values.length - 1),
    counts: counts,
    hours: hours
  };
}

// 8. Rata-rata Bintang Umpan Balik
function getFeedbackStats() {
  const sheet = getOrCreateSheet("UmpanBalik", ["Timestamp", "Nama", "Peran", "Fakultas / Asal", "Nilai", "Karya", "Komentar", "ID Pengunjung"]);
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return { n: 0, avg: 0 };

  const headers = values[0];
  let nilaiCol = headers.indexOf("Nilai");
  if (nilaiCol === -1) nilaiCol = 4;

  const ratings = [];
  for (let i = 1; i < values.length; i++) {
    const val = Number(values[i][nilaiCol]);
    if (val >= 1 && val <= 5) ratings.push(val);
  }

  const avg = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;
  return { n: ratings.length, avg: avg };
}

// 9. Rekap Statistik Scan QR Booth
function getScanStats() {
  const sheet = getOrCreateSheet("ScanBooth", [
    "Timestamp", "ID Pengunjung", "Nama", "Peran", "Fakultas / Asal", "No Booth", "Judul Karya", "Fakultas Booth", "Total Stempel", "Metode"
  ]);
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return { total: 0, booths: {} };

  const booths = {};
  for (let i = 1; i < values.length; i++) {
    const bNo = values[i][5];
    if (bNo) {
      booths[bNo] = (booths[bNo] || 0) + 1;
    }
  }
  return {
    total: values.length - 1,
    booths: booths
  };
}

// 10. Pengundian Doorprize Acak Langsung dari Sheet Undian
function drawLotteryWinner() {
  const sheet = getOrCreateSheet("Undian", ["Timestamp", "Nama", "WhatsApp", "Kode", "Jumlah Booth", "Peran", "Asal", "ID Pengunjung"]);
  const values = sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return { status: "empty", message: "Belum ada peserta undian yang terdaftar." };
  }

  const randomIndex = Math.floor(Math.random() * (values.length - 1)) + 1;
  const winner = values[randomIndex];

  return {
    status: "success",
    winner: {
      nama: winner[1],
      wa: winner[2],
      kode: winner[3],
      asal: winner[6] || ""
    }
  };
}
