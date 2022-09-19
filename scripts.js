const jumbo = document.querySelector('.jumbo')
const container = document.querySelector('.container')
const thumb = document.querySelectorAll('.thumb')

// cara pertama
// for (let i = 0; i < thumb.length; i++) {
//    thumb[i].addEventListener('click', function () {
//       jumbo.src = thumb[i].src
//          jumbo.classList.add('fade')

//          // mengatur animasi kedip di gambar yang besar
//          setTimeout(() => {
//             jumbo.classList.remove('fade')
//          }, 500)
//       // agar gambar yang sudah diklik, ketika mengklik gambar yang baru, efek transparan pada gambar sebelumnya hilang
//          baru
//       for (let index = 0; index < thumb.length; index++) {
//          thumb[index].className = 'thumb'
//       }
//       // agar gambar yang sudah di klik tetap ada efek transparan
//       thumb[i].classList.add('active')

//    })
// }

// cara kedua make perulangan foreach
// thumb.forEach((f) => {
//    f.addEventListener('click', () => {
//       jumbo.src = f.src
//       jumbo.classList.add('fade')

//       // animasi kedip di gambar yang besar
//       setTimeout(() => {
//          jumbo.classList.remove('fade')
//       }, 500)

//       // agar gambar yang sudah diklik ketika mengklik gambar yang baru, animasi di gambar sebelumnya hilang
//       thumb.forEach((i) => {
//          i.className = 'thumb'
//       })
//       // agar gambar yang sudah di klik ada efek transparan
//       f.classList.add('active')

//    })
// })

// // cara ketiga yang lebih disarankan
container.addEventListener('click', (e) => {
   if (e.target.className == 'thumb') {
      jumbo.src = e.target.src
      jumbo.classList.add('fade')

         // animasi kedip di gambar yang besar
         setTimeout(() => {
            jumbo.classList.remove('fade')
         }, 500);

         // agar gambar sebelumnya yang sudah diklik, ketika kita mengklik gambar yang baru, efek transparan pada gambar sebelumnya hilang
         thumb.forEach((thumbs) => {
            thumbs.className = 'thumb'
         })
      // agar gambar yang diklik ada efek transparannya
     e.target.classList.add('active')

   }
})
