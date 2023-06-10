import { parts } from "./parts.js";

var sel1 = document.getElementById("sel1");
var sel2 = document.getElementById("sel2");
var sel3 = document.getElementById("sel3");
var sel4 = document.getElementById("sel4");

if (document.cookie)
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
