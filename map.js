const numbers = [2, 5, 7, 9, 11];
const agian = [];

function doubleOld(number) {
    return number * 2;
}

const doubleIt = number => number * 4;

for(const number of numbers) {
    const result = doubleIt(number);
    agian.push(result);
};

console.log(...agian);