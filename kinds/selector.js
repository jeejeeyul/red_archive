import { parts } from "./parts.js";

var sel1 = document.getElementById("sel1");
var sel2 = document.getElementById("sel2");
var sel3 = document.getElementById("sel3");
var sel4 = document.getElementById("sel4");
var btn = document.getElementById("btn");

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

if (getCookie("shirts") == "shirts") {
  sel1.textContent = parts.shirts_que[0];
  sel2.textContent = parts.shirts_que[1];
  sel3.textContent = parts.shirts_que[2];
  sel4.textContent = parts.shirts_que[3];
}
sel1.addEventListener("mouseover", function () {
  sel1.style.backgroundColor = "coral";
  sel2.style.backgroundColor = "white";
});

sel2.addEventListener("mouseover", function () {
  sel2.style.backgroundColor = "coral";
  sel1.style.backgroundColor = "white";
});

sel3.addEventListener("mouseover", function () {
  sel3.style.backgroundColor = "coral";
  sel4.style.backgroundColor = "white";
});

sel4.addEventListener("mouseover", function () {
  sel4.style.backgroundColor = "coral";
  sel3.style.backgroundColor = "white";
});
//색바뀌는 코드>>1-2, 3-4로 이어져있음

btn.addEventListener("click", function () {
  if (sel1.style.backgroundColor == "coral") {
    if (sel3.style.backgroundColor == "coral") {
      setCookie("sel1", "sel1", 1);
      setCookie("sel3", "sel3", 1);
      setCookie("sel4", "sel4", 0);
      setCookie("sel2", "sel2", 0);
    } else {
      setCookie("sel1", "sel1", 1);
      setCookie("sel4", "sel4", 1);
      setCookie("sel3", "sel3", 0);
      setCookie("sel2", "sel2", 0);
    }
  } else {
    if (sel3.style.backgroundColor == "coral") {
      setCookie("sel2", "sel2", 1);
      setCookie("sel3", "sel3", 1);
      setCookie("sel4", "sel4", 0);
      setCookie("sel1", "sel1", 0);
    } else {
      setCookie("sel2", "sel2", 1);
      setCookie("sel4", "sel4", 1);
      setCookie("sel1", "sel1", 0);
      setCookie("sel3", "sel3", 0);
    }
  }
});
