let lastNumber = 'unmodified'; 
// let lastName = 'unmodified';

// Циклы нужны для выполнения повторяющихся частей кода. Компьютеры хорошо считают повторяющиеся задачи.
// Многие задачи можно разложить на однотипные и выполнять много раз для достижения нужного результата.

let number = prompt('Please enter number');

while (number < 0 || !Number.isInteger(parseInt(number))) {
    lastNumber = number;
    console.count('User tries');
    number = prompt('Try again. Please and enter number', `${lastNumber}`);
}

if (number < 5) {
    console.log('Sorry, no numbers');
} else { 
    for (let i = 0; i <= number; i++) {
        if ((i % 5) === 0) {
            console.log(i);
        }
    }  
}


// let name = prompt('Please enter your name');

// while (name === null || name === '' || name === ' ' || !isNaN(name)) {
//     lastName = name;
//     name = prompt('Please enter your name', `${lastName}`);
// }

// if (age < 18) {
//     alert('You are not allowed to visit this website.');
//     document.getElementById("app").innerHTML = '<h1>You are not allowed to visit this website.</h1>'
// } else if (age <= 22) {
//     let decision = confirm('Are you sure you want to continue?');
//     decision ? alert(`Welcome, ${name}`) : alert('You are not allowed to visit this website.');
// } else if (age > 22) {
//     alert(`Welcome, ${name}`);
//     document.getElementById("app").innerHTML = `<h1>Welcome, ${name}</h1>`

// }