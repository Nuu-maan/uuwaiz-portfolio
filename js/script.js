// JavaScript for additional button effects
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        const circle = this.querySelector('::before');
        circle.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    button.addEventListener('mouseleave', function() {
        const circle = this.querySelector('::before');
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM content to fully load
    // Your code that accesses elements should go here

    // Example:
    var btn1 = document.getElementById('btn1');
    if (btn1) {
        btn1.style.color = 'red';
    } else {
        console.error('Button btn1 not found.');
    }

    var btn2 = document.getElementById('btn2');
    if (btn2) {
        btn2.addEventListener('click', function() {
            // Event listener logic
        });
    } else {
        console.error('Button btn2 not found.');
    }
});
