// resolved
const customer = {
    name: "John",
    email: "john@example.com",
    cart: {
        laptop: 25000,
        mouse: 500,
        keyboard: 1200
    },
    coupon: {
        code: "SAVE10",
        discount: 1000
    }
};

// อยากรู้ว่าต้องจ่ายกี่บาท โดยแสดงข้อความดังนี้
// ยอดรวมสินค้าเท่ากับ ... บาท ได้ส่วนลด ... บาท ดังนั้นต้องชำระ ... บาท

const cartTotal = (customer.cart.laptop + customer.cart.mouse + customer.cart.keyboard);
const discount = customer.coupon.discount;
const total = cartTotal-discount;
console.log(`ยอดรวมสินค้าเท่ากับ ${cartTotal} บาท ได้ส่วนลด ${discount} บาท ดังนั้นต้องชำระ ${total} บาท`)
