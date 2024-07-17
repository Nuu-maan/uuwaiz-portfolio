document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector('.contact-form h1');
    const text = "Contact Us";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            heading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    heading.innerHTML = "";
    typeText();

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            bgmiId: document.getElementById('bgmiId').value,
            contactNumber: document.getElementById('contactNumber').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch('http://localhost:3000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
            alert('Form submitted successfully');
            form.reset(); // Clear form fields
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form');
        }
    });
});
