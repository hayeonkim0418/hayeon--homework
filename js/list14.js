/** 제품 리스트를 클릭하면 상단의 이미지와 제목을 바꿔주세요. */

const listBtn = document.querySelectorAll(".list-type14 button");
const title = document.querySelector(".message h2");
const imgs = document.querySelectorAll(".list-type14 img");
const titleImg = document.querySelector(".message img");

listBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isText = btn.textContent;
    // console.log(btn.textContent);
    title.textContent = isText;
    // console.log(btn.children[0].children[0]);
    titleImg.src = btn.children[0].children[0].src;
  });
});
