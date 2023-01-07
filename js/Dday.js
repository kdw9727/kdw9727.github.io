const dday = document.querySelector("#dday");

function getDday() {
  const today = new Date();
  const chritmas = new Date("2023-12-25");
  const diff = chritmas - today;
  const diffDay = String(Math.floor(diff / (1000*60*60*24))).padStart(3, "0");
  const diffHour = String(Math.floor(diff / (1000*60*60)%24)).padStart(2, "0");;
  const diffMin = String(Math.floor(diff / (1000*60)%60)).padStart(2, "0");;
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");;
  dday.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}`;
  console.log(typeof(diff))
}

getDday();
setInterval(getDday, 1000);

