
// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Apply a random color on hover


document.querySelectorAll('.triangle-card')[0].addEventListener('mouseover', function() {
    const randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
});
document.querySelectorAll('.rectangle-card')[0].addEventListener('mouseover', function() {
    const randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
});
