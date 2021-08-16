var pics_src=new Array("pics/1.jpg","pics/2.jpg","pics/3.jpg","pics/4.jpg","pics/5.jpg","pics/6.jpg","pics/7.jpg","pics/8.jpg","pics/9.jpg");
var num=0;

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
