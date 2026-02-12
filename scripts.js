const form = document.getElementById('form-sorteio');
const contentDraw = document.querySelector('.content-draw');
const contentResult = document.querySelector('.content-result');
const resultValues = document.getElementById('result-values');
const btnReiniciar = document.getElementById('btn-reset');

const inputNumbers = document.getElementById('numbers');
const inputFrom = document.getElementById('from');
const inputTo = document.getElementById('to');
const toggleRepeat = document.getElementById('no-repeat');

form.onsubmit = (event) => {
    event.preventDefault(); 

    const amount = parseInt(inputNumbers.value);
    const min = parseInt(inputFrom.value);
    const max = parseInt(inputTo.value);
    const noRepeat = toggleRepeat.checked;

    if (min >= max) {
        alert('O valor "De" deve ser menor que o valor "Até".');
        return;
    }

    if (noRepeat && amount > (max - min + 1)) {
        alert('Não é possível sortear essa quantidade de números únicos neste intervalo.');
        return;
    }

    const results = drawNumbers(amount, min, max, noRepeat);
    
    displayResults(results);
    
    contentDraw.classList.add('hide');
    contentResult.classList.remove('hide');
};

function drawNumbers(amount, min, max, unique) {
    let numbers = [];
    
    let attempts = 0;
    const maxAttempts = 10000; 

    while (numbers.length < amount && attempts < maxAttempts) {
        attempts++;
        
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (unique) {
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        } else {
            numbers.push(randomNumber);
        }
    }

    return numbers.sort((a, b) => a - b); 
}

function displayResults(numbers) {
    resultValues.innerHTML = '';

    numbers.forEach((number, index) => {
        const numElement = document.createElement('div');
        numElement.classList.add('result-number');
        numElement.innerText = number;
        
        numElement.style.animationDelay = `${index * 0.1}s`;

        resultValues.appendChild(numElement);
    });
}

btnReiniciar.onclick = () => {
    contentResult.classList.add('hide');
    contentDraw.classList.remove('hide');
};