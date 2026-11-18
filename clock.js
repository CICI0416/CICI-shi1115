function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

function GetTime() {
  const now = new Date();
  const h = checkTime(now.getHours());
  const m = checkTime(now.getMinutes());
  const s = checkTime(now.getSeconds());
  document.getElementById("clock").textContent = h + ":" + m + ":" + s;
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}
GetTime();
setInterval(GetTime, 1000);
