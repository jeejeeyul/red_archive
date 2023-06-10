var btn = document.getElementById("btn");
var text_box = document.getElementsByClassName("text_box");
var text = document.getElementsByClassName("text");
var sel_con = document.getElementById("sel_con");

var scription = `고향에 가던 중 휴게소에 들렸지만 브레이크가 고장이 나 의류매장에 박아버리고 말았다.   
  버스가 수리될 때까지 시간이 걸려 옷을 둘러보기로 했다.`;
var i = 0;
btn.addEventListener("click", function () {
  btn.style.visibility = "hidden";
  text_box[0].style.zIndex = "1000";

  /* console.log(scription[i]);*/
  var interval = setInterval(() => {
    text[0].append(scription[i]);
    console.log(scription[i]);
    i++;
    if (i == scription.length) {
      clearInterval(interval);
      document.cookie = "shirts=shirts; path=/;";
    }
  }, 100);

  setTimeout(() => {
    text[0].textContent = "";
    sel_con.style.visibility = "visible";
    text_box[0].style.zIndex = "-1000";
  }, 11000);
});
