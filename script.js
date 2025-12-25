// Sukanya B Portfolio Script

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');

    // Typewriter Effect
    const roles = [
        "Full-Stack Developer",
        "Python Developer",
        "Django & FastAPI Developer",
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
});
