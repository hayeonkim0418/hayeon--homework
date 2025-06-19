export const infoList = () => {
  const infoData = [
    {
      category: "공시토마토",
      title: "올해 반등 시작한 리츠...IPO·ETF상장 박차",
      date: "2024.05.16",
    },
    {
      category: "공시바나나",
      title: "올해 바나나 차차 븀",
      date: "2024.07.06",
    },
  ];
  const newsUl = document.querySelector(".news-list");
  if (infoData.length === 0) {
    newsUl.innerHTML = `
    <li>현재 게시물이 없습니다.</li>
    `;
  } else {
    newsUl.innerHTML = infoData
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
  }
};
