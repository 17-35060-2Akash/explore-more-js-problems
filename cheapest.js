const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Motorolla', camera: 21, storage: '16gb', price: 56000, color: 'Pink' },
    { name: 'Iphone', camera: 42, storage: '56gb', price: 22000, color: 'Mat' },
    { name: 'OnePlus', camera: 13, storage: '32gb', price: 85000, color: 'Yellow' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    let counter = 0;
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phones[i].price < cheapest.price) {
            cheapest = phones[i].price;
            counter = i;
        }


    }
    let arr = [cheapest, counter];
    return arr;




}

const arr = cheapestPhone(phones);
const index = arr[1];
// console.log(index);
console.log('Your Selection is: ', phones[index].name);
console.log('Price: ', phones[index].price);