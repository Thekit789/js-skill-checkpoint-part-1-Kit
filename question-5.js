// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
console.log(calculateTotalPrice(products, promotionCode));

function calculateTotalPrice(products, promotionCode) {
  let sumProducts = 0;
  for (let i = 0; i < products.length; i++) {
    sumProducts = sumProducts + products[i].price * products[i].quantity;
  }
  if (promotionCode === "") {
    return (sumProducts * (100 - 0)) / 100;
  } else if (promotionCode === "SALE20") {
    return (sumProducts * (100 - 20)) / 100;
  } else if (promotionCode === "SALE50") {
    return (sumProducts * (100 - 50)) / 100;
  }
}
