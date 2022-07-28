const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) /1000;

    const days = Math.floor(totalSeconds / 60 / 60 /24);

    const hours = Math.floor(totalSeconds / 60 / 60) % 24;

    const mins = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    console.log(newYearsDate - currentDate);
    console.log(days, hours, mins, seconds); 
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    if (time < 10){
        return `0${time}`;
    }
    else {
        return time;
    
    }
}

countdown();

setInterval(countdown, 1000);