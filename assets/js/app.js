/* ===== KONFIGURASI PANITIA ===== */
const CONFIG = {
  publicUrl: "", // Kosongkan agar otomatis menggunakan URL web aktif saat ini (Vercel / domain UP)
  pinPanitia: "1966", // PIN verifikasi panitia (default: 1966 - tahun berdirinya UP)
  gasUrl:
    "https://script.google.com/macros/s/AKfycbxB0E-oDscU3wmRuslFvwlmn3y6oGSXdDKisPBX1ytCGnmLfipuY2fZT3bbHctHR-_Z_A/exec", // backend endpoint Google Apps Script
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
  umpan: {
    // Google Form umpan balik (untuk halaman yang di-hosting umum). Kosongkan bila tidak dipakai.
    formAction: "", // https://docs.google.com/forms/d/e/XXXX/formResponse
    fields: { peran: "", nilai: "", karya: "", komentar: "" },
  },
};
const DOSEN = {"0319127403":["Dr. Yesi Desmiaty, S.Si., Apt, M.Si","Fakultas Farmasi"],"0319028301":["Dr. Ir. Agri Suwandi, S.T, M.T","Fakultas Teknik"],"0322026801":["Dr. Drs. Syamsuddin, Apt, M.Biomed",""],"0017028901":["Dr. Yani Kurniawan, S.T, M.T","Fakultas Teknik"],"0306017007":["Dr. Dino Rimantho, M.T, S.T","Fakultas Teknik"],"0312017603":["Dr. Dede Lia Zariatin, S.T, M.T.","Fakultas Teknik"],"0312058001":["Dr. Ismail, S.T, M.T","Fakultas Teknik"],"0301096901":["Dr. Ir. Dwi Rahmalina, M.T","Fakultas Teknik"],"0301078302":["Rafrini Amyulianthy, S.E., CA, M.S.Ak, Ph.D","Fakultas Ekonomi & Bisnis"],"0327108803":["Esti Mulatsari, S.Si, M.Sc","Fakultas Farmasi"],"0318096701":["Dr. Harnovinsah, S.E., Ak., M.Si., CA","Fakultas Ekonomi & Bisnis"],"0306028704":["Febri Maspiyanti, S.Kom, M.Kom","Fakultas Teknik"],"0324068107":["Bambang Cahyadi, S.T, M.T","Fakultas Teknik"],"0311127902":["Dr. Chaerani Nisa, S.E., M.S.M","Fakultas Ekonomi & Bisnis"],"0322067201":["Dr. Ayu Dwi Nindyati, M.Si, S.Psi","Fakultas Psikologi"],"0309098903":["apt. Lusiana Ariani, S.Farm, M.Farm","Fakultas Farmasi"],"0327127804":["Dr. rer. nat. Apt. Deni Rahmat, S.Si, M.Si","Fakultas Farmasi"],"0303058108":["Dr. Indah Masri, S.E., M.S.Ak","Fakultas Ekonomi & Bisnis"],"0303086802":["Dr. Syahril Djaddang, S.E., M.S.I.,AK.,CA.,CPA","Fakultas Ekonomi & Bisnis"],"0326106401":["Dr. Sailendra, S.E., M.Ak.","Fakultas Ekonomi & Bisnis"],"0331058404":["Dr. Vinaya, M.Si, S.Psi","Fakultas Psikologi"],"0310058902":["Andi Tenri Faradiba, S.Psi, M.Si, M.Psi","Fakultas Psikologi"],"0311106301":["Dr. Silverius Y Soeharso, M.M., M.Psi, S.E., S.Psi","Fakultas Psikologi"],"0303077704":["Dr. Seta Ariawuri Wicaksana, S.Psi, MM., M.Psi. Psi","Fakultas Psikologi"],"1003078401":["Dr. Lola Fitria Sari, S.E., M.M","Fakultas Ekonomi & Bisnis"],"0302107903":["Asrul Harun Ismail, S.T, M.T, Ph.D","Fakultas Teknik"],"0319078703":["Aisyah, S.Si, M.Si","Fakultas Psikologi"],"0307026905":["Dr. Eka Sudarmaji Se Mm M.com, S.E., M.Com","Fakultas Ekonomi & Bisnis"],"0314048002":["Maharani Ardi Putri, S.Psi, M.Si","Fakultas Psikologi"],"0327117502":["Novi Yantih, S.Si, Apt, M.Si, Doktor","Fakultas Farmasi"],"0320047502":["Devi Roza Krisnandhi K, S.E., M.Tourism, Ph.D","Fakultas Pariwisata"],"0318066801":["Dr. Dra. Dian Ratih L, Apt, M.Biomed","Fakultas Farmasi"],"0316127601":["Dr. Prima Jiwa Osly, S.T, M.Si","Fakultas Teknik"],"0325077501":["Nur Yulianti Hidayah, M.T, S.T","Fakultas Teknik"],"0315085901":["Atiek Untarti",""],"0327085401":["Suratno",""],"0324076001":["Dr. Derriawan, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0002048304":["Umar Halim, S.Sos.I, M.Phil","Fakultas Ilmu Komunikasi"],"0301106303":["Dr. Ir. Jonbi, M.M, M.Si, M.T","Fakultas Teknik"],"0303067002":["Dr. Dini Rosmalia, M.Si, S.T","Fakultas Teknik"],"0301108403":["Endro Puspo Wiroko, M.Psi, S.Psi","Fakultas Psikologi"],"0305116601":["Dr. apt. Dra. Liliek Nurhidayati, M.Si","Fakultas Farmasi"],"0320026903":["Apt. Sarah Zaidan, S.Si, M.Farm","Fakultas Farmasi"],"0327117601":["Dr. Faizatun, S.Si, Apt, M.Si","Fakultas Farmasi"],"0319066301":["Dr. Ir. Yuke Ardhiati, M.T","Fakultas Teknik"],"0010075601":["Dr. Dra. Ratna Djamil, M.Si","Fakultas Farmasi"],"8899930017":["Susanto, S.T, M.Sc., Ph. D",""],"0327115402":["Dr. Dra. Shirly Kumala, M.Biomed","Fakultas Farmasi"],"8904680023":["Dr. Dr. Ir. Ir. Ar Indra Tjahjani, M.T, M.T","Fakultas Teknik"],"0307017201":["Dr. Diana Anggraeni, S.IP, M.I.Kom, M.M.","Fakultas Ilmu Komunikasi"],"0316078205":["Dr. Hesty Utami Ramadaniati, S.Farm, M.Farm","Fakultas Farmasi"],"0318097502":["Hindradjid Harsono, S.E., M.Si","Fakultas Ekonomi & Bisnis"],"0323085802":["Kartiningsih",""],"0009107409":["Apt. Fahleni, S.Si, M.Farm","Fakultas Farmasi"],"0319118401":["Apt. Yuslia Noviani, S.Farm, M.Farm","Fakultas Farmasi"],"0322076603":["Dra. Sri Rezeki Candra Nursari, M.Kom","Fakultas Teknik"],"0006105601":["Zuhelmi Aziz",""],"0305026301":["Dra. Faridah, M.Si","Fakultas Farmasi"],"0319128102":["Nur Miftahurrohmah, S.Si, M.Si","Fakultas Farmasi"],"0014056601":["Dra. Umi Marwati, M.Si","Fakultas Farmasi"],"0022035106":["Ros Sumarny",""],"0301018001":["Moordiani, S.Farm, M.Sc.","Fakultas Farmasi"],"0316097701":["Amir Murtako, S.Kom, M.Kom","Fakultas Teknik"],"0322027002":["Dr. Adhi Mahendra, M.T, S.T","Fakultas Teknik"],"0317077301":["Dr. Yuli Ardianto, S.E., M.Si","Fakultas Ekonomi & Bisnis"],"0328048602":["Dr. Aprilianti Pratiwi, S.S, M.I.Kom","Fakultas Ilmu Komunikasi"],"2089221021":["Moch Futuchul Arifin",""],"8973370023":["Dr. Dra. Yunahara Farida, Apt, M.Si","Fakultas Farmasi"],"0311087906":["Dr. Apt. Yati Sumiyati, S.Si, M.Kes","Fakultas Farmasi"],"0326108701":["Dr. Apt. Sondang Khairani, S.Farm, M.Farm","Fakultas Farmasi"],"0313107902":["Dr. Ni Made Dwi Sandhiutami, Apt, M.Kes, S.Si","Fakultas Farmasi"],"0319058901":["Apt. Rika Sari Dewi, S.Farm, M.Farm","Fakultas Farmasi"],"0315056203":["Dr. Dr. Darmansyah, S.E., M.Ak., M.Pd","Fakultas Ekonomi & Bisnis"],"8831433420":["Dr. Dr. Mulyadi, S.E, MM","Fakultas Ekonomi & Bisnis"],"0329116501":["Dr. Dr. Dra. Esti Mumpuni, M.Si","Fakultas Farmasi"],"0330125702":["Siti Umrah Noor",""],"0002026401":["Drs. Agus Purwanggana, M.Si","Fakultas Farmasi"],"0318077805":["Aully Grashinta, S.Psi, M.Si","Fakultas Psikologi"],"8894150017":["Ir. Djoko Wahyu Karmiadji, M.S, Ph.D","Fakultas Teknik"],"0330016801":["Ir. Rini Prasetyani, M.T","Fakultas Teknik"],"0326108206":["Dr. Maslihati Nur Hidayati, S.H., M.H","Fakultas Hukum"],"0304108103":["Yusuf Hadi Yudha","Fakultas Psikologi"],"0317037701":["Endra Wijaya, S.H., M.H","Fakultas Hukum"],"0307016801":["Sri Ambarwati, S.E., M.S.M","Fakultas Ekonomi & Bisnis"],"0305016401":["Roy Prakoso, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0318127807":["Dian Riskarini, S.E., M.M","Fakultas Ekonomi & Bisnis"],"8938400020":["Dr. Doktor. Dra. Effionora Anwar, M.S.","Fakultas Farmasi"],"0321107910":["Dr. Amelia Oktrivina Ds, M.Ak., S.E.","Fakultas Ekonomi & Bisnis"],"0302076101":["Dr. Dra. Andiani Abimanyu, M.Kom","Fakultas Teknik"],"0321126302":["Dr. Ir. Widarto Rachbini, M.Si","Fakultas Ekonomi & Bisnis"],"0317087701":["Dr. Apt. Yusi Anggriani, S.Si, M.Kes","Fakultas Farmasi"],"0320087301":["Gunady Haryanto, S.T, M.T.","Fakultas Teknik"],"0327025404":["Wiwi Winarti",""],"0315017101":["Dr. Harimurti Wulandjani, MM","Fakultas Ekonomi & Bisnis"],"0331106001":["Drs. Murthada Sinuraya, M.M.","Fakultas Ekonomi & Bisnis"],"0325046201":["Dr. Sri Widyastuti, M.M., M.Si, S.E.","Fakultas Ekonomi & Bisnis"],"0314047001":["Indra Satria, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0328117001":["Dr. Dra. Laili Savitri Noor, M.M.","Fakultas Ekonomi & Bisnis"],"0318096001":["Dr. Yetty Murni, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0301045701":["Lies Putriana S",""],"0412026701":["Kurnia Heriansyah, S.E., M.Ak.","Fakultas Ekonomi & Bisnis"],"0319046101":["Dr. Drs. Supriadi Thalib, M.M.","Fakultas Ekonomi & Bisnis"],"0302016502":["Dr. Dra. Shanti Lysandra, M.M.","Fakultas Ekonomi & Bisnis"],"0002125701":["Dr. Ade Saptomo, S.H., M.A.",""],"0313067103":["Hendri Sukma, S.T, M.T","Fakultas Teknik"],"0323086801":["Ir. Agus Surya Sadana W, M.T","Fakultas Teknik"],"0318035402":["Eddy Djatmiko",""],"0002115302":["Hindra Rahmawati",""],"0301026604":["Dr. Ir. Sambas Sundana, M.T","Fakultas Teknik"],"0317107301":["Eko Prasetyo, S.T, M.T","Fakultas Teknik"],"0325025801":["Untung Priyanto",""],"0307056003":["Ir. Akhmad Dofir, M.T",""],"0314098003":["Gama Harta Nugraha Nur Rahayu, M.Sc., S.T","Fakultas Teknik"],"0303108201":["Dr. Yuana Rizky Octaviani Mandagie, M.Ak., S.E","Fakultas Ekonomi & Bisnis"],"8950160022":["Dr. Dr. Dahmir Dahlan, S.T, S.T, M.Sc., M.Sc.","Fakultas Teknik"],"0330047201":["L Edhi Prasetya, S.T, M.T","Fakultas Teknik"],"8918730022":["Dr. Dr. Dra. Endang Etty Merawati, S.E., M.M., M.M.","Fakultas Ekonomi & Bisnis"],"0319076002":["Ir. Imam Hagni Puspito, M.T",""],"0328066001":["Dr. Ir. Atie Tri Juniati, M.T",""],"0315016101":["Ir. Bambang Sulaksono, M.T","Fakultas Teknik"],"0329128902":["Anindya Dewi Paramita, S.Psi, M.Psi","Fakultas Psikologi"],"0003067902":["Dr. Lita Dharmayuni, S.E., Ak, M.E",""],"0323116903":["Dr. Dr. Fahruddin Salim Se. Mm, S.E., M.M","Fakultas Ekonomi & Bisnis"],"0316087201":["Ashri Prawesti D, S.T, M.Si","Fakultas Teknik"],"0306067302":["Salis Musta Ani, S.S., S.E., M.S.Ak","Fakultas Ekonomi & Bisnis"],"0301015604":["Bambang Purwoko, S.E, Ph.D","Fakultas Ekonomi & Bisnis"],"0902128104":["Riza Darmaputra, S.Sos, M.I.K","Fakultas Ilmu Komunikasi"],"0005046101":["Dr. Mashadi Said, S.Pd, M.Pd","Fakultas Ilmu Komunikasi"],"0324027901":["Dr. Nurita Andayani, S.Si, M.Si","Fakultas Farmasi"],"0412019001":["Dr. Abid Fahreza Alphanoda, S.T, M.T","Fakultas Teknik"],"0304107603":["Dr. Wina Libyawati, S.T, M.T, M.M.","Fakultas Teknik"],"0311048202":["Dr. Yustisia Pasfatima Mbulu, S.ST.Par, M.Si","Fakultas Pariwisata"],"0308128602":["Fahrurozy Darmawan, M.Sc., MPPar, S.I.Kom","Fakultas Pariwisata"],"0306107501":["Dr. Dra. Fitria Angeliqa, M.Si","Fakultas Ilmu Komunikasi"],"0330118901":["Desti Fitriati, S.Kom, M.Kom","Fakultas Teknik"],"0329097603":["Dr. Ainil Syafitri, S.T, M.T","Fakultas Teknik"],"0322017801":["DR. Rury Oktaviany, S.H., M.H","Fakultas Hukum"],"0104018602":["Dr. Dr. Ririn Regiana Dwi Satya, S.ST, M.T, M.T","Fakultas Teknik"],"0309039001":["Dr. Dyah Sulistyowati Rahayu, S.Kom, M.Kom","Fakultas Teknik"],"0330068902":["Dr. Ayu Herzanita Yufrizal, S.T, M.T","Fakultas Teknik"],"0310108905":["Nuryani Tinumbia, S.T, M.T","Fakultas Teknik"],"0311097101":["Dr. Dra. Nana Nawasiah, M.M.","Fakultas Ekonomi & Bisnis"],"0324106101":["Dr. Ir. Iha Haryani Hatta, M.M.","Fakultas Ekonomi & Bisnis"],"0324077903":["Shinta Budi Astuti, S.E., M.S.Ak","Fakultas Ekonomi & Bisnis"],"0324026406":["Dr. Ir. Ahmad Badari Burhan, M.I.Kom","Fakultas Ilmu Komunikasi"],"0317077604":["Benedictus Helpris Estaswara, S.Sos, M.Si","Fakultas Ilmu Komunikasi"],"0323086905":["Anna Agustina, S.Sos, M.Si, Ph.D","Fakultas Ilmu Komunikasi"],"0309018901":["Rovida Camalia Hartantrie, S.T, M.T","Fakultas Teknik"],"0329019201":["Erlanda Augupta Pane, S.TP, M.Si","Fakultas Teknik"],"8999201024":["Ir. Ir. Fauzie Busalim, M.T, M.T","Fakultas Teknik"],"0310108904":["Wita Meutia, S.T, M.T","Fakultas Teknik"],"0328038602":["Dr. Dwi Ariyani, M.T, S.T","Fakultas Teknik"],"0313107006":["Dr. Retor Aquinaldo Wirabuana Putera Kaligis, S.Sos, M.Si","Fakultas Ilmu Komunikasi"],"0316037201":["Dr. Herawati Zetha Rahman, S.T, M.T","Fakultas Teknik"],"0315036901":["Dr. Ionia Veritawati, S.Si, M.T","Fakultas Teknik"],"0316038801":["Perdana Miraj Sejatiguna, S.T, M.T","Fakultas Teknik"],"0312108001":["Vector Anggit Pratomo, S.T, M.T","Fakultas Teknik"],"0316117101":["Ramon Trisno",""],"0329087503":["Renny Reswati, M.Si, S.T","Fakultas Teknik"],"0322048901":["Tryas Chasbiandani Se Ms.ak, S.E., M.S.Ak","Fakultas Ekonomi & Bisnis"],"0002044901":["Astim Riyanto",""],"0027026104":["Doktor. Kunthi Tridewiyanti, S.H., M. A.","Fakultas Hukum"],"0321047903":["Dr. Luh Rina Apriani, M.H","Fakultas Hukum"],"0309038201":["Rifkiyati, S.H., M.H","Fakultas Hukum"],"0014126403":["Dr. Zaitun Abdullah, S.H., M.H","Fakultas Hukum"],"0301058501":["Doktor. Ricca Anggraeni, S.H., M.H","Fakultas Hukum"],"0326126601":["Dr. Mochamad Isnaeni Ramdhan, S.H., M.Hum","Fakultas Hukum"],"0326016402":["Wibisono Oedoyo, S.H., M.H","Fakultas Hukum"],"0027035102":["Edie Toet Hendratno",""],"0312078103":["Dr. Lisda Syamsumardian, S.H., M.H","Fakultas Hukum"],"0327096602":["Utji Sri Wulan Wuryandari, S.H., M.H","Fakultas Hukum"],"0315026601":["Febri Meutia, M.Kn.","Fakultas Hukum"],"0324125502":["Zulpadli Barus",""],"0315056202":["Dr. Diani Kesuma, S.H., S.H.","Fakultas Hukum"],"0308047405":["Dr. Andreas Eno Tirtakusuma, S.Akun, S.H, M.H","Fakultas Hukum"],"0330127202":["Agung Saputra, S.T, M.T.","Fakultas Teknik"],"0314097801":["Dian Purwaningrum, S.H., M.Kn.","Fakultas Hukum"],"0327087501":["I Gede Eka Lesmana, S.T, M.T","Fakultas Teknik"],"0316096202":["Ir. Duta Wdhya Sasmojo, M.T","Fakultas Teknik"],"0312088801":["Azaria Andreas, S.T, M.T","Fakultas Teknik"],"0321087806":["Adi Wahyu Pribadi, M.Kom, S.Si","Fakultas Teknik"],"0318027102":["Noor Suryaningsih, S.T, M.T","Fakultas Teknik"],"0318048105":["M Yaser, S.T, M.T","Fakultas Teknik"],"0319096502":["Ir. Eka Maulana, M.M","Fakultas Teknik"],"0328087402":["Dr. Ane Prasetyowati R, S.T, M.T","Fakultas Teknik"],"0312077302":["Dr. Ir. Rudi Hermawan, M.M., M.T","Fakultas Teknik"],"0325027602":["Mohammad Andri Febru, M.Ars, S.T","Fakultas Teknik"],"0322076902":["Dr. Yulita Veranda Usman, S.ST, M.P","Fakultas Teknik"],"8825530017":["Dr. Ir. Budhi M. Suyitno, M.T","Fakultas Teknik"],"0304037608":["Irfan Ihsani, S.T, M.Sc.","Fakultas Teknik"],"0309125301":["Muchtar Darmawan",""],"0312067605":["Dr. Rocky Marbun, S.H, M.H","Fakultas Hukum"],"0325036201":["Dr. Dra. Ir. Erna Savitri, M.T","Fakultas Teknik"],"0001495401":["Abdul Hakim",""],"0306097508":["Fatahillah Abdul Syukur",""],"0310029002":["Anggina Sandy Sundari, S.T, M.T","Fakultas Teknik"],"0326036402":["Dr. Setia Damajanti, S.T, M.Si","Fakultas Teknik"],"0304067802":["Atri Prautama Dewi, S.T, M.T","Fakultas Teknik"],"0319128701":["Desinta Rahayu Ningtyas, S.T, M.T","Fakultas Teknik"],"0318118801":["Fadli Kurnia, S.T, M.T","Fakultas Teknik"],"0321075801":["Titing Sugiarti",""],"0327098405":["Dr. Cynthia Puspitasari, M.T, S.T","Fakultas Teknik"],"0324066701":["Dr. La Ode Mohammad Firman, S.T, M.T","Fakultas Teknik"],"0330046201":["Dra. Dewi Trirahayu, M.M.","Fakultas Ekonomi & Bisnis"],"0328115901":["Ir. Kiki Lestari, M.T",""],"0328016201":["Dr. Indah Harlina, S.H., M.H","Fakultas Hukum"],"0330097603":["Dr. Muhammad Ilham Hermawan, S.H., M.H","Fakultas Hukum"],"0302068701":["Kirana Rukmayuninda Ririh",""],"0318125905":["Ir. Hasan Hariri, M.T",""],"0020108602":["Megara Munandar, S.T, M.T","Fakultas Teknik"],"0312118301":["Nurul Hilmiyah, S.E., M.Ec, Doctor of Phi","Fakultas Ekonomi & Bisnis"],"0306118602":["Mira Munira, S.E, M.Ec","Fakultas Ekonomi & Bisnis"],"0303106102":["Dra. Bayu Retno Widyastuti, M.M.","Fakultas Ekonomi & Bisnis"],"0327099101":["Dr. Aulia Keiko Hubbansyah, S.I.A., S.Akun, M.M., M.S","Fakultas Ekonomi & Bisnis"],"0325116905":["Dr. Dra. Irma Sari Permata, M.M.","Fakultas Ekonomi & Bisnis"],"0307108901":["Tia Ichwani, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0312116401":["Ati Hermawati, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0310058901":["Resti Nur Arini, S.T, M.T","Fakultas Teknik"],"0307017101":["Setiarini, S.E., M.Si","Fakultas Ekonomi & Bisnis"],"0302068601":["Dr. Faridhian Anshari, S.S, M.A","Fakultas Ilmu Komunikasi"],"0303048602":["Widyaningsih Azizah, S.E., Ak, M.Sc","Fakultas Ekonomi & Bisnis"],"0326036701":["Drs. Hotman Freddy, M.Ak.","Fakultas Ekonomi & Bisnis"],"0313018801":["Sofia Primalisanti Devi, S.I.Kom, M.Si","Fakultas Ilmu Komunikasi"],"0309088002":["Wisnu Broto, S.T, M.T","Fakultas Teknik"],"0316056601":["Dr. Dewanto Indra Krisnadi, S.T, M.T","Fakultas Teknik"],"0328025802":["Achmad Djamil",""],"0324057403":["Dr. Sodikun, S.T, M.M, M.T","Fakultas Teknik"],"0305107104":["Dr. Evanytha, M.Si, S.Psi","Fakultas Psikologi"],"0426047102":["Dr. Bambang Hariyanto, S.T, M.T","Fakultas Teknik"],"0317127904":["Nathalia Perdhani Soemantri, S.S, M.Si","Fakultas Ilmu Komunikasi"],"0302028303":["Muhamad Rosit, S.Sos.I, M.Si","Fakultas Ilmu Komunikasi"],"0319088901":["Apt. Anarisa Budiati, S.Farm, M.Farm","Fakultas Farmasi"],"0303056305":["Endah Tri Wulandari, S.H., M.H","Fakultas Hukum"],"0314066301":["Dr. Adnan Hamid, M.M., S.H.","Fakultas Hukum"],"0301076305":["Dr. Sinintha Yuliansih Sibarani, S.H., M.H","Fakultas Hukum"],"0302127408":["Yamin, S.S., S.H., M.Hum, M.H","Fakultas Hukum"],"0308066102":["Thomas Arsil",""],"0316127001":["Nia Rachmawati, S.T, M.Si","Fakultas Teknik"],"0307078702":["Gati Dwi Yuliana, S.Sos, M.Si","Fakultas Ilmu Komunikasi"],"0003085501":["Erni Suwarti",""],"0314075901":["Yoelianto",""],"0308106903":["Myrna A Safitri, S.H, M.A, Doctor of Philo","Fakultas Hukum"],"0308016203":["Budi Santoso Irianto. Sh.mh",""],"0308127601":["Dr. Andri Prasetiyo, S.Si, Apt, M.Farm","Fakultas Farmasi"],"0302045501":["Siti Rachima Mumpuni",""],"0326017104":["Adryanto Ibnu Wibisono",""],"0313018403":["Riza Firmansyah, S.Si, M.Si","Fakultas Pariwisata"],"0301116806":["Anedya Wardhani, S.T, M.T","Fakultas Teknik"],"0429058201":["Nungky Puspita, S.E., M.M","Fakultas Pariwisata"],"0313077107":["Hindun Nurhidayati, S.Sos, M.I.Kom","Fakultas Pariwisata"],"0308057102":["Ir. Harry Mufrizon, M.Ars, M.S.E, M.T, S.T","Fakultas Teknik"],"0317119002":["Dr. Apt. Greesty Finotory Swandiny, S.Farm, M.Farm","Fakultas Farmasi"],"0312076801":["Dr. Mulyadi, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0307097902":["Cici Eka Iswahyuningtyas, S.Sos, M.Soc.Sc.","Fakultas Ilmu Komunikasi"],"0329127501":["Tribuana Tungga Dewi, S.Sos, S.Sos, M.Si","Fakultas Ilmu Komunikasi"],"0330107601":["Swambodo Murdariatmo Adi, S.T, M.Ars","Fakultas Teknik"],"0327067801":["Dewi Kurniawati, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0324117503":["Dr. Tyahya W Hendratni, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0301056902":["I Made Adhi Gunadi, S.IP, M.Si.Par","Fakultas Pariwisata"],"0323058702":["Ameilia Damayanti, S.E., M.Ak.","Fakultas Ekonomi & Bisnis"],"0725097603":["Arif Riyadi Tatak K, S.T, M.T","Fakultas Teknik"],"0021106201":["Drs. Moch Futukul Arifin, M.Si","Fakultas Farmasi"],"0303128703":["Suluh Gembyeng Ciptadi, S.I.Kom, M.Si","Fakultas Ilmu Komunikasi"],"0323096804":["Dr. Gede Moenanto Soekowati, M.I.Kom, S.I.Kom","Fakultas Ilmu Komunikasi"],"0314086502":["Dr,. Ir. Satria, M.M. SCM, IPM","Fakultas Ekonomi & Bisnis"],"0311086501":["Dr. Irvandi Gustari, S.E, MBA","Fakultas Ekonomi & Bisnis"],"0309056301":["Zuraida, S.H","Fakultas Hukum"],"0314055901":["Estu Prayogi",""],"0328047604":["Doktor. Syamsul Bahri, S.E., M.Si","Fakultas Ekonomi & Bisnis"],"0330097407":["Dr. Risma Kartika, S.Sos, M.Si","Fakultas Ilmu Komunikasi"],"0305077608":["Indra Ade Irawan, M.M, M.M","Fakultas Ekonomi & Bisnis"],"0325067906":["Dr. Ririt Yuniar, S.Sos, M.Hum","Fakultas Ilmu Komunikasi"],"0317016505":["Dr. Lazarus Sinaga, S.E., M.M","Fakultas Ekonomi & Bisnis"],"0323088403":["Donie Kadewandana, S.Sos.I, M.I.P., Ph.D.","Fakultas Ilmu Komunikasi"],"0326078705":["Hasbullah, S.H, M.H","Fakultas Hukum"],"0307116102":["Dr. Asep Bambang Hermanto, S.H., M.H","Fakultas Hukum"],"0317046201":["Dr. Drs. Dwi Prastowo Darminto, M.M.","Fakultas Ekonomi & Bisnis"],"8934601024":["Dr. I Ketut Oka Setiawan, S.H., S.H., M.H, M.H, Dr.","Fakultas Hukum"],"0420065904":["Yunirman Rijan",""],"0312117301":["Dr. Susilawati Se M.ak, S.E., M.Ak.","Fakultas Ekonomi & Bisnis"],"0307058702":["Dr. Meizar Rusli, S.ST, M.Sc.","Fakultas Pariwisata"],"0313095705":["Widia Nursiyanto",""],"0316116602":["Dr. Ir. Iman Paryudi, M.Sc.","Fakultas Teknik"],"0317128402":["Fatima Tuzzahara Alkaf, M.Ec, S.E.","Fakultas Ekonomi & Bisnis"],"0310036802":["Dr. Dra. Trisnani Indriati, M.Si","Fakultas Ekonomi & Bisnis"],"0306088001":["Iqbal",""],"0421095701":["Dr. B.f. Sihombing, S.H., M.Hum","Fakultas Hukum"],"0302068107":["Dr. Yunan Prasetyo Kurniawan, S.H., M.H","Fakultas Hukum"],"0303115701":["Muhammad Yudi Masduky Sholihin",""],"0326058504":["M. Ramadhana Reksoprodjo, S.Psi, M.Si","Fakultas Psikologi"],"0320098803":["A.eka Septilla Am, M.Psi, S.Psi","Fakultas Psikologi"],"0320106002":["Dr. Edi Tarsono, S.H.","Fakultas Hukum"],"0327106704":["Andi Wahyu Wibisana, S.H, M.H, Doktor","Fakultas Hukum"],"0302118004":["Nely Toding Bunga, S.T, M.T","Fakultas Teknik"],"8856870018":["Dr. Reda Manthovani, S.H., LLM, LLM","Fakultas Hukum"],"0320016804":["Dr. Eng. Joko Sulistyono, S.H., B.Eng, M.Eng, M.H","Fakultas Hukum"],"0320057103":["Dr. I Nyoman T Prasidha, S.T, M.T.","Fakultas Teknik"],"0320028601":["Diptya Anggita, M.T, S.T","Fakultas Teknik"],"0318046501":["Dr. Basis G Andamari, S.E., M.Ak.","Fakultas Ekonomi & Bisnis"],"0315119003":["Apt. Reise Manninda, S.Farm, M.Farm","Fakultas Farmasi"],"8836001019":["Dr. Tabroni, Mba",""],"0318056701":["Doktor. Ir. Sarojini Imran, M.Si","Fakultas Pariwisata"],"0311046703":["Dr. Jum, S.H., S.H., M.Hum","Fakultas Hukum"],"0324067102":["Dr. Zulkifli, S.T, M.M","Fakultas Ekonomi & Bisnis"],"0306106603":["Dr. Mombang Sihite, S.T, M.M.","Fakultas Ekonomi & Bisnis"],"0308107203":["Dr. Ahmad Ramdani Salim, M.M, S.T","Fakultas Ekonomi & Bisnis"],"0302058102":["Dr. Diah Kartika Pratami, S.Si, Apt, M.Farm","Fakultas Farmasi"],"0306057801":["Ninuk Wiliani, S.Si, M.Kom, Ph.D","Fakultas Teknik"],"0318026702":["Ir. Agung Terminanto, M.B.A","Fakultas Teknik"],"0330109103":["Fetty Nurmala Rossi, S.ST, M.Par","Fakultas Pariwisata"],"0301106007":["Ir. Agus Riyanto, M.M.",""],"8858470018":["Hary Soebagyo, M.T, S.T","Fakultas Teknik"],"0327025802":["Nafsan Upara",""],"0310109001":["Mohammad Ilhamsyah Akbar, M.T, S.T","Fakultas Teknik"],"0301016406":["Dr. Wahyu Dewanto, S.T","Fakultas Teknik"],"0327128002":["Bintang Andhyka, S.E., M.M","Fakultas Ekonomi & Bisnis"],"0312048304":["Riska Yustisiana, M.B.A, S.E.","Fakultas Ekonomi & Bisnis"],"0312048907":["Ramadhani Isna Putri, S.T, M.T","Fakultas Teknik"],"0328126301":["Dr. Apt. Drs. Sahat, M.Si","Fakultas Farmasi"],"0331126302":["Dr. M. Ardiansyah Syam, M.Si, S.E.","Fakultas Ekonomi & Bisnis"],"0327116704":["Sri Irviati Wahyoeni, S.E., M.M","Fakultas Ekonomi & Bisnis"],"0317097603":["Al Fito Deannova Ginting, S.E., M.Si","Fakultas Ilmu Komunikasi"],"8895023419":["Achmad Hermanto Dardak",""],"0306108707":["Dr. Muhammad Akhyar, M.Si, S.Psi","Fakultas Psikologi"],"0316066601":["Dr. Fitra Deni, S.H, M.Kn., M.Kn., M.Si","Fakultas Hukum"],"0319037501":["M. Rubiul Yatim Sema, S.E., S.S., M.A","Fakultas Ekonomi & Bisnis"],"0231077703":["Dr. Tetti Samosir, S.H, M.H","Fakultas Hukum"],"0324026903":["Dr. Ir. Arissetyanto Nugroho, M.M.","Fakultas Ekonomi & Bisnis"],"0719017101":["Dr. Nurmala Ahmar, S.E., M.Si","Fakultas Ekonomi & Bisnis"],"0327117608":["Fritz Edward Siregar, LL.M, LL.M.SJD., S.H.","Fakultas Hukum"],"0324046402":["Dra. Shelly Taurhesia, Apt, Ph.D","Fakultas Farmasi"],"0327087205":["Dr. Agustinus Miranda Wijaya, M.Kn., M.M., S.E., S.H.","Fakultas Ekonomi & Bisnis"],"0322068803":["Dr. Desi Nadya Aulena, Apt, M.Farm, S.Farm","Fakultas Farmasi"],"0325096202":["Dr. Apt. Apt. Drs. Kosasih, M.Pharm","Fakultas Farmasi"],"0322039102":["Khalida Utami, S.E, M.Sc","Fakultas Ekonomi & Bisnis"],"0311027002":["Dr. Tri Astuti, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0315058205":["Dr. Erwin Permana, S.P, M.E","Fakultas Ekonomi & Bisnis"],"0306069004":["Dr. Reza Abdu Rahman, S.Pd, M.T","Fakultas Teknik"],"0302056903":["Adi Nugroho, S.E, M.Phil, Ph.D","Fakultas Ekonomi & Bisnis"],"0302129302":["Ni Made Rai Kistyanti, M.Psi, S.Psi","Fakultas Psikologi"],"0411037403":["Dr. M. Nuruddin Subhan, M.M., S.E.","Fakultas Ekonomi & Bisnis"],"0002046603":["Dr. Nahruddien Akbar M., S.E, M.M., M.Ak., M.H","Fakultas Ekonomi & Bisnis"],"0329067801":["Dr. Laela Chairani, M.T, S.T","Fakultas Teknik"],"8823023419":["Drs. Drs Muhammad Hanafi M.sc, Doctor Of Philosophy, M.Sc, Doctor of Philosoph","Fakultas Farmasi"],"9903002373":["Drs Partomuan Simanjuntak Ph.d",""],"0302029301":["Apt. Safira Nafisa, S.Farm, M.Si","Fakultas Farmasi"],"0330037210":["Dr. Wasi Widayadi, M.B.A, S.T","Fakultas Ekonomi & Bisnis"],"0322048101":["Dr. Herlan Herlan, S.E., M.Si, M.Buss","Fakultas Ekonomi & Bisnis"],"0327099002":["Noor Fajrina Farah Istiani, M.Ars, Ph.D, S.Ars","Fakultas Teknik"],"0313109202":["Dr. Rahmatul Qodriah, S.Farm, Apt, M.Farm","Fakultas Farmasi"],"0331038703":["Rini Trisno Lestari, S.T, M.T","Fakultas Teknik"],"8886640017":["Dr. Apt. Drs. Prih Sarnianto, M.Sc.","Fakultas Farmasi"],"0302018905":["Andri Setia Dharma, M.Psi, S.Psi","Fakultas Psikologi"],"0317048203":["Bambang Riono Arsad, S.Kom, M.M.S.I","Fakultas Teknik"],"0325109203":["Widyawati",""],"8918140022":["Ir. Nicco Plamonia, M.T, M.Sc., Ph.D","Fakultas Teknik"],"0307078605":["apt. M. Iqbal Julian Rpp., S.Farm., M.Sc., Ph.D.","Fakultas Farmasi"],"0305078009":["Dr. Apt. Ana Yulyana, S.Farm, M.Farm",""],"2911109401":["Nurul Hidayat, M.Han, S.Sos","Fakultas Ilmu Komunikasi"],"0322038202":["Gunawan Baharuddin, S.E., M.Ec, Ph.D","Fakultas Ekonomi & Bisnis"],"0302129304":["Dian Nurdiansyah, S.I.Kom, M.I.Kom","Fakultas Ilmu Komunikasi"],"0310098601":["Ihsan Suri, S.Sos.I, M.I.Kom","Fakultas Ilmu Komunikasi"],"0308036701":["Apt. Drs. Chaidir","Fakultas Farmasi"],"0306037206":["Dr. Yoyo Arifardhani, S.H., M.M","Fakultas Hukum"],"0305046405":["Dr. Ali Abdullah, S.H, M.H, M.Kn., M.M","Fakultas Hukum"],"0319046209":["Dr. Agung Iriantoro, S.H., M.H, M.H","Fakultas Hukum"],"0301018408":["Farida Aini, S.Psi, M.Psi","Fakultas Psikologi"],"0301059004":["Mochamad Amboro Alfianto, M.I.Kom, S.ST","Fakultas Pariwisata"],"0326098206":["Dr. Dea Tunggaesti, S.H., M.M.","Fakultas Hukum"],"0305107206":["Dr. Sudarto, M.Si, S.T","Fakultas Ilmu Komunikasi"],"0330037605":["Martriana Ponimin Said, S.IP, MSi","Fakultas Ilmu Komunikasi"],"9903010565":["Arsin Lukman",""],"8813023419":["Doctor. of. Philosophy. Mahfudz Al Huda, B.Eng, M.Eng","Fakultas Teknik"],"0325029402":["Apt. Rasta Naya Pratita, S.Farm, M.K.M.","Fakultas Farmasi"],"0302046001":["Apt. Drs. Muhamad Yamin, M.Farm","Fakultas Farmasi"],"8923100020":["Apt. Dra. Maura Linda Sitanggang, Ph.D","Fakultas Farmasi"],"0330079401":["Intan Permata Sari, S.Farm, Apt, M.Farm","Fakultas Farmasi"],"0302019204":["Apt. Gumilar Adhi Nugroho, S.Farm, M.Si","Fakultas Farmasi"],"0311058205":["Apt. Christine Meidiawati, S.Farm, MARS","Fakultas Farmasi"],"8918400020":["Apt. Dra. Dra. Titiek Martati, M.Si, M.Si","Fakultas Farmasi"],"0308066901":["Dra. Murti Widyaningsih, M.M","Fakultas Ekonomi & Bisnis"],"0315046602":["Dra. Nelyumna Rizal, M.Si","Fakultas Ekonomi & Bisnis"],"0315048802":["Putri Ayu Maharani, M.H, S.H.","Fakultas Hukum"],"0614028902":["Apt. Zainur Rahman Hakim, S.Farm, M.Farm","Fakultas Farmasi"],"0310118010":["Joko Utomo Hadibroto, S.Sos, M.I.Kom","Fakultas Ilmu Komunikasi"],"0318089301":["Dhidik Mahandika, S.T, M.T","Fakultas Teknik"],"0309079302":["Yulita Hanifah, M.Ars, S.Pd","Fakultas Teknik"],"0307038508":["Nina Rosida, S.H., M.H","Fakultas Hukum"],"0321039103":["Cipta Indra Lestari Rachman, S.H., M.H","Fakultas Hukum"],"0326019501":["Azra Mashita, M.A., S.Tr","Fakultas Pariwisata"],"0305096101":["Dr. Drs. Cotoro Mukri, M.M.","Fakultas Ekonomi & Bisnis"],"0323058903":["Ade Wahyudi, M.M, S.Psi","Fakultas Ekonomi & Bisnis"],"0319037101":["Rika Kaniati, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"0026057301":["Ateniyanti, S.E., M.M.","Fakultas Ekonomi & Bisnis"],"8833023419":["Doctor. of. Philosophy. Drs. Witono Basuki, M.Sc","Fakultas Farmasi"],"0316079401":["Nadia Larasinta Heriatmo, S.Farm, Apt, M.Biomed","Fakultas Farmasi"],"0324059505":["Apt. Faradiba, S.Farm, M.Pharm","Fakultas Farmasi"],"0330045402":["Edy Supriyadi",""],"0312079602":["Sayyidah Afifah, S.I.Kom, M.I.Kom","Fakultas Ilmu Komunikasi"],"0313109102":["Vitha Octavanny, S.Par, M.M.Par","Fakultas Pariwisata"],"0320049601":["Gita Aprilia Timang, S.T, M.T",""],"0330068303":["Dr. Bimo Wikantiyoso, M.Psi, S.Psi","Fakultas Psikologi"],"0321047907":["Dr. Satrio Mukti Wibowo, M.T, MBA, S.T","Fakultas Teknik"],"0305107510":["Safitri Siswono, S.T, M.M.","Fakultas Ekonomi & Bisnis"],"0323029102":["Bobby Suwandi, M.Psi, S.Psi","Fakultas Psikologi"],"0312036603":["Petiana Indriati, M.M., S.T","Fakultas Ekonomi & Bisnis"],"0320018404":["Apt. Thomas Aquino Aditya Widhiswastiawan, S.Farm, M.Farm","Fakultas Farmasi"],"0305128404":["Agus Trianto, S.H., M.H","Fakultas Hukum"],"0329098304":["Dr. Ella Silvia, M.H, S.H.","Fakultas Hukum"],"0302088804":["Apt. Fit Indri Intan Utami, S.Farm, MM","Fakultas Farmasi"],"0318127204":["Dessi Setiyawan, M.S.I.M.","Fakultas Farmasi"],"8984080023":["I Gede Made Wirabrata",""],"0330087001":["Dr. Agus Surono, S.H., M.H","Fakultas Hukum"],"0318117903":["Dr. Mochamad Mansur, S.IP, M.M","Fakultas Ekonomi & Bisnis"],"0431036602":["Dr. Ir. Fontian Munzil, S.M, S.H., MBA, M.Ak., M.","Fakultas Hukum"],"8850370018":["Dr. Eddy Pratomo, M.A, S.H.","Fakultas Hukum"],"0325049101":["Dr. Aryo Seno Wicaksono, M.M., S.Kom","Fakultas Ekonomi & Bisnis"],"0603129103":["Ir. Tundo, S.Kom, M.Kom","Fakultas Teknik"],"0306127602":["Didi Sunardi, S.H., M.H","Fakultas Hukum"],"8958755656231182":["Nina Silvana","Fakultas Hukum"],"0311017802":["Charyna Ayu Rizkyanti","Fakultas Psikologi"],"0422016002":["Jufri Alkatiri","Fakultas Ilmu Komunikasi"],"0315088205":["Suryanto Siyo","Fakultas Hukum"],"8801433420":["Adek Zamrud Adnan","Fakultas Farmasi"],"0406086802":["Ade Iva Murty","Fakultas Psikologi"]};

const POSTER_DRIVE_IDS = {
  1: "1R_bXLZoWshIeeYS62w51LwPTyDpbWag4",
  2: "1RX9VUBInEv1Q1feOg0XWNLZ68mBeThbS",
  3: "1TdpXkRynhW8WlMNNOT3M_CATBgIhZVHS",
  4: "1jKn4ASbQIjxmObG6D9CtvQ-npRua3FSC",
  5: "10pHGKb23YKL3V6y0Z6S5h9p2OCe6EbIb",
  6: "1JcpGhCd15mJTCxZUyCDaIjO6T4CXwKUi",
  7: "1HOw0Y2yXgTR7fqufwNe_tdkPlVmWRTBu",
  8: "1mI2mTWS7EiebpkvsS6BAPiT69ZbieyUc",
  9: "1k6m8hRzHsqk7aO5x5CZLq6klF9pQ4dwI",
  10: "123xw6YL-Kn9BDg2dicwYKHswuTwoTvoO",
  11: "1UQX9pthW833omVXhjR-26p0rj1Nzu29L",
  12: "16Lv_IYscW8L9sN7BkbA7tr-j-P5551XO",
  13: "1iqH-9CkKys4x9zgtczrJ8FMHGBkuwxK9",
  14: "105dwooDUlzPEUDkIXou_5vM2s8hibANZ",
  15: "1hXXGZZZ2PDEiTnXQnZ8eOW2qizfk6_9L",
  16: "13q2kVcSu6Znp5gpGBsueP_EZ8ZzRO6yB",
  17: "1AkyyEBNZHBsNKrKXKTBAUpNXLPWHFE3s",
  18: "1oi5VdWHFWBp1OHHBZztSJdpPBlLW_0H5",
  19: "1QGnIeX68YPJA8j7Kypd-pvdJCNc6D4NR",
  20: "1RI1CY9Kb9Kdjt8HiJ04k3Z_cshdsYvok",
  21: "1UDqkwfhv3jdZeZsXXho606NzpRZU_wxc",
  22: "1kvgnQxgZKrk3qZKIcrvLuAQ4o4cZrs6R",
  23: "1mNTLa7DFeAMqCplDxH6v5XuxH8qttgpC",
  24: "14K31pICEg9rSWKwcJrfKnuMBoJoPBR2G",
  25: "1xrgLqbGdtdKD7CvZZCh4u2v44TlcpBwd",
  26: "14IXL85bjVp3HgCi-TXIqv8dxSlqTZdQo",
  27: "1-u_97roor6vGj1bXcl91dXvJApPWaaGg",
  28: "1jgwQBP7OGtkgm1wSqTpFRJO4y2MEd3SS",
  29: "1tHr04W6wR-AAW_DLMKLhDOVQrVDKTZYH",
  30: "1TMabz7HROAfynhQSc6w6jWs-2Kxaj-Ly",
  31: "1eEUtb4tu8e-kUVg0-eabu6s8rEEd4dW2",
  32: "1Ejc1JnbL-falfHUInMWj9bWaIkGEmYms",
  33: "1FQuBBiqmGB1k5g07-pdYq9ELpe5xvhqK",
  34: "1xHgJF1HdG3Fpcg-wKkxImW_wXtttupwn",
  35: "1RIkRvkEANoj2yhiWBRLJh_U-BXDJ34-J",
  36: "1FK__JWwya1IWXt0FAOCb3QycwwUVJ2lV",
  37: "1GebEtDwB3HN8zhN1zrRvimxUa5JWHdar",
  38: "1cO6Fgjq51zjeYAxTrh5aZVt3rb4BIHKF",
  39: "11OxnAq6-b5-ShPXrU4r8oETEWkvqiM8g",
  40: "132xzUQ9dKYRMUoQHhftBHZvXDBziX6Bs",
  41: "1l_P3m2d4ISZDlgsVdIzeyD_s9eFmp9Tb",
  42: "1lP-P--DL2VQcGexehJJlOm2hM1P69aos",
  43: "1gTaeVuh8v0opjOveCPfFeHt229cdbJUW",
  44: "1fk97mh7_-r6wgmfTDfOJen-qTp1E-IHu",
  45: "1s6LPo3Au-HMbU5-K1rHTABLfi2u7oz9s",
  46: "1J7d5sDCoIfe_b7UvEJhRqo_17B2kg0xQ",
  47: "1Ma27egOD0IuCaV-ILucILzSw9seqYBAZ",
  48: "1I5urgebnrhA-eZe2IeXeZWlIZGD5NO-Q",
  49: "19NdjbWB8KLwhelX1ymFK5PwAlvMtn5Ye",
  50: "1Ey9QhmutHo8vFHdo2529zYxzhpObz00g",
  51: "12_JbnJ-L7ZLSF8eyOk1zmaRbMtm4KS4W",
  52: "1E3OKHyBOhhB05q3lq-8j5sL8VbKtP8lM",
  53: "1Jp7MRrx8-qu2v3DYy1nvOVwhXPRYGCoU",
  54: "1-yOaq1b8w3CxnpmW3MXsv25vedojbM7z",
  55: "1bpp1e835exv6lypGJ8LuhRHnBtkihrS6",
  56: "1CTvS9HU7CM1rGlKsAtaMt9y8zcK29tPk",
  57: "1P-iWTLbX3XDcThuCzIianpftY7PdONv0",
  58: "1swWivQosGFj-cBNyTP3RoI1wvoUIINhc",
  59: "1UrTjXt1FCvDr90wCZ9EKPs_BtSXbjvAS",
  60: "1pgjWTh7M3Sa-i_v3t4uMA6OcxP_O_wTV"
};
const posterUrl = (n) => POSTER_DRIVE_IDS[n] ? `https://lh3.googleusercontent.com/d/${POSTER_DRIVE_IDS[n]}` : "";

const DATA = [{"no":1,"judul":"Unlocking Pomegranate's Anti-Aging Potential! Inovasi Bahan Baku Kosmetik Berbasis Fermentasi Kulit Buah Delima: Scale-Up, Karakterisasi, dan Uji Keamanan","ketua":"Dr. apt. Faizatun, S.Si., M.Si.","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44800000,"dampak":"Hilirisasi: bahan baku kosmetik skala-up untuk industri","sdg":[9,12,3],"zona":"-","panel":1,"judul0":"Karakterisasi dan Evaluasi Keamanan Bahan Baku Kosmetik Anti Aging Berbasis Fermentasi Kulit Buah Delima (Punica granatum L) Hasil Optimasi Scale-Up","lama":16},{"no":2,"judul":"Pemetaan Profil Pasien Tuberkulosis: Langkah Awal Menuju Strategi Peningkatan Kepatuhan Pengobatan","ketua":"Dr. Nurita Andayani, S.Si., M.Si.","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44700000,"dampak":"Kesehatan publik: kepatuhan obat pasien TB di DKI Jakarta","sdg":[3],"zona":"-","panel":2,"judul0":"Inovasi Strategi Peningkatan Kepatuhan Minum Obat di DKI Jakarta melalui Pendekatan Berbasis Analisis Klaster untuk Segmentasi Pasien Tuberkulosis","lama":17},{"no":3,"judul":"Development of 70% Ethanol Extract of Soybean (Glycine max L.) as an Anti-Depressant Functional Food Using Tail Suspension and Forced Swimming Test Methods","ketua":"apt. Sarah Zaidan, S.Si., M.Farm.","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44700000,"dampak":"Produk: pangan fungsional antidepresan","sdg":[3,2],"zona":"-","panel":3,"judul0":"Pengembangan Kombinasi Nanoteknologi Gelasi Ionik Dan Fitosom Ekstrak Etanol Biji Kedelai Sebagai Pangan Fungsional Dengan Aktivitas AntiDepresan Secara In vivo","lama":18},{"no":4,"judul":"Inovasi Mikroemulsi Minyak Atsiri Serai Wangi dan Uji In Vitro terhadap Pediculus humanus","ketua":"apt. Safira Nafisa, S.Farm., M.Si.","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44600000,"dampak":"Produk: mikroemulsi untuk pedikulosis","sdg":[3],"zona":"-","panel":4,"lama":19},{"no":5,"judul":"Tren Penggunaan, Rasionalitas, dan Kesesuaian Antibiotik pada Pasien Pneumonia Dewasa Tahun 2025 untuk Penguatan Antimicrobial Stewardship","ketua":"Dr. apt. Sondang Khairani, S.Farm., M.Farm.","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44600000,"dampak":"Kesehatan publik: antimicrobial stewardship di rumah sakit","sdg":[3,17],"zona":"-","panel":5,"judul0":"Tren Penggunaan, Kesesuaian Antibiotik Pasien Pneumonia Dewasa 2025 di RS Persahabatan dan RSUD Muhammad Sani Karimun untuk Penguatan Antimicrobial Stewardship","lama":20},{"no":6,"judul":"Dekolorisasi Ekstrak Etanol Daun Kelor (Moringa oleifera L.) Menggunakan Karbon Aktif dan Pelarut Nonpolar","ketua":"Dr. Dra. apt. Liliek Nurhidayati, M.Si.","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44800000,"dampak":"Hilirisasi: penguatan bahan baku lokal (kelor) untuk industri kosmetika","sdg":[9,12],"zona":"-","panel":6,"judul0":"Studi Dekolorisasi Ekstrak Daun Kelor (Moringa oleifera) sebagai Inovasi dalam Peningkatan Daya Saing Bahan Baku Lokal untuk Industri Kosmetika","lama":21},{"no":7,"judul":"Integrasi Edukasi dan Dukungan Psikososial kepada Keluarga Pasien TBC sebagai Strategi Universitas Pancasila dan Puskesmas Ciracas dalam Program Kemitraan Masyarakat","ketua":"Dr. apt. Rahmatul Qodriah, S.Farm., M.Farm.","fak":"Fakultas Farmasi","kat":"PKM","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Pengabdian Kepada Masyarakat","dana":19150000,"dampak":"Pengabdian: edukasi dan dukungan psikososial TB di Puskesmas Ciracas","sdg":[3,17],"zona":"-","panel":7,"judul0":"Integrasi Edukasi Hari TB Sedunia dan Dukungan Psikososial sebagai Strategi Puskesmas Ciracas dalam Program Kemitraan Masyarakat","lama":22},{"no":8,"judul":"Sintesis Hijau dan Karakterisasi Nanopartikel Seng Oksida (ZnO) Menggunakan Ekstrak Air Daun Sirih Merah (Piper porphyrophyllum)","ketua":"Deni Rahmat","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PDD","dana":50120000,"dampak":"","sdg":[3,9],"zona":"-","panel":8,"judul0":"Sintesis Hijau Nanopartikel Zinc Oxide Menggunakan Ekstrak Daun Sirih Merah (Piper porphyrophyllum) sebagai Agen Bioreduktor untuk Pengembangan Gel Topikal Antiinflamasi","lama":39},{"no":9,"judul":"Pengembangan Kandidat Obat Antiinflamasi Berbasis Propolis: Kombinasi Analisis Metabolomik, Uji Seluler, dan Pemodelan Komputasional","ketua":"Diah Kartika Pratami","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":90000000,"dampak":"","sdg":[3],"zona":"-","panel":9,"lama":40},{"no":10,"judul":"Potensi Kombinasi Glukomanan dan Ekstrak Daun Kelor sebagai Anti-Ulcerative Colitis pada Hewan Coba Mencit","ketua":"Dian Ratih L","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":124060000,"dampak":"","sdg":[3],"zona":"-","panel":10,"judul0":"Potensi Kombinasi Glukomanan dan Ekstrak Daun Kelor sebagai Antiulcerative Colitis pada Hewan Coba Mencit","lama":41},{"no":11,"judul":"Pengembangan Formula Paper Soap dengan Manfaat 3 in 1 (Pembersih, Antioksidan, dan Antibakteri) dengan Bahan Aktif Nanopartikel EHP-Kitosan","ketua":"Esti Mumpuni","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PT-LP","dana":245770000,"dampak":"","sdg":[3,12],"zona":"-","panel":11,"judul0":"Pengembangan Formula Paper Soap dengan Manfaat 3 in 1 (Pembersih, Antioksidan, dan Antibakteri) dengan bahan aktif Nanopartikel EHP-Kitosan","lama":42},{"no":12,"judul":"Eksplorasi Aktivitas Sitotoksik Kalkon dan Derivat Pirazolin serta Pengembangan dan Karakterisasi Nanoformulasi Kalkon","ketua":"Moordiani","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PDP","dana":47470000,"dampak":"","sdg":[3],"zona":"-","panel":12,"judul0":"Eksplorasi Aktivitas Antikanker Derivat Pirazolin dari Kalkon α,β-Unsaturated Ketone dan Evaluasi Peran Nanoformulasi dalam Meningkatkan Aktivitas","lama":43},{"no":13,"judul":"Pengembangan Produk Jamu Poliherbal menjadi OHT (Obat Herbal Terstandar) Anti-DM","ketua":"Ni Made Dwi Sandhiutami","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"Kemdiktisaintek","hibah":"Hilirisasi","skema":"Inovasi sosial BOPTN","dana":187500000,"dampak":"","sdg":[3,9],"zona":"-","panel":13,"judul0":"Pengembangan Produk Jamu Poliherbal menjadi Obat Herbal Terstandar (OHT) sebagai Antidiabetes","lama":58},{"no":14,"judul":"Inovasi Hilirisasi Kesehatan: Eksplorasi dan Saintifikasi Plant Derived Exosome-Like Nanoparticles (PDELNs) Jahe Merah sebagai Solusi Adjuvan pada Penyakit Paru Obstruksi Kronis (PPOK) dengan Manifestasi Eksaserbasi Akut","ketua":"Ni Made Dwi Sandhiutami","fak":"Fakultas Farmasi","kat":"Penelitian","kl":"Kesehatan","sumber":"BRIN","hibah":"RIIM","skema":"Riset dan Inovasi untuk Indonesia Maju Kompetisi Gelombang X","dana":219700000,"dampak":"","sdg":[3],"zona":"-","panel":14,"lama":60},{"no":15,"judul":"Pengembangan Model Massive Transformative Purpose untuk Mendukung Kebijakan Reformasi Birokrasi Institutional branding Direktorat Jenderal Bea Cukai Indonesia","ketua":"Prof. Dr. Ir. Arissetyanto Nugroho, M.M.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Terapan","dana":47800000,"dampak":"Kebijakan: rekomendasi branding institusi untuk instansi pemerintah (DJBC)","sdg":[16],"zona":"-","panel":15,"lama":1},{"no":16,"judul":"Model Pengembangan Koperasi Merah Putih Desa Antajaya Tanjungsari Bogor Berbasis Tata Kelola, Literasi Keuangan, dan Digitalisasi untuk Mewujudkan Koperasi Desa Sehat dan Berkelanjutan","ketua":"Prof. Dr. Sri Widyastuti, S.E., M.M., M.Si.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Terapan","dana":54800000,"dampak":"Terapan: model koperasi desa dengan lokasi mitra jelas","sdg":[8,1],"zona":"-","panel":16,"lama":2},{"no":17,"judul":"Sizing Rooftop Solar PV for Campus Decarbonisation in Indonesia: When Is It Worth Waiting to Verify Energy Savings?","ketua":"Eka Sudarmaji, S.E., M.M., M.Com.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Terapan","dana":59800000,"dampak":"Terapan: modul dan aplikasi efisiensi energi gedung","sdg":[7,11,12],"zona":"-","panel":17,"judul0":"Modul and Aplikasi Optimasi Energi Efisiensi Gedung Berbasis Algoritma Cascading LCCA untuk Maksimalisasi ROI dan Efisiensi Energi","lama":3},{"no":18,"judul":"Model Implementasi SAK Entitas Privat Berbasis Transvaluasi Nilai dan Aplikasi Web: Pelaporan Keuangan Berkelanjutan bagi UMKM, BUMDes, dan Koperasi","ketua":"Dr. Syahril Djaddang, S.E., M.Si.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Terapan","dana":29900000,"dampak":"Terapan: aplikasi pelaporan keuangan UMKM, Bumdes, koperasi","sdg":[8,9],"zona":"-","panel":18,"judul0":"Model Implementasi Standar Akuntansi Keuangan Entitas Privat Pelaporan Keuangan UMKM, Bumdes, Koperasi Berkelanjutan Berbasis Transvaluasi Nilai Dan Aplikasi Android.","lama":4},{"no":19,"judul":"Perceived Income Stability and Financial Security among Gig Workers in Indonesia: A Comparative Analysis across Socioeconomic and Occupational Dimensions","ketua":"Prof. Dr. Nurmala Ahmar, S.E., M.Si.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":34850000,"dampak":"Sosial: kerentanan finansial pekerja gig, terkait SDGs","sdg":[8,10],"zona":"-","panel":19,"judul0":"Dampak Algoritma Penilaian Kinerja Platform terhadap Ketidakpastian Pendapatan dan Stres Finansial Pekerja Gig: Implikasi bagi Pencapaian SDGs","lama":5},{"no":20,"judul":"Simulasi Keputusan Kewirausahaan: Bagaimana Pemuda Muslim Merespons Risiko, Pembiayaan, dan Dukungan Zakat-Wakaf di Indonesia","ketua":"Gunawan Baharuddin, S.E., M.Ec., Ph.D.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Sosial-ekonomi: kewirausahaan melalui ekosistem zakat-wakaf","sdg":[8,1],"zona":"-","panel":20,"judul0":"Membangun Generasi Wirausaha Muslim: Model Empiris Determinan Niat Kewirausahaan dalam Ekosistem Zakat–Wakaf","lama":6},{"no":21,"judul":"Revolusi Literasi Pajak Digital Berbasis CoreTax dan AI: Intervensi Cerdas untuk Tingkatkan Kepatuhan UMKM Jawa Barat","ketua":"Dr. Indah Masri, S.E., M.S.Ak.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Terapan: intervensi literasi pajak digital UMKM","sdg":[8,16],"zona":"-","panel":21,"lama":7},{"no":22,"judul":"Sinergi Faktor Institusional dan Adopsi Teknologi: Model Peningkatan Efektivitas E-Government di Era Birokrasi 4.0","ketua":"Rafrini Amyulianthy, S.E., CA., M.S., Ak., Ph.D.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":41850000,"dampak":"Kebijakan: efektivitas e-government dan layanan publik","sdg":[16,9],"zona":"-","panel":22,"lama":8},{"no":23,"judul":"Studi BPR dan BPRS di Wilayah Pangan Strategis Indonesia: Analisis Dampak dengan Propensity Score Matching dan Difference-in-Difference","ketua":"Dr. Chaerani Nisa, S.E., M.S.M.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":29900000,"dampak":"Evaluasi dampak program BPR/BPRS di wilayah pangan (PSM-DiD)","sdg":[2,8],"zona":"-","panel":23,"lama":9},{"no":24,"judul":"Aksi Governansi Emisi Karbon: Demi Bumi dan Keberlanjutan Perusahaan (Carbon Emission Governance in Action)","ketua":"Widyaningsih Azizah, S.E., Ak., M.Sc.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":34850000,"dampak":"Lingkungan: tata kelola emisi karbon","sdg":[13,12],"zona":"-","panel":24,"judul0":"Aksi Governansi Emisi Karbon : Demi Bumi dan Keberlanjutan Perusahaan","lama":10},{"no":25,"judul":"Whistleblowing System, Professional Skepticism, dan AI Readiness dalam Meningkatkan Efektivitas Deteksi Kecurangan di Perguruan Tinggi","ketua":"Tryas Chas Biandani, SE.,M.S.Ak","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":29900000,"dampak":"Tata kelola: deteksi kecurangan di perguruan tinggi","sdg":[16,4],"zona":"-","panel":25,"judul0":"Integrasi Artificial Intelligence, Whistleblowing, dan Skeptisisme Auditor dalam Deteksi Kecurangan Perguruan Tinggi","lama":11},{"no":26,"judul":"Transport CO2 Emissions in Indonesia Before and After the Emissions-Based Luxury Goods Sales Tax (PPnBM) on Motor Vehicles","ketua":"Dr. Yuli Ardianto, S.E., M.Si.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Kebijakan: pajak emisi karbon sektor transportasi","sdg":[13,11],"zona":"-","panel":26,"judul0":"Analisis Efektivitas Pigouvian Tax terhadap Pengurangan Emisi Karbon pada Sektor Transportasi di Indonesia","lama":12},{"no":27,"judul":"Integrasi Konsumsi Halal dan Ekonomi Hijau: Model Perilaku Konsumsi terhadap Produk Pangan Berkelanjutan","ketua":"Dr. Nurul Hilmiyah, S.E., M.Ec.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44800000,"dampak":"Lingkungan-sosial: konsumsi halal dan ekonomi hijau","sdg":[12,13],"zona":"-","panel":27,"lama":13},{"no":28,"judul":"Transformasi dan Inovasi Bisnis UMKM Agri-Food Indonesia: Desain dan Pengembangan Circular Business Model Canvas (CBMC)","ketua":"Dr. Amelia Oktrivina D.S., S.E., M.Ak.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":29900000,"dampak":"Terapan: model bisnis sirkular UMKM agri-food","sdg":[12,8],"zona":"-","panel":28,"lama":14},{"no":29,"judul":"Pengembangan Model Strategi Pemasaran Koperasi Berbasis Perilaku Anggota untuk Keberlanjutan dan Daya Saing Koperasi Desa/Kelurahan Merah Putih Indonesia","ketua":"Dr. Lola Fitria Sari, S.E., M.M.","fak":"Fakultas Ekonomi & Bisnis","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Terapan: strategi pemasaran koperasi desa/kelurahan","sdg":[8,1],"zona":"-","panel":29,"lama":15},{"no":30,"judul":"Eksplorasi Indikator Fisiologis dan Kebahagiaan Digital sebagai Upaya Meningkatkan Produktivitas Tenaga Kerja Industri dengan Pendekatan Machine learning","ketua":"Desinta Rahayu Ningtyas, S.T., M.T.","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":43800000,"dampak":"Terapan: produktivitas dan kesejahteraan pekerja industri","sdg":[8,9],"zona":"-","panel":30,"lama":24},{"no":31,"judul":"Digital Twin Elektro–Termal Adaptif berbasis RL–MORL untuk Portable Charger PMSG Mandiri yang Efisien","ketua":"Dr. Ainil Syafitri, S.T., M.T.","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":42350000,"dampak":"Inovasi teknologi: charger mandiri energi","sdg":[7,9],"zona":"-","panel":31,"judul0":"Digital Twin Elektro–Termal Adaptif berbasis RL-MORL untuk Portable Charger PMSG Mandiri yang Effisien","lama":25},{"ketua":"Ionia Veritawati","fak":"Fakultas Teknik","kat":"PKM","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Pengabdian Kepada Masyarakat","dana":0,"dampak":"","sdg":[8,9,11],"baru":1,"judul":"Development of Mobile and Spatial Based Smart Community Applications to Improve the Community Economy","no":32,"zona":"-","panel":32,"lama":27},{"no":33,"judul":"Pengembangan Model Deteksi Anomali Struktural Jembatan Baja KA Tua Berbasis Reduksi Derau Stokastik dan Algoritma Lightweight Machine Learning On-Device","ketua":"Ir. Eka Maulana, M.M.","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44800000,"dampak":"Keselamatan: deteksi anomali struktur jembatan KA","sdg":[9,11],"zona":"-","panel":33,"lama":28},{"no":34,"judul":"Reimagining Kawasan Gedung A.A. Maramis dan Lapangan Banteng sebagai World-Class Art Venue di Jakarta","ketua":"Dr. Ir. Yuke Ardhiati, M.T.","fak":"Fakultas Teknik","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":44800000,"dampak":"Perkotaan-budaya: revitalisasi kawasan seni Jakarta","sdg":[11,8],"zona":"-","panel":34,"lama":29},{"no":35,"judul":"Sustainable Supplier Selection for Potatoes in Potato Chips Agroindustry Using PROMETHEE and Digital Business Ecosystem","ketua":"Dr. Ririn Regiana Dwi Satya, S.T., M.T.","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":42850000,"dampak":"Terapan: susut pascapanen agroindustri","sdg":[2,12],"zona":"-","panel":35,"judul0":"Model Interdependensi Antarrisiko Post Harvest Losses dalam Rantai Pasok Agroindustri Potato chips Menggunakan Fuzzy Interpretive Structural Modelling","lama":30},{"no":36,"judul":"Pengembangan Koil RF Heksagonal Berbasis Substrat Rogers RT/duroid 5880 untuk MRI 1,5T/3T","ketua":"Adhi Mahendra","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":122750000,"dampak":"","sdg":[3,9],"zona":"-","panel":36,"judul0":"Sintesis Konvergen Koil RF Dual-Resonansi 1,5T/3T Berbasis Substrat Dielektrik Tinggi: Analisis Karakteristik Elektromagnetik dan Miniaturisasi Geometri","lama":44},{"ketua":"Ninuk Wiliani","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental","dana":0,"dampak":"","sdg":[7,9],"baru":1,"judul":"Pengaruh Karakteristik Fitur Tekstur terhadap Kinerja Model Deep Learning pada Klasifikasi Kerusakan Solar Panel","no":37,"zona":"-","panel":37,"lama":46},{"no":38,"judul":"Pengembangan High Density Concrete (HDC) Berbasis Material Lokal Indonesia untuk Aplikasi Proteksi Radiasi dan Infrastruktur Berat","ketua":"Jonbi","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PT-LP","dana":401940000,"dampak":"","sdg":[9,11],"zona":"-","panel":38,"judul0":"Pengembangan High Density Concrete (Hdc) Berbasis Material Lokal Indonesia Untuk Aplikasi Proteksi Radiasi Dan Infrastruktur Berat","lama":47},{"no":39,"judul":"Pengembangan converter kit swap EV battery cooling menggunakan negative coefficient thermal energy material untuk ekosistem industri mobil listrik di Indonesia","ketua":"Reza Abdu Rahman","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":109000000,"dampak":"","sdg":[7,9,13],"zona":"-","panel":39,"lama":48},{"no":40,"judul":"Pengembangan Kandang Cerdas Terintegrasi Berbasis IoT untuk Optimalisasi Kesehatan dan Produktivitas Kambing","ketua":"Bambang Cahyadi","fak":"Fakultas Teknik","kat":"PKM","kl":"IPTEKS","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - PkM","skema":"PKM","dana":45910000,"dampak":"","sdg":[2,9],"zona":"-","panel":40,"lama":55},{"no":41,"judul":"Pemanfaatan Sampah Organik untuk Produksi Pakan Ternak dan Ikan Lele sebagai Upaya Peningkatan Ekonomi dan Lingkungan Berkelanjutan","ketua":"Dwi Ariyani","fak":"Fakultas Teknik","kat":"PKM","kl":"IPTEKS","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - PkM","skema":"PKM","dana":48310000,"dampak":"","sdg":[12,2,8],"zona":"-","panel":41,"judul0":"Pemanfaatan Sampah Organik Sisa Makan Bergizi Gratis (MBG) untuk Produksi Pakan Ternak dan Ikan Lele sebagai Upaya Peningkatan Ekonomi dan Lingkungan Berkelanjutan","lama":56},{"no":42,"judul":"Peningkatan Kapasitas Produksi dan Penjualan Abon Lele melalui Penerapan Teknologi Mesin Pengaduk dan Pemasaran Digital","ketua":"Nur Yulianti Hidayah","fak":"Fakultas Teknik","kat":"PKM","kl":"IPTEKS","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - PkM","skema":"PKM","dana":31840000,"dampak":"","sdg":[8,12],"zona":"-","panel":42,"judul0":"Peningkatan Kapasitas Produksi dan Penjualan Abon Lele Melalui Penerapan Teknologi Mesin Pengaduk dan Pemasaran Digital","lama":57},{"no":43,"judul":"Engineered Cementitious Composite (ECC) Ramah Lingkungan melalui Chemical Enhancer Berbasis Semen Hijau","ketua":"Jonbi","fak":"Fakultas Teknik","kat":"Penelitian","kl":"IPTEKS","sumber":"Kemdiktisaintek","hibah":"Hilirisasi","skema":"Ajakan Industri","dana":348099000,"dampak":"","sdg":[9,13],"zona":"-","panel":43,"judul0":"Pengembangan Engineered Cementitious Composite (ECC) ramah lingkungan melalui chemical enhancer berbasis Semen Hijau","lama":59},{"ketua":"Belum tertera pada poster","fak":null,"kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"Penelitian Tesis Magister","dana":32050000,"dampak":"","sdg":[16,17],"baru":1,"judul":"Analisis Persepsi Masyarakat terhadap Respon Komunikasi Krisis Humas Polri dalam Kasus Band Sukatani","no":44,"zona":"-","panel":44,"lama":26},{"ketua":"Aprilianti Pratiwi","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":121660000,"dampak":"","sdg":[11,16,10],"baru":1,"judul":"Ruang Publik dan Perlawanan Budaya: Komunikasi Gerakan Masyarakat Kota Bandung, Jawa Barat dalam Konflik Lahan","no":45,"zona":"-","panel":45,"lama":32},{"no":46,"judul":"Era Post-Truth: Simulacrum Deepfake Politik di TikTok terhadap Selective Exposure dan Echo Chambers Kognitif Pemilih Indonesia","ketua":"Joko Utomo Hadibroto, S.Sos., M.I.Kom.","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Sosial-politik: deepfake dan literasi pemilih","sdg":[16],"zona":"-","panel":46,"judul0":"Era Post-Truth: Simulacrum Deepfake Politik Di Tiktok Terhadap Selective Exposure Dan Echo Chambers Kognitif Pemilih Indonesia","lama":34},{"no":47,"judul":"Model Literasi Digital untuk Ketahanan Informasi Masyarakat Urban","ketua":"Nurul Hidayat, S.Sos., M.Han.","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Sosial: ketahanan informasi masyarakat urban","sdg":[16,11],"zona":"-","panel":47,"judul0":"Model Komunikasi Digital untuk Ketahanan Informasi Masyarakat Urban","lama":35},{"ketua":"Riza Darma Putra","fak":"Fakultas Ilmu Komunikasi","kat":"PKM","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - PkM","skema":"PKM","dana":0,"dampak":"","sdg":[13,11,4],"baru":1,"judul":"Membangun Keluarga Tangguh Bencana melalui Literasi Bencana Berbasis Komunikasi Risiko di Desa Bayah Barat, Kabupaten Lebak, Banten","no":48,"zona":"-","panel":48,"lama":45},{"no":49,"judul":"Dari Influencer ke Relawan Digital: Kredibilitas Aktor dalam Narasi ‘Warga Bantu Warga’ pada Krisis Bencana Banjir Sumatera","ketua":"Aprilianti Pratiwi","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PTM","dana":33190000,"dampak":"","sdg":[13,11,17],"zona":"-","panel":49,"lama":49},{"no":50,"judul":"Pemetaan Narasi Warga tentang Program Makan Bergizi Gratis: Studi Kualitatif Komunikasi Krisis di Tingkat Komunitas","ketua":"Aprilianti Pratiwi","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PTM","dana":31910000,"dampak":"","sdg":[2,16],"zona":"-","panel":50,"lama":50},{"no":51,"judul":"Penguatan Modal Sosial melalui Kapabilitas Digital Partisipatif untuk CBT","ketua":"Retor Aquinaldo Wirabuanaputera Kaligis","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":119640000,"dampak":"","sdg":[8,17,11],"zona":"-","panel":51,"judul0":"Penguatan Modal Sosial melalui Digital Storytelling dan Literasi Keuangan Digital Partisipatif untuk Pengembangan Community-Based Tourism Berbasis Digital di Kabupaten Bogor","lama":51},{"no":52,"judul":"Co-Design Kearifan Lokal untuk Komunikasi Risiko Tsunami","ketua":"Riza Darma Putra","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":134330000,"dampak":"","sdg":[13,11,4],"zona":"-","panel":52,"judul0":"Komunikasi Risiko Tsunami Partisipatif berbasis Boardgame dan Pengetahuan Lokal untuk meningkatkan Resiliensi Berkelanjutan di Pesisir Donggala dan lombok","lama":52},{"no":53,"judul":"Kecerdasan Artifisial dan Praktik Pembelajaran Digital: Dampak yang Berbeda terhadap Capaian dan Kepuasan Belajar Mahasiswa Indonesia","ketua":"Umar Halim","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"BIMA Kemdiktisaintek","hibah":"BIMA - Penelitian","skema":"PFR","dana":110540000,"dampak":"","sdg":[10,9],"zona":"-","panel":53,"judul0":"Inklusivitas Sosial-Digital dalam Peluang dan Hasil Digital di Kalangan Masyarakat","lama":53},{"ketua":"Riza Darma Putra","fak":"Fakultas Ilmu Komunikasi","kat":"Penelitian","kl":"Soshum","sumber":"SHAPE-SEA","hibah":"SHAPE-SEA RGS 2026","skema":"Student Category (M.A./PhD)","dana":0,"dampak":"","sdg":[13,10,16],"baru":1,"judul":"Komunikasi untuk Resiliensi: Photovoice bersama Komunitas Bajo Menghadapi Ekspansi Pertambangan","no":54,"zona":"-","panel":54,"lama":54},{"no":55,"judul":"A Maestro-Based 3D Digital Heritage Framework for Preserving the Aesthetic Authenticity of Betawi Performing Arts: Case Study Tari Topeng Tunggal Betawi","ketua":"Dr. Ir. Sarojini Imran, M.Si","fak":"Fakultas Pariwisata","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Terapan","dana":34850000,"dampak":"Budaya: arsip digital seni pertunjukan Betawi","sdg":[11,8],"zona":"-","panel":55,"judul0":"Arsip Digital 3D Estetika Seni Pertunjukan WBTB Betawi Dalam Penguatan Pariwisata Budaya","lama":36},{"no":56,"judul":"Peran Supermarket Tourism dalam mendukung Pengembangan Wisata Belanja Berbasis Produk Lokal","ketua":"Dr. Yustisia Pasfatima Mbulu, S.ST.Par., M.Si.","fak":"Fakultas Pariwisata","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Ekonomi lokal: wisata belanja produk lokal","sdg":[8,12],"zona":"-","panel":56,"lama":37},{"no":57,"judul":"Penerapan Digitalisasi Berbasis Aplikasi untuk Tari Keser Bojong dalam Pelestarian Budaya di Kampung Wisata Lembur Sawah Bogor","ketua":"Nungky Puspita, S.E., M.M.","fak":"Fakultas Pariwisata","kat":"PKM","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Pengabdian Kepada Masyarakat","dana":19150000,"dampak":"Pengabdian: digitalisasi tari di kampung wisata","sdg":[11,8],"zona":"-","panel":57,"lama":38},{"no":58,"judul":"Model Kesehatan Mental Berbasis Komunitas: Kesejahteraan Psikologis Masyarakat Lokal dalam Konteks Mass Tourism (Pariwisata Masal) di Labuan Bajo","ketua":"Dr. Ayu Dwi Nindyati, S.Psi., M.Si.","fak":"Fakultas Psikologi","kat":"Penelitian","kl":"Kesehatan","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":43800000,"dampak":"Sosial: kesehatan mental komunitas di Labuan Bajo","sdg":[3,11,8],"zona":"-","panel":58,"lama":31},{"no":59,"judul":"Efektivitas Teknik Inokulasi dalam Mengurangi Kepercayaan terhadap Berita Palsu pada Komunitas Ibu PKK RW 05 Serengseng Sawah","ketua":"Dr. Vinaya, S.Psi., M.Si.","fak":"Fakultas Psikologi","kat":"PKM","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Pengabdian Kepada Masyarakat","dana":19150000,"dampak":"Pengabdian: literasi hoaks Ibu PKK","sdg":[16,4],"zona":"-","panel":59,"judul0":"Efektifitas Teknik Inokulasi dalam Mengurangi Kepercayaan terhadap Berita Palsu pada komunitas Ibu PKK RW 05 Srengseng Sawah","lama":33},{"no":60,"judul":"Model Perlindungan Hukum Terhadap Satwa Dalam Menghadapi Kerentanan Ekosistem Akibat Perubahan Iklim","ketua":"Dr. Rury Octaviani, S.H., M.H.","fak":"Fakultas Hukum","kat":"Penelitian","kl":"Soshum","sumber":"Internal UP","hibah":"Hibah Internal","skema":"Penelitian Fundamental Reguler","dana":39850000,"dampak":"Lingkungan-hukum: perlindungan satwa dan perubahan iklim","sdg":[15,13,16],"zona":"-","panel":60,"lama":23}];
var DENAH_SVG = typeof window !== "undefined" && window.DENAH_SVG ? window.DENAH_SVG : "";
const PANELS = {"1": [618, 200.0, 36, 34.7], "2": [618, 234.7, 36, 34.7], "3": [618, 269.5, 36, 34.7], "4": [618, 304.2, 36, 34.7], "5": [618, 338.9, 36, 34.7], "6": [618, 373.7, 36, 34.7], "7": [618, 408.4, 36, 34.7], "8": [618, 443.2, 36, 34.7], "9": [618, 477.9, 36, 34.7], "10": [618, 512.6, 36, 34.7], "11": [618, 547.4, 36, 34.7], "12": [618, 582.1, 36, 34.7], "13": [618, 616.8, 36, 34.7], "14": [618, 651.6, 36, 34.7], "15": [618, 686.3, 36, 34.7], "16": [618, 721.1, 36, 34.7], "17": [618, 755.8, 36, 34.7], "18": [618, 790.5, 36, 34.7], "19": [618, 825.3, 36, 34.7], "20": [593.7, 860, 22.3, 38], "21": [571.5, 860, 22.3, 38], "22": [549.2, 860, 22.3, 38], "23": [527.0, 860, 22.3, 38], "24": [504.7, 860, 22.3, 38], "25": [482.4, 860, 22.3, 38], "26": [460.2, 860, 22.3, 38], "27": [437.9, 860, 22.3, 38], "28": [415.7, 860, 22.3, 38], "29": [393.4, 860, 22.3, 38], "30": [371.1, 860, 22.3, 38], "31": [348.9, 860, 22.3, 38], "32": [326.6, 860, 22.3, 38], "33": [304.3, 860, 22.3, 38], "34": [282.1, 860, 22.3, 38], "35": [259.8, 860, 22.3, 38], "36": [237.6, 860, 22.3, 38], "37": [215.3, 860, 22.3, 38], "38": [193.0, 860, 22.3, 38], "39": [170.8, 860, 22.3, 38], "40": [148.5, 860, 22.3, 38], "41": [126.3, 860, 22.3, 38], "42": [104.0, 860, 22.3, 38], "43": [66, 859.2, 36, 38.8], "44": [66, 820.4, 36, 38.8], "45": [66, 781.7, 36, 38.8], "46": [66, 742.9, 36, 38.8], "47": [66, 704.1, 36, 38.8], "48": [66, 665.3, 36, 38.8], "49": [66, 626.6, 36, 38.8], "50": [66, 587.8, 36, 38.8], "51": [66, 549.0, 36, 38.8], "52": [66, 510.2, 36, 38.8], "53": [66, 471.4, 36, 38.8], "54": [66, 432.7, 36, 38.8], "55": [66, 393.9, 36, 38.8], "56": [66, 355.1, 36, 38.8], "57": [66, 316.3, 36, 38.8], "58": [66, 277.6, 36, 38.8], "59": [66, 238.8, 36, 38.8], "60": [66, 200.0, 36, 38.8]}; // nomor panel -> [x, y, lebar, tinggi] pada denah vektor 720x980 (nomor sama dengan label QR poster)
const AREA = [[1,6,"Dinding kanan aula, dekat pintu masuk"],[7,13,"Dinding kanan aula, depan tempat wudhu"],[14,19,"Dinding kanan aula, menuju sudut bawah"],[20,26,"Deret bawah aula, sisi kanan"],[27,35,"Deret bawah aula, bagian tengah"],[36,42,"Deret bawah aula, sisi kiri"],[43,48,"Dinding kiri aula, sudut bawah"],[49,55,"Dinding kiri aula, bagian tengah"],[56,60,"Dinding kiri aula, dekat pintu keluar"]];
const KLASTER = { IPTEKS: "IPTEKS", Kesehatan: "Kesehatan", Soshum: "Sosial Humaniora" };
const KCOL = { IPTEKS: "#1857C4", Kesehatan: "#0E8F82", Soshum: "#C77D00" };
const PERAN = {
  dosen: { nama: "Dosen", ket: "Skema dan kolaborasi", warna: "var(--r-dosen)" },
  rektorat: { nama: "Rektorat", ket: "Pimpinan & Unit Kerja", warna: "var(--r-rektorat)" },
  mahasiswa: { nama: "Mahasiswa", ket: "Topik dan inspirasi", warna: "var(--r-mahasiswa)" },
  mitra: { nama: "Mitra", ket: "Dampak dan hilirisasi", warna: "var(--r-mitra)" },
  umum: { nama: "Umum", ket: "Manfaat dan lokasi", warna: "var(--r-umum)" }
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
  const done = Object.keys(S.stamp).length >= BOOTH_N;
  const inJelajah = !!opt.inJelajah;

  // Gamifikasi 5 Level (Bite-sized Sprints @ 15 Booths - Goal-Gradient Effect)
  let level = 1;
  let levelTitle = "Level 1: Penjelajah Pemula";
  let sprintMsg = `🚀 Langkah Awal: Tinggal <b>${15 - n} booth lagi</b> menuju Level 2.`;
  let desc = `Pindai QR di bawah poster setiap booth untuk melengkapi jurnal jelajah karya pameran.`;

  if (n >= target) {
    level = 5;
    levelTitle = "Level 5: Penjelajah Utama 60 Karya";
    sprintMsg = "🏆 Target 60/60 Lengkap! Seluruh Inovasi Telah Anda Jelajahi.";
    desc = done
      ? `Terima kasih telah menjelajahi seluruh karya pameran!`
      : `Semua 60 booth selesai! Terima kasih telah mengapresiasi inovasi Universitas Pancasila.`;
  } else if (n >= 45) {
    level = 4;
    levelTitle = "Level 4: Hampir Juara";
    const sisa = 60 - n;
    sprintMsg = `🔥 Sprint akhir: Tinggal <b>${sisa} booth lagi</b> menuju Penjelajah Lengkap!`;
    desc = `Tinggal selangkah lagi untuk melengkapi seluruh 60 booth karya Eksplorasi 60 Booth.`;
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
    desc = `Pindai QR di bawah poster setiap booth untuk melengkapi jurnal jelajah karya pameran.`;
  }

  return `
  <div class="card quest-card" role="region" aria-label="Tantangan Berhadiah Booth">
    <div class="quest-top">
      <div class="quest-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span>Jelajah 60 Karya</span>
      </div>
      <div class="quest-reward">
        <span>Apresiasi</span>
        <b class="reward-val">Eksplorasi 60 Booth</b>
      </div>
    </div>

    <div class="quest-body">
      <div class="quest-headline-row">
        <h2 class="quest-title">Eksplorasi 60 Booth Inovasi</h2>
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
            <span>60 (Lengkap 🏆)</span>
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
          ? '<button class="btn sm gold" data-act="scan">Lengkap 60 Booth 🏆</button>'
          : ""
      }
      
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
        " booth · Eksplorasi Lengkap 60 Booth",
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
  const doneAll = stampsCount >= target;

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
            ${stampsCount >= target ? "🏆 60 Booth Selesai" : `Tinggal ${target - stampsCount} lagi`}
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
                <div class="loc-info-sub">${isStamped ? "Stempel misi tersimpan · Kunjungan tercatat" : "Kunjungi booth fisik ini dan pindai kode QR untuk klaim stempel!"}</div>
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

          
          ${posterUrl(panelOf(d)) ? `
            <button class="poster" data-zoom="${panelOf(d)}" aria-label="Perbesar foto poster ${panelOf(d)}">
              <img src="${posterUrl(panelOf(d))}" alt="Foto poster panel ${panelOf(d)}: ${esc(d.judul)}" loading="lazy">
              <small>Foto poster panel ${panelOf(d)} (A0) di lokasi · ketuk untuk perbesar</small>
            </button>` : ""}
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

/* ---------- Zoom Poster A0 ---------- */
function openZoom(n) {
  const z = document.createElement("div");
  z.className = "pzoom";
  const url = posterUrl(n);
  z.innerHTML = `<button aria-label="Tutup foto">×</button><img src="${url}" alt="Foto poster panel ${n}">`;
  z.onclick = () => z.remove();
  document.body.appendChild(z);
}
document.addEventListener("input", (e) => {
  if (e.target.id === "fid") lookupDosen();
});
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest("[data-zoom]");
  if (b) {
    e.stopPropagation();
    openZoom(b.dataset.zoom);
  }
}, true);

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
    <p style="color:var(--mut);margin:6px 0 14px;font-size:14px">Fitur cetak QR booth pameran hanya dapat diakses oleh panitia pelaksana.</p>
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
/* ---------- Buku Tamu & Gerbang Hadir (Sesuai final_gelar-karya-up60.html) ---------- */
function formFields(gate) {
  return `<div><span class="k" style="font-size:12px;font-weight:700;color:var(--mut);letter-spacing:.04em;text-transform:uppercase">Anda datang sebagai</span>
        <div class="roles" id="fr" role="radiogroup" aria-label="Peran" style="margin-top:6px">${Object.entries(PERAN).map(([k, p]) => `<button type="button" class="role" role="radio" aria-checked="${S.peran === k}" data-fr="${k}">${p.nama}${gate ? `<small>${p.ket}</small>` : ""}</button>`).join("")}</div></div>
      <div id="dyn" class="kv" style="margin-top:0;gap:14px" aria-live="polite"></div>
      <p id="fe" style="color:var(--err);margin:0;font-size:14px" role="alert" hidden></p>
      <button class="btn gold" type="submit" id="fs" hidden>Catat kehadiran</button>`;
}

const opts = (arr, ph) => `<option value="">${ph}</option>` + arr.map(x => `<option value="${esc(x)}">${esc(x)}</option>`).join("");

function renderDyn(focus) {
  const box = $("#dyn");
  if (!box) return;
  const p = S.peran;
  let h = "";
  const fN = lbl => `<label class="f">${lbl}<input class="txt" id="fn" autocomplete="name" value="${esc(store.get("nama", ""))}" required></label>`;
  const fF = `<label class="f">Fakultas${p === "dosen" ? "" : " asal"}<select class="txt" id="fa" required>${opts(CONFIG.fakultas, "Pilih fakultas")}</select></label>`;

  if (p === "dosen") {
    h += `<label class="f">NIDN<input class="txt" id="fid" inputmode="numeric" maxlength="14" autocomplete="off" placeholder="10 digit" required></label><p id="fidh" class="hint" aria-live="polite">Nama dan fakultas terisi otomatis dari NIDN.</p>` + fN("Nama") + fF;
  } else if (p === "mahasiswa") {
    h += fN("Nama lengkap") + `<label class="f">NPM<input class="txt" id="fid" inputmode="numeric" maxlength="15" autocomplete="off" placeholder="Nomor Pokok Mahasiswa" required></label>` + fF;
  } else if (p === "rektorat") {
    h += fN("Nama lengkap") + `<label class="f">Jabatan / Unit Kerja di Rektorat<input class="txt" id="fa" placeholder="Contoh: Rektorat / WR / Lembaga / Biro" required></label>`;
  } else if (p === "mitra") {
    h += `<label class="f">Jenis mitra<select class="txt" id="fj" required>${opts(CONFIG.jenisMitra, "Pilih jenis mitra")}</select></label><label class="f">Nama instansi<input class="txt" id="fi" autocomplete="organization" placeholder="Nama instansi/perusahaan" required></label>` + fN("Nama Anda");
  } else if (p === "umum") {
    h += fN("Nama lengkap");
  }

  if (p) {
    h += `<label class="f">Nomor HP yang bisa dihubungi<input class="txt" id="fh" type="tel" inputmode="tel" autocomplete="tel" placeholder="08xxxxxxxxxx" value="${esc(store.get("hp", ""))}" required></label>`;
  }

  box.innerHTML = h;
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

function lookupDosen() {
  const el = $("#fid"), h = $("#fidh");
  if (!el || S.peran !== "dosen") return;
  const k = el.value.replace(/\D/g, "");
  if (!h) return;
  if (k.length < 10) {
    h.textContent = "Nama dan fakultas terisi otomatis dari NIDN.";
    h.className = "hint";
    return;
  }
  const r = (typeof DOSEN !== "undefined" && DOSEN[k]) ? DOSEN[k] : null;
  if (r) {
    const fn = $("#fn"), fa = $("#fa");
    if (fn) fn.value = r[0];
    if (fa) fa.value = r[1] || "";
    h.textContent = r[1] ? "Data ditemukan: nama dan fakultas terisi otomatis." : "Data ditemukan. Fakultas belum tercatat, silakan pilih.";
    h.className = "hint ok";
  } else {
    h.textContent = "NIDN belum ada di data dosen UP. Isi nama dan fakultas secara manual.";
    h.className = "hint";
  }
}

function openForm() {
  lastFocus = document.activeElement;
  $("#layer").innerHTML = `<div class="scrim" data-close="1"><form class="sheet" id="hf" role="dialog" aria-modal="true" aria-labelledby="ft" novalidate>
    <button type="button" class="x close-btn" data-close="1" aria-label="Tutup Dialog">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <h2 id="ft" style="font-size:18px;font-weight:800;margin:0 0 4px">Daftar hadir</h2>
    <p style="color:var(--mut);margin:6px 0 14px;font-size:14px">Untuk mencatat pengunjung tambahan atau mengganti peran. Isian menyesuaikan peran yang dipilih.</p>
    <div class="kv" style="margin-top:0;gap:14px">${formFields(false)}</div></form></div>`;
  renderDyn(false);
  const first = $("#fr button");
  if (first) first.focus();
}

function openGate() {
  $("#layer").innerHTML = `<div class="gate" role="dialog" aria-modal="true" aria-labelledby="gt">
    <div class="hero"><div class="wrap"><img src="${$("header.hero img") ? $("header.hero img").src : "assets/img/logo-dies-60-up.png"}" alt="Logo Dies Natalis ke-60 Universitas Pancasila" width="76" height="72"><div><p class="eyebrow">Selamat datang</p><h1 id="gt">Gelar Karya Penelitian dan PKM, 60 Tahun UP</h1></div></div></div>
    <form class="wrapin" id="hf" novalidate>
      <ol class="flow" aria-label="Alur kunjungan"><li class="on"><b>1</b>Hadir</li><li><b>2</b>Jelajah</li><li><b>3</b>Rute</li><li><b>4</b>Umpan balik</li></ol>
      <h2 style="font-size:20px">Daftar hadir dulu</h2>
      <p style="color:var(--mut);margin:6px 0 16px;font-size:14.5px">Mulai dari peran Anda; isian berikutnya menyesuaikan. Data dipakai untuk penghitungan pengunjung dan e-sertifikat; hanya panitia yang melihat nama, nomor HP, NIDN, atau NPM. Peran juga menentukan informasi yang ditonjolkan di katalog.</p>
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
  }
  if (peran === "rektorat") {
    asal = $("#fa") ? ($("#fa").value || "").trim() : "";
    if (!asal) return err("Isi jabatan atau unit kerja Anda di Rektorat.");
  }
  if (peran === "mitra") {
    const j = $("#fj") ? $("#fj").value : "",
      n = $("#fi") ? ($("#fi").value || "").trim() : "";
    if (!j) return err("Pilih jenis mitra.");
    if (!n) return err("Isi nama instansi.");
    asal = j + " - " + n;
  }
  let id = "";
  if (peran === "dosen") {
    id = $("#fid") ? $("#fid").value.replace(/\D/g, "") : "";
    if (id.length !== 10) return err("NIDN harus 10 digit angka.");
  }
  if (peran === "mahasiswa") {
    id = $("#fid") ? $("#fid").value.replace(/\D/g, "") : "";
    if (id.length < 6 || id.length > 15) return err("NPM tidak valid. Isi angka NPM Anda.");
  }
  if (!nama) return err("Isi nama Anda.");
  const hp = ($("#fh") ? $("#fh").value || "" : "").replace(/[^\d+]/g, "");
  if (!/^(\+62|62|0)8\d{7,12}$/.test(hp))
    return err("Nomor HP tidak valid. Contoh: 08123456789.");

  const btn = ev.target.querySelector("button[type=submit]");
  if (btn) btn.disabled = true;

  try {
    const uid = (typeof Undi !== "undefined" && Undi.id) ? Undi.id() : ("UP60-" + Math.random().toString(36).slice(2, 8).toUpperCase());
    await Att.submit({ nama, peran, asal, id, hp, uid, t: new Date().toISOString() });
    const wasGate = !!$(".gate");
    S.checked = true;
    store.set("hadir", true);
    store.set("peran", S.peran);
    store.set("asal", asal);
    store.set("idn", id);
    store.set("nama", nama);
    store.set("hp", hp);
    closeLayer();
    toast("Kehadiran tercatat. Silakan jelajahi karya.");
    refreshAtt();
    if (wasGate) {
      go("beranda");
      if (!store.get("kamera", false)) setTimeout(openCamPrime, 350);
    } else {
      render(S.tab);
    }
  } catch (e) {
    if (btn) btn.disabled = false;
    err(e && e.message === "readonly" ? "Akun Anda hanya dapat melihat halaman ini. Gunakan tautan formulir publik." : "Kehadiran belum tercatat. Periksa koneksi lalu coba lagi.");
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

/* ---------- Stempel Kunjungan Booth 60 ---------- */
const BOOTH_N = 60;
function boothCode(p) {
  let h = 2166136261;
  const s = "up60-gk-2026|" + p;
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
    wait = 5000 - (Date.now() - last);
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
        ? " · Lengkap seluruh 60 booth! Jelajah Karya Selesai!"
        : " (Tinggal " + (target - n) + " booth lagi untuk lengkap)"),
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
    if (r.ok && r.p) promptBoothRating(r.p);
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
          <span>${r.n >= target ? "🎉 Seluruh 60 Booth Lengkap!" : `(Tinggal ${target - r.n} booth lagi untuk lengkap)`}</span>
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
            ? `<button class="btn gold scan-continue-btn" data-act="scanRateClose">🎉 Selesai! Lihat Semua Booth →</button>`
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
    <h2 id="cp">Aktifkan kamera untuk pindai booth</h2>
    <p style="color:var(--mut);font-size:14.5px;margin:8px 0 14px">Setiap booth punya QR di bawah posternya. Pindai ${BOOTH_N} QR untuk melengkapi kunjungan 60 booth. Peramban akan meminta izin kamera; gambar tidak disimpan.</p>
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
/* sinkronisasi stempel */
const Undi = {
  col: null,
  rows: [],
  init() {
    if (Att.db) {
      this.col = Att.db.collection("stamps");
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
    const u = store.get("stamps_data", {}) || {};
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



function viewQrBooth() {
  const u = (store.get("url", CONFIG.publicUrl || "") || "").trim(), web = /^https?:\/\//.test(u);
  $("#v-qrbooth").innerHTML = `<div class="noprint"><button class="link" data-go="hadir">← Kembali ke kehadiran</button>
    <div class="sec" style="margin-top:0"><h2>QR booth untuk dicetak</h2><p class="lead">Satu QR per panel; tempel di bawah poster nomor yang sama. ${web ? "QR berisi tautan halaman ini beserta kode, sehingga kamera ponsel biasa pun dapat mencatat kunjungan." : "Tautan publik belum diisi di halaman Kehadiran, jadi QR hanya berisi kode dan hanya terbaca oleh pemindai di dalam halaman ini."}</p>
    <div class="row"><button class="btn gold" data-act="print">Cetak (2 × 3 per A4)</button></div></div></div>
    <div class="qrgrid" style="margin-top:14px">${DATA.map(d => panelOf(d)).sort((a, b) => a - b).map(p => { const d = DATA.find(x => panelOf(x) === p); return `<div class="qcard"><span class="pn1">Panel ${p}</span><div class="qi" id="qb${p}"></div><span class="cd">${boothCode(p)}</span><small>${esc((d.judul.length > 80 ? d.judul.slice(0, 78) + "…" : d.judul))}</small><small><b>Pindai untuk mencatat kunjungan</b></small></div>` }).join("")}</div>`;
  if (typeof QRCode === "undefined") return;
  DATA.forEach(d => { const p = panelOf(d), box = document.getElementById("qb" + p); if (!box) return; const c = boothCode(p); try { new QRCode(box, { text: web ? u.replace(/#.*$/, "") + "#b=" + c : c, width: 176, height: 176, correctLevel: QRCode.CorrectLevel.M }); } catch (e) { } });
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

document.addEventListener("input", (e) => {
  if (e.target.id === "fid") lookupDosen();
});
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
      if (currentN >= BOOTH_N ) {
        closeScan();
        
      }
    }, 250);
    return;
  }
  if (d.act === "scanRateClose") {
    e.stopPropagation();
    const currentN = Object.keys(S.stamp).length;
    closeScanRateSheet();
    if (currentN >= BOOTH_N ) {
      closeScan();
      
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
