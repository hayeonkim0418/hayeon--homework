import { BoardData } from "../data/learning2-3_data.js";

/*export*/ const Board_free = () => {
  const config = {
    tableClassName: ".table-type2.free",
  };
  const table = document.querySelector(config.tableClassName);
  const tbody = table.querySelector("tbody");
  const countNum = document.querySelector(".count");

  countNum.textContent = BoardData.length;
  /* 게시물이 없을때ㅔ */
  if (BoardData.length === 0) {
    tbody.innerHTML = `
    <tr>
        <td colspan='6'>게시물이 없습니다.</td>
    </tr>
    `;
  } else {
    tbody.innerHTML = BoardData.map((item) => {
      const { no, category, link, title, write, date, count } = item;
      return `
        <tr>
            <td>${no}</td>
            <td>${category}</td>
            <td><a href="${link}">${title}</a></td>
            <td>${write}</td>
            <td>${date}</td>
            <td>${count}</td>
        </tr>
        `;
    });
  }
};
Board_free();
