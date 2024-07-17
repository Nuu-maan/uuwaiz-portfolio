document.addEventListener("DOMContentLoaded", function() {
    const infoBoxes = document.querySelectorAll('.info-box');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    infoBoxes.forEach(box => {
        observer.observe(box);
    });
});
// JavaScript for about.html

function copyBGMI() {
    const bgmiId = "Your BGMI ID"; // Replace with actual BGMI ID to copy
    navigator.clipboard.writeText(bgmiId).then(function() {
        alert("Copied BGMI ID to clipboard: " + bgmiId);
    }, function(err) {
        console.error("Could not copy BGMI ID: ", err);
    });
}

