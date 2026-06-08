# Presenter Web QA Tasklist

## Permintaan Konten

- [x] Website presentasi dibuat di workspace berbeda dari deck PDF/HTML utama.
- [x] Navigasi klik area kiri/kanan berpindah ke slide sebelumnya/selanjutnya.
- [x] Transisi slide dibuat smooth, termasuk perpindahan highlight navbar.
- [x] Paragraf/item/citation yang ditekan membuka modal referensi atau informasi terkait.
- [x] Modal diperbesar, diposisikan center, dan memakai halaman PDF lokal yang relevan.
- [x] Screenshot referensi dapat diklik untuk membuka artikel/PDF di tab baru.
- [x] Narasi POV pihak ketiga seperti "Pendahuluan menjelaskan bahwa..." dihapus.
- [x] Referensi internal seperti "Data penelitian FST, 2025" dan "Hasil pengujian sistem, 2025" tidak dipakai sebagai rujukan.

## Permintaan Substansi Skripsi

- [x] Semua subjudul slide memiliki deskripsi dan maksimal dua sitasi APA.
- [x] Implementasi Fuzzy Crossover menjelaskan diversity dan stagnansi hasil crossover sebagai alasan pengaturan crossover rate.
- [x] Implementasi Fuzzy Mutation menjelaskan penggunaan pergerakan skor fitness dari iterasi sebelumnya.
- [x] Modal paragraf Cr/Mr memakai konteks Fuzzy Controller, bukan konteks perbandingan Classic GA vs Fuzzy GA.
- [x] Konflik mata kuliah tatap muka/teori terekam sebagai benturan mata praktikum dengan mata kuliah teori.
- [x] Konflik mata kuliah tatap muka/teori diberi penalti menengah hingga tinggi pada slide/modal fitness.
- [x] Saran pengembangan Greedy sebagai post-processing/fallback dimasukkan ke flowchart penutup.

## Permintaan Visual

- [x] Cover hanya berisi judul dan identitas utama, tanpa paragraf deskripsi panjang.
- [x] Font konten, navbar, flowchart, dan label dibuat lebih besar serta lebih seragam.
- [x] Ikon generik yang terasa kurang jelas pada divider/penutup diganti dengan elemen visual isometrik.
- [x] Slide 23/flowchart populasi dibuat ulang mengikuti style deck, tanpa watermark.
- [x] Screenshot GUI diperbesar dan diberi callout.
- [x] Slide comparison Classic GA vs Fuzzy GA dibuat lebih data-driven.

## Validasi Yang Harus Lulus

- [x] Static check: 45 slide, istilah wajib ada, istilah terlarang tidak ada.
- [x] Modal reference audit: semua citation yang dipakai punya preview PDF lokal valid atau catatan eksplisit.
- [x] Browser interaction: klik area kiri/kanan, klik paragraf/citation, dan klik preview referensi.
- [x] Screenshot seluruh 45 slide dirender ulang setelah patch terakhir.
- [x] Contact sheet dianalisis untuk clipping, overlap, font terlalu kecil, gambar rusak, dan elemen janggal.
- [x] Slide prioritas 6, 13, 14, 28, 31, 34, 35, 44 dicek individual.
- [x] Jika ada temuan visual, patch dan ulangi validasi.
- [x] Ulangi validasi static + visual sampai tidak ada temuan kritis.
