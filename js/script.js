/* ==========================================
   BIRTHDAY COUNTDOWN
========================================== */
const targetDate = new Date("2026-10-13T00:00:00");
const ids = ["d", "h", "m", "s"];
const openButton = document.getElementById("open");
/* ==========================================
   UPDATE COUNTDOWN
========================================== */
function updateCountdown() {
    let diff = targetDate - new Date();
    if (diff <= 0) {
        ids.forEach(id => {
            document.getElementById(id).textContent = "00";
        });
        openButton.disabled = false;
        return;
    }
    const values = [
        Math.floor(diff / 86400000),
        Math.floor((diff % 86400000) / 3600000),
        Math.floor((diff % 3600000) / 60000),
        Math.floor((diff % 60000) / 1000)
    ];
    values.forEach((value, index) => {
        document.getElementById(ids[index]).textContent =
            String(value).padStart(2, "0");
    });
}
/* ==========================================
   RUN COUNTDOWN
========================================== */
setInterval(updateCountdown, 1000);
updateCountdown();
/* ==========================================
   OPEN SURPRISE
========================================== */
openButton.addEventListener("click", function () {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("scene2").style.display = "grid";
});