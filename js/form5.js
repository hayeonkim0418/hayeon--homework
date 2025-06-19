/** select 커스텀 기능 구현하기 */
const selectBox = document.querySelector(".select");
const lis = document.querySelectorAll("li button");

selectBox.addEventListener("click", () => {
  const selButton = selectBox.querySelector("button");
  //   console.log(selButton.textContent);
  lis.forEach((option) => {
    option.addEventListener("click", () => {
      //   console.log(option.textContent);
      selButton.textContent = option.textContent;
    });
  });
});
