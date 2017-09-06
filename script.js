window.onload = function(){
var hand=document.querySelector('.hand');
var minuteHand=document.querySelector('.minuteHand');
var hourHand=document.querySelector('.hourHand');
console.log(hand);
var start=Date.now();
var what=new Date();
var year=what.getFullYear();
var month=what.getMonth();
var date=what.getDate();
var DateStart=new Date(year,month,date,0,0,0,0);
var angle=start-DateStart;
    console.log(angle);
    var secIntial=(angle*6)/1000;
    var minuteInitial=(angle/10000);
    var hourInitial=angle/120000;
    
    
     hand.style.transform=`rotate(${secIntial}deg)`;
     minuteHand.style.transform=`rotate(${minuteInitial}deg)`;
     hourHand.style.transform=`rotate(${hourInitial}deg)`;
 var clear=setInterval(function(){
     var timePassed=Date.now()-start;
     console.log(timePassed/1000);
     hand.style.transform=`rotate(${secIntial+(timePassed*6)/1000}deg)`;
     minuteHand.style.transform=`rotate(${minuteInitial+(timePassed/10000)}deg)`;
     hourHand.style.transform=`rotate(${hourInitial+(timePassed/120000)})`;
 },1000);
}



