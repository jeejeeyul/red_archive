var btn = document.getElementById("btn");
var text_box = document.getElementsByClassName("text_box");
var text = document.getElementsByClassName("text");

var scription = `고향에 가던 중 휴게소에 들렸지만 브레이크가 고장이 나 의류매장 박아버리고 말았다. 
  버스가 수리될 때까지 시간이 걸려 옷을 둘러보기로 했다.`;
btn.addEventListener("click", function () {
  btn.style.visibility = "hidden";
  text_box[0].style.zIndex = "1000";
  for (let i = 0; i < scription.length; i++) {
    console.log(scription[i]); //배열로 뽑아서 setInterval로 어쩌구 저쩌구 미래의 나 알아서 잘 해봐라
  }
});
