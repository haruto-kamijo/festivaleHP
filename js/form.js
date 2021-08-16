function draw(){
  var canvas = document.getElementById('circle');
  if (canvas.getContext){
    var ctx=canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(400,400,350,0,Math.PI*2,true);
    ctx.fillStyle="rgba(185,225,2,0.8)";
    ctx.fill()
    ctx.beginPath();
    ctx.arc(1300,400,350,0,Math.PI*2,true);
    ctx.fillStyle="rgba(3,177,136,0.9)";
    ctx.fill()
  }
}
