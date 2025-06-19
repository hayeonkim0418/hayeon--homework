/** 게시물 갯수 반영하기 */
const count = document.querySelector(".table-info span");
const lists = document.querySelectorAll(".table tbody");

lists.forEach((list) => {
  const answers = list.querySelectorAll(".answer");
  count.textContent = list.rows.length - answers.length;
  // console.log(list.rows.length - answers.length);
});

/** 데이터 바인딩하기 (페이징 하지마세요) */
const data = [
  {
    no: "1",
    category: "주문/결제",
    title: "주문과 결제는 어떻게 하나요?",
    con: {
      display: "display: table-row",
      text1: "안녕하세요.",
      text2:
        "부엌은 보통 설치 전달 철거와 타일 작업 후 다음날 설치하는 방식으로진행하기 때문에 철거부터 소요되는 시간은 약 2~3일 정도 걸릴수있습니다.",
      text3:
        "붙박이/빌트인장은 전날 철거하는 경우가많고, 제품 자체의 설치는 반나절에서 하루정도 걸립니다.(사이즈,붙박이 수에 따라 달리질 수 있습니다.",
    },
  },
  {
    no: "2",
    category: "상품",
    title: "[상담]견적을 바로 알고싶은데 꼭 실측을 해야 하나요?",
    con: {
      display: "display: none",
      text1: "안녕하세요.",
      text2:
        "부엌은 보통 설치 전달 철거와 타일 작업 후 다음날 설치하는 방식으로진행하기 때문에 철거부터 소요되는 시간은 약 2~3일 정도 걸릴수있습니다.",
      text3:
        "붙박이/빌트인장은 전날 철거하는 경우가많고, 제품 자체의 설치는 반나절에서 하루정도 걸립니다.(사이즈,붙박이 수에 따라 달리질 수 있습니다.",
    },
  },
  {
    no: "3",
    category: "상품",
    title: "[시공/설치]부분으로 공사하게되면 얼마나 걸리나요?",
    con: {
      display: "display: none",
      text1: "안녕하세요.",
      text2:
        "부엌은 보통 설치 전달 철거와 타일 작업 후 다음날 설치하는 방식으로진행하기 때문에 철거부터 소요되는 시간은 약 2~3일 정도 걸릴수있습니다.",
      text3:
        "붙박이/빌트인장은 전날 철거하는 경우가많고, 제품 자체의 설치는 반나절에서 하루정도 걸립니다.(사이즈,붙박이 수에 따라 달리질 수 있습니다.",
    },
  },
  {
    no: "4",
    category: "주문/결제",
    title: "주문과 결제는 어떻게 하나요?",
    con: {
      display: "display: none",
      text1: "안녕하세요.",
      text2:
        "부엌은 보통 설치 전달 철거와 타일 작업 후 다음날 설치하는 방식으로진행하기 때문에 철거부터 소요되는 시간은 약 2~3일 정도 걸릴수있습니다.",
      text3:
        "붙박이/빌트인장은 전날 철거하는 경우가많고, 제품 자체의 설치는 반나절에서 하루정도 걸립니다.(사이즈,붙박이 수에 따라 달리질 수 있습니다.",
    },
  },
  {
    no: "5",
    category: "상품",
    title: "[A/S]as기간은 어떻게 되나요?",
    con: {
      display: "display: none",
      text1: "안녕하세요.",
      text2:
        "부엌은 보통 설치 전달 철거와 타일 작업 후 다음날 설치하는 방식으로진행하기 때문에 철거부터 소요되는 시간은 약 2~3일 정도 걸릴수있습니다.",
      text3:
        "붙박이/빌트인장은 전날 철거하는 경우가많고, 제품 자체의 설치는 반나절에서 하루정도 걸립니다.(사이즈,붙박이 수에 따라 달리질 수 있습니다.",
    },
  },
];
const tbody = document.querySelector("tbody");
const result = data.map((item) => {
  const { no, category, title, display, text1, text2, text3 } = item;
  return `
    <tr class="tr">
      <td>${no}</td>
      <td>${category}</td>
      <td><button>${title}</button></td>
    </tr>
    <tr style="${item.con.display}">
            <td colspan="3">
              <div class="answer">
                <div>
                  <p>${item.con.text1}</p>
                  <p>
                    ${item.con.text2}
                  </p>
                  <p>
                    ${item.con.text3}
                  </p>
                  <br />
                  감사합니다.
                </div>
              </div>
            </td>
          </tr>
  `;
});

console.log(result);

tbody.innerHTML = result.join("");
