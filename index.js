const cont = document.querySelector("#container");
const love = document.querySelector("i");

cont.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;

  setTimeout(() => {
    love.style.opacity = 0;
  }, 2000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 3000);
});
