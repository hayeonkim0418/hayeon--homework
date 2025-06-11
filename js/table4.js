/** 팝업 열고 닫고 */
// const openBtn = document.querySelectorAll(".btn-info");
// const popup = document.querySelectorAll(".popup");
const closeBtn = document.querySelectorAll(".btn-close");

// openBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     popup.forEach((popup) => {
//       popup.showModal();
//     });
//   });
// });

const deliveryBtn = document.querySelector(".btn-info.delivery");
const shoppingBtn = document.querySelector(".btn-info.shopping");
const deliveryPopup = document.querySelector(".popup.delivery");
const shoppingPopup = document.querySelector(".popup.shopping");

deliveryBtn.addEventListener("click", () => {
  deliveryPopup.showModal();
});

shoppingBtn.addEventListener("click", () => {
  shoppingPopup.showModal();
});

closeBtn.forEach((close) => {
  close.addEventListener("click", () => {
    deliveryPopup.close();
    shoppingPopup.close();
  });
});
/**
 * 클릭한 버튼의 해당 모달이 뜨게 하고 싶은데 ...
 * forEach로 해도 첫번째 모달만 떠서 ㅠ ㅠ
 * 클래스로 나눠서 했습니다.
 */
