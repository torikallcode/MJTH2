export const LatihanDataSedang =
  [
    {
      id: 1,
      nama: "Variables, Integers, Booleans, Strings",
      level: "sedang",
      soal: "Buat sebuah program yang membaca input nama dan umur dari pengguna, menyimpannya dalam variabel string dan integer, kemudian mencetak pesan seperti: 'Halo, [nama]! Umur kamu [umur] tahun.'"
    },
    {
      id: 2,
      nama: "Constants",
      level: "sedang",
      soal: "Buat sebuah constant untuk menyimpan konversi dari mil ke kilometer (1 mil = 1.60934 km). Buat program yang meminta pengguna untuk memasukkan jarak dalam mil, lalu konversi jarak tersebut ke kilometer menggunakan constant yang telah didefinisikan."
    },
    {
      id: 3,
      nama: "Konversi Tipe Data",
      level: "sedang",
      soal: "Buat program yang meminta pengguna untuk memasukkan nilai suhu dalam derajat Celcius, kemudian konversi nilai tersebut ke Fahrenheit dan Kelvin. Pastikan untuk menggunakan konversi tipe data yang sesuai."
    },
    {
      id: 4,
      nama: "Type Deklarasi",
      level: "sedang",
      soal: "Buat type deklarasi baru bernama Student yang memiliki dua field: Name (string) dan Age (int). Buat sebuah array atau slice yang menyimpan beberapa Student dan cetak informasi setiap Student dalam format 'Nama: [Name], Umur: [Age]'."
    },
    {
      id: 5,
      nama: "Operasi Matematika",
      level: "sedang",
      soal: "Buat program yang menghitung rata-rata dari sebuah slice integer. Inputkan nilai-nilai ke dalam slice melalui user input dan hitung rata-rata dari nilai-nilai tersebut."
    },
    {
      id: 6,
      nama: "Perbandingan",
      level: "sedang",
      soal: "Buat fungsi bernama compareStrings yang menerima dua string dan mengembalikan pesan 'String 1 lebih panjang', 'String 2 lebih panjang', atau 'Kedua string memiliki panjang yang sama' berdasarkan panjang masing-masing string."
    },
    {
      id: 7,
      nama: "Array",
      level: "sedang",
      soal: "Buat program yang meminta pengguna untuk memasukkan 5 angka, menyimpannya ke dalam array, dan kemudian menampilkan array yang diurutkan dari terkecil ke terbesar."
    },
    {
      id: 8,
      nama: "Slice",
      level: "sedang",
      soal: "Buat program yang menggabungkan dua slice integer yang diberikan dan menghapus elemen yang duplikat dari slice gabungan tersebut. Cetak hasil akhir dari slice tanpa elemen duplikat."
    },
    {
      id: 9,
      nama: "Map",
      level: "sedang",
      soal: "Buat sebuah program yang menggunakan map untuk menyimpan nama siswa dan nilai mereka. Program ini harus bisa menambahkan siswa baru, menghapus siswa berdasarkan nama, dan mencetak daftar siswa dan nilai mereka."
    },
    {
      id: 10,
      nama: "If Statement",
      level: "sedang",
      soal: "Buat sebuah program untuk menghitung harga tiket konser berdasarkan usia. Jika usia di bawah 5 tahun, tiket gratis. Jika usia antara 5 dan 17 tahun, harga tiket adalah $10. Jika di atas 17 tahun, harga tiket adalah $20."
    },
    {
      id: 11,
      nama: "Switch Statement",
      level: "sedang",
      soal: "Buat program yang meminta pengguna untuk memasukkan sebuah angka dari 1 hingga 12 dan mencetak nama bulan yang sesuai dengan angka tersebut. Jika angka yang dimasukkan di luar rentang, cetak pesan 'Angka tidak valid'."
    },
    {
      id: 12,
      nama: "For Loop",
      level: "sedang",
      soal: "Buat program untuk menghasilkan tabel perkalian dari 1 hingga 10. Cetak tabel dalam format yang rapi."
    },
    {
      id: 13,
      nama: "Break & Continue",
      level: "sedang",
      soal: "Buat program untuk menampilkan angka ganjil dari 1 hingga 20. Namun, jika angka tersebut adalah 13, hentikan loop dan cetak 'Loop dihentikan di angka 13'."
    },
    {
      id: 14,
      nama: "Function & Parameter",
      level: "sedang",
      soal: "Buatlah dua fungsi bernama permutation dan combination yang menerima dua parameter n dan r dan mengembalikan hasil permutasi (P(n, r)) dan kombinasi (C(n, r)). Gunakan rumus matematika berikut:\n\nPermutasi: P(n, r) = n! / (n-r)!\nKombinasi: C(n, r) = n! / (r! * (n-r)!)"
    },
    {
      id: 15,
      nama: "Function Return Value",
      level: "sedang",
      soal: "Buatlah sebuah fungsi findMinMax yang menerima sebuah slice int dan mengembalikan nilai maksimum dan minimum dalam slice tersebut."
    },
    {
      id: 16,
      nama: "Returning Multiple Values",
      level: "sedang",
      soal: "Buatlah sebuah fungsi averageAndMedian yang menerima slice int dan mengembalikan rata-rata dan median dari slice tersebut. Gunakan multiple return values."
    },
    {
      id: 17,
      nama: "Named Return Value",
      level: "sedang",
      soal: "Buatlah sebuah fungsi bernama convertTime yang menerima jumlah jam sebagai input dan mengembalikan hasil konversi dalam menit dan detik menggunakan named return values."
    },
    {
      id: 18,
      nama: "Variadic Function",
      level: "sedang",
      soal: "Buatlah sebuah fungsi variance yang menerima jumlah variabel argumen float64 dan mengembalikan variansi dari angka-angka tersebut."
    },
    {
      id: 19,
      nama: "Function as Value",
      level: "sedang",
      soal: "Buatlah sebuah fungsi filter yang menerima sebuah slice int dan fungsi kondisi sebagai parameter. Fungsi ini harus mengembalikan slice baru yang hanya berisi elemen-elemen yang memenuhi kondisi."
    },
    {
      id: 20,
      nama: "Function as Parameter",
      level: "sedang",
      soal: "Buatlah sebuah fungsi apply yang menerima slice int dan sebuah fungsi matematika (misalnya, kuadrat, akar kuadrat) sebagai parameter, dan mengembalikan slice baru dengan fungsi tersebut diterapkan pada setiap elemen."
    },
    {
      id: 21,
      nama: "Anonymous Function",
      level: "sedang",
      soal: "Buatlah sebuah program yang menggunakan fungsi anonim untuk mencari semua faktor dari suatu angka n yang dimasukkan oleh pengguna."
    },
    {
      id: 22,
      nama: "Recursive Function",
      level: "sedang",
      soal: "Buatlah sebuah fungsi rekursif fibonacciMemo yang menggunakan memoization untuk mengurangi pengulangan dalam perhitungan bilangan Fibonacci."
    },
    {
      id: 23,
      nama: "Closure",
      level: "sedang",
      soal: "Buatlah sebuah closure bernama counterWithLimit yang mengembalikan fungsi untuk menghitung angka dari 1 hingga batas yang ditentukan. Jika batas tercapai, kembalikan ke 1."
    },
    {
      id: 24,
      nama: "Defer",
      level: "sedang",
      soal: "Buatlah sebuah fungsi connectToDatabase yang mensimulasikan pembukaan koneksi ke database dan menggunakan defer untuk menutup koneksi setelah selesai."
    },
    {
      id: 25,
      nama: "Panic & Recover",
      level: "sedang",
      soal: "Buatlah sebuah fungsi calculateArea yang menerima jari-jari r sebagai input dan mengembalikan luas lingkaran. Jika nilai r kurang dari 0, munculkan panic dan tangani dengan recover untuk memberikan pesan kesalahan."
    },
    {
      id: 26,
      nama: "Struct & Struct Method",
      level: "sedang",
      soal: "Buatlah sebuah struct Book yang memiliki field Title, Author, dan Price. Tambahkan metode DiscountedPrice yang menerima diskon sebagai parameter dan mengembalikan harga setelah diskon."
    },
    {
      id: 27,
      nama: "Interface & Empty Interface",
      level: "sedang",
      soal: "Buatlah interface Collection dengan metode Add(item interface{}) dan Get(index int) interface{}. Implementasikan dua struct (List dan Map) yang memenuhi interface ini. List menggunakan slice dan Map menggunakan peta (map). Tulis fungsi printCollection yang menerima parameter Collection dan mencetak semua item."
    },
    {
      id: 28,
      nama: "Nil & Type Assertions",
      level: "sedang",
      soal: "Buatlah sebuah fungsi handleData yang menerima parameter interface{}. Jika data adalah nil, cetak pesan 'Data is nil'. Jika data adalah string, cetak pesan dengan panjang string tersebut. Jika data adalah int, cetak nilai dan kuadratnya."
    },
    {
      id: 29,
      nama: "Pointer, Asterisk Operator, Operator New",
      level: "sedang",
      soal: "Buatlah sebuah struct Rectangle dengan field Width dan Height. Buatlah metode Resize yang menerima pointer ke Rectangle dan mengubah ukurannya. Buat juga metode Area yang mengembalikan luas dari Rectangle."
    },
    {
      id: 30,
      nama: "Pointer di Function",
      level: "sedang",
      soal: "Buatlah sebuah fungsi appendValue yang menerima pointer ke slice int dan menambahkan elemen baru ke dalam slice tersebut. Tulis fungsi main untuk menguji fungsi ini."
    },
    {
      id: 31,
      nama: "Package & Import",
      level: "sedang",
      soal: "Buatlah dua file: `mathutils/mathutils.go` dan `main.go`. Di `mathutils.go`, buat fungsi untuk menghitung kuadrat dari sebuah angka. Di `main.go`, import paket ini dan gunakan fungsi kuadrat untuk mencetak hasil perhitungan."
    },
    {
      id: 32,
      nama: "Access Modifiers",
      level: "sedang",
      soal: "Buatlah sebuah struct Account dengan field privat balance dan metode publik Deposit serta GetBalance. Metode Deposit harus menambahkan jumlah uang ke balance, dan GetBalance harus mengembalikan nilai balance."
    },
    {
      id: 33,
      nama: "Package Initialization",
      level: "sedang",
      soal: "Buat dua file: `config/config.go` dan `main.go`. Di `config.go`, buat fungsi init untuk menginisialisasi konfigurasi. Di `main.go`, gunakan fungsi-fungsi dari paket `config` untuk mengatur dan mencetak nama database."
    },
    {
      id: 34,
      nama: "Error & Custom Error",
      level: "sedang",
      soal: "Buatlah sebuah custom error ErrOutOfBounds yang menyertakan indeks yang keluar dari batas. Buatlah fungsi accessElement yang menerima slice dan indeks, mengembalikan elemen jika indeks valid atau mengembalikan error jika tidak."
    },
    {
      id: 35,
      nama: "Pointer new & Pointers",
      level: "sedang",
      soal: "Buatlah sebuah fungsi updatePerson yang menerima pointer ke struct Person dan memperbarui field Name dan Age. Buatlah juga fungsi createPerson yang menggunakan new untuk membuat pointer ke Person dan mengatur nilai-nilai awalnya."
    }
  ]
