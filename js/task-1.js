const startBtn = document.getElementById('timer__start-btn');
const display = document.getElementById('display');

let totalMinutes = 60;
let intervalId = null;

startBtn.addEventListener('click', initTimer);

function timerFormat(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesRemain = minutes % 60;

    const formatedHours = hours.toString().padStart(2, '0');
    const formatedMinutesRemain = minutesRemain.toString().padStart(2, '0');

    return `${formatedHours} : ${formatedMinutesRemain}`;
}

function initTimer() {
    if (intervalId) {
        return;
    }

    startBtn.disabled = true;

    intervalId = setInterval(() => {
        totalMinutes--;
        updateDisplay();

        if (totalMinutes === 30) {
            alert('Less than half of the hour left');
        }

        if (totalMinutes === 0) {
            clearInterval(intervalId);
            intervalId = null;
            startBtn.disabled = false;

            alert('Time has ended');
        }
    }, 60000);
}

function updateDisplay() {
    display.textContent = timerFormat(totalMinutes);
}
