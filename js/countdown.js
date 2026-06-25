/* ==========================================
   COUNTDOWN ENGINE
========================================== */

const targetDate = new Date(CONFIG.birthday);

const countdown = {

    days: document.getElementById("d"),

    hours: document.getElementById("h"),

    minutes: document.getElementById("m"),

    seconds: document.getElementById("s")

};

function updateCountdown(){

    const diff = targetDate - new Date();

    const openButton = document.querySelector(CONFIG.selectors.openButton);

    if(diff <= 0){

        Object.values(countdown).forEach(item=>{

            item.textContent="00";

        });

        openButton.disabled=false;

        return;

    }

    countdown.days.textContent =
        String(Math.floor(diff/86400000)).padStart(2,"0");

    countdown.hours.textContent =
        String(Math.floor((diff%86400000)/3600000)).padStart(2,"0");

    countdown.minutes.textContent =
        String(Math.floor((diff%3600000)/60000)).padStart(2,"0");

    countdown.seconds.textContent =
        String(Math.floor((diff%60000)/1000)).padStart(2,"0");

}