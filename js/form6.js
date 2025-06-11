/** 초기화 버튼 누르면 체크상자 모두 초기화 시키기 */

const reset = document.querySelector(".btn-reset");
const checkbox = document.querySelectorAll("input");

reset.addEventListener("click", () => {
  checkbox.forEach((chk) => {
    if (chk.checked) {
      chk.removeAttribute("checked");
    }
  });
});
