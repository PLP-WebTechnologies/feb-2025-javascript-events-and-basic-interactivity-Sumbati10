// Button click changes text and color
document.getElementById('myButton').addEventListener('click', function() {
    this.textContent = 'Clicked!';
    this.style.backgroundColor = 'green';
});

// Hover effect for the button
document.getElementById('myButton').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById('myButton').addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'lightblue';
});

// Keypress detection
document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Double-click event
document.getElementById('myButton').addEventListener('dblclick', function() {
    alert('Double-clicked the button!');
});

