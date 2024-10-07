// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 2000 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let lowQuantity = inventory[0].quantity;
let nameItem;

for (const index in inventory) {
  if (inventory[index].quantity <= lowQuantity) {
    lowQuantity = inventory[index].quantity;
    nameItem = inventory[index].name;
  }
}

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameItem} ซึ่งมี ${lowQuantity} ชิ้น`
);
