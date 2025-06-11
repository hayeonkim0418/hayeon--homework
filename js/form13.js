/** 내용의 실시간 글자수를 넣어주세요. */
const input = document.querySelector(".box input");
const nickCount = document.querySelector("#nickCount");
const textarea = document.querySelector(".box textarea");
const introCount = document.querySelector("#introCount");

input.addEventListener("keyup", () => {
  const inputTxt = input.value.length;
  nickCount.textContent = inputTxt;
});

textarea.addEventListener("keyup", () => {
  const areaTxt = textarea.value.length;
  introCount.textContent = areaTxt;
});
