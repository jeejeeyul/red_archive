var bg_img = document.getElementById("bg_img");
var bg_text = document.getElementById("bg_text");
var blocker = document.getElementById("blocker");
console.log(bg_img);
bg_img.addEventListener("click", function () {
  blocker.style.zIndex = 1000;
  bg_img.classList.add("slidein");
  setTimeout(() => {
    bg_img.classList.remove("slidein");
  }, 2000);
  setTimeout(() => {
    blocker.style.zIndex = -1000;
  }, 3000);
});
//끝
