// resolved
const customers = [
    {
        name: "John",
        email: "john@example.com",
        cart: {
            laptop: 25000,
            mouse: 500,
            keyboard: 1200
        },
        coupons: [
            {
                code: "SAVE10",
                discount: 1000
            },
            {
                code: "NEWUSER",
                discount: 500
            }
        ]
    },
    {
        name: "James",
        email: "james@example.com",
        cart: {
            monitor: 8000,
            mouse: 500
        },
        coupons: [
            {
                code: "SALE20",
                discount: 2000
            }
        ]
    },
    {
        name: "Jane",
        email: "jane@example.com",
        cart: {
            ipad: 15000,
            airpods: 4500,
            charger: 800
        },
        coupons: [
            {
                code: "FREESHIP",
                discount: 100
            },
            {
                code: "VIP",
                discount: 1500
            },
            {
                code: "SUMMER",
                discount: 700
            }
        ]
    }
];
//อยากเห็นข้อความ "เจนซื้อของทั้งหมดเป็นเงิน 20300 บาท ได้ส่วนลด 1500 บาท ต้องชำระทั้งหมด 18800 บาท"
console.log(customers.length) // 3

const janeCartTotal = customers[2].cart.airpods + customers[2].cart.charger + customers[2].cart.ipad;
const janeDiscount = customers[2].coupons[1].discount;
const janeTotal = janeCartTotal - janeDiscount;

console.log(`เจนซื้อของทั้งหมดเป็นเงิน ${janeCartTotal} บาท ได้ส่วนลด ${janeDiscount} บาท ต้องชำระทั้งหมด ${janeTotal} บาท`)