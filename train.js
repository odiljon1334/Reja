const { count } = require("mongodb/lib/operations/cursor_ops");

console.log('Jack Ma maslahatlari');
const list = [
    "Yahshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling!", // 20-30
    "O'zingizga ishlashni boshlang!", // 30-40
    "Siz kuchli bo'lgan narsalarni qiling!", // 40-50
    "Yoshlarga investitsya qiling!", // 50-60
    "Endi dam oling foydasi yo'q endi...", // 60
];

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

async function maslahatBering(a) {
    if(typeof a !== 'number') throw new Error("Insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                resolve(list[5]);
            }, 5000); 
        });
    }
}

// call via then/catch
// console.log('Passed here 0');
// maslahatBering(20).then(data => {
//     console.log('Javob:', data);
// }).catch(err => {
//     console.log('ERROR:', err)
// });
// console.log('Passed here 1');

//call async / await
async function run() {
    let javob = await maslahatBering(65);
    console.log('Javob:', javob);
    javob = await maslahatBering(31);
    console.log("Javob:", javob);
}
run();

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


// C-TASK
//Define
function checkContent(a, b){
    
    return a.split('').sort().join('') === b.split('').sort().join('');
}
// Call
const result = checkContent('mitgroup', 'gmtiprou');
console.log('result:', result);