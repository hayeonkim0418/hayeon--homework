/*export*/ const Learning = (callback) => {
  const config = {
    parent: ".select-box",
    activeName: "active",
  };
  const selectBox = document.querySelector(config.parent);
  const selDiv = selectBox.querySelector("div");

  /** 토글 */
  const toggleList = () => {
    const button = document.querySelector(".select-box button");
    button.addEventListener("click", () => {
      selectBox.classList.toggle(config.activeName);
      callback("kkk");
    });
  };

  /** 텍스트 넣기 */
  const handleList = () => {
    const selButton = document.querySelector(".select-box > button");
    const list = document.querySelectorAll(".select-box li");
    const boxHeight = selectBox.offsetHeight;

    selDiv.style.setProperty("top", `${boxHeight}px`);

    list.forEach((li) => {
      li.addEventListener("click", (e) => {
        const optionText = e.target.textContent;
        selButton.textContent = optionText;
        /** 토글 접힘 */
        selectBox.classList.remove(config.activeName);
        callback("hhh");
      });
    });
  };

  toggleList();
  handleList();
};
Learning();
