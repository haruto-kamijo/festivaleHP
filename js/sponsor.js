function draw(){
  var canvas1 = document.getElementById('circle1');
  if (canvas1.getContext){
    var ctx=canvas1.getContext('2d');
    ctx.beginPath();
    ctx.arc(100,100,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  var canvas2 = document.getElementById('circle2');
  if (canvas2.getContext){
    var ctx=canvas2.getContext('2d');
    ctx.beginPath();
    ctx.arc(100,210,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  var canvas3 = document.getElementById('circle3');
  if (canvas3.getContext){
    var ctx=canvas3.getContext('2d');
    ctx.beginPath();
    ctx.arc(100,320,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
  var canvas4 = document.getElementById('circle4');
  if (canvas4.getContext){
    var ctx=canvas4.getContext('2d');
    ctx.beginPath();
    ctx.arc(210,100,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
  var canvas5 = document.getElementById('circle5');
  if (canvas5.getContext){
    var ctx=canvas5.getContext('2d');
    ctx.beginPath();
    ctx.arc(210,210,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
  var canvas6 = document.getElementById('circle6');
  if (canvas6.getContext){
    var ctx=canvas6.getContext('2d');
    ctx.beginPath();
    ctx.arc(210,320,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
  var canvas7 = document.getElementById('circle7');
  if (canvas7.getContext){
    var ctx=canvas7.getContext('2d');
    ctx.beginPath();
    ctx.arc(320,100,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
  var canvas8 = document.getElementById('circle8');
  if (canvas8.getContext){
    var ctx=canvas8.getContext('2d');
    ctx.beginPath();
    ctx.arc(320,210,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
  var canvas9 = document.getElementById('circle9');
  if (canvas9.getContext){
    var ctx=canvas9.getContext('2d');
    ctx.beginPath();
    ctx.arc(320,320,100,0,Math.PI*2,true);
    ctx.fillStyle="rgba(255,255,255,1)";
    ctx.fill();
  }
  }
}
