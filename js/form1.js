const id = document.querySelector(".email");
const password = document.querySelector(".password");
const loginBtn = document.querySelector(".submit");
const popUp = document.querySelector(".popup");
const close = document.querySelector(".popup button");

/** 로그인 버튼을 누르면 레이어팝업 띄우기 */
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.showModal();
});
close.addEventListener("click", () => {
  popUp.close();
});

const del = document.querySelectorAll(".btn-del");
const focusInput = document.querySelectorAll("span input");
/** x 를 누르면 input value 삭제 , x를 누른후 x 사라지게 */
// del.forEach((delBtn) => {
//   delBtn.addEventListener("click", () => {
//     delBtn.previousElementSibling.value = "";
//     delBtn.remove();
//   });
// });

/** input 입력시 x 사라지게 */
// focusInput.forEach((focosInput) => {
//   focosInput.addEventListener("input", () => {
//     const btnX = focosInput.nextElementSibling;
//     if (focosInput.value.length > 0) {
//       btnX.style.display = "none";
//     } else {
//       btnX.style.display = "block";
//     }
//   });
// });

/**  input에 아무것도 없을때 x가 사라지게 */
focusInput.forEach((inputNull) => {
  if (inputNull.value.length === 0) {
    // ** 질문 ** 여기서 inputNull.value === null을 하면 왜 안되는건가요 ? null이 값이 없는건데 안돼서 궁금합니당
    const btnX = inputNull.nextElementSibling;
    btnX.style.display = "none";
  }
});
