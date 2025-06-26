import { data } from "../data/learning1-1_data.js";

/*export*/ const GNB = () => {
  const config = {
    parent: ".lounge-nav ul",
  };
  const { parent } = config;
  const navUl = document.querySelector(parent);

  /* depth2 제어 */
  const depth2 = (arry) => {
    return arry
      .map((item2) => {
        return `
        <li><a href="${item2.depth2Link}">${item2.depth2Title}</a></li>
        `;
      })
      .join("");
  };

  /* 데이터 바인딩 */
  const GNBBind = () => {
    const result = data.map((item) => {
      return `
        <li>
            <button>${item.depth1Title}</button>
            <ul>
            ${item.depth2 ? `${depth2(item.depth2)}` : ""}
            </ul>
        </li>
        `;
    });
    // console.log(result);
    navUl.innerHTML = result.join("");
  };
  GNBBind();
};
GNB();
