document.getElementById('task1Button').addEventListener('click', function () {
    let userName = prompt('Please enter your name:');
    if (userName) {
        alert(`Hello, ${userName}! How are you?`);
    }
});

document.getElementById('task3tForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let resultImage = document.getElementById('resultImage');
    if (document.getElementById('number1').value !== document.getElementById('number2').value) 
        resultImage.style.objectPosition = "0px center"; 
    else 
        resultImage.style.objectPosition = "-196px center"; 
    
    resultImage.style.display = "block"; 
});


document.getElementById('task4Form').addEventListener('submit', function(e) {
    e.preventDefault();

    let n1 = parseFloat(document.getElementById('task4number1').value);
    let n2 = parseFloat(document.getElementById('task4number2').value);
    let n3 = parseFloat(document.getElementById('task4number3').value);

    document.getElementById('average').value = (n1 + n2 + n3) / 3;
});


document.getElementById('task5Form').addEventListener('submit', function(e) {
    e.preventDefault();

    let number = parseInt(document.getElementById('task5number').value);
    let digits = [];

    for(let i = 0; i < 5; i++) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    document.getElementById('result5').textContent = digits.reverse().join(" ");
});

document.getElementById('addButton').addEventListener('click', function(e) {
    e.preventDefault();
    calculate('add');
});

document.getElementById('subtractButton').addEventListener('click', function(e) {
    e.preventDefault();
    calculate('subtract');
});

document.getElementById('multiplyButton').addEventListener('click', function(e) {
    e.preventDefault();
    calculate('multiply');
});

document.getElementById('divideButton').addEventListener('click', function(e) {
    e.preventDefault();
    calculate('divide');
});

function calculate(operation) {
    let n1 = parseFloat(document.getElementById('task2number1').value);
    let n2 = parseFloat(document.getElementById('task2number2').value);
    let result;
    switch(operation) {
        case 'add':
            result = n1 + n2;
            break;
        case 'subtract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            if(n2 !== 0) {
                result = n1 / n2;
            } else {
                result = 'Error: Division by zero is undefined';
            }
            break;
    }
    document.getElementById('task2result').textContent = result;
}

