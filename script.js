function updateClock() {
    const now = new Date

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById("date").textContent = dateString;
}
updateClock();
setInterval(updateClock, 1000);