/* 
ร้านค้าออนไลน์ต้องการคำนวณยอดเงินที่ลูกค้าต้องชำระ
โดยอยากเห็นผลลัพธ์ดังนี้ 

PlayStation ราคา 18000 บาท จำนวน 1 ชิ้น รวม 18000 บาท
DualSense Controller ราคา 2500 บาท จำนวน 2 ชิ้น รวม 5000 บาท
EA FC 26 ราคา 2200 บาท จำนวน 3 ชิ้น รวม 6600 บาท
ต้องชำระเงินทั้งหมด 29600 บาท

ปัญหาคือเมื่อโปรแกรมทำงานเกิด bug ขอให้แก้ bug ให้เรียบร้อย
*/

const cart = [
    {
        name: "PlayStation",
        price: 18000,
        quantity: 1
    },
    {
        name: "DualSense Controller",
        price: 2500,
        quantity: 2
    },
    {
        name: "EA FC 26",
        price: 2200,
        quantity: 3
    }
];

let totalPrice;

for (const item of cart) {
    const itemTotal = item[price] + item[quantity];

    console.log(
        `${item[name]} ราคา ${item[price]} บาท จำนวน ${item[quanty]} ชิ้น รวม {itemTotal} บาท`
    );

    totalPrice += itemTotal;
}

console.log(`ต้องชำระเงินทั้งหมด ${totalPrice} บาท`);