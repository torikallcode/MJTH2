import { FillContent } from '../FillContent';
export const Index = () => {

  const code1 = [
    {
      id: 1,
      name: "Struktur dasar untuk menulis unit test",
      ls: [
        { id: 1, pn: "File unit test harus diakhiri dengan akiran'_test.go'" },
        { id: 2, pn: "Nama Function diawali dengan nama 'Test'" },
        { id: 3, pn: "Harus memiliki parameter berupa '(t *testing.T)' dan tidak memiliki return value(karena tidak akan mengembalikan nilai)" },
      ]
    },
    {
      id: 2,
      name: "Buat go.mod dengan cara menambahkan URL repository github",
      img: "/img/Screenshot (602).png",
    },
    {
      id: 3,
      name: "Tambahkan Module",
      desc: "dengan cara go get (URL module)",
      img: "/img/Screenshot (603).png",
    },
    {
      id: 4,
      name: "Menggunakan Module",
      desc: "buat file main.go lalu import module dan panggil di funcion main tersebut, kemudian run untuk test module tersebut",
      img: "/img/Screenshot (604).png",
    },
  ]

  return (
    <div className='flex flex-col pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7'>
      <div className='w-full'>
        <FillContent
          classname={'xl:max-w-4xl'}
          judul={'Apa itu Unit Testing?'}
          pengertian={'Unit testing adalah pengujian terhadap komponen kecil dari aplikasi, seperti fungsi atau metode secara terisolasi. Tujuannya adalah untuk memastikan bahwa setiap unit berfungsi dengan benar.'}
        >
          {code1.map((item) => (
            <div key={item.id} className='flex flex-col mb-3 gap-y-3 '>
              <div>
                <ul className='flex flex-row font-medium list-inside font-poppins'>
                  <li className='flex flex-col gap-x-3'>
                    {item.id}.
                    <span className='bg-[#efeffd] rounded-lg px-2 py-1 text-[#6366f1]'>{item.name} </span>
                    {item.ls &&
                      item.ls.map((ls) => (
                        <ul className='flex flex-row font-medium list-inside font-poppins'>
                          <li className='flex gap-x-3 gap-y-3 ' key={ls.id}>
                            {ls.pn}
                          </li>
                        </ul>
                      ))}
                  </li>

                </ul>
                <p className='text-base font-poppins'>{item.desc}</p>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </FillContent>
      </div>
    </div >
  );
};
