const rollNo = [12, 14, 16, 18, 20, 12, 22, 12, 18, 12, 14, 32, 36, 50, 18];

function removeDublicate(rollNumbers) {
    const unique = [];
    for (let i = 0; i < rollNumbers.length; i++) {
        const roll = rollNumbers[i];
        // console.log(roll);
        if (unique.includes(roll) === false) {
            unique.push(roll);
        }
    }
    return unique;
}

const nonDuplicate = removeDublicate(rollNo);
console.log(nonDuplicate);