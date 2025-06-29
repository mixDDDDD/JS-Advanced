const arr = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" }
];

const uniqueId = new Set(arr.map(item => item.id));

const uniqueArr = [...uniqueId].map(id => arr.find(item => item.id === id));

console.log(uniqueArr);