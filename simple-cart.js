const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'velt', price: 600, quantity: 3 },
];

function sumOfCart(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = total + products[i].price * products[i].quantity;
    }
    return total;
}

const total = sumOfCart(shoppingCart);
console.log(total);