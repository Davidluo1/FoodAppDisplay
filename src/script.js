const meal = document.getElementById("showcase");
const btn = meal.querySelector(".footer .footer-btn");

btn.addEventListener("click", () => {
  btn.toggleClass("focus");
});
