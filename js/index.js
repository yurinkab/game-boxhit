
var coun = 10;
var count = document.querySelector(".counter");
var hit =  document.querySelector('.counterHit');
var high =  document.querySelector('.highscores');
if (localStorage.score === 0 || localStorage.score === undefined) {

} else {
high.innerHTML = "Your High Score Is :" + localStorage.score;
}
shoot = new Audio("./shoot.wav");
win = new Audio("./win.wav");
loose = new Audio("./lose.wav");


var hitcount = 0;
var s = document.getElementById("main");
var c = document.querySelector(".circ");
function range(min,max){
  return Math.floor(Math.random() * (max-min) + min);
}
var math1 = range(101,200);
var math2 = range(1,100);
var math3 = range(101,200);
var math4 = range(1,100);

s.addEventListener("click",function(e){
  //What Happens after Shooting...
shoot.play();

  console.log(math1,math2,math3,math4)

  if(e.clientX <= math1 && e.clientX >= math2 && e.clientY <= math3 && e.clientY >= math4 ) {
    console.log(math1,math2,math3,math4)
    console.log("you found the spot!");
    var x = e.clientX;
    var y = e.clientY;
    var laser = document.createElement("div");
		  laser.className = "laserblood";
		  laser.setAttribute("style","top:"+y+"px;left:"+x+"px;")
		  s.appendChild(laser);
      hitcount++;
    hit.innerHTML = "HIS BEEN HIT " + hitcount + " TIMES!"


  } else {
    coun--;
    count.innerHTML = "Shots Left: " + coun;
    console.log("keep on looking!")
    var x = e.clientX;
    var y = e.clientY;
    var laser = document.createElement("div");
		  laser.className = "laser";
		  laser.setAttribute("style","top:"+y+"px;left:"+x+"px;")
		  s.appendChild(laser);
  if (coun === 0){
    s.style.opacity = "1";
    count.innerHTML = "GAME OVER";
    s.style.pointerEvents='none';
    var box = document.createElement("div");
      laser.className = "box";

      laser.setAttribute("style","top:"+math4+"px;left:"+math2+"px;width:"+math1+"px;height:"+math3+"px;")
      s.appendChild(box);

      if(localStorage.score < hitcount || localStorage.score === 0 || localStorage.score === undefined){
        localStorage.setItem("score", hitcount);
        win.play();
        high.innerHTML = "Your New High Score Is: <span style='color:red'>" + localStorage.score + "</span>";

      } else {
      high.innerHTML = "Your High Score Is Still: " + localStorage.score;
      loose.play();

}
  }
  }
});
