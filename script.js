const container = document.getElementById('container');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberOfLetters = 100;

function createLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.textContent = letters[Math.floor(Math.random() * letters.length)];
    
    letter.style.left = Math.random() * 100 + 'vw'; // Random position from left
    letter.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random falling speed
    letter.style.fontSize = Math.random() * 20 + 10 + 'px'; // Random font size

    container.appendChild(letter);

    // Remove the letter after it falls
    letter.addEventListener('animationend', () => {
        letter.remove();
    });
}

// Create letters at intervals
setInterval(createLetter, 300);