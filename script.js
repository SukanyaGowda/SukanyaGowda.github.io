// Sukanya B Portfolio Script

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');

    // Typewriter Effect
    const roles = [
        "Full-Stack Developer",
        "Python Developer",
        "Django Developer",
        "FastAPI Developer",
        "React Developer"
    ];

    const typeWriterElement = document.querySelector('.typewriter');

    // Initial State
    let roleIndex = 0;

    // Function to rotate words directly
    function rotateRole() {
        // Fade out
        typeWriterElement.style.opacity = '0';
        typeWriterElement.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // Change text
            typeWriterElement.textContent = roles[roleIndex];

            // Fade in
            typeWriterElement.style.opacity = '1';
            typeWriterElement.style.transform = 'translateY(0)';

            // Increment index
            roleIndex = (roleIndex + 1) % roles.length;

        }, 500); // Wait for fade out transition (0.5s match CSS)
    }

    // Initialize style for transition
    if (typeWriterElement) {
        typeWriterElement.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        typeWriterElement.style.display = "inline-block";

        // Start loop
        rotateRole(); // Show first immediately
        setInterval(rotateRole, 2500); // Rotate every 2.5 seconds
    }
    // Mobile Navigation
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate Hamburger
            const bars = document.querySelectorAll('.bar');
            // Basic rotation logic could go here, but simple toggle is fine for now
        });
    }

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
