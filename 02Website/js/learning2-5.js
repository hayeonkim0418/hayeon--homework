import { BoardData } from "../data/learning2-5_data.js";

export const Board_writing = () => {
  const fileAdd = document.querySelector(".btn.file");
  const fileAddName = document.querySelector(".input.file");

  fileAdd.addEventListener("click", () => {
    console.log(fileAddName);
    fileAddName.setAttribute("type", "file");
  });
};
