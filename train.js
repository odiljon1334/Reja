 // G-TASK
 // Define
 function getHighestIndex(arr) {
    let index = 0;

    for(let i = 0; i < arr.length; i++){
        // agar arraymizni  [i]nchi indexi katta bo'lsa arrayimizni indexdan
        // u katta emas for loop ishga tushadi.
        // endi arrayimizni [i]nchi indexi 1ga teng u katta emas.
        // for loop ishga tushmedi.  
        if(arr[i] > arr[index]) {
            // yuqorida xosil qilib olgan o'zgaruvchimizni qiymati 0 ga tenglab olgandik
            // endi [i]ning qiymati 1 ga teng indeximizni qiymatini i ga tenglab olib uni return qilib olamiz.
            index = i;
        }
    }
    return index;
 }
 // Call
 const result = getHighestIndex([5, 21, 12, 21, 8]);
 console.log('G-TASK:', result);

// F-TASK
// function findDoublers(str) {
//     return new Set(str).size !== str.length;
// }
// // Call
// const result = findDoublers('hello');
// console.log('F-TASK:', result);

// // E-TASK
// const moment = require("moment");

// // E-TASK: 
// function getReverse(isString) {
//     let str = isString.split("").reverse().join('');
//     return str;
// }
// const result = getReverse("hello");
// console.log('E-TASK:', result);

// D-TASK
// class Shop {
//     constructor(non, lagmon, cola) {
//         this.mahsulot = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola
//         }
//     }
//     // Time method
//     tellMeTime() {
//        return moment().format("HH:mm");
//     }
//     // qoldiqlarni ko'rish methodi
//     qoldiq() {
//         console.log(`Hozir ${this.tellMeTime()} da ${this.mahsulot.non}ta non, ${this.mahsulot.lagmon}ta lagmon, ${this.mahsulot.cola}ta cola mavjud!`);
//     }
//     // sotish methodi
//     sotish(product, amount) {
//         if(this.mahsulot[product] >= amount){
//             this.mahsulot[product] -= amount;
//             console.log(`${this.tellMeTime()}da ${amount}ta ${product} sotildi!`);
//         } else {
//             console.log(`Kechirasiz ${product}imiz hozir sotuvda mavjud emas!`);
//         }
//     }
//     // Mahsulot qo'shish methodi
//     qoshish(product, amount) {
//         this.mahsulot[product] += amount;
//         console.log(`${this.tellMeTime()} da, ${amount}ta ${product} qo'shildi!`);
//     }
// }
// // Call 
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish('non', 2);
// shop.sotish('non', 2);
// shop.sotish('non', 2);
// shop.qoshish('non', 2);
// shop.qoldiq();

// C-TASK
//Define
// function checkContent(a, b){
    
//     return a.split('').sort().join('') === b.split('').sort().join('');
// }
// // Call
// const result = checkContent('mitgroup', 'gmtiprou');
// console.log('result:', result);

// B-TASK
//Define
// function countDigit(setNumber) {
//     let count = 0;
//     let getNumber = setNumber.split('')
//     .filter(ele => !isNaN(ele) && ele !== ' ');
//     count = getNumber.length;
//     return count;
// }
// // Call
// const result = countDigit("ad2a54y79wet0sfgb9");
// console.log('result:', result);

// A-TASK
// Define
// function countLetter(letter, setLetter) {
//     let count = 0;

//     for(let i = 0; i < setLetter.length; i++) {
//         if(setLetter[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// // Call
// const result = countLetter('e', 'engineer');
// console.log('result:', result);


// ==================================//

// console.log('Jack Ma maslahatlari');
// const list = [
//     "Yahshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
//     "O'zingizga ishlashni boshlang!", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
//     "Yoshlarga investitsya qiling!", // 50-60
//     "Endi dam oling foydasi yo'q endi...", // 60
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("Insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }
// console.log('Passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('Javob:', data);
// });
// console.log('Passed here 1');

// Async function

// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("Insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 5000); 
//         });
//     }
// }

// call via then/catch
// console.log('Passed here 0');
// maslahatBering(20).then(data => {
//     console.log('Javob:', data);
// }).catch(err => {
//     console.log('ERROR:', err)
// });
// console.log('Passed here 1');

//call async / await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log('Javob:', javob);
//     javob = await maslahatBering(31);
//     console.log("Javob:", javob);
// }
// run();