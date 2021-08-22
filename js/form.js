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
