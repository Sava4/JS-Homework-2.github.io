// Циклы нужны для выполнения повторяющихся частей кода. Компьютеры хорошо считают повторяющиеся задачи.
// Многие задачи можно разложить на однотипные и выполнять много раз для достижения нужного результата.

let number = Number(prompt('Please enter number'));

while (number < 0 || !Number.isInteger(parseInt(number))) {
    console.count('User tries');
    number = Number(prompt('Try again. Please and enter number', `${number}`));
}

if (number < 5) {
    console.log('Sorry, no numbers');
} else { 
    for (let i = 5; i <= number; i+= 5) {
        if ((i % 5) === 0) {
            console.log(i);
        }
    }  
}

let numM = Number(prompt('Please enter number M'));
let numN = Number(prompt('Please enter number N'));

while (numM < 1 || !Number.isInteger(numM) && numN < 1 || !Number.isInteger(numN) ) {
    console.count('User tries');
    numM = Number(prompt('Try again. Please and enter number', `${numM}`));
    numN = Number(prompt('Try again. Please and enter number', `${numN}`));
}

const bigger = Math.max(numM, numN);
const smaller = Math.min(numM, numN);
let nonPrime = [1];

for (let i = smaller; i <= bigger; i++) {
    for (let n = 2; n <= Math.sqrt(i); n++) {
        if ((i % n) === 0) {
            nonPrime.push(i);
            break;
        }
    }
}

for (let i = smaller; i <= bigger; i++) {
    if (!nonPrime.includes(i)) {
        console.log(`Prime number: ${i}`);
    }
}
