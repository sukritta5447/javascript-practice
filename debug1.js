/*
ร้านค้าออนไลน์ต้องการคำนวณยอดเงินที่ลูกค้าต้องชำระ
โดยแสดงข้อความ ต้องชำระเงินทั้งหมด 70900 บาท
*/

const cart = [
    {
        name: "iPad Air",
        price: 25000,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 900,
        quantity: 1
    },
    {
        name: "Apple Pencil",
        price: 4000,
        quantity: 5
    }
];

function cartTotal(array) {
    let total = 0;
    for (let i=0 ; i < array.length ; i++){
        total += array[i].price * array[i].quantity
    }
    return total
}

console.log(`ต้องชำระเงินทั้งหมด ${cartTotal(cart)} บาท`)