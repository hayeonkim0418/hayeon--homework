export const listData = () => {
  console.log("gg");
  const data = [
    {
      title: "[DIY]네온 홀릭 하트품은 보틀 커버(동영상)",
      level: "lv3",
      review: "2",
      price: 8000,
    },
    {
      title: "셋업",
      level: "lv3",
      review: "8",
      price: 60000,
    },
    {
      title: "힐 9cm",
      level: "lv4",
      review: "12",
      price: 30000,
    },
    {
      title: "후드티",
      level: "lv3",
      review: "5",
      price: 18000,
    },
    {
      title: "레몬 팬츠",
      level: "lv2",
      review: "21",
      price: 15000,
    },
  ];
  const productList = document.querySelector(".product-type1");
  const result = data.map((item) => {
    const { title, level, review, price } = item;
    return `
    <li>
          <a href="">
            <div class="thumbnail">
              <img src="./images/img_product.png" alt="" />
            </div>
            <div class="title"><span class="a11y-hidden">상품명</span>${title}</div>
            <div class="level">
              (코바늘) 난이도
              <span class="rating ${level}" aria-label="레벨 총5단계중 3단계"></span>
            </div>
            <div class="review">리뷰:${review}</div>
            <div class="price"><span class="a11y-hidden">가격</span>${price.toLocaleString()}원</div>
          </a>
        </li>
    `;
  });
  console.log(result);
  productList.innerHTML = result.join("");
};
