
const numbers = [23, 45, 67, 55, 44];
console.log(numbers);
console.log(...numbers);

const max = Math.max(44, 55, 77);
const maxInNumbers = Math.max(...numbers);
console.log(max, maxInNumbers);

const numbers2 = [...numbers, 88, 102];
numbers.push(33);
console.log(numbers);
console.log(numbers2);