const login = document.querySelector(".login");
const inputs = login.querySelectorAll("input");
const popup = document.querySelector(".popup");
const popupTxt = popup.querySelector("span");
const close = popup.querySelector("button");

const loginChk = () => {
  login.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {};
    inputs.forEach((input) => {
      const value = input.value.trim();
      const name = input.name;
      data[name] = value;
    });
    if (data.id === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (data.password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    popup.showModal();
    popupTxt.textContent = data.id;
  });
};
loginChk();

close.addEventListener("click", (e) => {
  e.preventDefault();
  popup.close();
});
