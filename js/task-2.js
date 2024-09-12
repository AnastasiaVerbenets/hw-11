const startBtn = document.getElementById('timer__start-btn');
const display = document.getElementById('display');

let totalMinutes = 30000;
let intervalId = null;
let animated = false;

startBtn.addEventListener('click', initTimer);

function timerFormat(miliseconds) {
    const seconds = Math.floor(miliseconds / 1000);
    const milisecondsRemain = miliseconds % 1000;

    const formatedSeconds = seconds.toString().padStart(2, '0');
    const formatedMilisecondsRemain = milisecondsRemain.toString().padStart(3, '0');

    return `${formatedSeconds}.${formatedMilisecondsRemain}`;
}

function initTimer() {
    if (intervalId) {
        return;
    }

    startBtn.disabled = true;

    intervalId = setInterval(() => {
        totalMinutes--;
        updateDisplay();

        if (totalMinutes <= 10000) {
            display.classList.add('animate');
            animated = true;
        }

        if (totalMinutes === 0) {
            clearInterval(intervalId);
            intervalId = null;
            startBtn.disabled = false;
            display.classList.remove('animate');

            alert('Time has ended');
        }
    }, 1);
}

function updateDisplay() {
    display.textContent = `00:${timerFormat(totalMinutes)}`
}

