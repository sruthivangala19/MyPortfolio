// Welcome message
window.addEventListener("load", function() {
    console.log("Welcome to my Portfolio Website!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});