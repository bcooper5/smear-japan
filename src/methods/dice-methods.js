// src/methods/text-methods.js
export function rollSum(diceQuantity, log=false) {
    let rolls = [];
    let sum = 0;

    while (rolls.length < diceQuantity) {
        let thisRoll = Math.floor( Math.random() * 6 ) + 1;
        rolls += thisRoll;
        sum += thisRoll;
    }

    if (log==true) {
        console.log(`Rolled Dice: ${rolls}`);
    }

    return sum;
}