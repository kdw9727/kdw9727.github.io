const body = document.querySelector("body");

function handleWindow() {
  const underHalf = "under-half";
  const overHalf = "over-half";
  const almost = "almost";
  let innerWidth = window.innerWidth;
  if (innerWidth < 600){
    body.classList.add(underHalf);
    body.classList.remove(almost);
    body.classList.remove(overHalf);
  } else if (innerWidth >= 600 && innerWidth < 800) {
    body.classList.remove(underHalf);
    body.classList.remove(almost);
    body.classList.add(overHalf);
  } else {
    body.classList.remove(overHalf);
    body.classList.add(almost);
  }
}

console.log(window.innerWidth);
window.addEventListener("resize", handleWindow);