/*ข้อที่ 3: รวมน้ำหนักรวมของกระเป๋าเดินทาง (ระดับ: ปานกลาง)
โจทย์: ให้เขียนฟังก์ชันชื่อ getTotalWeight รับพารามิเตอร์เป็นอาร์เรย์ของไอเทมในกระเป๋า (items) จากนั้นให้คำนวณหาผลรวมน้ำหนัก (weight) ทั้งหมด แล้วส่งกลับออกมาเป็นตัวเลขตัวเดียว

คำใบ้ 🕵️: ใช้ .reduce() โดยกำหนดค่าสะสมเริ่มต้นเป็น 0 แล้วดึงค่าน้ำหนักมาบวกทบเข้าไป

ข้อมูลทดสอบ:*/

const items = [
  { name: "Clothes", weight: 4.5 },
  { name: "Laptop", weight: 1.8 },
  { name: "Shoes", weight: 1.2 }
];

function getTotalWeight(item, weight){
    const weights = item.map((object) => object.weight);
    const totalWeight = weights.reduce((total, currWeight) =>
        total + currWeight,0);
    return totalWeight
}

console.log(getTotalWeight(items))

//ผลลัพธ์ที่ควรได้: 7.5