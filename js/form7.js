/**
 * 추천아이디 확인 : #message에 비어있을경우 경고메시지 넣기, 추천아이디값이 있을경우 메세지 출력
 */
const checkBtn = document.querySelector(".checkBtn");

checkBtn.addEventListener("click", () => {
  const inputId = document.querySelector(".inputId").value;
  const message = document.querySelector(".message");

  if (inputId === "") {
    alert("추천인 아이디를 입력하세요.");
  } else {
    message.textContent = `추천아이디 : ${inputId}`;
  }
});

/**
 * 이메일의 select박스의 상태에 따라서 이메일 주소가 반영되게 하세요.
 * 초기 selected의 값을 input에 반영
 * change될때마다 input에 반영
 * 직접입력시 input은 readonly해제
 * readonly해제시 select변경되면 readonly true가 되고 해당 select value값이 input value에 적용되어야 함
 */

const email = document.querySelector(".email select");
const domain = document.querySelector(".domain");

email.addEventListener("change", (e) => {
  const e_target = e.target.value;
  domain.value = e_target;

  if (e_target === "") {
    domain.removeAttribute("readonly");
  } else {
    domain.setAttribute("readonly", "true");
  }
});
