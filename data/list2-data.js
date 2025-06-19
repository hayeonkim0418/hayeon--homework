export const historyData = () => {
  const data = [
    {
      year: "1-2022",
      sub: {
        link: "",
        img: "",
        text1: "세계 최장비거리 기록, 아토맥스 골프공 개발",
        text2: "국내 최초 무충진 시스템 친환경 인조잔디 개발",
      },
    },
    {
      year: "2-2021",
      sub: {
        link: "",
        img: "",
        text1: "세계 최장비거리 기록, 아토맥스 골프공 개발",
        text2: "국내 최초 무충진 시스템 친환경 인조잔디 개발",
      },
    },
    {
      year: "3-2020",
      sub: {
        link: "",
        img: "../images/ico_img.svg",
        text1: "세계 최장비거리 기록, 아토맥스 골프공 개발",
        text2: "국내 최초 무충진 시스템 친환경 인조잔디 개발",
      },
    },
  ];
  const olList = document.querySelector("ol");
  const result = data.map((item) => {
    // const { year, link, img, text1, text2 } = item;
    return `
    <li>
        <strong>${item.year}</strong>
        <div><a href="${item.link}">${item.sub.text1}</a></div>
        <div>${item.sub.text2}</div>
    </li>
    `;
  });
  console.log(result);
  olList.innerHTML = result.join("");
};
