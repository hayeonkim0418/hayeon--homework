/** - 전체 체크를 누르면 체크상자 모두 활성화 시키기 , 전체 체크를 다시 누르면 모두 비활성화 시키기 */

const allChkBtn1 = document.querySelector(".check-list_1 .all");
const allChkBtn2 = document.querySelector(".check-list_2 .all");
const checkbox1 = document.querySelectorAll(".check-list_1 input");
const checkbox2 = document.querySelectorAll(".check-list_2 input");

allChkBtn1.addEventListener("click", () => {
  checkbox1.forEach((chk1) => {
    chk1.removeAttribute("checked");
    if (allChkBtn1.checked) {
      chk1.setAttribute("checked", "true");
    }
  });
});

allChkBtn2.addEventListener("click", () => {
  checkbox2.forEach((chk2) => {
    chk2.removeAttribute("checked");
    if (allChkBtn2.checked) {
      chk2.setAttribute("checked", "true");
    }
  });
});
