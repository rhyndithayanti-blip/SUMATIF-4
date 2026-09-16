import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN 1: PILIHAN GANDA BIASA (15 SOAL)
  // ==========================================

  // --- MATERI 1: MEMAHAMI IDE POKOK (SOAL 1 - 4) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Memahami Ide Pokok',
    difficulty: 'Mudah',
    text: 'Bacalah paragraf berikut dengan saksama!\n\nPohon kelapa sering dijuluki sebagai pohon serbaguna karena hampir seluruh bagiannya dapat dimanfaatkan oleh manusia. Batang pohon kelapa dapat dijadikan bahan bangunan atau perabot rumah tangga. Daunnya dapat dianyam menjadi ketupat dan atap rumah tradisional. Sementara itu, buah kelapa dapat diminum airnya, dimakan daging buahnya, dan diolah menjadi santan maupun minyak goreng.\n\nIde pokok dari paragraf di atas adalah...',
    options: [
      { id: 'A', text: 'Daun kelapa yang dapat dianyam menjadi ketupat' },
      { id: 'B', text: 'Pohon kelapa merupakan pohon serbaguna bagi manusia' },
      { id: 'C', text: 'Manfaat buah kelapa untuk bahan minyak goreng' },
      { id: 'D', text: 'Batang kelapa yang sangat kuat untuk bangunan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ide pokok paragraf tersebut terletak pada kalimat utama di awal paragraf (paragraf deduktif): "Pohon kelapa sering dijuluki sebagai pohon serbaguna karena hampir seluruh bagiannya dapat dimanfaatkan oleh manusia." Kalimat-kalimat setelahnya merupakan gagasan penjelas mengenai manfaat bagian batang, daun, dan buah kelapa.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Memahami Ide Pokok',
    difficulty: 'Sedang',
    text: 'Bacalah teks berikut!\n\nSetiap jam istirahat sekolah, perpustakaan SD Negeri 3 Loloan Timur selalu ramai dikunjungi oleh para siswa. Beberapa siswa tampak asyik membaca buku ensiklopedia dan cerita rakyat. Di sudut lain, beberapa anak sedang meminjam buku pelajaran yang dibantu oleh guru pustakawan. Suasana perpustakaan yang tenang dan nyaman membuat para siswa betah belajar dan menambah pengetahuan di sana.\n\nGagasan pokok paragraf tersebut adalah...',
    options: [
      { id: 'A', text: 'Guru pustakawan membantu siswa yang meminjam buku' },
      { id: 'B', text: 'Koleksi buku ensiklopedia dan cerita rakyat yang lengkap' },
      { id: 'C', text: 'Ramainya perpustakaan sekolah saat jam istirahat' },
      { id: 'D', text: 'Tata tertib yang harus dipatuhi siswa di perpustakaan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gagasan pokok atau ide pokok terletak pada kalimat pertama: "Setiap jam istirahat sekolah, perpustakaan SD Negeri 3 Loloan Timur selalu ramai dikunjungi oleh para siswa." Kalimat berikutnya menjelaskan rincian kegiatan membaca, meminjam buku, serta suasana yang nyaman.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Memahami Ide Pokok',
    difficulty: 'Sedang',
    text: 'Bacalah paragraf berikut!\n\nSaat pagi hari, tubuh kita membutuhkan energi yang cukup setelah beristirahat sepanjang malam. Sarapan pagi memberikan asupan nutrisi yang dibutuhkan oleh otak agar dapat berkonsentrasi belajar dengan baik di kelas. Selain itu, sarapan juga menjaga daya tahan tubuh agar tidak mudah lemas atau sakit saat mengikuti aktivitas di sekolah. Oleh karena itu, sarapan pagi sangat penting bagi kesehatan dan konsentrasi belajar siswa.\n\nIde pokok paragraf di atas terletak pada...',
    options: [
      { id: 'A', text: 'Awal paragraf karena menjelaskan istirahat malam' },
      { id: 'B', text: 'Akhir paragraf (paragraf induktif) tentang pentingnya sarapan bagi siswa' },
      { id: 'C', text: 'Tengah paragraf tentang menjaga daya tahan tubuh' },
      { id: 'D', text: 'Seluruh kalimat yang ada di dalam paragraf' },
    ],
    correctAnswer: 'B',
    explanation:
      'Paragraf ini merupakan paragraf induktif, di mana kalimat-kalimat awal berisi penjelasan khusus tentang kebutuhan energi, nutrisi otak, dan daya tahan tubuh. Kesimpulan utama atau ide pokok ditegaskan pada kalimat terakhir yang ditandai konjungsi "Oleh karena itu, sarapan pagi sangat penting bagi kesehatan dan konsentrasi belajar siswa."',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Memahami Ide Pokok',
    difficulty: 'Mudah',
    text: 'Dalam suatu paragraf, kalimat yang berfungsi menguraikan, memperjelas, atau memberikan rincian data terhadap gagasan utama disebut...',
    options: [
      { id: 'A', text: 'Kalimat utama' },
      { id: 'B', text: 'Kalimat penjelas (pendukung)' },
      { id: 'C', text: 'Kalimat perintah' },
      { id: 'D', text: 'Kalimat tanya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat penjelas atau kalimat pendukung adalah kalimat-kalimat yang berfungsi mengembangkan, memperjelas, dan menguraikan ide pokok yang terdapat pada kalimat utama.',
  },

  // --- MATERI 2: HOMONIM (SOAL 5 - 8) ---
  {
    id: 5,
    type: 'pg',
    topic: 'Homonim',
    difficulty: 'Mudah',
    text: 'Perhatikan kedua kalimat berikut!\n(1) Gigitan ular sendok itu sangat mematikan karena mengandung bisa.\n(2) Putu bisa menyelesaikan soal matematika yang sulit itu dalam waktu singkat.\n\nKata "bisa" pada kedua kalimat tersebut merupakan contoh homonim. Makna kata "bisa" pada kalimat (1) dan (2) secara berturut-turut adalah...',
    options: [
      { id: 'A', text: 'Racun dan mampu/dapat' },
      { id: 'B', text: 'Mampu dan berbahaya' },
      { id: 'C', text: 'Keahlian dan hewan' },
      { id: 'D', text: 'Dapat dan racun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Homonim adalah kata yang ejaan dan lafalnya sama, namun maknanya berbeda. Pada kalimat (1), kata "bisa" bermakna zat racun hewan berbisa. Pada kalimat (2), kata "bisa" bermakna mampu atau dapat melakukan sesuatu.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Homonim',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat-kalimat berikut!\n(1) Malam ini bulan purnama tampak bulat sempurna dan sangat terang.\n(2) Paman Made akan datang berkunjung ke Loloan Timur pada bulan depan.\n\nPerbedaan makna kata "bulan" pada kedua kalimat di atas adalah...',
    options: [
      { id: 'A', text: 'Kalimat (1) nama hari, kalimat (2) satelit bumi' },
      { id: 'B', text: 'Kalimat (1) satelit alami bumi, kalimat (2) satuan penanggalan/kalender' },
      { id: 'C', text: 'Kalimat (1) musim kemarau, kalimat (2) waktu malam hari' },
      { id: 'D', text: 'Kalimat (1) benda langit, kalimat (2) nama orang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada kalimat (1), "bulan" adalah satelit alami yang mengitari bumi dan bersinar di malam hari. Pada kalimat (2), "bulan" merujuk pada satuan waktu dalam kalender (dua belas bulan dalam satu tahun).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Homonim',
    difficulty: 'Sedang',
    text: 'Bacalah dua kalimat berikut!\n(1) Ayah menaiki tangga untuk mengganti genting rumah yang bocor.\n(2) Suasana di ruang gawat darurat rumah sakit terasa sangat genting ketika ambulans tiba.\n\nArti kata "genting" pada kalimat (2) adalah...',
    options: [
      { id: 'A', text: 'Penutup atap rumah yang terbuat dari tanah liat bakar' },
      { id: 'B', text: 'Keadaan yang aman dan tenteram' },
      { id: 'C', text: 'Kondisi gawat, kritis, atau berbahaya' },
      { id: 'D', text: 'Tempat yang sempit dan ramai' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata "genting" pada kalimat (1) berarti tutup atap rumah dari tanah liat. Sedangkan kata "genting" pada kalimat (2) bermakna tegang, gawat, kritis, atau berbahaya.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Homonim',
    difficulty: 'Sedang',
    text: 'Cermatilah penggunaan kata "kali" pada kalimat berikut!\n"Budi sudah mencuci sepeda miliknya sebanyak tiga kali di tepi kali dekat sawah kakek."\n\nMakna kata "kali" yang dicetak tebal secara berurutan menunjukkan...',
    options: [
      { id: 'A', text: 'Frekuensi (kelipatan peristiwa) dan sungai' },
      { id: 'B', text: 'Danau dan hitungan matematika' },
      { id: 'C', text: 'Sungai dan waktu perjalanan' },
      { id: 'D', text: 'Ukuran panjang dan jembatan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata "tiga kali" menyatakan kekerapan/frekuensi pengulangan suatu tindakan, sedangkan kata "tepi kali" merujuk pada aliran sungai kecil.',
  },

  // --- MATERI 3: AWALAN ME- (SOAL 9 - 12) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Awalan me-',
    difficulty: 'Mudah',
    text: 'Ibu meminta Ririn untuk (sapu) lantai ruang tamu yang berdebu.\n\nKata di dalam kurung jika diberi awalan me- yang benar sesuai kaidah peluluhan bunyi adalah...',
    options: [
      { id: 'A', text: 'Mensapu' },
      { id: 'B', text: 'Menyapu' },
      { id: 'C', text: 'Memsapu' },
      { id: 'D', text: 'Mengsapu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menurut kaidah pembentukan kata berimbuhan me-, huruf awal S pada kata dasar yang diikuti huruf vokal akan luluh menjadi "meny-". Jadi, me- + sapu berubah menjadi "menyapu".',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Awalan me-',
    difficulty: 'Sedang',
    text: 'Pak Guru Susilo sedang (cat) dinding ruang kelas IV dengan warna biru muda.\n\nBentukan kata berawalan me- yang tepat untuk kata dasar satu suku kata "cat" adalah...',
    options: [
      { id: 'A', text: 'Mencat' },
      { id: 'B', text: 'Memcat' },
      { id: 'C', text: 'Mengecat' },
      { id: 'D', text: 'Mengcat' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kata dasar yang hanya terdiri atas satu suku kata (seperti cat, lap, bom, bor, las) apabila diberi imbuhan me- akan berubah menjadi "menge-". Oleh karena itu, me- + cat menjadi "mengecat".',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Awalan me-',
    difficulty: 'Sukar',
    text: 'Perhatikan pasangan kata dasar dan bentukan kata berawalan me- berikut!\n(1) me- + potong  -> memotong\n(2) me- + tulis   -> menulis\n(3) me- + kunci   -> mengkunci\n(4) me- + kait    -> mengait\n\nBentukan kata berawalan me- yang TIDAK TEPAT karena melanggar kaidah peluluhan bunyi huruf K adalah nomor...',
    options: [
      { id: 'A', text: '(1)' },
      { id: 'B', text: '(2)' },
      { id: 'C', text: '(3)' },
      { id: 'D', text: '(4)' },
    ],
    correctAnswer: 'C',
    explanation:
      'Huruf awal K pada kata dasar yang diikuti huruf vokal (seperti kunci) wajib luluh menjadi "meng-". Bentukan yang benar adalah "mengunci", bukan "mengkunci". Sementara nomor (1), (2), dan (4) sudah benar menurut kaidah peluluhan K, P, T, S.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Awalan me-',
    difficulty: 'Mudah',
    text: 'Setiap pagi Made membantu ayahnya mencangkul tanah di kebun sayur.\n\nMakna awalan me- pada kata "mencangkul" adalah...',
    options: [
      { id: 'A', text: 'Menjadi seperti cangkul' },
      { id: 'B', text: 'Menggunakan atau mengoperasikan alat cangkul' },
      { id: 'C', text: 'Membuat cangkul baru' },
      { id: 'D', text: 'Mencari cangkul yang hilang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Awalan me- yang bergabung dengan kata benda berupa alat (cangkul) mengandung makna melakukan tindakan menggunakan atau mempergunakan alat tersebut.',
  },

  // --- MATERI 4: KALIMAT MAJEMUK (SOAL 13 - 15) ---
  {
    id: 13,
    type: 'pg',
    topic: 'Kalimat Majemuk',
    difficulty: 'Mudah',
    text: 'Cermatilah kalimat rumpang berikut!\n"Wayan sangat gemar membaca buku cerita di teras, ... adiknya lebih suka menggambar di ruang tengah."\n\nKata penghubung (konjungsi) yang paling tepat untuk melengkapi kalimat majemuk setara yang menyatakan pertentangan tersebut adalah...',
    options: [
      { id: 'A', text: 'sehingga' },
      { id: 'B', text: 'sedangkan' },
      { id: 'C', text: 'karena' },
      { id: 'D', text: 'sebab' },
    ],
    correctAnswer: 'B',
    explanation:
      'Konjungsi "sedangkan" atau "tetapi" digunakan dalam kalimat majemuk setara untuk menghubungkan dua klausa yang memiliki hubungan perlawanan atau pertentangan.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Kalimat Majemuk',
    difficulty: 'Sedang',
    text: 'Perhatikan dua kalimat tunggal berikut!\n(1) Ayu menyiram tanaman bunga mawar di halaman depan.\n(2) Ayu menyapu daun-daun kering yang berguguran.\n\nPenggabungan kedua kalimat tunggal di atas menjadi kalimat majemuk setara yang tepat dan efektif adalah...',
    options: [
      { id: 'A', text: 'Ayu menyiram tanaman bunga mawar di halaman depan dan menyapu daun-daun kering yang berguguran.' },
      { id: 'B', text: 'Ayu menyiram bunga mawar tetapi Ayu menyapu daun kering.' },
      { id: 'C', text: 'Ayu menyiram tanaman bunga mawar karena daun-daun kering berguguran.' },
      { id: 'D', text: 'Ayu menyiram tanaman bunga mawar sehingga daun-daun kering berguguran.' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kedua kegiatan dilakukan oleh subjek yang sama (Ayu) dan bersifat saling melengkapi/menggabungkan. Penggabungan setara yang efektif menggunakan kata penghubung "dan", dengan subjek yang sama cukup ditulis satu kali.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Kalimat Majemuk',
    difficulty: 'Sedang',
    text: 'Manakah dari kalimat berikut yang merupakan kalimat majemuk bertingkat dengan hubungan sebab-akibat?',
    options: [
      { id: 'A', text: 'Ketut menyapu halaman, sedangkan Gede membersihkan jendela kaca.' },
      { id: 'B', text: 'Ibu menyiapkan sarapan dan Ayah membaca koran di beranda.' },
      { id: 'C', text: 'Laras tidak masuk sekolah hari ini karena badannya sedang demam tinggi.' },
      { id: 'D', text: 'Kamu boleh memilih pensil warna atau krayon untuk menggambar.' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kalimat "Laras tidak masuk sekolah hari ini karena badannya sedang demam tinggi" merupakan kalimat majemuk bertingkat yang menghubungkan klausa utama (akibat) dengan anak kalimat (sebab) menggunakan kata penghubung "karena". Opsi A dan B adalah majemuk setara, sedangkan D adalah majemuk pemilihan.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (LEBIH DARI 1 JAWABAN BENAR) (5 SOAL)
  // =========================================================================

  {
    id: 16,
    type: 'pgk',
    topic: 'Memahami Ide Pokok',
    difficulty: 'Sedang',
    text: 'Bacalah teks singkat berikut!\n\nHutan mangrove di pesisir pantai Jembrana memiliki peran yang sangat penting dalam menjaga kelestarian lingkungan. Akar-akar pohon mangrove yang kuat mampu menahan hantaman ombak besar sehingga dapat mencegah terjadinya abrasi pantai. Selain itu, hutan mangrove juga menjadi tempat berkembang biak yang aman bagi berbagai jenis ikan, kepiting, dan udang.\n\nPilihlah SEMUA pernyataan yang BENAR berdasarkan teks di atas! (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Ide pokok paragraf tersebut adalah pentingnya peran hutan mangrove bagi kelestarian lingkungan pesisir.' },
      { id: 'B', text: 'Salah satu gagasan penjelas dalam teks adalah kemampuan akar mangrove mencegah abrasi pantai.' },
      { id: 'C', text: 'Kalimat terakhir teks tersebut merupakan kalimat utama dari paragraf.' },
      { id: 'D', text: 'Hutan mangrove juga berfungsi sebagai habitat berkembang biak berbagai biota laut seperti ikan dan kepiting.' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '- Pernyataan A BENAR karena kalimat pertama merupakan kalimat utama yang memuat ide pokok.\n- Pernyataan B BENAR karena kalimat kedua merupakan penjelas fungsi fisik akar mangrove.\n- Pernyataan C SALAH karena kalimat terakhir adalah kalimat penjelas, bukan kalimat utama.\n- Pernyataan D BENAR sesuai isi kalimat terakhir teks.',
  },
  {
    id: 17,
    type: 'pgk',
    topic: 'Homonim',
    difficulty: 'Sedang',
    text: 'Cermatilah kalimat-kalimat berikut!\n(1) Bunga melati di halaman rumah mekar dengan aroma harum.\n(2) Koperasi sekolah memberikan bunga pinjaman yang sangat ringan bagi anggotanya.\n(3) Setiap warga negara memiliki hak untuk mendapatkan pendidikan yang layak.\n(4) Hak sepatu pesta milik Kakak patah saat berjalan menuruni tangga.\n\nManakah pernyataan yang BENAR mengenai homonim pada kalimat-kalimat tersebut? (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Kata "bunga" pada kalimat (1) dan kalimat (2) merupakan pasangan kata yang berhomonim.' },
      { id: 'B', text: 'Kata "hak" pada kalimat (3) dan kalimat (4) merupakan pasangan kata yang berhomonim.' },
      { id: 'C', text: 'Kata "bunga" pada kalimat (1) memiliki makna yang sama persis dengan kata "bunga" pada kalimat (2).' },
      { id: 'D', text: 'Kata "hak" pada kalimat (3) berarti kewenangan/milik, sedangkan pada kalimat (4) berarti tumit sepatu.' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '- Pilihan A BENAR: "bunga" tanaman (1) dan "bunga" jasa pinjaman uang (2) berhomonim.\n- Pilihan B BENAR: "hak" kewenangan (3) dan "hak" bagian tumit sepatu (4) berhomonim.\n- Pilihan C SALAH: maknanya berbeda, bukan sama persis.\n- Pilihan D BENAR: penjelasan arti kata "hak" pada konteks kedua kalimat tersebut tepat.',
  },
  {
    id: 18,
    type: 'pgk',
    topic: 'Awalan me-',
    difficulty: 'Sukar',
    text: 'Dalam Bahasa Indonesia, huruf pertama kata dasar K, P, T, dan S akan luluh saat mendapat awalan me- jika huruf keduanya adalah huruf vokal.\n\nManakah bentukan kata berawalan me- di bawah ini yang MENGALAMI PELULUHAN bunyi dengan BENAR? (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'me- + pancing -> memancing' },
      { id: 'B', text: 'me- + tarik   -> menarik' },
      { id: 'C', text: 'me- + kirim   -> mengkirim' },
      { id: 'D', text: 'me- + saring  -> menyaring' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      '- Opsi A BENAR: p luluh menjadi mem- (memancing).\n- Opsi B BENAR: t luluh menjadi men- (menarik).\n- Opsi C SALAH: k wajib luluh menjadi meng- (seharusnya "mengirim", bukan "mengkirim").\n- Opsi D BENAR: s luluh menjadi meny- (menyaring).',
  },
  {
    id: 19,
    type: 'pgk',
    topic: 'Kalimat Majemuk',
    difficulty: 'Sedang',
    text: 'Kalimat majemuk setara dibentuk oleh klausa-klausa yang kedudukannya sederajat, biasanya dihubungkan dengan kata penghubung dan, tetapi, serta, sedangkan, atau atau.\n\nManakah dari kalimat-kalimat berikut yang TERMASUK kalimat majemuk setara? (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Komang membersihkan papan tulis, sedangkan Wayan merapikan meja guru.' },
      { id: 'B', text: 'Siswa kelas IV berlari ke lapangan ketika lonceng istirahat berbunyi.' },
      { id: 'C', text: 'Dina ingin pergi berenang, tetapi cuaca di luar sedang hujan lebat.' },
      { id: 'D', text: 'Rudi rajin berlatih setiap sore sehingga ia terpilih menjadi kapten sepak bola.' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      '- Kalimat A (konjungsi "sedangkan") dan Kalimat C (konjungsi "tetapi") adalah kalimat majemuk setara.\n- Kalimat B adalah kalimat majemuk bertingkat hubungan waktu (konjungsi "ketika").\n- Kalimat D adalah kalimat majemuk bertingkat hubungan akibat (konjungsi "sehingga").',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Awalan me- & Kalimat Majemuk',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat berikut!\n"Ibu Ririn (me- + beli) bahan sayuran segar di pasar tradisional, kemudian beliau (me- + masak) sup lezat untuk santap siang keluarga."\n\nManakah pernyataan yang TEPAT mengenai kalimat di atas? (Pilihan benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Bentukan kata berawalan me- dari kata dasar "beli" yang benar adalah "membeli".' },
      { id: 'B', text: 'Bentukan kata berawalan me- dari kata dasar "masak" yang benar adalah "memasak".' },
      { id: 'C', text: 'Kalimat tersebut merupakan kalimat majemuk setara yang dihubungkan dengan konjungsi urutan waktu (kemudian).' },
      { id: 'D', text: 'Huruf "b" pada kata beli harus luluh menjadi meny- sehingga menjadi menyeli.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '- Opsi A BENAR: me- + beli menjadi membeli (huruf B tidak luluh).\n- Opsi B BENAR: me- + masak menjadi memasak.\n- Opsi C BENAR: kedua klausa digabung oleh konjungsi "kemudian" yang menyatakan kelanjutan tindakan.\n- Opsi D SALAH: huruf B bukanlah huruf yang luluh (yang luluh adalah K, P, T, S).',
  },

  // =========================================================================
  // BAGIAN 3: PGK KATEGORI PERNYATAAN (RESPON BENAR / SALAH) (5 SOAL)
  // =========================================================================

  {
    id: 21,
    type: 'pgk_kategori',
    topic: 'Memahami Ide Pokok',
    difficulty: 'Sedang',
    text: 'Bacalah teks mengenai gotong royong berikut!\n\nTradisi gotong royong di lingkungan Loloan Timur mencerminkan nilai persatuan yang tinggi antarwarga. Setiap hari Minggu pagi, warga secara sukarela berkumpul membersihkan saluran air dan memangkas dahan pohon yang rimbun. Para ibu menyiapkan aneka kudapan tradisional dan minuman hangat untuk warga yang bekerja. Kebersamaan ini membuat lingkungan menjadi bersih, sehat, dan hubungan antartetangga terjalin sangat rukun.\n\nTentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Ide pokok teks tersebut adalah cerminan nilai persatuan warga melalui tradisi gotong royong.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Paragraf di atas termasuk jenis paragraf induktif karena ide pokoknya berada di kalimat terakhir.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kalimat tentang para ibu yang menyiapkan kudapan dan minuman merupakan kalimat penjelas (pendukung).',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Ide pokok ada pada kalimat pertama tentang nilai persatuan warga melalui gotong royong (BENAR).\n2. Paragraf ini adalah deduktif (kalimat utama di awal), bukan induktif (SALAH).\n3. Rincian kegiatan warga dan ibu-ibu menyiapkan kudapan adalah kalimat penjelas (BENAR).',
  },
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Homonim',
    difficulty: 'Sedang',
    text: 'Cermatilah pasangan kata yang berhomonim dalam bahasa Indonesia berikut ini!\nTentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Homonim adalah kata yang memiliki persamaan bunyi (lafal) dan ejaan (tulisan), tetapi memiliki arti yang berlainan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada kalimat "Ayah menabung di bank" dan "Bang Udin penjual bakso", kata "bank" dan "bang" merupakan contoh homonim sejati.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kata "rapat" dalam "Pintu itu tertutup sangat rapat" dan "Bapak Kepala Sekolah memimpin rapat guru" adalah contoh homonim yang tepat.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Definisi homonim adalah ejaan sama, lafal sama, makna beda (BENAR).\n2. Kata "bank" dan "bang" memiliki tulisan/ejaan yang berbeda (homofon, bukan homonim sejati) (SALAH).\n3. Kata "rapat" (tidak renggang) dan "rapat" (pertemuan resmi) sama tulisan dan ucapannya tetapi maknanya berbeda (BENAR).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Awalan me-',
    difficulty: 'Sukar',
    text: 'Pelajari kaidah perubahan bentuk imbuhan awalan me- (prefiks me-) berikut ini!\nTentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Awalan me- yang digabungkan dengan kata dasar satu suku kata seperti "lap" dan "bom" akan berubah bentuk menjadi "menge-" (mengelap, mengebom).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kata dasar yang diawali huruf K, P, T, atau S akan SELALU luluh meskipun setelah huruf tersebut diikuti oleh huruf konsonan, misalnya kata "traktir" menjadi "menraktir".',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Bentukan kata berimbuhan me- dari kata dasar "kunci" yang sesuai pedoman EBI adalah "mengunci", sedangkan dari kata dasar "tiup" adalah "meniup".',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Kata satu suku kata mendapat awalan menge- (mengelap, mengecat, mengebom) (BENAR).\n2. KTSP hanya luluh jika diikuti huruf vokal. Jika diikuti konsonan (gugus konsonan seperti pr, tr, kr), huruf tersebut TIDAK luluh (misal: me- + traktir -> mentraktir, me- + kritik -> mengkritik) (SALAH).\n3. Me- + kunci -> mengunci (k luluh), me- + tiup -> meniup (t luluh) (BENAR).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Kalimat Majemuk',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat-kalimat majemuk berikut beserta analisis konjungsinya!\nTentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat "Dita pandai menari Bali, tetapi adiknya lebih mahir bermain alat musik rindik" adalah kalimat majemuk setara yang menyatakan hubungan pertentangan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kata penghubung "atau" digunakan untuk menggabungkan klausa dalam kalimat majemuk setara hubungan pemilihan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kalimat "Budi rajin belajar setiap hari agar mendapat nilai yang memuaskan" adalah kalimat majemuk setara hubungan penambahan.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Konjungsi "tetapi" menyatakan pertentangan dalam kalimat majemuk setara (BENAR).\n2. Konjungsi "atau" menyatakan pilihan dalam kalimat majemuk setara pemilihan (BENAR).\n3. Kalimat tersebut menggunakan kata hubung "agar" yang merupakan kalimat majemuk bertingkat hubungan tujuan, bukan majemuk setara penambahan (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Analisis Kebahasaan Terpadu',
    difficulty: 'Sukar',
    text: 'Cermatilah kutipan cerita siswa berikut!\n"Made senang menggambar pemandangan sawah di buku gambarnya, sedangkan Putu gemar menulis puisi tentang keindahan alam. Ketika libur semester tiba, mereka bisa memamerkan hasil karya mereka di mading sekolah. Seluruh guru dan teman-teman memuji kreativitas kedua siswa berprestasi tersebut."\n\nTentukan kebenaran dari masing-masing pernyataan kebahasaan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kalimat pertama pada kutipan tersebut merupakan kalimat majemuk setara yang ditandai dengan konjungsi "sedangkan".',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kata "menulis" pada kalimat pertama berasal dari awalan me- dan kata dasar "tulis" yang mengalami peluluhan huruf T.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kata "bisa" pada kalimat kedua bermakna racun ular yang berbahaya.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kalimat pertama menghubungkan dua klausa setara pertentangan dengan kata penghubung "sedangkan" (BENAR).\n2. Kata "menulis" dibentuk dari me- + tulis (huruf T luluh menjadi men-) (BENAR).\n3. Kata "bisa" pada kalimat kedua bermakna dapat atau mampu (bukan racun) (SALAH).',
  },
];
