// Event Handling
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Button Clicked!');
});

document.getElementById('clickButton').addEventListener('mouseover', () => {
    document.getElementById('clickButton').style.backgroundColor = '#28a745';
});

document.getElementById('clickButton').addEventListener('mouseout', () => {
    document.getElementById('clickButton').style.backgroundColor = '';
});

document.getElementById('keypressInput').addEventListener('keypress', (event) => {
    console.log('Key pressed: ' + event.key);
});

// Double-click or Long Press Secret Action
let secretButton = document.getElementById('secretButton');
let timer;
secretButton.addEventListener('click', () => {
    timer = setTimeout(() => {
        alert('Long Press Detected!');
    }, 1000); // 1 second for long press
});

secretButton.addEventListener('dblclick', () => {
    clearTimeout(timer); // Cancels the long press if double-clicked
    alert('Double Clicked!');
});

// Change Button Text/Color
let changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    changeTextButton.style.backgroundColor = '#ff5733';
    changeTextButton.innerText = 'Text/Color Changed!';
});

// Image Gallery Hover Effect
let galleryImages = document.querySelectorAll('.galleryImage');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        alert('Image clicked!');
    });
});

// Accordion
let accordionButtons = document.querySelectorAll('.accordionButton');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        let content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Form Validation
document.getElementById('form').addEventListener('submit', (event) => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Email validation (basic)
    if (!email.includes('@')) {
        alert('Please enter a valid email!');
        event.preventDefault();
    }

    // Password validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        event.preventDefault();
    }
});

