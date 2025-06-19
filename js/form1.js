const form = document.querySelector("form");
const id = document.querySelector(".email");
const password = document.querySelector(".password");
const inputs = document.querySelectorAll("input");
const loginBtn = document.querySelector(".submit");
const popUp = document.querySelector(".popup");
const close = document.querySelector(".popup button");
const popupTxt = document.querySelector(".popupTxt");

/** 로그인 버튼을 누르면 레이어팝업 띄우기
 * 이메일을 입력해주세요
 * 비밀번호를 입력해주세요
 * ㅇㅇ님이 로그인했습니다
 * 닫기 누르면 내용 사라지게
 */
const message = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (id.value === "") {
      alert("아이디 또는 이메일을 입력하세요.");
      return;
    } else if (password.value.length === 0) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    popupTxt.textContent = id.value;
    popUp.showModal();
  });
};
message();

close.addEventListener("click", () => {
  popUp.close();
});
// loginBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   popUp.showModal();
// });

const del = document.querySelectorAll(".btn-del");
const focusInput = document.querySelectorAll("span input");
/** x 를 누르면 input value 삭제 , x를 누른후 x 사라지게 */
del.forEach((delBtn) => {
  delBtn.addEventListener("click", () => {
    delBtn.previousElementSibling.value = "";
    delBtn.remove();
  });
});

/** input 입력시 x 사라지게 */
focusInput.forEach((focosInput) => {
  focosInput.addEventListener("input", () => {
    const btnX = focosInput.nextElementSibling;
    if (focosInput.value.length > 0) {
      btnX.style.display = "none";
    } else {
      btnX.style.display = "block";
    }
  });
});

/**  input에 아무것도 없을때 x가 사라지게 */
// focusInput.forEach((inputNull) => {
//   if (inputNull.value.length === 0) {
//     // ** 질문 ** 여기서 inputNull.value === null을 하면 왜 안되는건가요 ? null이 값이 없는건데 안돼서 궁금합니당
//     const btnX = inputNull.nextElementSibling;
//     btnX.style.display = "none";
//   }
// });
