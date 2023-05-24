var bg_img = document.getElementById("bg_img");
console.log(bg_img);
bg_img.addEventListener("click", function () {
  bg_img.classList.add("slidein");
  setTimeout(() => {
    bg_img.classList.remove("slidein");
  }, 3000);
});
