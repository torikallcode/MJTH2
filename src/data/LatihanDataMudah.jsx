// latihanData.js
export const latihanData = [
  {
    id: 1,
    level: "Mudah",
    pertanyaan: "Buat variabel dengan tipe data integer, boolean, dan string. Cetak nilai dari masing-masing variabel tersebut.",
    jawaban: `
package main

import "fmt"

func main() {
    var number int = 10
    var isAvailable bool = true
    var greeting string = "Hello, Go!"

    fmt.Println(number)
    fmt.Println(isAvailable)
    fmt.Println(greeting)
}
    `,
  },
  {
    id: 2,
    level: "Mudah",
    pertanyaan: "Buat sebuah constant bernama PI dengan nilai 3.14. Buat variabel radius dan hitung keliling lingkaran menggunakan nilai dari PI.",
    jawaban: `
package main

import "fmt"

const PI float64 = 3.14

func main() {
    radius := 5.0
    circumference := 2 * PI * radius
    fmt.Println("Keliling lingkaran:", circumference)
}
    `,
  },
  {
    id: 3,
    level: "Mudah",
    pertanyaan: "Ubah nilai string '123' menjadi integer dan tambahkan dengan angka 10. Cetak hasilnya.",
    jawaban: `
package main

import (
    "fmt"
    "strconv"
)

func main() {
    strNumber := "123"
    intNumber, _ := strconv.Atoi(strNumber)
    result := intNumber + 10
    fmt.Println(result)
}
    `,
  },
  {
    id: 4,
    level: "Mudah",
    pertanyaan: "Buat type deklarasi baru bernama Age yang merupakan alias dari int. Buat variabel bertipe Age dan berikan nilai umur kamu.",
    jawaban: `
package main

import "fmt"

type Age int

func main() {
    var myAge Age = 25
    fmt.Println("Umur saya:", myAge)
}
    `,
  },
  {
    id: 5,
    level: "Mudah",
    pertanyaan: "Lakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian dari dua variabel integer a dan b.",
    jawaban: `
package main

import "fmt"

func main() {
    a, b := 10, 5
    fmt.Println("Penjumlahan:", a+b)
    fmt.Println("Pengurangan:", a-b)
    fmt.Println("Perkalian:", a*b)
    fmt.Println("Pembagian:", a/b)
}
    `,
  },
  {
    id: 6,
    level: "Mudah",
    pertanyaan: "Bandingkan dua variabel integer x dan y menggunakan operator perbandingan dan cetak hasilnya.",
    jawaban: `
package main

import "fmt"

func main() {
    x, y := 10, 20
    fmt.Println(x == y)
    fmt.Println(x != y)
    fmt.Println(x < y)
    fmt.Println(x > y)
    fmt.Println(x <= y)
    fmt.Println(x >= y)
}
    `,
  },
  {
    id: 7,
    level: "Mudah",
    pertanyaan: "Buat sebuah array bertipe integer dengan ukuran 5. Masukkan nilai-nilai ke dalam array tersebut dan cetak semua elemen array.",
    jawaban: `
package main

import "fmt"

func main() {
    var numbers [5]int = [5]int{1, 2, 3, 4, 5}
    for i := 0; i < len(numbers); i++ {
        fmt.Println(numbers[i])
    }
}
    `,
  },
  {
    id: 8,
    level: "Mudah",
    pertanyaan: "Buat sebuah slice bertipe string yang menyimpan nama-nama hari dalam seminggu. Tambahkan dua hari libur ke dalam slice dan cetak seluruh elemen di slice.",
    jawaban: `
package main

import "fmt"

func main() {
    days := []string{"Senin", "Selasa", "Rabu", "Kamis", "Jumat"}
    days = append(days, "Sabtu", "Minggu")

    for _, day := range days {
        fmt.Println(day)
    }
}
    `,
  },
  {
    id: 9,
    level: "Mudah",
    pertanyaan: "Buat sebuah map yang berisi nama buah sebagai key dan harga sebagai value. Tambahkan beberapa buah dan cetak harga dari salah satu buah.",
    jawaban: `
package main

import "fmt"

func main() {
    fruits := map[string]int{
        "Apel":  5000,
        "Pisang": 3000,
        "Jeruk":  7000,
    }

    fmt.Println("Harga Apel:", fruits["Apel"])
}
    `,
  },
  {
    id: 10,
    level: "Mudah",
    pertanyaan: "Buat program yang mengecek apakah sebuah variabel score lebih dari 70. Jika iya, cetak 'Lulus', jika tidak, cetak 'Tidak Lulus'.",
    jawaban: `
package main

import "fmt"

func main() {
    score := 75
    if score > 70 {
        fmt.Println("Lulus")
    } else {
        fmt.Println("Tidak Lulus")
    }
}
    `,
  },
  {
    id: 11,
    level: "Mudah",
    pertanyaan: "Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan angka (1 untuk Senin, 2 untuk Selasa, dst.).",
    jawaban: `
package main

import "fmt"

func main() {
    day := 3
    switch day {
    case 1:
        fmt.Println("Senin")
    case 2:
        fmt.Println("Selasa")
    case 3:
        fmt.Println("Rabu")
    case 4:
        fmt.Println("Kamis")
    case 5:
        fmt.Println("Jumat")
    case 6:
        fmt.Println("Sabtu")
    case 7:
        fmt.Println("Minggu")
    default:
        fmt.Println("Hari tidak valid")
    }
}
    `,
  },
  {
    id: 12,
    level: "Mudah",
    pertanyaan: "Buat program yang mencetak angka dari 1 hingga 10 menggunakan for loop.",
    jawaban: `
package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        fmt.Println(i)
    }
}
    `,
  },
  {
    id: 13,
    level: "Mudah",
    pertanyaan: "Buat program yang menggunakan for loop untuk mencetak angka dari 1 hingga 10, tetapi lewati angka 5 menggunakan continue dan hentikan loop jika angka mencapai 8 menggunakan break.",
    jawaban: `
package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        if i == 5 {
            continue
        }
        if i == 8 {
            break
        }
        fmt.Println(i)
    }
}
    `,
  },
];
