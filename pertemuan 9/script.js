// ini untuk ngambil id
var a = document.getElementById('container')
var b = document.getElementById('button')

// ini untuk create element
var c = document.createElement('p')

c.innerText = 'ini adalah paragraf baru'

// ini event listener yang diberi function
b.addEventListener('click', function(){
    a.getElementsByTagName('h1')[0].innerText = 'Selamat Pagi'
    a.appendChild(c)
})

// prompt

// var nama = prompt("Masukkan nama anda:")

// if(nama !== null && nama !== ''){
//     alert("Halo "+ nama +"! Selamat datang di situs kami")
// }else{
//     alert("Anda belum memasukkan nama")
// }


