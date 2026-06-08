// ถ้าซื้อสินค้าในหมวด it จะได้แต้ม 20% จากราคา 
// ถ้าซื้อสินค้าในหมวดเสื้อผ้าจะได้แต้ม 15% จากราคา 
// ถ้าซื้อสินค้าในหมวดของกินของใช้ จะได้แต้ม 10% ของราคา 

// มี testcase ดังนี้ 
// ไอติมซื้อ ipad ราคา 20000 บาท
// หนูพุกซื้อมาม่า ราคา 300 บาท
// ส้มจี๊ดซื้อกางเกงยีนส์ราคา 3000 บาท

// ผลลัพธ์
// ไอติม ได้รับแต้ม 4000 แต้ม
// หนูพุก ได้รับแต้ม 30 แต้ม
// ส้มจี๊ด ได้รับแต้ม 450 แต้ม

let shoppingList = [
    {
    name: "ipad",
    productType: "IT",
    price: 20000
    },
    {
    name: "มาม่า",
    productType: "ของกินของใช้",
    price: 300
    },
    {
    name: "กางเกงยีนส์",
    productType: "เสื้อผ้า",
    price: 3000
    }
]

function calculatePoint(product) {
    let point = 0;
    if (product.productType === "IT"){
        point = product.price * 0.20;
    } else if (product.productType === "ของกินของใช้"){
        point = product.price * 0.10;
    } else if (product.productType === "เสื้อผ้า"){
        point = product.price * 0.15;
    } else {
        point = 0;
    }
    return point;
}

let itimPoint = calculatePoint(shoppingList[0]);
let nuupukPoint = calculatePoint(shoppingList[1]);
let somjeedPoint = calculatePoint(shoppingList[2]);


console.log(`ไอติม ได้รับแต้ม ${itimPoint} แต้ม`)
console.log(`ส้มจี้ด ได้รับแต้ม ${nuupukPoint} แต้ม`)
console.log(`หนูพุก ได้รับแต้ม ${somjeedPoint} แต้ม`)