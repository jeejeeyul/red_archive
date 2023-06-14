var sel1 = document.getElementById("sel1");
var sel2 = document.getElementById("sel2");
var img1 = document.getElementById("sel1_img");
var img2 = document.getElementById("sel2_img");

function getCookie(name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}

function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}
if (getCookie("casual") == undefined || getCookie("shirts") == "shirts") {
  setCookie("casual", 0, 1);
}
if (getCookie("classic") !== undefined || getCookie("shirts") == "shirts") {
  setCookie("classic", 0, 1);
}
if (getCookie("minimal") !== undefined || getCookie("shirts") == "shirts") {
  setCookie("minimal", 0, 1);
}
if (getCookie("vintage") !== undefined || getCookie("shirts") == "shirts") {
  setCookie("vintage", 0, 1);
}

var randomf = Math.floor(Math.random() * 4);
console.log(randomf);
var listf = ["casual", "classic", "minimal", "vintage"];

sel1.addEventListener("click", function () {
  if (getCookie("shirts") == "shirts") {
    if (getCookie("sel1") == "sel1") {
      var randomf = Math.floor(Math.random() * 4);
      var listfIndex = listf[randomf];
      img1.src = `../images/${listfIndex}/shirts/one/${randomf + 1}.jpg`;
      listCheck(listfIndex);
    } else {
      var randomf = Math.floor(Math.random() * 4);
      var listfIndex = listf[randomf];
      img1.src = `../images/${listfIndex}/shirts/many/${randomf + 1}.jpg`;
      listCheck(listfIndex);
    }
  }
});

function listCheck(a) {
  if (a == "casual") {
    var casual = getCookie("casual");
    setCookie("casual", Number(casual) + 1, 1);
  }
}
