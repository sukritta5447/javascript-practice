/*ข้อที่ 1: ดึงเฉพาะชื่อผลไม้ (ระดับ: ง่าย)
โจทย์: ให้เขียนฟังก์ชันชื่อ getFruitNames รับพารามิเตอร์เป็นอาร์เรย์ของวัตถุผลไม้ (fruits) จากนั้นส่งค่ากลับ (Return) เป็นอาร์เรย์ที่บรรจุเฉพาะชื่อของผลไม้ทั้งหมด

คำใบ้ 🕵️: ใช้ .map() เพื่อเลือกเอาเฉพาะ Key ที่ต้องการ

ข้อมูลทดสอบ:*/

const fruits = [
  { name: "Apple", price: 35 },
  { name: "Banana", price: 20 },
  { name: "Orange", price: 25 }
];

function getFruitNames (name){
    return name
    .map((names) => names.name);
}

console.log(getFruitNames(fruits))
//ผลลัพธ์ที่ควรได้: [ 'Apple', 'Banana', 'Orange' ]