export const boardData = () => {
  const data = [
    {
      name: "color1",
      img: "./images/logo-white.svg",
      title: "1-리베마트",
      onOff: "온라인몰",
      day: "2019.03..1(금) ~ 3.31(일)",
      point: "2019.4.18(금)",
      target: "R.pay 3만원 이상 첫 결제",
      boon: "3천P적립",
    },
    {
      name: "color2",
      img: "./images/logo-white.svg",
      title: "2-리베마트",
      onOff: "온라인몰",
      day: "2019.03..1(금) ~ 3.31(일)",
      point: "2019.4.18(금)",
      target: "R.pay 3만원 이상 첫 결제",
      boon: "3천P적립",
    },
    {
      name: "color3",
      img: "./images/logo-white.svg",
      title: "3-리베마트",
      onOff: "온라인몰",
      day: "2019.03..1(금) ~ 3.31(일)",
      point: "2019.4.18(금)",
      target: "R.pay 3만원 이상 첫 결제",
      boon: "3천P적립",
    },
    {
      name: "color4",
      img: "./images/logo-white.svg",
      title: "4-리베마트",
      onOff: "온라인몰",
      day: "2019.03..1(금) ~ 3.31(일)",
      point: "2019.4.18(금)",
      target: "R.pay 3만원 이상 첫 결제",
      boon: "3천P적립",
    },
    {
      name: "color5",
      img: "./images/logo-white.svg",
      title: "5-리베마트",
      onOff: "온라인몰",
      day: "2019.03..1(금) ~ 3.31(일)",
      point: "2019.4.18(금)",
      target: "R.pay 3만원 이상 첫 결제",
      boon: "3천P적립",
    },
    {
      name: "color6",
      img: "./images/logo-white.svg",
      title: "6-리베마트",
      onOff: "온라인몰",
      day: "2019.03..1(금) ~ 3.31(일)",
      point: "2019.4.18(금)",
      target: "R.pay 3만원 이상 첫 결제",
      boon: "3천P적립",
    },
  ];
  const shopList = document.querySelector(".shop-list");
  const result = data.map((item) => {
    const { name, img, title, onOff, day, point, target, boon } = item;
    return `
    <li>
    <span class="brand ${name}"><img src="${img}" alt="" /></span>
          <p class="title">${title}<span>${onOff}</span></p>
          <ul>
            <li>기간<span>${day}</span></li>
            <li>
              적립일
              <span>${point}</span>
            </li>
            <li>
              대상
              <span>${target}</span>
            </li>
            <li>
              혜택
              <span class="blue">${boon}</span>
            </li>
          </ul>
        </li>
    `;
  });
  console.log(result);
  shopList.innerHTML = result.join("");
};
