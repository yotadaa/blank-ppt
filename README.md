# Blank PPT

Blank PPT adalah template project untuk membuat presentasi skripsi/proposal berbasis React + Vite. Repo ini belum berisi konten final penelitian. Data di `code-snapshot/public/data` sengaja dibuat dummy sebagai contoh struktur saja.

Panduan ini ditujukan untuk user: apa yang perlu disiapkan sebelum slide dibuat.

## Yang Perlu Disiapkan

### 1. Draft proposal atau skripsi

Siapkan draft utama yang akan dijadikan sumber slide.

Letakkan file di:

```text
docs/proposal
```

Format yang disarankan:

- Markdown (`.md`) untuk draft yang mudah dibaca dan diproses.
- DOCX/PDF boleh disertakan sebagai sumber asli, tetapi sebaiknya tetap ada versi Markdown agar isi bisa dianalisis menyeluruh.

Isi draft sebaiknya lengkap:

- judul penelitian;
- latar belakang;
- rumusan masalah;
- tujuan;
- batasan masalah;
- tinjauan pustaka;
- metodologi;
- data atau objek penelitian;
- hasil atau rencana evaluasi;
- kesimpulan atau target luaran;
- daftar pustaka.

### 2. Paragraf yang sudah punya sitasi

Slide akan dibuat dari isi draft, bukan dari ringkasan bebas. Setiap sub-judul slide minimal membutuhkan satu paragraf, dan setiap paragraf harus punya sitasi.

Siapkan draft dengan sitasi yang jelas, misalnya:

```text
Penjadwalan praktikum membutuhkan pengelolaan ruang, waktu, kelas, dan asisten agar konflik jadwal dapat ditekan (Pratama, 2025).
```

Paragraf yang sudah punya referensi akan lebih mudah dipindahkan menjadi konten slide tanpa membuat klaim kosong.

### 3. Daftar referensi lengkap

Siapkan daftar referensi yang benar-benar dipakai di draft.

Minimal siapkan:

- nama penulis dan tahun;
- judul artikel/buku;
- DOI atau URL sumber;
- nama file PDF jika sudah ada;
- catatan halaman yang relevan jika sudah diketahui.

Setelah slide selesai dibuat, semua referensi yang muncul di slide akan direkap ulang dan dibandingkan dengan daftar pustaka.

### 4. PDF artikel atau link download

Untuk setiap referensi yang dikutip di slide, siapkan PDF artikel atau link unduhan yang bisa diakses.

PDF lokal nantinya diletakkan di:

```text
code-snapshot/public/assets/reference-pdfs
```

Screenshot halaman referensi yang relevan nantinya diletakkan di:

```text
code-snapshot/public/assets/reference-pdf-pages
```

Preview referensi di aplikasi mengambil data dari `slides.json`, jadi setiap sitasi perlu dipetakan ke PDF dan halaman yang benar.

### 5. Aset visual tambahan

Jika ada aset visual dari user, siapkan juga:

- logo kampus atau institusi;
- screenshot aplikasi atau sistem;
- diagram proses;
- tabel hasil;
- grafik evaluasi;
- gambar pendukung penelitian.

Aset visual final akan direkam di:

```text
code-snapshot/public/data/assets.json
```

Generated image yang dibuat untuk slide sebaiknya mengikuti gaya:

```text
3D isometric, slightly cartoonized
```

Namun gambar tidak wajib dipakai di setiap slide. Jika slide terlalu padat, gambar akan dilewati setelah screenshot dianalisis.

### 6. Preferensi presentasi

Sebelum pengerjaan final, tentukan jika ada preferensi khusus:

- jumlah slide target;
- bahasa slide;
- gaya visual formal, akademik, atau lebih modern;
- warna aksen;
- nama kampus, program studi, dan identitas penyaji;
- apakah deck untuk proposal, seminar hasil, sidang, atau publikasi.

## Struktur Project

Folder utama yang akan dipakai:

```text
code-snapshot
```

Isi penting:

- `code-snapshot/src` - source React app.
- `code-snapshot/public/data/slides.json` - data slide dan referensi.
- `code-snapshot/public/data/thesis.json` - data draft/proposal untuk pencarian dan modal.
- `code-snapshot/public/data/assets.json` - daftar aset gambar.
- `code-snapshot/public/assets` - tempat gambar, PDF referensi, dan screenshot halaman PDF.

Folder berikut hanya bundle lokal lama dan tidak menjadi sumber utama repo:

```text
skripsi-presenter-web
source-docs
```

Gunakan `docs/proposal` untuk sumber draft baru.

## Cara Menjalankan

Dari root repo:

```powershell
cd C:\skripsi\blank-ppt\code-snapshot
npm install
npm run dev -- --port 5173
```

Buka:

```text
http://127.0.0.1:5173/presentation/
```

Build produksi:

```powershell
npm run build
```

## Data Saat Ini

Saat ini `code-snapshot/public/data` hanya berisi contoh dummy:

- beberapa slide contoh;
- beberapa paragraf draft contoh;
- beberapa aset SVG dummy;
- referensi dummy.

Data tersebut boleh dipakai untuk memahami struktur JSON, tetapi harus diganti ketika draft asli dan referensi asli sudah tersedia.

## Validasi Yang Akan Dilakukan

Setelah konten slide dibuat, setiap slide perlu divalidasi satu per satu.

Proses validasi:

1. Buka slide di browser.
2. Screenshot slide.
3. Analisis apakah ada teks terpotong, overlap, gambar rusak, font terlalu kecil, atau sitasi hilang.
4. Perbaiki slide.
5. Screenshot ulang.
6. Ulangi sampai semua slide bersih.

Selain itu, referensi juga perlu divalidasi:

- setiap sitasi punya entry di `slides.json`;
- PDF atau URL sumber bisa dibuka;
- screenshot halaman referensi sesuai dengan klaim di slide;
- maksimal dua referensi utama ditampilkan per paragraf atau bagian penting.

## Panduan Teknis Lanjutan

Panduan teknis untuk agent atau developer yang akan menyusun slide ada di:

```text
agents.md
```

User cukup menyiapkan draft, referensi, PDF/link artikel, aset visual, dan preferensi presentasi. Setelah itu project bisa dipakai untuk membangun slide final dari data tersebut.
