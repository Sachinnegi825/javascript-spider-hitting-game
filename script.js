let spider=document.getElementById("spider");
let hitCount=0;
let isGameStarted=false;
let timeCount=15;
let score1=0;
let score2=0;
function startGame(){
    document.getElementById("spider").style.display="block";
    document.getElementById("over").style.display="none";
    hitCount=0;
 
     isGameStarted=true;
    let pos=setInterval(()=>{
        let i=Math.floor(Math.random()*300) + (-150);
        let j=Math.floor(Math.random()*300) + (-100);

        spider.style.left=i+"px";
        spider.style.top=j+"px";
  },1300)

let time=setInterval(()=>{
    timeCount--;
    document.getElementById("timer").innerText=timeCount +"s";
},1000)


  setTimeout(()=>{
     clearTimeout(pos);
     clearTimeout(time);
    isGameStarted=false;
    timeCount=15;
    document.getElementById("timer").innerText=timeCount +"s";
    document.getElementById("over").style.display="block";
    document.getElementById("spider").style.display="none";
  },15000)
}



  


function hitSpider(){
if(isGameStarted)
{
    hitCount++;
    document.getElementById('totalhit').innerText=hitCount;
}
   
}
      
