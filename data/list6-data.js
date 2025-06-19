export const boardData = () => {
  const data = [
    {
      title: "1-4대보험",
      exp: "국민연금, 건강보험,<br />고용보험, 산재보험",
    },
    {
      title: "2-동호회 지원",
      exp: "사내 동호회 운영",
    },
    {
      title: "3-선물 지급",
      exp: "명절, 창립 기념일,<br />장기근속사원 선물 지급",
    },
    {
      title: "4-의복관련",
      exp: "근무복(하동·절기),<br />동잠바, 안전화 제공",
    },
    {
      title: "5-학자금 지원",
      exp: "자녀 학자금 지급",
    },
    {
      title: "6-교통편 지원",
      exp: "통근버스 운행<br />(밀양 지역)",
    },
    {
      title: "7-생활편의 지원",
      exp: "중식 제공,<br />콘도·리조트 이용권",
    },
    {
      title: "8-주거 지원",
      exp: "기숙사 운영",
    },
    {
      title: "9-리프레시",
      exp: "연차·반차 제도 운영",
    },
    {
      title: "10-경조사 지원",
      exp: "경조금, 경조휴가,<br />화환, 상조용품 지원",
    },
  ];
  const ul = document.querySelector("ul");
  const result = data.map((item) => {
    const { title, exp } = item;
    return `
        <li>
          <div>${title}</div>
          <p>${exp}</p>
        </li>
    `;
  });
  console.log(result);
  ul.innerHTML = result.join("");
};
