function draw(){
  var canvas = document.getElementById('circle');
  if (canvas.getContext){
    var ctx=canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(180,600,70,0,Math.PI*2,true);
    ctx.fillStyle="rgba(2,148,255,1)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(370,360,330,0,Math.PI*2,true);
    ctx.fillStyle="rgba(185,225,2,0.9)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(330,350,300,0,Math.PI*2,true);
    ctx.fillStyle="rgba(3,177,136,0.9)";
    ctx.fill();
  }
}
