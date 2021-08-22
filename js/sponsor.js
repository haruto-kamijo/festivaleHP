function draw(){
  var canvas = document.getElementById('back');
  if (canvas.getContext){
    var ctx=canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(0,0,0,1)";
    ctx.fillRect(340,0,100,692);
    ctx.fillRect(340,792,100,200)
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle="rgba(0,0,0,1)";
    ctx.lineWidth=2.3;
    ctx.moveTo(2200,692);
    ctx.lineTo(0,692);
    ctx.lineTo(200,792);
    ctx.lineTo(2200,792);
    ctx.closePath();
    ctx.stroke();
  }

  var canvas1 = document.getElementById('circle1');
  if (canvas1.getContext){
    var ctx=canvas1.getContext('2d');
    ctx.beginPath();
    //ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(255,0,255,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    //ctx.fill();
    ctx.stroke();
  }

  var canvas2 = document.getElementById('circle2');
  if (canvas2.getContext){
    var ctx=canvas2.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(255,255,0,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas3 = document.getElementById('circle3');
  if (canvas3.getContext){
    var ctx=canvas3.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(0,255,255,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas4 = document.getElementById('circle4');
  if (canvas4.getContext){
    var ctx=canvas4.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(255,0,0,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas5 = document.getElementById('circle5');
  if (canvas5.getContext){
    var ctx=canvas5.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(0,255,0,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas6 = document.getElementById('circle6');
  if (canvas6.getContext){
    var ctx=canvas6.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(0,0,255,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas7 = document.getElementById('circle7');
  if (canvas7.getContext){
    var ctx=canvas7.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(0,0,0,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas8 = document.getElementById('circle8');
  if (canvas8.getContext){
    var ctx=canvas8.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(127,255,0,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }

  var canvas9 = document.getElementById('circle9');
  if (canvas9.getContext){
    var ctx=canvas9.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(240,255,240,0.3)";
    ctx.strokeStyle="rgba(255,127,127,1)";
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fill();
    ctx.stroke();
  }
}
