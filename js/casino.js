const randomNum = document.querySelector("#randNum-form");
const setMaxValue = document.querySelector("#randNum-form .maxvalue");
const userGuessNum = document.querySelector("#randNum-form .guess");
const chosenNum = document.querySelector("#chosen");
const result = document.querySelector("#result");


function makeRandomNumber() {
  const min = 0;
  const setValue = parseInt(setMaxValue.value);
  return Math.floor(Math.random() * (setValue - min + 1)) + min;
} // 사용자설정 랜덤 함수

function paintResult(choseValue, machineValue) {
  if(choseValue === machineValue){
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

function onPlaySubmit(event) {
  event.preventDefault();
  const choseValue = parseInt(userGuessNum.value);
  const machineValue = makeRandomNumber();
  chosenNum.innerText = `You chose: ${choseValue}, the machine chose: ${machineValue}`;
  paintResult(choseValue, machineValue);
} // play 누르면 나오는 결과'

randomNum.addEventListener("submit", onPlaySubmit);
