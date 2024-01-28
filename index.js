const h2 = document.querySelector("h2");
const btn = document.querySelector(".btn");
let stranger = true;

btn.addEventListener("click", function () {
  if (stranger) {
    btn.innerHTML = "Add Friend";
    h2.innerHTML = "Stranger";
    h2.style.color = "red"
    return (stranger = false);
  } else {
    btn.innerHTML = "Remove Friend";
    h2.innerHTML = "Friends";
    h2.style.color = "green"
    return (stranger = true);
  }
});
