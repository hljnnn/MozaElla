/**
 * Valentine's Day Countdown Logic
 * Target Date: February 14, 2026 00:00:00
 */

const targetDate = new Date("February 14, 2026 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // Check if the date has arrived
    if (distance <= 0) {
        clearInterval(timerInterval);
        
        // Update display for completion
        document.getElementById("timer").innerHTML = "<h2>The wait is over! Sorry na po late :P ❤️ </h2>";
        
        // Unlock the button
        const btn = document.getElementById("proceedBtn");
        btn.disabled = false;
    }
};

// Run the function every second
const timerInterval = setInterval(updateCountdown, 1000);

// Run once immediately so there's no 1-second delay on load
updateCountdown();