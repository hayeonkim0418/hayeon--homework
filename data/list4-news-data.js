export const newsList = () => {
  const newsData = [
    {
      category: "뉴스토마토",
      title: "올해 반등 시작한 리츠...IPO·ETF상장 박차",
      date: "2024.05.16",
    },
    {
      category: "뉴스바나나",
      title: "올해 바나나 차차 븀",
      date: "2024.07.06",
    },
  ];
  const newsUl = document.querySelector(".news-list");
  if (newsData.length === 0) {
    newsUl.innerHTML = `
    <li>현재 게시물이 없습니다.</li>
    `;
  } else {
    newsUl.innerHTML = newsData
      .map((item) => {
        const { category, title, date } = item;
        return `
        <li>
            <a href="">
              <span class="category">${category}</span>
              <span class="subject">${title}</span>
              <span class="date">${date}</span>
            </a>
          </li>
        `;
      })
      .join("");
    // console.log(newsUl.innerHTML);
  }
};
