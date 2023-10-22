function updateCountdown() {
    const targetDate = new Date('2023-12-31T00:00:00'); //(12/31/2023)
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    if (timeDifference < 0) {
        document.getElementById('promo').style.display = 'none'; // Hide the countdown when the date has passed
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        document.getElementById('countdown-days').textContent = days;
        document.getElementById('countdown-hours').textContent = hours;
        document.getElementById('countdown-minutes').textContent = minutes;
        document.getElementById('countdown-seconds').textContent = seconds;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();

