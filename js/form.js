function draw(){
  var canvas = document.getElementById('square');
  if (canvas.getContext){
    var ctx=canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(0,0,700,750);
    ctx.fill()
  }
}
