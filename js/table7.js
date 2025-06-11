/** 게시물 갯수 반영하기 */
const count = document.querySelector(".table-info span");
const lists = document.querySelectorAll(".table tbody");

lists.forEach((list) => {
  const answers = list.querySelectorAll(".answer");
  // console.log(list.rows.length - answers.length);
  count.textContent = list.rows.length - answers.length;
});
