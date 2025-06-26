import { data } from "../data/main_data.js";
import { alramData } from "../data/alram_data.js";

/* 메뉴 */
export const GNB = () => {
  const config = {
    parent: ".gnb ul",
    depthName: "depth2",
  };
  const { depthName, parent } = config;
  const gnbUl = document.querySelector(parent);
  const depth2 = (arry) => {
    return arry
      .map((item2) => {
        return `
                    <li>
                        <a href='${item2.depth2Link}'>${item2.depth2Title}</a>
                    </li>
                    `;
      })
      .join("");
  };
  // 데이터 바인딩
  const GNBBind = () => {
    gnbUl.innerHTML = data
      .map((item) => {
        return `
        <li>
            <a href='${item.depth1Link}'>${item.depth1Title}</a>
            <div class="${depthName}">
                <ul>
                ${
                  item.depth2
                    ? `
                    <ul>
                        ${depth2(item.depth2)}
                    </ul>
                    `
                    : ""
                }
                </ul>
            </div>
        </li>
        `;
      })
      .join("");
  };
  GNBBind();
};

/* 알람 */
export const ALARM = () => {
  const config = {
    parent: ".alram ul",
    dateClassName: "alram__date",
    writerClassName: "alram__writer",
    btnClassName: "alram__del",
    conClassName: "alram__content",
  };
  const { parent, dateClassName, writerClassName, btnClassName, conClassName } = config;
  const count = document.querySelector(".profile__alram");
  const alramUl = document.querySelector(parent);

  /* 알람 리스트 */
  const ALARMBind = () => {
    alramUl.innerHTML = alramData
      .map((list) => {
        return `
      <li>
        <div class="${dateClassName}">${list.date}</div>
        <div class="${writerClassName}">${list.writer}</div>
        <button class="${btnClassName}" style="background-color:  #fff;">x</button>
        <div class="${conClassName}">${list.content}</div>
      </li>
      `;
      })
      .join("");
  };
  ALARMBind();

  /* 알람 갯수 체크, 삭제 이벤트 */
  const Del = () => {
    const delButtons = document.querySelectorAll(".alram__del");
    const lis = document.querySelectorAll(".alram > ul > li");
    count.textContent = alramData.length;

    delButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target.closest("li").remove();
        alramData.pop();
        count.textContent = alramData.length;
        if (alramData.length === 0) {
          count.remove();
        }
      });
    });
  };
  Del();
};
