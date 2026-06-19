/*ข้อที่ 2: คัดกรองสินค้าที่พร้อมส่ง (ระดับ: ปานกลาง - เริ่มต้น)
โจทย์: ให้เขียนฟังก์ชันชื่อ getInStockProducts รับพารามิเตอร์เป็นอาร์เรย์ของสินค้า (products) จากนั้นให้คัดเลือกเอาเฉพาะสินค้าที่มีสถานะ inStock: true แล้วส่งค่ากลับออกมาเป็นอาร์เรย์ก้อนใหม่

คำใบ้ 🕵️: ใช้ .filter() เพื่อตรวจสอบเงื่อนไขความจริง

ข้อมูลทดสอบ:*/

const products = [
  { title: "Mouse", inStock: true },
  { title: "Keyboard", inStock: false },
  { title: "Monitor", inStock: true }
];

function getInStockProducts (product){
    return product
    .filter((item) => item.inStock)
}

console.log(getInStockProducts(products))

//ผลลัพธ์ที่ควรได้: [ { title: 'Mouse', inStock: true }, { title: 'Monitor', inStock: true } ]