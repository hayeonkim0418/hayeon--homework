/** 아이디 찾기 */
const form1 = document.querySelector(".form1");
const submitBtn = form1.querySelector(".btn-type1");
const inputs = form1.querySelectorAll("input");
const name = document.querySelector(".idFind .name");
const birth = document.querySelector(".idFind .birth");

const findID = () => {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value === "") {
      alert("성명을 입력하세요.");
      return;
    }
    if (birth.value === "") {
      alert("생년월일을 입력하세요.");
      return;
    }
  });

  //   form1.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     let data = {};
  //     inputs.forEach((input) => {
  //       const value = input.value;
  //       const name = input.name;
  //       data[name] = value;
  //     });
  //     if (data.name === "") {
  //       alert("name");
  //       return;
  //     }
  //   });
};
findID();

/** 비밀번호 찾기 */
