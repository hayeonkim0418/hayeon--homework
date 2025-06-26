import { data } from "../data/tab_data.js";

/**
 * 탭 누르면 클릭한 대상 활성화
 * 다른 탭 누르면 나머지 다 비활
 * 다 지우고 추가한다 .
 */
export const Tab = () => {
  const tab = document.querySelector(".tab");
  const tabCons = document.querySelectorAll(".tab li");

  tab.addEventListener("click", (e) => {
    tabCons.forEach((con) => {
      con.querySelector("button").classList.remove("--active");
    });
    e.target.classList.add("--active");
  });
};

/* tab list  */
export const TabData = () => {
  const config = {
    parent: ".list-type1",
    imgDivClassName: "thumbnail",
    badgeClassName: "badges",
    tagClassName: "hash",
    typeClassName: "list-type2",
  };
  const { parent, imgDivClassName, badgeClassName, typeClassName, tagClassName } = config;

  const list = document.querySelector(parent);
  /* 해쉬태그 데이터 */
  const hashTag = (arry) => {
    return arry
      .map((item2) => {
        return `
          <span>#${item2.tag}</span>
      `;
      })
      .join("");
  };
  /* 형태, 일정 데이터 */
  const type2List = (arry2) => {
    return arry2
      .map((item3) => {
        return `
        <li>
          <span>${item3.type2Title}</span>
          <div>${item3.type2Text}</div>
        </li>
      `;
      })
      .join("");
  };

  list.innerHTML = data.map((item) => {
    return `
          <li>
            <a href="${item.link}">
              <div class="${imgDivClassName}">
                <img src="${item.img}" alt="" />
              </div>
              <div class="${badgeClassName}">
                <span class="badge orange">${item.badge}</span>
                <span class="badge coin">${item.coin}</span>
              </div>
              <strong class="list-type1__title">${item.title}</strong>
              <div class="${tagClassName}">
                ${hashTag(item.hash)}
              </div>
              <ul class="${typeClassName}">
                <li>
                  ${type2List(item.type2)}
                </li>
              </ul>
              <div class="list-type1__date">신청기간 : ${item.data}</div>
            </a>
          </li>
    `;
  });
};
