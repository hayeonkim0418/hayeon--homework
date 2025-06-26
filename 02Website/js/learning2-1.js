import { boardData } from "../data/learning2-1_data.js";

/*export*/ const Board_noti = () => {
  const config = {
    tableClassName: ".table-type2",
  };
  const table = document.querySelector(config.tableClassName);
  const tbody = table.querySelector("tbody");
  const countNum = document.querySelector(".count");

  countNum.textContent = boardData.length;

  if (boardData.length === 0) {
    tbody.innerHTML = `
    <tr>
      <td colspan='5'>현재 게시물이 없습니다.</td>
    </tr>
      `;
    console.log("nono");
  } else {
    tbody.innerHTML = boardData
      .map((item) => {
        const { no, link, title, write, date, count } = item;
        return `
      <tr>
          <td>${no}</td>
          <td><a href="${link}">${title}</a></td>
          <td>${write}</td>
          <td>${date}</td>
          <td>${count}</td>
      </tr>
      `;
      })
      .join("");
  }
};
Board_noti();
