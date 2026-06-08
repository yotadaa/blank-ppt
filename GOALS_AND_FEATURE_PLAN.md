# Goals and Feature Plan

Dokumen ini merekam seluruh goal dan fitur yang diminta user selama migrasi presenter ke React. Gunakan sebagai checklist utama agar tidak ada pekerjaan tertinggal.

## Main Goal

Membangun presenter skripsi interaktif berbasis React + Vite di workspace baru, tanpa mengganti deck/presenter lama, dengan performa lebih ringan dan fitur editing langsung dari konteks draft skripsi.

## Non-Negotiable Requirements

- Workspace baru, tidak replace file lama.
- React + Vite.
- Konten berbahasa Indonesia.
- Full script skripsi dari `Draft Skripsi F1E122037 Fix.docx` harus dimuat ke web app.
- App harus lebih ringan dari HTML presenter sebelumnya.
- Semua fitur harus divalidasi dengan browser/screenshot sebelum dianggap selesai.
- Harus ada paket/plan yang jelas untuk agent berikutnya.

## Presentation Interaction Goals

- Navigasi slide:
  - klik bagian kanan layar untuk slide berikutnya;
  - klik bagian kiri layar untuk slide sebelumnya;
  - keyboard arrow left/right;
  - rail daftar slide.
- Smooth animation:
  - transisi slide fade/translate;
  - highlight navbar/chapter mengikuti slide aktif.
- Fullscreen:
  - tombol `Fullscreen` di toolbar;
  - shortcut `F`;
  - `Shift+F` juga harus dianggap shortcut fullscreen karena user meminta shortcut fullscreen.
- Command palette:
  - `Ctrl+K`;
  - cari slide;
  - cari draft;
  - cari asset;
  - toggle fullscreen.

## Modal / Paragraph Click Goals

Saat paragraf/item pada slide diklik:

- modal muncul di tengah dan cukup luas;
- modal tidak kecil;
- background slide blur;
- modal menampilkan:
  - teks/item yang diklik;
  - konteks skripsi yang sesuai dengan item itu;
  - maksimal dua sitasi APA;
  - preview halaman referensi/PDF yang dipakai slide;
  - tombol `Lihat di draft`;
  - tombol `Replace text`.

Untuk referensi:

- sitasi maksimal dua;
- gaya APA;
- preview harus halaman artikel/PDF yang dirujuk oleh paragraf slide;
- jangan tampilkan “Preview halaman tidak ditampilkan” kalau PDF lokal ada;
- ketika preview/screenshot referensi diklik, buka artikel/PDF di tab baru.

## Draft Preview Goals

Tombol `Lihat di draft`:

- tidak langsung otomatis membuka draft saat item diklik;
- hanya dibuka saat user menekan tombol;
- menampilkan paragraf draft yang relevan;
- highlight kata kunci yang cocok;
- bisa mencari di seluruh draft;
- idealnya menempatkan user pada bagian/halaman skripsi tempat paragraf slide dicite.

## Replace Text Goals

Tombol `Replace text`:

- user bisa mencari dan melihat draft;
- user bisa memilih teks tertentu, bukan seluruh paragraf;
- user bisa memilih beberapa potongan teks dari paragraf berbeda;
- pilihan masuk ke selection basket;
- user bisa memilih mode gabung:
  - gabung spasi;
  - baris baru;
- saat `Terapkan ke slide`, teks pada item slide yang diklik terganti;
- citation spans yang ada pada target sebaiknya dipertahankan maksimal dua sitasi;
- operasi harus undoable.

## Asset and Image Goals

Asset library:

- load semua image assets yang dipakai deck lama;
- load generated images;
- asset bisa difilter:
  - all;
  - isometric;
  - GUI;
  - reference;
  - logo;
  - slide;
- user bisa insert gambar ke slide sebagai layer overlay;
- user bisa replace gambar yang sedang dipilih di slide;
- gambar bisa diatur posisi dan ukurannya.

Layer manager:

- daftar layer per slide;
- pilih layer;
- drag posisi;
- input posisi X/Y;
- input width;
- z-index/depth;
- front/back;
- lock/unlock;
- show/hide;
- duplicate;
- delete.

Enhancement yang masih perlu dikerjakan:

- resize handles langsung di canvas;
- snap-to-center;
- reset size;
- alt/title fields untuk image.

## Theme / Color Scheme Goals

Harus ada theme switcher:

- Light Academic;
- Mint Lab;
- Navy Focus;
- Warm Paper;
- High Contrast.

Harus ada custom accent color input.

Persist:

- theme;
- accent;
- editor state;
- layer state.

## Performance Goals

Masalah awal: halaman lama berat karena semua slide dan data besar hidup dalam satu HTML/JS.

Solusi yang sudah diterapkan:

- hanya render satu active slide di canvas;
- slide rail berupa thumbnail teks ringan, bukan render semua slide penuh;
- `thesis.json`, `slides.json`, dan `assets.json` dipindahkan ke `public/data`;
- React bundle tidak lagi mengimpor JSON besar langsung;
- bundle JS awal turun dari sekitar 1.8 MB menjadi sekitar 174 KB.

## Thesis Content Requirements yang Harus Tetap Terekam

Poin isi yang sebelumnya diminta user dan harus dipertahankan dalam slide/presenter:

- jangan memakai rujukan:
  - `(Data penelitian FST, 2025)`;
  - `(Hasil pengujian sistem, 2025)`.
- jangan ada narasi POV pihak ketiga seperti “Pendahuluan menjelaskan bahwa...”.
- konflik mata kuliah tatap muka/teori harus terekam:
  - benturan praktikum dengan mata kuliah tatap muka/teori;
  - masuk ke penalty;
  - penalty menengah hingga tinggi.
- fuzzy crossover harus menjelaskan:
  - fuzzy membaca diversity dan stagnansi hasil crossover;
  - diversity dipakai sebagai parameter yang relevan, bukan klaim kosong;
  - rujukan Subburaj & Miruna Joe Amali (2025);
  - contoh: average fitness rendah dan diversity luas membuat crossover rate naik untuk menambah eksplorasi.
- fuzzy mutation harus menjelaskan:
  - berbeda dari crossover;
  - memakai pergerakan skor fitness dari iterasi sebelumnya;
  - berlaku untuk iterasi > 1;
  - rujukan Pytel (2025).
- greedy/post-processing repair harus masuk sebagai saran pengembangan:
  - greedy sebagai post-processing;
  - flowchart repair konflik;
  - memperbaiki konflik residual setelah GA.

## Visual/Deck Goals dari Iterasi Sebelumnya

Beberapa permintaan visual yang tetap relevan:

- slide divider tiap BAB pakai elemen gambar 3D isometrik sedikit kartunisasi, bukan ikon kecil yang membingungkan;
- hindari ikon besar generik yang tidak menjelaskan fungsi;
- screenshot GUI harus diperbesar dan diberi callout;
- slide hasil harus lebih data-driven;
- slide comparison Classic GA vs Fuzzy GA sebaiknya tabel dua kolom;
- slide Q&A/Terima Kasih di akhir;
- cover hanya judul dan identitas, tidak perlu deskripsi panjang;
- font content harus seragam dan agak lebih besar;
- navbar jangan terlalu kecil.

## Validation Goals

Minimal validasi yang harus dilakukan agent berikutnya:

- `npm run build`;
- app load tanpa console error;
- 45 slide terdeteksi;
- navigasi kiri/kanan;
- modal terbuka dari klik paragraph;
- `Lihat di draft` menemukan draft paragraphs;
- `Replace text` memilih teks dan mengubah slide;
- asset insert membuat layer terlihat;
- layer z-index/width/visibility bekerja;
- theme switcher bekerja;
- fullscreen shortcut bekerja;
- screenshot visual desktop, modal, draft, replaced, layer, theme;
- montage preview setelah selesai.

