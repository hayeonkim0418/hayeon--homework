/** 뉴스레터 구독버튼 누르면 경고창 띄우기
>>> xxx@xxx.com으로 뉴스레터가 신청되었습니다. */

const newsSub = document.querySelector(".news");
const email = document.querySelector(".email");

newsSub.addEventListener("click", () => {
  alert(`${email.value}으로 뉴스레터가 신청되었습니다.`);
});
