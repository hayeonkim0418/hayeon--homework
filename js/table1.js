/** 게시물 갯수 반영하기 */

const lists = document.querySelector(".table-type1 tbody");
const count = document.querySelector(".count span");

const countNum = `${lists.rows.length - 1}`;

count.textContent = countNum;
