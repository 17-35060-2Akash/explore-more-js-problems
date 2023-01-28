const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 21,
    class: 11,
    name: 'Agun'
};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

/* console.log(typeof age);
console.log(typeof isIndependent);
console.log(Array.isArray(friends));

console.log(friends.includes(10)); */

const newFriends = [10, 9, 7];
const newArray = newFriends.concat(friends);
console.log(newArray);