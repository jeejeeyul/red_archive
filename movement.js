var sets = new Array();
var returnCount = 16; //선택지 개수

function questionCount(i) {
  for (let j = 0; j < i; j++) {
    sets.push(j + 1);
  }
}

var randomNumber = () => {
  return Math.floor(Math.random() * sets.length);
};

questionCount(returnCount);
console.log(sets);
console.log(randomNumber());

var ch1 = document.getElementById("ch1");
var ch2 = document.getElementById("ch2");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

function movement() {
  p1.textContent = "";
  p2.textContent = "";

  var random = sets.pop(randomNumber());
  img1.setAttribute("src", `./images/${random}.jpg`);
  var random1 = sets.pop(randomNumber());
  img2.setAttribute("src", `./images/${random1}.jpg`);
}
movement();
ch1.addEventListener("click", function () {
  movement();
});
ch2.addEventListener("click", function () {
  movement();
});
