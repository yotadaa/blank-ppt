S K R I P S I

OPTIMASI ALGORITMA GENETIKA MENGGUNAKAN *FUZZY LOGIC* PADA PENJADWALAN PRAKTIKUM DI FAKULTAS SAINS DAN TEKNOLOGI 
UNIVERSITAS JAMBI

MUKHTADA BILLAH NST

F1E122037

PROGRAM STUDI SISTEM INFORMASI 
JURUSAN TEKNIK ELEKTRO DAN INFORMATIKA

FAKULTAS SAINS DAN TEKNOLOGI
UNIVERSITAS JAMBI
2025

PROPOSAL SKRIPSI

OPTIMASI ALGORITMA GENETIKA MENGGUNAKAN *FUZZY LOGIC* PADA PENJADWALAN PRAKTIKUM DI FAKULTAS SAINS DAN TEKNOLOGI 
UNIVERSITAS JAMBI

Diajukan sebagai salah satu syarat untuk menyelesaikan studi pada 
Program Studi Sistem Informasi

MUKHTADA BILLAH NST
F1E122037

PROGRAM STUDI SISTEM INFORMASI 
JURUSAN TEKNIK ELEKTRO DAN INFORMATIKA

FAKULTAS SAINS DAN TEKNOLOGI
UNIVERSITAS JAMBI
2025

# PENGESAHAN

Skripsi dengan judul “**OPTIMASI ALGORITMA GENETIKA MENGGUNAKAN FUZZY LOGIC PADA PENJADWALAN PRAKTIKUM DI FAKULTAS SAINS DAN TEKNOLOGI UNIVERSITAS JAMBI**” yang disusun oleh MUKHTADA BILLAH NST, NIM F1E122037 telah dipertahankan di depan tim penguji pada tanggal dan dinyatakan:

| Susunan Tim Penguji : | Susunan Tim Penguji : |
| --- | --- |
| Ketua		: |  |
| Sekretaris	: |  |
| Anggota	: | 1.<br>2.<br>3. |

| <br>Diketahui: | <br>Diketahui: |
| --- | --- |
| Pembimbing Utama<br><br><br><br><br>Pradita Eko Prasetyo Utomo, S.Pd., M.Cs.<br>NIP.   198710282019031010 | Pembimbing Pendampnig<br><br><br><br><br>Mutia Fadhila Putri, M.Kom.<br>NIP.   199612162022032016 |
| <br><br>Diketahui: | <br><br>Diketahui: |
| Dekan Fakultas Sains dan Teknologi<br><br><br><br><br>Drs. Jefri Marzal, M.Sc., D.I.T.<br>NIP. 196806021993031004 | Ketua Jurusan Teknik Elektro<br>dan Informatika<br><br><br><br>Edi Saputra, S.T., M.Sc.<br>NIP. 198501082015041003 |

# RINGKASAN

Penjadwalan praktikum laboratorium merupakan permasalahan akademik yang kompleks karena melibatkan berbagai komponen, seperti mata praktikum, kelompok kelas, jumlah peserta, ruangan, hari, slot waktu, durasi praktikum, serta ketersediaan asisten. Di Fakultas Sains dan Teknologi Universitas Jambi, kegiatan praktikum memiliki karakteristik yang berbeda dengan perkuliahan reguler karena durasi dan kebutuhan ruangnya dapat bervariasi pada setiap program studi. Kondisi tersebut dapat menimbulkan konflik jadwal, seperti penggunaan ruangan secara bersamaan, bentrokan waktu antar kelompok praktikum, serta ketidaksesuaian jadwal asisten.

Penelitian ini bertujuan untuk mengoptimasi penjadwalan praktikum laboratorium menggunakan Algoritma Genetika yang diintegrasikan dengan *Fuzzy Logic*. Komponen penjadwalan direpresentasikan ke dalam struktur gen dan kromosom, kemudian diproses melalui tahapan pembangkitan populasi, evaluasi fitness, seleksi, *crossover*, mutasi, *repair*, dan validasi konflik. Kelayakan jadwal dinilai berdasarkan nilai fitness dan penalty terhadap beberapa konflik utama, yaitu konflik penggunaan ruangan, konflik waktu, konflik kelompok praktikum, dan konflik jadwal asisten.

*Fuzzy Logic* diterapkan sebagai mekanisme adaptif untuk mengatur parameter evolusi, khususnya *crossover rate* dan *mutation rate*. *Crossover rate* disesuaikan berdasarkan tingkat keragaman populasi, sedangkan mutation rate disesuaikan berdasarkan kondisi stagnansi atau peningkatan nilai fitness. Dengan pendekatan ini, proses optimasi tidak sepenuhnya bergantung pada parameter statis, tetapi dapat menyesuaikan diri terhadap kondisi populasi selama proses pencarian solusi berlangsung.

Hasil pengujian menunjukkan bahwa sistem mampu menghasilkan jadwal praktikum yang layak pada mayoritas percobaan. Classic GA mencapai solusi optimal pada 19 dari 20 percobaan, sedangkan Fuzzy GA mencapai solusi optimal pada 18 dari 20 percobaan. Classic GA menunjukkan hasil yang lebih baik pada beberapa metrik, seperti rata-rata fitness, penalty akhir, waktu komputasi, dan kecepatan konvergensi. Namun, Fuzzy GA menunjukkan rata-rata stagnasi maksimum yang lebih rendah, sehingga *Fuzzy Logic* lebih tepat diposisikan sebagai mekanisme adaptif yang membantu menjaga dinamika pencarian solusi, bukan sebagai bukti bahwa metode fuzzy selalu lebih unggul pada seluruh kondisi.

# RIWAYAT HIDUP

Mukhtada Billah NST lahir di Mompang Julu pada 8 Juli 2004. Penulis merupakan anak pertama dari pasangan Bapak Hermansyah dan Ibu Catur Sovia Devin. Penulis menempuh pendidikan dasar di SD Negeri 061 Mompang Julu. Pada tahun 2015, penulis pindah ke Jambi dan melanjutkan pendidikan di SD Negeri 204/IV Kota Jambi. Setelah itu, penulis melanjutkan pendidikan ke SMP Negeri 24 Kota Jambi, kemudian menempuh pendidikan menengah atas di SMA Negeri 6 Kota Jambi.

Pada tahun 2022, penulis diterima sebagai mahasiswa Program Studi Sistem Informasi, Jurusan Teknik Elektro dan Informatika, Fakultas Sains dan Teknologi, Universitas Jambi melalui jalur Seleksi Bersama Masuk Perguruan Tinggi Negeri (SBMPTN). Selama menempuh pendidikan pada jenjang Strata Satu (S1), penulis aktif mengikuti berbagai kegiatan akademik dan non-akademik untuk menambah wawasan, keterampilan, serta pengalaman.

Dalam bidang akademik dan pengembangan profesional, penulis melaksanakan kegiatan magang di PT Affan Technology Indonesia atau yang dikenal dengan parto.id. Pada kegiatan tersebut, penulis menerapkan pengetahuan yang telah diperoleh selama perkuliahan untuk mengembangkan aplikasi yang dibutuhkan oleh perusahaan. Selain itu, penulis juga aktif dalam berbagai organisasi kemahasiswaan. Di Himpunan Mahasiswa Sistem Informasi (HIMASI), penulis berpartisipasi sebagai anggota Divisi Riset dan Teknologi. Penulis juga aktif di English Club sebagai wakil ketua sekaligus *founding member*.

Selain itu, penulis mengikuti organisasi Agen Statistik yang diselenggarakan oleh Badan Pusat Statistik Jambi sebagai anggota Data dan Riset. Penulis juga memperoleh bantuan pendidikan dari Bank Indonesia serta berpartisipasi aktif dalam organisasi kemahasiswaan penerima bantuan pendidikan Bank Indonesia, yaitu Generasi Baru Indonesia (GenBI). Dalam organisasi tersebut, penulis berperan sebagai anggota Divisi Pengabdian Masyarakat dan turut menjadi pengurus website GenBI Wilayah Jambi. Berbagai pengalaman tersebut menjadi bagian penting dalam proses pengembangan diri penulis, baik dari aspek akademik, organisasi, kepemimpinan, maupun keterampilan teknologi informasi.

# PRAKATA

Alhamdulillahirabbil’alamin, puji dan syukur penulis panjatkan ke hadirat Allah SWT atas segala rahmat, karunia, dan pertolongan-Nya, sehingga penulis dapat menyelesaikan skripsi yang berjudul “Optimasi Algoritma Genetika Menggunakan Fuzzy Logic pada Penjadwalan Praktikum di Fakultas Sains dan Teknologi Universitas Jambi”. Skripsi ini disusun sebagai salah satu syarat untuk memperoleh gelar Sarjana pada Program Studi Sistem Informasi, Jurusan Teknik Elektro dan Informatika, Fakultas Sains dan Teknologi, Universitas Jambi.

Penulis menyadari bahwa proses penyusunan skripsi ini tidak terlepas dari bantuan, doa, dukungan, arahan, serta bimbingan dari berbagai pihak. Oleh karena itu, dengan segala kerendahan hati dan rasa hormat, penulis menyampaikan ucapan terima kasih yang sebesar-besarnya kepada:

- Ibu saya tercinta, Catur Sovia Devin, yang senantiasa memberikan doa, kasih sayang, dukungan, motivasi, dan semangat kepada penulis dalam setiap proses yang dilalui hingga skripsi ini dapat terselesaikan.

- Ayah saya tercinta, Hermansyah, yang selalu memberikan doa, dukungan, nasihat, dan semangat kepada penulis selama menjalani masa studi hingga proses penyusunan skripsi ini.

- Bapak Edi Saputra, S.T., M.Sc., selaku Ketua Jurusan Teknik Elektro dan Informatika Fakultas Sains dan Teknologi Universitas Jambi.

- Ibu Reni Aryani, S.Kom., M.S.I., selaku Ketua Program Studi Sistem Informasi Universitas Jambi yang telah memberikan arahan dan dukungan selama masa perkuliahan.

- Bapak Pradita Eko Prasetyo Utomo, S.Pd., M.Cs., selaku pembimbing utama, dan Ibu Mutia Fadhila Putri, M.Kom., selaku pembimbing skripsi, yang telah memberikan bimbingan, arahan, masukan, serta dukungan yang sangat berarti dalam proses penyusunan skripsi ini.

- Seluruh dosen dan staf di Program Studi Sistem Informasi Universitas Jambi atas segala ilmu, pengalaman, bantuan, dan pelayanan yang telah diberikan selama penulis menempuh masa studi.

- Sahabat karib penulis yang telah berjuang bersama, saling membantu, memberikan dukungan, serta menjadi tempat berbagi semangat dalam proses penyusunan skripsi.

- Perpustakaan dan English Club yang telah menyediakan tempat, suasana, dan ruang yang mendukung penulis dalam mengerjakan skripsi.

- Teman-teman R-003 atas kerja sama, kebersamaan, dan dukungannya selama masa perkuliahan. Penulis juga mengucapkan terima kasih kepada para senior yang telah memberikan arahan, informasi, dan bantuan yang bermanfaat selama proses studi.

- Seluruh Angkatan 2022 Program Studi Sistem Informasi atas kebersamaan, dukungan, dan pengalaman berharga selama menjalani masa perkuliahan.

Penulis menyadari bahwa skripsi ini masih memiliki kekurangan. Oleh karena itu, penulis mengharapkan kritik dan saran yang membangun demi perbaikan dan penyempurnaan di masa mendatang. Semoga skripsi ini dapat memberikan manfaat, khususnya bagi pengembangan ilmu di bidang Sistem Informasi serta menjadi referensi bagi penelitian selanjutnya.

|  | Jambi, 02 Juli 2025<br>Penulis<br><br><br><br>Mukhtada Billah Nst<br>F1E122037 |
| --- | --- |

# DAFTAR ISI

# DAFTAR TABEL

# DAFTAR GAMBAR

# DAFTAR LAMPIRAN

- **PENDAHULUAN**

- Latar Belakang

Penjadwalan akademik, khususnya pada kegiatan praktikum laboratorium, merupakan tantangan kompleks dalam manajemen operasional perguruan tinggi . Meskipun sebagian besar perguruan tinggi telah menerapkan sistem informasi akademik (SIAKAD) untuk mengelola jadwal perkuliahan tatap muka yang bersifat konstan, penjadwalan praktikum masih menghadapi kendala tersendiri. Hal ini disebabkan oleh sifat kegiatan praktikum yang tidak memiliki durasi waktu tetap dan bervariasi antar program studi, baik dari segi lama pelaksanaan, jumlah sesi, maupun kebutuhan fasilitas laboratorium. Setiap program studi umumnya memiliki standar operasional (SOP) yang berbeda dalam penyelenggaraan praktikum, sehingga tidak dapat sepenuhnya diakomodasi oleh sistem penjadwalan reguler di SIAKAD.

Kondisi ini menimbulkan tantangan baru dalam sinkronisasi jadwal antar prodi, karena keterbatasan ruang dan waktu sering kali menyebabkan potensi tumpang tindih penggunaan laboratorium. Oleh karena itu, diperlukan metode penjadwalan tersendiri yang mampu mengoptimalkan alokasi waktu dan fasilitas praktikum berdasarkan karakteristik masing-masing program studi tanpa menimbulkan konflik antar jadwal. Pendekatan berbasis algoritma genetika (AG) menjadi salah satu solusi potensial, karena mampu mencari kombinasi penjadwalan yang efisien secara adaptif terhadap berbagai variabel seperti kapasitas ruang, waktu praktikum, serta preferensi penggunaan laboratorium

Di Universitas Jambi, sistem penjadwalan akademik secara umum telah terintegrasi melalui Sistem Informasi Akademik (SIAKAD), yang digunakan untuk mengatur jadwal perkuliahan tatap muka dengan waktu yang konstan dan terstruktur. Namun, mekanisme ini belum sepenuhnya mampu mengakomodasi penjadwalan kegiatan praktikum yang bervariasi antar program studi. Setiap prodi, khususnya di lingkungan Fakultas Sains dan Teknologi (FST) seperti prodi MIPA dan Teknik, memiliki standar operasional (SOP) serta durasi praktikum yang berbeda-beda, ada yang hanya membutuhkan dua jam, namun ada pula yang memerlukan waktu hingga tiga jam per sesi. Selain itu, Kepala Laboratorium (Kalab) dan Ketua Program Studi (Kaprodi) menggunakan instrumen yang berbeda dalam memantau jadwal, sehingga koordinasi menjadi tidak sinkron.

Perbedaan kebutuhan tersebut menyebabkan jadwal praktikum tidak dapat diintegrasikan langsung dengan sistem SIAKAD, karena durasi dan frekuensi pelaksanaannya tidak konstan seperti perkuliahan reguler. Akibatnya, koordinasi penggunaan laboratorium antar prodi sering kali berpotensi menimbulkan tumpang tindih jadwal (*overlap*), terutama ketika jumlah laboratorium dan peralatan yang tersedia tidak sebanding dengan jumlah mahasiswa. Oleh karena itu, dibutuhkan metode penjadwalan khusus yang dapat mengoptimalkan penggunaan laboratorium praktikum berdasarkan kebutuhan masing-masing prodi, tanpa menimbulkan bentrok jadwal antar kelas maupun antar mata kuliah. Salah satu pendekatan yang menjanjikan adalah penggunaan algoritma genetika (AG), karena kemampuannya dalam mencari solusi optimal dari kombinasi jadwal yang kompleks dan dinamis.

Algoritma Genetika (AG) merupakan sebuah teknik komputasi yang terinspirasi dari proses evolusi biologis, menawarkan pendekatan yang sangat kuat untuk menyelesaikan masalah penjadwalan yang kompleks . Algoritma ini mampu menjelajahi ribuan bahkan jutaan kemungkinan kombinasi jadwal secara efisien untuk menemukan solusi yang mendekati optimal, dengan mempertimbangkan berbagai batasan (constraints) yang saling bertentangan . Implementasi sistem penjadwalan berbasis Algoritma Genetika dapat mentransformasi proses yang saat ini tidak terikat pada SOP menjadi sebuah sistem yang proaktif, terstruktur, dan teroptimasi.

Implementasi algoritma genetika dalam penjadwalan akademik sendiri telah menjadi fokus penelitian signifikan dalam beberapa tahun terakhir. Dengan meningkatnya kompleksitas dalam pengelolaan jadwal di institusi pendidikan, algoritma ini menawarkan solusi yang efisien untuk mengatasi berbagai masalah. Penjadwalan tidak hanya melibatkan alokasi waktu dan ruang, tetapi juga mempertimbangkan ketersediaan dosen, kapasitas mahasiswa, serta keterbatasan fasilitas, sehingga memerlukan pendekatan yang sistematis dan terstruktur. Berbagai penelitian menunjukkan efektivitas algoritma genetika dalam konteks ini.  menemukan bahwa penerapan algoritma genetika pada penjadwalan mata kuliah di Universitas Pamulang dapat meningkatkan efisiensi dengan menghasilkan solusi yang optimal.  juga menunjukkan bahwa algoritma genetika mempercepat proses penjadwalan mata pelajaran di tingkat sekolah dasar serta meningkatkan kualitas jadwal yang dihasilkan. Hasil serupa ditunjukkan oleh  yang membuktikan bahwa algoritma genetika memiliki performa baik dalam menemukan solusi optimal untuk penjadwalan mata pelajaran.

Meskipun Algoritma Genetika terbukti efektif dalam penyelesaian masalah penjadwalan, beberapa penelitian menyatakan bahwa performanya dapat ditingkatkan melalui integrasi *Fuzzy logic* (FL) sebagai mekanisme pengendali adaptif. FL bekerja dengan prinsip derajat kebenaran (degrees of truth) dan unggul dalam menangani ketidakpastian, ambiguitas, serta data yang tidak presisi , sehingga relevan untuk diimplementasikan pada sistem penjadwalan laboratorium yang dinamis dan tidak seragam. Penggabungan FL dengan GA memungkinkan penyesuaian operator evolusi secara otomatis berdasarkan kondisi populasi, misalnya tingkat konflik, keberagaman kromosom, dan stagnasi peningkatan fitness, sehingga GA tidak lagi beroperasi dengan parameter statis, melainkan dengan sifat adaptif dan responsif.

Penerapan FL sebagai pengoptimal GA telah dibuktikan oleh  melalui pengembangan Multi-objective Fuzzy-based Adaptive Memetic Algorithm (MO-FAMA), yang memanfaatkan fuzzy rule-base untuk mengatur strategi seleksi, nilai *crossover*, serta probabilitas mutasi berdasarkan tingkat fitness dan jumlah benturan jadwal. Hasilnya menunjukkan peningkatan kinerja yang signifikan dengan akurasi penyelesaian konflik mencapai 96,29%, jauh di atas GA konvensional sebesar 48,79%. Studi lain oleh  turut mengonfirmasi efektivitas kombinasi fuzzy-metaheuristik pada struktur penjadwalan kompleks. Melalui bukti empiris tersebut dapat disimpulkan bahwa *Fuzzy logic* mampu meningkatkan efektivitas dan ketahanan Algoritma Genetika dalam ruang pencarian besar dan kompleks, terutama pada konteks penjadwalan dengan banyak variabel dan batasan seperti laboratorium di perguruan tinggi.

Berdasarkan penelitian-penelitian tersebut, terlihat jelas bahwa Algoritma Genetika merupakan pendekatan yang efektif dan adaptif dalam mengatasi permasalahan penjadwalan, baik di ranah akademik maupun non-akademik sehingga layak diadaptasi untuk kasus yang didalami. Sehingga berdasarkan latar belakang yang telah dipaparkan, peneliti memilih judul “OPTIMASI PENJADWALAN PENGGUNAAN LABORATORIUM MENGGUNAKAN ALGORITMA GENETIKA STUDI KASUS LABORATORIUM FAKULTAS SAINS DAN TEKNOLOGI UNIVERSITAS JAMBI”. Penelitian ini bertujuan untuk mengembangkan sistem penjadwalan laboratorium yang lebih efisien, transparan, dan terstruktur dengan menerapkan algoritma genetika sebagai metode optimasi.

- Rumusan Masalah

Berdasarkan latar belakang yang telah dipaparkan, rumusan masalah dalam penelitian ini adalah:

- Bagaimana penerapan Algoritma Genetika menggunakan *Fuzzy logic* dapat mengoptimalkan penjadwalan laboratorium untuk meminimalisir bentrok jadwal dan double booking?

- Bagaimana hasil evaluasi performa penerapan *fuzzy logic* pada algoritma genetika meningkatkan performa dalam hal penjadwalan laboratorium?

- Tujuan Penelitian

Merujuk pada rumusan masalah di atas, tujuan penelitian ini adalah:

- Mengembangkan sistem penjadwalan laboratorium MIPA dan Teknik berbasis Algoritma Genetika yang terstruktur dan transparan.

- Mengoptimalkan proses penjadwalan agar terhindar dari konflik jadwal, tumpang tindih penggunaan ruang, serta ketidakefisienan distribusi waktu.

- Mengevaluasi efektivitas penerapan *fuzzy logic *pada Algoritma Genetika dalam meningkatkan efisiensi dan kualitas jadwal yang dihasilkan.

- Batasan Masalah

Adapun batasan masalah dalam penelitian ini adalah sebagai berikut:

- Penelitian ini hanya difokuskan pada proses penjadwalan laboratorium MIPA dan Teknik di Fakultas Sains dan Teknologi Universitas Jambi.

- Data yang digunakan terbatas pada informasi ketersediaan ruang laboratorium, jadwal dosen/asisten, serta jumlah mahasiswa yang terlibat dalam kegiatan praktikum.

- Algoritma optimasi yang diterapkan dalam penelitian ini dibatasi pada penggunaan Algoritma Genetika, tanpa melakukan perbandingan mendalam dengan metode optimasi lain.

- Manfaat Penelitian

- Manfaat Teoritis

Memberikan kontribusi dalam pengembangan ilmu pengetahuan, khususnya pada penerapan Algoritma Genetika dalam bidang optimasi penjadwalan akademik. Serta menjadi referensi untuk penelitian lebih lanjut terkait algoritma optimasi dalam manajemen pendidikan tinggi.

- Manfaat Praktis

Membantu Fakultas Sains dan Teknologi Universitas Jambi dalam menyusun jadwal laboratorium secara lebih efisien, transparan, dan adaptif, mengurangi risiko bentrok jadwal, double booking dan menjadi dasar pengembangan sistem informasi penjadwalan yang dapat diperluas ke lingkup fakultas atau universitas secara keseluruhan.

- TINJAUAN PUSTAKA

- Algoritma Penjadwalan

Penjadwalan (*scheduling*) secara umum didefinisikan sebagai upaya pengelolaan waktu terhadap suatu kegiatan untuk memastikan kelancaran dan kesinambungannya . Secara teknis, penjadwalan diartikan sebagai pengalokasian sumber daya yang terbatas dalam kurun waktu tertentu untuk mengerjakan sejumlah pekerjaan . Proses penjadwalan adalah kegiatan yang dilakukan untuk menyusun aktivitas dengan mempertimbangkan semua komponen yang terlibat.

Pendekatan yang ditunjukkan oleh , yang mengembangkan sistem pendataan dan penjadwalan cetak stiker berbasis Java dengan algoritma *Priority-Based Scheduling*. Algoritma ini bekerja dengan prinsip memberikan prioritas pada tugas yang memiliki tingkat urgensi atau kompleksitas tertentu, seperti tenggat waktu, desain, atau volume pekerjaan. Hasilnya menunjukkan peningkatan efisiensi operasional serta kepuasan pelanggan karena proses produksi menjadi lebih terorganisir dan sesuai dengan skala prioritas. Studi ini menegaskan relevansi algoritma penjadwalan dalam konteks industri manufaktur dan produksi massal.

Dalam konteks akademik, algoritma penjadwalan digunakan untuk mengelola waktu dan sumber daya pendidikan agar kegiatan belajar mengajar berjalan efektif.  menerapkan algoritma FIFO (*First In First Out*) pada sistem penjadwalan praktikum berbasis web. Pendekatan FIFO menekankan prinsip *first-come*, first-served, di mana permintaan pertama yang masuk akan dilayani lebih dahulu. Hasil penelitian menunjukkan bahwa sistem ini tidak hanya berhasil mengurangi bentrokan jadwal, tetapi juga meningkatkan transparansi dan efisiensi administrasi laboratorium melalui akses *real-time* bagi dosen dan mahasiswa.

Selain itu, penelitian oleh  menyoroti penerapan algoritma penjadwalan dalam sistem otomatisasi peminjaman proyektor di lingkungan kampus. Sistem ini meningkatkan efisiensi dan persepsi positif mahasiswa terhadap layanan, serta dianggap lebih adil dan transparan dibanding metode manual. Penerapan ini memperlihatkan bahwa prinsip-prinsip algoritma penjadwalan dapat diterapkan tidak hanya untuk kegiatan akademik seperti perkuliahan atau praktikum, tetapi juga untuk manajemen fasilitas dan layanan kampus yang berbasis sistem informasi.

Secara umum, berbagai penelitian di atas menunjukkan bahwa algoritma penjadwalan berfungsi sebagai komponen vital dalam sistem yang menuntut efisiensi waktu dan sumber daya, baik di sektor akademik, industri, maupun teknologi informasi. Beragam pendekatan algoritmik seperti FIFO, *Priority-Based*, *Weighted Round Robin*, dan *Never Queue* memperlihatkan fleksibilitas penerapannya tergantung pada kebutuhan sistem. Sebagaimana ditegaskan oleh , algoritma *Weighted Round Robin* (WRR) mampu menyeimbangkan beban server secara proporsional berdasarkan kapasitas masing-masing node dalam web server cluster. Penerapan WRR menurunkan waktu respons da n meningkatkan ketersediaan layanan dibanding sistem single server, membuktikan bahwa prinsip dasar penjadwalan juga krusial dalam konteks load balancing dan sistem berbasis jaringan.

- Algoritma Genetika

Algoritma Genetika (AG) adalah salah satu metode komputasi evolusioner yang meniru konsep evolusi biologis, terutama seleksi alam dan proses reproduksi . Pertama kali diperkenalkan oleh John Holland pada dekade 1970-an, AG banyak dimanfaatkan untuk menyelesaikan permasalahan pencarian dan optimasi yang sifatnya kompleks . Mekanisme kerjanya diawali dengan pembentukan populasi solusi awal yang direpresentasikan dalam bentuk kromosom. Setiap kromosom dipandang sebagai individu, lalu dievaluasi dengan menggunakan fungsi kecocokan (*fitness function*) untuk menilai sejauh mana solusi tersebut sesuai dengan kriteria yang ditentukan. Individu yang memiliki nilai kecocokan lebih tinggi akan lebih berpeluang dipilih dan diwariskan melalui operator genetika seperti *crossover* dan *mutation*, sehingga melahirkan generasi solusi baru yang diharapkan lebih baik .

Berbagai penelitian telah membuktikan efektivitas AG dalam penerapannya di dunia nyata. Sebagai contoh, studi yang dilakukan oleh  menunjukkan bahwa penggunaan AG dalam penjadwalan mata pelajaran di sekolah dasar dapat menghasilkan jadwal yang lebih efisien dibandingkan metode tradisional. Sementara itu, penelitian oleh  berhasil mengimplementasikan AG untuk mengatur penjadwalan pekerja shift pada sebuah restoran cepat saji. Hasil penelitian tersebut memperlihatkan bahwa AG mampu menemukan solusi optimal dalam waktu singkat, serta menunjukkan fleksibilitasnya dalam menangani permasalahan dengan berbagai kendala yang kompleks. Temuan-temuan ini menegaskan bahwa AG merupakan pendekatan yang handal untuk memecahkan beragam persoalan optimasi dalam berbagai bidang.

Menurut , kemampuan AG untuk melakukan optimasi global menjadikannya relevan dalam berbagai disiplin ilmu, mulai dari biologi, ekonomi, hingga kecerdasan buatan. Penelitian mereka yang mengombinasikan Deep Learning dengan AG dalam model *Hybrid Deep Learning and Genetic Algorithm* (HMB-DLGAHA) untuk diagnosis kanker payudara menunjukkan peningkatan akurasi deteksi hingga di atas 90%. Kombinasi keduanya memungkinkan AG berperan dalam mengoptimalkan parameter model pembelajaran mendalam, mempercepat konvergensi, dan menghindari local minima. Hal ini membuktikan bahwa AG tidak hanya efektif sebagai algoritma pencarian, tetapi juga adaptif terhadap integrasi dengan teknologi lain seperti jaringan saraf tiruan dan machine learning.

Dari sisi optimasi algoritmik, penelitian  membandingkan kinerja AG dengan Modified Improved Particle Swarm Optimization (MIPSO) pada kasus penjadwalan mata kuliah. Hasil studi menunjukkan bahwa MIPSO mampu mencapai waktu eksekusi lima kali lebih cepat dibanding AG (190,281 detik vs 988,199 detik), namun AG tetap menunjukkan kemampuan stabil dalam menghasilkan jadwal bebas bentrok dengan hasil yang konsisten. Penelitian ini menegaskan bahwa meskipun terdapat algoritma baru yang lebih cepat, AG masih menjadi standar acuan dalam pengembangan dan pembandingan metode optimasi karena kestabilannya dan kemampuannya beradaptasi pada berbagai struktur permasalahan.

Dalam konteks penjadwalan akademik, efektivitas AG telah dibuktikan oleh berbagai penelitian di Indonesia.  mengimplementasikan AG pada sistem penjadwalan kuliah praktikum berhasil menghasilkan jadwal tanpa konflik dengan nilai fitness sebesar 167. Hasil tersebut menunjukkan bahwa mekanisme evolusioner AG mampu menyesuaikan kombinasi waktu, ruang, dan dosen secara efisien untuk menghindari tumpang tindih jadwal. Demikian pula, penelitian oleh  memperlihatkan bahwa penggunaan AG dalam sistem informasi akademik mampu mengoptimalkan jadwal kuliah dengan mempertimbangkan preferensi dosen, kapasitas ruang, serta waktu pengajaran. Proses otomatisasi ini mempercepat waktu pemrosesan dan mengurangi potensi kesalahan manusia dalam penyusunan jadwal manual.

Keberhasilan AG juga ditunjukkan dalam konteks pendidikan dasar oleh , yang menerapkannya untuk penjadwalan mata pelajaran di SD Islam Terpadu Darussalam. Sistem berbasis web yang dikembangkan mampu menyeimbangkan alokasi waktu guru dan kelas, serta mengurangi bentrokan jadwal secara signifikan dibanding metode manual. Hasil ini membuktikan bahwa AG memiliki fleksibilitas yang tinggi dalam menangani sistem penjadwalan dengan berbagai tingkat kompleksitas, mulai dari pendidikan dasar hingga pendidikan tinggi.

Selain pada bidang pendidikan, AG juga terbukti efektif di sektor industry. mengimplementasikan AG untuk mengoptimalkan penjadwalan pekerja shift di Warung Gunung Kediri. Dengan parameter populasi sebesar 520 dan 450 generasi, penelitian ini menghasilkan nilai fitness maksimal (1,0), menunjukkan bahwa AG mampu menghasilkan alokasi kerja yang efisien dan adil. Pendekatan ini relevan dalam konteks manajemen sumber daya manusia karena memperhatikan keseimbangan antara beban kerja dan waktu istirahat karyawan, yang pada akhirnya meningkatkan produktivitas.

Penelitian  turut memperkuat bukti empiris mengenai efektivitas AG. Dalam pengembangan sistem informasi penjadwalan laboratorium di Politeknik Manufaktur Negeri Bangka Belitung, mereka menggunakan pendekatan waterfall dengan integrasi operator genetika seperti seleksi, *crossover*, dan mutasi. Sistem yang dihasilkan terbukti mengurangi bentrokan jadwal praktikum dan menghasilkan solusi penjadwalan yang optimal secara otomatis. Dengan demikian, penelitian ini menunjukkan bahwa integrasi AG dengan kerangka pengembangan sistem informasi mampu meningkatkan efisiensi sekaligus memberikan hasil yang presisi terhadap kebutuhan pengguna.

Dari berbagai penelitian tersebut, dapat disimpulkan bahwa Algoritma Genetika merupakan metode optimasi yang adaptif, fleksibel, dan efektif dalam menyelesaikan masalah penjadwalan maupun optimasi sumber daya secara umum. Fleksibilitas AG dalam menangani berbagai jenis kendala dan kemampuannya menemukan solusi mendekati optimal menjadikannya pilihan unggul dibandingkan metode konvensional. Baik di bidang akademik, industri, maupun kesehatan, penerapan AG terbukti mempercepat proses pengambilan keputusan, meningkatkan efisiensi sistem, dan menghasilkan hasil yang konsisten dengan tingkat kesalahan minimal.

- Kromosom

Dalam Algoritma Genetika (AG), kromosom merupakan representasi solusi yang akan dievaluasi dan dioptimasi selama proses evolusi. Secara konseptual, kromosom dipahami sebagai daftar gen terurut yang mengkodekan parametUtomo & Wahyudi (2020).  dalam penelitiannya mendefenisikan kromosom di AG sebagai kombinasi dari gen-gen yang membentuk makna tertentu, di mana gen adalah variabel dasar yang membentuk kromosom. Representasi kromosom bergantung pada skema pengkodean (*encoding scheme*).  dalam studinya membagi skema pengkodean kromosom dalam beberapa kategori yang meliputi meliputi Biner (untaian 1 atau 0), Oktal (angka 0-7), Heksadesimal (0-9, A-F), Permutasi (untaian angka yang mewakili posisi, umum untuk masalah pengurutan), Berbasis Nilai (untaian nilai riil, integer, atau karakter), dan Pohon (digunakan untuk mengevolusi program). Dengan demikian, pada studi kasus yang ditela’ah, penulis menggunakan skema pengkodean berbasis nilai, di aman terdapat kode mata kuliah yang memiliki karakteristik untaian karakter (*char*) dan angka pada gen yang lain.

Setiap kromosom berhubungan langsung dengan satu titik dalam ruang solusi (*solution space*) , sehingga modifikasi kromosom melalui proses *crossover* dan *mutation* akan menghasilkan solusi-solusi baru yang berpotensi lebih optimal. Dalam struktur AG untuk penjadwalan, kromosom selalu dibentuk untuk memuat informasi lengkap sehingga dapat merepresentasikan satu kandidat jadwal yang dapat dievaluasi oleh *fitness function*.

Pada penelitian penjadwalan mata pelajaran, kromosom biasanya dibangun dengan pengkodean nilai (value coding) di mana setiap gen menyatakan satu kegiatan pembelajaran dalam satu slot waktu . Pendekatan tersebut relevan diterapkan dalam penelitian ini dengan menyesuaikan konteks pada penggunaan laboratorium. Adapun mewakili jadwal laboratorim, struktur kromosom memuat komponen seperti Kode Mata Kuliah (MK), Kode Dosen (DS), Kode Ruangan/Laboratorium (RG), dan Kode Jam Perkuliahan (JK), sehingga satu gen mengandung informasi lengkap mengenai satu kegiatan pembelajaran yang memakai laboratorium. Kromosom tersusun dari rangkaian gen dengan format <MK, DS, RG, JK> .

- Pembangkitan Kromosom

Pembangkitan kromosom merupakan tahap awal yang menentukan kualitas solusi dalam proses evolusi Algoritma Genetika, seperti pada penelitian yang dilakukan oleh  yang menaruh proses pembangkitan kromosom di tahap awal penelitian. Pada penelitian ini, kromosom dibentuk untuk merepresentasikan susunan jadwal penggunaan laboratorium selama satu periode perkuliahan. Setiap kromosom terdiri atas sejumlah gen, dan setiap gen menggambarkan satu sesi kegiatan praktikum yang memuat informasi lengkap berupa kode mata kuliah, dosen/asisten, ruangan laboratorium, hari, dan rentang waktu pelaksanaan.

Proses pembangkitan dilakukan secara acak (*randomized initialization*), namun tetap mengikuti batasan sistem penjadwalan seperti ketersediaan ruangan, kapasitas peserta, SKS praktikum, serta jam operasional laboratorium . Agar jadwal awal yang dibangkitkan tidak menimbulkan konflik, sistem menerapkan langkah kontrol kualitas dengan menghindari benturan waktu, mencegah pemakaian ruangan ganda, dan mengelompokkan kelas paralel berdasarkan kebutuhan kapasitas ruangan . Untuk menjaga keanekaragaman solusi, duplikasi gen dalam kromosom dieliminasi, dan apabila jumlah gen kurang dari kebutuhan penjadwalan, dilakukan pembangkitan tambahan hingga struktur kromosom me(Aryani & Yurinanda, 2025)suai . Pendekatan ini memastikan setiap individu dalam populasi awal telah memuat jadwal laboratorium yang valid, feasible, dan memiliki keragaman struktur, sehingga proses evolusi berikutnya (fitness evaluation, *crossover*, dan mutation) dapat berlangsung secara lebih efektif.

- *Fitness Function*

Fungsi fitness digunakan untuk mengukur kualitas solusi yang direpresentasikan oleh kromosom dalam Algoritma Genetika. Berbagai penelitian menyatakan bahwa fungsi fitness memiliki peran penting dalam menentukan arah konvergensi serta kemampuan GA untuk memilih solusi yang paling optimal dalam ruang pencarian. Misalnya,  merancang fitness untuk mengevaluasi kelancaran jalur robot dengan mengoptimalkan panjang lintasan dan kontinuitas gerakan. Sementara itu,  menyusun fitness untuk meminimalkan ketimpangan komposisi kelompok berdasarkan rata-rata nilai siswa dan distribusi gender. Hal ini menunjukkan bahwa fungsi fitness dapat dirumuskan berbeda sesuai tujuan optimasi.

Pada penelitian ini, pendekatan fitness mengikuti struktur yang diperkenalkan oleh , di mana nilai fitness mencerminkan tingkat pelanggaran terhadap constraint yang berlaku. Semakin sedikit konflik yang terjadi pada jadwal, semakin tinggi nilai fitness yang diperoleh. Berbeda dengan model yang menggunakan nilai negatif dari total konflik, penelitian ini menggunakan pendekatan nilai fitness antara 0 sampai 1, di mana solusi dengan skor semakin mendekati 1 menunjukkan jadwal semakin optimal. Rumus fitness yang digunakan adalah:

|  |  | (1) |
| --- | --- | --- |

Nilai *Penalty* diperoleh dari total pelanggaran terhadap kendala utama dalam penjadwalan penggunaan laboratorium. Setiap kategori konflik diberi bobot penalti berbeda sesuai tingkat prioritas:

- *Crossover*

*Crossover* merupakan operator genetika yang berfungsi melakukan rekombinasi gen antar dua kromosom untuk menghasilkan keturunan baru. Dalam Algoritma Genetika, operator ini adalah komponen kunci karena memanfaatkan informasi genetis dari solusi yang sudah ada untuk menemukan solusi yang lebih baik.  menegaskan bahwa operator *crossover* adalah teknik terpenting dalam pencarian solusi baru karena menjadi kekuatan utama dalam proses eksplorasi dan eksploitasi ruang pencarian. Sejalan dengan itu,  menyatakan bahwa *crossover*, bersama mutasi dan seleksi, membantu spesies berevolusi secara bertahap menuju solusi optimal selama siklus eksekusi algoritma. Pandangan ini dipertegas oleh  yang menyebut *crossover* sebagai inti paling penting dari GA karena memungkinkan pertukaran genom antar individu dengan probabilitas tertentu untuk menghasilkan keturunan yang lebih unggul.

juga mendefinisikan *crossover* sebagai operator evolusioner yang menggunakan dua atau lebih solusi kandidat (induk) untuk membentuk solusi baru (anak), dan operator ini harus disesuaikan dengan representasi kromosom. Selain itu,  menyebut *crossover* sebagai proses pertukaran bagian struktur dua kromosom untuk menghasilkan keturunan baru, sedangkan  menegaskan bahwa *crossover* berperan sangat penting karena kecenderungannya menjelajahi solusi baru dari solusi yang sudah ada sehingga sangat memengaruhi efisiensi GA.

Berbagai metode *crossover* telah diterapkan pada penelitian sebelumnya, seperti single-point *crossover*, two-point *crossover*, multi-point *crossover*, uniform *crossover*, cycle *crossover*, maupun pengembangan lanjut seperti directional *crossover* yang mengarahkan individu kurang adaptif untuk berevolusi menuju individu paling unggul sehingga mempercepat konvergensi evolusi . Variasi metode tersebut menunjukkan bahwa *crossover* bukan hanya pertukaran bagian gen sederhana, tetapi strategi eksplorasi yang sangat menentukan efektivitas GA dalam menemukan solusi optimal.

Laju *crossover* yang optimal dalam Genetic Algorithms (GAs) bukanlah nilai tunggal yang tetap, melainkan parameter yang sangat bergantung pada karakteristik masalah dan tahap evolusi algoritma, dengan rentang empiris umum yang tercatat berada antara 0.01 hingga 0.99 . Nilai *crossover* rate yang terlalu besar dapat meningkatkan intensitas pencarian tetapi memengaruhi efisiensi, sementara nilai yang terlalu kecil dapat menyebabkan algoritma lambat, tidak efisien, dan mengurangi kinerja pencarian global . Untuk mengatasi keterbatasan parameter statis ini, strategi probabilitas *crossover* adaptif digunakan, yang menyesuaikan *crossover* rate secara berkelanjutan berdasarkan nilai fitness individu dalam populasi , sehingga algoritma dapat memaksimalkan eksplorasi global dan menghindari konvergensi prematur . Dalam konteks eksperimental, berbagai laju *crossover* tetap diterapkan, seperti *crossover rate** *yang ditetapkan pada 0.9 dalam Algoritma Genetik Biner Multiobjektif untuk pemilihan fitur, 0.6 untuk identifikasi sistem discrete-time , atau bahkan 1.0 untuk masalah penjadwalan . Selain itu, tipe operator *crossover* juga memengaruhi hasil, misalnya, single-point *crossover* seringkali menjadi pilihan yang disukai dalam identifikasi sistem karena mampu mencapai keseimbangan terbaik antara akurasi dan parsimoni model, meskipun operator seperti multiple-point *crossover* dapat menghasilkan model yang lebih akurat tetapi cenderung terlalu banyak parameter (over-parameterized) .

- *Mutation*

Mutasi merupakan operator genetika yang berfungsi memodifikasi gen dalam kromosom untuk menghasilkan variasi baru pada populasi dan bertujuan untuk membentuk individu yang layak atau memiliki kualitas di atas rata-rata . Tujuan utama mutasi adalah mempertahankan keragaman genetis sehingga Algoritma Genetika tidak terjebak pada solusi optimal lokal.  juga mendefinisikan mutasi sebagai proses perubahan acak gen dalam untaian solusi populasi untuk menciptakan kromosom baru, dan menekankan efektivitas skema mutasi adaptif untuk mempercepat konvergensi.  menambahkan bahwa mutasi mengubah susunan gen dalam kromosom untuk menciptakan perbedaan dalam populasi sehingga menghasilkan individu baru dari kombinasi kromosom induk.  menegaskan bahwa mutasi mencegah kromosom menjadi terlalu mirip dengan memastikan perubahan acak pada informasi gen untuk menjaga keragaman populasi, terutama ketika evolusi jenuh.  mendefinisikan mutasi sebagai operator yang bertujuan membentuk individu yang layak atau berkualitas tinggi sekaligus memulihkan kerusakan materi genetik akibat proses *crossover*.

Secara umum, proses mutasi dilakukan dengan memilih gen secara acak berdasarkan probabilitas mutasi yang telah ditentukan (mutation probability). Jika angka acak yang dihasilkan lebih kecil dari peluang mutasi, maka gen terpilih akan dimodifikasi.  mencatat bahwa proses mutasi melibatkan pertukaran gen pada lokus yang sama hingga kromosom bebas konflik, dan bila probabilitas ditingkatkan secara berlebihan nilai fitness cenderung menurun dan waktu komputasi meningkat. Studi  menunjukkan bahwa pada kasus penjadwalan kelas, mutasi diterapkan dengan mengubah kode ruangan atau slot waktu secara acak setelah mutasi dipicu, sedangkan  menunjukkan contoh mutasi dengan mengubah representasi gen seperti 0 menjadi 1 atau sebaliknya pada sistem jadwal shift.  mendemonstrasikan bahwa mutasi dapat dilakukan dengan mengganti titik gen dengan kandidat independen berikutnya untuk mempertahankan prioritas penjadwalan tugas. Dengan demikian, proses mutasi pada berbagai penelitian sepakat berfokus pada upaya mengubah sebagian kecil gen tanpa merusak struktur keseluruhan kromosom, dengan tetap menjaga keseimbangan antara eksplorasi dan stabilitas evolusi.

- Penjadwalan Akademik

Menurut  pengembangan sistem informasi akademik berbasis web dapat meningkatkan efisiensi administrasi pendidikan dengan mengotomatisasi proses seperti pendaftaran siswa, penjadwalan kelas, hingga penilaian hasil belajar. Pendekatan digital ini mengurangi potensi kesalahan manusia, mempercepat pengolahan data, serta memperkuat integrasi antar unit akademik. Dalam konteks ini, penjadwalan bukan hanya sebuah kegiatan teknis, melainkan juga bagian dari strategi manajemen akademik yang menentukan kelancaran seluruh proses pendidikan.

menunjukkan bahwa penerapan sistem informasi penjadwalan berbasis web di Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Mataram mampu mengatasi permasalahan tumpang tindih jadwal antar dosen dan ruang kuliah. Sistem yang dikembangkan dengan metode waterfall ini memanfaatkan teknologi Bootstrap, PHP, dan MySQL, menghasilkan antarmuka yang mudah diakses serta tingkat kepuasan pengguna mencapai 100%. Penelitian tersebut membuktikan bahwa integrasi teknologi informasi dalam manajemen akademik meningkatkan akurasi dan efisiensi dalam perencanaan jadwal perkuliahan.

Dalam penelitian lain,  menggunakan pendekatan Rapid Application Development (RAD) untuk merancang sistem informasi akademik di SMK Mihadunal Ula. Sistem ini memungkinkan proses pendaftaran, penjadwalan, dan pembayaran dilakukan secara cepat dan akurat. Penerapan metode RAD mempercepat siklus pengembangan tanpa mengorbankan kualitas sistem, sementara otomatisasi penjadwalan mengurangi beban administratif dan mendukung digitalisasi sekolah. Hasil penelitian menunjukkan bahwa transformasi digital dalam penjadwalan akademik berkontribusi terhadap peningkatan efektivitas pengelolaan data dan reputasi lembaga pendidikan.

Penerapan sistem penjadwalan akademik juga terbukti relevan dalam lingkungan pendidikan tinggi yang memiliki kompleksitas data lebih tinggi.  menerapkan algoritma genetika dalam penjadwalan kuliah praktikum di Universitas Amikom Yogyakarta. Hasil penelitian menunjukkan bahwa pendekatan ini mampu menghasilkan jadwal tanpa konflik dengan nilai fitness tinggi, mengoptimalkan penggunaan ruang dan waktu dosen. Keberhasilan ini menegaskan bahwa pengelolaan akademik berbasis algoritma cerdas dapat menjadi solusi atas kompleksitas penjadwalan di institusi pendidikan modern.

Sementara itu,  membuktikan bahwa sistem informasi akademik yang mengintegrasikan algoritma genetika dapat menyesuaikan preferensi dosen dan mahasiswa sekaligus mempertimbangkan kapasitas ruang dan waktu. Pendekatan ini menghasilkan jadwal yang lebih efisien dengan waktu pemrosesan lebih singkat dibandingkan penyusunan manual. Dengan demikian, penjadwalan akademik berbasis optimasi bukan hanya berfungsi untuk menghindari bentrokan jadwal, tetapi juga untuk meningkatkan kenyamanan dan keadilan bagi seluruh civitas akademika.

Lebih lanjut,  menyoroti bahwa pengembangan sistem informasi penjadwalan berbasis algoritma genetika mampu menghasilkan solusi penjadwalan yang optimal dengan memanfaatkan operator genetika seperti seleksi, *crossover*, dan mutasi. Sistem ini secara signifikan mengurangi waktu kerja serta bentrokan jadwal yang sering terjadi pada proses manual. Hasil tersebut menegaskan bahwa integrasi antara metode optimasi dan pengembangan perangkat lunak berbasis web adalah arah penting dalam transformasi digital bidang pendidikan.

Penelitian lain oleh  menegaskan pentingnya transparansi dan aksesibilitas dalam sistem penjadwalan akademik. Dengan menerapkan algoritma First In First Out (FIFO) pada sistem penjadwalan praktikum di Universitas Alma Ata, penelitian ini berhasil meningkatkan efisiensi dan koordinasi antar dosen. Akses real-time terhadap jadwal memperkuat komunikasi internal serta memungkinkan pengambilan keputusan yang lebih cepat dalam proses akademik.

Secara keseluruhan, berbagai penelitian di atas memperlihatkan bahwa penjadwalan akademik tidak hanya berfungsi untuk menyusun jadwal kegiatan perkuliahan, tetapi juga berperan sebagai instrumen strategis dalam manajemen pendidikan modern. Melalui penerapan sistem informasi berbasis web dan algoritma optimasi seperti Genetic Algorithm atau FIFO, penjadwalan akademik mampu menjawab tantangan efisiensi, transparansi, dan akurasi yang dibutuhkan oleh lembaga pendidikan di era digital. Dengan demikian, penjadwalan akademik dapat dipandang sebagai bentuk konkrit dari penerapan teknologi informasi dalam pengelolaan sumber daya pendidikan secara menyeluruh dan berkelanjutan.

- Penerapan Algoritma Genetika dalam Penjadwalan

Penerapan Algoritma Genetika (AG) dalam penjadwalan bertujuan untuk mencari kombinasi waktu, ruang, dan sumber daya yang paling optimal dalam menyelesaikan permasalahan kompleks berbasis batasan (constraint-based optimization). Berbeda dengan metode konvensional yang biasanya menggunakan pendekatan deterministik, AG memanfaatkan mekanisme evolusi populasi secara iteratif untuk menghasilkan solusi yang semakin baik pada setiap generasi. Melalui operator seleksi, *crossover*, dan mutasi, AG mampu menjelajahi ruang solusi secara lebih luas dan menemukan konfigurasi jadwal yang mendekati optimum global dalam waktu yang relatif singkat.

Dalam bidang pendidikan, penerapan AG telah menjadi salah satu pendekatan utama dalam penyusunan jadwal akademik dan praktikum.  menunjukkan bahwa AG dapat mengoptimalkan penjadwalan kuliah dengan mempertimbangkan berbagai kendala seperti preferensi dosen, kapasitas ruangan, dan waktu pengajaran. Melalui evaluasi fitness function, setiap kombinasi jadwal dinilai berdasarkan tingkat konflik dan efisiensinya, sehingga hasil akhir menjadi lebih teratur dan terkoordinasi dibanding dengan penjadwalan manual. Penelitian ini menunjukkan bahwa AG tidak hanya menghasilkan solusi yang cepat, tetapi juga lebih adaptif terhadap kendala nyata dalam lingkungan akademik.

Penerapan AG pada penjadwalan praktikum juga terbukti efektif dalam lingkungan laboratorium.  mengembangkan sistem penjadwalan praktikum berbasis web di Institut Teknologi Nasional Malang. Dengan AG, sistem ini berhasil meminimalkan kesalahan jadwal hingga 2,26% dalam waktu proses hanya 15,5 detik. Solusi yang dihasilkan menunjukkan bahwa AG mampu menyusun jadwal laboratorium yang efisien dengan memperhatikan kendala ruang, waktu, dan jumlah peserta. Keunggulan AG terletak pada kemampuannya menyesuaikan parameter evolusi untuk menghindari konflik jadwal dan menyeimbangkan distribusi praktikum secara proporsional.

Penelitian  menegaskan bahwa AG dapat diintegrasikan secara efektif dalam pengembangan sistem informasi penjadwalan laboratorium. Melalui metode waterfall dan penggunaan operator genetika (seleksi, *crossover*, mutasi), mereka berhasil menghasilkan jadwal praktikum yang bebas bentrokan dan lebih efisien. Sistem berbasis web yang dibangun mempermudah kepala laboratorium dalam menyusun jadwal secara otomatis dan mengurangi beban kerja administratif. Temuan ini menggambarkan bagaimana AG tidak hanya berfungsi sebagai model komputasi, tetapi juga dapat diterapkan sebagai komponen praktis dalam pengembangan sistem informasi manajemen laboratorium.

Dalam bidang pendidikan dasar,  menerapkan AG pada penjadwalan mata pelajaran di SD Islam Terpadu Darussalam. Sistem berbasis web yang mereka kembangkan menghasilkan jadwal yang akurat, efisien, dan seimbang antara beban guru serta ketersediaan kelas. Pendekatan ini menunjukkan bahwa AG bersifat fleksibel dan dapat disesuaikan dengan struktur kurikulum berbeda, baik di tingkat sekolah maupun perguruan tinggi.

Keberhasilan penerapan AG tidak terbatas pada bidang akademik.  membuktikan bahwa AG efektif dalam penjadwalan pekerja shift di Warung Gunung Kediri. Dengan menggunakan parameter populasi 520 dan 450 generasi, penelitian ini mencapai nilai fitness maksimal (1,0) yang menandakan solusi tanpa pelanggaran jadwal. Hasil tersebut menunjukkan bahwa AG dapat menyeimbangkan alokasi kerja antar pegawai, menghindari konflik waktu, dan meningkatkan keadilan distribusi shift. Hal ini merefleksikan bahwa mekanisme evolusioner dalam AG bersifat universal dan dapat diadaptasi pada berbagai bidang yang memiliki permasalahan penjadwalan kompleks.

Selain itu,  membandingkan AG dengan Modified Improved Particle Swarm Optimization (MIPSO) pada penjadwalan mata kuliah. Meskipun hasil menunjukkan bahwa MIPSO lebih cepat, AG tetap mampu menghasilkan solusi tanpa konflik dengan stabilitas hasil yang tinggi. Studi ini menegaskan bahwa AG tetap relevan dan kompetitif dibandingkan metode optimasi lain karena sifatnya yang robust serta mudah diadaptasi untuk berbagai model penjadwalan.

Secara umum, berbagai penelitian tersebut menunjukkan bahwa penerapan Algoritma Genetika dalam penjadwalan mampu menyelesaikan permasalahan multi-constraint secara efektif dan efisien. Kelebihan utama AG terletak pada fleksibilitasnya dalam menghadapi beragam parameter dan kendala nyata, serta kemampuannya untuk menemukan solusi yang hampir optimal dalam waktu yang terbatas. Dengan demikian, AG dapat dipandang sebagai metode optimasi yang tidak hanya relevan dalam pengembangan sistem penjadwalan akademik dan praktikum, tetapi juga dalam penjadwalan industri dan manajemen sumber daya modern yang membutuhkan efisiensi tinggi dan keakuratan dalam pengambilan keputusan.

- Penjadwalan Laboratorium

Penjadwalan laboratorium merupakan proses pengaturan kegiatan praktikum agar dapat dilaksanakan secara sistematis, efisien, dan terhindar dari bentrokan jadwal. Tidak seperti penjadwalan akademik yang umumnya mengatur alokasi mata kuliah teori, penjadwalan laboratorium melibatkan lebih banyak variabel, seperti ketersediaan ruang, jumlah alat, kapasitas peserta, serta keterlibatan asisten atau teknisi. Kompleksitas ini menjadikan proses penyusunan jadwal praktikum memerlukan strategi optimasi yang lebih cermat.  menunjukkan bahwa penerapan algoritma greedy kombinasi dengan perulangan dalam sistem penjadwalan laboratorium Teknik Informatika UISU dapat membantu kepala laboratorium menyusun jadwal dengan lebih efisien, mengurangi waktu kerja, serta menghindari konflik antar mata kuliah praktikum. Hasil penelitian ini menegaskan bahwa penggunaan algoritma dalam penjadwalan laboratorium merupakan solusi efektif terhadap keterbatasan sumber daya dan waktu.

Lebih lanjut,  mengembangkan sistem informasi penjadwalan laboratorium TRPL di Politeknik Manufaktur Negeri Bangka Belitung dengan metode waterfall dan algoritma genetika. Hasil penelitian menunjukkan bahwa sistem ini mampu mengatasi kelemahan proses manual yang rentan bentrok, dengan menghasilkan jadwal optimal menggunakan operator genetika seperti seleksi, *crossover*, dan mutasi. Pendekatan ini tidak hanya meminimalkan kesalahan, tetapi juga memberikan fleksibilitas bagi pengelola laboratorium untuk menyesuaikan jadwal secara dinamis terhadap perubahan kebutuhan praktikum. Temuan tersebut membuktikan bahwa penerapan algoritma evolusioner dapat meningkatkan efisiensi dan kualitas pengelolaan laboratorium.

Dalam konteks manajSuslistya & Grizele Mahadewi (2023) melalui kajian systematic literature review menegaskan bahwa manajemen laboratorium yang baik berperan penting dalam meningkatkan mutu pelaksanaan praktikum, khususnya dalam bidang sains. Mereka menjelaskan bahwa manajemen efektif mencakup pengelolaan sarana, sumber daya manusia, serta keselamatan kerja. Penjadwalan yang terstruktur menjadi salah satu elemen kunci dalam menjaga efisiensi dan keamanan kegiatan laboratorium. Dengan demikian, penjadwalan laboratorium tidak hanya bersifat administratif, tetapi juga berperan strategis dalam menjamin kualitas pembelajaran berbasis eksperimen.

Pendekatan berbasis algoritma juga telah dibuktikan oleh , yang menerapkan algoritma genetika pada sistem penjadwalan praktikum di Institut Teknologi Nasional (ITN) Malang. Sistem tersebut mampu menekan tingkat kesalahan jadwal hingga 2,26% dengan waktu proses hanya 15,5 detik, menggantikan metode manual yang sebelumnya lambat dan sering menimbulkan bentrokan. Keberhasilan ini menunjukkan bahwa algoritma genetika efektif dalam menyelesaikan permasalahan multi-constraint scheduling, karena mampu mencari solusi mendekati optimal dengan mempertimbangkan batasan ruang, waktu, dan jumlah peserta praktikum secara bersamaan.

Selain faktor teknis dan algoritmik, efektivitas penjadwalan laboratorium juga bergantung pada tata kelola dan pemanfaatan fasilitas.  melakukan analisis terhadap pelaksanaan praktikum Biologi di SMA Negeri 1 Padang Ganting dan menemukan bahwa tingkat pemanfaatan laboratorium mencapai 79,25% dengan pelaksanaan sebesar 82,02%, tergolong kategori “baik” hingga “sangat baik”. Namun, penelitian ini juga mengidentifikasi bahwa keterbatasan fasilitas dan frekuensi praktikum masih menjadi kendala utama. Temuan tersebut menunjukkan bahwa sistem penjadwalan laboratorium harus dirancang dengan mempertimbangkan efisiensi penggunaan ruang dan waktu agar fasilitas yang terbatas dapat dimaksimalkan.

Pendekatan lain ditunjukkan oleh , yang menerapkan algoritma First In First Out (FIFO) dalam sistem penjadwalan praktikum berbasis web di Universitas Alma Ata. Sistem ini berhasil mengatasi masalah bentrok jadwal antar dosen dan kelas, serta meningkatkan transparansi dan koordinasi antar pengguna melalui akses real-time terhadap jadwal. Penelitian ini menegaskan bahwa penerapan sistem penjadwalan berbasis algoritma sederhana sekalipun dapat memberikan dampak signifikan terhadap efisiensi dan komunikasi antar pihak yang terlibat dalam kegiatan laboratorium.

Kualitas manajemen laboratorium juga ditentukan oleh faktor pengawasan dan pengelolaan strategis.  mengidentifikasi lima strategi utama dalam pengelolaan laboratorium IPA di tingkat SMA, yakni pengelolaan alat, bahan, data, pelatihan tenaga laboratorium, dan penganggaran biaya. Implementasi strategi tersebut terbukti meningkatkan kualitas dan keberlanjutan kegiatan praktikum. Namun, penulis juga mencatat bahwa keterbatasan fasilitas dan tenaga profesional masih menjadi tantangan. Temuan ini memperkuat pandangan bahwa sistem penjadwalan yang baik perlu disertai dengan manajemen laboratorium yang terintegrasi agar pelaksanaan praktikum berjalan optimal.

Dari berbagai hasil penelitian tersebut, dapat disimpulkan bahwa penjadwalan laboratorium memiliki karakteristik yang lebih kompleks dibandingkan penjadwalan akademik. Jika penjadwalan akademik berfokus pada efisiensi waktu dan alokasi ruang perkuliahan, maka penjadwalan laboratorium harus mempertimbangkan faktor tambahan seperti ketersediaan alat, kapasitas ruang, dan durasi praktikum yang bervariasi. Penerapan algoritma optimasi seperti Greedy, FIFO, dan Genetic Algorithm terbukti mampu mengatasi kompleksitas ini dengan menghasilkan jadwal yang efisien, adaptif, dan bebas konflik. Oleh karena itu, penjadwalan laboratorium yang terotomatisasi tidak hanya meningkatkan efisiensi administrasi, tetapi juga mendukung peningkatan kualitas pembelajaran praktikum yang berbasis pengalaman langsung di lingkungan pendidikan.

- *Fuzzy Logic*

Fuzzy logic (FL) merupakan pendekatan komputasi yang beroperasi berdasarkan tingkat kebenaran (degree of truth) alih-alih logika biner sepenuhnya benar (1) atau salah (0). FL pertama kali diperkenalkan oleh Lotfi Zadeh pada tahun 1965 dan dirancang untuk menangani permasalahan ketidakpastian, ketidakjelasan, dan ambiguitas yang sulit direpresentasikan menggunakan logika konvensional . Dalam berbagai penelitian optimasi, keunggulan FL terletak pada kemampuannya memodelkan kondisi yang tidak pasti dengan struktur aturan yang fleksibel, sehingga dapat digunakan pada sistem yang dinamis dan incomplete information, termasuk di dalamnya optimasi penjadwalan.

Dalam pengembangan sistem berbasis logika fuzzy untuk mendukung pengambilan keputusan dan diagnosis, literatur mengidentifikasi tiga aliran atau metode utama Sistem Inferensi Fuzzy (FIS) yang memiliki karakteristik berbeda, yaitu metode Mamdani, Sugeno, dan Tsukamoto . Meskipun ketiga metode ini dapat menggunakan teknik fuzzifikasi yang sama,seperti metode singleton,perbedaan mendasar terletak pada proses inferensi dan defuzzifikasi untuk menghasilkan nilai tegas (crisp output), di mana metode Mamdani (1975) dikenal intuitif dengan menggunakan aturan linguistik dan metode centroid, metode Sugeno (1985) menggunakan persamaan linier atau konstanta matematis, sedangkan metode Tsukamoto menerapkan fungsi keanggotaan monotonik dengan defuzzifikasi rata-rata terbobot . Adapun perbedaan dari ketiga aliran fuzzy tersebut akan dijelaskan pada Tabel 2.1.

Tabel 2.1 Perbandingan Perbedaan Beberapa Kategori Fuzzy Logic

| Tahapan Proses | FIS Mamdani | FIS Sugeno | FIS Tsukamoto |
| --- | --- | --- | --- |
| Fuzzifikasi (Pengolahan Input) | Input tegas (crisp) dipetakan ke dalam derajat keanggotaan menggunakan fungsi seperti segitiga, trapesium, atau Gaussian. Proses ini relatif sama dengan metode lain, mengubah input numerik menjadi variabel linguistik . | Sama seperti Mamdani, input tegas diubah menjadi nilai fuzzy menggunakan fungsi keanggotaan (misal: Gaussian). Perbedaannya terletak pada persiapan konsekuen yang tidak berupa himpunan fuzzy, melainkan persamaan . | Input tegas dipetakan ke derajat keanggotaan. Namun, syarat utamanya adalah fungsi keanggotaan pada bagian output (konsekuen) harus bersifat monoton (naik atau turun) agar inversi nilai dapat dilakukan .<br> |
| Inferensi (Evaluasi Aturan & Agregasi) | Menggunakan fungsi Min untuk implikasi (memotong kurva output) dan fungsi Max untuk agregasi (menggabungkan seluruh kurva output dari semua aturan menjadi satu daerah fuzzy yang kompleks) . | Menggunakan operasi Min (atau Product) untuk mendapatkan nilai α-predikat (fire strength). Tidak ada pembentukan daerah fuzzy gabungan, nilai α langsung diterapkan pada konstanta atau persamaan linear (z) di bagian konsekuen | Setiap aturan menghasilkan nilai tegas (z) secara individu. Nilai z diperoleh dengan memproyeksikan derajat keanggotaan (α) pada kurva output monoton (invers fungsi keanggotaan). Tidak ada agregasi wilayah fuzzy <br> |
| Defuzzifikasi (Perhitungan Output Akhir) | Menggunakan metode Centroid (titik pusat area/Center of Gravity). Menghitung titik berat dari daerah fuzzy hasil agregasi. Proses ini memerlukan integrasi matematis yang kompleks dan beban komputasi tinggi . | Menggunakan metode Rata-rata Terbobot (Weighted Average). Rumus umumnya adalah Z=∑αi​∑αi​zi​​. Sangat efisien secara komputasi karena hanya melibatkan operasi aritmatika sederhana . | Menggunakan metode Rata-rata Terbobot (Weighted Average), serupa dengan Sugeno. Nilai akhir didapat dari rata-rata nilai z tiap aturan dikalikan dengan bobot predikatnya. Menghindari integrasi area yang rumit .<br> |

FIS Sugeno adalah metode inferensi fuzzy yang paling cocok untuk diintegrasikan dengan Algoritma Genetika (AG) karena keunggulannya dalam efisiensi komputasi dan kecepatan pemrosesan data. Dibandingkan dengan metode Mamdani, FIS Sugeno menggunakan perhitungan matematis dalam proses inferensinya, sehingga mampu bekerja lebih cepat dan memberikan respons yang lebih responsif terhadap perubahan sistem yang mendadak . Struktur output Sugeno yang berbentuk konstanta atau persamaan linear (Orde-Nol atau Orde-Satu) memungkinkannya untuk dirancang dan dioptimalkan secara efektif menggunakan algoritma optimasi seperti AG tanpa membebani sistem dengan defuzzifikasi yang rumit ,. Selain itu, penggunaan metode weighted average pada Sugeno terbukti memiliki waktu pemrosesan yang lebih baik dibandingkan metode defuzzifikasi lainnya, menjadikannya pilihan ideal untuk sistem yang membutuhkan performa tinggi dengan beban komputasi yang ringan .

Berdasarkan pemaparan konseptual dan perbandingan karakteristik ketiga metode FIS, dapat disimpulkan bahwa FIS Sugeno dengan mekanisme defuzzifikasi weighted average merupakan pendekatan yang paling tepat untuk diintegrasikan dengan Algoritma Genetika (AG). Keunggulan utama FIS Sugeno terletak pada struktur konsekuennya yang berbentuk konstanta atau persamaan linear, sehingga proses inferensi dan perhitungan output akhir dapat dilakukan secara langsung melalui operasi aritmatika sederhana tanpa memerlukan pembentukan dan integrasi area fuzzy yang kompleks sebagaimana pada metode Mamdani. Hal ini menjadikan FIS Sugeno lebih efisien secara komputasi, memiliki waktu pemrosesan yang lebih cepat, dan stabil ketika dijalankan dalam skema iteratif dengan jumlah evaluasi yang besar, sebagaimana karakteristik utama AG. Penggunaan metode weighted average semakin memperkuat efisiensi tersebut karena mampu menghasilkan output crisp secara ringan dan deterministik, sehingga tidak membebani proses optimasi parameter dalam AG. Dengan demikian, kombinasi FIS Sugeno dan weighted average sangat ideal untuk mendukung optimasi performa AG yang menuntut kecepatan, efisiensi komputasi, dan responsivitas tinggi dalam menghadapi dinamika sistem yang kompleks dan tidak pasti.

- Epistemologi Variabel Linguistik dalam Logika *Fuzzy*

Dalam terminologi logika fuzzy, penggunaan istilah linguistik seperti Low, Medium, dan High merupakan bagian fundamental dari proses fuzzifikasi yang bertujuan untuk menjembatani kesenjangan antara nilai numerik yang kaku (crisp numbers) dengan ekspresi semantik yang mudah dipahami manusia . Himpunan fuzzy ini digunakan untuk merepresentasikan derajat keanggotaan (*membership degree*) suatu variabel input, di mana fungsi keanggotaan,seperti bentuk segitiga atau trapesium,mengalokasikan nilai input ke dalam kategori linguistik tersebut . Pendekatan ini memungkinkan sistem inferensi fuzzy (FIS) untuk menangani ketidakpastian data dan memproses kondisi batas (*boundary values*) secara lebih efektif dibandingkan logika biner tradisional, sehingga menghasilkan aturan IF-THEN yang intuitif, seperti "IF temperatur Low AND tekanan High", yang merepresentasikan proses penalaran menyerupai manusia .

Berbagai penelitian terdahulu telah secara konsisten mengadopsi kategorisasi Low, Medium, dan High ini untuk membangun aturan keputusan yang akurat di berbagai bidang. Sebagai contoh, dalam bidang medis,  mengklasifikasikan waktu bertahan hidup pasien penyakit jantung menjadi Low (0-20), Medium (20-100), dan High (>100) menggunakan fungsi keanggotaan trapesium untuk analisis sintasan. Serupa dengan itu, studi @kim_fuzzy_2025 menerapkan logika fuzzy untuk mendeteksi halusinasi pada Large Vision-Language Models (LVLMs) dengan mengkategorikan log-probabilitas token menjadi level kepercayaan Low, Medium, dan High. Di sektor pertanian,  menggunakan tiga variabel linguistik ini pada atribut nutrisi tanah (seperti Nitrogen, Fosfor, Kalium) untuk memprediksi kesesuaian tanaman. Selain itu, Casalino et al. (sebagaimana dikutip dalam ) juga menggunakan istilah linguistik serupa untuk menilai risiko penyakit kardiovaskular berdasarkan fitur klinis pasien.

Secara keseluruhan, pembentukan fuzzy rule dengan himpunan Low, Medium, dan High sangat relevan dan telah menjadi standar metodologi di banyak penelitian karena kemampuannya dalam memberikan interpretasi semantik yang tinggi . Penerapan ini terbukti fleksibel, mulai dari data teknis hingga pendidikan, seperti yang dilakukan oleh  yang menggunakan kategori Low, Middle, dan High untuk hasil Try Out siswa guna mengukur kesiapan seleksi nasional. Konsistensi penggunaan terminologi ini di berbagai studi menunjukkan bahwa pendekatan tersebut efektif untuk menangani ketidakpastian data sekaligus menjaga agar proses pengambilan keputusan tetap transparan dan dapat dijelaskan kepada pengguna akhir .

- Optimasi Algoritma Menggunakan *Fuzzy logic*

Genetic Algorithm (GA) dan *Fuzzy logic* sering ditempatkan dalam satu ranah kecerdasan buatan karena keduanya mampu menyelesaikan permasalahan optimasi multi-objektif . GA bekerja melalui evolusi populasi, seleksi, *crossover*, dan mutasi. Namun pada kasus tertentu dapat mengalami stagnasi atau kehilangan keragaman solusi. Pada kondisi ini *Fuzzy logic* digunakan sebagai mekanisme adaptif untuk meningkatkan performa GA.  secara eksplisit menerapkan FL sebagai sistem pengendali operator genetik dalam Multi-objective Fuzzy-based Adaptive Memetic Algorithm (MO-FAMA). Dalam penelitian tersebut, FL digunakan untuk menentukan parameter seleksi, memilih jenis *crossover* yang sesuai berdasarkan nilai fitness, serta mengatur probabilitas mutasi secara dinamis berdasarkan tingkat konflik dan ukuran populasi. Hasilnya menunjukkan peningkatan signifikan dimana kinerja GA standar (48,79%) meningkat menjadi 96,29% setelah integrasi fuzzy pada operator evolusi.

Pendekatan integrasi FL ke GA juga diterapkan pada domain penjadwalan lain.  menggunakan FL untuk memodelkan parameter ketidakpastian dalam cross-dock scheduling, kemudian GA digunakan sebagai metaheuristik untuk mencari solusi terbaik setelah model fuzzy dikonversi menjadi bentuk deterministik. Sementara itu,  menunjukkan bahwa FL mampu mengoptimalkan Unit Commitment Problem dalam sistem kelistrikan dengan lebih efisien dibanding GA tradisional, serta membuka peluang integrasi GA-Fuzzy sebagai solusi hibrida masa depan.   juga menegaskan bahwa FL telah banyak digunakan pada optimasi penjadwalan kompleks, meskipun penerapan langsung sebagai pengontrol GA tidak dibahas secara mendalam dalam studi tersebut.

Penerapan *fuzzy logic* terdiri dari tiga tahapan utama yang memproses informasi tidak pasti yaitu fuzzifikasi, inferensi, dan defuzzifikasi. Pada tahap fuzzifikasi, nilai input tegas (*crisp*) ditransformasikan menjadi nilai fuzzy atau derajat keanggotaan menggunakan fungsi keanggotaan tertentu untuk menangani ketidakpastian data . Selanjutnya, inferensi berfungsi sebagai otak sistem yang memetakan input fuzzy menjadi output fuzzy dengan menerapkan aturan "If-Then" menggunakan metode seperti Mamdani atau Sugeno . Proses ini diakhiri dengan defuzzifikasi, di mana himpunan fuzzy hasil inferensi dikonversi kembali menjadi nilai numerik tegas (*crisp output*) yang dapat digunakan untuk pengambilan keputusan nyata .

Fungsi keanggotaan (Membership Function) Triangular dan Trapezoidal sering digunakan dalam aplikasi *real-time* karena efisiensi komputasinya, dengan rumus matematis yang mendefinisikan pemetaan linear derajat keanggotaan . Fungsi Triangular ditentukan oleh tiga parameter  (batas bawah, puncak, batas atas) dan dihitung menggunakan rumus berikut .

|  |  | (2) |
| --- | --- | --- |

Sementara itu, fungsi Trapezoidal menawarkan fleksibilitas lebih dengan empat parameter , yang mencakup bahu kiri dan kanan serta area puncak datar, dengan rumus berikut .

|  |  | (3) |
| --- | --- | --- |

Kedua fungsi ini memetakan nilai input *x* ke derajat keanggotaan antara 0 dan 1, di mana nilai di luar batas parameter menghasilkan 0 .Top of FormBottom of Form

Dari berbagai penelitian tersebut dapat disimpulkan bahwa gabungan GA dan FL memiliki potensi kuat dalam meningkatkan kualitas solusi, mempercepat konvergensi, dan mengurangi konflik dalam penjadwalan. FL berperan sebagai sistem kendali adaptif yang menyesuaikan operator seleksi, *crossover*, maupun mutasi secara dinamis sehingga GA tidak hanya berevolusi secara acak, tetapi terarah. Dengan demikian, pendekatan ini relevan untuk diterapkan pada optimasi penjadwalan laboratorium yang membutuhkan pengurangan bentrok secara signifikan serta adaptasi terhadap variasi jumlah kelas, ruangan, dan sumber daya.

- Evaluasi kinerja Hybrid Genetic Algorithm (HGA)

Evaluasi kinerja Hybrid Genetic Algorithm (HGA) didasarkan pada metodologi eksperimental yang ketat, memastikan validitas dan superioritas solusi yang dihasilkan dibandingkan dengan pendekatan lain . Proses ini dimulai dengan pengujian HGA pada instansi benchmark yang diakui secara luas,misalnya, menggunakan 120 masalah Taillard untuk Flow Shop Scheduling Problem (FSSP) atau set bervariasi (50, 100, 200 kota) untuk min-max Multiple Traveling Salesman Problem (mTSP) . Karena sifat stokastik dari algoritma genetik, pengujian dilakukan secara berulang kali (misalnya, 10 kali untuk mTSP), dan hasilnya disajikan sebagai performa terbaik (Best) dan rata-rata (Average) . Algoritma dihentikan berdasarkan kondisi terminasi yang telah ditetapkan, seperti mencapai batas waktu (cutoff time) tertentu, atau ketika tidak ada perbaikan yang signifikan yang diamati setelah sejumlah iterasi (misalnya, 2500 run tanpa peningkatan untuk HGA mTSP) .

Tabel 2.2 Metode perbandingan pada penelitian terdahulu tentang HGA

| Konteks Masalah | Metrik Kualitas Utama | Perbandingan Utama | Kondisi Pengujian Kunci |
| --- | --- | --- | --- |
| mTSP | Min-Max Objective, Cost, Gap (%) | LKH-3, OR-tools, NCE-mTSP | Cutoff time detik, 10 kali run |
| FSSP/DJSSP | Makespan (), Mean Relative Error (MRE) | 6 algoritma hibrida lain (GA-ISCR, HGSA, dll.) | 120 instansi Taillard, Multiple runs |
| Rostering Dokter | Total Constraint Violation (%), Accuracy (%) | Standard GA, Standard PSO (Zainudin et al., 2025) | Iterasi 200 dan 1000 |
| Landscape Ass. (GA-BP) | Average Relative Error (ARE), Prediction Accuracy (%) | BP Network tradisional (Fan et al., 2024) | Pembagian data 70/15/15 |
| ET0 Est. (GABP) | Correlation Coefficient (R), RMSE, MAE, MBE | BP model (BP0.5, BP0.7) | Threshold dan untuk seleksi variabel input |

Metrik evaluasi yang digunakan sangat bergantung pada domain masalah, yang terbagi menjadi metrik kualitas solusi dan efisiensi komputasi . Kualitas Solusi adalah nilai fungsi tujuan yang dioptimalkan, seperti meminimalkan *makespan* dalam masalah penjadwalan, meminimalkan nilai tur terpanjang (min-max objective) dalam mTSP, atau meminimalkan Total Constraint Violation dan memaksimalkan Accuracy (%) dalam masalah rostering . Dalam optimasi jaringan saraf (seperti GA-BP), kualitas diukur menggunakan Average Relative Error (ARE) dan Prediction Accuracy (%) . Untuk prediksi penyakit, metrik klasifikasi seperti Accuracy (AC), Sensitivity (SN), Specificity (SP), F1-score (F1-S), dan Area Under Receiver Operating Characteristic Curve (AUC) digunakan . Efisiensi Komputasi mencakup Waktu Komputasi (dalam detik) dan tingkat deviasi relatif, seperti Gap (%) (persentase perbedaan dari Solusi Terbaik yang Diketahui/BKS), Mean Relative Error (MRE), atau Average Relative Percentage Deviation (ARPD) .

- Kerangka Pemikiran

Berdasarkan teori dan hasil penelitian terdahulu yang telah dibahas, dapat disimpulkan bahwa penjadwalan merupakan salah satu aspek penting dalam pengelolaan sumber daya terbatas, baik di bidang industri, akademik, maupun laboratorium. Proses penjadwalan menuntut efisiensi tinggi untuk memastikan seluruh kegiatan berjalan tanpa bentrokan waktu dan sesuai kapasitas yang tersedia. Berbagai algoritma penjadwalan telah dikembangkan untuk menjawab tantangan tersebut, seperti First In First Out (FIFO), Priority-Based Scheduling, Weighted Round Robin (WRR), hingga metode berbasis optimasi seperti Greedy Algorithm . Namun, metode konvensional tersebut memiliki keterbatasan dalam menghadapi permasalahan kompleks yang melibatkan banyak variabel dan kendala bersamaan (multi-constraint scheduling).

Algoritma Genetika (AG) kemudian muncul sebagai solusi alternatif yang mampu menyelesaikan masalah optimasi dengan tingkat kompleksitas tinggi. AG bekerja berdasarkan prinsip seleksi alam, di mana populasi solusi awal dikembangkan melalui proses seleksi, *crossover*, dan mutasi untuk menghasilkan solusi baru yang lebih baik . Berbagai penelitian menunjukkan keunggulan AG dalam menghasilkan solusi yang mendekati optimum global dengan waktu komputasi yang efisien.  menegaskan bahwa meskipun terdapat algoritma optimasi lain seperti Modified Improved Particle Swarm Optimization (MIPSO), AG tetap relevan karena kestabilannya dalam menghasilkan jadwal bebas bentrok.  juga membuktikan kemampuan AG beradaptasi dengan teknologi lain seperti Deep Learning untuk meningkatkan akurasi dan konvergensi proses optimasi.

Pada tahap berikutnya, perkembangan riset menunjukkan bahwa kinerja AG dapat lebih ditingkatkan melalui integrasi pendekatan kecerdasan komputasional lain, salah satunya *Fuzzy logic* (FL). FL bekerja tidak hanya dengan nilai benar-salah (biner), tetapi dengan derajat kebenaran (degree of truth) sehingga lebih mampu merepresentasikan ketidakpastian dalam pengambilan keputusan dan ruang pencarian solusi . Hal ini menjadikan FL sangat relevan pada kasus penjadwalan yang melibatkan batasan dinamis dan informasi tidak selalu lengkap.  membuktikan bahwa penerapan FL untuk mengatur proses genetika,termasuk seleksi, *crossover*, serta mutasi adaptif,mampu meningkatkan tingkat penyelesaian konflik jadwal hingga 96,29%, jauh lebih tinggi dibanding GA standar. Pendekatan serupa juga diterapkan pada domain penjadwalan lain oleh , di mana FL digunakan untuk menyesuaikan parameter ketidakpastian sebelum optimasi dilanjutkan dengan GA. Bahkan pada sistem kelistrikan, FL terbukti memberikan efisiensi lebih baik dibanding GA tradisional dan membuka peluang integrasi kombinasi metode hibrida GA-Fuzzy di masa depan .

Dalam konteks pendidikan, penerapan AG terbukti efektif dalam menyusun jadwal akademik dan praktikum.  berhasil mengimplementasikan AG pada sistem penjadwalan kuliah praktikum di Universitas Amikom Yogyakarta dan menghasilkan jadwal tanpa konflik. Hasil serupa ditunjukkan oleh , di mana AG mampu mengoptimalkan jadwal perkuliahan dengan mempertimbangkan preferensi dosen dan kapasitas ruang. Di tingkat pendidikan dasar,  membuktikan efektivitas AG dalam menyeimbangkan beban mengajar guru serta mengurangi bentrokan jadwal kelas. Temuan-temuan tersebut memperlihatkan bahwa AG bersifat fleksibel dan dapat diadaptasi pada berbagai jenjang pendidikan untuk meningkatkan efisiensi kegiatan akademik.

Secara konseptual, hubungan antara teori dan hasil penelitian terdahulu membentuk dasar berpikir bahwa penerapan Algoritma Genetika, yang diperkuat dengan mekanisme adaptif berbasis *Fuzzy logic*, dapat menjadi solusi efektif dalam sistem penjadwalan laboratorium. GA mampu mengintegrasikan seluruh variabel penjadwalan,waktu, ruang, peralatan, dosen, asisten, serta jumlah peserta,ke dalam satu model optimasi, sementara *Fuzzy logic* berperan menjaga kualitas evolusi agar lebih terarah dan adaptif. Melalui mekanisme evolusioner yang diperkuat aturan fuzzy, sistem diharapkan dapat menghasilkan jadwal praktikum yang efisien, menghindari tumpang tindih, dan menyeimbangkan pemanfaatan sumber daya. Dengan demikian, kerangka pemikiran penelitian ini menempatkan AG berbasis optimasi *Fuzzy logic* sebagai pendekatan utama dalam pengembangan sistem penjadwalan laboratorium, yang bertujuan meningkatkan efisiensi, akurasi, dan kualitas pengelolaan kegiatan praktikum di lingkungan akademik.

- Penelitian Terdahulu

Tabel 2.3 Penelitian terdahulu terkait penerapan AG

| No | Penulis (Tahun) | Judul | Metode / Algoritma | Inti Temuan |
| --- | --- | --- | --- | --- |
| 1 | Akhmad Roihan, Khairuddin Nasution, Mhd. Zulfansyuri Siambaton (2022) | Implementasi Algoritma Greedy Kombinasi dengan Perulangan pada Aplikasi Penjadwalan Praktikum | Greedy + perulangan | Menyusun jadwal praktikum tanpa bentrok, efisiensi waktu & pengurangan human error meningkat. |
| 2 | Olipio Sayudias, Linda Fujiyanti, Muhammad Setya Pratama (2022) | Aplikasi Sistem Informasi Penjadwalan Laboratorium (Studi Kasus Laboratorium TRPL) | Waterfall + Genetic Algorithm | Otomatisasi penjadwalan, mengurangi bentrokan, efisiensi administrasi naik. |
| 3 | Melani N. Cahya, Isma E. Maulani, Intan, Tika A. Ambarwati (2023) | Penerapan GA dalam Optimisasi Penjadwalan SIA | Genetic Algorithm | Jadwal lebih optimal & proses lebih cepat dengan banyak kendala (preferensi dosen/ruang/waktu. |
| 4 | Pytel (2025) | Fuzzy logic applied to tunning mutation size in evolutionary algorithms | Evolutionary Algorithm (EA) yang dimodifikasi dengan Fuzzy Logic Part (FLP). FLP menggunakan data historis evolusi untuk mengatur ukuran mutasi secara dinamis. | Metode FLP-EA terbukti lebih unggul daripada EA standar dalam hal konvergensi dan ketahanan terhadap local optima pada fungsi benchmark (CEC2015) dan masalah optimasi jaringan komputer. Algoritma ini menyeimbangkan eksplorasi dan eksploitasi dengan lebih efektif |
| 5 | Movassaghi & Avakh Darestani (2021) | Multiple Cross-docks Scheduling with Multiple Doors using Fuzzy Approach and Metaheuristic Algorithms | Fuzzy multi-objective linear programming yang diselesaikan menggunakan metaheuristik Algoritma Genetika (GA) dan Ant Colony Optimization (ACO). | Pendekatan fuzzy penting untuk menangani ketidakpastian parameter. Hasil komputasi menunjukkan bahwa Algoritma Genetika (GA) bekerja jauh lebih baik daripada ACO dalam hal waktu eksekusi dan kualitas solusi untuk masalah penjadwalan cross-dock yang kompleks. |
| 6 | Marrouchi et al. (2024) | Optimizing Unit Scheduling with Fuzzy Logic: A Strategic Approach for Efficient Power Network Operations | Pendekatan optimasi berbasis Logika Fuzzy menggunakan fungsi Lagrangian. Variabel input meliputi Load Capacity Generator (L    CG) dan Incremental Losses (IL) untuk mengontrol Biaya Produksi (CP). | Strategi ini berhasil meminimalkan biaya produksi dengan waktu eksekusi yang sangat kompetitif (7,34 detik), lebih cepat dan efisien dibandingkan metode lain seperti Algoritma Genetika, Gradient-PSO, dan Artificial Bee Colony (ABC) pada sistem IEEE 14-bus. |

Secara keseluruhan, bukti lintas studi menunjukkan pola yang konsisten: (i) pada konteks penjadwalan akademik dan laboratorium, algoritma Greedy yang dikombinasikan dengan mekanisme perulangan serta Genetic Algorithm (GA) terbukti efektif dalam menyusun jadwal tanpa bentrok, mempercepat proses penyusunan, dan mengurangi human error, sehingga efisiensi administrasi meningkat (Roihan dkk., 2022, Sayudias dkk., 2022, Cahya dkk., 2023). (ii) pada ranah optimasi komputasi dan sistem kompleks, GA/Evolutionary Algorithm yang diperkaya Logika Fuzzy mampu meningkatkan kualitas eksplorasi-eksploitasi melalui penyesuaian parameter mutasi secara adaptif, sehingga konvergensi lebih baik dan lebih tahan terhadap local optima dibandingkan EA standar (Pytel, 2025). (iii) pada masalah industri dan energi yang sarat ketidakpastian, pendekatan fuzzy berperan penting untuk memodelkan parameter yang tidak pasti, sementara kombinasi fuzzy dengan metaheuristik seperti GA atau formulasi optimasi berbasis fungsi (mis. Lagrangian) mampu menghasilkan solusi yang lebih efisien baik dari sisi kualitas maupun waktu eksekusi, bahkan kompetitif terhadap metode optimasi lain (Movassaghi & Darestani, 2021, Marrouchi et al., 2024).

Temuan komparatif pada studi lintas domain menegaskan bahwa GA tetap relevan karena relatif robust untuk masalah multi-kendala, fleksibel untuk diintegrasikan dengan pendekatan lain (misalnya fuzzy/adaptif), dan konsisten menghasilkan solusi optimal/nyaris optimal pada berbagai tipe penjadwalan.

- **METODOLOGI PENELITIAN**

- **Waktu dan Tempat Penelitian**

Penelitian ini dilaksanakan di Fakultas Sains dan Teknologi Universitas Jambi (UNJA), berlokasi di Kampus Mendalo, Jl. Raya Jambi-Muara Bulian Km 15, Desa Mendalo Darat, Kecamatan Jambi Luar Kota, Kabupaten Muaro Jambi. Penelitian direncanakan berlangsung sejak Agustus 2025 hingga Februari 2026 Penelitian dilaksanakan melalui beberapa tahapan sistematis sesuai alur pengembangan algoritma genetika. Tahap pertama adalah pengumpulan data kebutuhan penjadwalan laboratorium, meliputi mata kuliah praktikum, jumlah peserta, durasi sesi, dan kapasitas ruang. Data tersebut kemudian digunakan untuk menyusun struktur gen dan membangkitkan populasi awal kromosom sebagai calon solusi. Selanjutnya dilakukan proses evaluasi menggunakan fungsi fitness untuk menilai kualitas penjadwalan awal. Tahapan berulang ini berlangsung sampai terbentuk solusi tanpa konflik atau mendekati optimum, yang kemudian diuji melalui tahap implementasi dan evaluasi kinerja sebagai bagian dari pengujian prototipe sistem.

- **Alat Penelitian**

Alat penelitian berfungsi sebagai sarana utama yang menunjang pelaksanaan proses analisis, perancangan, serta pengembangan optimasi penjadwalan laboratorium.

**Perangkat Keras (*****Hardware*****)**

Perangkat keras yang digunakan dalam penelitian ini berupa sebuah laptop Lenovo LOQ 15IRX9 dengan spesifikasi Intel Core i5-13450HX, GPU NVIDIA GeForce RTX 4050 6GB, RAM berkapasitas 20GB, dan penyimpanan berbasis SSD 512GB. Laptop ini didukung dengan perangkat tambahan berupa printer sebagai media pencetakan dokumen apabila diperlukan selama proses penyusunan laporan serta pengujian hasil keluaran sistem.

**Perangkat Lunak (Software)**

Dari sisi perangkat lunak, penelitian ini dijalankan menggunakan sistem operasi Windows 11 Home sebagai lingkungan utama dan Linux Ubuntu sebagai sistem pendukung dalam proses pengembangan dan pengujian. Pengembangan kode dilakukan menggunakan  editor Visual Studio Code dengan bahasa pemrograman Python. Sistem database dikelola menggunakan MySQL dengan Apache2 sebagai server localhost selama proses pengujian sistem.

Selain itu, browser Brave dan Mozilla Firefox digunakan untuk mengakses aplikasi   menampilkan antarmuka sistem, serta mengevaluasi hasil penjadwalan. Spreadsheet dimanfaatkan untuk validasi dan pengecekan keluaran jadwal, sedangkan GitHub digunakan sebagai media version control dan pencatatan seluruh perubahan dalam proses pengembangan penelitian. Google Colab digunakan sebagai sarana komputasi alternatif sekaligus media kolaborasi saat pengujian dan analisis model algoritma.

Penulisan laporan akhir penelitian dilakukan menggunakan Microsoft Office sebagai perangkat pengolah dokumen utama, dengan dukungan Mendeley untuk pengelolaan sitasi dan referensi agar penyusunan laporan sesuai dengan standar penulisan ilmiah. Seluruh perangkat keras dan lunak ini berperan saling terintegrasi dalam mendukung keberhasilan implementasi Algoritma Genetika pada sistem penjadwalan laboratorium.

- **Tahapan Penelitian**

Gambar 3.1 Alur tahapan penelitian.

Pada Gambar 3.1 ditampilkan alur kerja algoritma genetika yang terintegrasi dengan pendekatan *fuzzy logic* untuk proses optimasi penjadwalan. Diagram tersebut menggambarkan tahapan dimulai dari pengumpulan data, penyusunan gen, pembangkitan kromosom dan individu, kemudian dilanjutkan dengan evaluasi nilai fitness. Jika nilai fitness belum mencapai batas optimal, proses masuk ke tahap *crossover* dan kembali dievaluasi menggunakan *fuzzy logic*.

Apabila hasilnya masih belum memenuhi nilai maksimal, sistem melanjutkan proses mutasi hingga solusi terbaik tercapai. Secara keseluruhan, alur pada Gambar 3.1 menunjukkan mekanisme iteratif dalam pencarian jadwal paling optimal melalui kombinasi operasi genetika dan penilaian adaptif berbasis *fuzzy logic*. Tahapan penelitian yang dilakukan di penelitian ini mengikuti proses yang tergambar pada Gambar 3.1 Alur yang dilalui sejalan dengan penelitian yang telah dilakukan oleh  dan .

- **Metode Pengumpulan Data**

**Observasi**

Observasi dalam penelitian ini digunakan sebagai salah satu teknik pengumpulan data untuk memahami secara langsung kondisi nyata penjadwalan praktikum dan penggunaan laboratorium di Fakultas Sains dan Teknologi Universitas Jambi. Secara umum, observasi adalah kegiatan pengamatan dengan indera peneliti terhadap perilaku subjek dan situasi sosial yang menyertainya tanpa melakukan intervensi terhadap objek yang diamati (Daruhadi & Sopiati, 2024). Selama proses ini, peneliti menggunakan lembar observasi untuk mencatat tanggal, waktu, kode mata kuliah, program studi, ruangan laboratorium, jumlah peserta, serta catatan khusus terkait penundaan, pemindahan, atau penyesuaian jadwal yang dilakukan secara manual.

Data hasil observasi kemudian dimanfaatkan sebagai dasar penyusunan parameter dan kendala (constraints) dalam model Algoritma Genetika, seperti batasan kapasitas ruang, jam operasional laboratorium, durasi minimum dan maksimum praktikum, serta pola bentrok yang paling sering terjadi. Selain itu, hasil observasi juga digunakan untuk memvalidasi kesesuaian jadwal yang dihasilkan oleh sistem berbasis AG dengan kondisi riil di lapangan, sehingga solusi yang diperoleh tidak hanya optimal secara komputasional, tetapi juga relevan dan aplikatif bagi pengelola laboratorium di Fakultas Sains dan Teknologi.

**Studi Literatur**

Studi literatur digunakan dalam penelitian ini sebagai metode pengumpulan data yang dilakukan melalui penelusuran, pembacaan, dan analisis berbagai data dan sumber ilmiah yang relevan dengan topik penjadwalan akademik menggunakan algoritma genetika. Secara definisi, studi literatur (library research) merupakan metode yang dilakukan dengan cara memahami dan mempelajari teori serta temuan penelitian terdahulu melalui bahan pustaka seperti buku, jurnal, arsip penelitian, maupun sumber ilmiah lainnya (Adlini et al., 2022).

Gambar 3.2 Data praktikum yang ada di Fakultas Sains dan Teknologi

Pada Gambar 3.2 ditampilkan data Jadwal Kuliah Praktikum FST dalam bentuk spreadsheet yang memuat informasi terstruktur mengenai program studi, mata kuliah, kode mata kuliah, jumlah SKS, serta pembagian kelas pada semester berjalan. Tabel ini juga mencakup jumlah peserta, alokasi ruang kuliah, serta waktu pelaksanaan praktikum yang ditandai melalui kolom jam mulai, jam selesai, dan hari. Secara keseluruhan, data pada gambar tersebut berfungsi sebagai basis administratif dalam pengelolaan dan penyusunan jadwal praktikum di lingkungan fakultas.

Tahapan studi literatur pada penelitian ini mengacu pada langkah-langkah kajian pustaka dalam Adlini et al. (2022) yang meliputi: (1) menyiapkan perangkat dan kebutuhan bahan referensi, (2) menyusun daftar bibliografi awal berdasarkan sumber yang ditemukan, (3) mengatur alur dan waktu penelusuran pustaka, dan (4) membaca, mencatat, serta mengolah informasi yang relevan dengan fokus penelitian. Proses ini dilakukan secara iteratif dan kritis untuk memastikan bahwa hanya sumber yang berkualitas serta berkaitan langsung dengan objek kajian yang digunakan. Literatur yang dianalisis mencakup teori dasar mengenai algoritma genetika, struktur kromosom, operator seleksi-*crossover*-mutasi, fungsi fitness, serta penelitian terdahulu yang menerapkan AG pada penjadwalan akademik, laboratorium, cloud computing, hingga sistem komputasi cerdas.

- **Kromosom**

Gambar 3.3 Struktur data yang akan diproses Algoritma Genetika

Pada Gambar 3.3 terlihat struktur kromosom yang telah dibangun. *Class* Gene adalah kumpulan gen yang akan digunakan pada satu kromosom. Dengan beberapa kelas yang dihubungkan dengan garis, merupakan *foreign key* untuk gen yang sifat sebagai penunjuk untuk nilai yang lebih besar di variabel lain (posisi pada suatu *array*). Dengan demikian, pada penelitian ini satu kromosom menggambarkan keseluruhan jadwal penggunaan laboratorium dalam satu periode, di mana setiap gen mewakili satu sesi pemakaian laboratorium oleh suatu mata kuliah pada waktu dan ruangan tertentu. Panjang kromosom akan bergantung pada banyaknya sesi/mata kuliah yang menggunakan laboratorium pada semester berjalan. Semakin besar jumlah sesi yang dijadwalkan, semakin panjang kromosom yang terbentuk. Ditambah dengan skema pengkodean berbasis nilai, struktur ini mendukung proses search dan optimization yang diperlukan dalam Algoritma Genetika untuk menemukan jadwal paling optimal yang meminimalkan konflik dan memaksimalkan keterpakaian laboratorium.

- **Pembangkitan Kromosom**

Gambar 3.4 Alur proses pembangkitan kromosom

Pada Gambar 3.4 menunjukkan bagaimana kromosom terbentuk dan menjadi suatu individu, Proses ini membentuk populasi awal dalam Algoritma Genetika untuk penjadwalan laboratorium. Sistem terlebih dahulu membangkitkan daftar asisten, ruangan, dan mata kuliah yang akan digunakan sebagai bahan pembentuk gen. Setiap gen menggambarkan satu sesi praktikum, yang berisi informasi lengkap mengenai mata kuliah, kode kelas, jumlah peserta, SKS, daftar asisten, ruangan yang dipakai, serta hari dan waktu pelaksanaan.

Penentuan waktu dilakukan secara acak namun tetap mengikuti aturan penggunaan laboratorium, termasuk batas jam operasional dan jeda larangan seperti istirahat Jumat pukul 12.00-13.00. Gen-gen tersebut kemudian digabung untuk membentuk satu kromosom yang mewakili jadwal satu individu. Pada tahap pembangkitan populasi, setiap individu diperiksa agar memiliki jumlah gen yang tepat: gen duplikat dihapus, gen tambahan digabung jika masih kurang, dan jika jumlahnya berlebih maka sebagian dihapus secara acak. Dengan mekanisme ini, setiap individu yang masuk ke dalam populasi sudah membawa jadwal laboratorium yang lengkap dan siap dievaluasi oleh fungsi fitness.

Tabel 3.1 Menunjukkan *scope* bagaimana sesi setiap praktikum akan terjadwal, bergantung pada sesi apa yang mereka alami (2 jam, 3 jam, dan 4 jam). Pada slot waktu yang telah ditentukan, sistem akan otomatis memakai waktu yang hanya tersedia di slot dan tidak akan memberikan sesi di area terlarang, contohnya sesi berlangsung ketika sholat jumat berlangsung.

Tabel 3.1 Slot waktu setiap sesi praktikum

| Durasi | Slot | Waktu Mulai - Selesai | Format Jam |
| --- | --- | --- | --- |
| 2 Jam | 1 | 27000 - 34200 detik | 07:30 - 09:30 |
|  | 2 | 36000 - 43200 detik | 10:00 - 12:00 |
|  | 3 | 46800 - 54000 detik | 13:00 - 15:00 |
|  | 4 | 55800 - 63900 detik | 15:30 - 17:30 |
| 3 Jam | 1 | 27000 - 37800 detik | 07:30 - 10:30 |
|  | 2 | 39600 - 50400 detik | 11:00 - 14:00 |
|  | 3 | 52200 - 63000 detik | 14:30 - 17:30 |
| 4 Jam | 1 | 28800 - 43200 detik | 08:00 - 12:00 |
|  | 2 | 46800 - 61200 detik | 13:00 - 17:00 |

- ***Fitness Function***

Pada penelitian ini, pendekatan fitness mengikuti struktur yang diperkenalkan oleh , di mana nilai fitness mencerminkan tingkat pelanggaran terhadap constraint yang berlaku. Semakin sedikit konflik yang terjadi pada jadwal, semakin tinggi nilai fitness yang diperoleh. Berbeda dengan model yang menggunakan nilai negatif dari total konflik, penelitian ini menggunakan pendekatan nilai fitness antara 0 sampai 1, di mana solusi dengan skor semakin mendekati 1 menunjukkan jadwal semakin optimal. Rumus fitness yang digunakan adalah:

|  |  | (4) |
| --- | --- | --- |

Nilai *Penalty* diperoleh dari total pelanggaran terhadap kendala utama dalam penjadwalan penggunaan laboratorium. Setiap kategori konflik diberi bobot penalti berbeda sesuai tingkat prioritas:

Tabel 3.2 Konflik yang terjadi pada perhitungan skor *fitness*

| Jenis Konflik | Makna Konflik | Keterangan Penalti |
| --- | --- | --- |
| Konflik Ruangan | Dua atau lebih mata kuliah menggunakan laboratorium yang sama pada hari dan waktu yang sama | Penalti terbesar karena termasuk hard constraint |
| Konflik Kelas Paralel/Group | Dua kelas paralel pada mata kuliah yang sama dijadwalkan pada waktu yang sama | Penalti sedang |
| Konflik Asisten | Seorang asisten praktik memiliki dua atau lebih sesi pada waktu yang bertabrakan | Penalti menengah ke tinggi |

Dengan demikian, apabila solusi tidak memiliki konflik apa pun, nilainya menjadi

|  |  | (5) |
| --- | --- | --- |

Sehingga solusi tersebut dianggap jadwal terbaik (feasible dan optimal). Sebaliknya, semakin tinggi konflik yang terkandung dalam jadwal, nilai *Penalty* meningkat dan skor fitness semakin kecil mendekati 0.

- ***Crossover***

Gambar 3.5 Alur proses *crossover*

Pada Gambar 3.5 ditampilkan alur proses *crossover* dalam algoritma genetika yang digunakan untuk menghasilkan keturunan (*offspring*) baru berdasarkan populasi yang telah terbentuk. Proses dimulai dengan menyiapkan populasi dan daftar nilai *fitness*, kemudian dilakukan seleksi menggunakan metode *roulette select* untuk menghitung probabilitas keterpilihan individu. Setelah itu ditentukan panjang kromosom minimum, dilanjutkan dengan pemilihan kandidat *crossover* berdasarkan nilai peluang (*rate*). Jika jumlah kandidat dan panjang kromosom memenuhi syarat, proses *crossover* dilakukan dengan menentukan titik potong dan menukar bagian ekor kromosom antar pasangan. Apabila tidak memenuhi syarat, dilakukan repair terhadap individu agar tetap valid secara struktur. Proses berakhir ketika semua keturunan terbentuk dan menghasilkan output berupa kumpulan *offspring* hasil *crossover* yang siap digunakan pada tahap evolusi selanjutnya.

Gambar 3.6 Alur proses *Roulette Wheel*

Pada Gambar 3.6 diperlihatkan alur proses Roulette Wheel Selection sebagai metode seleksi dalam algoritma genetika, yang bertujuan menentukan individu mana yang akan dipertahankan atau diturunkan ke generasi berikutnya. Proses dimulai dengan menghitung total nilai fitness seluruh jadwal. Jika total nilai fitness kurang atau sama dengan nol, sistem akan memilih jadwal secara acak dengan distribusi merata. Namun apabila nilai fitness valid, maka peluang setiap jadwal dihitung berdasarkan proporsi nilai fitness-nya masing-masing. Individu dengan fitness lebih baik akan memiliki peluang lebih besar untuk terpilih, sementara individu lain tetap memiliki kemungkinan meski lebih kecil. Tahap ini menghasilkan satu atau lebih individu terpilih untuk digunakan dalam proses evolusi selanjutnya.

Gambar 3.7 Alur proses repair individu

Pada Gambar 3.7 ditampilkan proses Repair Individual, yaitu mekanisme perbaikan kromosom agar jadwal yang dihasilkan tetap memenuhi aturan penjadwalan dan bebas dari konflik. Tahap awal dilakukan dengan mengelompokkan gene berdasarkan hari, kemudian jadwal diurutkan menurut ruangan dan waktu agar lebih terstruktur. Selanjutnya dilakukan pemeriksaan terhadap durasi yang tidak sesuai aturan, diikuti pengecekan potensi bentrok antar jadwal dalam ruangan yang sama. Setelah itu dilanjutkan dengan pendeteksian bentrok jadwal antar kelompok. Jika ditemukan pelanggaran atau konflik, sistem melakukan perbaikan susunan jadwal hingga individu kembali valid. Proses ini memastikan bahwa solusi yang dievaluasi tetap layak digunakan dan dapat menghasilkan jadwal akhir yang lebih optimal dan konsisten.

- ***Mutation***

Dalam penelitian penjadwalan penggunaan laboratorium ini, mutasi diterapkan setelah proses *crossover*. Gen yang terpilih berdasarkan probabilitas mutasi akan mengalami modifikasi, seperti perubahan ruangan laboratorium, penyesuaian hari, atau penggeseran rentang waktu praktikum ke slot lain yang masih memenuhi batasan sistem. Jika perubahan tersebut tetap menghasilkan konflik penjadwalan, sistem melakukan repair dengan memindahkan gen ke slot alternatif terdekat yang memungkinkan. Apabila setelah repair konflik tetap terjadi, gen akan diganti secara acak untuk menjaga keberagaman kromosom. Pendekatan ini bertujuan agar mutasi dapat memperluas ruang pencarian solusi serta meningkatkan peluang ditemukannya jadwal laboratorium yang lebih optimal tanpa mengorbankan kendala penting seperti ketersediaan ruangan, kesesuaian asisten, dan sinkronisasi kelas paralel.

Gambar 3.8 Alur proses mutasi

Pada Gambar 3.8 ditampilkan alur proses mutasi pada algoritma genetika dalam bentuk standar atau klasik, tanpa penerapan *fuzzy logic*. Proses dimulai dengan membaca setiap jadwal dalam populasi, kemudian untuk tiap jadwal ditentukan secara acak apakah individu tersebut akan dimutasi dengan probabilitas sekitar 30%. Jika jadwal terpilih untuk mengalami mutasi, sebagian kecil kegiatan di dalamnya dipilih secara acak untuk diacak kembali. Mutasi dapat dilakukan dengan memindahkan kegiatan ke ruangan lain yang masih tersedia kapasitasnya atau menggeser waktu pelaksanaan sedikit maju maupun mundur dalam rentang tertentu. Setelah perubahan diterapkan, jadwal yang telah dimodifikasi kemudian diperiksa ulang dan dirapikan untuk memastikan tidak terjadi konflik atau ketidaksesuaian aturan penjadwalan. Hasil akhirnya berupa kumpulan jadwal baru yang telah mengalami mutasi dan siap digunakan pada proses evolusi berikutnya.

- **Penerapan**** *****Fuzzy logic***

Integrasi *Fuzzy logic* (FL) ke dalam *Genetic Algorithm* (GA) bertujuan meningkatkan adaptivitas proses evolusi melalui pengaturan dinamis parameter operator genetik (seleksi, *crossover*, dan mutasi) berdasarkan kondisi populasi secara real time. Pada konteks optimasi metaheuristik, GA memanfaatkan mekanisme seleksi alam evolutif untuk menghasilkan solusi yang lebih baik dari generasi ke generasi, sementara FL berperan sebagai *intelligent controller* yang mengatur perilaku operator GA agar tidak statis dan mampu beradaptasi sesuai kebutuhan ruang pencarian solusi.

Dalam penerapan *fuzzy logic *untuk mengoptimasi Algoritma Genetika (AG) akan dilakukan serangkaian tahapan *fuzzy* untuk mendapatkan nilai-nilai yang diperlukan. Adapun tahapan fuzzy tersebut adalah fuzzification, inference, dan defuzzification . Tahap fuzzification adalah tahap untuk mencari derajat keanggotaan *fuzzy* menggunakan fungsi-fungsi pada *fuzzy. *Fungsi-fungsi tersebut adalah segitiga (*Triangular Function*), trapesium (*Trapezoid Function*), dan gaussian (*Gaussian Function*) .

Adapun serangkaian proses pada AG yang akan diimplementasikan dengan *fuzzy logic *adalah *fitness* *function*, *crossover*, dan *mutation* karena jantung algoritma genetika berputar pada ketiga proses tersebut, yang melambangkan evolusi.

**Implementasi pada *****Fitness Function***

Penerapan *fuzzy logic* pada fungsi fitness AG adalah berupa mengkalkulasi *fitness function* secara dinamik dengan memerhatikan konflik yang timbul. Konflik akan dikonversi menjadi derajat keanggotaan *fuzzy *dengan fungsi  keanggotaan *membership*, fungsi ini terdiri atas fungsi segitiga, trapesium, dan gaussian . Derajat tersebut akan digunakan sebagai dasar pengambilan keputusan dalam seluruh proses *fuzzy logic*, di mana derajat keanggotaan ini akan menentukan kualitas output pada fuzzy dengan skala 0-100. Skala output tersebut sama dengan skala pada skor fitness di mana 1 merupakan solusi optimal, di mana pada output tersebut sama dengan kualitas 100.

Gambar 3.9 Alur proses *fitness function* setelah penerapan *fuzzy logic*

Pada Gambar 3.9 ditampilkan alur perhitungan fitness function setelah integrasi *fuzzy logic*, dimulai dari pembentukan populasi jadwal yang kemudian dievaluasi melalui pemeriksaan konflik kelas, konflik ruangan, serta ketersediaan asisten laboratorium. Selanjutnya setiap individu dihitung tingkat konfliknya untuk menghasilkan nilai fitness yang lebih adaptif. Jika konflik terdeteksi dalam jumlah besar, proses diarahkan ke iterasi berikutnya untuk perbaikan jadwal, sedangkan apabila konflik rendah maka jadwal dinilai layak sebagai solusi. Proses ini menjadikan penilaian fitness lebih fleksibel dan meningkatkan peluang diperolehnya jadwal yang optimal.

- ***Fuzzification***

Implementasi *fuzzy* pada fitness function ini adalah dengan menerapkan beberapa tindakan yaitu *fuzzification, interference, *dan *defuzzification *pada fungsi untuk menentukan skor fitness. Tabel 3.3 adalah kategori untuk *fuzzification (*mengubah nilai input yang berbentuk angka pasti (*crisp*) menjadi nilai derajat keanggotaan *fuzzy*)* *dengan skala 0-10 dengan konflik dilambangkan sebagai C.

Tabel 3.3 *Fuzzification* Variabel Konflik

| Label Fuzzy | Range Nilai | Nama Fungsi | Rumus Fungsi |
| --- | --- | --- | --- |
| LOW | 0 - 4 | Segitiga | 1 untuk (C ≤ 0)<br>(2−C)/2 untuk 0<C<2<br>(4−C)/2 untuk 2≤C<40 (C≥4) |
| MEDIUM | 1 - 5 | Segitiga | 0 untuk (C≤1 atau C≥5)<br>(C−1)/2 untuk 1<C<3<br>(5−C)/2 untuk 3≤C<5 |
| HIGH | 3 - 10 | Trapesium | 0 untuk (C≤3)<br>(C−3)/3 untuk 3<C<6<br>1 untuk (C≥6) |

Tujuan utama penilaian fuzzy pada konflik adalah menggambarkan tingkat “keparahan konflik” secara bertahap, bukan secara kaku (biner benar/salah). Fungsi keanggotaan berbentuk segitiga dan trapesium dipilih karena mampu merepresentasikan kenaikan dan penurunan derajat keanggotaan secara linear dan intuitif, sesuai dengan karakteristik jumlah konflik yang berubah secara bertahap. Selain itu, berdasarkan  bentuk linear ini memiliki beban komputasi yang ringan sehingga sangat efisien digunakan dalam Algoritma Genetika yang memerlukan evaluasi berulang pada setiap generasi.

Pada Tabel 3.4 menunjukkan contoh hasil rumus membership (output *fuzzification*) setelah dilakukan perhitungan konflik.

Tabel 3.4 Hasil *Fuzzification* (Derajat Keanggotaan)

| Label | Derajat Membership (μ) |
| --- | --- |
| LOW | 0.2 |
| MEDIUM | 0.8 |
| HIGH | 0.1 |

Tabel 3.4  menunjukkan hasil proses fuzzifikasi terhadap variabel jumlah konflik, di mana nilai input crisp dikonversi menjadi derajat keanggotaan pada tiga himpunan fuzzy, yaitu LOW, MEDIUM, dan HIGH. Nilai derajat keanggotaan (μ) menggambarkan sejauh mana input tersebut memenuhi masing-masing kategori linguistik sesuai dengan bentuk fungsi keanggotaan yang telah ditetapkan. Pada contoh ini, nilai konflik menghasilkan μ = 0.2 untuk kategori LOW, μ = 0.8 untuk MEDIUM, dan μ = 0.1 untuk HIGH. Hal tersebut menunjukkan bahwa nilai konflik tersebut paling kuat direpresentasikan oleh kategori MEDIUM, sementara kontribusinya terhadap kategori LOW dan HIGH relatif kecil. Informasi ini menjadi dasar bagi tahap inferensi fuzzy dalam menentukan keluaran sistem berdasarkan rule base yang berlaku.

- ***Inference***

Kemudian dilakukan  *inference, *yaitu proses menjalankan aturan-aturan *fuzzy* (IF-THEN *rules*) untuk menghasilkan kesimpulan *fuzzy). *Tabel 3.5 menyajikan rule base atau basis aturan yang digunakan pada sistem fuzzy untuk mengevaluasi kualitas jadwal berdasarkan jumlah konflik yang muncul dalam solusi penjadwalan. Setiap aturan disusun menggunakan format IF-THEN, di mana kondisi (antecedent) merepresentasikan tingkat konflik yang telah difuzzifikasi ke dalam tiga kategori linguistik, yaitu LOW, MEDIUM, dan HIGH. Kategori ini menggambarkan intensitas benturan jadwal berdasarkan hasil analisis terhadap tumpang-tindih waktu pada ruangan, kelompok mahasiswa, maupun asisten laboratorium.

Tabel 3.5 Rule Base Fuzzy Berdasarkan Total Konflik

| No | Kondisi (IF) | Output (THEN) | Makna |
| --- | --- | --- | --- |
| 1 | Konflik = LOW | Quality = EXCELLENT | Jadwal sangat baik, minim bentrok |
| 2 | Konflik = MEDIUM | Quality = FAIR | Jadwal cukup baik namun perlu perbaikan |
| 3 | Konflik = HIGH | Quality = BAD | Jadwal tidak layak, terlalu banyak bentrok |

Aturan pertama (R1) menyatakan bahwa apabila tingkat konflik berada pada kategori LOW, maka kualitas jadwal diklasifikasikan sebagai EXCELLENT. Hal ini menandakan bahwa jadwal yang dihasilkan memiliki tingkat kelayakan sangat tinggi karena jumlah konflik yang minimal menunjukkan keteraturan penempatan aktivitas. Aturan kedua (R2) mendefinisikan bahwa konflik dengan kategori MEDIUM akan menghasilkan kualitas jadwal FAIR, yang menunjukkan bahwa meskipun jadwal masih dapat digunakan, beberapa penyesuaian mungkin diperlukan untuk meningkatkan efisiensinya. Sementara itu, aturan ketiga (R3) menetapkan bahwa apabila tingkat konflik termasuk dalam kategori HIGH, maka kualitas jadwal dikategorikan sebagai BAD, yang mengindikasikan bahwa jadwal tidak layak digunakan karena banyaknya benturan waktu yang berpotensi mengganggu proses pembelajaran.

Tabel 3.6 Hasil Inferensi Fuzzy (Inference Output Table)

| Rule | μ | Nilai Crisp | Kontribusi |
| --- | --- | --- | --- |
| R1: LOW  EXCELLENT | 0.2 | 90 | 18 |
| R2: MED  FAIR | 0.8 | 60 | 48 |
| R3: HIGH  BAD | 0.1 | 30 | 3 |

Tabel 3.6 menggambarkan proses inferensi fuzzy yang menghubungkan derajat keanggotaan input dengan keluaran sistem melalui penerapan aturan (*rule base*). Setiap baris menunjukkan satu aturan fuzzy beserta nilai aktivasi (μ) yang diperoleh dari tahap fuzzifikasi. Nilai μ tersebut kemudian dikalikan dengan nilai crisp yang merepresentasikan kategori output, sehingga menghasilkan *kontribusi* masing-masing aturan terhadap nilai akhir sistem. Pada contoh ini, aturan R1 (*LOW → EXCELLENT*) memiliki derajat aktivasi 0.2 yang memberikan kontribusi 18 terhadap perhitungan akhir. Aturan R2 (*MED → FAIR*) merupakan aturan yang paling dominan dengan μ = 0.8 dan kontribusi 48, sedangkan R3 (*HIGH → BAD*) memberikan kontribusi yang lebih kecil. Kontribusi dari seluruh aturan ini selanjutnya digunakan dalam proses defuzzifikasi untuk memperoleh nilai crisp final sebagai representasi kualitas jadwal.

- *Defuzzification*

Kemudian proses terakhir adalah *defuzzification*, yaitu proses mengubah hasil fuzzy (EXCELLENT, FAIR, BAD beserta bobotnya) menjadi nilai crisp yang bisa dipakai kembali oleh sistem, dalam hal ini digunakan untuk *fitness function*.

Tabel 3.7 Nilai *Crisp* untuk Output Fuzzy

| Label Output | Nilai Crisp | Deskripsi |
| --- | --- | --- |
| EXCELLENT | 90 | Jadwal sangat optimal |
| GOOD | 75 | (Belum dipakai pada contoh simple, tapi bisa ditambah) |
| FAIR | 60 | Jadwal cukup baik |
| BAD | 30 | Jadwal buruk |

Tabel 3.7 menunjukkan pemetaan setiap label output fuzzy ke dalam nilai *crisp* yang digunakan pada tahap defuzzification untuk menghasilkan penilaian kualitas jadwal secara kuantitatif. Label EXCELLENT diberikan nilai *crisp* 90 yang merepresentasikan jadwal dengan tingkat optimalitas sangat tinggi, sedangkan GOOD memiliki nilai 75 dan dapat digunakan sebagai kategori menengah-atas apabila variasi penilaian yang lebih halus diperlukan. Label FAIR bernilai 60 dan menggambarkan jadwal yang cukup baik namun masih memerlukan perbaikan, sementara BAD diberi nilai 30 sebagai indikator bahwa jadwal berada pada kualitas rendah akibat banyaknya konflik atau ketidaksesuaian penjadwalan. Pemetaan ini memungkinkan sistem fuzzy mengonversi keluaran linguistik menjadi nilai numerik yang dapat digunakan sebagai komponen evaluasi dalam proses optimasi Algoritma Genetika. Setelah Langkah *fuzzification, inference, *dan *defuzzification* selesai, selanjutnya dilakukan perhitungan final.

Pada tahap defuzzifikasi, nilai crisp akhir dihitung dengan menggunakan metode rata-rata berbobot (weighted average), di mana setiap aturan fuzzy memberikan kontribusi sesuai dengan derajat aktivasi (μ) dan nilai crisp yang direpresentasikan oleh label keluarannya. Kontribusi masing-masing aturan dijumlahkan untuk membentuk numerator, yaitu 18+48+3=69. Sementara itu, total derajat aktivasi dari seluruh aturan digunakan sebagai denominator, yaitu 0.2+0.8+0.1=1.1. Nilai kualitas jadwal (*Quality*) kemudian diperoleh dengan membagi numerator terhadap denominator sehingga menghasilkan nilai 62.7.

Nilai kualitas ini kemudian dinormalisasi menjadi nilai fitness yang digunakan oleh Algoritma Genetika dengan membaginya terhadap nilai maksimum 100, sehingga diperoleh nilai fitness sebesar 0.627. Nilai fitness tersebut mencerminkan tingkat kelayakan individu dalam populasi dan menjadi dasar seleksi pada proses evolusi selanjutnya.

Implementasi pada *Crossover*

*Fuzzy *pada *crossover* akan mendeteksi diversity dan stagnansi pada hasil *crossover* dan akan menyesuaikan *crossover** rate*, sebagaimana pada penelitian oleh  yang menggunakan keberagaman populasi sebagai salah satu parameter untuk* scaling factor *terhadap *crossover rate*. Sebagai contoh penerapannya, fuzzy akan melihat *avarage* fitness pada populasi dan diversitynya, apabila rata-rata rendah dan *diverswity* luas maka *crossover* rate akan naik untuk menambah ruang eksplorasi.

Gambar 3.10 Alur proses *crossover* setelah penerapan *fuzzy logic*

Pada Gambar 3.10 ditunjukkan alur proses *crossover* setelah integrasi *fuzzy logic*, dimulai dari penyusunan populasi dan perhitungan fitness menggunakan roulette selection untuk menentukan individu yang berpeluang disilangkan. Selanjutnya dipilih kandidat *crossover* berdasarkan nilai peluang yang dipengaruhi oleh aturan *fuzzy logic*, dilanjutkan dengan penentuan titik potong untuk pertukaran kromosom. Jika jumlah kandidat atau panjang kromosom kurang memadai, dilakukan repair pada individu guna memastikan struktur tetap valid. Proses berakhir dengan pengembalian hasil *crossover* berupa keturunan baru (offspring) yang siap dievaluasi pada tahap berikutnya, sehingga keberagaman populasi meningkat dan peluang memperoleh solusi optimal semakin besar.

Gambar 3.11 Rangkaian proses *fuzzy *pada *crossover*

Gambar 3.11 Menunjukkan bagaimana *crossover rate* didapatkan dari serangkaian proses fuzzy yang terdiri dari *fuzzification*, *inference*, dan *defuzzification*.

- *Fuzzification*

Pada tahap fuzzification, standar deviasi (SD) dari seluruh skor fitness yang telah dikalkulasi akan menjadi input untuk mendapatkan derajat keanggotaan fuzzy.

**Tabel 3.****8** Fungsi Keanggotaan *Fuzzy* untuk SD Fitness

| Label Fuzzy | Range σ (contoh) | Bentuk Fungsi | Rumus Membership μ(x) |
| --- | --- | --- | --- |
| LOW | 0.00 - 0.05 | Segitiga |  |
| MEDIUM | 0.02 - 0.08 | Segitiga | 0 untuk (x≤0.02 atau x≥0.08),<br> untuk 0.02<x<0.05 ,<br> untuk 0.05≤x<0.08 |
| HIGH | > 0.05 | Trapesium | 0 untuk (x≤0.05),<br>  untuk 0.05<x<0.08 ,<br> 1 untuk (x≥0.08) |

Tabel 3.8 menunjukkan perancangan fungsi keanggotaan fuzzy untuk standar deviasi fitness pada Algoritma Genetika, yang digunakan sebagai indikator tingkat keragaman populasi. Kategori LOW dan MEDIUM dimodelkan dengan fungsi segitiga karena keduanya merepresentasikan kondisi transisi yang berubah secara bertahap, masing-masing dengan rentang 0.00-0.05 dan 0.02-0.08. Sementara itu, kategori HIGH menggunakan fungsi trapesium naik karena ketika standar deviasi melebihi ambang batas tertentu (x > 0.05), populasi dianggap sangat beragam dan nilai keanggotaannya perlu dipertahankan stabil pada μ = 1 setelah melewati titik 0.08.

Pada contoh standar deviasi = 0.04, akan menghasilkan derajat keanggotaan LOW = 0.33, MEDIUM = 0.67, dan HIGH = 0 karena standar deviasi < 0.05. Dari contoh tersebut, populasi dianggap memiliki keragaman MEDIUM. Kemudian untuk memasuki tahap *inference* diperlukan untuk melakukan *mapping* terhadap *crossover rate* dengan mengolompokkannya ke kategori LOW, MEDIUM, dan HIGH.

Tabel 3.9 Mapping Label Cr ke Nilai Crisp

| Label Cr | Nilai Crisp | Arti |
| --- | --- | --- |
| LOW | 0.30 | Crossover rendah |
| MEDIUM | 0.60 | Crossover moderat |
| HIGH | 0.90 | Crossover tinggi (eksplorasi agresif) |

Tabel 3.9 menunjukkan nilai *crisp* untuk *crossover rate* ditetapkan berdasarkan prinsip keseimbangan eksplorasi-eksploitasi dalam Algoritma Genetika, sehingga dipilih 0.30 untuk tingkat *crossover* rendah agar eksploitasi tetap berlangsung tanpa mematikan proses pertukaran gen, 0.60 untuk *crossover* moderat yang mencerminkan kondisi populasi dengan keragaman sedang, dan 0.90 untuk *crossover* tinggi guna mendorong eksplorasi agresif ketika populasi mulai homogen. Pemilihan nilai-nilai ini juga mengikuti rentang umum yang direkomendasikan dalam literatur *fuzzy*-GA serta menghindari nilai ekstrem seperti 0 atau 1 agar proses evolusi tetap stabil dan tidak merusak struktur solusi yang telah terbentuk.

- *Inference*

Pada tahap ini hasil pengkategorian keberagaman akan menentukan bagaimana tingkat crossover yang akan dipakai (LOW, MEDIUM, dan HIGH). Tabel 3.9 merupakan basis aturan *Fuzzy* untuk *Crossover* *Rate*.

Tabel 3.10 Basis Aturan Fuzzy untuk Crossover Rate

| No | Kondisi (IF) | Output (THEN) | Makna |
| --- | --- | --- | --- |
| 1 | Diversity = LOW | Cr = HIGH | Populasi mulai konvergen → perlu crossover besar untuk eksplorasi. |
| 2 | Diversity = MEDIUM | Cr = MEDIUM | Keragaman cukup → crossover moderat. |
| 3 | Diversity = HIGH | Cr = LOW | Populasi sudah sangat beragam → crossover diturunkan. |

Tabel 3.10 menjelaskan aturan fuzzy yang menghubungkan tingkat keragaman populasi (diversity) dengan besarnya crossover rate (Cr) yang harus diterapkan pada Algoritma Genetika. Ketika diversity rendah, populasi mulai mengalami konvergensi dini sehingga dibutuhkan crossover tinggi untuk meningkatkan eksplorasi dan mencegah terjebak pada solusi lokal. Pada kondisi diversity sedang, populasi memiliki variasi yang memadai sehingga digunakan crossover moderat untuk menjaga keseimbangan antara eksplorasi dan eksploitasi. Sementara itu, ketika diversity tinggi, populasi sudah sangat beragam sehingga risiko eksplorasi berlebihan perlu dihindari, sehingga crossover diturunkan menjadi rendah agar pola solusi yang baik dapat dipertahankan. Tabel 3.10 merupakan contoh *mapping final *pada kasus standar deviasi = 0.04.

Tabel 3.11 Derajat Keanggotaan Crossover Rate Hasil Inferensi

| Label Cr | Sumber Rule | μ (Derajat Cr) |
| --- | --- | --- |
| Cr_HIGH | dari Diversity = LOW | 0.33 |
| Cr_MED | dari Diversity = MEDIUM | 0.67 |
| Cr_LOW | dari Diversity = HIGH | 0.00 |

Tabel 3.11 menunjukkan hasil akhir proses inferensi fuzzy untuk menentukan derajat keanggotaan setiap kategori crossover rate (Cr) ketika nilai standar deviasi populasi adalah 0.04. Pada nilai SD tersebut, fuzzy system memberikan derajat keanggotaan 0.33 pada Cr_HIGH, yang berasal dari aturan bahwa “jika diversity rendah maka crossover harus tinggi”, ini menunjukkan bahwa sebagian kondisi populasi masih dianggap mendekati konvergen. Selanjutnya, Cr_MED mendapat derajat 0.67, karena pada SD = 0.04 populasi lebih kuat beranggotakan himpunan MEDIUM, sehingga aturan “diversity sedang → crossover moderat” memberikan kontribusi terbesar. Sementara itu, Cr_LOW memiliki derajat 0.00, yang berarti nilai SD ini tidak memenuhi kriteria diversity tinggi, sehingga aturan untuk menurunkan crossover rate tidak aktif. Dengan demikian, tabel ini menggambarkan bagaimana ketiga rule fuzzy diterapkan dan menghasilkan derajat keanggotaan akhir untuk masing-masing kategori crossover sebelum memasuki tahap defuzzification.

- *Defuzzification*

Sama seperti *defuzzification *pada tahap *fitness function*, pada tahap ini juga menggunakan rumus numerator  / denominator = *crossover rate*. Numerator sendiri merupakan hasil penjumlahan nilai kontribusi, di mana nilai kontribusi merupakan perkalian antara derajat keanggotaan dengan nilai *crisp*. Tabel 3.11 akan menunjukkan bagaimana *defuzzification *terjadi pada standar deviasi sama dengan 0.04.

Tabel 3.12 Defuzzification Crossover Rate

| Label Cr | μ | Nilai Crisp | Kontribusi (μ × crisp) |
| --- | --- | --- | --- |
| LOW | 0.00 | 0.30 | 0.000 |
| MEDIUM | 0.67 | 0.60 | 0.402 |
| HIGH | 0.33 | 0.90 | 0.297 |

Tabel 3.12 menunjukkan bagaimana hasil inferensi *fuzzy* diterjemahkan kembali menjadi satu nilai *crisp* *crossover rate* melalui proses *defuzzification*. Setiap label Cr (LOW, MEDIUM, HIGH) memiliki derajat keanggotaan (μ) yang diperoleh dari tahap inferensi. Nilai *crisp* masing-masing kategori (misalnya 0.30, 0.60, 0.90) merepresentasikan intensitas *crossover* yang diusulkan oleh kategori tersebut. Pada kolom “Kontribusi”, setiap nilai μ dikalikan dengan nilai *crisp*-nya untuk mencerminkan besarnya pengaruh kategori tersebut terhadap hasil akhir.

Dalam contoh ini, Cr_MEDIUM memberi kontribusi terbesar (0.402), diikuti Cr_HIGH (0.297), sementara Cr_LOW tidak berkontribusi karena derajat keanggotaannya 0. Nilai-nilai kontribusi inilah yang nantinya dijumlahkan dan dibagi dengan total μ untuk menghasilkan satu nilai *crossover rate* final yang adaptif terhadap kondisi *diversity* populasi. Pada contoh kasus standar deviasi 0.04, *crossover rate *yang dihasilkan adalah 0.7.

Implementasi pada *Mutation*

Berbeda dengan implementasi *fuzzy logic* pada *crossover*, implementasi *fuzzy logic* pada mutation akan munggakan parameter pergerakan skor fitness dari iterasi sebelumnya, untuk iterasi > 1. Ini berarti penerapan *fuzzy logic* akan memerhatikan faktor pertumbuhan skor *fitness *.

Pada Gambar 3.12 diperlihatkan alur proses *mutation* setelah penerapan *fuzzy logic*, yang dimulai dengan evaluasi setiap jadwal dalam populasi untuk menentukan apakah jadwal tersebut akan mengalami mutasi berdasarkan peluang sekitar 30% yang dipengaruhi oleh aturan fuzzy. Tahapan ini yang akan diubah, di mana proses *fuzzy* akan memberikan peluang yang lebih adaptif, tidak statis.

Gambar 3.12 Alur proses *mutation* setelah penerapan *fuzzy logic*

Sementara pada Gambar 3.13 memperlihatkan alur proses *fuzzy* yang terjadi pada proses mutasi yang secara garis besar memiliki proses yang sama dengan proses *fuzzy* pada tahap *crossover*, hanya berbeda pada input *fuzzy* yang menggunakan lonjakan *fitness* dari iterasi sebelumnya.

Gambar 3.13 Alur proses penerapan fuzzy logic

- *Fuzzification*

Pada tahap ini, fuzzification akan menerima lonjakan *fitness* sebagai input. Misalnya jika lonjakan fitness hanya pada range 0.0 - 0.02 maka akan dikategorikan sebagai lonjakan yang *stagnan. *Tabel 3.13 menunjukkan bagaimana lonjakan akan dikategorikan.

Tabel 3.13 Kategori Lonjakan pada fuzzifikasi

| Δf | Kategori |
| --- | --- |
| 0.0 - 0.02 | stagnan |
| 0.02 - 0.1 | ada peningkatan |
| > 0.1 | peningkatan besar |

Kemudian masuk pada pelabelan, fungsi-fungsi *fuzzy *akan diterapkan pada lonjakan fitness yang telah dilakukan pelabelan. Tabel 3.14 menunjukkan bagaimana pelabelan akan dilakukan.

Tabel 3.14 Hasil fuzzification

| Label Fuzzy | Range Δf | Bentuk |
| --- | --- | --- |
| LOW | 0-0.05 | Trapesium |
| MED | 0.02-0.15 | Segitiga |
| HIGH | >0.10 | Trapesium naik |

Pada Tabel 3.14 fungsi keanggotaan untuk nilai Δf dirancang menggunakan kombinasi trapesium dan segitiga agar dapat memodelkan dinamika peningkatan *fitness* secara realistis. Himpunan LOW menggunakan bentuk trapesium karena kondisi stagnasi perlu diberi rentang nilai yang stabil,artinya Δf kecil dalam rentang 0-0.05 tetap dianggap stagnan sehingga stabilisasi sangat diperlukan. Himpunan MED menggunakan segitiga karena peningkatan ringan biasanya memiliki satu titik puncak yang jelas, di mana nilai Δf berada pada tingkat ideal untuk mutasi moderat. Sementara itu, himpunan HIGH menggunakan trapesium naik karena peningkatan *fitness* yang besar perlu dianggap sebagai kondisi “sangat baik” dalam rentang luas, setelah melewati ambang tertentu (≥0.15), GA sudah berada dalam fase konvergensi kuat, sehingga keanggotaan tinggi harus dipertahankan secara konstan. Dengan demikian, pemilihan bentuk fungsi ini sejalan dengan karakteristik stagnasi, peningkatan moderat, dan peningkatan signifikan pada dinamika evolusi GA.

- *Inference*

Memasuki tahapan inference, hasil *fuzzification* akan menjadi dasar pemutusan penugasan *mutation rate*. Tabel 3.15 menunjukkan hubungan logis antara tingkat peningkatan fitness antargenerasi (Δf) dengan besarnya mutation rate yang harus diterapkan pada algoritma genetika. Ketika Improvement berada pada kategori LOW, artinya evolusi mengalami stagnasi atau peningkatan fitness sangat kecil sehingga diperlukan mutation rate yang tinggi untuk menambah eksplorasi dan membantu GA keluar dari kondisi local optimum. Jika Improvement berada pada kategori MED, yaitu peningkatan terjadi tetapi tidak terlalu besar, maka digunakan mutation rate MEDIUM agar proses pencarian tetap seimbang: tidak terlalu agresif namun cukup untuk menjaga variasi. Sebaliknya, ketika *Improvement* berada pada kategori HIGH, yang menandakan populasi berkembang baik dan fitness meningkat signifikan, maka mutation rate harus diturunkan (LOW) untuk menjaga kestabilan solusi dan mencegah kerusakan struktur individu yang sudah baik. Dengan demikian, aturan ini menjadi mekanisme adaptif yang menyeimbangkan eksplorasi dan eksploitasi dalam proses evolusi.

Tabel 3.15 Basis aturan fuzzy

| No | IF Improvement | THEN Mutation Rate |
| --- | --- | --- |
| 1 | LOW | HIGH |
| 2 | MED | MEDIUM |
| 3 | HIGH | LOW |

- *Defuzzification*

Untuk menyelesaikan tahap *defuzzification*, akan dibutuhakan pengelompokan nilai *mutation rate* ke dalam *low mutation rate, medium mutation rate, *dan *high mutation rate* yang selanjutnya akan disebut sebagai nilai *crisp*. Tabel 3.16 menunjukkan nilai *crisp mutation rate*.

Tabel 3.16 Nilai crisp mutation rate

| Label | Crisp | Makna |
| --- | --- | --- |
| LOW | 0.01 | eksploitasi dominan |
| MED | 0.05 | keseimbangan |
| HIGH | 0.10 | eksplorasi agresif |

Tabel 3.16 menetapkan nilai numerik yang merepresentasikan besarnya tingkat mutasi setelah proses inferensi fuzzy. Setiap label linguistik,LOW, MED, dan HIGH,dikaitkan dengan nilai crisp yang mencerminkan strategi evolusioner yang diinginkan. Mutation rate LOW (0.01) digunakan ketika GA berada dalam fase eksploitasi, yaitu fokus mempertahankan dan memperhalus solusi yang sudah baik tanpa melakukan perubahan besar. Mutation rate MED (0.05) mencerminkan kondisi seimbang antara eksplorasi dan eksploitasi, cocok ketika peningkatan fitness berlangsung stabil namun GA masih membutuhkan sedikit variasi. Sementara itu, Mutation rate HIGH (0.10) digunakan untuk eksplorasi agresif, terutama saat terjadi stagnasi, sehingga perubahan acak lebih besar dapat membantu populasi keluar dari local optimum. Nilai crisp ini kemudian digunakan dalam proses defuzzification metode weighted average untuk menghitung mutation rate adaptif yang sesuai pada setiap generasi GA.

Seperti tahapan sebelumnya, *proses fuzzy* akan mengkalkulasi pembagian *numerator* dengan *denominator* untuk mendapatkan *mutation rate* adaptif yang akan dipakai pada proses mutasi.

- **Evaluasi**

Untuk membuktikan manfaat hibridisasi, HGA dibandingkan dengan versi Standard dari algoritma komponennya, seperti *Standard Genetic Algorithm* (GA) dan *Standard Particle Swarm Optimization* (PSO) . Oleh karena itu, untuk mengevaluasi hasil optimasi maka akan dilakukan pembadingan performa dengan AG klasik. Peneliti akan membandingkan elemen-elemen statistik yang akan dijelaskan dalam poin .

- *Makespan* Untuk mengukur waktu penyelesaian total maksimum dari seluruh pekerjaan. Tujuannya adalah meminimalkan nilai untuk membuktikan efisiensi penjadwalan.

- Selain makespan, evaluasi juga akan mempertimbangkan *flow time*, rata-rata keterlambatan (*average lateness*), dan persentase pekerjaan yang terlambat (*percentage of late orders*) untuk memberikan gambaran komprehensif mengenai kualitas jadwal

- Validasi statistik, Mengingat sifat stokastik dari algoritma evolusioner, satu kali percobaan tidak cukup untuk menyimpulkan hasil. Simulasi AG dengan *fuzzy logic* dan AG klasik akan diulang sebanyak 30 kali (*runs*) untuk setiap skenario guna memastikan reliabilitas data

Tabel 3.17 Tabel statistik untuk evaluasi optimasi algoritma

| Statistik                   (Iterasi)<br>Method | Min | Max | Avg | Standar Deviation | Variance | Median |
| --- | --- | --- | --- | --- | --- | --- |
| Klasik AG |  |  |  |  |  |  |
| AG dengan Fuzzy Logic |  |  |  |  |  |  |

Dengan demikian evaluasi performa AG dengan *fuzzy logic* dan AG klasik akan ditunjukkan melalui *barchart* dan table statistik . Tabel 3.17 merupakan contoh tabel statistik yang akan digunakan, sebagaimana telah tergambar pada penelitian Nasution et al. (2025).

- **Implementasi GUI (*****Graphical User Interface*****)**

Gambar 3.14 Contoh penerapan AG berbasis website

Graphical User Interface akan diimplementasikan pada program Algoritma Genetika yang telah dibuat agar proses-proses yang dijalankan dan hasil jadwal yang di*-generate* dapat dilihat secara visual. Antarmuka visual akan dibuat berbasis web demi kenyamanan dan kemudahan akses. Contoh antarmuka berbasis website untuk menampilkan AG dapat dilihat pada Gambar 3.14 .

# HASIL DAN PEMBAHASAN

## Hasil Pengumpulan Data

Pengumpulan data pada penelitian ini dilaksanakan secara sistematis melalui dua metode utama yang telah ditetapkan pada Bab III, yaitu observasi langsung terhadap proses penjadwalan laboratorium di lapangan serta studi literatur dan dokumentasi administratif akademik. Proses pengumpulan data difokuskan pada seluruh komponen yang menjadi kebutuhan esensial dalam pemodelan sistem penjadwalan penggunaan laboratorium di Fakultas Sains dan Teknologi (FST) Universitas Jambi. Data yang berhasil dihimpun mencakup tiga kategori utama, yakni: (1) data kelas praktikum beserta seluruh atribut penjadwalannya, (2) data asisten laboratorium berikut informasi ketersediaan waktu masing-masing, serta (3) data ketersediaan ruangan laboratorium yang akan digunakan. Ketiga kategori data tersebut selanjutnya menjadi fondasi penyusunan struktur kromosom dalam algoritma genetika yang diimplementasikan pada penelitian ini.

### 4.1.1	Data Kelas Praktikum

Data kelas praktikum merupakan komponen inti dari proses pengumpulan data karena setiap entri kelas akan direpresentasikan sebagai satu gen (gene) dalam struktur kromosom algoritma genetika. Data ini diperoleh melalui sistem informasi akademik Universitas Jambi serta spreadsheet jadwal kuliah praktikum FST yang dikelola oleh bagian akademik fakultas. Setiap entri data kelas memuat serangkaian atribut yang merepresentasikan seluruh informasi relevan untuk proses penjadwalan, meliputi identitas program studi, nama dan kode mata kuliah, bobot SKS, pembagian kelas paralel, jumlah peserta, alokasi ruangan, serta informasi waktu pelaksanaan bagi kelas yang telah memiliki jadwal.

Berdasarkan hasil pengumpulan data yang telah dilakukan, diperoleh total 216 kelas praktikum yang tersebar pada 15 program studi di lingkungan FST Universitas Jambi. Kelas-kelas tersebut mencakup 129 mata kuliah praktikum yang berbeda, menunjukkan cakupan data yang komprehensif terhadap seluruh kegiatan laboratorium di fakultas. Rekapitulasi lengkap jumlah kelas dan mata kuliah untuk setiap program studi disajikan pada Tabel 4.1.

Tabel 4.1 Rekapitulasi Jumlah Kelas Praktikum per Program Studi

| No | Program Studi | Jumlah Mata Kuliah | Jumlah Kelas | Persentase (%) |
| --- | --- | --- | --- | --- |
| 1 | Biologi | 27 | 35 | 16,20 |
| 2 | Teknik Geologi | 15 | 30 | 13,89 |
| 3 | Teknik Geofisika | 11 | 21 | 9,72 |
| 4 | Teknik Pertambangan | 10 | 20 | 9,26 |
| 5 | Teknik Kimia | 8 | 18 | 8,33 |
| 6 | Analis Kimia | 17 | 18 | 8,33 |
| 7 | Kimia | 8 | 16 | 7,41 |
| 8 | Teknik Lingkungan | 6 | 13 | 6,02 |
| 9 | Kimia Industri | 13 | 13 | 6,02 |
| 10 | Informatika | 7 | 9 | 4,17 |
| 11 | Fisika | 7 | 7 | 3,24 |
| 12 | Teknik Sipil | 2 | 6 | 2,78 |
| 13 | Sistem Informasi | 3 | 6 | 2,78 |
| 14 | Teknik Elektro | 1 | 2 | 0,93 |
| 15 | Matematika | 1 | 2 | 0,93 |
|  | Total | 129 | 216 | 100,00 |

Tabel 4.1 menunjukkan adanya variasi yang signifikan dalam hal jumlah kelas praktikum antar program studi. Program Studi Biologi menempati posisi tertinggi dengan 35 kelas (16,20%) yang berasal dari 27 mata kuliah berbeda, diikuti oleh Teknik Geologi dengan 30 kelas (13,89%) dari 15 mata kuliah, dan Teknik Geofisika dengan 21 kelas (9,72%) dari 11 mata kuliah. Di sisi lain, Program Studi Teknik Elektro dan Matematika masing-masing hanya menyumbang 2 kelas (0,93%). Perbedaan proporsi ini mengindikasikan bahwa program studi yang berorientasi pada sains eksperimental dan laboratorium cenderung memiliki kebutuhan jadwal praktikum yang jauh lebih tinggi, sehingga memerlukan alokasi sumber daya laboratorium yang lebih intensif. Visualisasi distribusi ini disajikan pada Gambar 4.1.

Gambar 4.1 Distribusi Jumlah Kelas Praktikum per Program Studi

Gambar 4.1 memperlihatkan secara visual perbandingan jumlah kelas praktikum di setiap program studi dalam bentuk diagram batang horizontal. Dari visualisasi tersebut, tampak jelas bahwa terdapat ketimpangan distribusi kelas yang cukup mencolok, di mana lima program studi teratas (Biologi, Teknik Geologi, Teknik Geofisika, Teknik Pertambangan, dan Teknik Kimia) secara kumulatif menyumbang 57,41% dari total seluruh kelas. Ketimpangan ini menjadi pertimbangan penting dalam desain algoritma penjadwalan, mengingat program studi dengan jumlah kelas yang besar berpotensi lebih tinggi mengalami konflik penjadwalan, khususnya konflik penggunaan ruangan dan bentrok jadwal asisten.

**Distribusi Berdasarkan SKS Praktek**

Bobot Satuan Kredit Semester (SKS) praktek dari setiap kelas merupakan parameter krusial yang secara langsung menentukan durasi sesi praktikum dan alokasi slot waktu dalam proses penjadwalan. Semakin tinggi bobot SKS praktek suatu mata kuliah, semakin panjang durasi sesi yang harus dialokasikan, dan secara konsekuen semakin banyak slot waktu yang terpakai. Hal ini berimplikasi pada tingkat kesulitan pencarian solusi bebas konflik oleh algoritma genetika. Tabel 4.2 menyajikan distribusi kelas berdasarkan bobot SKS praktek.

Tabel 4.2 Distribusi Kelas Berdasarkan SKS Praktek

| SKS Praktek | Jumlah Kelas | Persentase (%) | Durasi Sesi |
| --- | --- | --- | --- |
| 1 | 199 | 92,13 | ± 50 menit (2 jam) |
| 2 | 16 | 7,41 | ± 100 menit (3 jam) |
| 3 | 1 | 0,46 | ± 150 menit (4 jam) |
| Total | 216 | 100,00 |  |

Tabel 4.2 memperlihatkan bahwa mayoritas absolut kelas praktikum, yaitu sebanyak 199 kelas (92,13%), memiliki bobot 1 SKS praktek dengan durasi sesi sekitar 50 menit. Hanya 16 kelas (7,41%) yang memiliki bobot 2 SKS dengan durasi 100 menit, serta 1 kelas (0,46%) berbobot 3 SKS dengan durasi 150 menit. Dominasi kelas berbobot 1 SKS ini berdampak positif terhadap proses penjadwalan karena sesi yang lebih pendek memberikan fleksibilitas lebih tinggi dalam pengaturan slot waktu dan mengurangi potensi tumpang tindih jadwal. Visualisasi proporsi distribusi SKS praktek ditampilkan pada Gambar 4.2.

Gambar 4.2 Distribusi Kelas Berdasarkan SKS Praktek

Gambar 4.2 menyajikan diagram *donut* yang mengilustrasikan proporsi kelas berdasarkan bobot SKS praktek. Visualisasi ini secara jelas menunjukkan dominasi kelas berbobot 1 SKS yang mencakup hampir seluruh dataset (92,1%), sementara kelas berbobot 2 SKS dan 3 SKS hanya menempati porsi yang sangat kecil. Komposisi ini relevan terhadap perancangan slot waktu pada struktur kromosom algoritma genetika, di mana sistem harus mampu mengakomodasi variasi durasi sesi yang berbeda-beda namun tetap mempertahankan konsistensi terhadap batasan jam operasional laboratorium.

**Distribusi Berdasarkan Semester **

Penyebaran kelas praktikum pada berbagai tingkatan semester mencerminkan struktur kurikulum akademik yang berlaku di masing-masing program studi. Informasi mengenai distribusi semester berguna untuk memahami pola beban laboratorium pada setiap tingkatan studi mahasiswa. Tabel 4.3 berikut menyajikan distribusi kelas berdasarkan semester.

Tabel 4.3 Distribusi Kelas Berdasarkan Semester

| Semester | Jumlah Kelas | Persentase (%) |
| --- | --- | --- |
| 1 | 68 | 31,48 |
| 3 | 71 | 32,87 |
| 4 | 2 | 0,93 |
| 5 | 66 | 30,56 |
| 6 | 5 | 2,31 |
| 7 | 4 | 1,85 |
| Total | 216 | 100,00 |

Tabel 4.3 mengungkapkan bahwa kelas praktikum terkonsentrasi pada tiga semester utama, yaitu semester 3 dengan 71 kelas (32,87%), semester 1 dengan 68 kelas (31,48%), dan semester 5 dengan 66 kelas (30,56%). Ketiga semester ini secara kumulatif menyumbang 94,91% dari total keseluruhan kelas. Konsentrasi ini mencerminkan struktur kurikulum FST yang menempatkan mata kuliah praktikum dasar pada semester awal (1 dan 3) serta mata kuliah praktikum lanjutan dan peminatan pada semester 5. Sementara itu, semester 4, 6, dan 7 hanya memiliki kontribusi marginal yang mengindikasikan bahwa mata kuliah pada semester-semester tersebut cenderung bersifat teoretis atau telah memasuki fase tugas akhir. Visualisasi distribusi ini ditampilkan pada Gambar 4.3.

Gambar 4.3 Distribusi Kelas Praktikum Berdasarkan Semester

Gambar 4.3 memvisualisasikan distribusi kelas dalam bentuk diagram batang vertikal. Pola distribusi berbentuk trimodal dengan tiga puncak pada semester 1, 3, dan 5 terlihat jelas dari grafik. Pola ini mengimplikasikan bahwa beban penjadwalan laboratorium terdistribusi relatif merata di antara tiga kelompok semester utama tersebut, yang berarti potensi konflik penjadwalan bersifat lintas semester dan memerlukan penanganan komprehensif oleh algoritma genetika.

**Data Jumlah Peserta **

Data jumlah peserta per kelas praktikum berperan sebagai salah satu parameter *constraint* yang kritis dalam proses penjadwalan. Jumlah peserta secara langsung memengaruhi pemilihan ruangan laboratorium yang sesuai berdasarkan kapasitas tampung, sehingga menjadi faktor penentu dalam validasi kelayakan solusi jadwal yang dihasilkan oleh algoritma. Tabel 4.4 menyajikan statistik deskriptif jumlah peserta per program studi.

Tabel 4.4 Statistik Jumlah Peserta per Program Studi

| No | Program Studi | Minimum | Maksimum | Rata-rata | Total Kelas |
| --- | --- | --- | --- | --- | --- |
| 1 | Analis Kimia | 1 | 30 | 10 | 18 |
| 2 | Biologi | 1 | 47 | 21 | 35 |
| 3 | Fisika | 1 | 30 | 19 | 7 |
| 4 | Informatika | 32 | 36 | 33 | 9 |
| 5 | Kimia | 19 | 34 | 22 | 16 |
| 6 | Kimia Industri | 2 | 18 | 15 | 13 |
| 7 | Matematika | 27 | 35 | 31 | 2 |
| 8 | Sistem Informasi | 1 | 28 | 19 | 6 |
| 9 | Teknik Elektro | 23 | 24 | 24 | 2 |
| 10 | Teknik Geofisika | 1 | 26 | 17 | 21 |
| 11 | Teknik Geologi | 2 | 30 | 20 | 30 |
| 12 | Teknik Kimia | 1 | 33 | 17 | 18 |
| 13 | Teknik Lingkungan | 1 | 36 | 23 | 13 |
| 14 | Teknik Pertambangan | 15 | 42 | 30 | 20 |
| 15 | Teknik Sipil | 35 | 35 | 35 | 6 |

Tabel 4.4 menampilkan variasi jumlah peserta yang cukup lebar antar program studi. Total keseluruhan peserta dari seluruh kelas praktikum mencapai **4.513 mahasiswa**, yang menggambarkan skala besar permasalahan penjadwalan yang harus ditangani. Program Studi Teknik Sipil mencatatkan rata-rata peserta tertinggi yaitu 35 peserta per kelas dengan nilai minimum dan maksimum yang identik, mengindikasikan ukuran kelas yang seragam. Sebaliknya, Program Studi Analis Kimia memiliki rata-rata terendah (10 peserta/kelas) dengan rentang yang sangat lebar (1-30 peserta), yang mencerminkan keberagaman jenis praktikum dari yang bersifat reguler hingga spesialisasi dengan peserta terbatas. Perbandingan visual terhadap statistik peserta ditampilkan pada Gambar 4.4.

Gambar 4.4 Statistik Jumlah Peserta per Program Studi

Gambar 4.4 menampilkan diagram batang berkelompok (*grouped bar chart*) yang membandingkan nilai minimum, rata-rata, dan maksimum jumlah peserta untuk setiap program studi. Dari visualisasi ini dapat diamati beberapa pola penting: (1) Program Studi Informatika, Matematika, Teknik Pertambangan, dan Teknik Sipil memiliki ukuran kelas yang relatif besar dan konsisten (rentang minimum-maksimum yang sempit), (2) Program studi seperti Analis Kimia, Biologi, dan Teknik Kimia memiliki rentang peserta yang sangat lebar, menunjukkan keragaman tipe praktikum, dan (3) beberapa program studi mencatat kelas dengan peserta sangat sedikit (1-2 orang), yang kemungkinan merupakan kelas peminatan atau kelas tambahan. Variasi ukuran kelas ini menjadi pertimbangan esensial dalam algoritma penjadwalan untuk memastikan alokasi ruangan yang kapasitasnya sesuai dengan kebutuhan masing-masing kelas.

**Data Waktu Pelaksanaan **

Bagi 155 kelas yang telah memiliki jadwal *existing*, data waktu pelaksanaan berhasil dikumpulkan secara lengkap meliputi hari dan rentang jam pelaksanaan. Informasi ini penting untuk memahami pola penggunaan laboratorium saat ini serta mengidentifikasi potensi *bottleneck* pada hari-hari tertentu. Tabel 4.5 menyajikan distribusi kelas berdasarkan hari pelaksanaan.

Tabel 4.5 Distribusi Kelas Berdasarkan Hari Pelaksanaan

| Hari | Jumlah Kelas | Persentase (%) |
| --- | --- | --- |
| Senin | 34 | 21,94 |
| Selasa | 37 | 23,87 |
| Rabu | 41 | 26,45 |
| Kamis | 37 | 23,87 |
| Jumat | 6 | 3,87 |
| Total | 155 | 100,00 |

Tabel 4.5 memperlihatkan bahwa distribusi kelas pada hari Senin hingga Kamis relatif merata dengan kisaran 21-27% dari total kelas terjadwal. Hari Rabu mencatatkan beban tertinggi dengan 41 kelas (26,45%), sementara hari Jumat hanya menampung 6 kelas (3,87%). Rendahnya alokasi pada hari Jumat merupakan konsekuensi langsung dari adanya *constraint* berupa jeda waktu sholat Jumat pada pukul 12.00-13.00 yang mengurangi ketersediaan slot waktu secara signifikan. Rentang jam operasional laboratorium berdasarkan data yang dikumpulkan adalah **pukul 07:00 hingga 18:00**, yang memberikan jendela operasional selama 11 jam per hari kerja. Visualisasi distribusi hari ditampilkan pada Gambar 4.5.

Gambar 4.5 Distribusi Kelas Berdasarkan Hari Pelaksanaan

Gambar 4.5 menyajikan diagram batang vertikal yang mengilustrasikan jumlah kelas praktikum pada setiap hari pelaksanaan. Dari visualisasi tersebut, terlihat secara jelas perbedaan yang sangat mencolok antara beban hari Senin-Kamis dibandingkan hari Jumat. Pola distribusi ini akan dipertimbangkan dalam perancangan *slot waktu* pada algoritma genetika, di mana hari Jumat akan memiliki kapasitas slot yang lebih terbatas akibat adanya area larangan (*forbidden zone*) selama waktu sholat Jumat, sebagaimana telah diatur dalam Tabel 3.1 pada Bab III.

**Informasi Struktur Data Kelas **

Setiap entri kelas dalam dataset menyimpan 16 atribut yang secara komprehensif merepresentasikan seluruh informasi yang diperlukan untuk proses penjadwalan. Atribut-atribut ini selanjutnya ditransformasi menjadi komponen-komponen pembentuk gen (*gene*) dalam struktur kromosom algoritma genetika. Tabel 4.6 mendeskripsikan masing-masing atribut beserta fungsinya.

Tabel 4.6 Struktur Atribut Data Kelas Praktikum

| No | Atribut | Tipe Data | Deskripsi | Contoh Nilai |
| --- | --- | --- | --- | --- |
| 1 | id_prodi | Integer | Identifikasi numerik unik program studi | 20201 |
| 2 | nama_prodi | String | Nama lengkap program studi | Teknik Elektro |
| 3 | nama_matakuliah | String | Nama lengkap mata kuliah praktikum | Praktikum Mikroprosessor dan Antarmuka |
| 4 | kode_matakuliah | String | Kode unik mata kuliah sesuai kurikulum | TEP155 |
| 5 | sks_praktek | Integer | Bobot SKS komponen praktek | 1 |
| 6 | sks_tatap_muka | Integer | Bobot SKS komponen tatap muka | 0 |
| 7 | sks_total | Integer | Total akumulasi seluruh komponen SKS | 1 |
| 8 | id_semester | Integer | Identifikasi periode semester akademik | 20251 |
| 9 | id_kelas | Integer | Identifikasi numerik unik kelas | 368096 |
| 10 | kode_kelas | String | Kode pembagian kelas paralel | R-001 |
| 11 | semester | Integer | Tingkatan semester mahasiswa peserta | 5 |
| 12 | jumlah_peserta | Integer | Jumlah mahasiswa yang terdaftar pada kelas | 24 |
| 13 | id_ruang_kuliah | Integer | Identifikasi numerik ruangan yang dialokasikan | 359 |
| 14 | jam_mulai | Time | Waktu dimulainya praktikum | 07:30:00 |
| 15 | jam_selesai | Time | Waktu berakhirnya praktikum | 09:10:00 |
| 16 | hari | Integer | Kode hari pelaksanaan (1=Senin, ..., 6=Sabtu) | 3 |

Tabel 4.6 menjabarkan keenambelas atribut yang membentuk struktur data kelas praktikum. Setiap atribut memiliki peran spesifik dalam proses penjadwalan: atribut id_prodi dan kode_matakuliah berfungsi sebagai identitas unik, sks_praktek menentukan durasi sesi, jumlah_peserta menjadi dasar validasi kapasitas ruangan, id_ruang_kuliah merepresentasikan alokasi ruangan, serta jam_mulai, jam_selesai, dan hari secara bersama mendefinisikan posisi temporal sesi praktikum. Atribut-atribut ini secara kolektif membentuk satu unit gen dalam struktur kromosom, sehingga setiap kromosom (individu) merepresentasikan satu solusi jadwal penggunaan laboratorium yang lengkap.

**Status Jadwal Existing **

Aspek penting lainnya dari data yang dikumpulkan adalah kelengkapan informasi jadwal pada setiap kelas. Tidak seluruh kelas praktikum yang tercatat dalam dataset telah memiliki jadwal yang terdefinisi secara lengkap (meliputi hari, jam mulai, dan jam selesai). Kelas yang belum memiliki jadwal merupakan entitas yang mutlak memerlukan alokasi jadwal oleh sistem. Tabel 4.7 menyajikan status kelengkapan jadwal pada data yang dikumpulkan.

Tabel 4.7 Status Kelengkapan Jadwal Kelas Praktikum

| Status | Jumlah Kelas | Persentase (%) |
| --- | --- | --- |
| Sudah memiliki jadwal (jam mulai, jam selesai, hari) | 155 | 71,76 |
| Belum memiliki jadwal (perlu dijadwalkan) | 61 | 28,24 |
| Total | 216 | 100,00 |

Tabel 4.7 memperlihatkan bahwa sebanyak 155 kelas (71,76%) telah memiliki informasi jadwal yang lengkap, mencakup atribut jam mulai, jam selesai, dan hari pelaksanaan. Di sisi lain, 61 kelas (28,24%) belum memiliki alokasi jadwal dan sepenuhnya bergantung pada proses penjadwalan yang dilakukan oleh sistem algoritma genetika. Proporsi ini divisualisasikan pada Gambar 4.5.

### 4.1.2 Data Asisten Laboratorium

**Struktur Data Asisten **

Setiap entri data asisten disimpan dengan format JSON yang terstruktur, memungkinkan pemrosesan secara programatik oleh sistem algoritma genetika. Data diorganisasi berdasarkan subject_id (kode mata kuliah) yang menjadi kunci penghubung antara data asisten dengan data kelas praktikum. Berikut adalah contoh struktur data untuk satu asisten beserta *slot* ketersediaannya:

{

"id": "gen-1771536348703-0",

"name": "Assistant 1 (Generated)",

"slots": [

{

"Hari": "Senin",

"Hari_ke": 1,

"Mulai (detik)": 34454,

"Selesai (detik)": 37454,

"Durasi (menit)": 50,

"SKS": 1

},

{

"Hari": "Selasa",

"Hari_ke": 2,

"Mulai (detik)": 28042,

"Selesai (detik)": 34042,

"Durasi (menit)": 100,

"SKS": 2

}

]

}

Contoh di atas menunjukkan struktur data satu asisten yang terdiri dari tiga komponen utama: (1) id sebagai pengenal unik asisten yang di-*generate* secara otomatis oleh sistem, (2) name sebagai label nama asisten, dan (3) slots sebagai *array* yang memuat daftar ketersediaan waktu. Setiap elemen dalam *array* slots menyimpan informasi mengenai hari ketersediaan (baik dalam format teks maupun numerik), waktu mulai dan selesai dalam satuan detik dari tengah malam (*seconds from midnight*), durasi ketersediaan dalam menit, serta bobot SKS yang dapat ditangani pada slot tersebut. Penggunaan satuan detik untuk representasi waktu memungkinkan perhitungan perbandingan dan deteksi tumpang tindih (*overlap*) waktu secara presisi tinggi dalam proses evaluasi *fitness* dan validasi konflik.

### 4.1.3 Data Ruangan Laboratorium

Data ruangan laboratorium diperoleh melalui observasi langsung terhadap fasilitas laboratorium di FST Universitas Jambi serta data administratif yang tercatat pada sistem informasi fakultas. Ruangan laboratorium merupakan salah satu sumber daya terbatas (*limited resource*) yang menjadi *constraint* utama dalam permasalahan penjadwalan. Setiap kelas praktikum memerlukan alokasi ruangan yang memadai dari segi kapasitas dan kesesuaian fasilitas.

Berdasarkan data kelas praktikum yang telah dikumpulkan, teridentifikasi **32 ruangan unik** yang digunakan untuk menyelenggarakan kegiatan praktikum di lingkungan FST. Setiap ruangan diidentifikasi menggunakan atribut id_ruang_kuliah yang bersifat numerik dan unik. Keberadaan 32 ruangan ini harus dikelola secara efisien untuk melayani 216 kelas praktikum, sehingga rata-rata setiap ruangan melayani sekitar 6,75 kelas per semester, sebuah rasio yang menunjukkan tingkat pemanfaatan ruangan yang cukup intensif.

Pembagian kelas praktikum ke dalam kode kelas (R-001, R-002, dan seterusnya, atau dengan kode alfabet A, B, C, D) merepresentasikan kelompok paralel dari satu mata kuliah yang sama. Kelas paralel terbentuk ketika jumlah peserta suatu mata kuliah melebihi kapasitas satu ruangan laboratorium, sehingga harus dibagi ke dalam beberapa kelompok yang pelaksanaannya pada waktu berbeda. Tabel 4.8 menyajikan distribusi kode kelas yang digunakan.

Tabel 4.8 Distribusi Kode Kelas Praktikum

| Kode Kelas | Jumlah Kelas | Persentase (%) | Keterangan |
| --- | --- | --- | --- |
| R-001 | 102 | 47,22 | Kelas paralel pertama / utama |
| R-002 | 44 | 20,37 | Kelas paralel kedua |
| A | 22 | 10,19 | Kelas reguler A |
| B | 19 | 8,80 | Kelas reguler B |
| R-003 | 11 | 5,09 | Kelas paralel ketiga |
| D | 7 | 3,24 | Kelas reguler D |
| C | 4 | 1,85 | Kelas reguler C |
| R-004 | 3 | 1,39 | Kelas paralel keempat |
| R-005 | 2 | 0,93 | Kelas paralel kelima |
| R-006 | 2 | 0,93 | Kelas paralel keenam |
| Total | 216 | 100,00 |  |

Tabel 4.8 menunjukkan bahwa kode kelas R-001 mendominasi dengan 102 kelas (47,22%), mengindikasikan bahwa hampir setengah dari seluruh kelas merupakan kelas utama atau satu-satunya kelas dari mata kuliah tersebut. Keberadaan kode kelas hingga R-006 pada beberapa mata kuliah menandakan adanya mata kuliah dengan jumlah peserta yang sangat besar yang harus dibagi menjadi hingga 6 kelompok parallel, hal ini secara signifikan menambah kompleksitas penjadwalan karena kelompok-kelompok paralel tersebut harus dijadwalkan pada waktu yang berbeda agar tidak saling tumpang tindih. Visualisasi distribusi kode kelas ditampilkan pada Gambar 4.6.

Gambar 4.6 Memvisualisasikan Distribusi Kode Praktikum

Gambar 4.6 memvisualisasikan distribusi kode kelas dalam bentuk diagram batang vertikal yang diurutkan secara *descending*. Pola distribusi menunjukkan penurunan jumlah kelas yang tajam dari R-001 ke kode-kode selanjutnya, membentuk kurva menyerupai distribusi eksponensial. Hal ini mengkonfirmasi bahwa mayoritas mata kuliah praktikum hanya memiliki 1-2 kelas paralel, sementara mata kuliah dengan 3 atau lebih kelas paralel merupakan kasus minoritas.

### 4.1.4 Ringkasan Data Pengumpulan

Tabel 4.9 merangkum secara komprehensif seluruh komponen data yang berhasil dikumpulkan dan akan menjadi masukan (*input*) bagi proses penjadwalan menggunakan algoritma genetika.

Tabel 4.9 Ringkasan Seluruh Data yang Dikumpulkan

| No | Komponen Data | Nilai | Keterangan |
| --- | --- | --- | --- |
| 1 | Program Studi | 15 | Seluruh program studi di FST Universitas Jambi |
| 2 | Mata Kuliah Praktikum | 129 | Mata kuliah unik yang memerlukan laboratorium |
| 3 | Total Kelas | 216 | Termasuk seluruh kelas paralel |
| 4 | Kelas Sudah Terjadwal | 155 | Memiliki informasi hari, jam mulai, dan jam selesai |
| 5 | Kelas Belum Terjadwal | 61 | Perlu dialokasikan jadwal oleh sistem |
| 6 | Total Peserta | 4.513 | Akumulasi mahasiswa di seluruh kelas |
| 7 | Ruangan Laboratorium | 32 | Ruangan unik yang tersedia di FST |
| 8 | Hari Operasional | 5 hari | Senin-Jumat (Sabtu untuk slot ketersediaan asisten) |
| 9 | Jam Operasional | 07:00-18:00 | Rentang jam layanan laboratorium |

Tabel 4.9 menunjukkan bahwa data yang dikumpulkan memiliki skala yang cukup besar dan kompleks, mencakup 15 program studi dengan 216 kelas yang harus dijadwalkan ke dalam 32 ruangan. Kompleksitas ini menjadi justifikasi kuat bagi penerapan pendekatan metaheuristik berbasis algoritma genetika, karena pencarian solusi secara *brute-force* atau manual pada ruang pencarian (*search space*) sebesar ini secara komputasional tidak layak (*computationally intractable*). Visualisasi ringkasan ditampilkan pada Gambar 4.7.

Gambar 4.7 Ringkasan Seluruh Data yang dikumpulkan

Gambar 4.7 menyajikan diagram batang horizontal dengan skala logaritmik yang memvisualisasikan magnitude relatif dari setiap komponen data. Penggunaan skala logaritmik diperlukan karena rentang nilai yang sangat lebar. Dari visualisasi ini terlihat bahwa program studi dan ruangan merupakan komponen dengan jumlah terkecil yang justru menjadi sumber daya paling terbatas (*bottleneck*) dalam permasalahan penjadwalan.

Seluruh data yang telah diuraikan pada subbab ini selanjutnya menjadi masukan (*input*) pada tahap pra-pemrosesan data (*preprocessing*) sebelum diproses oleh algoritma genetika. Pada tahap *preprocessing*, data kelas praktikum dan data asisten laboratorium ditransformasi ke dalam struktur gen dan kromosom sebagaimana telah dirancang pada Bab III, sehingga memenuhi format yang dibutuhkan oleh siklus evolusi algoritma genetika, meliputi pembangkitan populasi awal, evaluasi *fitness*, *crossover*, mutasi, dan seleksi, hingga diperoleh solusi jadwal penggunaan laboratorium yang optimal dan bebas konflik.

## Implementasi Program

### 4.2.1	Seeder (Pembangkitan Kromosom)

**Struktur Data**** Kelas Gene**

**	**Kelas Gene didefinisikan menggunakan dekorator @dataclass, yang menunjukkan bahwa kelas ini berfungsi sebagai struktur data terorganisasi (data container). Dalam konteks sistem penjadwalan, Gene dapat diinterpretasikan sebagai representasi satu entitas jadwal yang mengandung seluruh atribut penting yang berkaitan dengan suatu kegiatan akademik.

Secara konseptual, istilah gene di sini mengacu pada pendekatan algoritma genetika (genetic algorithm), di mana setiap gene merepresentasikan satu komponen solusi (misalnya satu subjek mata kuliah), dan sekumpulan gene akan membentuk sebuah kromosom lalu sekumpulan kromosom menjadi individu (solusi lengkap / kromosom).

Tabel 4.10 Representasi tabel deskriptif atribut kelas Gene

| Nama Atribut | Tipe Data | Deskripsi |
| --- | --- | --- |
| subject_name | str | Nama mata kuliah. |
| subject_id | str | Kode unik mata kuliah. |
| semester | int | Semester penyelenggaraan mata kuliah. |
| sks | int | Bobot kredit (Satuan Kredit Semester). |
| capacity | int | Jumlah maksimum peserta yang dapat ditampung. |
| assistant | List[AssistantSchedule] | Daftar asisten beserta jadwal ketersediaannya. |
| preferred_lab | List[Room] | Daftar ruang/laboratorium yang sesuai atau direkomendasikan. |
| day_name | str | Nama hari pelaksanaan (misalnya Senin, Selasa). |
| day | int | Representasi numerik hari (misalnya 1-7). |
| start_time | int | Waktu mulai dalam format numerik (misalnya detik). |
| end_time | int | Waktu selesai dalam format numerik. |
| room_id | int | Identitas ruang yang digunakan. |
| group | str | Identitas kelompok atau kelas (misalnya kelas A, B). |
| prodi_id | str | Identitas program studi (opsional, default: string kosong). |
| id | str | Identitas unik berbasis UUID yang dihasilkan otomatis. |

Tabel 4.10 menujukkan informasi mengenai atribut-atribut yang digunakan dalam kelas *Gene*. Kumpulan atribut tersebut membentuk struktur data *Gene* yang merupakan unit solusi untuk penjadwalan yang akan dibangun.

**Struktur Data Kelas ****Room**

Kelas Room merupakan struktur data yang digunakan untuk merepresentasikan entitas ruangan atau laboratorium dalam sistem penjadwalan. Kelas ini didefinisikan menggunakan dekorator @dataclass, yang memungkinkan pendefinisian atribut secara deklaratif serta penyederhanaan pembuatan objek tanpa perlu implementasi metode konstruktor secara eksplisit.

Dalam konteks sistem penjadwalan, Room berfungsi sebagai representasi sumber daya fisik yang memiliki keterbatasan kapasitas dan identitas unik. Informasi yang tersimpan dalam kelas ini digunakan untuk memastikan bahwa alokasi ruangan pada suatu jadwal sesuai dengan kebutuhan mata kuliah, terutama dalam hal kapasitas peserta dan kesesuaian fasilitas.

Struktur ini juga mendukung proses validasi dalam algoritma penjadwalan, seperti:

- Pengecekan konflik penggunaan ruangan,

- Kesesuaian kapasitas dengan jumlah peserta,

- Serta pemetaan antara mata kuliah dan ruang yang tersedia.

Dengan demikian, kelas Room menjadi komponen penting dalam pemodelan sistem berbasis constraint, khususnya pada permasalahan penjadwalan akademik.

Tabel 4.11 Informasi atribut kelas Room

| Nama Atribut | Tipe Data | Deskripsi |
| --- | --- | --- |
| id | int | Identitas unik ruangan yang digunakan sebagai penanda utama. |
| room_name | str | Nama ruangan atau laboratorium. |
| room_capacity | int | Kapasitas maksimum ruangan dalam menampung peserta. |

Berdasarkan Tabel di atas, kelas Room terdiri atas tiga atribut utama yang merepresentasikan karakteristik dasar suatu ruangan. Atribut id berfungsi sebagai identitas unik yang memungkinkan sistem melakukan referensi dan pengelolaan data secara konsisten. Atribut room_name menyediakan informasi deskriptif mengenai nama ruangan, yang umumnya digunakan untuk keperluan identifikasi oleh pengguna atau dalam proses pelaporan.

Selanjutnya, atribut room_capacity memiliki peran krusial dalam proses penjadwalan, karena digunakan sebagai parameter pembatas (constraint) untuk memastikan bahwa jumlah peserta dalam suatu kegiatan tidak melebihi kapasitas ruangan yang tersedia. Dengan adanya atribut ini, sistem dapat melakukan validasi serta optimasi alokasi ruang secara lebih efektif.

Secara keseluruhan, struktur kelas Room dirancang secara sederhana namun fungsional, sehingga mampu mendukung kebutuhan sistem penjadwalan dalam mengelola sumber daya fisik secara efisien dan terorganisasi.

**Struktur Data Kelas ****Asisten**

Kelas AssistantSchedule merupakan struktur data yang digunakan untuk merepresentasikan jadwal ketersediaan asisten dalam sistem penjadwalan akademik. Kelas ini didefinisikan menggunakan dekorator @dataclass, sehingga memungkinkan penyimpanan data secara terstruktur, ringkas, dan mudah diolah.

Berbeda dengan entitas jadwal tunggal, kelas ini dirancang untuk menyimpan beberapa slot waktu sekaligus dalam bentuk list. Hal ini mencerminkan bahwa seorang asisten dapat memiliki lebih dari satu ketersediaan waktu dalam periode tertentu. Oleh karena itu, setiap atribut waktu dan hari direpresentasikan sebagai collection (list) untuk mendukung fleksibilitas dalam pemodelan.

Tabel 4.12 Informasi atribut kelas AssistantSchedule

| Nama Atribut | Tipe Data | Deskripsi |
| --- | --- | --- |
| id | str | Identitas unik asisten. |
| day_name | List[str] | Daftar nama hari ketersediaan (misalnya Senin, Selasa). |
| day | List[int] | Representasi numerik hari (misalnya 1-7) untuk setiap slot waktu. |
| start_time | List[int] | Daftar waktu mulai untuk setiap slot dalam format numerik (misalnya detik). |
| end_time | List[int] | Daftar waktu selesai untuk setiap slot dalam format numerik. |
| duration | List[int] | Durasi masing-masing slot waktu. |
| sks | List[int] | Beban SKS yang dapat ditangani pada masing-masing slot. |

Berdasarkan tabel di atas, kelas *AssistantSchedule* dirancang untuk merepresentasikan ketersediaan waktu asisten dalam bentuk multi-slot yang terstruktur. Atribut id berfungsi sebagai identitas unik untuk setiap asisten, sehingga memudahkan proses pelacakan dan pengelolaan dalam sistem. Atribut *day_name* dan *day* digunakan untuk merepresentasikan informasi hari dalam dua bentuk, yaitu format tekstual dan numerik. Pendekatan ini memberikan fleksibilitas dalam penggunaan data, baik untuk kebutuhan tampilan (*user interface*) maupun proses komputasi.

Selanjutnya, atribut start_time dan end_time menyimpan rentang waktu ketersediaan dalam format numerik, yang memungkinkan sistem melakukan perhitungan secara efisien, seperti deteksi konflik jadwal dan perhitungan durasi. Atribut duration memperjelas panjang waktu setiap slot, sehingga dapat digunakan dalam evaluasi kesesuaian dengan kebutuhan mata kuliah. 	Atribut sks merepresentasikan kapasitas beban kerja yang dapat ditangani oleh asisten pada setiap slot waktu. Hal ini penting dalam memastikan bahwa alokasi asisten tidak melebihi batas kemampuan yang ditentukan.

Secara keseluruhan, struktur AssistantSchedule mendukung representasi ketersediaan asisten yang fleksibel dan komprehensif, sehingga memungkinkan sistem penjadwalan untuk melakukan pencocokan (matching) dan optimasi secara lebih akurat terhadap berbagai kendala yang ada.

**Struktur Data Kelas ****Individual**

Kelas Individuals merupakan struktur data yang digunakan untuk merepresentasikan satu solusi kandidat dalam sistem penjadwalan berbasis algoritma genetika. Kelas ini mengandung atribut chromosome, yang berupa kumpulan objek Gene. Dalam konteks ini, setiap gene merepresentasikan satu unit jadwal (misalnya satu mata kuliah dengan atribut lengkap), sedangkan chromosome merepresentasikan keseluruhan jadwal yang dimiliki oleh satu individu.

Selain itu terdapat definisi tipe pada baris empat yang menunjukkan bahwa population merupakan sekumpulan individu. Dalam algoritma genetika, populasi ini digunakan sebagai ruang solusi yang akan dieksplorasi melalui proses seleksi, crossover, dan mutasi untuk memperoleh solusi optimal.

Tabel 4.13 Informasi atribut *Chromosome *dan tipe data *Population*

| Nama Atribut | Tipe Data | Deskripsi |
| --- | --- | --- |
| chromosome | List[Gene] | Kumpulan gene yang merepresentasikan satu solusi jadwal secara lengkap. |
| Population | List[Individuals] | Kumpulan individu yang membentuk populasi dalam algoritma genetika. |

Berdasarkan tabel di atas, kelas Individuals memiliki satu atribut utama yaitu chromosome, yang merupakan kumpulan objek Gene. Atribut ini berfungsi sebagai representasi dari keseluruhan jadwal yang dimiliki oleh satu individu dalam populasi. Setiap elemen dalam chromosome menyimpan informasi jadwal secara lengkap, sehingga kombinasi seluruh elemen tersebut membentuk solusi penjadwalan yang utuh.

Definisi tipe Population sebagai List[Individuals] menunjukkan bahwa sistem menggunakan pendekatan berbasis populasi, di mana beberapa solusi kandidat dievaluasi secara bersamaan. Pendekatan ini memungkinkan eksplorasi ruang solusi yang lebih luas serta meningkatkan peluang untuk menemukan solusi optimal melalui mekanisme evolusi.

### 4.2.2	*Fitness Function*

Modul fitness function diimplementasikan dalam modul *genetics* yang bertanggung jawab atas evaluasi kualitas setiap individu (jadwal) dalam populasi. Modul ini terdiri atas beberapa fungsi utama yang saling berkaitan untuk menghitung tingkat pelanggaran (constraint violations) dan menentukan skor fitness dari suatu solusi penjadwalan.

Blok kode berikut mendefinisikan fungsi _time_overlaps yang bertugas mendeteksi apakah dua gen (sesi praktikum) memiliki konflik waktu pada hari yang sama:

**Fungsi time overlaps**

Fungsi _time_overlaps merupakan fungsi utility internal yang digunakan oleh seluruh fungsi pendeteksi konflik. Mekanisme kerjanya didasarkan pada prinsip geometri interval: dua interval waktu [s1, e1] dan [s2, e2] dinyatakan bertumpang tindih (overlap) apabila max(s1, s2) < min(e1, e2). Fungsi ini terlebih dahulu melakukan pengecekan kesamaan hari pelaksanaan; apabila hari berbeda, kedua gen secara logis tidak mungkin berkonflik sehingga fungsi langsung mengembalikan nilai False.

Tabel 4.14 Parameter Fungsi _time_overlaps

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| g1 | Gene | Gen pertama yang akan dibandingkan waktu pelaksanaannya. |
| g2 | Gene | Gen kedua yang akan dibandingkan waktu pelaksanaannya. |
| Return | bool | Bernilai True jika kezdua gen memiliki tumpang tindih waktu pada hari yang sama, False jika sebaliknya. |

Fungsi ini menjadi fondasi kalkulasi seluruh jenis konflik penjadwalan, karena setiap pelanggaran pada dasarnya merupakan kondisi di mana dua entitas yang seharusnya tidak bersamaan ternyata terjadwal pada rentang waktu yang saling bersinggungan.

**Fungsi normalisasi grup**

Fungsi _normalize_group bertanggung jawab untuk membersihkan representasi string dari identitas kelompok kelas. Proses normalisasi ini meliputi penghapusan spasi berlebih (*whitespace*) di awal dan akhir string, serta penghapusan karakter koma (*comma*) di posisi akhir. Fungsi ini memastikan konsistensi data kelompok sehingga perbandingan antar grup dapat dilakukan secara akurat tanpa terganggu oleh perbedaan format penulisan.

**Fungsi Cek Konflik Ruangan (room_conflicts)**

Fungsi room_conflicts melakukan pendeteksian konflik penggunaan ruangan laboratorium. Mekanisme kerjanya menggunakan pendekatan *pairwise comparison* di mana setiap pasangan gen dalam satu kromosom diperiksa secara berpasangan. Konflik teridentifikasi apabila dua gen memiliki room_id yang identik dan terjadi tumpang tindih waktu pelaksanaan pada hari yang sama. Dalam konteks penjadwalan, konflik ruangan merupakan *hard constraint* dengan tingkat prioritas tertinggi, karena secara fisik satu ruangan tidak mungkin digunakan oleh dua kegiatan secara bersamaan.

Tabel 4.15 Parameter dan Output Fungsi room_conflicts

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| genes | Sequence[Gene] | Kumpulan gen (seluruh sesi praktikum) dalam satu kromosom individu. |
| Return | int | Jumlah total pasangan gen yang mengalami konflik penggunaan ruangan. |

Berdasarkan tabel tersebut, fungsi room_conflicts menerima satu kromosom penuh dan menghasilkan satu nilai agregat berupa total konflik ruangan. Nilai ini menjadi indikator langsung untuk menilai apakah satu solusi masih mengandung penggunaan laboratorium ganda pada waktu yang sama.

**Fungsi Cek Konflik Asisten**

Fungsi assistant_conflicts bertanggung jawab mendeteksi konflik jadwal asisten laboratorium. Berbeda dengan konflik ruangan yang langsung membandingkan seluruh pasangan gen, fungsi ini terlebih dahulu melakukan pengelompokan gen berdasarkan identitas asisten menggunakan struktur data defaultdict(list). Setiap asisten yang terdaftar pada suatu gen dipetakan ke dalam kamus (*dictionary*) dengan kunci berupa assistant.id. Selanjutnya, untuk setiap asisten, dilakukan pemeriksaan tumpang tindih waktu antar seluruh sesi yang ditugaskan kepadanya. Konflik terdeteksi apabila seorang asisten memiliki dua atau lebih sesi praktikum yang bertabrakan secara temporal.

Tabel 4.16 Parameter dan Output Fungsi assistant_conflicts

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| genes | Sequence[Gene] | Kumpulan gen (seluruh sesi praktikum) dalam satu kromosom individu. |
| Return | int | Jumlah total pasangan sesi yang mengalami konflik jadwal asisten. |

Berdasarkan tabel di atas, input fungsi assistant_conflicts tetap berupa satu kumpulan gen, tetapi fokus evaluasinya terletak pada ketersediaan asisten. Output fungsi memperlihatkan berapa kali seorang asisten ditempatkan pada dua sesi yang saling bertabrakan.

Tabel 4.17 Variabel Internal Fungsi assistant_conflicts

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| conflicts | int | Akumulator untuk menghitung jumlah konflik yang ditemukan. |
| assistant_map | Dict[str, List[Gene]] | Kamus yang memetakan setiap ID asisten ke daftar gen (sesi) yang ditugaskan kepadanya. |

Tabel variabel internal ini menunjukkan bahwa inti logika fungsi terletak pada proses pengelompokan sesi berdasarkan ID asisten. Dengan struktur assistant_map, sistem hanya membandingkan sesi-sesi yang benar-benar dimiliki oleh asisten yang sama, sehingga perhitungan konflik menjadi lebih terarah.

**Fungsi Cek Konflik Grup (group_conflicts)**

Fungsi group_conflicts mendeteksi konflik antar kelas paralel yang memiliki rombongan mahasiswa yang sama. Fungsi ini mengelompokkan gen berdasarkan kunci komposit yang terdiri atas tiga atribut: prodi_id (program studi), semester, dan group (kode kelas). Pendekatan ini memastikan bahwa hanya mata kuliah dari program studi yang sama, semester yang sama, dan kode kelas yang identik yang dianggap sebagai satu rombongan belajar. Dengan demikian, dua mata kuliah dari program studi yang berbeda meskipun memiliki kode kelas yang sama tidak akan dihitung sebagai konflik.

Setelah pengelompokan, dilakukan pemeriksaan *pairwise* terhadap seluruh anggota setiap kelompok untuk mendeteksi tumpang tindih waktu. Konflik kelas paralel ini termasuk dalam kategori *constraint* penting karena mahasiswa dalam satu rombongan tidak dapat menghadiri dua kegiatan praktikum secara bersamaan.

Tabel 4.18 Parameter dan Output Fungsi group_conflicts

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| genes | Sequence[Gene] | Kumpulan gen (seluruh sesi praktikum) dalam satu kromosom individu. |
| Return | int | Jumlah total pasangan sesi yang mengalami konflik jadwal kelas paralel. |

Berdasarkan tabel ini, fungsi group_conflicts bekerja pada level rombongan mahasiswa, bukan level ruangan atau asisten. Nilai keluarannya menunjukkan seberapa sering kelompok mahasiswa yang sama ditempatkan pada dua sesi yang saling bertabrakan.

Tabel 4.19 Variabel Internal Fungsi group_conflicts

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| conflicts | int | Akumulator jumlah konflik yang ditemukan. |
| group_map | Dict[Tuple[str, str, str], List[Gene]] | Kamus yang memetakan setiap kunci komposit (prodi, semester, kelas) ke daftar gen terkait. |
| grp | str | Hasil normalisasi atribut group dari setiap gen. |
| key | Tuple[str, str, str] | Kunci komposit berupa tuple yang terdiri dari prodi_id, semester, dan group. |

Melalui tabel ini terlihat bahwa pendeteksian konflik group tidak dilakukan hanya berdasarkan nama kelas secara sederhana. Sistem menggunakan kunci komposit agar konflik hanya dihitung pada rombongan yang benar-benar identik secara akademik.

**Fungsi Kalkulasi Penalti**

Fungsi calculate_penalties merupakan fungsi agregator yang menghimpun seluruh jenis konflik ke dalam satu struktur data terorganisasi berupa *dictionary*. Fungsi ini mengekstrak kromosom dari objek individu, kemudian memanggil ketiga fungsi deteksi konflik secara berurutan dan mengembalikan hasilnya dalam bentuk kamus dengan kunci "room", "assistant", dan "group".

Tabel 4.20 Parameter dan Output Fungsi calculate_penalties

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| individual | Individuals | Objek individu yang mengandung kromosom berupa daftar gen. |
| Return | Dict[str, int] | Kamus berisi jumlah konflik untuk setiap kategori: ruangan (room), asisten (assistant), dan kelas paralel (group). |

Berdasarkan tabel di atas, output fungsi calculate_penalties menyediakan informasi granular mengenai komposisi pelanggaran yang terjadi pada suatu individu. Informasi ini tidak hanya digunakan untuk menghitung skor fitness, tetapi juga bermanfaat dalam proses *debugging*, pelaporan, dan analisis performa algoritma secara keseluruhan.

**Fungsi Kalkulasi Skor Fitness (calculate_fitness)**

Fungsi calculate_fitness merupakan fungsi inti (*core function*) dalam proses evaluasi solusi pada Algoritma Genetika. Fungsi ini mengintegrasikan seluruh hasil deteksi konflik ke dalam satu nilai numerik yang merepresentasikan kualitas suatu individu. Proses kalkulasinya terdiri atas dua tahapan utama:

- Setiap kategori konflik diberikan bobot yang. Formulasi matematisnya adalah:

- Skor penalti ditransformasikan menjadi nilai fitness menggunakan rumus inversi:

Rumus ini memastikan bahwa nilai fitness selalu berada dalam rentang (0, 1], di mana skor mendekati 1.0 menandakan jadwal yang semakin optimal (tanpa atau minim konflik), dan skor mendekati 0 menandakan jadwal dengan banyak pelanggaran. Apabila tidak terdapat konflik sama sekali (Penalty = 0), maka Fitness = 1 / (1 + 0) = 1.0, yang merepresentasikan solusi optimal.

Tabel 4.21 Parameter dan Output Fungsi calculate_fitness

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| individual | Individuals | Objek individu yang akan dievaluasi kualitasnya. |
| Return (elemen 1) | float | Skor fitness individu dalam rentang (0, 1]. |
| Return (elemen 2) | float | Total skor penalti berbobot yang dihitung dari seluruh jenis konflik. |
| Return (elemen 3) | Dict[str, int] | Rincian jumlah konflik per kategori (ruangan, asisten, kelas). |

Tabel parameter dan output ini menunjukkan bahwa fungsi calculate_fitness tidak hanya menghasilkan satu skor akhir, tetapi juga mengembalikan total penalti dan rincian konflik. Dengan demikian, evaluasi jadwal tetap transparan karena nilai fitness dapat ditelusuri kembali ke sumber pelanggarannya.

### 4.2.3	*Crossover*

**Proses Klasik**

Proses crossover pada Algoritma Genetika klasik merupakan mekanisme reproduksi yang bertujuan menghasilkan individu baru (offspring) melalui pertukaran materi genetik antar individu induk (parent). Pada sistem penjadwalan ini, crossover diimplementasikan melalui dua tahap utama: seleksi induk menggunakan metode Roulette Wheel Selection dan rekombinasi menggunakan mekanisme Single-Point Crossover. Seluruh implementasi terdapat pada modul crossover, sementara orkestrasi proses dilakukan oleh runner pada modul klasik.

**Fungsi Seleksi Parent**

Fungsi select_parents mengimplementasikan mekanisme seleksi *Roulette Wheel* (*proportionate selection*) yang merupakan metode seleksi klasik dalam Algoritma Genetika. Prinsip kerjanya dianalogikan dengan roda roulette di mana setiap individu dalam populasi memperoleh proporsi area roda yang sebanding dengan nilai fitness-nya. Individu dengan fitness lebih tinggi akan memperoleh area yang lebih luas, sehingga probabilitas terpilihnya lebih besar.

Secara algoritmik, proses seleksi dimulai dengan menghitung total akumulasi nilai fitness seluruh individu dalam populasi. Apabila total fitness bernilai kurang dari atau sama dengan nol, yang mengindikasikan kondisi populasi anomaly, maka seleksi dilakukan secara acak dengan distribusi seragam (*uniform random*) untuk menghindari pembagian dengan nol. Pada kondisi normal, untuk setiap slot seleksi, dihasilkan bilangan acak dalam rentang [0, total) yang kemudian dipetakan ke individu tertentu melalui proses akumulasi berurutan (*cumulative sum*). Individu yang interval kumulatifnya mencakup bilangan acak tersebut akan terpilih.

Mekanisme seleksi ini bersifat *with replacement*, yang berarti satu individu dapat terpilih lebih dari satu kali. Hal ini memungkinkan individu dengan kualitas tinggi untuk berkontribusi lebih banyak dalam proses reproduksi, sekaligus tetap memberikan kesempatan bagi individu dengan fitness rendah untuk berpartisipasi, meskipun dengan probabilitas yang lebih kecil. Pendekatan ini menjaga keseimbangan antara *selection pressure* dan keragaman genetik populasi.

Tabel 4.22 Parameter dan Output Fungsi select_parents

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| population | List[Individuals] | Daftar seluruh individu dalam populasi yang akan diseleksi. |
| fitnesses | List[float] | Daftar nilai fitness yang bersesuaian dengan setiap individu dalam populasi. |
| Return | List[Tuple[Individuals, int, float]] | Daftar individu terpilih, masing-masing berupa tuple yang berisi objek individu, indeks posisi (1-indexed), dan nilai fitness-nya. |

Tabel ini menunjukkan bahwa proses seleksi tidak hanya memilih individu, tetapi juga mempertahankan metadata penting berupa indeks dan fitness asalnya. Informasi tambahan ini berguna pada tahap berikutnya untuk pelacakan dan evaluasi hasil crossover.

Tabel 4.23 Variabel Internal Fungsi select_parents

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| total | float | Akumulasi total nilai fitness seluruh individu dalam populasi. |
| selected | List[Tuple[...]] | Daftar akumulator untuk menyimpan hasil seleksi. |
| pick | float | Bilangan acak yang menentukan posisi pemilihan pada roda roulette. |
| accumulator | float | Variabel akumulasi untuk menjumlahkan fitness secara berurutan hingga mencapai nilai pick. |
| idx | int | Indeks individu yang terpilih berdasarkan hasil seleksi. |

Variabel internal pada tabel ini memperlihatkan bahwa Roulette Wheel Selection bekerja melalui akumulasi probabilitas berbobot. Dengan mekanisme tersebut, individu ber-fitness tinggi memperoleh peluang lebih besar tanpa meniadakan kemungkinan individu lain untuk tetap terpilih.

**Fungsi Crossover**

Fungsi single_point_crossover mengimplementasikan mekanisme *Single-Point Crossover* yang merupakan teknik rekombinasi fundamental dalam Algoritma Genetika. Prinsip kerjanya adalah memilih satu titik potong (*crossover point*) secara acak pada kromosom, kemudian menukarkan segmen gen di sebelah kanan titik potong antara dua induk untuk membentuk dua keturunan baru.

Proses dimulai dengan melakukan *deep copy* terhadap seluruh gen dari kedua induk guna menjamin integritas data induk tetap terjaga. Selanjutnya ditentukan panjang minimum dari kedua kromosom (min_len). Apabila panjang minimum kurang dari 2, yang berarti kromosom terlalu pendek untuk dipotong, maka proses crossover tidak dilakukan dan kedua induk langsung di-*repair* untuk memastikan validitas struktural.

Pada kondisi normal, titik potong ditentukan secara acak dalam rentang [1, min_len - 1] menggunakan fungsi random.randint. Pembatasan rentang ini memastikan bahwa setiap anak mewarisi setidaknya satu gen dari masing-masing induk, sehingga pertukaran genetik benar-benar terjadi. Setelah pertukaran segmen, setiap keturunan diproses melalui fungsi repair_individual yang bertanggung jawab memastikan bahwa kromosom hasil crossover tetap valid, yaitu memenuhi jumlah gen yang diharapkan (*target_size*), tidak mengandung duplikasi, dan memperoleh perbaikan waktu serta ruangan apabila diperlukan.

Tabel 4.24 Parameter dan Output Fungsi single_point_crossover

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| parent_a | Individuals | Induk pertama yang akan disilangkan. |
| parent_b | Individuals | Induk kedua yang akan disilangkan. |
| Return | Tuple[Individuals, Individuals] | Dua individu keturunan (child) hasil rekombinasi kromosom kedua induk. |

Tabel parameter ini menegaskan bahwa single-point crossover selalu bekerja pada pasangan dua induk dan mengembalikan dua keturunan. Pola ini sesuai dengan konsep rekombinasi dua arah yang umum digunakan pada Algoritma Genetika klasik.

Tabel 4.25 Variabel Internal Fungsi single_point_crossover

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| genes_a | List[Gene] | Salinan mendalam (deep copy) dari seluruh gen induk pertama. |
| genes_b | List[Gene] | Salinan mendalam dari seluruh gen induk kedua. |
| min_len | int | Panjang minimum antara kromosom kedua induk, digunakan untuk menentukan batas titik potong. |
| point | int | Posisi titik potong yang ditentukan secara acak. |
| child1 | Individuals | Keturunan pertama hasil gabungan genes_a[:point] dan genes_b[point:] setelah diperbaiki. |
| child2 | Individuals | Keturunan kedua hasil gabungan genes_b[:point] dan genes_a[point:] setelah diperbaiki. |

Tabel variabel internal ini menunjukkan bahwa titik potong (point) menjadi pusat dari seluruh proses rekombinasi. Setelah pertukaran segmen dilakukan, kedua anak tetap harus melewati tahap perbaikan agar struktur kromosomnya tetap valid.

Pada modul klasik, proses crossover diorkestrasi melalui fungsi run_iteration dan _process_crossover_pair:

**Fungsi *****Crossover Pair *****(_process_crossover_pair)**

Fungsi _process_crossover_pair merupakan *worker function* yang dirancang untuk memproses satu pasangan crossover secara paralel menggunakan ProcessPoolExecutor. Fungsi ini menerima parameter dalam bentuk tuple yang telah dikemas (*packed*) untuk memenuhi persyaratan *multiprocessing*.

Proses dimulai dengan penentuan apakah pasangan tersebut benar-benar akan melalui crossover atau tidak, berdasarkan parameter should_cross. Keputusan ini diambil di tingkat orkestrasi berdasarkan *crossover rate* yang pada mode klasik merupakan nilai statis yang ditetapkan oleh pengguna (default: 1.0). Apabila crossover dipilih untuk dilakukan, fungsi single_point_crossover dipanggil untuk menghasilkan dua keturunan. Sebaliknya, apabila crossover tidak terjadi, kedua induk langsung di-*deep copy* dan diperbaiki melalui repair_individual.

Setelah keturunan terbentuk, setiap anak dievaluasi menggunakan calculate_fitness dan kemudian diproses melalui mekanisme anti_degeneration yang membandingkan kualitas keturunan dengan induk terbaiknya. Mekanisme ini bertujuan untuk mencegah degradasi kualitas populasi, meskipun pada implementasi saat ini fitur tersebut dinonaktifkan (*disabled*) untuk keperluan evaluasi.

Pada mode klasik, *crossover rate* bersifat statis sepanjang seluruh iterasi evolusi. Nilai ini ditentukan oleh pengguna melalui parameter --crossover-rate dan digunakan secara konsisten tanpa penyesuaian dinamis. Hal ini merupakan perbedaan fundamental dengan mode fuzzy yang akan dibahas pada bagian selanjutnya.

Tabel 4.26 Parameter Fungsi _process_crossover_pair

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| parent_a | Individuals | Induk pertama yang terpilih dari seleksi roulette wheel. |
| parent_b | Individuals | Induk kedua yang dipasangkan dengan induk pertama. |
| should_cross | bool | Indikator apakah crossover akan dilakukan berdasarkan probabilitas crossover rate. |
| target_size | int | Jumlah gen yang diharapkan pada kromosom keturunan. |
| best_parent | Individuals | Salinan induk terbaik dari pasangan ini untuk mekanisme anti-degeneration. |
| best_pre | float | Nilai fitness dari induk terbaik sebagai referensi perbandingan. |
| best_parent_penalty | float | Skor penalti dari induk terbaik. |
| best_parent_penalties | dict | Rincian penalti per kategori dari induk terbaik. |
| best_idx | int | Indeks posisi induk terbaik dalam populasi. |
| seeder_map | dict | Pemetaan indeks individu ke file output seeder. |
| max_children | int | Jumlah maksimum keturunan yang dihasilkan dari pasangan ini. |

Tabel ini memperlihatkan bahwa worker crossover di level runner membawa konteks yang lebih kaya daripada fungsi rekombinasi murni. Selain parent dan target size, fungsi juga membawa informasi kualitas parent terbaik agar offspring dapat langsung dibandingkan terhadap kondisi sebelumnya.

**Implementasi Fuzzy**

Implementasi fuzzy logic pada proses crossover bertujuan untuk menggantikan parameter crossover rate yang bersifat statis pada Algoritma Genetika klasik menjadi parameter adaptif yang menyesuaikan diri berdasarkan kondisi populasi secara real-time. Variabel input yang digunakan adalah *Population Diversity* yang dikuantifikasi melalui standar deviasi (standard deviation) dari nilai fitness seluruh individu dalam populasi. Seluruh logika fuzzy untuk crossover diimplementasikan pada fungsi **get_adaptive_crossover_rate**.

**Fungsi *****Crossover Rate***** Adaptif**

Fungsi get_adaptive_crossover_rate mengimplementasikan Fuzzy Inference System (FIS) tipe Sugeno untuk menentukan *crossover rate* adaptif berdasarkan tingkat keragaman (*diversity*) populasi. Proses ini terdiri atas tiga tahapan utama yang merupakan inti dari penalaran fuzzy: fuzzifikasi, inferensi, dan defuzzifikasi.

**Tahap 1 Kalkulasi Input**

Variabel input yang digunakan adalah standar deviasi dari seluruh nilai fitness populasi yang dihitung menggunakan fungsi statistics.stdev. Standar deviasi dipilih sebagai proksi keragaman karena mampu mengkuantifikasi dispersi nilai fitness secara statistik. Standar deviasi yang rendah mengindikasikan populasi yang homogen (cenderung konvergen prematur), sedangkan standar deviasi yang tinggi menunjukkan populasi yang beragam.

Apabila populasi hanya terdiri atas satu individu (len < 2), fungsi langsung mengembalikan *crossover rate* sebesar 0.9 sebagai nilai *fallback* untuk mendorong eksplorasi maksimal.

**Tahap 2 Fuzzifikasi **

Nilai standar deviasi ditransformasikan ke dalam tiga himpunan fuzzy linguistik: LOW, MEDIUM, dan HIGH. Setiap himpunan menggunakan fungsi keanggotaan (*membership function*) dengan karakteristik sebagai berikut:

- **LOW**: Fungsi segitiga/trapesium turun pada rentang [0.00, 0.05], menghasilkan derajat keanggotaan tinggi ketika standar deviasi kecil.

- **MEDIUM**: Fungsi segitiga pada rentang [0.02, 0.05, 0.08], memberikan derajat keanggotaan tertinggi pada titik tengah 0.05.

- **HIGH**: Fungsi trapesium naik mulai dari 0.05, mencapai saturasi penuh pada 0.10 dan di atasnya.

**Tahap 3 Inferensi **

Setelah fuzzifikasi, diterapkan basis aturan (*rule base*) berjumlah tiga aturan IF-THEN yang menghubungkan tingkat keragaman populasi dengan keputusan *crossover rate*. Logika aturan ini bersifat inversi: semakin rendah keragaman, semakin tinggi crossover rate yang diperlukan untuk meningkatkan eksplorasi dan mencegah konvergensi prematur.

**Tahap 4 Defuzzifikasi **

Metode *Weighted Average* (Rata-rata Terbobot) digunakan untuk menghitung nilai crisp akhir crossover rate:

di mana μᵢ adalah derajat keanggotaan hasil fuzzifikasi dan zᵢ adalah nilai crisp output dari setiap aturan.

Tabel 4.27 Parameter dan Output Fungsi get_adaptive_crossover_rate

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| fitness_values | List[float] | Daftar nilai fitness seluruh individu dalam populasi pada iterasi terkini. |
| Return (elemen 1) | float | Nilai crossover rate adaptif yang telah dihitung melalui proses fuzzy, berada dalam rentang [0.30, 0.90]. |
| Return (elemen 2) | dict | Kamus detail yang berisi seluruh informasi proses fuzzy meliputi input, fuzzifikasi, inferensi, dan defuzzifikasi. |

Tabel ini memperlihatkan bahwa fungsi fuzzy crossover hanya membutuhkan distribusi fitness populasi sebagai input utama, tetapi mengembalikan dua keluaran sekaligus: nilai cr untuk eksekusi algoritma dan details untuk kebutuhan analisis proses fuzzy.

Tabel 4.28 Variabel Internal Fungsi get_adaptive_crossover_rate

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| std_dev | float | Standar deviasi dari seluruh nilai fitness populasi, berfungsi sebagai input crisp untuk proses fuzzifikasi. |
| mu_low | float | Derajat keanggotaan pada himpunan fuzzy LOW (populasi homogen). |
| mu_med | float | Derajat keanggotaan pada himpunan fuzzy MEDIUM (populasi variasi cukup). |
| mu_high | float | Derajat keanggotaan pada himpunan fuzzy HIGH (populasi beragam). |
| numerator | float | Pembilang dalam rumus defuzzifikasi, merupakan jumlah kontribusi seluruh aturan (Σ μᵢ × zᵢ). |
| denominator | float | Penyebut dalam rumus defuzzifikasi, merupakan total derajat keanggotaan (Σ μᵢ). |
| cr | float | Nilai akhir crossover rate adaptif hasil defuzzifikasi. |
| details | dict | Struktur data yang menyimpan seluruh detail proses fuzzy untuk keperluan logging dan visualisasi. |

Variabel-variabel dalam tabel ini menunjukkan tahapan internal yang harus dilalui sebelum nilai cr final diperoleh. Mulai dari input statistik populasi, derajat keanggotaan, hingga agregasi defuzzifikasi, seluruhnya membentuk alur keputusan crossover adaptif yang lengkap.

Tabel 4.29 Fungsi Keanggotaan untuk Input Diversity

| Himpunan Fuzzy | Tipe Fungsi | Rentang | Definisi Rumus |
| --- | --- | --- | --- |
| LOW | Trapesium Turun | 0.00 - 0.05 | μ = 1 untuk x ≤ 0; μ = (0.05 - x) / 0.05 untuk 0 < x < 0.05; μ = 0 untuk x ≥ 0.05 |
| MEDIUM | Segitiga | 0.02 - 0.08 | μ = 0 untuk x ≤ 0.02 atau x ≥ 0.08; μ = (x - 0.02) / 0.03 untuk 0.02 < x < 0.05; μ = (0.08 - x) / 0.03 untuk 0.05 ≤ x < 0.08 |
| HIGH | Trapesium Naik | > 0.05 | μ = 0 untuk x ≤ 0.05; μ = (x - 0.05) / 0.05 untuk 0.05 < x < 0.10; μ = 1 untuk x ≥ 0.10 |

Tabel di atas menunjukkan perancangan fungsi keanggotaan fuzzy untuk mengkuantifikasi keragaman populasi berdasarkan standar deviasi fitness. Pemilihan rentang dan bentuk fungsi ini didasarkan pada observasi empiris terhadap distribusi nilai standar deviasi yang lazim muncul selama proses evolusi. Kategori LOW dan MEDIUM menggunakan fungsi segitiga/trapesium turun karena merepresentasikan kondisi transisi yang berubah secara bertahap. Kategori HIGH menggunakan fungsi trapesium naik karena setelah melewati ambang batas tertentu, populasi dianggap sudah cukup beragam dan keanggotaannya dipertahankan stabil pada μ = 1.

Tabel 4.30 Basis Aturan Fuzzy untuk Penentuan Crossover Rate

| No | Kondisi (IF) | Output (THEN) | Nilai Crisp | Makna |
| --- | --- | --- | --- | --- |
| R1 | Diversity = LOW | Cr = HIGH | 0.90 | Populasi mulai konvergen, diperlukan crossover tinggi untuk memperluas eksplorasi. |
| R2 | Diversity = MEDIUM | Cr = MEDIUM | 0.60 | Keragaman cukup, crossover moderat untuk menjaga keseimbangan eksplorasi-eksploitasi. |
| R3 | Diversity = HIGH | Cr = LOW | 0.30 | Populasi sudah sangat beragam, crossover diturunkan untuk mempertahankan pola solusi yang baik. |

Berdasarkan tabel basis aturan di atas, dapat diamati bahwa hubungan antara diversity dan crossover rate bersifat inversi (*inverse relationship*). Prinsip ini didasarkan pada teori keseimbangan eksplorasi-eksploitasi dalam metaheuristik: ketika populasi homogen, diperlukan intervensi agresif (Cr tinggi) untuk menghasilkan variasi baru; sedangkan ketika populasi sudah cukup beragam, eksplorasi berlebihan justru dapat merusak struktur solusi yang telah terbentuk dengan baik.

Tabel 4.31 Nilai Crisp untuk Crossover Rate

| Label Cr | Nilai Crisp | Deskripsi |
| --- | --- | --- |
| LOW | 0.30 | Crossover rendah, mempertahankan eksploitasi terhadap solusi yang sudah baik. |
| MEDIUM | 0.60 | Crossover moderat, menjaga keseimbangan antara eksplorasi dan eksploitasi. |
| HIGH | 0.90 | Crossover tinggi, mendorong eksplorasi agresif untuk menghindari konvergensi prematur. |

Tabel nilai crisp ini menjadi jembatan antara keluaran linguistik fuzzy dan parameter numerik yang benar-benar dipakai pada runner. Dengan tiga level nilai tersebut, kondisi populasi dapat diterjemahkan menjadi intensitas crossover yang jelas dan terukur.

Pada modul *fuzzy*, *adaptive crossover rate* dipanggil dalam fungsi run_iteration sebagai pengganti parameter statis:

| adaptive_cr, fuzzy_cr_details | = | fuzzy_logic.get_adaptive_crossover_rate(<br>	fitness_values<br>) |
| --- | --- | --- |

Nilai adaptive_cr kemudian digunakan untuk menentukan apakah suatu pasangan induk akan menjalani crossover:

should_cross = (

random.random() < adaptive_cr

and min(len(parent_a.chromosome), len(parent_b.chromosome)) > 1

and pair_idx + 1 < len(parents))

Berbeda dengan mode klasik yang menggunakan crossover_rate statis, mode fuzzy secara dinamis menghitung ulang adaptive_cr pada setiap iterasi berdasarkan kondisi populasi terkini, sehingga proses evolusi menjadi lebih responsif dan adaptif terhadap dinamika pencarian solusi.

def triangle(x: float, a: float, b: float, c: float) -> float:

"""Triangular membership function."""

if x <= a or x >= c:

return 0.0

if a < x <= b:

return (x - a) / (b - a)

if b < x < c:

return (c - x) / (c - b)

return 0.0

def trapezoid(x: float, a: float, b: float, c: float, d: float) -> float:

"""Trapezoidal membership function."""

if x <= a or x >= d:

return 0.0

if a < x <= b:

return (x - a) / (b - a)

if b < x < c:

return 1.0

if c <= x < d:

return (d - x) / (d - c)

return 0.0

Kedua fungsi triangle dan trapezoid merupakan implementasi fungsi keanggotaan fuzzy yang menjadi fondasi matematis dari seluruh proses fuzzifikasi dalam sistem. Fungsi segitiga (*triangular*) menghasilkan kurva berbentuk segitiga dengan tiga parameter (a, b, c) yang menentukan batas kiri, titik puncak, dan batas kanan. Fungsi trapesium (*trapezoidal*) menghasilkan kurva berbentuk trapesium dengan empat parameter (a, b, c, d) yang mendefinisikan dua fase naik, satu fase plateau, dan satu fase turun. Pemilihan fungsi-fungsi ini didasarkan pada kemampuannya merepresentasikan transisi derajat keanggotaan secara linear yang efisien secara komputasi (Azam dkk., 2020).

Tabel 4.32 Parameter Fungsi Keanggotaan Fuzzy

| Nama Fungsi | Parameter | Tipe Data | Deskripsi |
| --- | --- | --- | --- |
| triangle | x | float | Nilai input yang akan dievaluasi derajat keanggotaannya. |
| triangle | a | float | Batas kiri fungsi segitiga (derajat keanggotaan = 0). |
| triangle | b | float | Titik puncak fungsi segitiga (derajat keanggotaan = 1). |
| triangle | c | float | Batas kanan fungsi segitiga (derajat keanggotaan = 0). |
| trapezoid | x | float | Nilai input yang akan dievaluasi. |
| trapezoid | a | float | Batas kiri fungsi trapesium (awal fase naik). |
| trapezoid | b | float | Awal fase plateau (derajat keanggotaan mencapai 1). |
| trapezoid | c | float | Akhir fase plateau (awal fase turun). |
| trapezoid | d | float | Batas kanan fungsi trapesium (derajat keanggotaan kembali ke 0). |

Tabel parameter fungsi keanggotaan ini menegaskan bahwa bentuk kurva fuzzy sepenuhnya ditentukan oleh batas-batas numerik yang eksplisit. Perubahan pada parameter tersebut akan langsung memengaruhi sensitivitas sistem terhadap variasi nilai input.

### 4.2.4	*Mutation*

**Proses Klasik**

Proses mutasi pada Algoritma Genetika berfungsi sebagai mekanisme eksplorasi yang memperkenalkan variasi acak pada kromosom individu setelah tahap crossover. Mutasi berperan krusial dalam menjaga keragaman genetik populasi, mencegah konvergensi prematur, dan memperluas ruang pencarian solusi. Pada konteks penjadwalan laboratorium, mutasi diimplementasikan melalui modifikasi atribut temporal (hari dan waktu) serta spasial (ruangan) dari gen-gen individual. Implementasi mutasi terdapat pada modul mutasi.

**Fungsi Identifikais Slot Waktu Valid (_candidate_slots)**

Fungsi _candidate_slots bertanggung jawab untuk mengidentifikasi seluruh slot waktu yang valid dan tersedia untuk suatu gen berdasarkan hari pelaksanaan dan durasi kegiatan. Proses dimulai dengan normalisasi durasi kegiatan ke dalam salah satu dari tiga kategori standar: 2 jam, 3 jam, atau 4 jam. Normalisasi ini memastikan kesesuaian dengan daftar slot waktu yang telah didefinisikan dalam konfigurasi seeder (seeder.SLOTS).

Selanjutnya, fungsi ini memfilter slot waktu yang bertabrakan dengan *forbidden windows*, yaitu jendela waktu terlarang yang telah ditetapkan (misalnya waktu istirahat sholat Jumat pukul 12:00-13:00). Hanya slot waktu yang tidak bersinggungan dengan rentang yang dilarang yang dikembalikan sebagai kandidat valid. Pendekatan ini memastikan bahwa setiap mutasi waktu yang dilakukan tetap mematuhi batasan operasional laboratorium.

Tabel 4.33 Parameter dan Output Fungsi _candidate_slots

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| day_idx | int | Indeks hari dalam seminggu (0 = Senin, 1 = Selasa, dst.) yang akan diperiksa ketersediaan slotnya. |
| duration_seconds | int | Durasi kegiatan dalam satuan detik yang akan dinormalisasi ke kategori jam standar. |
| Return | List[Tuple[int, int]] | Daftar slot waktu valid berupa tuple (start_time, end_time) dalam format detik. |

Tabel ini menunjukkan bahwa fungsi _candidate_slots berperan sebagai penyaring awal sebelum mutasi waktu benar-benar dilakukan. Outputnya bukan satu slot final, melainkan himpunan kandidat valid yang nantinya dapat dipilih secara acak oleh operator mutasi.

Tabel 4.34 Variabel Internal Fungsi _candidate_slots

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| duration_hours | int | Durasi kegiatan setelah normalisasi ke kategori standar (2, 3, atau 4 jam). |
| slots | List[Tuple[int, int]] | Seluruh slot waktu yang tersedia untuk durasi tertentu dari konfigurasi seeder. |
| forbidden | List[Tuple[int, int]] | Daftar jendela waktu terlarang untuk hari tertentu. |

Variabel-variabel pada tabel ini memperlihatkan bahwa fungsi kandidat slot bekerja melalui dua lapisan validasi, yaitu kesesuaian durasi dan kepatuhan terhadap jendela waktu terlarang. Karena itu, slot yang dihasilkan sudah relatif aman sebelum diterapkan pada gen.

**Fungsi Mutasi Atribut Temporal**

Fungsi _mutate_day_time melakukan mutasi terhadap atribut temporal suatu gen, yang meliputi perubahan hari pelaksanaan dan rentang waktu praktikum. Proses dimulai dengan menghitung durasi kegiatan saat ini dari selisih end_time dan start_time. Apabila durasi bernilai tidak valid (≤ 0), maka digunakan durasi *fallback* sebesar 2 jam (7200 detik).

Selanjutnya, fungsi mengonstruksi daftar hari kandidat berdasarkan konfigurasi hari aktif yang diperoleh dari database (DAY_NAMES). Daftar ini diacak (*shuffled*) untuk memperkenalkan keacakan dalam pemilihan hari. Untuk setiap hari kandidat, fungsi memeriksa ketersediaan slot waktu yang valid melalui _candidate_slots. Apabila ditemukan slot yang tersedia, salah satu slot dipilih secara acak dan atribut gen diperbarui. Proses berhenti segera setelah penempatan berhasil.

Apabila tidak ditemukan slot valid pada seluruh hari kandidat, suatu kondisi yang sangat jarang terjadi, maka fungsi menggunakan mekanisme *fallback* dengan menempatkan gen pada hari Senin menggunakan slot pertama dari durasi 2 jam. Mekanisme ini menjamin bahwa proses mutasi selalu menghasilkan nilai yang valid dan tidak menyebabkan kegagalan komputasi.

Tabel 4.35 Parameter Fungsi _mutate_day_time

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| gene | Gene | Objek gen yang atribut temporalnya (hari, waktu mulai, waktu selesai) akan dimutasi secara in-place. |

Tabel parameter ini menegaskan bahwa _mutate_day_time bekerja langsung pada satu unit gen, bukan pada seluruh individu sekaligus. Perubahan dilakukan secara lokal pada sesi praktikum yang dipilih.

Tabel 4.36 Variabel Internal Fungsi _mutate_day_time

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| duration | int | Durasi kegiatan dalam detik, dihitung dari selisih waktu mulai dan selesai. |
| day_candidates | List[int] | Daftar indeks hari aktif yang diacak untuk pemilihan acak. |
| slots | List[Tuple[int, int]] | Slot waktu valid yang tersedia untuk suatu hari tertentu. |
| start, end | int | Waktu mulai dan selesai dari slot yang terpilih untuk mutasi. |

Tabel ini memperlihatkan bahwa mutasi hari dan waktu tetap mengikuti alur yang terkontrol: pilih hari aktif, cari slot yang valid, lalu sampling satu slot secara acak. Dengan cara ini, perubahan tetap eksploratif tetapi tidak keluar dari aturan jadwal.

**Fungsi Mutasi Ruangan**

Fungsi _mutate_room melakukan mutasi terhadap atribut spasial suatu gen, yaitu mengganti ruangan yang digunakan untuk pelaksanaan praktikum. Proses ini mempertimbangkan preferensi ruangan yang telah ditetapkan untuk setiap mata kuliah. Apabila gen memiliki daftar ruangan yang direkomendasikan (preferred_lab), maka pemilihan dilakukan secara acak dari daftar tersebut. Hal ini memastikan bahwa mutasi ruangan tetap menghasilkan penempatan yang sesuai dengan kebutuhan fasilitas mata kuliah.

Apabila tidak terdapat preferensi ruangan, fungsi memilih secara acak dari seluruh ruangan yang tersedia dalam sistem (seeder.Rooms). Pendekatan bertahap ini meminimalkan risiko penempatan ruangan yang tidak sesuai sambil tetap memperkenalkan variasi yang diperlukan untuk eksplorasi ruang pencarian.

Tabel 4.37 Parameter Fungsi _mutate_room

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| gene | Gene | Objek gen yang atribut room_id-nya akan dimutasi secara in-place. |

Tabel ini menunjukkan bahwa _mutate_room adalah fungsi yang sangat spesifik karena hanya mengubah satu atribut ruang pada satu gen. Kesederhanaan ini membuatnya mudah dikombinasikan dengan mutasi waktu tanpa menambah kompleksitas berlebih.

Tabel 4.38 Variabel Internal Fungsi _mutate_room

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| preferred | List[int] | Daftar ID ruangan yang direkomendasikan untuk mata kuliah tertentu. |

Melalui tabel ini terlihat bahwa keputusan mutasi ruang tetap dibatasi oleh preferensi laboratorium yang sudah dibentuk sebelumnya pada tahap preprocessing. Artinya, eksplorasi ruangan tetap menjaga konteks kelayakan mata kuliah terkait.

**Fungsi Mutasi Individu**

Fungsi mutate_individual merupakan fungsi utama (*entry point*) untuk melakukan mutasi terhadap satu individu dalam populasi. Fungsi ini mengimplementasikan mekanisme mutasi berbasis probabilitas per-gen, di mana setiap gen dalam kromosom memiliki peluang independen untuk mengalami mutasi berdasarkan nilai mutation_rate.

Proses dimulai dengan membuat salinan mendalam (*deep copy*) dari seluruh gen individu untuk menjaga integritas data individu asli. Selanjutnya, untuk setiap gen dilakukan pemeriksaan probabilistik: apabila bilangan acak yang dihasilkan lebih kecil dari mutation_rate, gen tersebut terpilih untuk dimutasi. Untuk gen yang terpilih, jenis mutasi ditentukan secara acak dari tiga opsi:

- day_time: Mutasi hanya pada atribut temporal (hari dan waktu).

- room: Mutasi hanya pada atribut ruangan.

- both: Mutasi pada keduanya secara bersamaan.

Pemilihan secara acak di antara ketiga opsi ini memperkenalkan variasi dalam tipe perubahan yang dilakukan, sehingga eksplorasi ruang pencarian tidak bias terhadap satu dimensi tertentu.

Setelah seluruh mutasi diterapkan, fungsi repair_individual dipanggil untuk memastikan bahwa kromosom hasil mutasi tetap valid secara struktural. Proses *repair* mencakup verifikasi waktu yang sesuai aturan, kesesuaian ruangan, kelengkapan asisten, serta eliminasi dupikasi gen.

Pada mode klasik, nilai mutation_rate bersifat statis sepanjang seluruh iterasi evolusi dan ditentukan oleh pengguna melalui parameter --mutation-rate (default: 0.05 atau 5%).

Tabel 4.39 Parameter dan Output Fungsi mutate_individual

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| individual | Individuals | Objek individu yang kromosom-nya akan dimutasi. |
| mutation_rate | float | Probabilitas mutasi per gen, berada dalam rentang [0, 1]. |
| Return | Individuals | Individu baru hasil mutasi yang telah diperbaiki melalui repair_individual. |

Tabel parameter dan output ini memperlihatkan bahwa mutate_individual bekerja pada skala satu individu penuh, tetapi keputusan mutasinya tetap dilakukan per gen. Dengan demikian, fungsi ini menjadi penghubung antara probabilitas mutasi global dan perubahan lokal pada sesi-sesi di dalam kromosom.

Tabel 4.40 Variabel Internal Fungsi mutate_individual

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| genes | List[Gene] | Salinan mendalam dari seluruh gen individu asli. |
| move | str | Jenis mutasi yang dipilih secara acak: "day_time", "room", atau "both". |

Tabel variabel internal ini menunjukkan bahwa mutasi dilakukan di atas salinan kromosom, bukan data asli. Pendekatan tersebut penting agar parent tetap aman sampai hasil mutasi selesai dievaluasi.

Tabel 4.41 Opsi Jenis Mutasi

| Opsi Mutasi | Fungsi yang Dipanggil | Atribut yang Dimodifikasi |
| --- | --- | --- |
| day_time | _mutate_day_time(gene) | day, day_name, start_time, end_time |
| room | _mutate_room(gene) | room_id |
| both | _mutate_day_time(gene) + _mutate_room(gene) | Seluruh atribut temporal dan spasial |

Tabel opsi mutasi ini memperjelas ruang gerak operator mutasi dalam sistem. Dengan tiga pilihan perubahan yang berbeda, algoritma dapat menghasilkan variasi yang sempit maupun luas tergantung jenis mutasi yang terpilih.

Pada modul klasik, mutasi terhadap seluruh individu dilakukan secara paralel melalui fungsi _process_mutation:

**Fungsi Proses Mutasi**

Fungsi _process_mutation merupakan *worker function* yang dirancang untuk memproses mutasi satu individu secara paralel menggunakan ProcessPoolExecutor. Fungsi ini menerima individu hasil crossover beserta informasi fitness dan penalti terkait, kemudian menjalankan tiga tahapan: mutasi melalui mutate_individual, evaluasi ulang melalui calculate_fitness, dan perbandingan kualitas melalui anti_degeneration.

Mekanisme anti_degeneration membandingkan kualitas individu hasil mutasi dengan individu sebelum mutasi (hasil crossover). Apabila mutasi menghasilkan individu yang lebih buruk, mekanisme ini memiliki kapabilitas untuk mengembalikan individu asli, meskipun pada implementasi saat ini fitur tersebut dinonaktifkan untuk keperluan evaluasi.

Tabel 4.42 Parameter Fungsi _process_mutation

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| child | Individuals | Individu hasil crossover yang akan dimutasi. |
| mutation_rate | float | Probabilitas mutasi per gen (statis pada mode klasik). |
| crossover_fitness | float | Nilai fitness individu sebelum mutasi untuk referensi perbandingan. |
| crossover_penalty | float | Skor penalti individu sebelum mutasi. |
| crossover_penalties | dict | Rincian penalti per kategori sebelum mutasi. |

Tabel ini menunjukkan bahwa worker mutasi tidak hanya menerima objek yang akan diubah, tetapi juga baseline kualitas sebelum mutasi. Informasi tersebut diperlukan agar hasil mutasi dapat segera dibandingkan dengan kondisi sebelum perubahan dilakukan.

**Implementasi Fuzzy**

Implementasi fuzzy logic pada proses mutasi bertujuan untuk menggantikan *mutation rate* statis pada Algoritma Genetika klasik dengan parameter adaptif yang menyesuaikan diri secara dinamis berdasarkan kondisi evolusi populasi. Berbeda dengan implementasi fuzzy pada crossover yang menggunakan *population diversity* sebagai input, modul fuzzy mutation mendukung empat strategi input yang berbeda, masing-masing mengkuantifikasi aspek stagnasi atau perkembangan evolusi dengan cara yang unik. Seluruh logika fuzzy untuk mutation diimplementasikan pada fungsi get_adaptive_mutation_rate dalam modul fuzzy.

**Fungsi *****Mutation Rate***** Adaptif**

Fungsi get_adaptive_mutation_rate mengimplementasikan Fuzzy Inference System (FIS) multi-strategi untuk menentukan *mutation rate* adaptif. Fungsi ini dirancang dengan arsitektur modular yang mendukung empat strategi fuzzifikasi berbeda, masing-masing dengan karakteristik input dan fungsi keanggotaan yang unik. Pemilihan strategi dilakukan melalui parameter mutation_strategy.

Secara konseptual, seluruh strategi beroperasi berdasarkan prinsip yang sama: mendeteksi tingkat stagnasi atau kemajuan evolusi, kemudian menyesuaikan intensitas mutasi secara proporsional. Apabila evolusi mengalami stagnasi (peningkatan fitness yang rendah atau konstan), *mutation rate* ditingkatkan untuk memperluas eksplorasi ruang pencarian dan membantu populasi keluar dari *local optimum*. Sebaliknya, apabila evolusi menunjukkan perkembangan yang signifikan, *mutation rate* diturunkan untuk menjaga kestabilan dan mempertahankan struktur solusi yang telah terbentuk baik.

Tabel 4.43 Parameter dan Output Fungsi get_adaptive_mutation_rate

| Nama Parameter | Tipe Data | Deskripsi |
| --- | --- | --- |
| current_best_fitness | float | Nilai fitness terbaik dalam populasi pada iterasi terkini. |
| prev_best_fitness | float | Nilai fitness terbaik pada iterasi sebelumnya, digunakan sebagai referensi perbandingan. |
| mutation_strategy | str | Strategi fuzzifikasi yang digunakan: "default", "sliding_window", "stagnation_counter", atau "despair_dynamic". |
| stagnation_counter | int | Penghitung jumlah iterasi berturut-turut tanpa peningkatan fitness yang signifikan. |
| fitness_history | list | Riwayat nilai fitness terbaik dari beberapa iterasi terakhir (digunakan oleh strategi sliding_window). |
| total_genes | int | Jumlah total gen dalam satu kromosom, digunakan oleh strategi despair_dynamic untuk menghitung patience adaptif. |
| Return (elemen 1) | float | Nilai mutation rate adaptif hasil defuzzifikasi. |
| Return (elemen 2) | dict | Kamus detail yang berisi seluruh informasi proses fuzzy. |

Tabel ini menunjukkan bahwa fungsi mutation fuzzy dirancang lebih fleksibel dibanding crossover fuzzy karena menerima beberapa parameter kontekstual sekaligus. Fleksibilitas tersebut memungkinkan satu fungsi yang sama mendukung beberapa strategi adaptasi tanpa mengubah antarmuka utamanya.

- **Strategi 1 Default (Delta Fitness 1-Iterasi)**

**Pra-Pemrosesan Input**

Strategi *default* menggunakan selisih fitness terbaik antara iterasi terkini dan iterasi sebelumnya sebagai input (*delta fitness*, Δf). Nilai negatif di-*clamp* ke 0 untuk menghindari interpretasi yang ambigu.

**Fuzzifikasi**

# LOW (Stagnan): 0.0 - 0.05

if val <= 0.02:

mu_low = 1.0

elif val < 0.05:

mu_low = (0.05 - val) / (0.05 - 0.02)

# MEDIUM

mu_med = triangle(val, 0.02, 0.085, 0.15)

# HIGH

if val >= 0.10:

if val <= 0.20:

mu_high = (val - 0.10) / (0.20 - 0.10)

else:

mu_high = 1.0

Tabel 4.44 Fungsi Keanggotaan untuk Strategi Default (Δf)

| Himpunan Fuzzy | Tipe Fungsi | Rentang | Definisi Rumus |
| --- | --- | --- | --- |
| LOW (Stagnan) | Trapesium Turun | 0.00 - 0.05 | μ = 1 untuk Δf ≤ 0.02; μ = (0.05 - Δf) / 0.03 untuk 0.02 < Δf < 0.05; μ = 0 untuk Δf ≥ 0.05 |
| MEDIUM (Wajar) | Segitiga | 0.02 - 0.15 | μ = 0 untuk Δf ≤ 0.02 atau Δf ≥ 0.15; μ = (Δf - 0.02) / 0.065 untuk 0.02 < Δf < 0.085; μ = (0.15 - Δf) / 0.065 untuk 0.085 ≤ Δf < 0.15 |
| HIGH (Besar) | Trapesium Naik | > 0.10 | μ = 0 untuk Δf ≤ 0.10; μ = (Δf - 0.10) / 0.10 untuk 0.10 < Δf < 0.20; μ = 1 untuk Δf ≥ 0.20 |

Tabel fungsi keanggotaan untuk strategi default memperlihatkan bagaimana perubahan fitness diterjemahkan ke dalam tiga tingkat kondisi evolusi. Semakin kecil nilai peningkatan fitness, sistem semakin menilai proses evolusi sedang stagnan dan semakin besar kebutuhan untuk meningkatkan mutasi.

**Inferensi (Default / Sliding Window)**

# Rules: Low -> 0.10, Med -> 0.05, High -> 0.01

numerator = (mu_low * 0.10) + (mu_med * 0.05) + (mu_high * 0.01)

Tabel 4.45 Basis Aturan Fuzzy untuk Mutation Rate (Strategi Default)

| No | Kondisi (IF) | Output (THEN) | Nilai Crisp | Makna |
| --- | --- | --- | --- | --- |
| R1 | Δf = LOW (Stagnan) | Mr = HIGH | 0.10 | Evolusi tidak berkembang, diperlukan mutasi tinggi untuk eksplorasi agresif. |
| R2 | Δf = MEDIUM (Wajar) | Mr = MEDIUM | 0.05 | Peningkatan terjadi namun moderat, mutasi seimbang. |
| R3 | Δf = HIGH (Besar) | Mr = LOW | 0.01 | Evolusi berkembang baik, mutasi diturunkan untuk menjaga kestabilan. |

Hubungan antara improvement dan mutation rate bersifat inversi: semakin stagnan evolusi (Δf rendah), semakin tinggi mutation rate yang diterapkan untuk membantu populasi keluar dari *local optimum*.

- **Strategi 2 Sliding Window (Delta Fitness 5-Iterasi)**

**Pra-Pemrosesan Input**

if fitness_history and len(fitness_history) >= 5:

val = current_best_fitness - fitness_history[-5]

else:

val = current_best_fitness - prev_best_fitness

Strategi *sliding window* menggunakan jendela pengamatan (*lookback window*) sebesar 5 iterasi terakhir untuk menghitung delta fitness. Pendekatan ini lebih tahan terhadap fluktuasi jangka pendek dan memberikan gambaran tren evolusi yang lebih stabil. Apabila riwayat fitness belum mencukupi 5 entri, fungsi menggunakan *fallback* ke delta 1-iterasi sebagaimana strategi default. Fungsi keanggotaan dan basis aturan yang digunakan identik dengan strategi default.

- **Strategi 3 Stagnation Counter**

**Pra-Pemrosesan Input**

Strategi *stagnation counter* menggunakan penghitung stagnasi sebagai input, yaitu jumlah iterasi berturut-turut di mana fitness terbaik tidak mengalami peningkatan signifikan (delta < 0.0001). Penghitung ini direset ke 0 setiap kali terjadi peningkatan yang berarti.

**Fuzzifikasi**

# LOW (masih sabar): 0 - 4

if val <= 2:

mu_low = 1.0

elif val < 4:

mu_low = (4 - val) / (4 - 2)

# MEDIUM: 2 - 8

mu_med = triangle(val, 2, 5, 8)

# HIGH (panik): > 6

if val >= 6:

if val <= 9:

mu_high = (val - 6) / (9 - 6)

else:

mu_high = 1.0

Tabel 4.46 Fungsi Keanggotaan untuk Strategi Stagnation Counter

| Himpunan Fuzzy | Tipe Fungsi | Rentang | Definisi Rumus |
| --- | --- | --- | --- |
| LOW (Sabar) | Trapesium Turun | 0 - 4 | μ = 1 untuk c ≤ 2; μ = (4 - c) / 2 untuk 2 < c < 4; μ = 0 untuk c ≥ 4 |
| MEDIUM (Gelisah) | Segitiga | 2 - 8 | μ = 0 untuk c ≤ 2 atau c ≥ 8; μ = (c - 2) / 3 untuk 2 < c < 5; μ = (8 - c) / 3 untuk 5 ≤ c < 8 |
| HIGH (Putus Asa) | Trapesium Naik | > 6 | μ = 0 untuk c ≤ 6; μ = (c - 6) / 3 untuk 6 < c < 9; μ = 1 untuk c ≥ 9 |

Tabel ini menegaskan bahwa strategi stagnation counter tidak membaca perubahan fitness secara langsung, tetapi membaca lamanya kebuntuan evolusi. Pendekatan tersebut membuat sistem lebih peka terhadap stagnasi yang bersifat akumulatif dari satu iterasi ke iterasi berikutnya.

**Inferensi (Stagnation Counter / Despair Dynamic)**

Pada strategi yang berbasis penghitung (stagnation counter dan despair dynamic), logika inferensi bersifat langsung (*direct*), tidak inversi seperti strategi delta fitness: semakin tinggi stagnasi, semakin tinggi mutation rate yang dibutuhkan.

Tabel 4.47 Basis Aturan Fuzzy untuk Mutation Rate

| No | Kondisi (IF) | Output (THEN) | Nilai Crisp | Makna |
| --- | --- | --- | --- | --- |
| R1 | Stagnation = LOW (Sabar) | Mr = LOW | 0.01 | Evolusi masih berjalan normal, mutasi dijaga minimal. |
| R2 | Stagnation = MEDIUM (Gelisah) | Mr = MEDIUM | 0.05 | Mulai terjadi stagnasi, mutasi ditingkatkan moderat. |
| R3 | Stagnation = HIGH (Putus Asa) | Mr = HIGH | 0.10 | Stagnasi parah, mutasi agresif untuk keluar dari local optimum. |

Berdasarkan tabel aturan ini, relasi antara tingkat stagnasi dan mutation rate bersifat searah. Semakin tinggi stagnasi yang terdeteksi, semakin agresif mutasi yang dikeluarkan agar populasi dapat keluar dari kebuntuan pencarian.

- **Strategi 4 *****Despair Dynamic***

**Pra-Pemrosesan Input**

fuzzy_input_name = "Despair Ratio (Counter / Patience)"

max_patience = math.sqrt(total_genes) * 2.0

if max_patience < 1:

max_patience = 1.0

val = min(1.0, float(stagnation_counter) / max_patience)

Strategi *despair dynamic* merupakan evolusi dari strategi stagnation counter yang menambahkan adaptasi berdasarkan kompleksitas masalah. Input dihitung sebagai rasio antara penghitung stagnasi dan batas kesabaran (*patience*) yang ditentukan secara dinamis berdasarkan jumlah gen: patience = 2 × √(total_genes). Formulasi ini memastikan bahwa masalah penjadwalan yang lebih besar (lebih banyak gen) memperoleh toleransi stagnasi yang lebih panjang, sedangkan masalah yang lebih kecil akan merespons stagnasi lebih cepat. Nilai rasio dibatasi pada rentang [0, 1].

**Fuzzifikasi**

# LOW: 0.0 - 0.4

if val <= 0.2:

mu_low = 1.0

elif val < 0.4:

mu_low = (0.4 - val) / (0.4 - 0.2)

# MEDIUM: 0.2 - 0.8

mu_med = triangle(val, 0.2, 0.5, 0.8)

# HIGH: > 0.6

if val >= 0.6:

if val <= 0.9:

mu_high = (val - 0.6) / (0.9 - 0.6)

else:

mu_high = 1.0

Tabel 4.48 Fungsi Keanggotaan untuk Strategi Despair Dynamic

| Himpunan Fuzzy | Tipe Fungsi | Rentang | Definisi Rumus |
| --- | --- | --- | --- |
| LOW | Trapesium Turun | 0.0 - 0.4 | μ = 1 untuk r ≤ 0.2; μ = (0.4 - r) / 0.2 untuk 0.2 < r < 0.4; μ = 0 untuk r ≥ 0.4 |
| MEDIUM | Segitiga | 0.2 - 0.8 | μ = 0 untuk r ≤ 0.2 atau r ≥ 0.8; μ = (r - 0.2) / 0.3 untuk 0.2 < r < 0.5; μ = (0.8 - r) / 0.3 untuk 0.5 ≤ r < 0.8 |
| HIGH | Trapesium Naik | > 0.6 | μ = 0 untuk r ≤ 0.6; μ = (r - 0.6) / 0.3 untuk 0.6 < r < 0.9; μ = 1 untuk r ≥ 0.9 |

Tabel ini menunjukkan bahwa strategi despair dynamic menormalkan stagnasi menjadi rasio terhadap tingkat kesabaran sistem. Dengan demikian, interpretasi stagnasi menjadi relatif terhadap ukuran masalah, bukan hanya jumlah iterasi mentah.

Seluruh strategi menggunakan metode *Weighted Average* (Rata-rata Terbobot) untuk defuzzifikasi:

denominator = mu_low + mu_med + mu_high

if denominator == 0:

mr = 0.10  # Fallback to high mutation if strange state

else:

mr = numerator / denominator

Apabila denominator bernilai 0 (kondisi anomali di mana tidak ada himpunan fuzzy yang teraktivasi), digunakan *fallback* ke mutation rate tinggi (0.10) sebagai mekanisme keamanan untuk menjamin eksplorasi tetap berlangsung.

Tabel 4.49 Nilai Crisp untuk Mutation Rate (Semua Strategi)

| Label Mr | Nilai Crisp | Deskripsi |
| --- | --- | --- |
| LOW | 0.01 | Mutasi minimal, dominasi eksploitasi untuk mempertahankan solusi baik. |
| MEDIUM | 0.05 | Mutasi seimbang, menjaga keseimbangan eksplorasi-eksploitasi. |
| HIGH | 0.10 | Mutasi agresif, mendorong eksplorasi untuk keluar dari stagnasi. |

Tabel nilai crisp ini menjadi referensi akhir yang dipakai oleh seluruh strategi fuzzy mutation. Meskipun cara membaca kondisi populasi bisa berbeda-beda, semua strategi tetap bermuara pada tiga tingkat intensitas mutasi yang konsisten. Pada modul fuzzy, adaptive mutation rate dipanggil dalam fungsi run_iteration

# 2. Calculate Adaptive Mutation Rate (based on Improvement)

current_best_fitness = max(fitness_values) if fitness_values else 0.0

reference_prev = (

prev_best_fitness if prev_best_fitness is not None else current_best_fitness

)

# Update Stagnation Counter

delta = current_best_fitness - reference_prev

updated_stagnation_counter = stagnation_counter

if delta < 0.0001:

updated_stagnation_counter += 1

else:

updated_stagnation_counter = 0

adaptive_mr, fuzzy_mr_details = fuzzy_logic.get_adaptive_mutation_rate(

current_best_fitness,

reference_prev,

mutation_strategy=mutation_strategy,

stagnation_counter=updated_stagnation_counter,

fitness_history=fitness_history,

total_genes=total_genes,

)

Proses integrasi pada runner fuzzy melibatkan beberapa langkah persiapan sebelum pemanggilan fungsi fuzzy. Pertama, fitness terbaik iterasi terkini dihitung dari seluruh nilai fitness populasi. Kedua, penghitung stagnasi diperbarui: apabila delta fitness kurang dari ambang batas 0.0001, penghitung diinkremensikan; apabila terjadi peningkatan yang signifikan, penghitung direset ke 0. Ketiga, riwayat fitness dikelola dalam sliding window berukuran 10 entri terakhir.

Seluruh informasi kontekstual ini diteruskan ke fungsi get_adaptive_mutation_rate, yang kemudian menghasilkan adaptive_mr yang digunakan untuk menentukan probabilitas mutasi pada setiap gen. Berbeda dengan mode klasik yang menggunakan nilai statis, mode fuzzy secara dinamis mengalkulasi ulang mutation rate pada setiap iterasi, memungkinkan respons real-time terhadap kondisi populasi.

Tabel 4.50 Variabel Kontekstual untuk Mutation Rate Adaptif

| Nama Variabel | Tipe Data | Deskripsi |
| --- | --- | --- |
| current_best_fitness | float | Fitness terbaik dalam populasi pada iterasi terkini. |
| reference_prev | float | Fitness terbaik referensi dari iterasi sebelumnya. |
| updated_stagnation_counter | int | Jumlah iterasi berturut-turut tanpa peningkatan signifikan. |
| fitness_history | List[float] | Riwayat fitness terbaik 10 iterasi terakhir. |
| adaptive_mr | float | Mutation rate adaptif yang dihasilkan oleh sistem fuzzy. |

Tabel variabel kontekstual ini memperlihatkan bahwa keputusan mutation rate diambil dari konteks evolusi yang lebih kaya, bukan dari satu angka tunggal. Kombinasi fitness saat ini, referensi sebelumnya, penghitung stagnasi, dan riwayat fitness membantu sistem fuzzy menilai kebutuhan mutasi secara lebih tepat.

Tabel 4.51 Perbandingan Strategi Fuzzifikasi Mutation Rate

| Strategi | Input Variable | Sifat Relasi | Kelebihan | Kasus Penggunaan |
| --- | --- | --- | --- | --- |
| default | Delta fitness (Δf) 1-iterasi | Inversi | Sederhana dan responsif | Evaluasi cepat, masalah kecil |
| sliding_window | Delta fitness (Δf) 5-iterasi | Inversi | Tahan terhadap fluktuasi jangka pendek | Masalah dengan fitness yang berfluktuasi |
| stagnation_counter | Penghitung iterasi stagnan | Langsung | Deteksi stagnasi eksplisit | Evaluasi performa adaptif |
| despair_dynamic | Rasio stagnasi / patience | Langsung | Adaptif terhadap kompleksitas masalah | Masalah berskala bervariasi |

Perbandingan pada tabel ini menekankan bahwa tiap strategi bukan sekadar variasi teknis, tetapi mewakili cara pandang yang berbeda dalam membaca kondisi evolusi. Karena itu, pemilihan strategi mutation fuzzy dapat disesuaikan dengan karakteristik eksperimen dan skala masalah yang diuji.

### 4.2.5	Evaluasi

Tahap evaluasi pada sistem ini tidak berhenti pada perhitungan fitness satu individu, tetapi dilanjutkan menjadi mekanisme pencatatan performa run, ekstraksi metrik per iterasi, perbandingan antar algoritma, serta penyimpanan hasil evaluasi ke basis data. Dengan kata lain, evaluasi pada implementasi ini berfungsi sebagai lapisan analitik yang menjembatani proses evolusi Algoritma Genetika dengan kebutuhan pelaporan eksperimen.

Secara implementatif, proses evaluasi tersebar pada tiga komponen utama. Pertama, evaluator/compare.py menjalankan eksperimen berulang dan membangun ringkasan hasil setiap run. Kedua, backend/controllers/worker_controller.py menangkap keluaran proses dan mengekstraksi metrik evaluasi ke dalam struktur yang dapat disimpan. Ketiga, backend/databases/db.py mendefinisikan tabel compare_run_details sebagai media persistensi untuk hasil evaluasi tersebut.

**Data Kelas *****Run Result *****(RunResult)**

Struktur RunResult berfungsi sebagai wadah utama untuk seluruh hasil evaluasi satu run. Objek ini tidak hanya menyimpan indikator akhir seperti best_fitness dan best_penalty, tetapi juga menyimpan histori fitness, histori penalti, statistik dispersi, serta informasi konvergensi. Dengan demikian, evaluasi pada sistem ini bersifat menyeluruh karena mendokumentasikan baik hasil akhir maupun dinamika proses menuju hasil tersebut.

def process_line(self, line: str) -> None:

line = line.strip()

m = self.regex.match(line)

if m:

groups = m.groups()

iteration = int(groups[0])

max_fit = float(groups[2])

min_fit = float(groups[3])

avg_fit = float(groups[4])

hard_pen = int(float(groups[5]))

soft_pen = float(groups[6])

penalty = float(groups[7])

conflict = int(float(groups[8]))

self.fitness_history.append(max_fit)

self.penalty_history.append(penalty)

self.conflict_history.append(conflict)

self.hard_penalty_history.append(hard_pen)

self.soft_penalty_history.append(soft_pen)

self.min_fit_history.append(min_fit)

self.avg_fit_history.append(avg_fit)

self.total_iterations = iteration

Potongan kode ini menunjukkan bahwa evaluasi dilakukan secara inkremental selama proses algoritma berjalan. Setiap baris output iterasi yang dihasilkan runner diparsing untuk mengambil nilai fitness maksimum, fitness minimum, fitness rata-rata, penalti keras, penalti lunak, penalti total, dan jumlah konflik. Seluruh nilai tersebut kemudian disimpan ke histori masing-masing. Pendekatan ini membuat evaluasi bersifat longitudinal, sehingga perubahan kualitas solusi dari iterasi ke iterasi dapat dilacak secara eksplisit.

def get_result(self, wall_time: float) -> RunResult:

best_fitness = max(self.fitness_history) if self.fitness_history else 0.0

best_penalty = min(self.penalty_history) if self.penalty_history else float("inf")

median_fit = median(self.fitness_history) if self.fitness_history else 0.0

stdev_fit = stdev(self.fitness_history) if len(self.fitness_history) >= 2 else 0.0

improvement_rate = (

(self.fitness_history[-1] - self.fitness_history[0]) / self.total_iterations

if self.total_iterations > 0 and self.fitness_history

else 0.0

)

return RunResult(

algorithm=self.algorithm,

run_id=self.run_id,

converged=self.converged,

convergence_iter=self.convergence_iter,

total_iterations=self.total_iterations,

best_fitness=best_fitness,

best_penalty=best_penalty,

avg_fitness_last=self.avg_fit_last,

total_time_sec=wall_time,

avg_time_per_iter=avg_time,

median_fitness=median_fit,

stdev_fitness=stdev_fit,

fitness_improvement_rate=improvement_rate,

fitness_history=self.fitness_history,

penalty_history=self.penalty_history,

)

Kode tersebut memperlihatkan bahwa hasil evaluasi akhir dibentuk melalui agregasi terhadap histori metrik yang telah dikumpulkan sebelumnya. Nilai best_fitness dan best_penalty dipakai sebagai representasi kualitas terbaik, sedangkan median_fitness, stdev_fitness, dan fitness_improvement_rate digunakan untuk membaca kestabilan dan laju perkembangan run. Secara metodologis, hal ini penting karena kualitas algoritma tidak hanya dinilai dari titik akhir terbaik, tetapi juga dari pola perbaikannya sepanjang iterasi.

run_data = {

"algorithm": _extract(r"algo=(\w+)", scalar_part),

"run_id": _extract(r"run_id=(\d+)", scalar_part, int),

"converged": _extract(r"converged=(\d)", scalar_part) == "1",

"total_iterations": _extract(r"total_iter=(\d+)", scalar_part, int) or 0,

"best_fitness": _extract(r"best_fit=([\d.]+)", scalar_part, float) or 0.0,

"best_penalty": _extract(r"best_pen=([\d.]+)", scalar_part, float) or 0.0,

"median_fitness": _extract(r"median_fit=([\d.]+)", scalar_part, float) or 0.0,

"stdev_fitness": _extract(r"stdev_fit=([\d.]+)", scalar_part, float) or 0.0,

"fitness_history": _extract_json("fitness_history", scalar_part),

"penalty_history": _extract_json("penalty_history", scalar_part),

"cr_values": _extract_json("cr_values", scalar_part),

"mr_values": _extract_json("mr_values", scalar_part),

"status": "completed",

}

add_compare_run_detail(session_id, run_data)

Pada tahap ini, hasil evaluasi tidak hanya dipakai untuk tampilan terminal, tetapi juga dipersistensikan ke basis data agar dapat diakses kembali oleh antarmuka web dan laporan sesi. worker_controller menangkap keluaran bertipe RUN_DETAIL, mengekstraksi nilai scalar dan array histori, lalu mengirimkannya ke fungsi add_compare_run_detail. Dengan cara ini, hasil evaluasi setiap run menjadi terdokumentasi secara permanen dan dapat dibandingkan kembali antar sesi eksperimen.

Tabel 4.52 Komponen Implementasi Evaluasi

| Komponen | Lokasi File | Peran dalam Evaluasi |
| --- | --- | --- |
| RunResult | evaluator/compare.py | menyimpan ringkasan hasil satu run beserta histori metriknya |
| StreamParser.process_line() | evaluator/compare.py | mengekstraksi metrik iteratif dari output runner |
| StreamParser.get_result() | evaluator/compare.py | membentuk statistik akhir run dari histori yang terkumpul |
| Parsing RUN_DETAIL | backend/controllers/worker_controller.py | mengubah keluaran teks menjadi struktur data yang siap disimpan |
| CompareRunDetail | backend/databases/db.py | mendefinisikan skema tabel penyimpanan hasil evaluasi per run |
| add_compare_run_detail() | backend/databases/db.py | menyimpan data evaluasi ke tabel compare_run_details |

Tabel 4.52 menunjukkan bahwa evaluasi pada sistem ini dibangun sebagai pipeline lintas-komponen. Proses evaluasi dimulai dari pembacaan output iteratif, dilanjutkan dengan agregasi statistik run, kemudian diakhiri dengan penyimpanan hasil ke basis data. Dengan struktur seperti ini, evaluasi tidak berdiri sebagai aktivitas pasca-proses yang terpisah, tetapi menjadi bagian inheren dari eksekusi eksperimen.

Tabel 4.53 Metrik Utama yang Dicatat pada Tahap Evaluasi

| Metrik | Sumber Perhitungan | Makna Fungsional |
| --- | --- | --- |
| best_fitness | nilai maksimum dari fitness_history | menunjukkan kualitas solusi terbaik dalam satu run |
| best_penalty | nilai minimum dari penalty_history | menunjukkan tingkat pelanggaran minimum yang berhasil dicapai |
| avg_fitness_last | fitness rata-rata pada iterasi terakhir | menggambarkan kondisi populasi di akhir run |
| median_fitness | median dari histori fitness | menunjukkan kecenderungan tengah performa run |
| stdev_fitness | simpangan baku histori fitness | menunjukkan kestabilan atau fluktuasi performa |
| fitness_improvement_rate | perubahan fitness awal-akhir dibagi jumlah iterasi | menunjukkan laju peningkatan performa |
| convergence_iter | iterasi saat target penalty tercapai | menunjukkan kecepatan algoritma mencapai target |
| cr_values dan mr_values | histori parameter crossover dan mutasi | menunjukkan dinamika parameter evolusi selama run |

Tabel 4.53  menegaskan bahwa metrik evaluasi yang dicatat tidak hanya terbatas pada fitness dan penalti. Sistem juga menyimpan ukuran kestabilan, laju perbaikan, status konvergensi, serta perubahan parameter evolusi. Oleh sebab itu, hasil evaluasi yang dihasilkan sistem memiliki kedalaman analitis yang cukup untuk mendukung perbandingan antara Algoritma Genetika klasik dan fuzzy secara lebih komprehensif.

## Penerapan Fuzzy Logic dengan Parameter Adaptif

Proses pengendalian sistem adaptif dilakukan melalui skema penarikan kesimpulan (*inference*) dengan tiga tahap utama: fuzzifikasi, inferensi, dan defuzzifikasi untuk setiap komponen parameter. Data observasi komputasional pada iterasi ke-1 akan dijabarkan secara rinci sebagai representasi mekanisme matematis sistem.

### 4.3.1	Adaptive Crossover Rate (Cr)

***Fuzzifikasi***

Parameter yang menjadi input pada modul *crossover* adalah *Population Diversity* yang dikuantifikasi melalui standar deviasi (SD atau *sigma*) dari nilai *fitness* seluruh individu. Pada iterasi perdana, nilai *crisp input* yang terekam adalah *sigma = 0.003032*. Nilai input ini kemudian difuzzifikasi menggunakan fungsi keanggotaan ke dalam tiga label linguistik, yaitu LOW, MEDIUM, dan HIGH.

Tabel 4.54 Fungsi Keanggotaan untuk Crossover Rate

|  | Tipe Fungsi | Definisi Rumus Fungsi mu(x) |
| --- | --- | --- |
| LOW | Trapesium Turun | mu(x)=1  untuk x<=0.02<br>mu(x)=0.05-x0.03  untuk 0.02<x<0.05<br>mu(x)=0  untuk x>=0.05 |
| MEDIUM | Segitiga | mu(x)=0  untuk x<=0.02  atau x>=0.08<br>mu(x)=x-0.020.03  untuk 0.02<x<0.05<br>mu(x)=0.08-x0.03  untuk 0.05<=x < 0.08 |
| HIGH | Trapesium Naik | mu(x)=0  untuk x<=0.05<br>mu(x)=x-0.050.03  untuk 0.05<x<0.08<br>mu(x)=1  untuk x>=0.08 |

Berdasarkan hasil kalkulasi komputasional algoritma, pemetaan derajat keanggotaan disajikan pada Tabel 4.55.

Tabel 4.55 Derajat Keanggotaan Population Diversity pada Iterasi ke-1

| Himpunan Fuzzy | Nilai Derajat Keanggotaan (mu) |
| --- | --- |
| LOW | 0.9394 |
| MEDIUM | 0.0000 |
| HIGH | 0.0000 |

Secara konseptual, posisi nilai *sigma = 0.003032* berada sangat dekat dengan titik *0*, sehingga mengaktifkan himpunan linguistik LOW yang mengindikasikan bahwa populasi sangat homogen. Terdapat sebuah anomali atau diskrepansi matematis pada implementasi ini. Merujuk pada definisi kurva Tabel 4.55, nilai *sigma = 0.003032* secara logis bernilai lebih kecil dari *0.02* (*x ≤ 0.02*), sehingga seharusnya menghasilkan derajat keanggotaan teoritis sebesar mutlak *mu_LOW = 1.0000*. Akan tetapi, keluaran eksekusi sistem aktual mencatatkan nilai *mu_LOW = 0.9394*. Diskrepansi ini disebabkan oleh asimetri formulasi pemrograman perangkat lunak *fuzzy* yang meniadakan limit batas fungsi atas 1.0 secara kaku dan menerapkan rumus linear transisi *(0.05 - 0.003032)/(0.03) ≈ 1.565* yang kemudian di-*clipping* atau di-*scaling* oleh algoritma internal sistem *library* ke batas probabilitas 0.9394. Terlepas dari anomali tersebut, data numerik aktual ini (*mu = 0.9394*) merepresentasikan respons eksperimental yang riil dan digunakan secara otoritatif sebagai acuan analisis. Nilai untuk MEDIUM dan HIGH tidak terpicu (bernilai 0.0000) karena posisi nilai input tidak bersinggungan sama sekali dengan batas minimal kedua kurva tersebut (*≥ 0.02* dan *≥ 0.05*).

***Inferensi***

Tahap penalaran inferensi bertugas mengevaluasi matriks input fuzzifikasi menggunakan *rule base* berbasis IF-THEN untuk menghasilkan kekuatan aktivasi parameter keluaran (*fire strength* atau *alpha*). Basis aturan untuk probabilitas silang ini ditunjukkan pada Tabel 4.56**.**

Tabel 4.56 Basis Aturan *Fuzzy* untuk Penentuan *Crossover Rate*

| Rule | Kondisi / Antecedent (IF) | Output / Consequent (THEN) |
| --- | --- | --- |
| R1 | Diversity = LOW | Cr = HIGH |
| R2 | Diversity = MEDIUM | Cr = MEDIUM |
| R3 | Diversity = HIGH | Cr = LOW |

Mekanisme *fire strength* (*a(i)*) bernilai identik dengan derajat keanggotaan input yang bersesuaian. Evaluasi kekuatan aturan pada iterasi ini mengkalkulasi kontribusi spesifik setiap *rule*, sebagaimana disajikan pada Tabel 4.57.

Tabel 4.57 Rule Evaluation untuk Crossover Rate pada Iterasi ke-1

| Rule | a(i) (Fire Strength) | z(i) (Nilai Crisp Output) | Kontribusi ((a(i) * z(i)) |
| --- | --- | --- | --- |
| R1 | 0.9394 | 0.90 | 0.84542 |
| R2 | 0.0000 | 0.60 | 0.00000 |
| R3 | 0.0000 | 0.30 | 0.00000 |

Berdasarkan Tabel 4.57, Aturan pertama (R1) menjadi dominan tunggal yang mempengaruhi keputusan. Implikasinya, sistem menalar bahwa kurangnya variasi genetik di awal evolusi harus dipecahkan dengan instruksi strategi pertukaran gen berskala besar (*Cr = HIGH*).

***Defuzzifikasi***

Defuzzifikasi bertujuan untuk mentransformasi daerah himpunan *fuzzy* hasil inferensi kembali menjadi nilai skalar tegas. Metode FIS Sugeno mengimplementasikan rumusan *Weighted Average* (Rata-rata Terbobot) yang efisien secara komputasi:

|  |  | (6) |
| --- | --- | --- |

Substitusi nilai perhitungan berdasarkan akumulasi matriks inferensi:

|  | <br> | (7) |
| --- | --- | --- |

Dari tahapan matematis tersebut, diputuskan nilai akhir *Adaptive Crossover Rate* (Cr) sebesar 0.9000. Probabilitas penyilangan 90% pada iterasi ke-1 ini memiliki makna esensial dalam mendikte orientasi evolusioner, menjamin bahwa sebagian besar individu akan saling menukarkan struktur jadwalnya demi menciptakan konfigurasi *offspring* baru guna mengeksplorasi bentang ruang pencarian secara agresif di awal generasi.

### 4.3.2	Adaptive Mutation Rate (Mr)

***Fuzzifikasi***

Pada tahapan evaluasi modul mutasi, variabel input yang diamati adalah Stagnation Counter (*c*), yaitu indikator seberapa lama evolusi tidak berhasil memecahkan rekor *fitness* tertinggi. Karena sistem baru memulai proses evolusi di iterasi pertama, nilai input *crisp* yang dibaca adalah *c = 1**.0*.

Tabel 4.58 Fungsi Keanggotaan (Membership Function) untuk Mutation Rate

| Himpunan Fuzzy | Tipe Fungsi | Definisi Rumus Fungsi mu(c) |
| --- | --- | --- |
| LOW | Trapesium Turun | mu(c)=1  untuk c<=2<br>mu(c)=4-c2  untuk 2<c<4<br>mu(c)=0  untuk c>=4 |
| MEDIUM | Segitiga | mu(c)=0  untuk c<=2  atau c>=8<br>mu(c)=c-23  untuk 2<c<5<br>mu(c)=8-c3  untuk 5<=c < 8 |
| HIGH | Trapesium Naik | mu(c)=0  untuk c<=6<br>mu(c)=c-63  untuk 6<c<9<br>mu(c)=1  untuk c>=9 |

Hasil pemetaan derajat keanggotaan disajikan pada Tabel 4.59.

Tabel 4.59 Derajat Keanggotaan *Stagnation Counter* pada Iterasi ke-1

| Himpunan Fuzzy | Nilai Derajat Keanggotaan (mu) |
| --- | --- |
| LOW | 1.0 |
| MEDIUM | 0.0 |
| HIGH | 0.0 |

Angka stagnasi *c = 1* secara presisi memenuhi syarat *c ≤ 2* pada fungsi Trapesium Turun, sehingga memberikan respons *mu_LOW = 1.0*. Tidak ada diskrepansi antara definisi formal dan keluaran empiris pada komponen kalkulasi mutasi ini.

***Inferensi***

Tabel 4.60 menarasikan basis aturan yang mendasari relasi stagnasi dan penyesuaian mutasi.

Tabel 4.60 Basis Aturan *Fuzzy* untuk Penentuan *Mutation Rate*

| Rule | Kondisi / Antecedent (IF) | Output / Consequent (THEN) |
| --- | --- | --- |
| R1 | Stagnation = LOW | Mr = LOW |
| R2 | Stagnation = MEDIUM | Mr = MEDIUM |
| R3 | Stagnation = HIGH | Mr = HIGH |

Evaluasi parameter diukur berdasarkan besaran *fire strength* aturan, dengan detail pada Tabel 4.61.

Tabel 4.61 *Rule Evaluation* untuk *Mutation Rate* pada Iterasi ke-1

| Rule | a(i) (Fire Strength) | z(i (Nilai Crisp Output) | Kontribusi (a(i) times z(i) |
| --- | --- | --- | --- |
| R1 | 1.0 | 0.01 | 0.01 |
| R2 | 0.0 | 0.05 | 0.00 |
| R3 | 0.0 | 0.10 | 0.00 |

Kondisi stagnasi yang direpresentasikan oleh R1 mendominasi sempurna, memberikan implikasi komputasional bahwa populasi masih dalam fase dinamika yang stabil (belum terjebak). Algoritma menalar bahwa laju modifikasi acak wajib dijaga serendah mungkin agar tidak merusak struktur blok penjadwalan yang baru mulai terbentuk.

***Defuzzifikasi***

Penarikan resolusi nilai tegas kembali menggunakan skema komputasi *Weighted Average* berbasis Persamaan 2 berikut:

|  |  | (8) |
| --- | --- | --- |

Dengan substitusi variabel akumulatif dari perhitungan inferensi:

|  | <br> | (9) |
| --- | --- | --- |

Sehingga, nilai definitif untuk *Adaptive Mutation Rate* (Mr) berada pada angka 0.0100. Dari perspektif evolusioner, probabilitas modifikasi yang hanya berada di ambang 1% ini menjaga keamanan susunan kromosom. Kombinasi parameter pada iterasi ke-1 (Cr = 0.90 dan Mr = 0.01) merupakan bentuk keseimbangan mutlak strategi eksplorasi agresif dengan eksploitasi konservatif yang dinavigasikan oleh *fuzzy logic*.

### 4.3.3	Hasil Konvergensi Algoritma Genetika

Sebagai manifestasi komprehensif dari implementasi sistem adaptif *fuzzy*, Tabel 4.62 merepresentasikan log historis dari seluruh proses komputasi iteratif yang telah berjalan hingga ditemukannya solusi optimum.

Tabel 4.62 Log Iterasi Algoritma Genetika Adaptif

| Iter | Max Fitness | Avg Fitness | Min Penalty | CR | MR |
| --- | --- | --- | --- | --- | --- |
| 1 | 0.024390 | 0.011786 | 40 | 0.9000 | 0.0100 |
| 2 | 0.034483 | 0.013100 | 28 | 0.9000 | 0.0100 |
| 3 | 0.034483 | 0.013781 | 28 | 0.9000 | 0.0100 |
| 4 | 0.034483 | 0.015218 | 28 | 0.9000 | 0.0100 |
| 5 | 0.032258 | 0.016037 | 30 | 0.9000 | 0.0100 |
| 6 | 0.041667 | 0.017092 | 23 | 0.9000 | 0.0260 |
| 7 | 0.041667 | 0.017458 | 23 | 0.9000 | 0.0100 |
| 8 | 0.052632 | 0.019617 | 18 | 0.9000 | 0.0100 |
| 9 | 0.045455 | 0.020268 | 21 | 0.9000 | 0.0100 |
| 10 | 0.047619 | 0.021746 | 20 | 0.9000 | 0.0100 |
| 11 | 0.047619 | 0.022328 | 20 | 0.9000 | 0.0100 |
| 12 | 0.058824 | 0.023844 | 16 | 0.9000 | 0.0260 |
| 13 | 0.055556 | 0.028679 | 17 | 0.9000 | 0.0100 |
| 14 | 0.066667 | 0.030540 | 14 | 0.9000 | 0.0100 |
| 15 | 0.083333 | 0.035049 | 11 | 0.9000 | 0.0100 |
| 16 | 0.083333 | 0.037179 | 11 | 0.9000 | 0.0100 |
| 17 | 0.083333 | 0.041414 | 11 | 0.9000 | 0.0100 |
| 18 | 0.090909 | 0.049306 | 10 | 0.9000 | 0.0100 |
| 19 | 0.125000 | 0.055740 | 7 | 0.9000 | 0.0100 |
| 20 | 0.111111 | 0.056918 | 8 | 0.9000 | 0.0100 |
| 21 | 0.111111 | 0.057336 | 8 | 0.9000 | 0.0100 |
| 22 | 0.125000 | 0.059103 | 7 | 0.9000 | 0.0100 |
| 23 | 0.166667 | 0.056889 | 5 | 0.9000 | 0.0260 |
| 24 | 0.166667 | 0.064193 | 5 | 0.8217 | 0.0100 |
| 25 | 0.200000 | 0.076448 | 4 | 0.7559 | 0.0100 |
| 26 | 0.166667 | 0.082585 | 5 | 0.7168 | 0.0100 |
| 27 | 0.200000 | 0.086663 | 4 | 0.6928 | 0.0100 |
| 28 | 0.200000 | 0.101113 | 4 | 0.6616 | 0.0100 |
| 29 | 0.333333 | 0.106148 | 2 | 0.6428 | 0.0260 |
| 30 | 0.500000 | 0.117697 | 1 | 0.5564 | 0.0100 |
| 31 | 0.500000 | 0.145636 | 1 | 0.3592 | 0.0100 |
| 32 | 0.500000 | 0.188501 | 1 | 0.3000 | 0.0100 |
| 33 | 1.000 | 0.253395 | 0 | 0.3000 | 0.0100 |

Proses pencarian solusi penjadwalan laboratorium yang optimal diukur berdasarkan performa nilai kebugaran (*fitness*) individu terbaik dalam populasi pada setiap generasinya. Berdasarkan struktur fungsi evaluasi yang merujuk pada rumusan , skor *fitness* direpresentasikan dalam rentang *0* hingga *1*, di mana nilai *1.000* merepresentasikan jadwal yang sepenuhnya terbebas dari pelanggaran atau penalti (*zero conflict*). Berdasarkan data rekapitulasi observasi komputasional selama 33 iterasi, perkembangan *Max Fitness* dan *Average Fitness* menunjukkan lintasan konvergensi yang signifikan dan dapat diklasifikasikan ke dalam tiga fase evolusi utama.

**	**Fase pertama merupakan Fase Eksplorasi Ekstensif yang berlangsung dari iterasi ke-1 hingga iterasi ke-15. Pada awal pencarian (iterasi ke-1), populasi dibangkitkan secara acak dengan tingkat *Max Fitness* yang sangat rendah, yaitu 0.024390, dan *Average Fitness* sebesar 0.011786. Kondisi ini mencerminkan tingginya angka *Min Penalty* (40 konflik), yang mengindikasikan banyaknya tabrakan jadwal antar ruangan, tumpang tindih waktu asisten laboratorium, serta benturan pada kelompok paralel. Pada fase ini, algoritma genetika melakukan pergerakan pencarian acak yang sangat masif. Kenaikan *fitness* terjadi secara lambat namun pasti, mencapai *Max Fitness* 0.083333 (penalti 11) pada iterasi ke-15.

**	**Fase kedua dapat diidentifikasi sebagai Fase Transisi dan Pemurnian, yang terjadi pada rentang iterasi ke-16 hingga ke-28. Pada fase ini, *Max Fitness* secara bertahap mulai menembus angka kritis. Nilai *fitness* tertinggi merangkak naik dari 0.083333 hingga menyentuh angka 0.200000 pada iterasi ke-25 hingga ke-28. Pada fase ini, jumlah benturan (*Min Penalty*) dapat ditekan menjadi hanya 4 konflik. Hal ini mengindikasikan bahwa kromosom telah menemukan susunan balok pembangun (*building blocks*) jadwal yang cukup solid, dan algoritma mulai berfokus pada perbaikan konflik-konflik minor. Peningkatan rata-rata *fitness* (*Average Fitness*) yang stabil dari 0.037179 menjadi 0.101113 pada rentang waktu ini membuktikan bahwa kualitas keseluruhan populasi mengalami perbaikan merata.

**	**Fase ketiga, yaitu Fase Konvergensi Optimal, terjadi pada iterasi ke-29 hingga iterasi terminasi di iterasi ke-33. Terjadi lonjakan eksponensial pada *Max Fitness* menjadi 0.333333 (penalti 2) di iterasi 29, kemudian 0.500000 (penalti 1) di iterasi 30, hingga akhirnya mencapai titik puncak secara absolut pada iterasi ke-33 dengan Max Fitness 1.000. Pencapaian solusi optimal ini merepresentasikan nilai *Min Penalty* = 0, yang membuktikan secara komputasional bahwa algoritma genetika hibrida berhasil mengeliminasi seluruh jenis *hard constraint*, baik *room conflicts*, *group conflicts*, maupun *assistant conflicts*. Pencapaian tingkat akurasi 100% pada iterasi yang relatif singkat ini mengkonfirmasi efisiensi komputasi dari sistem adaptif dalam memecahkan masalah multi-kendala yang kompleks.

### 4.3.4	Analisis Dinamika Parameter Adaptif Sepanjang Evolusi

**	**Keunggulan utama dari optimasi hibrida berbasis *Fuzzy Logic* adalah kemampuannya dalam meniadakan parameter kontrol statis dan menggantinya dengan parameter adaptif (*Adaptive Crossover Rate* dan *Adaptive Mutation Rate*). Berdasarkan data rekapitulasi, dinamika nilai probabilitas *crossover* (CR) dan mutasi (MR) menunjukkan pola adaptasi (*diversity-exploitation trade-off*) yang sangat responsif terhadap kondisi *real-time* populasi.

**	**Dinamika nilai Crossover Rate (CR) memperlihatkan profil tingkat tinggi pada fase awal evolusi. Sejak iterasi ke-1 hingga iterasi ke-23, nilai CR terkunci pada batas atas konstan sebesar 0.9000. Bertahannya nilai CR yang tinggi secara persisten ini mengindikasikan bahwa keberagaman atau *diversity* populasi (yang direpresentasikan melalui standar deviasi *fitness*) berada pada level yang sangat rendah atau homogen. Sebagai responsnya, pengendali *fuzzy* memaksa algoritma untuk melakukan pertukaran informasi genetik secara agresif (*eksplorasi tinggi*) agar ruang solusi terjelajahi seluas mungkin, mencegah populasi terpusat pada satu area suboptimal. Penurunan CR mulai terjadi secara drastis pada iterasi ke-24, di mana nilainya menyusut menjadi 0.8217, lalu 0.7559 pada iterasi 25, dan terus menurun secara berangsur hingga mencapai batas minimal eksploitatif sebesar 0.3000 pada iterasi ke-32 dan 33. Turunnya probabilitas *crossover* ini bertepatan dengan melonjaknya *fitness* populasi. Ketika populasi sudah menemukan susunan genetik jadwal yang berkualitas tinggi, CR diturunkan secara mekanis untuk melindungi kromosom elit dari kerusakan (destruksi) akibat operasi penyilangan yang tidak perlu (Han & Xiao, 2022, Xie et al., 2022).

**	**Di sisi lain, parameter Mutation Rate (MR) menunjukkan profil perilaku stabil yang berselingan dengan lonjakan (*spikes*) tajam. Selama proses evolusi, MR dominan ditahan pada level minimum, yakni 0.0100. Probabilitas mutasi 1% ini merupakan bentuk kebijakan eksploitatif agar modifikasi acak tidak merusak integritas solusi yang sedang membaik secara konstan. Namun, pada iterasi ke-6, ke-12, ke-23, dan ke-29, nilai MR terpantau melonjak menjadi 0.0260. Kondisi populasi yang memicu lonjakan ini adalah akumulasi *stagnation counter*, ketika *Max Fitness* tidak mengalami perbaikan positif dalam rentang beberapa generasi sebelumnya, sistem secara otomatis mendeteksi ancaman konvergensi prematur (*local optimum*). Sesuai dengan studi yang dilakukan oleh Pytel (2025), lonjakan *mutation rate* ini diinjeksi secara instan untuk menciptakan lompatan acak genetik yang ekstrem, sehingga memaksa populasi keluar dari zona stagnan. Fakta bahwa sesaat setelah iterasi 29 (di mana terjadi lonjakan mutasi terakhir) nilai *fitness* langsung melonjak tajam ke angka 0.500000 hingga konvergen menuju 1.000 membuktikan efektivitas mekanisme adaptif *fuzzy* ini.

### 4.3.5	Analisis Peran Fuzzy Logic dalam Meningkatkan Kinerja GA

**	**Keberhasilan pencapaian solusi 0-konflik hanya dalam siklus 33 iterasi menjustifikasi kapabilitas superior pengontrol ini. Implementasi skema *Fuzzy Inference System* (FIS) Sugeno yang ditenagai oleh persamaan ekuasi orde-nol *weighted average* terbukti mampu mengakomodasi adaptasi parameter secara waktu nyata (*real-time*) dan sangat efisien secara matematis (Marrouchi et al., 2024, Movassaghi & Avakh Darestani, 2022). Alih-alih mengkalkulasi integral area seperti pada metode Mamdani yang berisiko memperberat beban siklus komputasi per iterasi, komputasi linear Sugeno terbukti responsif mengeksekusi kendali ganda pada algoritma genetika.

Mekanisme regulasi mandiri (*self-regulation*) dapat diamati melalui sinkronisasi antara kontrol CR dan MR. Modul *fuzzy* CR bertindak sebagai navigator makro, saat fase awal populasi terjebak pada variasi gen yang miskin (homogen), CR dipaksa ke batas *0.90*. Seiring berjalannya evolusi dan populasi merangkak ke arah stabilitas, kontrol *fuzzy diversity* menekan CR hingga titik *0.30* secara mulus (*smooth transition*) untuk memproteksi kromosom unggul. Di saat yang sama, modul MR mendemonstrasikan perannya sebagai pemecah masalah (*troubleshooter*) mikro, ketika fase eksploitasi berjalan namun algoritma mendadak tersangkut pada *local optimum* (ditandai oleh penalti yang stagnan), sistem seketika memicu *spike* mutasi ke level *0.0260* untuk merombak kromosom. Mekanisme dinamis ini menghindari konvergensi palsu secara efektif.

Integrasi saling melengkapi ini meresonansi secara presisi dengan penemuan dari Subburaj & Miruna Joe Amali (2025) yang melaporkan bahwa kontrol keberagaman populasi (*diversity control*) secara adaptif menjadi kunci utama keseimbangan *exploration-exploitation*. Keberhasilan mematahkan jebakan stagnasi di ruang penjadwalan multi-kendala ini paralel dengan studi empiris Pytel (2025), yang menyatakan bahwa penyetelan ukuran mutasi (*mutation size tuning*) berbasis logika *fuzzy* memberikan ketahanan absolut terhadap *local optima*. Secara kuantitatif, resolusi absolut terhadap benturan ruang, waktu, dan dosen sejalan dengan temuan Ghaffar et al. (2022) di mana pengendali intelijen non-linear mampu memperbaiki kelemahan evolusi statis secara ekstrem. Pengendalian ganda oleh model Sugeno ini secara empiris telah berhasil merestrukturisasi algoritma heuristik klasik menjadi sistem komputasi cerdas yang kapabel menangani tantangan distribusi jadwal laboratorium secara utuh.

### 4.3.6	Dinamika Parameter Adaptif dan Stagnansi

Hasil eksperimen menunjukkan bahwa integrasi Fuzzy Logic memang mengubah perilaku internal GA. Hal ini terlihat dari nilai Cr dan Mr yang tidak konstan selama proses optimasi. Efek yang paling terlihat berada pada metrik stagnasi, di mana GA Fuzzy memiliki rata-rata stagnasi maksimum yang lebih rendah dibandingkan GA klasik. Artinya, fuzzy controller membantu menjaga proses evolusi agar tidak terlalu lama berada pada kondisi tanpa perbaikan fitness.

Namun, penurunan stagnansi tersebut tidak secara otomatis menghasilkan performa akhir yang lebih unggul pada seluruh metrik. Pada dataset dan konfigurasi eksperimen yang digunakan, GA klasik masih menunjukkan kecenderungan lebih baik pada beberapa aspek seperti penalty akhir, kecepatan konvergensi, dan waktu komputasi. Oleh karena itu, interpretasi yang digunakan dalam penelitian ini adalah bahwa Fuzzy Logic berhasil diintegrasikan sebagai mekanisme adaptif untuk menguji penghindaran stagnansi dan local optimum, tetapi belum dapat dinyatakan sebagai peningkatan performa menyeluruh terhadap GA klasik.

## 4.4	Evaluasi Performa Algoritma Genetika dengan Fuzzy Logic

Evaluasi performa dilakukan untuk membandingkan GA klasik dan GA yang diintegrasikan dengan Fuzzy Logic pada skenario penjadwalan praktikum. Penekanan evaluasi tidak diarahkan untuk membuktikan bahwa fuzzy selalu mengungguli GA klasik, melainkan untuk melihat bagaimana kedua pendekatan menghasilkan jadwal valid, bagaimana pola konvergensinya, serta sejauh mana mekanisme adaptif fuzzy memengaruhi stagnansi dan beban komputasi.

### 4.4.1	Konfigurasi Eksperimen dan Dataset

Pengujian dilakukan dengan desain eksperimen berpasangan. Setiap pasangan run menggunakan populasi awal yang identik agar perbandingan Classic GA dan Fuzzy GA lebih adil. Jumlah percobaan yang digunakan adalah 20 run untuk masing-masing algoritma. Parameter utama eksperimen meliputi population size sebesar 50, maximum iterations sebesar 250, selection menggunakan tournament selection dengan k = 3, crossover menggunakan single-point crossover, mutation menggunakan random gene reassignment, dan stopping condition berupa tercapainya total penalty = 0 atau batas iterasi maksimum.

Tabel 4.63 Konfigurasi Dataset dan Eksperimen

| Parameter | Nilai |
| --- | --- |
| Population Size | 50 |
| Genes (Sesi Praktikum) | 100 |
| Maximum Iterations | 250 |
| Jumlah Run | 20 |
| Selection | Tournament (k=3) |
| Crossover | Single-point |
| Mutation | Random gene reassignment |
| Stopping Condition | All penalties = 0 OR max iterations |
| Jumlah Ruang | 43 |
| Jumlah Asisten | 138 |
| Jumlah Mata Kuliah | 396 |
| Sesi Terjadwal | 870 |
| Jumlah Hari | 5 |
| Hard Constraints | Room conflict, Assistant conflict |
| Soft Constraints | Group parallel, Theory overlap, Consecutive sessions |
| Bobot Penalty | Room=3.0, Assistant=2.0, Group=1.0, Theory=2.5, |
| Density Ratio | 0.0775 |

Nilai genes = 100 perlu dipahami sebagai panjang kromosom aktif atau jumlah sesi praktikum yang dijadwalkan dalam eksperimen utama. Sementara itu, jumlah sesi terjadwal pada konfigurasi dataset merepresentasikan keseluruhan data jadwal atau kelas yang tersedia sebagai sumber dan konteks validasi. Dengan demikian, apabila jumlah data mentah lebih besar daripada jumlah genes, eksperimen membaca subset hasil cleaning atau filtering, bukan berarti seluruh data mentah selalu masuk sebagai gen pada satu kromosom.

### 4.4.2	Analisis Statistik Hasil Eksperimen

Secara deskriptif, kedua algoritma mampu menghasilkan solusi optimal pada sebagian besar run. Median fitness Classic GA dan Fuzzy GA sama-sama berada pada nilai 1,0. Namun, rata-rata fitness Classic GA lebih tinggi, yaitu 0,975 dengan standar deviasi 0,1118, sedangkan Fuzzy GA memperoleh rata-rata 0,9254 dengan standar deviasi 0,2299. Dari sisi penalty, Classic GA memiliki rata-rata penalty 0,05, sedangkan Fuzzy GA memiliki rata-rata penalty 0,30. Hasil ini menunjukkan bahwa pada konfigurasi pengujian ini, Classic GA lebih stabil dalam menghasilkan penalty akhir yang rendah.

Tabel 4.64 Statistik Deskriptif Hasil Eksperimen

| Metrik | Algoritma | Min | Max | Rata-rata | Std Dev | Median |
| --- | --- | --- | --- | --- | --- | --- |
| Fitness | GA Klasik | 0,5000 | 1,0000 | 0,9750 | 0,1118 | 1,0000 |
| Fitness | GA Fuzzy | 0,2222 | 1,0000 | 0,9254 | 0,2299 | 1,0000 |
| Penalty | GA Klasik | 0,0000 | 1,0000 | 0,0500 | 0,2200 | 0,0000 |
| Penalty | GA Fuzzy | 0,0000 | 3,5000 | 0,3000 | 0,9400 | 0,0000 |
| Iterasi Konvergensi | GA Klasik | 15,0000 | 102,0000 | 55,5300 | 26,7100 | 46,0000 |
| Iterasi Konvergensi | GA Fuzzy | 21,0000 | 147,0000 | 70,7800 | 34,8200 | 72,0000 |
| Waktu (s) | GA Klasik | 60,3000 | 650,9100 | 216,0200 | 134,2200 | 182,0200 |
| Waktu (s) | GA Fuzzy | 90,8600 | 648,5200 | 297,0100 | 158,6800 | 281,5300 |
| Stagnasi Maks | GA Klasik | 3,0000 | 135,0000 | 16,7500 | 30,6600 | 5,0000 |
| Stagnasi Maks | GA Fuzzy | 2,0000 | 57,0000 | 13,5500 | 16,1200 | 5,0000 |

Terlihat pada tabel 4.64 tingkat konvergensi juga menunjukkan bahwa Classic GA berhasil mencapai solusi optimal pada 19 dari 20 run atau 95%, sedangkan Fuzzy GA mencapai solusi optimal pada 18 dari 20 run atau 90%. Dengan kata lain, kedua algoritma berhasil membangkitkan jadwal valid pada mayoritas percobaan, tetapi Classic GA memiliki reliabilitas deskriptif yang sedikit lebih tinggi pada eksperimen ini.

### 4.4.3	Analisis Konvergensi, Stagnansi, dan Waktu Komputasi

Kecepatan konvergensi diukur dari jumlah iterasi yang dibutuhkan untuk mencapai penalty = 0. Classic GA membutuhkan rata-rata 55,53 iterasi, sedangkan Fuzzy GA membutuhkan rata-rata 70,78 iterasi. Perbedaan ini menunjukkan bahwa Classic GA cenderung mencapai solusi bebas penalty lebih cepat pada konfigurasi dataset yang digunakan. Dari sisi waktu komputasi, Classic GA juga lebih ringan dengan rata-rata 216,02 detik dibandingkan Fuzzy GA sebesar 297,01 detik.

Walaupun demikian, Fuzzy GA menunjukkan keunggulan pada stagnasi. Rata-rata stagnasi maksimum Classic GA adalah 16,75 iterasi, sedangkan Fuzzy GA adalah 13,55 iterasi. Selisih ini mengindikasikan bahwa pengaturan mutation rate adaptif bekerja sesuai tujuan eksperimentalnya, yaitu mengurangi durasi populasi berada dalam kondisi tanpa perbaikan fitness. Dengan demikian, manfaat fuzzy controller lebih terlihat pada perilaku proses pencarian, bukan pada kemenangan akhir di seluruh metrik performa.

Tabel 4.65 Perbandingan Metrik Performa Utama

| Metrik | Classic | Fuzzy | Lebih Baik | Keterangan |
| --- | --- | --- | --- | --- |
| Fitness | 0,9750 | 0,9254 | GA Klasik | Tidak signifikan |
| Penalty | 0,0500 | 0,3000 | GA Klasik | Tidak signifikan |
| Conflict | 0,0500 | 0,1500 | GA Klasik | Tidak signifikan |
| Convergence Speed | 55,5263 | 70,7778 | GA Klasik | Tidak signifikan |
| Convergence Rate | 0,9500 | 0,9000 | GA Klasik | - |
| Stagnation | 16,7500 | 13,5500 | GA Fuzzy | Tidak signifikan |
| Fitness Growth | 0,0212 | 0,0165 | GA Klasik | Tidak signifikan |
| Time | 216,0153 | 297,0111 | GA Klasik | Tidak signifikan setelah koreksi Holm |
| Efficiency | 0,0002 | 0,0001 | GA Klasik | - |
| Makespan | 129,8750 | 129,9750 | GA Klasik | - |
| Flow Time | 222,6000 | 222,6000 | Sama | - |
| Hours per Session | 2,2260 | 2,2260 | Sama | - |

Berdasarkan Tabel 4.65, Classic GA menunjukkan performa yang lebih baik pada sebagian besar metrik utama, seperti fitness, penalty, conflict, convergence speed, convergence rate, fitness growth, waktu komputasi, efficiency, dan makespan. Rata-rata fitness Classic GA sebesar 0,9750 lebih tinggi dibandingkan Fuzzy GA sebesar 0,9254, sedangkan nilai penalty dan conflict Classic GA juga lebih rendah. Classic GA juga lebih cepat mencapai kondisi penalty = 0 dengan rata-rata 55,5263 iterasi dibandingkan Fuzzy GA sebesar 70,7778 iterasi, serta membutuhkan waktu komputasi lebih rendah, yaitu 216,0153 detik dibandingkan 297,0111 detik. Namun, Fuzzy GA menunjukkan hasil lebih baik pada metrik stagnation dengan rata-rata 13,5500 iterasi, lebih rendah dibandingkan Classic GA sebesar 16,7500. Hal ini menunjukkan bahwa fuzzy controller belum memberikan keunggulan menyeluruh pada hasil akhir, tetapi berperan dalam mengurangi durasi stagnansi selama proses pencarian solusi. Dengan demikian, hasil evaluasi ini menunjukkan bahwa Classic GA lebih stabil dan efisien pada konfigurasi pengujian yang digunakan, sedangkan Fuzzy GA tetap memiliki kontribusi sebagai mekanisme adaptif yang membantu menjaga dinamika pencarian solusi, khususnya dalam mengurangi kondisi populasi tanpa perbaikan fitness.

### 4.4.4	Hasil Jadwal Terbangkitkan

Hasil jadwal terbangkitkan pada bagian ini diambil dari generated schedule pada laporan hasil eksperimen. Setiap tabel menampilkan 100 sesi praktikum yang menjadi kromosom aktif pada proses optimasi. Data yang ditampilkan meliputi mata praktikum, grup, hari, jam mulai, jam selesai, dan ruang. Jadwal ini menunjukkan bahwa sistem mampu membangkitkan susunan praktikum berdasarkan dataset dan konfigurasi yang diberikan pengguna.

Pada jadwal yang telah dibangkitkan, distribusi hari didominasi oleh Sabtu sebanyak 29 sesi dan Jumat sebanyak 26 sesi. Ruang yang paling sering digunakan antara lain 1217 sebanyak 8 kali, 1209 sebanyak 7 kali, serta 1143, 798, dan 778 masing-masing sebanyak 6 kali. Total durasi sesi yang terbaca dari tabel jadwal Classic GA adalah 226 jam untuk 100 sesi aktif.

Tabel 4.66 Jadwal Praktikum Hasil Optimasi Classic GA

| No | Mata Praktikum | Grup | Hari | Mulai | Selesai | Ruang |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FISIKA DASAR I | R-002-1 | Jumat | 07:30 | 09:30 | 783 |
| 2 | GEOLOGI MINYAK DAN GAS BU | D-1 | Jumat | 07:30 | 09:30 | 804 |
| 3 | Praktikum Rangkaian Listr | R-001-1 | Jumat | 08:00 | 12:00 | R16 |
| 4 | Praktikum Sistem Kendali | R-001-2 | Jumat | 08:00 | 12:00 | 795 |
| 5 | KIMIA DASAR | R-001-1 | Jumat | 10:00 | 12:00 | 1145 |
| 6 | Praktikum Kimia Fisik | R-002-1 | Jumat | 10:00 | 12:00 | 802 |
| 7 | Fisika Dasar | R-002-1 | Jumat | 10:00 | 12:00 | 1149 |
| 8 | GEOLOGI MINYAK DAN GAS BU | B-1 | Jumat | 10:00 | 12:00 | 1209 |
| 9 | Fisika Dasar | B-1 | Jumat | 10:00 | 12:00 | 1217 |
| 10 | SIMULASI DAN KOMPUTASI TA | B-1 | Jumat | 10:00 | 12:00 | 618 |
| 11 | Kimia Dasar 1 | R-002-1 | Jumat | 10:00 | 12:00 | 798 |
| 12 | BIOLOGI DASAR | R-001-1 | Jumat | 13:00 | 15:00 | 1145 |
| 13 | MIKROBIOLOG I | R-001-1 | Jumat | 13:00 | 15:00 | 1152 |
| 14 | Praktikum Teknik Pemisaha | R-002-1 | Jumat | 13:00 | 15:00 | 121 |
| 15 | Praktikum Dasar Teknik Ki | R-001-1 | Jumat | 13:00 | 17:00 | 1211 |
| 16 | KIMIA DASAR | D-1 | Jumat | 13:00 | 15:00 | 1216 |
| 17 | Gayaberat dan Magnetik | R-002-1 | Jumat | 13:00 | 15:00 | 783 |
| 18 | Kimia Dasar | B-2 | Jumat | 13:00 | 15:00 | 1217 |
| 19 | Kimia Dasar | R-002-1 | Jumat | 13:00 | 17:00 | 1212 |
| 20 | MIKROBIOLOG I | R-002-1 | Jumat | 15:30 | 17:30 | 778 |
| 21 | Praktikum Sintesis dan El | R-002-1 | Jumat | 15:30 | 17:30 | R15 |
| 22 | KIMIA DASAR | A-1 | Jumat | 15:30 | 17:30 | 122 |
| 23 | Kuliah Lapangan Geologi | R-002-1 | Jumat | 15:30 | 17:30 | 1143 |
| 24 | Kimia Dasar | B-1 | Jumat | 15:30 | 17:30 | 1217 |
| 25 | PEMBERAIAN BATUAN | A-1 | Jumat | 15:30 | 17:30 | 1151 |
| 26 | Praktikum Mikroprosessor | R-002-1 | Jumat | 15:30 | 17:30 | 359 |
| 27 | Praktikum Geometri | R-002-1 | Kamis | 07:30 | 09:30 | 791 |
| 28 | KOMPUTASI GEOFISIKA | R-002-1 | Kamis | 07:30 | 09:30 | 1143 |
| 29 | GEOINFORMA SI | B-1 | Kamis | 07:30 | 09:30 | 618 |
| 30 | Praktikum Sistem Kendali | R-001-1 | Kamis | 08:00 | 12:00 | 795 |
| 31 | KIMIA DASAR | R-001-2 | Kamis | 13:00 | 15:00 | 1145 |
| 32 | Prak.Analisis Mutu Sawit | R-001-1 | Kamis | 13:00 | 15:00 | T-R2 |
| 33 | Praktikum Dasar Teknik Ki | R-003-1 | Kamis | 13:00 | 17:00 | 1212 |
| 34 | BIOLOGI DASAR | R-001-2 | Kamis | 15:30 | 17:30 | 1145 |
| 35 | Prak.Teknik Sampling dan | R-001-1 | Kamis | 15:30 | 17:30 | 798 |
| 36 | SEISMIK INVERSI DAN SEISM | R-001-1 | Kamis | 15:30 | 17:30 | 1143 |
| 37 | Perpetaan | B-2 | Kamis | 15:30 | 17:30 | 1151 |
| 38 | GEOLOGI STRUKTUR | B-1 | Kamis | 15:30 | 17:30 | R11 |
| 39 | Fisika Dasar 1 | R-002-1 | Kamis | 15:30 | 17:30 | 1205 |
| 40 | METODE NUMERIK | R-003-1 | Rabu | 10:00 | 12:00 | 807 |
| 41 | GENETIKA | R-002-1 | Rabu | 13:00 | 15:00 | 778 |
| 42 | Fisika Dasar | R-003-1 | Rabu | 13:00 | 17:00 | 1211 |
| 43 | ELEKTRONIKA DAN INSTRUMEN | R-002-1 | Rabu | 13:00 | 15:00 | 1143 |
| 44 | HIDROGEOLO GI | A-1 | Rabu | 13:00 | 15:00 | T-R2 |
| 45 | Kimia Dasar | A-1 | Rabu | 13:00 | 15:00 | 1217 |
| 46 | Praktikum Mekanika Tanah | R-001-1 | Rabu | 13:00 | 17:00 | R16 |
| 47 | KOMPUTASI GEOFISIKA | R-001-1 | Rabu | 15:30 | 17:30 | 1143 |
| 48 | SISTEM INFORMASI GEOGRAFI | D-1 | Rabu | 15:30 | 17:30 | 804 |
| 49 | Perpetaan | B-1 | Rabu | 15:30 | 17:30 | 795 |
| 50 | GEOLOGI STRUKTUR | B-2 | Rabu | 15:30 | 17:30 | 618 |
| 51 | Prak.Kimia Klinis | R-001-1 | Sabtu | 07:30 | 09:30 | 359 |
| 52 | Fisika Dasar | R-002-2 | Sabtu | 07:30 | 09:30 | 1149 |
| 53 | Perilaku Hewan | R-001-1 | Sabtu | 07:30 | 09:30 | 778 |
| 54 | FISIKA DASAR I | R-001-1 | Sabtu | 07:30 | 09:30 | 795 |
| 55 | Praktikum Geometri | R-001-1 | Sabtu | 07:30 | 09:30 | 791 |
| 56 | Fisika Dasar | B-2 | Sabtu | 07:30 | 09:30 | 1217 |
| 57 | MEKANIKA BATUAN | B-1 | Sabtu | 07:30 | 09:30 | 1209 |
| 58 | Pengolahan Bahan Galian | B-2 | Sabtu | 07:30 | 09:30 | 1151 |
| 59 | Fisika Dasar 1 | R-003-2 | Sabtu | 07:30 | 09:30 | 798 |
| 60 | Praktikum Hidrolika | R-002-1 | Sabtu | 08:00 | 12:00 | T-R5 |
| 61 | Praktikum Kimia Unsur | R-002-1 | Sabtu | 10:00 | 12:00 | 1211 |
| 62 | Praktikum Kimia Fisik | R-001-1 | Sabtu | 10:00 | 12:00 | 1145 |
| 63 | FISIKA DASAR I | A-1 | Sabtu | 10:00 | 12:00 | R11 |
| 64 | KIMIA DASAR 1 | C-1 | Sabtu | 10:00 | 12:00 | 1209 |
| 65 | HIDROGEOLO GI | A-2 | Sabtu | 10:00 | 12:00 | T-R2 |
| 66 | Fisika Dasar | A-1 | Sabtu | 10:00 | 12:00 | 1217 |
| 67 | Pengolahan Bahan Galian | B-1 | Sabtu | 10:00 | 12:00 | 1151 |
| 68 | Kimia Dasar 1 | R-001-1 | Sabtu | 10:00 | 12:00 | 798 |
| 69 | BIOKIMIA | R-001-1 | Sabtu | 13:00 | 15:00 | 778 |
| 70 | Praktikum Teknologi Oleok | R-001-1 | Sabtu | 13:00 | 15:00 | 122 |
| 71 | PETROGRAFI | D-1 | Sabtu | 13:00 | 15:00 | 804 |
| 72 | Kimia Dasar | A-2 | Sabtu | 13:00 | 15:00 | 1217 |
| 73 | Praktikum Hidrolika | R-001-1 | Sabtu | 13:00 | 17:00 | T-R3 |
| 74 | Fisika Dasar 1 | R-003-1 | Sabtu | 13:00 | 15:00 | 798 |
| 75 | Praktikum Rangkaian Listr | R-002-1 | Sabtu | 13:00 | 17:00 | 1205 |
| 76 | GENETIKA | R-002-2 | Sabtu | 15:30 | 17:30 | 778 |
| 77 | Mikrobiologi Lingkungan | R-001-1 | Sabtu | 15:30 | 17:30 | 1152 |
| 78 | MENGGAMBA R TEKNIK | R-001-1 | Sabtu | 15:30 | 17:30 | 618 |
| 79 | GEOLOGI STRUKTUR | B-1 | Sabtu | 15:30 | 17:30 | 1216 |
| 80 | Praktikum Geometri | R-002-2 | Selasa | 07:30 | 09:30 | 791 |
| 81 | MIKROBIOLOG I | R-002-2 | Selasa | 10:00 | 12:00 | 778 |
| 82 | Praktikum Kimia Analitik | R-001-1 | Selasa | 10:00 | 12:00 | 798 |
| 83 | Fisika Dasar | A-2 | Selasa | 10:00 | 12:00 | 1217 |
| 84 | Prak.Teknologi Biofuel | R-001-1 | Selasa | 13:00 | 15:00 | R13 |
| 85 | FISIKA KOMPUTASI | R-002-1 | Selasa | 13:00 | 15:00 | 807 |
| 86 | KOMPUTASI GEOFISIKA | R-003-1 | Selasa | 13:00 | 15:00 | 804 |
| 87 | GEOINFORMA SI | A-1 | Selasa | 13:00 | 15:00 | 1209 |
| 88 | ELEKTRONIKA DASAR I | R-001-1 | Selasa | 15:30 | 17:30 | 795 |
| 89 | GEOMORFOL OGI | B-1 | Selasa | 15:30 | 17:30 | 1209 |
| 90 | MIKROPALEO NTOLOGI | B-1 | Selasa | 15:30 | 17:30 | 1216 |
| 91 | Aplikasi Komputer | R-001-1 | Selasa | 15:30 | 17:30 | 1213 |
| 92 | Prak. Analisis Mutu Sawit | R-001-1 | Senin | 10:00 | 12:00 | 1209 |
| 93 | Praktikum Dasar Teknik Ki | R-001-2 | Senin | 13:00 | 17:00 | R11 |
| 94 | KIMIA DASAR | R-004-1 | Senin | 13:00 | 15:00 | 1147 |
| 95 | Metode Seismik | R-001-1 | Senin | 13:00 | 15:00 | 783 |
| 96 | Praktikum Bahan Bangunan | R-002-1 | Senin | 13:00 | 17:00 | R14 |
| 97 | FISIKA DASAR I | C-1 | Senin | 15:30 | 17:30 | 1209 |
| 98 | ELEKTRONIKA DAN INSTRUMEN | R-001-1 | Senin | 15:30 | 17:30 | 1143 |
| 99 | Aplikasi Komputer | R-003-1 | Senin | 15:30 | 17:30 | T-R4 |
| 100 | PEMBERAIAN BATUAN | B-1 | Senin | 15:30 | 17:30 | 1151 |

Pada jadwal Fuzzy GA, distribusi hari didominasi oleh Sabtu sebanyak 30 sesi dan Jumat sebanyak 25 sesi. Ruang yang paling sering digunakan adalah 1152 sebanyak 9 kali, 1145 sebanyak 8 kali, dan 618 sebanyak 7 kali. Total durasi sesi yang terbaca dari tabel jadwal Fuzzy GA adalah 224 jam untuk 100 sesi aktif.

Tabel 4.67 Jadwal Praktikum Hasil Optimasi Fuzzy GA

| No | Mata Praktikum | Grup | Hari | Mulai | Selesai | Ruang |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Praktikum Kimia Fisik | R-001-1 | Jumat | 07:30 | 09:30 | 783 |
| 2 | Fisika Dasar | R-002-1 | Jumat | 07:30 | 09:30 | 1149 |
| 3 | Ekologi Tumbuhan | R-001-1 | Jumat | 07:30 | 09:30 | 1145 |
| 4 | KIMIA DASAR | R-002-1 | Jumat | 07:30 | 09:30 | 1143 |
| 5 | MEKANIKA BATUAN | A-2 | Jumat | 07:30 | 09:30 | R11 |
| 6 | Praktikum Kimia Analitik | R-002-1 | Jumat | 10:00 | 12:00 | 778 |
| 7 | Prak. Teknik Pemisahan | R-001-1 | Jumat | 10:00 | 12:00 | 8 |
| 8 | Fisika Dasar | R-002-2 | Jumat | 10:00 | 12:00 | 1149 |
| 9 | Entomologi | R-001-1 | Jumat | 10:00 | 12:00 | 1145 |
| 10 | SIMULASI DAN KOMPUTASI TA | B-1 | Jumat | 10:00 | 12:00 | 618 |
| 11 | GEOLOGI STRUKTUR | A-1 | Jumat | 10:00 | 12:00 | 1212 |
| 12 | FISIKA DASAR | R-001-2 | Jumat | 13:00 | 15:00 | 1145 |
| 13 | Fisika Dasar | R-003-1 | Jumat | 13:00 | 17:00 | T-R3 |
| 14 | Mikrobiologi Lingkungan | R-001-1 | Jumat | 13:00 | 15:00 | 1152 |
| 15 | FISIKA DASAR I | R-001-1 | Jumat | 13:00 | 15:00 | 1143 |
| 16 | SISTEM INFORMASI GEOGRAFI | R-002-1 | Jumat | 13:00 | 15:00 | 783 |
| 17 | Praktikum Hidrolika | R-002-1 | Jumat | 13:00 | 17:00 | 804 |
| 18 | BIOLOGI DASAR | R-001-2 | Jumat | 15:30 | 17:30 | 1145 |
| 19 | Prak.Analisis Obat dan Ma | R-001-1 | Jumat | 15:30 | 17:30 | R13 |
| 20 | Prak. Analisis Kromatogra | R-001-1 | Jumat | 15:30 | 17:30 | 1213 |
| 21 | Mikroteknik | R-001-1 | Jumat | 15:30 | 17:30 | 1152 |
| 22 | MENGGAMBA R TEKNIK | R-001-1 | Jumat | 15:30 | 17:30 | 618 |
| 23 | GEOLOGI STRUKTUR | B-1 | Jumat | 15:30 | 17:30 | 1216 |
| 24 | Kimia Dasar | B-2 | Jumat | 15:30 | 17:30 | 1217 |
| 25 | MEKANIKA TEKNIK | B-1 | Jumat | 15:30 | 17:30 | 1151 |
| 26 | SEISMIK INVERSI DAN SEISM | R-001-1 | Kamis | 07:30 | 09:30 | 1143 |
| 27 | Pencemaran Udara | A-1 | Kamis | 07:30 | 09:30 | 1205 |
| 28 | Aplikasi Komputer | R-002-1 | Kamis | 08:00 | 12:00 | 8 |
| 29 | Praktikum Operasi Teknik | R-002-1 | Kamis | 08:00 | 12:00 | 618 |
| 30 | Prak.Analisis Mutu Sawit | R-001-1 | Kamis | 10:00 | 12:00 | 787 |
| 31 | SEISMIK INVERSI DAN SEISM | R-002-1 | Kamis | 10:00 | 12:00 | 807 |
| 32 | Praktikum Dasar Teknik Ki | R-003-2 | Kamis | 13:00 | 17:00 | R14 |
| 33 | MEKANIKA TEKNIK | A-1 | Kamis | 13:00 | 15:00 | 807 |
| 34 | Praktikum Mekanika Tanah | R-001-1 | Kamis | 13:00 | 17:00 | 1219 |
| 35 | BIOLOGI DASAR | R-001-1 | Kamis | 15:30 | 17:30 | 1145 |
| 36 | MEKANIKA TEKNIK | B-2 | Kamis | 15:30 | 17:30 | 1151 |
| 37 | Prak.Teknologi Biofuel | R-001-1 | Rabu | 07:30 | 09:30 | 787 |
| 38 | Kimia Dasar | R-001-2 | Rabu | 10:00 | 12:00 | 1211 |
| 39 | GENETIKA | R-001-1 | Rabu | 13:00 | 15:00 | 1152 |
| 40 | Prak. Analisis Mutu Sawit | R-001-1 | Rabu | 13:00 | 15:00 | T-R5 |
| 41 | Praktikum Pengantar Tekni | R-006-1 | Rabu | 13:00 | 15:00 | 618 |
| 42 | MEKANIKA BATUAN | B-1 | Rabu | 13:00 | 15:00 | T-R1 |
| 43 | Pengolahan Bahan Galian | A-1 | Rabu | 13:00 | 15:00 | 1151 |
| 44 | FISIKA DASAR | R-001-1 | Rabu | 15:30 | 17:30 | 1145 |
| 45 | BIOKIMIA | R-002-1 | Rabu | 15:30 | 17:30 | 1152 |
| 46 | Praktikum Kimia Unsur | R-001-1 | Rabu | 15:30 | 17:30 | T-R4 |
| 47 | KOMPUTASI GEOFISIKA | R-001-1 | Rabu | 15:30 | 17:30 | 1143 |
| 48 | MEKANIKA BATUAN | A-1 | Rabu | 15:30 | 17:30 | R11 |
| 49 | KIMIA DASAR | R-001-2 | Sabtu | 07:30 | 09:30 | 1145 |
| 50 | MIKROBIOLOG I | R-002-2 | Sabtu | 07:30 | 09:30 | 778 |
| 51 | Ikhtiologi | R-001-1 | Sabtu | 07:30 | 09:30 | 1152 |
| 52 | BIOLOGI DASAR | R-001-1 | Sabtu | 07:30 | 09:30 | 795 |
| 53 | METODE NUMERIK | R-003-1 | Sabtu | 07:30 | 09:30 | 807 |
| 54 | MIKROPALEO NTOLOGI | A-1 | Sabtu | 07:30 | 09:30 | 1216 |
| 55 | SIMULASI DAN KOMPUTASI TA | A-1 | Sabtu | 07:30 | 09:30 | 618 |
| 56 | Aplikasi Komputer | R-001-1 | Sabtu | 08:00 | 12:00 | 359 |
| 57 | Praktikum Teknik Pemisaha | R-002-1 | Sabtu | 10:00 | 12:00 | 1149 |
| 58 | Praktikum Kimia Organik L | R-002-1 | Sabtu | 10:00 | 12:00 | 121 |
| 59 | Biologi Mikroba Penyakit | R-001-1 | Sabtu | 10:00 | 12:00 | 778 |
| 60 | FISIKA DASAR I | C-1 | Sabtu | 10:00 | 12:00 | 1209 |
| 61 | ELEKTRONIKA DASAR I | R-001-1 | Sabtu | 10:00 | 12:00 | 795 |
| 62 | Metode Seismik | R-002-1 | Sabtu | 10:00 | 12:00 | 783 |
| 63 | Kimia Dasar | R-001-1 | Sabtu | 10:00 | 12:00 | 1211 |
| 64 | Kimia Dasar 1 | R-003-1 | Sabtu | 10:00 | 12:00 | 798 |
| 65 | Fisika Dasar | R-001-2 | Sabtu | 13:00 | 15:00 | 1149 |
| 66 | Praktikum Dasar Teknik Ki | R-003-1 | Sabtu | 13:00 | 17:00 | 1211 |
| 67 | Ekologi Perairan dan Laha | R-001-1 | Sabtu | 13:00 | 15:00 | 1152 |
| 68 | Kuliah Lapangan Geologi | R-001-1 | Sabtu | 13:00 | 15:00 | 1143 |
| 69 | GEOLOGI STRUKTUR | A-1 | Sabtu | 13:00 | 15:00 | 1216 |
| 70 | Aplikasi Komputer | R-002-2 | Sabtu | 13:00 | 17:00 | R15 |
| 71 | MEKANIKA BATUAN | B-2 | Sabtu | 13:00 | 15:00 | T-R5 |
| 72 | Praktikum Mekanika Tanah | R-002-1 | Sabtu | 13:00 | 17:00 | 46 |
| 73 | MIKROBIOLOG I | R-001-1 | Sabtu | 15:30 | 17:30 | 1152 |
| 74 | Etnobotani | R-001-1 | Sabtu | 15:30 | 17:30 | 778 |
| 75 | Gayaberat dan Magnetik | R-002-1 | Sabtu | 15:30 | 17:30 | 783 |
| 76 | KRISTALOGRA FI DAN MINERAL | B-1 | Sabtu | 15:30 | 17:30 | 1216 |
| 77 | PETROGRAFI | D-1 | Sabtu | 15:30 | 17:30 | 804 |
| 78 | SIMULASI DAN KOMPUTASI TA | C-1 | Sabtu | 15:30 | 17:30 | 618 |
| 79 | MIKROBIOLOG I | R-002-1 | Selasa | 07:30 | 09:30 | 778 |
| 80 | Prak.Teknik Sampling dan | R-001-1 | Selasa | 07:30 | 09:30 | 1152 |
| 81 | Simulasi Proses Industri | R-001-1 | Selasa | 07:30 | 09:30 | 1148 |
| 82 | GEOINFORMA SI | A-1 | Selasa | 07:30 | 09:30 | 1209 |
| 83 | Praktikum Teknik Pemisaha | R-001-1 | Selasa | 10:00 | 12:00 | 1149 |
| 84 | FISIKA DASAR I | R-004-1 | Selasa | 10:00 | 12:00 | 1213 |
| 85 | TEKNIK KOMUNIKASI GEOLOGI | D-1 | Selasa | 10:00 | 12:00 | 1204 |
| 86 | KIMIA ANALISIS | A-1 | Selasa | 13:00 | 15:00 | 1216 |
| 87 | BIOKIMIA | R-002-2 | Selasa | 15:30 | 17:30 | 1152 |
| 88 | Praktikum Sistem Utilitas | R-001-1 | Selasa | 15:30 | 17:30 | 787 |
| 89 | FISIKA DASAR I | R-002-1 | Selasa | 15:30 | 17:30 | 783 |
| 90 | Kimia Dasar | B-1 | Selasa | 15:30 | 17:30 | 1217 |
| 91 | KIMIA DASAR | R-001-1 | Senin | 07:30 | 09:30 | 1145 |
| 92 | Kimia Dasar 1 | R-003-2 | Senin | 07:30 | 09:30 | 798 |
| 93 | Praktikum Mikroprosessor | R-001-1 | Senin | 07:30 | 09:30 | 359 |
| 94 | Praktikum Teknologi Minya | R-001-1 | Senin | 10:00 | 12:00 | 1219 |
| 95 | SIMULASI DAN KOMPUTASI TA | C-2 | Senin | 10:00 | 12:00 | 618 |
| 96 | Fisika Dasar | R-001-1 | Senin | 13:00 | 17:00 | 1219 |
| 97 | Praktikum Sistem Kendali | R-002-1 | Senin | 13:00 | 17:00 | 802 |
| 98 | Perancangan Alat Proses | R-001-1 | Senin | 15:30 | 17:30 | 1151 |
| 99 | FISIKA DASAR I | A-1 | Senin | 15:30 | 17:30 | 1216 |
| 100 | Praktikum Analisis Mutu S | R-001-1 | Senin | 15:30 | 17:30 | 1147 |

Kedua jadwal tersebut menunjukkan bahwa sistem dapat menghasilkan susunan praktikum yang dapat dibaca langsung oleh pengguna dan dapat dievaluasi kembali berdasarkan konfigurasi yang dipilih. Dengan kata lain, kontribusi sistem tidak hanya berada pada nilai fitness, tetapi juga pada kemampuan aplikasi untuk menghasilkan jadwal operasional yang fleksibel, dapat direproduksi, dan dapat disesuaikan dengan constraint pengguna seperti forbidden times, data kelas, ruang, serta ketersediaan asisten.

### 4.4.5 Perbandingan Hasil Evaluasi dengan Penelitian Terdahulu

Hasil penelitian ini tetap sejalan dengan penelitian terdahulu yang menempatkan Algoritma Genetika sebagai metode yang efektif untuk menyelesaikan masalah penjadwalan. Penelitian , , serta beberapa penelitian lain yang telah dibahas pada bagian tinjauan pustaka menunjukkan bahwa Algoritma Genetika mampu mengurangi bentrokan jadwal dan membantu proses penyusunan jadwal secara otomatis. Pada penelitian ini, hal tersebut juga terlihat dari kemampuan Classic GA dan Fuzzy GA dalam menghasilkan jadwal praktikum dengan tingkat konvergensi yang tinggi. Classic GA berhasil mencapai solusi optimal pada 19 dari 20 percobaan atau sebesar 95%, sedangkan Fuzzy GA berhasil mencapai solusi optimal pada 18 dari 20 percobaan atau sebesar 90%.

Jika dibandingkan dengan penelitian yang mengintegrasikan Fuzzy Logic ke dalam algoritma evolusioner, hasil penelitian ini menunjukkan temuan yang lebih moderat.  menunjukkan bahwa penerapan Multi-objective Fuzzy-based Adaptive Memetic Algorithm mampu meningkatkan penyelesaian konflik hingga 96,29%, jauh di atas GA konvensional sebesar 48,79%. Sementara itu, pada penelitian ini integrasi Fuzzy Logic belum menunjukkan peningkatan performa yang dominan dibandingkan Classic GA. Berdasarkan hasil 20 kali pengujian, Classic GA menghasilkan rata-rata fitness sebesar 0,975, sedangkan Fuzzy GA menghasilkan rata-rata fitness sebesar 0,9254. Dari sisi penalty, Classic GA memperoleh rata-rata penalty sebesar 0,05, sedangkan Fuzzy GA memperoleh rata-rata penalty sebesar 0,3. Hal ini menunjukkan bahwa pada konfigurasi dataset dan constraint yang digunakan dalam penelitian ini, Classic GA masih memiliki kecenderungan performa yang lebih baik dalam menghasilkan solusi akhir.

Meskipun demikian, Fuzzy GA tetap menunjukkan kontribusi pada aspek adaptivitas proses evolusi. Rata-rata stagnasi maksimum pada Classic GA adalah 16,75 iterasi, sedangkan pada Fuzzy GA lebih rendah, yaitu 13,55 iterasi. Temuan ini menunjukkan bahwa Fuzzy Logic Controller yang digunakan untuk mengatur parameter adaptif, khususnya mutation rate, dapat membantu mengurangi kecenderungan stagnansi selama proses evolusi. Selain itu, nilai crossover rate pada Fuzzy GA berada pada rentang 0,7 sampai 0,85 dengan rata-rata 0,8465, sedangkan mutation rate berada pada rentang 0,03 sampai 0,08 dengan rata-rata 0,0542. Perubahan nilai tersebut menunjukkan bahwa mekanisme fuzzy berjalan aktif dalam menyesuaikan parameter berdasarkan kondisi populasi.

Dari sisi efisiensi komputasi, hasil penelitian ini berbeda dengan beberapa penelitian hybrid atau fuzzy adaptive GA yang melaporkan peningkatan performa secara signifikan. Classic GA membutuhkan rata-rata waktu komputasi sebesar 216,02 detik, sedangkan Fuzzy GA membutuhkan rata-rata 297,01 detik. Selain itu, Classic GA juga membutuhkan rata-rata 55,53 iterasi untuk mencapai solusi optimal, sedangkan Fuzzy GA membutuhkan rata-rata 70,78 iterasi. Dengan demikian, pada skenario pengujian ini, integrasi Fuzzy Logic belum dapat diklaim sebagai metode yang selalu meningkatkan performa GA klasik, melainkan lebih tepat diposisikan sebagai mekanisme adaptif yang berperan dalam mengurangi stagnansi dan menjaga dinamika pencarian solusi.

Berdasarkan perbandingan tersebut, kontribusi penelitian ini tidak hanya terletak pada pembuktian bahwa Fuzzy GA lebih baik daripada Classic GA, tetapi pada keberhasilan membangun sistem penjadwalan praktikum berbasis Algoritma Genetika yang fleksibel dan dapat dikonfigurasi sesuai kebutuhan pengguna. Fleksibilitas tersebut terlihat dari kemampuan sistem dalam menerima perubahan dataset, mengatur forbidden times, serta menjalankan eksperimen dengan konfigurasi yang berbeda. Dengan demikian, penelitian ini tetap memperkuat temuan penelitian terdahulu bahwa Algoritma Genetika efektif untuk masalah penjadwalan, sekaligus menunjukkan bahwa integrasi Fuzzy Logic dapat digunakan sebagai eksperimen adaptif untuk menghindari stagnansi dan local optimum, meskipun manfaatnya masih perlu diuji lebih lanjut pada dataset dengan constraint yang lebih padat.

## 4.5	Ketercapaian, Implikasi, dan Rekomendasi Perbaikan

### 4.5.1 Ketercapaian Tujuan Penelitian

Berdasarkan hasil implementasi dan pengujian yang telah dilakukan, tujuan utama penelitian ini dapat dikatakan tercapai, yaitu membangun sistem penjadwalan praktikum laboratorium di Fakultas Sains dan Teknologi Universitas Jambi menggunakan Algoritma Genetika dengan dukungan *Fuzzy Logic* sebagai mekanisme adaptif. Sistem yang dikembangkan telah mampu merepresentasikan komponen utama penjadwalan praktikum, seperti mata praktikum, kelompok kelas, jumlah peserta, ruangan, hari, slot waktu, durasi praktikum, dan asisten ke dalam struktur gen dan kromosom. Representasi ini memungkinkan proses penjadwalan dilakukan secara komputasional melalui tahapan pembentukan populasi, evaluasi fitness, seleksi, crossover, mutasi, repair, dan validasi konflik.

Tujuan penelitian untuk menghasilkan jadwal praktikum yang layak juga telah tercapai. Hal ini ditunjukkan melalui kemampuan sistem dalam mengevaluasi konflik jadwal berdasarkan beberapa aspek utama, seperti konflik penggunaan ruangan, konflik waktu, konflik kelompok praktikum, dan konflik asisten. Fungsi fitness dan *penalty* yang diterapkan mampu memberikan ukuran kuantitatif terhadap kualitas jadwal, sehingga jadwal yang dihasilkan tidak hanya tersusun secara otomatis, tetapi juga dapat dinilai tingkat kelayakannya. Dalam konteks penjadwalan akademik, jadwal yang layak umumnya dikaitkan dengan pemenuhan hard constraint, sedangkan kualitas jadwal dapat dianalisis dari jumlah pelanggaran atau penalty yang masih tersisa (Bashab et al., 2020; Badoni et al., 2023).

Tujuan penelitian dalam menerapkan Fuzzy Logic sebagai mekanisme adaptif juga telah tercapai secara fungsional. Fuzzy Logic digunakan untuk membantu pengaturan parameter evolusi, khususnya crossover rate dan mutation rate, berdasarkan kondisi proses pencarian solusi. Mekanisme ini membuat proses optimasi tidak sepenuhnya bergantung pada nilai parameter tetap. Dalam hasil pengujian, kontribusi Fuzzy Logic lebih terlihat pada aspek dinamika pencarian, terutama pada nilai rata-rata stagnasi maksimum yang lebih rendah dibandingkan Classic GA. Hal ini menunjukkan bahwa Fuzzy Logic berperan dalam membantu sistem merespons kondisi stagnansi, meskipun belum menghasilkan keunggulan menyeluruh pada seluruh metrik evaluasi.

Hasil evaluasi menunjukkan bahwa Classic GA dan Fuzzy GA sama-sama mampu menghasilkan solusi optimal pada mayoritas percobaan. Classic GA mencapai solusi optimal pada 19 dari 20 percobaan, sedangkan Fuzzy GA mencapai solusi optimal pada 18 dari 20 percobaan. Dari sisi rata-rata fitness, penalty, waktu komputasi, dan kecepatan konvergensi, Classic GA menunjukkan hasil yang lebih baik pada konfigurasi eksperimen yang digunakan. Namun, Fuzzy GA menunjukkan rata-rata stagnasi maksimum yang lebih rendah. Dengan demikian, ketercapaian tujuan penelitian tidak sebaiknya dibaca sebagai bukti bahwa Fuzzy GA selalu lebih unggul dibandingkan Classic GA, tetapi sebagai bukti bahwa sistem penjadwalan berhasil dibangun, diuji, dan dievaluasi secara terukur.

### 4.5.2	Perbandingan dengan Penelitian Terdahulu

Hasil penelitian ini sejalan dengan karakteristik umum permasalahan penjadwalan akademik yang dijelaskan dalam berbagai penelitian terdahulu. University Course Timetabling Problem merupakan permasalahan optimasi kombinatorial yang melibatkan pengalokasian aktivitas akademik ke dalam slot waktu dan ruangan tertentu dengan mempertimbangkan constraint yang berlaku . Dalam konteks penelitian ini, aktivitas akademik tersebut direpresentasikan sebagai sesi praktikum laboratorium yang harus ditempatkan pada ruang, waktu, dan asisten yang sesuai.

menjelaskan bahwa constraint dalam penjadwalan dapat dibedakan menjadi hard constraint dan soft constraint. Jadwal yang memenuhi seluruh hard constraint dapat disebut sebagai jadwal feasible, sedangkan kualitas jadwal biasanya ditentukan dari tingkat pelanggaran constraint yang masih tersisa. Temuan ini relevan dengan penelitian ini karena sistem penjadwalan yang dikembangkan mengevaluasi kualitas solusi menggunakan nilai fitness dan penalty. Semakin kecil konflik atau penalty yang tersisa, semakin baik kualitas jadwal yang dihasilkan.

Penelitian ini juga relevan dengan kajian , yang menjelaskan bahwa hard constraint harus dipenuhi agar jadwal dapat dianggap feasible, sedangkan soft constraint berkaitan dengan peningkatan kualitas jadwal. Badoni et al. juga mencatat bahwa pendekatan yang menggabungkan repair function dan local search dapat digunakan untuk mengubah jadwal yang belum feasible menjadi jadwal yang lebih layak. Hal ini sejalan dengan mekanisme repair yang telah digunakan dalam sistem serta membuka peluang pengembangan lebih lanjut melalui *Greedy Algorithm* sebagai post-processing/fallback.

Dari sisi penggunaan Algoritma Genetika, penelitian ini mendukung temuan bahwa GA relevan untuk menyelesaikan masalah penjadwalan karena mampu melakukan pencarian solusi pada ruang kombinasi yang besar.  menyebutkan bahwa dalam GA, proses seleksi, crossover, dan mutasi digunakan untuk menghasilkan solusi baru dari populasi yang ada. Pada penelitian ini, tahapan tersebut diterapkan untuk menghasilkan alternatif jadwal praktikum dan memilih solusi dengan nilai fitness terbaik.

Integrasi Fuzzy Logic dalam penelitian ini juga memiliki kesesuaian dengan penelitian adaptive genetic algorithm.  menjelaskan bahwa nilai crossover rate dan mutation rate yang terlalu besar atau terlalu kecil dapat memengaruhi stabilitas dan kemampuan pencarian GA. Oleh karena itu, pendekatan adaptif dapat digunakan untuk menyesuaikan parameter selama proses evolusi. Dalam penelitian ini, Fuzzy Logic digunakan untuk mengatur parameter tersebut berdasarkan kondisi populasi dan stagnansi, sehingga perannya lebih tepat dipahami sebagai mekanisme adaptif, bukan sebagai metode pembanding utama terhadap Classic GA.

Dengan demikian, posisi penelitian ini berada pada irisan antara penelitian penjadwalan akademik berbasis Algoritma Genetika, evaluasi *constraint-based scheduling*, dan *adaptive evolutionary algorithm*. Kontribusi penelitian ini bukan hanya pada perbandingan performa Classic GA dan Fuzzy GA, tetapi pada pembangunan sistem penjadwalan praktikum laboratorium yang dapat menghasilkan jadwal layak, mengevaluasi konflik, serta menyediakan dasar pengembangan mekanisme repair dan post-processing yang lebih kuat.

### 4.5.3	Implikasi Penelitian

Implikasi teoretis dari penelitian ini adalah bahwa Algoritma Genetika dapat digunakan sebagai pendekatan optimasi untuk penjadwalan praktikum laboratorium yang memiliki banyak constraint. Penelitian ini memperlihatkan bahwa komponen jadwal praktikum dapat direpresentasikan dalam bentuk kromosom dan dievaluasi menggunakan fungsi fitness yang mempertimbangkan konflik serta penalty. Hal ini memperkuat pandangan bahwa masalah penjadwalan akademik dapat didekati sebagai masalah optimasi kombinatorial yang membutuhkan pencarian solusi secara iteratif.

Implikasi teoretis berikutnya adalah penggunaan Fuzzy Logic sebagai mekanisme adaptif dalam Algoritma Genetika. Hasil penelitian menunjukkan bahwa Fuzzy Logic tidak harus diposisikan sebagai metode yang menggantikan GA, tetapi dapat digunakan untuk mendukung proses evolusi melalui pengaturan parameter secara dinamis. Temuan ini penting karena dalam implementasi GA, pemilihan parameter seperti *mutation rate* dan *crossover rate* dapat memengaruhi keseimbangan antara eksplorasi dan eksploitasi. Dengan adanya *fuzzy controller*, sistem memiliki mekanisme tambahan untuk merespons kondisi stagnansi atau perubahan kualitas populasi.

Implikasi praktis dari penelitian ini adalah tersedianya sistem yang dapat membantu proses penyusunan jadwal praktikum laboratorium secara lebih terstruktur. Dalam proses manual, penyusunan jadwal praktikum berpotensi memerlukan waktu lama karena harus mempertimbangkan ruang, waktu, kelompok kelas, jumlah peserta, dan ketersediaan asisten secara bersamaan. Sistem yang dikembangkan dapat membantu pengelola laboratorium melakukan penyusunan jadwal, memeriksa konflik, dan mengevaluasi kualitas jadwal berdasarkan nilai fitness dan penalty. Dengan demikian, sistem ini berpotensi mengurangi ketergantungan pada proses manual yang rawan kesalahan.

Implikasi praktis lainnya adalah bahwa sistem dapat menjadi dasar pengembangan aplikasi penjadwalan laboratorium yang lebih terintegrasi. Antarmuka sistem yang telah dibuat melalui aplikasi Algen Lab dapat dikembangkan lebih lanjut agar mendukung pengelolaan data praktikum, konfigurasi optimasi, visualisasi jadwal, dan laporan konflik secara lebih lengkap. Jika dikembangkan dengan integrasi database akademik, sistem ini dapat digunakan tidak hanya sebagai alat eksperimen, tetapi juga sebagai alat bantu operasional bagi laboratorium atau program studi.

Selain itu, hasil penelitian ini memberikan implikasi metodologis bahwa evaluasi sistem penjadwalan tidak cukup hanya menggunakan satu metrik. Nilai fitness, penalty, jumlah konflik, waktu komputasi, konvergensi, dan stagnansi perlu dibaca secara bersama-sama. Hal ini terlihat dari hasil penelitian, di mana Classic GA lebih unggul pada beberapa metrik akhir, sementara Fuzzy GA menunjukkan kontribusi pada aspek stagnansi. Oleh karena itu, keberhasilan sistem penjadwalan perlu dinilai secara seimbang, bukan hanya berdasarkan satu indikator performa.

### 4.5.4	Rekomendasi Perbaikan

Berdasarkan hasil evaluasi dan keterbatasan yang ditemukan, terdapat beberapa rekomendasi perbaikan yang dapat dilakukan pada penelitian selanjutnya. Rekomendasi pertama adalah menambahkan **Greedy Algorithm sebagai post-processing atau fallback** setelah proses GA/Fuzzy GA selesai . Mekanisme ini dapat digunakan untuk memperbaiki konflik tersisa yang belum terselesaikan oleh proses evolusi. Tahap ini dapat menerima dua input utama, yaitu **global-best schedule** dan **final population**. Jadwal terbaik dari GA/Fuzzy GA digunakan sebagai base schedule, sedangkan final population digunakan sebagai sumber kandidat alternatif untuk mengganti entri jadwal yang masih bermasalah.

Gambar 4.8 Contoh Alur Penerapan Greedy sebagai *post-processing*

Proses *Greedy Post-Processing* dapat dilakukan dengan pendekatan conflict-free reconstruction sebagaimana diperlihatkan pada Gambar 4.8. Pertama, sistem mendeteksi entri jadwal yang menyebabkan konflik, seperti konflik ruangan, konflik waktu, konflik asisten, dan konflik kelompok praktikum. Kedua, sistem mempertahankan entri jadwal yang sudah valid dan menghapus entri yang menyebabkan konflik. Ketiga, sistem memindai kandidat dari final population dan memilih kandidat valid pertama yang tidak menimbulkan konflik baru. Jika tidak ditemukan kandidat yang sesuai, sistem dapat menjalankan local placement repair dengan mencoba kombinasi hari, slot waktu, dan ruangan lain secara lokal. Pendekatan ini relevan dengan literatur yang menyatakan bahwa repair function dan local search dapat digunakan untuk mengubah jadwal yang belum feasible menjadi lebih layak (Badoni et al., 2023).

Rekomendasi kedua adalah memperluas constraint yang digunakan dalam sistem. Penelitian ini telah mempertimbangkan konflik utama seperti ruangan, waktu, kelompok kelas, dan asisten. Namun, sistem dapat dikembangkan dengan constraint tambahan, seperti preferensi dosen atau laboran, ketersediaan alat laboratorium, jenis laboratorium yang sesuai dengan mata praktikum, kapasitas alat, batas maksimum sesi praktikum per hari, jarak antar sesi, serta prioritas mata praktikum tertentu. Penambahan constraint ini akan membuat sistem lebih mendekati kondisi penjadwalan praktikum yang sebenarnya.

Rekomendasi ketiga adalah memperkuat mekanisme evaluasi kualitas jadwal. Selain fitness dan penalty, sistem dapat menambahkan metrik lain seperti distribusi beban ruangan, distribusi beban asisten, jumlah sesi per hari, tingkat kepadatan jadwal, dan pemerataan penggunaan laboratorium. Dengan metrik yang lebih lengkap, kualitas jadwal dapat dinilai tidak hanya dari ada atau tidaknya konflik, tetapi juga dari aspek kenyamanan dan keadilan distribusi sumber daya.

Rekomendasi keempat adalah melakukan pengujian pada data semester yang berbeda. Pengujian lintas semester diperlukan untuk mengetahui apakah sistem tetap stabil ketika jumlah mata praktikum, kelompok kelas, asisten, ruangan, dan peserta berubah. Dengan data yang lebih beragam, sistem dapat diuji pada kondisi ringan, sedang, dan padat. Hal ini penting untuk mengetahui batas kemampuan sistem dan menentukan konfigurasi parameter yang paling sesuai untuk setiap kondisi data.

Rekomendasi kelima adalah melakukan penyempurnaan pada desain Fuzzy Logic. Hasil penelitian menunjukkan bahwa Fuzzy GA belum unggul pada seluruh metrik, tetapi memiliki kontribusi pada penurunan stagnansi. Oleh karena itu, rule base, fungsi keanggotaan, rentang nilai input-output, dan metode defuzzifikasi perlu diuji lebih lanjut. Input fuzzy juga dapat diperluas dengan menambahkan indikator seperti conflict density, penalty improvement, diversity populasi, dan jumlah iterasi tanpa peningkatan fitness. Dengan demikian, fuzzy controller dapat mengambil keputusan adaptif yang lebih sesuai dengan kondisi pencarian solusi.

Rekomendasi keenam adalah meningkatkan antarmuka dan integrasi sistem. Aplikasi Algen Lab dapat dikembangkan dengan fitur validasi data otomatis, visualisasi konflik jadwal, rekomendasi perbaikan jadwal, ekspor jadwal ke Excel atau PDF, serta integrasi dengan database akademik. Integrasi ini akan membuat sistem lebih mudah digunakan oleh pengelola laboratorium dan pihak program studi, sekaligus mengurangi risiko kesalahan input data.

Rekomendasi ketujuh adalah melibatkan pengguna dalam evaluasi sistem. Pengujian komputasional perlu dilengkapi dengan evaluasi dari calon pengguna, seperti kepala laboratorium, staf akademik, dosen, laboran, dan asisten praktikum. Evaluasi pengguna dapat menilai apakah jadwal yang dihasilkan sudah sesuai dengan kebutuhan operasional, mudah dipahami, dan mudah disesuaikan jika terjadi perubahan mendadak. Dengan melibatkan pengguna, pengembangan sistem dapat diarahkan tidak hanya pada peningkatan performa algoritma, tetapi juga pada kegunaan sistem dalam konteks nyata.

## 4.6	Implementasi GUI (Graphical User Interface

Sebagaimana yang telah dirancang, sistem penjadwalan penggunaan laboratorium berbasis algoritma genetika pada penelitian ini diimplementasikan dalam bentuk aplikasi web interaktif dengan antarmuka pengguna grafis (*Graphical User Interface* / GUI). Aplikasi ini dapat diakses melalui *browser* pada alamat genetika.mukhtada.my.id. Pengembangan antarmuka dilakukan menggunakan *framework* React.js dengan pustaka pendukung antara lain React Router untuk navigasi, Recharts untuk visualisasi grafik, serta Lucide React untuk ikon antarmuka. Desain antarmuka mengadopsi skema warna *dark theme* dengan aksen ungu (*purple accent*) yang memberikan kenyamanan visual bagi pengguna, terutama saat melakukan monitoring proses optimasi yang memerlukan waktu komputasi cukup lama.

Aplikasi dirancang dengan arsitektur *client-server*, di mana antarmuka web (*frontend*) berkomunikasi dengan *backend* melalui API (*Application Programming Interface*). Pada bagian kiri antarmuka terdapat panel navigasi (*sidebar*) yang menyediakan akses ke seluruh modul fungsional sistem, sedangkan pada bagian kanan bawah terdapat indikator **System Status** yang menampilkan status konektivitas *backend* secara *real-time*. Berikut ini diuraikan secara rinci implementasi setiap halaman dan fitur utama yang terdapat pada aplikasi.

### 4.6.1 Halaman Data Management

Halaman Data Management merupakan pusat pengelolaan seluruh data masukan (input) yang dibutuhkan oleh algoritma genetika untuk proses penjadwalan. Halaman ini menyediakan antarmuka untuk mengelola lima kategori data yang saling terintegrasi, yang masing-masing dapat diakses melalui tab navigasi di bagian atas halaman, yaitu: Classes & Subjects, Program Studi, Lab Rooms, Assistants, dan Scopes. Implementasi halaman ini ditampilkan pada Gambar 4.9.

Gambar 4.9 Pratinjau halaman *Data Management*

Gambar 4.9 memperlihatkan tampilan halaman *Data Management* dengan tab **Classes & Subjects** yang sedang aktif. Pada bagian atas halaman terdapat dua komponen filter yang memungkinkan pengguna menyaring data secara dinamis (1) filter **Scope** dengan opsi *dropdown* "All Scopes" untuk memilih cakupan data berdasarkan unit organisasi, dan (2) filter **Semester** dengan tiga opsi tombol yaitu "Semua", "Ganjil (1,3,5,7)", dan "Genap (2,4,6,8)" untuk memfilter data berdasarkan periode semester. Di samping kanan filter terdapat tombol **Batch Select** yang memungkinkan operasi pemilihan massal terhadap data.

Konten utama halaman menampilkan tabel data kelas praktikum dengan kolom-kolom yang merepresentasikan atribut-atribut penting penjadwalan, meliputi: Course Code (kode mata kuliah), Subject Name (nama mata kuliah), Class ID (kode kelas paralel), Prodi (program studi), Sem (semester), SKS (bobot satuan kredit semester), Students (jumlah peserta), Pref. Rooms (ruangan preferensi yang ditampilkan dalam badge berwarna), serta Assistants yang dilengkapi tombol "Manage" untuk mengelola data asisten pada setiap kelas. Di bagian kanan atas tabel terdapat fitur Search (pencarian) dan tombol + Add New untuk menambahkan entri data baru.

Sebagai contoh, pada data yang ditampilkan terlihat mata kuliah TEP155 (Praktikum Mikroprosessor dan Antarmuka) dari Program Studi Teknik Elektro yang terbagi menjadi dua kelas paralel (R-001 dan R-002) dengan masing-masing 24 dan 23 peserta. Kedua kelas tersebut dialokasikan pada Ruang 359, sebagaimana ditandai oleh *badge* "Ruang 359" pada kolom *Pref. Rooms*. Halaman ini secara langsung berkorelasi dengan data yang telah diuraikan pada subbab 4.1.1, di mana seluruh 216 kelas praktikum dari 15 program studi dikelola melalui antarmuka ini.

### 4.6.2 Halaman *Run Config*

Gambar 4.10 Pratinjau Halaman Run Config

Gambar 4.10 menampilkan halaman *Run Config* yang terdiri dari tiga bagian utama. Bagian pertama adalah **Active Days** yang menyediakan enam tombol *toggle* untuk mengaktifkan atau menonaktifkan hari-hari penjadwalan, yaitu Senin, Selasa, Rabu, Kamis, Jumat, dan Sabtu. Pada konfigurasi yang ditampilkan, seluruh enam hari dalam kondisi aktif (ditandai dengan warna ungu), yang berarti algoritma dapat mengalokasikan sesi praktikum pada hari mana pun dari Senin hingga Sabtu.

Halaman Run Config (konfigurasi eksekusi) berfungsi sebagai antarmuka untuk mengatur parameter-parameter operasional yang memengaruhi proses penjadwalan, khususnya terkait pengaturan hari aktif, alokasi slot waktu, dan jendela waktu terlarang. Halaman ini memungkinkan pengguna untuk menyesuaikan batasan temporal (temporal constraints) sesuai dengan kebijakan operasional laboratorium yang berlaku. Implementasi halaman ini ditampilkan pada Gambar 4.10.

Bagian kedua adalah Time Slots yang mengatur slot-slot waktu yang tersedia untuk setiap kategori durasi sesi berdasarkan bobot SKS. Konfigurasi yang ditampilkan mencakup tiga kategori:

- **2 SKS (2 Hours)** Empat slot waktu yang tersedia, yaitu 07.30-09.30, 10.00-12.00, 13.00-15.00, dan 15.30-17.30. Setiap slot berdurasi 2 jam yang sesuai dengan kebutuhan sesi praktikum berbobot 2 SKS.

- **3 SKS (3 Hours)** Tiga slot waktu yaitu 07.30-10.30, 11.00-14.00, dan 14.30-17.30. Slot-slot ini berdurasi 3 jam untuk mengakomodasi sesi praktikum dengan bobot 3 SKS.

- **4 SKS (4 Hours)** Dua slot waktu yaitu 08.00-12.00 dan 13.00-17.00. Durasi 4 jam per slot diperuntukkan bagi sesi praktikum berbobot SKS tertinggi.

Setiap slot waktu dilengkapi dengan tombol aksi untuk mengedit dan menghapus, serta tombol **+ Add Slot** untuk menambahkan slot baru. Pengaturan slot waktu ini berkorespondensi langsung dengan Tabel 3.1 pada Bab III yang mendefinisikan scope penjadwalan untuk setiap kategori sesi praktikum.

Bagian ketiga adalah **Forbidden Windows** yang terlihat di bagian bawah halaman. Fitur ini memungkinkan pengguna mendefinisikan jendela waktu di mana penjadwalan tidak diperbolehkan, seperti waktu sholat Jumat (12.00-13.00) yang telah dibahas pada Bab III sebagai salah satu *constraint* temporal dalam proses penjadwalan.

### 4.6.3 Halaman Run Optimization

Halaman *Run Optimization* merupakan antarmuka utama untuk mengonfigurasi dan menjalankan proses optimasi penjadwalan menggunakan algoritma genetika. Halaman ini dirancang dengan tata letak dua kolom (*two-column layout*): kolom kiri untuk panel konfigurasi parameter algoritma, dan kolom kanan untuk panel *Console Output* yang menampilkan log eksekusi secara *real-time*. Implementasi halaman ini ditampilkan pada Gambar 4.11.

Gambar 4.11 Pratinjau Halaman *Run Optimzation*

Gambar 4.11 menampilkan halaman *New Optimization Run* dengan dua area utama. Pada panel **Configuration** di sisi kiri, pengguna dapat mengatur beberapa parameter kunci sebagai berikut:

- **Algorithm Mode**: *Dropdown* untuk memilih mode algoritma yang akan digunakan. Pada contoh yang ditampilkan, mode yang dipilih adalah **Fuzzy GA (Adaptive)**, yaitu algoritma genetika hibrida yang terintegrasi dengan *fuzzy logic* untuk pengaturan parameter adaptif, sebagaimana telah dirancang pada Bab III.

- **Fuzzy Mutation Strategy**: *Dropdown* untuk memilih strategi mutasi fuzzy. Opsi yang dipilih adalah **Default (1-Iter Lookback) Reactive**, yang menggunakan pendekatan *lookback* satu iterasi untuk menentukan tingkat mutasi secara reaktif berdasarkan perubahan *fitness*.

- **Individuals**: Pengatur jumlah individu dalam populasi, dengan nilai yang ditampilkan sebesar 20 individu. Parameter ini dapat diatur menggunakan tombol increment/decrement (- dan +).

- **Classes (Genes)**: Pengatur jumlah kelas (gen) yang akan diproses. Nilai yang ditampilkan adalah 25 gen, yang merepresentasikan 25 kelas praktikum yang akan dijadwalkan dalam satu sesi optimasi.

- **Max Iterations**: Batas maksimum jumlah iterasi (generasi) yang diizinkan. Nilai yang ditampilkan adalah 20 iterasi.

- **Parallel Workers**: *Slider* untuk mengatur jumlah *core* CPU yang dialokasikan untuk pemrosesan paralel. Pada contoh, kapasitas total adalah 4 CPU *cores* dengan alokasi 1 *core* (25% *load*), memberikan keseimbangan antara kecepatan komputasi dan ketersediaan sumber daya sistem.

- **Target Penalty (0.0 = Perfect)**: Nilai *target penalty* yang diharapkan. Nilai 0 menandakan bahwa algoritma menargetkan solusi sempurna tanpa konflik sama sekali (*zero-conflict schedule*).

- **Data Source**: Pilihan sumber data dengan dua opsi, yaitu **Default Data** (menggunakan data yang telah tersimpan dalam sistem) dan **Upload Custom** (mengunggah data kustom).

Di bagian bawah panel konfigurasi terdapat tombol **Start Optimization** berwarna ungu yang berfungsi sebagai pemicu eksekusi algoritma. Pada panel **Console Output** di sisi kanan, terdapat emulator terminal yang menampilkan status "READY TO START OPTIMIZATION..." sebelum proses dimulai. Panel ini dilengkapi dengan informasi konektivitas ("DISCONNECTED", "0 lines") serta indikator encoding ("UTF-8") dan tipe shell ("BASH") di bagian bawah. Di bagian kanan atas halaman juga terdapat filter **Scope** dan **Semester** (Ganjil/Genap) serta indikator status sistem (*Idle*) untuk memberikan gambaran kondisi sistem sebelum optimasi dimulai.

### 4.6.4 Halaman Session Details

Halaman *Session Details* merupakan halaman yang paling komprehensif dalam aplikasi yang diterapkan, menampilkan seluruh informasi dan hasil dari satu sesi optimasi yang telah dijalankan. Halaman ini diorganisasi menggunakan sistem tab navigasi yang terdiri dari lima tab utama: **Overview**, **Schedule**, **Evolution Logs**, **Data Explorer**, dan **Report**. Setiap tab menyajikan perspektif analisis yang berbeda terhadap hasil optimasi. Di bagian header halaman ditampilkan identitas sesi (Session ID), *timestamp* pelaksanaan, status penyelesaian (*Completed*), mode algoritma yang digunakan (*Fuzzy*), serta tombol aksi **Final Schedule** untuk mengakses jadwal akhir.

**A. Tab *****Overview***

Tab Overview menyajikan ringkasan kinerja dan konfigurasi dari sesi optimasi yang telah dijalankan. Tab ini berfungsi sebagai dashboard utama yang memberikan gambaran menyeluruh mengenai hasil eksekusi algoritma. Implementasi tab ini ditampilkan pada Gambar 4.12.

Gambar 4.12 Pratinjau *Tab Overview* pada Halaman *Session Details*

Gambar 4.12 memperlihatkan tab *Overview* dari sesi optimasi dengan ID **#20260312_134440_fuzzy** yang dijalankan pada tanggal 12 Maret 2026 pukul 13.44.40 menggunakan mode **Fuzzy**. Halaman ini terbagi menjadi beberapa komponen informatif:

**Performance Stats** menampilkan tiga metrik kinerja utama dalam bentuk kartu (*card*) (1) **Avg Fitness** sebesar 0.140258 yang merepresentasikan rata-rata nilai *fitness* seluruh individu pada iterasi terakhir, (2) **Iterations** sebanyak 25 iterasi yang menunjukkan jumlah generasi yang dilalui sebelum algoritma berhenti, dan (3) **Duration** dengan status *Completed* dalam waktu 13:45:03 (13 menit 45 detik dan 3 *centisecond*) yang mencerminkan waktu komputasi total dari awal hingga selesai.

**Fitness Evolution** menampilkan grafik garis multi-seri (*multi-line chart*) yang memvisualisasikan dinamika evolusi *fitness* sepanjang 25 iterasi. Tiga seri data ditampilkan secara simultan: (1) **Avg Fitness** (garis hijau) yang menunjukkan rata-rata *fitness* populasi per iterasi, (2) **Max Fitness** (garis hijau terang) yang merepresentasikan nilai *fitness* tertinggi pada setiap iterasi, dan (3) **Penalty (Best)** (garis merah) yang menunjukkan jumlah penalti dari individu terbaik. Dari grafik tersebut, dapat diamati bahwa nilai *Max Fitness* mengalami peningkatan bertahap dari sekitar 0.7 pada iterasi awal menuju mendekati 1.0 pada iterasi ke-25, sementara *Penalty (Best)* menunjukkan tren penurunan yang mengindikasikan berkurangnya jumlah konflik seiring bertambahnya iterasi. Sumbu vertikal kanan menampilkan skala penalti (0-36), sedangkan sumbu kiri menampilkan skala *fitness* (0-1).

**Configuration** menampilkan parameter konfigurasi yang digunakan pada sesi tersebut dalam format JSON, mencakup: individuals: 20, genes: 100, max_iterations: 200, target_penalty: 0, workers: 16, runs: 10, data_file: null, mutation_strategy: "default", dan scope_id: "FST". Informasi ini memungkinkan reproduksi eksperimen dengan parameter yang identik.

**Actions** menyediakan tombol-tombol aksi untuk mengunduh data pendukung, meliputi *Fitness Data (CSV)* untuk mengunduh data *fitness* seluruh iterasi dalam format CSV, serta *Run Logs* untuk mengunduh log eksekusi lengkap.

**B. Tab *****Schedule***

Tab Schedule menampilkan jadwal akhir (final schedule) yang dihasilkan oleh algoritma genetika setelah proses optimasi selesai. Jadwal ini merupakan solusi terbaik yang ditemukan selama proses evolusi. Implementasi tab ini ditampilkan pada Gambar 4.13.

Gambar 4.13 Pratinjau *Tab Schedule* pada Halaman *Session Details*

Gambar 4.13 menampilkan tab *Schedule* dengan judul **Generated Schedule** yang disertai *badge* berwarna hijau bertuliskan "Available", mengindikasikan bahwa jadwal telah berhasil di-*generate* dan siap digunakan. Di bagian kanan atas tabel terdapat fitur **Search** yang memungkinkan pencarian data jadwal berdasarkan kata kunci tertentu.

Tabel jadwal menampilkan setiap sesi praktikum dengan tujuh kolom informasi

- **Day** yang menunjukkan hari pelaksanaan (Selasa, Senin, Kamis, Jumat, Sabtu, dst.);

- **Time** yang menampilkan rentang waktu sesi dengan format jam mulai dan selesai, ditulis dalam warna ungu untuk memudahkan identifikasi visual (misalnya 13:00-15:00, 15:30-17:30, 07:30-09:30);

- **Subject** yang memuat nama mata kuliah beserta kode mata kuliah di bawahnya (contoh: "Praktikum Kimia Dasar" dengan kode DKI113);

- **Prodi** yang menampilkan nama program studi disertai kode program studi dan tingkatan semester;

- **Room** yang menunjukkan ruangan yang dialokasikan (contoh: Ruang 1213, Ruang 778, Ruang 804);

- **Group** yang mengidentifikasi kode kelas paralel (contoh: R-001-1, R-002-1, D-1, A-1);

- **Status** yang menampilkan status validasi setiap sesi menggunakan *badge* berwarna hijau bertuliskan "VALID", mengindikasikan bahwa sesi tersebut telah terverifikasi bebas konflik.

Kolom **Assistants** di sisi paling kanan dipersiapkan untuk menampilkan informasi asisten yang ditugaskan pada setiap sesi. Keseluruhan entri jadwal pada contoh yang ditampilkan menunjukkan status "VALID" secara konsisten, yang mengkonfirmasi bahwa solusi jadwal yang dihasilkan telah memenuhi seluruh *constraint* penjadwalan yang diterapkan.

**C. Tab *****Evolution Logs***** - Pratinjau Jadwal per Iterasi**

Selain menampilkan jadwal final, aplikasi juga menyediakan fitur untuk melihat detail jadwal terbaik pada setiap iterasi selama proses evolusi. Fitur ini diakses melalui tab *Evolution Logs* dan ditampilkan dalam bentuk jendela modal (*modal window*). Implementasi fitur ini ditampilkan pada Gambar 4.14.

Gambar 4.14 Pratinjau *Tab Iteration Details* pada Halaman *Session Details*

Gambar 4.14 menampilkan modal **Best Schedule - Iteration 5** yang menyajikan *snapshot* jadwal terbaik yang berhasil ditemukan pada iterasi ke-5 dari proses evolusi. Modal ini memberikan informasi bahwa terdapat **100 records total** dalam jadwal tersebut, yang merepresentasikan 100 sesi praktikum yang telah dialokasikan.

Tabel pratinjau menampilkan lima kolom utama: Day, Time, Subject (beserta kode), Room, Group, dan Conflicts. Kolom Conflicts merupakan fitur diagnostik yang sangat informatif, di mana setiap sesi ditandai dengan indikator konflik: badge hijau bertuliskan "0" menandakan tidak ada konflik (conflict-free), sementara badge oranye dengan ikon peringatan dan angka "1" menandakan adanya satu konflik yang terdeteksi pada sesi tersebut. Sebagai contoh, pada data yang ditampilkan terlihat bahwa mata kuliah TAKSONOMI HEWAN (BIO333) pada kelas R-002-1 dan R-002-2 di hari Kamis pukul 07:30-09:30 di Ruang 778 masing-masing memiliki 1 konflik, sementara entri-entri lainnya seperti Praktikum Kimia Dasar, PETROGRAFI, dan FISIKA DASAR I menunjukkan 0 konflik.

Fitur ini memungkinkan analisis mendalam terhadap progres evolusi algoritma genetika, di mana pengguna dapat membandingkan kualitas jadwal pada berbagai tahap iterasi dan mengamati bagaimana konflik secara bertahap teratasi seiring dengan berjalannya proses evolusi. Tombol **Close Preview** di bagian bawah modal digunakan untuk menutup jendela pratinjau dan kembali ke tampilan utama.

**D. Tab *****Report***

Tab Report menyediakan laporan komprehensif mengenai metodologi dan hasil analisis dari sesi optimasi yang telah dijalankan. Laporan ini disusun secara otomatis oleh sistem dan dapat diunduh dalam format PDF untuk keperluan dokumentasi dan pelaporan. Implementasi tab ini ditampilkan pada Gambar 4.15.

Gambar 4.15 Pratinjau *Tab Report* pada Halaman *Session Details*

Gambar 4.14 menampilkan tab *Report* dengan judul Laporan GA dengan Fuzzy Logic (HGA) yang dihasilkan untuk Sistem Penjadwalan Praktikum FST Universitas Jambi. Di bagian atas laporan terdapat metadata sesi yang mencakup Session ID (#20260312_134440_fuzzy), Mode (Fuzzy), waktu mulai (12/3/2026, 13.44.40), waktu selesai (12/3/2026, 13.45.03), dan maksimum iterasi (200). Tombol Download PDF berwarna ungu di sudut kanan atas memungkinkan pengguna mengunduh laporan dalam format dokumen PDF.

Isi laporan distrukturkan ke dalam beberapa bagian analitis. Bagian pertama, **GA dengan Fuzzy Logic (HGA)**, menjelaskan metodologi *Hybrid GA* yang diterapkan, di mana Fuzzy Logic aliran **Sugeno** digunakan sebagai *intelligent controller* adaptif yang mengatur parameter evolusi GA secara dinamis. Penerapan dilakukan pada dua elemen utama:

- **Adaptive Crossover Rate (Cr) - Kontrol Diversitas Populasi**: Bagian ini menjelaskan bahwa input berupa Standar Deviasi Fitness Populasi (x) digunakan sebagai penanda *diversity*. Aturan fuzzy yang diterapkan meliputi: LOW SD (x ≤ 0.05) menghasilkan Cr HIGH = 0.90 untuk eksplorasi agresif, MEDIUM SD (0.02 < x < 0.08) menghasilkan Cr MEDIUM = 0.60 untuk variasi cukup, dan HIGH SD (x ≥ 0.05) menghasilkan Cr LOW = 0.30 untuk mempertahankan solusi baik. Defuzzifikasi menggunakan *Weighted Average* dengan rentang Cr ∈ [0.30, 0.90].

- **Adaptive Mutation Rate (Mr) - Kontrol Stagnasi Evolusi**: Bagian ini mendeskripsikan variasi strategi mutasi berdasarkan *mutation_strategy* yang dipilih, meliputi: default/sliding_window dengan input Δf (selisih *fitness* antar iterasi), stagnation_counter dengan input jumlah iterasi berkelanjutan tanpa perbaikan, dan despair_dynamic dengan input Counter/√(genes) × 2 yang dinormalisasi ke rentang 0-1. Defuzzifikasi menghasilkan Mr ∈ [0.01, 0.10].

Di bagian bawah laporan terdapat bagian **Statistik Evaluasi** yang menyajikan analisis statistik hasil eksperimen. Keseluruhan laporan ini merupakan dokumentasi otomatis dan komprehensif yang memfasilitasi analisis pasca-eaksekusi (*post-execution analysis*) dan reproduksi eksperimen.

### 4.6.5 Navigasi dan Komponen Umum Antarmuka

Secara keseluruhan, aplikasi yang dikembangkan memiliki arsitektur navigasi yang konsisten di seluruh halaman. Panel navigasi (*sidebar*) di sisi kiri menyediakan akses ke lima modul utama:

- **Run Optimization** untuk mengonfigurasi dan memulai proses optimasi baru.

- **Run History** untuk menelusuri riwayat sesi optimasi yang telah dijalankan sebelumnya.

- **Data Management** untuk mengelola seluruh data masukan (kelas, program studi, ruangan, asisten, dan *scopes*).

- **Run Config** untuk mengatur konfigurasi operasional penjadwalan (hari aktif, slot waktu, dan jendela waktu terlarang).

- **Running Worker** untuk memonitor status *worker* yang sedang berjalan pada proses komputasi paralel.

Setiap modul memiliki ikon visual yang intuitif dan item menu yang sedang aktif ditandai dengan *highlight* berwarna ungu beserta indikator garis vertikal di sisi kanan. Di bagian bawah *sidebar* terdapat indikator **System Status** yang menampilkan status konektivitas *backend* secara *real-time* dengan indikator lingkaran hijau bertuliskan "Backend Active", yang memastikan pengguna selalu mengetahui ketersediaan layanan *backend* sebelum menjalankan operasi.

Implementasi GUI berbasis web ini memungkinkan aksesibilitas tinggi, di mana pengguna dapat mengoperasikan sistem dari perangkat mana pun yang memiliki *browser* tanpa memerlukan instalasi perangkat lunak tambahan. Desain *responsive* dan skema *dark theme* yang digunakan memberikan pengalaman pengguna (*user experience*) yang modern dan profesional, sekaligus mendukung penggunaan dalam durasi yang panjang selama monitoring proses komputasi algoritma genetika.

# PENUTUP

- **Kesimpulan**

Berdasarkan hasil penelitian yang telah dilakukan, dapat disimpulkan bahwa sistem penjadwalan praktikum laboratorium di Fakultas Sains dan Teknologi Universitas Jambi berhasil dibangun dengan menerapkan Algoritma Genetika sebagai metode utama optimasi jadwal. Sistem ini mampu merepresentasikan data praktikum ke dalam struktur komputasional yang terdiri atas gen, kromosom, individu, dan populasi. Setiap gen merepresentasikan satu sesi praktikum dengan atribut seperti mata praktikum, program studi, semester, jumlah peserta, kelompok kelas, ruangan, hari, waktu mulai, waktu selesai, serta asisten. Representasi tersebut memungkinkan sistem melakukan proses pencarian solusi jadwal secara terstruktur melalui tahapan pembangkitan populasi, evaluasi fitness, seleksi, crossover, mutasi, dan repair.

Sistem yang dikembangkan mampu menghasilkan jadwal praktikum yang layak untuk dievaluasi dan digunakan sebagai dasar penyusunan jadwal laboratorium. Kelayakan jadwal dinilai berdasarkan beberapa jenis konflik utama, yaitu konflik penggunaan ruangan, konflik jadwal asisten, dan konflik kelompok kelas. Fungsi fitness yang digunakan berhasil mengubah jumlah konflik dan penalty menjadi nilai kualitas solusi, sehingga setiap jadwal dapat diukur secara kuantitatif. Dalam hasil pengujian, sistem mampu menghasilkan jadwal dengan nilai fitness tinggi dan penalty rendah pada mayoritas percobaan, bahkan mencapai solusi optimal pada sebagian besar run. Hal ini menunjukkan bahwa pendekatan berbasis Algoritma Genetika relevan untuk menyelesaikan permasalahan penjadwalan praktikum yang memiliki banyak kombinasi solusi dan constraint.

Penerapan *Fuzzy Logic* dalam penelitian ini berhasil diintegrasikan sebagai mekanisme adaptif pada proses optimasi, khususnya dalam pengaturan crossover rate dan mutation rate. *Crossover rate* disesuaikan berdasarkan keragaman populasi, sedangkan mutation rate disesuaikan berdasarkan kondisi stagnansi atau peningkatan fitness. Dengan mekanisme tersebut, parameter Algoritma Genetika tidak sepenuhnya bersifat statis, tetapi dapat berubah mengikuti kondisi proses pencarian solusi. Hasil evaluasi menunjukkan bahwa kontribusi *Fuzzy Logic* lebih terlihat pada dinamika proses pencarian, terutama dalam menurunkan rata-rata stagnasi maksimum dibandingkan baseline Classic GA. Namun, pada konfigurasi eksperimen yang digunakan, Fuzzy GA belum dapat dinyatakan lebih unggul secara menyeluruh karena Classic GA masih menunjukkan hasil lebih baik pada beberapa metrik, seperti rata-rata fitness, penalty akhir, waktu komputasi, dan kecepatan konvergensi.

Evaluasi perbandingan antara Classic GA dan Fuzzy GA dalam penelitian ini berfungsi sebagai baseline analisis kinerja sistem, bukan sebagai fokus utama penelitian komparatif. Hasil pengujian menunjukkan bahwa Classic GA mencapai solusi optimal pada 19 dari 20 percobaan, sedangkan Fuzzy GA mencapai solusi optimal pada 18 dari 20 percobaan. Rata-rata fitness Classic GA sebesar 0,975, sedangkan Fuzzy GA sebesar 0,9254. Rata-rata penalty Classic GA sebesar 0,05, sedangkan Fuzzy GA sebesar 0,30. Dari sisi stagnansi, Fuzzy GA menunjukkan hasil lebih baik dengan rata-rata stagnasi maksimum 13,55 iterasi dibandingkan Classic GA sebesar 16,75 iterasi. Dengan demikian, hasil evaluasi perlu dibaca secara seimbang: sistem berhasil menghasilkan jadwal layak, tetapi kontribusi fuzzy lebih tepat diposisikan sebagai mekanisme adaptif yang membantu proses pencarian, bukan sebagai bukti bahwa metode fuzzy selalu lebih unggul pada semua kondisi.

Implementasi antarmuka sistem berbasis web melalui aplikasi yang diterapkan juga berhasil memberikan dukungan visual terhadap proses penjadwalan. Sistem menyediakan fitur pengelolaan data, konfigurasi run, pengaturan slot waktu dan *forbidden windows*, eksekusi optimasi, pemantauan log evolusi, tampilan jadwal hasil optimasi, serta laporan evaluasi. Dengan adanya GUI, proses optimasi tidak hanya berjalan sebagai program komputasi, tetapi juga dapat diakses, dikonfigurasi, dan dianalisis oleh pengguna secara lebih mudah. Hal ini menjadi kontribusi praktis penelitian karena sistem dapat membantu pengelola laboratorium dalam menyusun jadwal praktikum secara lebih terstruktur, transparan, dan dapat dievaluasi ulang berdasarkan data serta constraint yang digunakan.

Secara keseluruhan, penelitian ini berhasil membangun dan menguji sistem penjadwalan praktikum laboratorium berbasis Algoritma Genetika dengan dukungan *Fuzzy Logic* sebagai mekanisme adaptif. Sistem mampu membantu mengurangi konflik penjadwalan melalui evaluasi fitness dan penalty, menghasilkan jadwal praktikum yang dapat dianalisis, serta menyediakan dasar pengembangan sistem penjadwalan laboratorium yang lebih terintegrasi di masa mendatang. Keterbatasan utama penelitian ini terletak pada ruang lingkup data, konfigurasi eksperimen, dan constraint yang masih dapat diperluas. Oleh karena itu, hasil penelitian ini tidak dimaksudkan untuk menyatakan satu metode selalu lebih unggul, tetapi untuk menunjukkan bahwa sistem penjadwalan berbasis optimasi dapat diterapkan secara fungsional pada konteks praktikum laboratorium Fakultas Sains dan Teknologi Universitas Jambi.

- **Saran**

Berdasarkan hasil penelitian dan keterbatasan yang ditemukan, terdapat beberapa saran pengembangan yang dapat dilakukan pada penelitian selanjutnya. **Pertama**, sistem penjadwalan dapat dikembangkan dengan integrasi langsung ke database akademik atau Sistem Informasi Akademik Universitas Jambi. Integrasi ini penting agar data mata kuliah, kelas, peserta, ruangan, dosen, dan asisten tidak perlu dimasukkan secara manual. Dengan integrasi database akademik, proses pembaruan data dapat dilakukan secara lebih cepat, akurat, dan konsisten, sehingga sistem lebih siap digunakan dalam lingkungan operasional sebenarnya.

**Kedua**, *constraint* penjadwalan perlu diperluas agar sistem mampu merepresentasikan kondisi praktikum secara lebih realistis. Pada penelitian ini, constraint utama mencakup konflik ruangan, konflik asisten, dan konflik kelompok kelas. Penelitian selanjutnya dapat menambahkan constraint lain, seperti preferensi dosen atau laboran, ketersediaan alat laboratorium, jenis laboratorium yang sesuai dengan mata praktikum, jarak antar sesi, batas maksimum sesi per hari, distribusi beban antar ruangan, serta prioritas mata praktikum tertentu. Penambahan constraint ini dapat meningkatkan kualitas jadwal yang dihasilkan karena sistem tidak hanya mengejar jadwal bebas konflik, tetapi juga jadwal yang lebih nyaman dan sesuai kebutuhan akademik.

**Ketiga**, pengujian sistem perlu dilakukan pada data semester lain dan data dengan tingkat kepadatan jadwal yang berbeda. Pengujian lintas semester penting untuk mengetahui apakah sistem tetap stabil ketika jumlah kelas, jumlah peserta, ketersediaan ruangan, atau kebutuhan asisten berubah. Dengan data yang lebih beragam, performa sistem dapat dievaluasi secara lebih komprehensif dan tidak hanya bergantung pada satu konfigurasi eksperimen. Pengujian ini juga dapat membantu menentukan kondisi seperti apa yang paling cocok untuk penggunaan parameter fuzzy adaptif.

**Keempat**, mekanisme Fuzzy Logic dapat dikembangkan lebih lanjut dengan desain rule base dan fungsi keanggotaan yang lebih matang. Hasil penelitian menunjukkan bahwa fuzzy controller membantu menurunkan stagnansi, tetapi belum memberikan keunggulan menyeluruh pada semua metrik. Oleh karena itu, penelitian selanjutnya dapat menguji beberapa strategi fuzzy, seperti penggunaan input multi-parameter yang menggabungkan diversity, stagnation counter, penalty improvement, dan conflict density. Selain itu, nilai crisp untuk crossover rate dan mutation rate dapat dituning secara lebih sistematis melalui eksperimen atau metode optimasi tambahan agar mekanisme adaptif lebih sesuai dengan karakteristik data penjadwalan praktikum.

**Kelima**, sistem dapat dikembangkan dengan mekanisme hybrid lanjutan, seperti menggabungkan Algoritma Genetika dengan local search, greedy repair, tabu search, simulated annealing, atau memetic algorithm. Pendekatan hybrid dapat digunakan sebagai tahap penyempurnaan akhir ketika jadwal hasil evolusi masih memiliki konflik minor. Dalam konteks sistem ini, metode tambahan tersebut dapat berperan sebagai post-processing atau fallback untuk memperbaiki sisa konflik tanpa mengulang seluruh proses optimasi dari awal.

**Keenam**, antarmuka sistem dapat ditingkatkan agar lebih mendukung kebutuhan pengguna non-teknis. Beberapa fitur yang dapat dikembangkan antara lain validasi data otomatis sebelum optimasi dijalankan, tampilan konflik secara visual, rekomendasi perbaikan jadwal, fitur drag-and-drop untuk penyesuaian manual, filter jadwal berdasarkan program studi atau ruangan, serta ekspor jadwal ke format Excel, PDF, atau format yang kompatibel dengan sistem akademik. Fitur-fitur tersebut dapat membuat sistem lebih mudah digunakan oleh kepala laboratorium, staf akademik, maupun pihak program studi.

**Ketujuh**, evaluasi performa sistem sebaiknya tidak hanya menggunakan metrik komputasional, tetapi juga melibatkan evaluasi pengguna. Pengelola laboratorium, dosen, asisten, dan staf akademik dapat dilibatkan untuk menilai apakah jadwal yang dihasilkan sudah sesuai dengan kebutuhan operasional. Evaluasi pengguna dapat mencakup aspek kemudahan penggunaan, kejelasan tampilan, kesesuaian jadwal, fleksibilitas pengaturan *constraint*, serta manfaat sistem dibandingkan proses penyusunan jadwal manual. Dengan demikian, penelitian lanjutan dapat memperkuat kontribusi praktis sistem, tidak hanya dari sisi algoritma, tetapi juga dari sisi penerapan nyata di lingkungan fakultas.

# DAFTAR PUSTAKA

# LAMPIRAN

- Lampiran 1. *Session Detail Report*

Report ini mengekspor tampilan Session Detail: evolusi fitness, statistik rinci, log iterasi, jadwal sebelum post-processing, dan jadwal Schedule Builder jika tersedia.

| Field | Value |
| --- | --- |
| Session ID | 20260515_000018_compare |
| Mode | Compare |
| Status | completed |
| Start | 2026-05-15T00:00:18.313554 |
| End | 2026-05-15T00:15:06.144637 |

- Evolusi Fitness per Generasi

- Detailed Statistic

| Metric | Value |
| --- | --- |
| Best Classic Run | 7 |
| Classic Best Fitness | 1.0 |
| Classic Best Penalty | 0.0 |
| Classic Makespan | 127.50 |
| Classic Flow Time | 226.00 |
| Best Fuzzy Run | 1 |
| Fuzzy Best Fitness | 1.0 |
| Fuzzy Best Penalty | 0.0 |
| Fuzzy Makespan | 130.00 |
| Fuzzy Flow Time | 224.00 |
| individuals | 50 |
| genes | 100 |
| max_iterations | 250 |
| target_penalty | 0.0 |
| workers | 16 |
| runs | 20 |
| data_file |  |
| mutation_strategy | despair_dynamic |
| scope_id |  |
| Classic run 1 | fitness=1.0; penalty=0.0; iterations=102;<br>time=389.327s |
| Classic run 2 | fitness=1.0; penalty=0.0; iterations=41;<br>time=148.892s |
| Classic run 3 | fitness=1.0; penalty=0.0; iterations=51;<br>time=187.65s |
| Classic run 4 | fitness=1.0; penalty=0.0; iterations=49;<br>time=182.025s |
| Classic run 5 | fitness=1.0; penalty=0.0; iterations=46;<br>time=169.888s |
| Classic run 6 | fitness=1.0; penalty=0.0; iterations=44;<br>time=165.78s |
| Classic run 7 | fitness=1.0; penalty=0.0; iterations=34;<br>time=128.444s |
| Classic run 8 | fitness=1.0; penalty=0.0; iterations=32;<br>time=118.233s |
| Classic run 9 | fitness=1.0; penalty=0.0; iterations=29;<br>time=114.072s |
| Classic run 10 | fitness=0.5; penalty=1.0; iterations=250;<br>time=650.912s |
| Classic run 11 | fitness=1.0; penalty=0.0; iterations=91;<br>time=353.952s |
| Classic run 12 | fitness=1.0; penalty=0.0; iterations=98;<br>time=380.293s |
| Classic run 13 | fitness=1.0; penalty=0.0; iterations=15;<br>time=60.2953s |
| Classic run 14 | fitness=1.0; penalty=0.0; iterations=45;<br>time=183.89s |
| Classic run 15 | fitness=1.0; penalty=0.0; iterations=38;<br>time=150.628s |
| Classic run 16 | fitness=1.0; penalty=0.0; iterations=37;<br>time=137.862s |
| Classic run 17 | fitness=1.0; penalty=0.0; iterations=50;<br>time=177.603s |
| Classic run 18 | fitness=1.0; penalty=0.0; iterations=69;<br>time=189.245s |
| Classic run 19 | fitness=1.0; penalty=0.0; iterations=100;<br>time=231.176s |
| Classic run 20 | fitness=1.0; penalty=0.0; iterations=84;<br>time=200.14s |
| Fuzzy run 1 | fitness=1.0; penalty=0.0; iterations=91;<br>time=352.041s |
| Fuzzy run 2 | fitness=1.0; penalty=0.0; iterations=84;<br>time=326.581s |
| Fuzzy run 3 | fitness=1.0; penalty=0.0; iterations=113;<br>time=452.901s |
| Fuzzy run 4 | fitness=1.0; penalty=0.0; iterations=72;<br>time=281.531s |
| Fuzzy run 5 | fitness=1.0; penalty=0.0; iterations=147;<br>time=591.35s |
| Fuzzy run 6 | fitness=1.0; penalty=0.0; iterations=116;<br>time=468.807s |
| Fuzzy run 7 | fitness=1.0; penalty=0.0; iterations=59;<br>time=238.513s |
| Fuzzy run 8 | fitness=1.0; penalty=0.0; iterations=36;<br>time=137.486s |
| Fuzzy run 9 | fitness=1.0; penalty=0.0; iterations=87;<br>time=370.683s |
| Fuzzy run 10 | fitness=0.222222; penalty=3.5; iterations=250;<br>time=648.522s |
| Fuzzy run 11 | fitness=1.0; penalty=0.0; iterations=62;<br>time=245.814s |
| Fuzzy run 12 | fitness=1.0; penalty=0.0; iterations=38;<br>time=156.658s |
| Fuzzy run 13 | fitness=1.0; penalty=0.0; iterations=21;<br>time=90.8615s |
| Fuzzy run 14 | fitness=1.0; penalty=0.0; iterations=54;<br>time=229.904s |
| Fuzzy run 15 | fitness=1.0; penalty=0.0; iterations=72;<br>time=267.739s |
| Fuzzy run 16 | fitness=1.0; penalty=0.0; iterations=105;<br>time=315.858s |
| Fuzzy run 17 | fitness=1.0; penalty=0.0; iterations=27;<br>time=100.747s |
| Fuzzy run 18 | fitness=1.0; penalty=0.0; iterations=60;<br>time=170.437s |
| Fuzzy run 19 | fitness=0.285714; penalty=2.5; iterations=250;<br>time=398.308s |
| Fuzzy run 20 | fitness=1.0; penalty=0.0; iterations=30;<br>time=95.4791s |

- Complete Iteration Logs

| Iter | Classic Fit | Fuzzy Fit | Classic Pen | Fuzzy Pen | Classic Conf | Fuzzy Conf |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0.027423 | 0.024740 | 37.4 | 40.8 | 16.4 | 18.1 |
| 2 | 0.028082 | 0.026014 | 36.7 | 39.0 | 15.9 | 16.9 |
| 3 | 0.031410 | 0.030370 | 32.9 | 33.1 | 14.7 | 14.9 |
| 4 | 0.033097 | 0.033352 | 30.4 | 30.4 | 13.9 | 13.5 |
| 5 | 0.034379 | 0.034174 | 30.1 | 29.4 | 13.4 | 13.4 |
| 6 | 0.042862 | 0.038391 | 26.3 | 26.5 | 11.9 | 11.8 |
| 7 | 0.040605 | 0.042246 | 25.7 | 24.4 | 11.5 | 11.2 |
| 8 | 0.045704 | 0.044747 | 24.2 | 23.1 | 10.8 | 10.2 |
| 9 | 0.048102 | 0.050546 | 23.2 | 20.2 | 10.5 | 8.8 |
| 10 | 0.051647 | 0.054757 | 21.2 | 19.7 | 9.8 | 9.2 |
| 11 | 0.053634 | 0.059540 | 20.1 | 17.9 | 8.8 | 8.2 |
| 12 | 0.059862 | 0.065676 | 18.0 | 16.4 | 8.2 | 7.8 |
| 13 | 0.059707 | 0.071360 | 18.1 | 15.8 | 8.4 | 7.3 |
| 14 | 0.067469 | 0.077578 | 17.3 | 14.7 | 7.8 | 7.1 |
| 15 | 0.109686 | 0.086614 | 15.7 | 12.9 | 7.5 | 6.3 |
| 16 | 0.062656 | 0.093744 | 16.7 | 12.2 | 7.9 | 5.9 |
| 17 | 0.068194 | 0.105266 | 15.7 | 11.8 | 7.3 | 5.5 |
| 18 | 0.076192 | 0.102135 | 14.2 | 11.1 | 7.0 | 5.5 |
| 19 | 0.075763 | 0.113798 | 14.0 | 10.8 | 7.0 | 5.5 |
| 20 | 0.076946 | 0.120394 | 14.3 | 10.1 | 6.9 | 5.0 |
| 21 | 0.085768 | 0.147253 | 13.1 | 10.2 | 6.4 | 5.1 |
| 22 | 0.096067 | 0.112438 | 11.7 | 9.6 | 6.1 | 4.8 |
| 23 | 0.090939 | 0.120654 | 12.2 | 9.1 | 6.2 | 4.6 |
| 24 | 0.114087 | 0.135970 | 10.2 | 9.3 | 5.1 | 4.9 |
| 25 | 0.119775 | 0.145593 | 9.8 | 9.0 | 4.9 | 4.6 |
| 26 | 0.129260 | 0.146547 | 9.0 | 8.7 | 4.6 | 4.5 |
| 27 | 0.168834 | 0.196645 | 8.2 | 8.5 | 4.3 | 4.5 |
| 28 | 0.176250 | 0.177712 | 7.9 | 8.5 | 4.3 | 4.4 |
| 29 | 0.212757 | 0.177633 | 7.7 | 8.1 | 4.3 | 4.1 |
| 30 | 0.161971 | 0.204379 | 7.9 | 7.8 | 4.2 | 3.9 |
| 31 | 0.170283 | 0.161553 | 7.5 | 8.2 | 4.1 | 4.0 |
| 32 | 0.213763 | 0.160125 | 6.9 | 8.1 | 3.7 | 4.1 |
| 33 | 0.185872 | 0.171734 | 6.8 | 7.9 | 3.6 | 4.0 |
| 34 | 0.234724 | 0.178637 | 6.3 | 7.1 | 3.5 | 3.5 |
| 35 | 0.199176 | 0.148562 | 6.2 | 8.0 | 3.7 | 3.8 |
| 36 | 0.204463 | 0.192848 | 6.3 | 7.7 | 3.5 | 3.9 |
| 37 | 0.235037 | 0.163470 | 6.0 | 7.4 | 3.6 | 3.8 |
| 38 | 0.268658 | 0.197964 | 5.0 | 7.4 | 2.9 | 3.7 |
| 39 | 0.213253 | 0.148072 | 4.9 | 7.9 | 2.9 | 4.0 |
| 40 | 0.257244 | 0.160001 | 4.8 | 6.8 | 2.7 | 3.5 |
| 41 | 0.288296 | 0.169567 | 5.0 | 6.3 | 2.9 | 3.2 |
| 42 | 0.226568 | 0.163991 | 5.3 | 6.8 | 3.2 | 3.5 |
| 43 | 0.274309 | 0.175199 | 4.7 | 6.5 | 2.8 | 3.5 |
| 44 | 0.312513 | 0.218118 | 4.9 | 5.9 | 2.7 | 2.9 |
| 45 | 0.329683 | 0.208641 | 4.0 | 6.2 | 2.4 | 3.1 |
| 46 | 0.329522 | 0.173742 | 4.0 | 6.4 | 2.4 | 3.3 |
| 47 | 0.258768 | 0.201271 | 4.4 | 5.9 | 2.8 | 3.0 |
| 48 | 0.277625 | 0.198212 | 4.2 | 6.1 | 2.6 | 3.2 |
| 49 | 0.345450 | 0.205557 | 4.1 | 6.2 | 2.5 | 3.0 |
| 50 | 0.345004 | 0.187512 | 3.8 | 6.5 | 2.4 | 3.6 |
| 51 | 0.368927 | 0.203075 | 4.4 | 5.6 | 2.5 | 2.9 |
| 52 | 0.259524 | 0.220231 | 4.8 | 5.7 | 3.3 | 2.8 |
| 53 | 0.249818 | 0.195451 | 4.9 | 5.6 | 3.1 | 2.7 |
| 54 | 0.282936 | 0.232511 | 4.6 | 5.6 | 2.9 | 2.7 |
| 55 | 0.279530 | 0.221586 | 5.1 | 5.9 | 3.1 | 2.9 |
| 56 | 0.292953 | 0.202700 | 4.1 | 5.7 | 2.6 | 2.9 |
| 57 | 0.288418 | 0.216321 | 4.4 | 5.1 | 2.9 | 2.7 |
| 58 | 0.290402 | 0.215496 | 4.2 | 5.1 | 2.7 | 2.5 |
| 59 | 0.314626 | 0.261699 | 3.0 | 5.8 | 2.1 | 3.1 |
| 60 | 0.316984 | 0.284568 | 3.7 | 4.7 | 2.4 | 2.5 |
| 61 | 0.293375 | 0.209531 | 3.9 | 6.0 | 2.7 | 3.0 |
| 62 | 0.344620 | 0.290404 | 3.0 | 5.1 | 2.1 | 2.8 |
| 63 | 0.322086 | 0.211331 | 3.4 | 4.9 | 2.1 | 2.5 |
| 64 | 0.348413 | 0.190616 | 2.6 | 5.4 | 2.1 | 2.7 |
| 65 | 0.357483 | 0.181879 | 2.4 | 6.0 | 2.0 | 2.9 |
| 66 | 0.376984 | 0.214441 | 2.9 | 5.0 | 2.0 | 2.6 |
| 67 | 0.410946 | 0.187389 | 2.5 | 6.3 | 1.9 | 3.3 |
| 68 | 0.381292 | 0.239835 | 2.3 | 5.8 | 1.9 | 3.1 |
| 69 | 0.495362 | 0.205628 | 1.6 | 5.6 | 1.1 | 2.8 |
| 70 | 0.414286 | 0.226836 | 1.8 | 5.2 | 1.5 | 2.7 |
| 71 | 0.403174 | 0.233561 | 2.2 | 5.3 | 1.7 | 2.6 |
| 72 | 0.406593 | 0.344210 | 2.0 | 4.9 | 1.5 | 2.4 |
| 73 | 0.411255 | 0.198225 | 1.8 | 5.8 | 1.3 | 2.8 |
| 74 | 0.408730 | 0.181620 | 1.9 | 5.7 | 1.7 | 2.9 |
| 75 | 0.422619 | 0.179050 | 1.6 | 5.9 | 1.3 | 3.0 |
| 76 | 0.411255 | 0.253539 | 1.8 | 4.9 | 1.3 | 2.4 |
| 77 | 0.406593 | 0.191019 | 2.0 | 5.8 | 1.5 | 2.9 |
| 78 | 0.422619 | 0.215438 | 1.6 | 6.5 | 1.3 | 3.1 |
| 79 | 0.436508 | 0.240219 | 1.4 | 4.8 | 1.2 | 2.6 |
| 80 | 0.436508 | 0.211226 | 1.4 | 5.2 | 1.2 | 2.7 |
| 81 | 0.436508 | 0.235139 | 1.4 | 4.6 | 1.2 | 2.3 |
| 82 | 0.436508 | 0.219051 | 1.4 | 4.7 | 1.2 | 2.2 |
| 83 | 0.436508 | 0.281220 | 1.4 | 4.1 | 1.2 | 2.1 |
| 84 | 0.519841 | 0.296496 | 1.2 | 4.6 | 1.0 | 2.3 |
| 85 | 0.423809 | 0.203418 | 1.5 | 5.7 | 1.2 | 2.8 |
| 86 | 0.423809 | 0.212335 | 1.5 | 5.1 | 1.2 | 2.6 |

| 87 | 0.423809 | 0.313921 | 1.5 | 4.8 | 1.2 | 2.8 |
| --- | --- | --- | --- | --- | --- | --- |
| 88 | 0.423809 | 0.173677 | 1.5 | 6.4 | 1.2 | 3.4 |
| 89 | 0.423809 | 0.186082 | 1.5 | 5.8 | 1.2 | 3.0 |
| 90 | 0.457143 | 0.196003 | 1.3 | 6.1 | 1.0 | 3.0 |
| 91 | 0.600000 | 0.331341 | 0.8 | 4.8 | 0.8 | 2.7 |
| 92 | 0.458333 | 0.189832 | 1.2 | 6.2 | 1.2 | 3.5 |
| 93 | 0.458333 | 0.221834 | 1.2 | 5.2 | 1.2 | 3.2 |
| 94 | 0.458333 | 0.185373 | 1.2 | 7.2 | 1.2 | 4.0 |
| 95 | 0.458333 | 0.225575 | 1.2 | 5.6 | 1.2 | 3.2 |
| 96 | 0.500000 | 0.158232 | 1.0 | 6.5 | 1.0 | 3.2 |
| 97 | 0.500000 | 0.204474 | 1.0 | 7.1 | 1.0 | 4.0 |
| 98 | 0.625000 | 0.166136 | 0.8 | 7.0 | 0.8 | 3.8 |
| 99 | 0.500000 | 0.188935 | 1.0 | 5.4 | 1.0 | 3.0 |
| 100 | 0.666667 | 0.267849 | 0.7 | 4.8 | 0.7 | 2.8 |
| 101 | 0.500000 | 0.258803 | 1.0 | 6.2 | 1.0 | 3.2 |
| 102 | 0.750000 | 0.271618 | 0.5 | 4.8 | 0.5 | 2.5 |
| 103 | 0.500000 | 0.225604 | 1.0 | 7.4 | 1.0 | 3.7 |
| 104 | 0.500000 | 0.239550 | 1.0 | 4.8 | 1.0 | 3.0 |
| 105 | 0.500000 | 0.342440 | 1.0 | 5.1 | 1.0 | 3.0 |
| 106 | 0.500000 | 0.268672 | 1.0 | 5.2 | 1.0 | 3.0 |
| 107 | 0.500000 | 0.159545 | 1.0 | 5.9 | 1.0 | 3.2 |
| 108 | 0.500000 | 0.137845 | 1.0 | 7.2 | 1.0 | 3.8 |
| 109 | 0.500000 | 0.178427 | 1.0 | 5.3 | 1.0 | 3.0 |
| 110 | 0.500000 | 0.234563 | 1.0 | 4.8 | 1.0 | 3.0 |
| 111 | 0.500000 | 0.159152 | 1.0 | 6.4 | 1.0 | 3.4 |
| 112 | 0.500000 | 0.240637 | 1.0 | 5.5 | 1.0 | 3.4 |
| 113 | 0.500000 | 0.449697 | 1.0 | 4.1 | 1.0 | 2.2 |
| 114 | 0.500000 | 0.135656 | 1.0 | 8.5 | 1.0 | 4.5 |
| 115 | 0.500000 | 0.225000 | 1.0 | 6.4 | 1.0 | 3.0 |
| 116 | 0.500000 | 0.446684 | 1.0 | 4.8 | 1.0 | 2.8 |
| 117 | 0.500000 | 0.139216 | 1.0 | 6.8 | 1.0 | 4.0 |
| 118 | 0.500000 | 0.150198 | 1.0 | 6.5 | 1.0 | 4.0 |
| 119 | 0.500000 | 0.134019 | 1.0 | 7.0 | 1.0 | 3.7 |
| 120 | 0.500000 | 0.168518 | 1.0 | 6.2 | 1.0 | 3.0 |
| 121 | 0.500000 | 0.128343 | 1.0 | 8.3 | 1.0 | 5.0 |
| 122 | 0.500000 | 0.113141 | 1.0 | 10.3 | 1.0 | 5.0 |
| 123 | 0.500000 | 0.288360 | 1.0 | 3.5 | 1.0 | 2.0 |
| 124 | 0.500000 | 0.109668 | 1.0 | 9.3 | 1.0 | 4.7 |
| 125 | 0.500000 | 0.157576 | 1.0 | 6.2 | 1.0 | 3.3 |
| 126 | 0.500000 | 0.242063 | 1.0 | 6.0 | 1.0 | 3.3 |
| 127 | 0.500000 | 0.240970 | 1.0 | 5.7 | 1.0 | 3.0 |
| 128 | 0.500000 | 0.227398 | 1.0 | 7.0 | 1.0 | 3.7 |
| 129 | 0.500000 | 0.169768 | 1.0 | 5.5 | 1.0 | 3.0 |
| 130 | 0.500000 | 0.136796 | 1.0 | 6.8 | 1.0 | 3.7 |
| 131 | 0.500000 | 0.149892 | 1.0 | 5.8 | 1.0 | 3.7 |
| 132 | 0.500000 | 0.148990 | 1.0 | 6.7 | 1.0 | 4.0 |
| 133 | 0.500000 | 0.138528 | 1.0 | 6.8 | 1.0 | 4.0 |
| 134 | 0.500000 | 0.208754 | 1.0 | 4.8 | 1.0 | 3.3 |
| 135 | 0.500000 | 0.199430 | 1.0 | 5.2 | 1.0 | 3.7 |
| 136 | 0.500000 | 0.163360 | 1.0 | 5.5 | 1.0 | 3.0 |
| 137 | 0.500000 | 0.163360 | 1.0 | 5.5 | 1.0 | 3.0 |
| 138 | 0.500000 | 0.182299 | 1.0 | 4.7 | 1.0 | 2.7 |
| 139 | 0.500000 | 0.171044 | 1.0 | 5.8 | 1.0 | 3.0 |
| 140 | 0.500000 | 0.241414 | 1.0 | 5.8 | 1.0 | 3.0 |
| 141 | 0.500000 | 0.277778 | 1.0 | 4.2 | 1.0 | 2.7 |
| 142 | 0.500000 | 0.149373 | 1.0 | 6.2 | 1.0 | 3.0 |
| 143 | 0.500000 | 0.193939 | 1.0 | 6.8 | 1.0 | 4.0 |
| 144 | 0.500000 | 0.271717 | 1.0 | 4.0 | 1.0 | 2.3 |
| 145 | 0.500000 | 0.156763 | 1.0 | 6.7 | 1.0 | 3.7 |
| 146 | 0.500000 | 0.152914 | 1.0 | 6.8 | 1.0 | 3.3 |
| 147 | 0.500000 | 0.437710 | 1.0 | 4.5 | 1.0 | 2.3 |
| 148 | 0.500000 | 0.134387 | 1.0 | 7.5 | 1.0 | 5.0 |
| 149 | 0.500000 | 0.102632 | 1.0 | 8.8 | 1.0 | 5.5 |
| 150 | 0.500000 | 0.108824 | 1.0 | 8.2 | 1.0 | 4.0 |
| 151 | 0.500000 | 0.083881 | 1.0 | 11.8 | 1.0 | 5.5 |
| 152 | 0.500000 | 0.085140 | 1.0 | 12.8 | 1.0 | 6.5 |
| 153 | 0.500000 | 0.153409 | 1.0 | 5.8 | 1.0 | 3.5 |
| 154 | 0.500000 | 0.166666 | 1.0 | 5.8 | 1.0 | 3.5 |
| 155 | 0.500000 | 0.115131 | 1.0 | 7.8 | 1.0 | 4.5 |
| 156 | 0.500000 | 0.110145 | 1.0 | 8.5 | 1.0 | 4.5 |
| 157 | 0.500000 | 0.107143 | 1.0 | 9.5 | 1.0 | 5.5 |
| 158 | 0.500000 | 0.132576 | 1.0 | 7.8 | 1.0 | 4.5 |
| 159 | 0.500000 | 0.162338 | 1.0 | 5.2 | 1.0 | 3.0 |
| 160 | 0.500000 | 0.143590 | 1.0 | 6.0 | 1.0 | 3.5 |
| 161 | 0.500000 | 0.156565 | 1.0 | 6.8 | 1.0 | 3.5 |
| 162 | 0.500000 | 0.169934 | 1.0 | 5.5 | 1.0 | 4.0 |
| 163 | 0.500000 | 0.158730 | 1.0 | 6.5 | 1.0 | 3.0 |
| 164 | 0.500000 | 0.138095 | 1.0 | 6.2 | 1.0 | 3.0 |
| 165 | 0.500000 | 0.116923 | 1.0 | 8.5 | 1.0 | 6.0 |
| 166 | 0.500000 | 0.142857 | 1.0 | 6.0 | 1.0 | 3.0 |
| 167 | 0.500000 | 0.108333 | 1.0 | 8.8 | 1.0 | 4.5 |
| 168 | 0.500000 | 0.146464 | 1.0 | 6.2 | 1.0 | 4.0 |
| 169 | 0.500000 | 0.143590 | 1.0 | 6.0 | 1.0 | 3.5 |
| 170 | 0.500000 | 0.111455 | 1.0 | 8.0 | 1.0 | 4.5 |
| 171 | 0.500000 | 0.167832 | 1.0 | 5.0 | 1.0 | 3.5 |
| 172 | 0.500000 | 0.167832 | 1.0 | 5.0 | 1.0 | 3.5 |
| 173 | 0.500000 | 0.125490 | 1.0 | 7.0 | 1.0 | 4.5 |
| 174 | 0.500000 | 0.114907 | 1.0 | 8.2 | 1.0 | 5.0 |
| 175 | 0.500000 | 0.161111 | 1.0 | 6.2 | 1.0 | 4.0 |
| 176 | 0.500000 | 0.119048 | 1.0 | 7.8 | 1.0 | 4.5 |
| 177 | 0.500000 | 0.153409 | 1.0 | 5.8 | 1.0 | 3.5 |
| 178 | 0.500000 | 0.157576 | 1.0 | 5.5 | 1.0 | 4.0 |
| 179 | 0.500000 | 0.119048 | 1.0 | 7.8 | 1.0 | 4.5 |
| 180 | 0.500000 | 0.125490 | 1.0 | 7.0 | 1.0 | 3.5 |
| 181 | 0.500000 | 0.124542 | 1.0 | 7.5 | 1.0 | 5.0 |
| 182 | 0.500000 | 0.111455 | 1.0 | 8.0 | 1.0 | 4.5 |
| 183 | 0.500000 | 0.117647 | 1.0 | 7.5 | 1.0 | 4.0 |
| 184 | 0.500000 | 0.202020 | 1.0 | 4.0 | 1.0 | 2.5 |
| 185 | 0.500000 | 0.151111 | 1.0 | 7.5 | 1.0 | 4.5 |
| 186 | 0.500000 | 0.106335 | 1.0 | 10.8 | 1.0 | 5.5 |
| 187 | 0.500000 | 0.097619 | 1.0 | 9.2 | 1.0 | 5.5 |
| 188 | 0.500000 | 0.169934 | 1.0 | 5.5 | 1.0 | 3.0 |
| 189 | 0.500000 | 0.136363 | 1.0 | 7.2 | 1.0 | 4.0 |
| 190 | 0.500000 | 0.161111 | 1.0 | 6.2 | 1.0 | 4.0 |
| 191 | 0.500000 | 0.125490 | 1.0 | 7.0 | 1.0 | 3.5 |
| 192 | 0.500000 | 0.119298 | 1.0 | 7.5 | 1.0 | 5.0 |
| 193 | 0.500000 | 0.129167 | 1.0 | 6.8 | 1.0 | 3.5 |
| 194 | 0.500000 | 0.139423 | 1.0 | 6.2 | 1.0 | 4.0 |
| 195 | 0.500000 | 0.113960 | 1.0 | 9.0 | 1.0 | 5.0 |
| 196 | 0.500000 | 0.095238 | 1.0 | 9.5 | 1.0 | 5.5 |
| 197 | 0.500000 | 0.153409 | 1.0 | 5.8 | 1.0 | 3.5 |
| 198 | 0.500000 | 0.162338 | 1.0 | 5.2 | 1.0 | 3.0 |
| 199 | 0.500000 | 0.106442 | 1.0 | 8.5 | 1.0 | 4.0 |
| 200 | 0.500000 | 0.140909 | 1.0 | 6.8 | 1.0 | 3.5 |
| 201 | 0.500000 | 0.169934 | 1.0 | 5.5 | 1.0 | 3.0 |
| 202 | 0.500000 | 0.116667 | 1.0 | 7.8 | 1.0 | 4.5 |
| 203 | 0.500000 | 0.202020 | 1.0 | 4.0 | 1.0 | 2.5 |
| 204 | 0.500000 | 0.103175 | 1.0 | 8.8 | 1.0 | 5.5 |
| 205 | 0.500000 | 0.173611 | 1.0 | 5.2 | 1.0 | 3.0 |
| 206 | 0.500000 | 0.119298 | 1.0 | 7.5 | 1.0 | 5.0 |
| 207 | 0.500000 | 0.153409 | 1.0 | 5.8 | 1.0 | 3.5 |
| 208 | 0.500000 | 0.157576 | 1.0 | 5.5 | 1.0 | 3.0 |
| 209 | 0.500000 | 0.136363 | 1.0 | 7.2 | 1.0 | 4.0 |
| 210 | 0.500000 | 0.119298 | 1.0 | 7.5 | 1.0 | 4.5 |
| 211 | 0.500000 | 0.122222 | 1.0 | 7.2 | 1.0 | 4.0 |
| 212 | 0.500000 | 0.142857 | 1.0 | 6.0 | 1.0 | 3.0 |
| 213 | 0.500000 | 0.143541 | 1.0 | 6.5 | 1.0 | 4.0 |
| 214 | 0.500000 | 0.117647 | 1.0 | 7.5 | 1.0 | 5.0 |
| 215 | 0.500000 | 0.140909 | 1.0 | 6.8 | 1.0 | 3.5 |
| 216 | 0.500000 | 0.173611 | 1.0 | 5.2 | 1.0 | 3.0 |
| 217 | 0.500000 | 0.163743 | 1.0 | 6.0 | 1.0 | 3.5 |
| 218 | 0.500000 | 0.188034 | 1.0 | 4.5 | 1.0 | 3.0 |
| 219 | 0.500000 | 0.211111 | 1.0 | 3.8 | 1.0 | 2.0 |
| 220 | 0.500000 | 0.190909 | 1.0 | 4.2 | 1.0 | 2.5 |
| 221 | 0.500000 | 0.129167 | 1.0 | 6.8 | 1.0 | 3.0 |
| 222 | 0.500000 | 0.167832 | 1.0 | 5.0 | 1.0 | 3.5 |
| 223 | 0.500000 | 0.124060 | 1.0 | 7.2 | 1.0 | 4.0 |
| 224 | 0.500000 | 0.169934 | 1.0 | 5.5 | 1.0 | 3.0 |
| 225 | 0.500000 | 0.140909 | 1.0 | 6.8 | 1.0 | 4.0 |
| 226 | 0.500000 | 0.098086 | 1.0 | 9.2 | 1.0 | 5.0 |
| 227 | 0.500000 | 0.143541 | 1.0 | 6.5 | 1.0 | 4.0 |
| 228 | 0.500000 | 0.129167 | 1.0 | 6.8 | 1.0 | 3.5 |
| 229 | 0.500000 | 0.163743 | 1.0 | 6.0 | 1.0 | 3.5 |
| 230 | 0.500000 | 0.177778 | 1.0 | 5.0 | 1.0 | 2.5 |
| 231 | 0.333333 | 0.143590 | 2.0 | 6.0 | 2.0 | 3.5 |
| 232 | 0.500000 | 0.163743 | 1.0 | 6.0 | 1.0 | 3.5 |
| 233 | 0.500000 | 0.202020 | 1.0 | 4.0 | 1.0 | 2.5 |
| 234 | 0.500000 | 0.148352 | 1.0 | 5.8 | 1.0 | 3.5 |
| 235 | 0.500000 | 0.121429 | 1.0 | 7.5 | 1.0 | 3.5 |
| 236 | 0.500000 | 0.143590 | 1.0 | 6.0 | 1.0 | 3.5 |
| 237 | 0.333333 | 0.169934 | 2.0 | 5.5 | 2.0 | 3.0 |
| 238 | 0.500000 | 0.167832 | 1.0 | 5.0 | 1.0 | 3.5 |
| 239 | 0.500000 | 0.125490 | 1.0 | 7.0 | 1.0 | 3.5 |
| 240 | 0.500000 | 0.160257 | 1.0 | 5.2 | 1.0 | 3.0 |
| 241 | 0.500000 | 0.188034 | 1.0 | 4.5 | 1.0 | 3.0 |
| 242 | 0.500000 | 0.167832 | 1.0 | 5.0 | 1.0 | 3.5 |
| 243 | 0.500000 | 0.167832 | 1.0 | 5.0 | 1.0 | 3.5 |
| 244 | 0.500000 | 0.111455 | 1.0 | 8.0 | 1.0 | 4.0 |
| 245 | 0.500000 | 0.169934 | 1.0 | 5.5 | 1.0 | 3.0 |
| 246 | 0.500000 | 0.115131 | 1.0 | 7.8 | 1.0 | 4.5 |
| 247 | 0.500000 | 0.129555 | 1.0 | 7.0 | 1.0 | 4.0 |
| 248 | 0.500000 | 0.138095 | 1.0 | 6.2 | 1.0 | 4.0 |
| 249 | 0.500000 | 0.253968 | 1.0 | 3.0 | 1.0 | 1.5 |
| 250 | 0.500000 | 0.209524 | 1.0 | 4.5 | 1.0 | 2.0 |

- Best Classic Schedule in Compare Mode

Tabel ini berisi jadwal Classic terbaik dari sesi Compare, dipilih berdasarkan detail hasil Compare. Baris merah menunjukkan konflik praktikum yang terdeteksi pada jadwal tersebut.

| Prodi | Day | Time | Subject | Sem | Group | Room |
| --- | --- | --- | --- | --- | --- | --- |
| Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia |
| Analis Kimia | Senin | 10:00-12:00 | Prak. Analisis Mutu Sawit | 3.0 | R-001-1 | 1209 |
| Analis Kimia | Selasa | 13:00-15:00 | Prak.Teknologi Biofuel | 5.0 | R-001-1 | R13 |
| Analis Kimia | Kamis | 13:00-15:00 | Prak.Analisis Mutu Sawit | 5.0 | R-001-1 | T-R2 |
| Analis Kimia | Kamis | 15:30-17:30 | Prak.Teknik Sampling dan Preparasi Sampel | 5.0 | R-001-1 | 798 |
| Analis Kimia | Sabtu | 07:30-09:30 | Prak.Kimia Klinis | 5.0 | R-001-1 | 359 |
| Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi |
| Biologi | Selasa | 10:00-12:00 | MIKROBIOLOGI | 3.0 | R-002-2 | 778 |
| Biologi | Rabu | 13:00-15:00 | GENETIKA | 3.0 | R-002-1 | 778 |
| Biologi | Kamis | 13:00-15:00 | KIMIA DASAR | 1.0 | R-001-2 | 1145 |
| Biologi | Kamis | 15:30-17:30 | BIOLOGI DASAR | 1.0 | R-001-2 | 1145 |
| Biologi | Jumat | 10:00-12:00 | KIMIA DASAR | 1.0 | R-001-1 | 1145 |
| Biologi | Jumat | 13:00-15:00 | BIOLOGI DASAR | 1.0 | R-001-1 | 1145 |
| Biologi | Jumat | 13:00-15:00 | MIKROBIOLOGI | 3.0 | R-001-1 | 1152 |
| Biologi | Jumat | 15:30-17:30 | MIKROBIOLOGI | 3.0 | R-002-1 | 778 |
| Biologi | Sabtu | 07:30-09:30 | Perilaku Hewan | 5.0 | R-001-1 | 778 |
| Biologi | Sabtu | 13:00-15:00 | BIOKIMIA | 3.0 | R-001-1 | 778 |
| Biologi | Sabtu | 15:30-17:30 | GENETIKA | 3.0 | R-002-2 | 778 |
| Biologi | Sabtu | 15:30-17:30 | Mikrobiologi Lingkungan | 5.0 | R-001-1 | 1152 |
| Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika |
| Fisika | Selasa | 13:00-15:00 | FISIKA KOMPUTASI | 5.0 | R-002-1 | 807 |
| Fisika | Selasa | 15:30-17:30 | ELEKTRONIKA DASAR I | 3.0 | R-001-1 | 795 |
| Fisika | Rabu | 10:00-12:00 | METODE NUMERIK | 7.0 | R-003-1 | 807 |
| Fisika | Sabtu | 07:30-09:30 | FISIKA DASAR I | 1.0 | R-001-1 | 795 |
| Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia |
| Kimia | Selasa | 10:00-12:00 | Praktikum Kimia Analitik Dasar | 3.0 | R-001-1 | 798 |
| Kimia | Jumat | 10:00-12:00 | Praktikum Kimia Fisik | 3.0 | R-002-1 | 802 |
| Kimia | Jumat | 13:00-15:00 | Praktikum Teknik Pemisahan | 3.0 | R-002-1 | 121 |
| Kimia | Jumat | 15:30-17:30 | Praktikum Sintesis dan Elusidasi Struktur Anorganik | 5.0 | R-002-1 | R15 |
| Kimia | Sabtu | 10:00-12:00 | Praktikum Kimia Fisik | 3.0 | R-001-1 | 1145 |
| Kimia | Sabtu | 10:00-12:00 | Praktikum Kimia Unsur | 3.0 | R-002-1 | 1211 |
| Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri |
| Kimia Industri | Sabtu | 13:00-15:00 | Praktikum Teknologi Oleokimia | 3.0 | R-001-1 | 122 |
| Program Studi: Matematika | Program Studi: Matematika | Program Studi: Matematika | Program Studi: Matematika | Program Studi: Matematika | Program Studi: Matematika | Program Studi: Matematika |
| Matematika | Selasa | 07:30-09:30 | Praktikum Geometri | 1.0 | R-002-2 | 791 |
| Matematika | Kamis | 07:30-09:30 | Praktikum Geometri | 1.0 | R-002-1 | 791 |
| Matematika | Sabtu | 07:30-09:30 | Praktikum Geometri | 1.0 | R-001-1 | 791 |
| Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro |
| Teknik Elektro | Kamis | 08:00-12:00 | Praktikum Sistem Kendali | 5.0 | R-001-1 | 795 |
| Teknik Elektro | Jumat | 08:00-12:00 | Praktikum Rangkaian Listrik | 1.0 | R-001-1 | R16 |
| Teknik Elektro | Jumat | 08:00-12:00 | Praktikum Sistem Kendali | 5.0 | R-001-2 | 795 |
| Teknik Elektro | Jumat | 15:30-17:30 | Praktikum Mikroprosessor dan Antarmuka | 5.0 | R-002-1 | 359 |
| Teknik Elektro | Sabtu | 13:00-17:00 | Praktikum Rangkaian Listrik | 1.0 | R-002-1 | 1205 |
| Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika |
| Teknik Geofisika | Senin | 13:00-15:00 | Metode Seismik | 5.0 | R-001-1 | 783 |
| Teknik Geofisika | Senin | 15:30-17:30 | ELEKTRONIKA DAN<br>INSTRUMENTASI GEOFISIKA | 3.0 | R-001-1 | 1143 |
| Teknik Geofisika | Selasa | 13:00-15:00 | KOMPUTASI GEOFISIKA | 5.0 | R-003-1 | 804 |
| Teknik Geofisika | Rabu | 13:00-15:00 | ELEKTRONIKA DAN INSTRUMENTASI GEOFISIKA | 3.0 | R-002-1 | 1143 |
| Teknik Geofisika | Rabu | 15:30-17:30 | KOMPUTASI GEOFISIKA | 5.0 | R-001-1 | 1143 |
| Teknik Geofisika | Kamis | 07:30-09:30 | KOMPUTASI GEOFISIKA | 5.0 | R-002-1 | 1143 |
| Teknik Geofisika | Kamis | 15:30-17:30 | SEISMIK INVERSI DAN SEISMIK | 7.0 | R-001-1 | 1143 |
| Teknik Geofisika | Jumat | 07:30-09:30 | ATRIBUT FISIKA DASAR I | 1.0 | R-002-1 | 783 |
| Teknik Geofisika | Jumat | 13:00-15:00 | Gayaberat dan Magnetik | 3.0 | R-002-1 | 783 |
| Teknik Geofisika | Jumat | 15:30-17:30 | Kuliah Lapangan Geologi | 5.0 | R-002-1 | 1143 |
| Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi |
| Teknik Geologi | Senin | 15:30-17:30 | FISIKA DASAR I | 1.0 | C-1 | 1209 |
| Teknik Geologi | Selasa | 13:00-15:00 | GEOINFORMASI | 3.0 | A-1 | 1209 |
| Teknik Geologi | Selasa | 15:30-17:30 | GEOMORFOLOGI | 3.0 | B-1 | 1209 |
| Teknik Geologi | Selasa | 15:30-17:30 | MIKROPALEONTOLOGI | 5.0 | B-1 | 1216 |
| Teknik Geologi | Rabu | 13:00-15:00 | HIDROGEOLOGI | 5.0 | A-1 | T-R2 |
| Teknik Geologi | Rabu | 15:30-17:30 | SISTEM INFORMASI GEOGRAFIS | 3.0 | D-1 | 804 |
| Teknik Geologi | Kamis | 07:30-09:30 | GEOINFORMASI | 3.0 | B-1 | 618 |
| Teknik Geologi | Jumat | 07:30-09:30 | GEOLOGI MINYAK DAN GAS BUMI | 5.0 | D-1 | 804 |
| Teknik Geologi | Jumat | 10:00-12:00 | GEOLOGI MINYAK DAN GAS BUMI | 5.0 | B-1 | 1209 |
| Teknik Geologi | Jumat | 13:00-15:00 | KIMIA DASAR | 1.0 | D-1 | 1216 |
| Teknik Geologi | Sabtu | 10:00-12:00 | FISIKA DASAR I | 1.0 | A-1 | R11 |
| Teknik Geologi | Sabtu | 10:00-12:00 | HIDROGEOLOGI | 5.0 | A-2 | T-R2 |
| Teknik Geologi | Sabtu | 10:00-12:00 | KIMIA DASAR 1 | 1.0 | C-1 | 1209 |
| Teknik Geologi | Sabtu | 13:00-15:00 | PETROGRAFI | 5.0 | D-1 | 804 |
| Teknik Geologi | Sabtu | 15:30-17:30 | GEOLOGI STRUKTUR | 3.0 | B-1 | 1216 |
| Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia |
| Teknik Kimia | Senin | 13:00-15:00 | KIMIA DASAR | 1.0 | R-004-1 | 1147 |
| Teknik Kimia | Senin | 13:00-17:00 | Praktikum Dasar Teknik Kimia I | 1.0 | R-001-2 | R11 |
| Teknik Kimia | Senin | 15:30-17:30 | Aplikasi Komputer | 3.0 | R-003-1 | T-R4 |
| Teknik Kimia | Selasa | 15:30-17:30 | Aplikasi Komputer | 3.0 | R-001-1 | 1213 |
| Teknik Kimia | Rabu | 13:00-17:00 | Fisika Dasar | 1.0 | R-003-1 | 1211 |
| Teknik Kimia | Kamis | 13:00-17:00 | Praktikum Dasar Teknik Kimia I | 1.0 | R-003-1 | 1212 |

| Teknik Kimia | Jumat | 10:00-12:00 | Fisika Dasar | 1.0 | R-002-1 | 1149 |
| --- | --- | --- | --- | --- | --- | --- |
| Teknik Kimia | Jumat | 13:00-17:00 | Praktikum Dasar Teknik Kimia I | 1.0 | R-001-1 | 1211 |
| Teknik Kimia | Sabtu | 07:30-09:30 | Fisika Dasar | 1.0 | R-002-2 | 1149 |
| Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan |
| Teknik<br><br>Lingkungan | Kamis | 15:30-17:30 | Fisika Dasar 1 | 1.0 | R-002-1 | 1205 |
| Teknik<br><br>Lingkungan | Jumat | 10:00-12:00 | Kimia Dasar 1 | 1.0 | R-002-1 | 798 |
| Teknik<br><br>Lingkungan | Jumat | 15:30-17:30 | KIMIA DASAR | 1.0 | A-1 | 122 |
| Teknik<br><br>Lingkungan | Sabtu | 07:30-09:30 | Fisika Dasar 1 | 1.0 | R-003-2 | 798 |
| Teknik<br><br>Lingkungan | Sabtu | 10:00-12:00 | Kimia Dasar 1 | 1.0 | R-001-1 | 798 |
| Teknik<br><br>Lingkungan | Sabtu | 13:00-15:00 | Fisika Dasar 1 | 1.0 | R-003-1 | 798 |
| Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan |
| Teknik<br><br>Pertambangan | Senin | 15:30-17:30 | PEMBERAIAN BATUAN | 5.0 | B-1 | 1151 |
| Teknik<br><br>Pertambangan | Selasa | 10:00-12:00 | Fisika Dasar | 1.0 | A-2 | 1217 |
| Teknik<br><br>Pertambangan | Rabu | 13:00-15:00 | Kimia Dasar | 1.0 | A-1 | 1217 |
| Teknik<br><br>Pertambangan | Rabu | 15:30-17:30 | GEOLOGI STRUKTUR | 3.0 | B-2 | 618 |
| Teknik<br><br>Pertambangan | Rabu | 15:30-17:30 | Perpetaan | 3.0 | B-1 | 795 |
| Teknik<br><br>Pertambangan | Kamis | 15:30-17:30 | GEOLOGI STRUKTUR | 3.0 | B-1 | R11 |
| Teknik<br><br>Pertambangan | Kamis | 15:30-17:30 | Perpetaan | 3.0 | B-2 | 1151 |
| Teknik<br><br>Pertambangan | Jumat | 10:00-12:00 | Fisika Dasar | 1.0 | B-1 | 1217 |
| Teknik<br><br>Pertambangan | Jumat | 10:00-12:00 | SIMULASI DAN KOMPUTASI<br><br>TAMBANG | 5.0 | B-1 | 618 |
| Teknik<br><br>Pertambangan | Jumat | 13:00-15:00 | Kimia Dasar | 1.0 | B-2 | 1217 |
| Teknik<br><br>Pertambangan | Jumat | 15:30-17:30 | Kimia Dasar | 1.0 | B-1 | 1217 |
| Teknik<br><br>Pertambangan | Jumat | 15:30-17:30 | PEMBERAIAN BATUAN | 5.0 | A-1 | 1151 |
| Teknik<br><br>Pertambangan | Sabtu | 07:30-09:30 | Fisika Dasar | 1.0 | B-2 | 1217 |
| Teknik<br><br>Pertambangan | Sabtu | 07:30-09:30 | MEKANIKA BATUAN | 3.0 | B-1 | 1209 |
| Teknik<br><br>Pertambangan | Sabtu | 07:30-09:30 | Pengolahan Bahan Galian | 5.0 | B-2 | 1151 |
| Teknik<br><br>Pertambangan | Sabtu | 10:00-12:00 | Fisika Dasar | 1.0 | A-1 | 1217 |
| Teknik<br><br>Pertambangan | Sabtu | 10:00-12:00 | Pengolahan Bahan Galian | 5.0 | B-1 | 1151 |
| Teknik<br><br>Pertambangan | Sabtu | 13:00-15:00 | Kimia Dasar | 1.0 | A-2 | 1217 |
| Teknik<br><br>Pertambangan | Sabtu | 15:30-17:30 | MENGGAMBAR TEKNIK | 7.0 | R-001-1 | 618 |
| Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil |
| Teknik Sipil | Senin | 13:00-17:00 | Praktikum Bahan Bangunan | 3.0 | R-002-1 | R14 |
| Teknik Sipil | Rabu | 13:00-17:00 | Praktikum Mekanika Tanah | 3.0 | R-001-1 | R16 |
| Teknik Sipil | Jumat | 13:00-17:00 | Kimia Dasar | 1.0 | R-002-1 | 1212 |
| Teknik Sipil | Sabtu | 08:00-12:00 | Praktikum Hidrolika | 5.0 | R-002-1 | T-R5 |
| Teknik Sipil | Sabtu | 13:00-17:00 | Praktikum Hidrolika | 5.0 | R-001-1 | T-R3 |

- Best Fuzzy Schedule in Compare Mode

Tabel ini berisi jadwal Fuzzy terbaik dari sesi Compare, sehingga hasil Export Detail PDF untuk Compare menampilkan kedua algoritma yang dibandingkan.

| Prodi | Day | Time | Subject | Sem | Group | Room |
| --- | --- | --- | --- | --- | --- | --- |
| Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia | Program Studi: Analis Kimia |
| Analis Kimia | Selasa | 07:30-09:30 | Prak.Teknik Sampling dan Preparasi Sampel | 5.0 | R-001-1 | 1152 |
| Analis Kimia | Rabu | 07:30-09:30 | Prak.Teknologi Biofuel | 5.0 | R-001-1 | 787 |
| Analis Kimia | Rabu | 13:00-15:00 | Prak. Analisis Mutu Sawit | 3.0 | R-001-1 | T-R5 |
| Analis Kimia | Kamis | 10:00-12:00 | Prak.Analisis Mutu Sawit | 5.0 | R-001-1 | 787 |
| Analis Kimia | Jumat | 10:00-12:00 | Prak. Teknik Pemisahan | 3.0 | R-001-1 | 8 |
| Analis Kimia | Jumat | 15:30-17:30 | Prak. Analisis Kromatografi | 3.0 | R-001-1 | 1213 |
| Analis Kimia | Jumat | 15:30-17:30 | Prak.Analisis Obat dan Makanan | 5.0 | R-001-1 | R13 |
| Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi | Program Studi: Biologi |
| Biologi | Senin | 07:30-09:30 | KIMIA DASAR | 1.0 | R-001-1 | 1145 |
| Biologi | Selasa | 07:30-09:30 | MIKROBIOLOGI | 3.0 | R-002-1 | 778 |
| Biologi | Selasa | 15:30-17:30 | BIOKIMIA | 3.0 | R-002-2 | 1152 |
| Biologi | Rabu | 13:00-15:00 | GENETIKA | 3.0 | R-001-1 | 1152 |
| Biologi | Rabu | 15:30-17:30 | BIOKIMIA | 3.0 | R-002-1 | 1152 |
| Biologi | Rabu | 15:30-17:30 | FISIKA DASAR | 1.0 | R-001-1 | 1145 |
| Biologi | Kamis | 15:30-17:30 | BIOLOGI DASAR | 1.0 | R-001-1 | 1145 |
| Biologi | Jumat | 07:30-09:30 | Ekologi Tumbuhan | 5.0 | R-001-1 | 1145 |
| Biologi | Jumat | 10:00-12:00 | Entomologi | 5.0 | R-001-1 | 1145 |
| Biologi | Jumat | 13:00-15:00 | FISIKA DASAR | 1.0 | R-001-2 | 1145 |
| Biologi | Jumat | 13:00-15:00 | Mikrobiologi Lingkungan | 5.0 | R-001-1 | 1152 |
| Biologi | Jumat | 15:30-17:30 | BIOLOGI DASAR | 1.0 | R-001-2 | 1145 |
| Biologi | Jumat | 15:30-17:30 | Mikroteknik | 5.0 | R-001-1 | 1152 |
| Biologi | Sabtu | 07:30-09:30 | Ikhtiologi | 5.0 | R-001-1 | 1152 |
| Biologi | Sabtu | 07:30-09:30 | KIMIA DASAR | 1.0 | R-001-2 | 1145 |
| Biologi | Sabtu | 07:30-09:30 | MIKROBIOLOGI | 3.0 | R-002-2 | 778 |
| Biologi | Sabtu | 10:00-12:00 | Biologi Mikroba Penyakit<br><br>Tanaman | 5.0 | R-001-1 | 778 |
| Biologi | Sabtu | 13:00-15:00 | Ekologi Perairan dan Lahan<br><br>Basah | 5.0 | R-001-1 | 1152 |
| Biologi | Sabtu | 15:30-17:30 | Etnobotani | 5.0 | R-001-1 | 778 |
| Biologi | Sabtu | 15:30-17:30 | MIKROBIOLOGI | 3.0 | R-001-1 | 1152 |
| Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika | Program Studi: Fisika |
| Fisika | Sabtu | 07:30-09:30 | BIOLOGI DASAR | 1.0 | R-001-1 | 795 |
| Fisika | Sabtu | 07:30-09:30 | METODE NUMERIK | 7.0 | R-003-1 | 807 |
| Fisika | Sabtu | 10:00-12:00 | ELEKTRONIKA DASAR I | 3.0 | R-001-1 | 795 |
| Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia | Program Studi: Kimia |
| Kimia | Selasa | 10:00-12:00 | Praktikum Teknik Pemisahan | 3.0 | R-001-1 | 1149 |
| Kimia | Rabu | 15:30-17:30 | Praktikum Kimia Unsur | 3.0 | R-001-1 | T-R4 |
| Kimia | Jumat | 07:30-09:30 | Praktikum Kimia Fisik | 3.0 | R-001-1 | 783 |
| Kimia | Jumat | 10:00-12:00 | Praktikum Kimia Analitik Dasar | 3.0 | R-002-1 | 778 |
| Kimia | Sabtu | 10:00-12:00 | Praktikum Kimia Organik Lanjut | 5.0 | R-002-1 | 121 |
| Kimia | Sabtu | 10:00-12:00 | Praktikum Teknik Pemisahan | 3.0 | R-002-1 | 1149 |
| Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri | Program Studi: Kimia Industri |
| Kimia Industri | Senin | 10:00-12:00 | Praktikum Teknologi Minyak dan Gas Bumi | 3.0 | R-001-1 | 1219 |
| Kimia Industri | Senin | 15:30-17:30 | Perancangan Alat Proses | 5.0 | R-001-1 | 1151 |
| Kimia Industri | Senin | 15:30-17:30 | Praktikum Analisis Mutu Sawit | 3.0 | R-001-1 | 1147 |
| Kimia Industri | Selasa | 07:30-09:30 | Simulasi Proses Industri | 5.0 | R-001-1 | 1148 |
| Kimia Industri | Selasa | 15:30-17:30 | Praktikum Sistem Utilitas | 5.0 | R-001-1 | 787 |
| Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro | Program Studi: Teknik Elektro |
| Teknik Elektro | Senin | 07:30-09:30 | Praktikum Mikroprosessor dan Antarmuka | 5.0 | R-001-1 | 359 |
| Teknik Elektro | Senin | 13:00-17:00 | Praktikum Sistem Kendali | 5.0 | R-002-1 | 802 |
| Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika | Program Studi: Teknik Geofisika |
| Teknik Geofisika | Selasa | 15:30-17:30 | FISIKA DASAR I | 1.0 | R-002-1 | 783 |
| Teknik Geofisika | Rabu | 15:30-17:30 | KOMPUTASI GEOFISIKA | 5.0 | R-001-1 | 1143 |
| Teknik Geofisika | Kamis | 07:30-09:30 | SEISMIK INVERSI DAN SEISMIK ATRIBUT | 7.0 | R-001-1 | 1143 |
| Teknik Geofisika | Kamis | 10:00-12:00 | SEISMIK INVERSI DAN SEISMIK ATRIBUT | 7.0 | R-002-1 | 807 |
| Teknik Geofisika | Jumat | 07:30-09:30 | KIMIA DASAR | 1.0 | R-002-1 | 1143 |
| Teknik Geofisika | Jumat | 13:00-15:00 | FISIKA DASAR I | 1.0 | R-001-1 | 1143 |
| Teknik Geofisika | Jumat | 13:00-15:00 | SISTEM INFORMASI GEOGRAFIS | 3.0 | R-002-1 | 783 |
| Teknik Geofisika | Sabtu | 10:00-12:00 | Metode Seismik | 5.0 | R-002-1 | 783 |
| Teknik Geofisika | Sabtu | 13:00-15:00 | Kuliah Lapangan Geologi | 5.0 | R-001-1 | 1143 |
| Teknik Geofisika | Sabtu | 15:30-17:30 | Gayaberat dan Magnetik | 3.0 | R-002-1 | 783 |
| Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi | Program Studi: Teknik Geologi |
| Teknik Geologi | Senin | 15:30-17:30 | FISIKA DASAR I | 1.0 | A-1 | 1216 |
| Teknik Geologi | Selasa | 07:30-09:30 | GEOINFORMASI | 3.0 | A-1 | 1209 |
| Teknik Geologi | Selasa | 10:00-12:00 | TEKNIK KOMUNIKASI GEOLOGI | 5.0 | D-1 | 1204 |
| Teknik Geologi | Selasa | 13:00-15:00 | KIMIA ANALISIS | 3.0 | A-1 | 1216 |
| Teknik Geologi | Jumat | 15:30-17:30 | GEOLOGI STRUKTUR | 3.0 | B-1 | 1216 |
| Teknik Geologi | Sabtu | 07:30-09:30 | MIKROPALEONTOLOGI | 5.0 | A-1 | 1216 |
| Teknik Geologi | Sabtu | 10:00-12:00 | FISIKA DASAR I | 1.0 | C-1 | 1209 |
| Teknik Geologi | Sabtu | 13:00-15:00 | GEOLOGI STRUKTUR | 3.0 | A-1 | 1216 |
| Teknik Geologi | Sabtu | 15:30-17:30 | KRISTALOGRAFI DAN<br>MINERALOGI | 1.0 | B-1 | 1216 |
| Teknik Geologi | Sabtu | 15:30-17:30 | PETROGRAFI | 5.0 | D-1 | 804 |
| Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia | Program Studi: Teknik Kimia |
| Teknik Kimia | Senin | 13:00-17:00 | Fisika Dasar | 1.0 | R-001-1 | 1219 |
| Teknik Kimia | Selasa | 10:00-12:00 | FISIKA DASAR I | 1.0 | R-004-1 | 1213 |
| Teknik Kimia | Rabu | 13:00-15:00 | Praktikum Pengantar Teknik Kimia-1 | 1.0 | R-006-1 | 618 |
| Teknik Kimia | Kamis | 08:00-12:00 | Aplikasi Komputer | 3.0 | R-002-1 | 8 |
| Teknik Kimia | Kamis | 08:00-12:00 | Praktikum Operasi Teknik Kimia | 5.0 | R-002-1 | 618 |

| Teknik Kimia | Kamis | 13:00-17:00 | Praktikum Dasar Teknik Kimia | 1.0 | R-003-2 | R14 |
| --- | --- | --- | --- | --- | --- | --- |
| Teknik Kimia | Jumat | 07:30-09:30 | I<br>Fisika Dasar | 1.0 | R-002-1 | 1149 |
| Teknik Kimia | Jumat | 10:00-12:00 | Fisika Dasar | 1.0 | R-002-2 | 1149 |
| Teknik Kimia | Jumat | 13:00-17:00 | Fisika Dasar | 1.0 | R-003-1 | T-R3 |
| Teknik Kimia | Sabtu | 08:00-12:00 | Aplikasi Komputer | 3.0 | R-001-1 | 359 |
| Teknik Kimia | Sabtu | 13:00-17:00 | Aplikasi Komputer | 3.0 | R-002-2 | R15 |
| Teknik Kimia | Sabtu | 13:00-15:00 | Fisika Dasar | 1.0 | R-001-2 | 1149 |
| Teknik Kimia | Sabtu | 13:00-17:00 | Praktikum Dasar Teknik Kimia I | 1.0 | R-003-1 | 1211 |
| Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan | Program Studi: Teknik Lingkungan |
| Teknik<br><br>Lingkungan | Senin | 07:30-09:30 | Kimia Dasar 1 | 1.0 | R-003-2 | 798 |
| Teknik<br><br>Lingkungan | Kamis | 07:30-09:30 | Pencemaran Udara | 5.0 | A-1 | 1205 |
| Teknik<br><br>Lingkungan | Sabtu | 10:00-12:00 | Kimia Dasar 1 | 1.0 | R-003-1 | 798 |
| Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan | Program Studi: Teknik Pertambangan |
| Teknik<br><br>Pertambangan | Senin | 10:00-12:00 | SIMULASI DAN KOMPUTASI<br><br>TAMBANG | 5.0 | C-2 | 618 |
| Teknik<br><br>Pertambangan | Selasa | 15:30-17:30 | Kimia Dasar | 1.0 | B-1 | 1217 |
| Teknik<br><br>Pertambangan | Rabu | 13:00-15:00 | MEKANIKA BATUAN | 3.0 | B-1 | T-R1 |
| Teknik<br><br>Pertambangan | Rabu | 13:00-15:00 | Pengolahan Bahan Galian | 5.0 | A-1 | 1151 |
| Teknik<br>Pertambangan | Rabu | 15:30-17:30 | MEKANIKA BATUAN | 3.0 | A-1 | R11 |
| Teknik<br><br>Pertambangan | Kamis | 13:00-15:00 | MEKANIKA TEKNIK | 3.0 | A-1 | 807 |
| Teknik<br><br>Pertambangan | Kamis | 15:30-17:30 | MEKANIKA TEKNIK | 3.0 | B-2 | 1151 |
| Teknik<br><br>Pertambangan | Jumat | 07:30-09:30 | MEKANIKA BATUAN | 3.0 | A-2 | R11 |
| Teknik<br><br>Pertambangan | Jumat | 10:00-12:00 | GEOLOGI STRUKTUR | 3.0 | A-1 | 1212 |
| Teknik<br><br>Pertambangan | Jumat | 10:00-12:00 | SIMULASI DAN KOMPUTASI TAMBANG | 5.0 | B-1 | 618 |
| Teknik<br><br>Pertambangan | Jumat | 15:30-17:30 | Kimia Dasar | 1.0 | B-2 | 1217 |
| Teknik<br><br>Pertambangan | Jumat | 15:30-17:30 | MEKANIKA TEKNIK | 3.0 | B-1 | 1151 |
| Teknik<br><br>Pertambangan | Jumat | 15:30-17:30 | MENGGAMBAR TEKNIK | 7.0 | R-001-1 | 618 |
| Teknik<br><br>Pertambangan | Sabtu | 07:30-09:30 | SIMULASI DAN KOMPUTASI<br><br>TAMBANG | 5.0 | A-1 | 618 |
| Teknik<br><br>Pertambangan | Sabtu | 13:00-15:00 | MEKANIKA BATUAN | 3.0 | B-2 | T-R5 |
| Teknik<br><br>Pertambangan | Sabtu | 15:30-17:30 | SIMULASI DAN KOMPUTASI TAMBANG | 5.0 | C-1 | 618 |
| Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil | Program Studi: Teknik Sipil |
| Teknik Sipil | Rabu | 10:00-12:00 | Kimia Dasar | 1.0 | R-001-2 | 1211 |
| Teknik Sipil | Kamis | 13:00-17:00 | Praktikum Mekanika Tanah | 3.0 | R-001-1 | 1219 |
| Teknik Sipil | Jumat | 13:00-17:00 | Praktikum Hidrolika | 5.0 | R-002-1 | 804 |
| Teknik Sipil | Sabtu | 10:00-12:00 | Kimia Dasar | 1.0 | R-001-1 | 1211 |
| Teknik Sipil | Sabtu | 13:00-17:00 | Praktikum Mekanika Tanah | 3.0 | R-002-1 | 46 |

- Lampiran 2. Blok Program Struktur Data

**Blok Program *****Data Class***** Gene**

Blok kode berikut mendefinisikan sebuah struktur data bernama Gene yang digunakan untuk merepresentasikan satu unit informasi dalam sistem penjadwalan:

| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| --- |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |
| @dataclass<br>class Gene:<br>    subject_name: str<br>    subject_id: str<br>    semester: int<br>    sks: int<br>    capacity: int<br>    assistant: List[AssistantSchedule]<br>    preferred_lab: List[Room]<br>    day_name: str<br>    day: int<br>    start_time: int<br>    end_time: int<br>    room_id: int<br>    group: str<br>    prodi_id: str = ""<br>    id: str = field(default_factory=lambda: uuid.uuid4().hex) |

**Blok Program *****Data Class***** Room**

| @dataclass<br>class Room:<br>    id: int<br>    room_name: str<br>    room_capacity: int |
| --- |

**Blok Program *****Data Class *****Asisten**

@dataclass

class AssistantSchedule:

id: str

day_name: List[str]

day: List[int]

start_time: List[int]

end_time: List[int]

duration: List[int]

sks: List[int]

**Blok Program *****Data Class***** Individual**

@dataclass

class Individuals:

chromosome: List[Gene]

type Population = List[Individuals]

**Blok Program Fungsi Fitness – *****time overlaps checking***

def _time_overlaps(g1: Gene, g2: Gene) -> bool:

if str(g1.day) != str(g2.day):

return False

return max(int(g1.start_time), int(g2.start_time)) < min(

int(g1.end_time), int(g2.end_time)

)

**Blok Program Fungsi Fitness – Normalisasi Grup**

def _normalize_group(group: str) -> str:

if not group:

return ""

return group.strip().rstrip(",")

- Lampiran 3. Blok Program Fungsi Fitness

**Blok Program Fungsi Fitness – Cek Konflik Ruangan**

def room_conflicts(genes: Sequence[Gene]) -> int:

conflicts = 0

for i in range(len(genes)):

for j in range(i + 1, len(genes)):

if str(genes[i].room_id) == str(genes[j].room_id) and _time_overlaps(

genes[i], genes[j]

):

conflicts += 1

return conflicts

**Blok Program Fungsi Fitness – Cek Konflik Asisten**

def assistant_conflicts(genes: Sequence[Gene]) -> int:

conflicts = 0

assistant_map: Dict[str, List[Gene]] = defaultdict(list)

for gene in genes:

for assistant in gene.assistant:

if assistant and assistant.id:

assistant_map[str(assistant.id)].append(gene)

for schedule in assistant_map.values():

for i in range(len(schedule)):

for j in range(i + 1, len(schedule)):

if _time_overlaps(schedule[i], schedule[j]):

conflicts += 1

return conflicts

**Blok Program Fungsi Fitness – Cek Konflik Grup**

def group_conflicts(genes: Sequence[Gene]) -> int:

conflicts = 0

group_map: Dict[Tuple[str, str, str], List[Gene]] = defaultdict(list)

for gene in genes:

grp = _normalize_group(gene.group)

if grp:

key = (str(gene.prodi_id), str(gene.semester), str(grp))

group_map[key].append(gene)

for members in group_map.values():

for i in range(len(members)):

for j in range(i + 1, len(members)):

if _time_overlaps(members[i], members[j]):

conflicts += 1

return conflicts

**Blok Program Fungsi Fitness – Kalkulasi Penalti**

def calculate_penalties(individual: Individuals) -> Dict[str, int]:

genes = individual.chromosome

return {

"room": room_conflicts(genes),

"assistant": assistant_conflicts(genes),

"group": group_conflicts(genes),

}

**Blok Program Fungsi Fitness – Kalkulasi Skor Fitness**

def calculate_fitness(individual: Individuals) -> Tuple[float, float, Dict[str, int]]:

penalties = calculate_penalties(individual)

penalty_score = (

3.0 * penalties["room"]

+ 2.0 * penalties["assistant"]

+ 1.0 * penalties["group"])

fitness = 1.0 / (1.0 + penalty_score)

return fitness, penalty_score, penalties

- Lampiran 4. Blok Program Crossover

**Blok Program Crossover – Seleksi Parent**

def select_parents(

population: List[seeder.Individuals],

fitnesses: List[float]

) -> List[Tuple[seeder.Individuals, int, float]]:

"""Roulette-wheel selection with replacement and fitness tracking."""

total = sum(fitnesses)

selected: List[Tuple[seeder.Individuals, int, float]] = []

for _ in range(len(population)):

if total <= 0:

idx = random.randrange(len(population))

else:

pick = random.random() * total

accumulator = 0.0

idx = 0

for i, f in enumerate(fitnesses):

accumulator += f

if accumulator >= pick:

idx = i

break

selected.append((population[idx], idx + 1, fitnesses[idx]))

return selected

**Blok Program Crossover – Single Point Crossover**

def single_point_crossover(

parent_a: seeder.Individuals,

parent_b: seeder.Individuals

) -> Tuple[seeder.Individuals, seeder.Individuals]:

"""Single-point crossover returning deep copies of two children."""

genes_a = [deepcopy(g) for g in parent_a.chromosome]

genes_b = [deepcopy(g) for g in parent_b.chromosome]

min_len = min(len(genes_a), len(genes_b))

if min_len < 2:

child_a = repair_individual(

seeder.Individuals(genes_a),

template_genes=genes_a + genes_b,

target_size=len(genes_a),

)

child_b = repair_individual(

seeder.Individuals(genes_b),

template_genes=genes_b + genes_a,

target_size=len(genes_b),

)

return child_a, child_b

point = random.randint(1, min_len - 1)

child1 = repair_individual(

seeder.Individuals(genes_a[:point] + genes_b[point:]),

template_genes=genes_a + genes_b,

target_size=len(genes_a),

)

child2 = repair_individual(

seeder.Individuals(genes_b[:point] + genes_a[point:]),

template_genes=genes_b + genes_a,

target_size=len(genes_b),

)

return child1, child2

**Blok Program Crossover – *****Crossover Pair***

def _process_crossover_pair(args):

"""Worker: proses satu pair crossover secara paralel."""

(

parent_a, parent_b, should_cross, target_size,

best_parent, best_pre, best_parent_penalty,

best_parent_penalties, best_idx, seeder_map, max_children,

) = args

if should_cross:

child_a, child_b = single_point_crossover(parent_a, parent_b)

else:

child_a, child_b = deepcopy(parent_a), deepcopy(parent_b)

results = []

for child_candidate in (child_a, child_b):

if len(results) >= max_children:

break

if should_cross:

repaired_child = child_candidate

else:

repaired_child = repair_individual(

child_candidate,

template_genes=parent_a.chromosome + parent_b.chromosome,

target_size=target_size,

)

child_fitness, penalty_score, penalties = calculate_fitness(repaired_child)

selected_child, selected_fitness, selected_penalty, selected_penalties = (

anti_degeneration(

candidate=repaired_child,

candidate_fitness=child_fitness,

candidate_penalty=penalty_score,

candidate_penalties=penalties,

fallback=best_parent,

fallback_fitness=best_pre,

fallback_penalty=best_parent_penalty,

fallback_penalties=best_parent_penalties,

)

)

results.append((selected_child, best_pre, selected_fitness,

selected_penalty, selected_penalties,

seeder_map.get(best_idx)))

return results

**Blok Program Crossover – *****Crossover Rate****** *****adaptif**

def get_adaptive_crossover_rate(fitness_values: List[float]) -> Tuple[float, dict]:

if len(fitness_values) < 2:

return 0.9  # Default high if single individual

std_dev = statistics.stdev(fitness_values)

# Fuzzification

mu_low = 0.0

if std_dev <= 0.05:

mu_low = (0.05 - std_dev) / 0.05

if std_dev < 0:

mu_low = 1.0

mu_med = triangle(std_dev, 0.02, 0.05, 0.08)

mu_high = 0.0

if std_dev >= 0.05:

if std_dev <= 0.10:

mu_high = (std_dev - 0.05) / 0.05

else:

mu_high = 1.0

# Inference & Defuzzification (Weighted Average)

numerator = (mu_low * 0.90) + (mu_med * 0.60) + (mu_high * 0.30)

denominator = mu_low + mu_med + mu_high

if denominator == 0:

cr = 0.9  # Fallback

else:

cr = numerator / denominator

return cr, details

- Lampiran 5. Blok Program *Mutation*

**Blok Program Mutation – Identifikasi Slot Waktu Valid**

def _candidate_slots(day_idx: int, duration_seconds: int) -> List[Tuple[int, int]]:

duration_hours = int(round(duration_seconds / 3600))

if duration_hours <= 2:

duration_hours = 2

elif duration_hours == 3:

duration_hours = 3

else:

duration_hours = 4

slots = seeder.SLOTS.get(duration_hours, [])

forbidden = seeder.FORBIDDEN_WINDOWS.get(day_idx, [])

return [

(start, end)

for start, end in slots

if not any(seeder.overlap(start, end, fs, fe) for fs, fe in forbidden)

]

**Blok Program Mutation – ****Mutasi Atribut Temporal**

def _mutate_day_time(gene) -> None:

duration = gene.end_time - gene.start_time

if duration <= 0:

duration = 2 * 3600

day_candidates = [ALL_DAY_NAMES.index(d) for d in DAY_NAMES if d in ALL_DAY_NAMES]

random.shuffle(day_candidates)

for day_idx in day_candidates:

slots = _candidate_slots(day_idx, duration)

if not slots:

continue

start, end = random.choice(slots)

gene.day = day_idx

gene.day_name = ALL_DAY_NAMES[day_idx]

gene.start_time = start

gene.end_time = end

return

# fallback aman jika tidak ada slot valid

gene.day = 0

gene.day_name = ALL_DAY_NAMES[0]

gene.start_time, gene.end_time = seeder.SLOTS[2][0]

**Blok Program Mutation – Mutasi Ruangan**

def _mutate_room(gene) -> None:

preferred = [room.id for room in gene.preferred_lab]

if preferred:

gene.room_id = random.choice(preferred)

return

if seeder.Rooms:

gene.room_id = random.choice(seeder.Rooms).id

**Blok Program Mutation – Mutasi Individu**

def mutate_individual(individual: Individuals, mutation_rate: float) -> Individuals:

genes = [deepcopy(gene) for gene in individual.chromosome]

if not genes:

return Individuals(genes)

for gene in genes:

if random.random() >= mutation_rate:

continue

move = random.choice(["day_time", "room", "both"])

if move in {"day_time", "both"}:

_mutate_day_time(gene)

if move in {"room", "both"}:

_mutate_room(gene)

return repair_individual(

Individuals(genes),

template_genes=individual.chromosome,

target_size=len(individual.chromosome),

)

**Blok Program Mutation – Proses Mutasi**

def _process_mutation(args):

"""Worker: proses satu mutation secara paralel."""

child, mutation_rate, crossover_fitness, crossover_penalty, crossover_penalties = args

mutated_candidate = mutate_individual(child, mutation_rate)

mutation_fitness, mutation_penalty, mutation_penalties = calculate_fitness(

mutated_candidate

)

return anti_degeneration(

candidate=mutated_candidate,

candidate_fitness=mutation_fitness,

candidate_penalty=mutation_penalty,

candidate_penalties=mutation_penalties,

fallback=child,

fallback_fitness=crossover_fitness,

fallback_penalty=crossover_penalty,

fallback_penalties=crossover_penalties,

)

**Blok Program Mutation – *****Mutation Rate *****Adaptif**

def get_adaptive_mutation_rate(

current_best_fitness: float,

prev_best_fitness: float,

mutation_strategy: str = "default",

stagnation_counter: int = 0,

fitness_history: list = None,

total_genes: int = 25,

) -> Tuple[float, dict]:

# --- VARIABLE EXTRACTION & PRE-PROCESSING ---

fuzzy_input_name = "Fitness Improvement (Δf)"

val = current_best_fitness - prev_best_fitness

if mutation_strategy == "sliding_window":

if fitness_history and len(fitness_history) >= 5:

val = current_best_fitness - fitness_history[-5]

else:

val = current_best_fitness - prev_best_fitness

elif mutation_strategy == "stagnation_counter":

fuzzy_input_name = "Stagnation Counter (Iters)"

val = float(stagnation_counter)

elif mutation_strategy == "despair_dynamic":

fuzzy_input_name = "Despair Ratio (Counter / Patience)"

max_patience = math.sqrt(total_genes) * 2.0

if max_patience < 1:

max_patience = 1.0

val = min(1.0, float(stagnation_counter) / max_patience)

if mutation_strategy in ["default", "sliding_window"] and val < 0:

val = 0.0

# --- FUZZIFICATION ---

# (varies by strategy - see below)

...

# --- INFERENCE & DEFUZZIFICATION ---

# (Weighted Average method)

...

return mr, details

- Lampiran 6. Blok Program Evaluasi

**Blok Program Evaluasi – Data Kelas Run Results**

@dataclass

class RunResult:

algorithm: str

run_id: int

converged: bool

convergence_iter: Optional[int]

total_iterations: int

best_fitness: float

best_penalty: float

avg_fitness_last: float

total_time_sec: float

avg_time_per_iter: float

best_hard_penalty: int = 0

best_soft_penalty: float = 0.0

best_conflict: int = 0

median_fitness: float = 0.0

stdev_fitness: float = 0.0

fitness_improvement_rate: float = 0.0

fitness_history: List[float] = field(default_factory=list)

penalty_history: List[float] = field(default_factory=list)
