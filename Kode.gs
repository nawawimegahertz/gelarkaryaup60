/**
 * =========================================================================
 * BACKEND GELAR KARYA 60 TAHUN UNIVERSITAS PANCASILA (GOOGLE APPS SCRIPT)
 * Versi Terbaru: Bebas Undian/Doorprize · Fokus Kunjungan, Jurnal Jelajah,
 * Voting/Rating Inovasi Favorit, dan Buku Tamu Multi-Peran.
 * =========================================================================
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
 * untuk menginisialisasi 4 sheet utama dengan kolom header lengkap.
 */
function setupInitialSheets() {
  getOrCreateSheet("Hadir", [
    "Timestamp",
    "Nama",
    "Peran",
    "Fakultas / Unit Kerja / Asal",
    "ID Pengunjung"
  ]);
  getOrCreateSheet("ScanBooth", [
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
  getOrCreateSheet("RatingBooth", [
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
  getOrCreateSheet("UmpanBalik", [
    "Timestamp",
    "Nama",
    "Peran",
    "Fakultas / Asal",
    "Nilai",
    "Karya",
    "Komentar",
    "ID Pengunjung"
  ]);
}

// Helper: Sanitasi input teks dari XSS / format berbahaya
function sanitize_(val) {
  if (val === undefined || val === null) return "";
  return String(val)
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 500);
}

// -------------------------------------------------------------------------
// 1. MELAYANI REQUEST GET (API STATISTIK KEHADIRAN, RATING, SCAN, FEEDBACK)
// -------------------------------------------------------------------------
function doGet(e) {
  if (e && e.parameter) {
    const action = e.parameter.action;
    if (action === "stats") {
      return ContentService.createTextOutput(JSON.stringify(getLiveStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "ratingStats") {
      return ContentService.createTextOutput(JSON.stringify(getRatingStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "scanStats") {
      return ContentService.createTextOutput(JSON.stringify(getScanStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
    if (action === "fbStats") {
      return ContentService.createTextOutput(JSON.stringify(getFeedbackStats()))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // Fallback halaman web status jika tautan GAS dibuka langsung di browser
  const output = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>API Gelar Karya UP 60 Tahun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0A2A66; color: #fff; padding: 40px 20px; text-align: center; }
          .card { background: #fff; color: #1e293b; max-width: 520px; margin: 0 auto; padding: 32px 24px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); text-align: left; }
          h1 { font-size: 20px; color: #0A2A66; margin-top: 0; }
          p { font-size: 14.5px; line-height: 1.6; color: #475569; }
          .badge { display: inline-block; padding: 4px 10px; background: #e0f2fe; color: #0284c7; border-radius: 6px; font-weight: 600; font-size: 13px; margin-bottom: 16px; }
          ul { padding-left: 20px; font-size: 14px; color: #334155; }
          li { margin-bottom: 6px; }
        </style>
      </head>
      <body>
        <div class="card">
          <span class="badge">API Status: Online & Aktif</span>
          <h1>Backend Gelar Karya 60 Tahun UP</h1>
          <p>Layanan API Google Apps Script ini terhubung dengan Spreadsheet pameran Gelar Karya Universitas Pancasila untuk melayani sinkronisasi data real-time:</p>
          <ul>
            <li><b>Buku Tamu Kehadiran</b> (Dosen Tendik, Rektorat, Mahasiswa, Mitra, Umum)</li>
            <li><b>Jurnal Jelajah & Stempel</b> 60 Booth Inovasi A0</li>
            <li><b>Penilaian / Like Karya Terfavorit</b></li>
            <li><b>Umpan Balik Pengunjung</b></li>
          </ul>
          <p style="font-size: 13px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px;">Universitas Pancasila · Dies Natalis ke-60</p>
        </div>
      </body>
    </html>
  `;
  return HtmlService.createHtmlOutput(output)
    .setTitle("API Gelar Karya UP 60")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

// -------------------------------------------------------------------------
// 2. MENERIMA DATA POST DARI FRONTEND (VERCEL / WEB APP)
// -------------------------------------------------------------------------
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
    } else if (action === "scan") {
      result = recordScan(data);
    } else if (action === "rating") {
      result = recordRating(data);
    } else if (action === "feedback") {
      result = recordFeedback(data);
    } else {
      result = { status: "unknown_action", received: action };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -------------------------------------------------------------------------
// 3. PENCATATAN KEHADIRAN (SHEET "Hadir") - IDEMPOTENT UPSERT PER UID
// -------------------------------------------------------------------------
function recordAttendance(data) {
  data = data || {};
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return { status: "busy", message: "Server sibuk memproses antrean" };
  }

  try {
    const sheet = getOrCreateSheet("Hadir", [
      "Timestamp",
      "Nama",
      "Peran",
      "Fakultas / Unit Kerja / Asal",
      "ID Pengunjung"
    ]);

    const t = data.t ? new Date(data.t) : new Date();
    const nama = sanitize_(data.nama || "-");
    const peran = sanitize_(data.peran || "umum");
    const asal = sanitize_(data.asal || "-");
    const uid = sanitize_(data.uid || "-");

    const values = sheet.getDataRange().getValues();
    const headers = values[0] || [];
    const colTime = headers.indexOf("Timestamp") !== -1 ? headers.indexOf("Timestamp") : 0;
    const colNama = headers.indexOf("Nama") !== -1 ? headers.indexOf("Nama") : 1;
    const colPeran = headers.indexOf("Peran") !== -1 ? headers.indexOf("Peran") : 2;
    const colAsal = headers.indexOf("Fakultas / Unit Kerja / Asal") !== -1
      ? headers.indexOf("Fakultas / Unit Kerja / Asal")
      : (headers.indexOf("Fakultas / Asal") !== -1 ? headers.indexOf("Fakultas / Asal") : 3);
    const colUid = headers.indexOf("ID Pengunjung") !== -1 ? headers.indexOf("ID Pengunjung") : 4;

    let rowIndex = -1;
    if (uid && uid !== "-") {
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][colUid]).trim() === uid) {
          rowIndex = i + 1;
          break;
        }
      }
    }

    if (rowIndex > 0) {
      // Perbarui in-place data pengunjung yang sudah ada (cegah duplikasi)
      sheet.getRange(rowIndex, colTime + 1).setValue(t);
      if (nama && nama !== "-") sheet.getRange(rowIndex, colNama + 1).setValue(nama);
      sheet.getRange(rowIndex, colPeran + 1).setValue(peran);
      sheet.getRange(rowIndex, colAsal + 1).setValue(asal);
      return { status: "success", action: "updated", stats: getLiveStats() };
    } else {
      // Pengunjung baru pertama kali mengisi
      sheet.appendRow([t, nama, peran, asal, uid]);
      return { status: "success", action: "created", stats: getLiveStats() };
    }
  } finally {
    lock.releaseLock();
  }
}

// -------------------------------------------------------------------------
// 4. PENCATATAN SCAN QR STEMPEL (SHEET "ScanBooth") - 1 PER (UID, No Booth)
// -------------------------------------------------------------------------
function recordScan(data) {
  data = data || {};
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return { status: "busy", message: "Server sibuk memproses antrean" };
  }

  try {
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
    const boothNo = data.boothNo !== undefined ? (Number(data.boothNo) || sanitize_(data.boothNo)) : "-";
    const boothJudul = sanitize_(data.boothJudul || "-");
    const boothFak = sanitize_(data.boothFak || "-");
    const totalStempel = Number(data.totalStempel) || 0;
    const metode = sanitize_(data.metode || "kamera");

    const values = sheet.getDataRange().getValues();
    const headers = values[0] || [];
    const colUid = headers.indexOf("ID Pengunjung") !== -1 ? headers.indexOf("ID Pengunjung") : 1;
    const colBooth = headers.indexOf("No Booth") !== -1 ? headers.indexOf("No Booth") : 5;

    // Verifikasi agar stempel booth yang sama tidak tercatat ganda per UID
    if (uid && uid !== "-" && boothNo && boothNo !== "-") {
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][colUid]).trim() === uid && String(values[i][colBooth]) === String(boothNo)) {
          return { status: "success", action: "duplicate_ignored", count: totalStempel };
        }
      }
    }

    sheet.appendRow([t, uid, nama, peran, asal, boothNo, boothJudul, boothFak, totalStempel, metode]);
    return { status: "success", action: "created", count: totalStempel };
  } finally {
    lock.releaseLock();
  }
}

// -------------------------------------------------------------------------
// 5. PENCATATAN RATING / SUKA POSTER (SHEET "RatingBooth") - IN-PLACE UPSERT
// -------------------------------------------------------------------------
function recordRating(data) {
  data = data || {};
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return { status: "busy", message: "Server sibuk memproses antrean" };
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
    const boothNo = data.boothNo !== undefined ? (Number(data.boothNo) || sanitize_(data.boothNo)) : "-";
    const boothJudul = sanitize_(data.boothJudul || "-");
    const state = sanitize_(data.state || data.vote || data.rating || "NONE").toUpperCase();
    const totalUp = Number(data.totalUp) || 0;
    const totalDown = Number(data.totalDown) || 0;

    const values = sheet.getDataRange().getValues();
    const headers = values[0] || [];
    const colTime = headers.indexOf("Timestamp") !== -1 ? headers.indexOf("Timestamp") : 0;
    const colUid = headers.indexOf("ID Pengunjung") !== -1 ? headers.indexOf("ID Pengunjung") : 1;
    const colBooth = headers.indexOf("No Booth") !== -1 ? headers.indexOf("No Booth") : 5;
    const colRating = headers.indexOf("Rating") !== -1 ? headers.indexOf("Rating") : 7;
    const colUp = headers.indexOf("Total Up") !== -1 ? headers.indexOf("Total Up") : 8;
    const colDown = headers.indexOf("Total Down") !== -1 ? headers.indexOf("Total Down") : 9;

    let rowIndex = -1;
    if (uid && uid !== "-" && boothNo && boothNo !== "-") {
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][colUid]).trim() === uid && String(values[i][colBooth]) === String(boothNo)) {
          rowIndex = i + 1;
          break;
        }
      }
    }

    if (state === "NONE") {
      if (rowIndex > 0) {
        sheet.deleteRow(rowIndex);
      }
      return { status: "success", action: "deleted", boothNo: boothNo };
    } else if (rowIndex > 0) {
      sheet.getRange(rowIndex, colTime + 1).setValue(t);
      sheet.getRange(rowIndex, colRating + 1).setValue(state);
      if (colUp !== -1) sheet.getRange(rowIndex, colUp + 1).setValue(totalUp);
      if (colDown !== -1) sheet.getRange(rowIndex, colDown + 1).setValue(totalDown);
      return { status: "success", action: "updated", boothNo: boothNo, rating: state };
    } else {
      sheet.appendRow([t, uid, nama, peran, asal, boothNo, boothJudul, state, totalUp, totalDown]);
      return { status: "success", action: "created", boothNo: boothNo, rating: state };
    }
  } finally {
    lock.releaseLock();
  }
}

// -------------------------------------------------------------------------
// 6. PENCATATAN UMPAN BALIK PENGUNJUNG (SHEET "UmpanBalik")
// -------------------------------------------------------------------------
function recordFeedback(data) {
  data = data || {};
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    return { status: "busy", message: "Server sibuk memproses antrean" };
  }

  try {
    const sheet = getOrCreateSheet("UmpanBalik", [
      "Timestamp",
      "Nama",
      "Peran",
      "Fakultas / Asal",
      "Nilai",
      "Karya",
      "Komentar",
      "ID Pengunjung"
    ]);

    const t = data.t ? new Date(data.t) : new Date();
    const nama = sanitize_(data.nama || "-");
    const peran = sanitize_(data.peran || "umum");
    const asal = sanitize_(data.asal || "-");
    const nilai = Number(data.nilai) || 0;
    const karya = data.karya ? Number(data.karya) : "";
    const komentar = sanitize_(data.komentar || "");
    const uid = sanitize_(data.uid || "-");

    const values = sheet.getDataRange().getValues();
    const headers = values[0] || [];
    const colTime = headers.indexOf("Timestamp") !== -1 ? headers.indexOf("Timestamp") : 0;
    const colNama = headers.indexOf("Nama") !== -1 ? headers.indexOf("Nama") : 1;
    const colPeran = headers.indexOf("Peran") !== -1 ? headers.indexOf("Peran") : 2;
    const colAsal = headers.indexOf("Fakultas / Asal") !== -1 ? headers.indexOf("Fakultas / Asal") : 3;
    const colNilai = headers.indexOf("Nilai") !== -1 ? headers.indexOf("Nilai") : 4;
    const colKarya = headers.indexOf("Karya") !== -1 ? headers.indexOf("Karya") : 5;
    const colKomentar = headers.indexOf("Komentar") !== -1 ? headers.indexOf("Komentar") : 6;
    const colUid = headers.indexOf("ID Pengunjung") !== -1 ? headers.indexOf("ID Pengunjung") : 7;

    let rowIndex = -1;
    if (uid && uid !== "-") {
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][colUid]).trim() === uid) {
          rowIndex = i + 1;
          break;
        }
      }
    }

    if (rowIndex > 0) {
      sheet.getRange(rowIndex, colTime + 1).setValue(t);
      if (nama && nama !== "-") sheet.getRange(rowIndex, colNama + 1).setValue(nama);
      sheet.getRange(rowIndex, colPeran + 1).setValue(peran);
      sheet.getRange(rowIndex, colAsal + 1).setValue(asal);
      sheet.getRange(rowIndex, colNilai + 1).setValue(nilai);
      sheet.getRange(rowIndex, colKarya + 1).setValue(karya);
      sheet.getRange(rowIndex, colKomentar + 1).setValue(komentar);
      return { status: "success", action: "updated", fb: getFeedbackStats() };
    } else {
      sheet.appendRow([t, nama, peran, asal, nilai, karya, komentar, uid]);
      return { status: "success", action: "created", fb: getFeedbackStats() };
    }
  } finally {
    lock.releaseLock();
  }
}

// -------------------------------------------------------------------------
// 7. STATISTIK REKAPITULASI LIVE
// -------------------------------------------------------------------------

// Hitung Statistik Buku Tamu Pengunjung
function getLiveStats() {
  const sheet = getOrCreateSheet("Hadir", [
    "Timestamp",
    "Nama",
    "Peran",
    "Fakultas / Unit Kerja / Asal",
    "ID Pengunjung"
  ]);
  const values = sheet.getDataRange().getValues();

  const counts = { dosen: 0, rektorat: 0, mahasiswa: 0, mitra: 0, umum: 0 };
  const hours = {};

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const t = new Date(row[0]);
    let peran = String(row[2] || "").toLowerCase().trim();
    if (peran.indexOf("rektorat") !== -1) peran = "rektorat";
    else if (peran.indexOf("dosen") !== -1 || peran.indexOf("tendik") !== -1) peran = "dosen";
    else if (peran.indexOf("mahasiswa") !== -1) peran = "mahasiswa";
    else if (peran.indexOf("mitra") !== -1) peran = "mitra";
    else peran = "umum";

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

// Rekapitulasi Suka / Rating per Booth (1 s/d 60)
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

// Rekapitulasi Scan QR Booth
function getScanStats() {
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

// Rata-rata Bintang Umpan Balik
function getFeedbackStats() {
  const sheet = getOrCreateSheet("UmpanBalik", [
    "Timestamp",
    "Nama",
    "Peran",
    "Fakultas / Asal",
    "Nilai",
    "Karya",
    "Komentar",
    "ID Pengunjung"
  ]);
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

  const avg = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length) : 0;
  return { n: ratings.length, avg: Math.round(avg * 10) / 10 };
}
