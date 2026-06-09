// resolved

// อยากเอาตัวเลขที่มี index เป็นเลขคู่ ไปบวก 10 
// console.log(number[0] + 10) -> 11 มาจาก 1 + 10
// console.log(number[2] + 10) -> 13 มาจาก 3 + 10
// console.log(number[4] + 10) -> 15 มาจาก 5 + 10
// console.log(number[6] + 10) -> 17 มาจาก 7 + 10

const number = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i=0 ; i<number.length ; i++) {
    if (i%2 === 0) {
        console.log(number[i] +10)
    }
}