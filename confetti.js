document.addEventListener('DOMContentLoaded', function() {
    // Function to generate continuous confetti from bottom to top
    function startConfetti() {
        confetti({
            particleCount: 15,
            angle: 90, // Angle set to 90 degrees to move downwards
            spread: 1000,
            origin: { y: 0 }, // Start from the top of the page
            colors: ['#bb0011', '#a49279', '7e5c3a'] // Custom colors for the confetti
        });

        setTimeout(startConfetti, 250); 
    }

    // Start the confetti effect
    startConfetti();
});