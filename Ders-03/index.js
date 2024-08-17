
let sayi1 = '40';
let sayi2 = 20;



// console.log(sayi1 + sayi2); 


let sayi3 = 256;
let sayi4 = 651;
let sayi5 = '256';

// console.log(sayi3 !== sayi5);


let a = true;
let b = false;


let c = true;
let d = false;

// console.log(!a);

//i f (sayi3 > sayi5) {
//     console.log(sayi3 + ' değeri ' + sayi5 + ' değerinden buyük');
// } else if (sayi3 === sayi5) {
//     console.log(sayi3 + ' değeri ' + sayi5 + ' değerinden esit');
// } else if (sayi3 == sayi5 && sayi3 !== sayi5) {
//     console.log(sayi3 + ' değerinin tipi ' + sayi5 + ' değerinin tipinden farkli');
// } else {
//     console.log(sayi3 + ' değeri ' + sayi5 + ' değerinden kucuk');
// }


let meyve = 'elma'
// switch (meyve) {
//     case 'elma':
//         console.log('elma');
//         break;
//     case 'armut':
//         console.log('armut');
//         break;
//     default:
//         console.log('yok');
//         break;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);

// }

// let while1 = 0;
// while (while1 < 5) {
//     console.log(while1);

//     while1++;
// }


//Let Değişkeni
let x = 10;
// if (true) {
//     let x = 20; // Farklı bir blokta tanımlı olduğu için farklı bir değişken
// }
// console.log(x); // 10

// x = 60;

// console.log(x);


//! İsmini Bul If else Yapısı
// console.log('Mehaba' + x + 'Yeni');
// console.log(`Merhaba ${x > 10 ? 'Acik' : 'Kapalı'} Yeni`);

// if( x > 10) {
//     console.log('Acik');
// } else {
//     console.log('Kapalı');
// }

 
//Const Değişkeni

const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error


// You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");
// console.log(cars);

// const obj = { name: 'Alice', age: 30 };

// obj.name = 'Bob';
// obj.lastname = 'Doe';
// console.table(obj)
// console.log(obj)


// function toplamaFunc(a, b) {
//     return a + b
// }

// const toplamaArrow = (a, b) => a + b 

// console.log(toplamaFunc(10, 20));
// console.log(toplamaArrow(10, 20));


// const isim = 'Adem';

// const selamla1 = 'Merhaba ' + isim;
// const selamla2 = `Merhaba ${isim}, ${sayi2} değerini seçti.`;
// console.log(selamla1);
// console.log(selamla2);

const cars = ["Toyota", "Volvo", "BMW"];
const obj = { name: 'Alice', age: 30 };

const [car1, car2, araba3 = 'araba3', araba4 = 'araba4'] = cars
// console.log(car1);
// console.log(cars[0]);
// console.log(car2);
// console.log(araba3);
// console.log(araba4);

// const toplama = (a, b = 1) => a + b
// const cikarma = (a, b = 0) => a - b
// const carpma = (a, b = 1) => a * b
// const bolme = (a, b = 1) => a / b
// console.log(toplama(10));
// export const islemler = [toplama, cikarma, carpma, bolme]

// const { name: isim, age = 10, lastname = 'Doe' } = obj

// console.log(...cars);

const obj2 = { ...obj, lastname: 'Bob' }
// console.log(obj2);


// const acikuniversite = document.getElementById('acikuniversite');
// const kutular = document.getElementsByClassName('kutu');

// const kutu = document.querySelector('.kutu')
// const kutular2 = document.querySelectorAll('.kutu')


// acikuniversite.style.backgroundColor = 'sienna';
// acikuniversite.textContent = "test deneme";

// console.log(acikuniversite);
// console.log(kutular);

// acikuniversite.addEventListener('pointerup', () => {
//     console.log('kutu tıklandı');
// })

// acikuniversite.addEventListener('click', () => {
//     console.log('kutu tıklandı');
// })

// acikuniversite.addEventListener('mousedown', (e) => {

//     console.log('tıklama başladı');

// })
// acikuniversite.addEventListener('mouseup', (e) => {

//     console.log('tıklama bitti');

// })