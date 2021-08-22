var pics_src=new Array("pics/1.jpg","pics/2.jpg","pics/3.jpg","pics/4.jpg","pics/5.jpg","pics/6.jpg","pics/7.jpg","pics/8.jpg","pics/9.jpg");
var num=0;

function draw(){
  var canvas = document.getElementById('back');
  if (canvas.getContext){
    var ctx=canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(0,0,0,1)";
    ctx.fillRect(350,0,100,700);
    ctx.fillRect(350,800,100,200)
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle="rgba(0,0,0,1)";
    ctx.lineWidth=2.3;
    ctx.moveTo(2200,700);
    ctx.lineTo(0,700);
    ctx.lineTo(200,800);
    ctx.lineTo(2200,800);
    ctx.closePath();
    ctx.stroke();
  }
}

function leftbutton(){
  if(num==0){
    num=8;
  }
  else{
    num--;
  }
  document.getElementById("mypic").src=pics_src[num];
}
function rightbutton(){
  if(num==8){
    num=0;
  }
  else{
    num++;
  }
  document.getElementById("mypic").src=pics_src[num];
}
