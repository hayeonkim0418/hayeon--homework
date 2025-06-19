export const board = () => {
  const data = [
    {
      name: "ico1",
      title: "1사업개발",
      list1: "바이오의약품 제품 개발 진행 및 관리",
      list2: "신제품 개발 전략 수립 및 제품 포트폴리오 구축",
    },
    {
      name: "ico2",
      title: "2허가",
      list1: "국내·외 허가 계획/전략 수립 및 실행, 허가 유지 관리",
      list2: "프로젝트 허가 관련 규제기관 대응",
    },
    {
      name: "ico3",
      title: "3임상",
      list1: "임상시험 기획, 운영 및 글로벌 임상 공급망 관리",
      list2: "의약품 안전성 정보 관리 및 규제 기관 대응",
    },
    {
      name: "ico4",
      title: "4통계·데이터 관리",
      list1: "연구개발, 임상, 허가, 제조, CMC 관련 통계분석 및 규제 기관 대응",
      list2: "임상 데이터 관리 및 수집 시스템 운영",
    },
  ];
  const listDiv = document.querySelector(".list-type1");
  const result = data.map((item) => {
    const { name, title, list1, list2 } = item;
    return `
    <details open class="${name}">
        <summary>${title}</summary>
          <div class="content">
            <ul class="list-type2">
              <li>${list1}</li>
              <li>${list2}</li>
            </ul>
          </div>
    </details>
    `;
  });

  //   console.log(data);
  console.log(result);
  listDiv.innerHTML = result.join("");
};

// export const Age = () => {
//   console.log("20");
// };
