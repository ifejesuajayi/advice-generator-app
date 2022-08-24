const button = document.querySelector(".dice");
const id = document.querySelector("p");
const advice = document.querySelector("h6");

document.addEventListener("DOMContentLoaded", getAdvice);

button.addEventListener("click", getAdvice);

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const resData = await response.json();

  advice.innerHTML = `"${resData.slip.advice}"`;
  id.innerHTML = `ADVICE #${resData.slip.id}`;
}
