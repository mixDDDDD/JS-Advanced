function rollDice(dieType) {
    if (typeof dieType !== 'string' || !dieType.toUpperCase().startsWith('D')) {
        return null;
    }
    const sides = parseInt(dieType.slice(1));
    
    const validDice = [4, 6, 8, 10, 12, 16, 20];
    if (!validDice.includes(sides) || isNaN(sides)) {
        return null;
    }
    return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDice('D4'));
console.log(rollDice('D20'));
console.log(rollDice('D12'));
console.log(rollDice('D3'));
console.log(rollDice('12321'));
console.log(rollDice('dsadas'));
console.log(rollDice(null));