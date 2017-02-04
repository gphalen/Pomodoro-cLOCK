
$(document).ready(function (e) {
var qq;
  var qq2;


  var inCircle=document.getElementById('inside');
  var inCircle2=document.getElementById('inside2');
  
  var jj=0;
  
   
var q;
  
  var number=0;
  var number2=0;
  var paws=false;
  var breakBool=false;
var goBack=false;
  var press=0;
  var ff=0;
  var form = document.getElementById('form');
  var time;
  function res(){
    start=new Date();
       window.clearTimeout(time);
       var tt=window.setTimeout(time,100);
  } 
   
   number=document.getElementById('numbox');
    
    number2=document.getElementById('numbox2');
  var newVar=number.value;
  var newVar2=number2.value;
   var variable;
  var variable2;
  $("#form").submit(function(e) {
    qq=false;
    qq2=false;
if (breakBool==true){
  breakBool=true;
 variable=number.value;
}
  
   press++;
    e.preventDefault();
   if (press==2){
     newVar=number.value;
     newVar2=number2.value;
   }
     
   jj++;
     
  variable=number.value;
    
    //Number for "break"
     variable2 = number2.value;    
   
     
    if (jj>1)
         time.pause();   
    
  clearTimeout(time);
  
   
  

    
   
    var x=true;
  inCircle2.innerHTML=variable+":00";
    
     $worked = $("#worked");
    $circle = $("#inside2");
    $circle2 = $("#inside3");
    $worked2 = $("#worked2");
      $worked3 = $("#worked3");
      $worked4 = $("#worked4");


var per=0;
    
    var why=true;
   var myTimeOut; 
    //function to use in conjunction
    //with "setTimeout
    
    function update() {
       
      

time = window.setTimeout(update,1000);
      
      
      
      
        var myTime = $circle.html();
        var ss = myTime.split(":");
      
      


        var dt = new Date();
        dt.setHours(0);
        dt.setMinutes(ss[0]);
        dt.setSeconds(ss[1]);
      
        var dt2 = new Date(dt.valueOf() - 1000);
        var temp = dt2.toTimeString().split(" ");
        var ts = temp[0].split(":");

        inCircle2.innerHTML=ts[1]+":"+ts[2];
        

  if (inCircle2.innerHTML=="00:00")
    
    per=0;
       
  var x=0;
  
//Increment until graph reaches 100%
  if (per<=100){
    if (breakBool==false)
      
      //Increment graph  "session" variable
 var w=(1/number.value/60)*100;
    else
      //Increment graph using "break"  variable
      var w=(1/number2.value/60)*100;
    
    
    
   per+=w;
   
    $('#load-bar').css({background: "linear-gradient(to right, #800000 "+per+"%,transparent "+per+"%, transparent 100%)"});     
  }
  function cycle(){
       
        if (breakBool==false)
          inCircle.innerHTML="<span style='color:#FF0000'> Session </span>"
        else{
          inCircle.innerHTML="<span style='color:#FF0000'> Break </span>"
         
        }
        //Switch to  "break"  when   "session" gets to 00:00 or 59:59
  if ((inCircle2.innerHTML=="00:00"  && breakBool==true && goBack==false  )|| inCircle2.innerHTML=="59:59"  ){
    
inCircle2.innerHTML=number.value+":00";
    per=0;
    breakBool=false;
   goBack=true;
    
    
}
      
    else if ((inCircle2.innerHTML=="00:00" &&  breakBool==false && goBack==true  )|| inCircle2.innerHTML=="59:59"  ) {
      
        inCircle2.innerHTML=number2.value+":00";
      per=0;
      breakBool=false;
    goBack=true;
  
      
    }
      
        
     }
      
        
       if (ts[2]=="00" && ts[1]=="00"&& breakBool==false ){
         if (press==2){
           inCircle.innerHTML="<span style='color:#FF0000'> Break </span>"
      inCircle2.innerHTML=newVar2+":00";
          var myTime2 = $circle.html();
          
        var ss2 = myTime2.split(":");
        var dt3 = new Date();
        dt3.setHours(0);
        dt3.setMinutes(ss2[0]);
        dt3.setSeconds(ss2[1]);
      
        var dt4 = new Date(dt3.valueOf() - 1000);
        var temp2 = dt4.toTimeString().split(" ");
        var ts2 = temp2[0].split(":");
          
          
breakBool=true;  
         } 
         else{
           inCircle.innerHTML="<span style='color:#FF0000'> Break </span>"
      inCircle2.innerHTML=variable2+":00";
          var myTime2 = $circle.html();
          
        var ss2 = myTime2.split(":");
        var dt3 = new Date();
        dt3.setHours(0);
        dt3.setMinutes(ss2[0]);
        dt3.setSeconds(ss2[1]);
      
        var dt4 = new Date(dt3.valueOf() - 1000);
        var temp2 = dt4.toTimeString().split(" ");
        var ts2 = temp2[0].split(":");
          
          
breakBool=true;    
          }

          }

      cycle();
  
       
          
     
     
      
    }
    
    

   
   
   function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
      
        
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
      
    };

    this.resume = function() {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
}
       var timerChild;
    var ww=0;
   
  document.getElementById("pause").onclick=function paws(){
    
     var h=1000;
     var start;
     if (ww%2==0){
        
       window.clearTimeout(time);
        ww++;
     }
     else if (ww%1==0){
      if (breakBool==false && newVar!="" && qq==false ){
          
        inCircle2.innerHTML=number.value+":00";
         per=0; 
        qq=true;
        }
       
       if (breakBool==true && newVar2!="" && qq2==false ){
          
        inCircle2.innerHTML=number2.value+":00";
         per=0; 
        qq2=true;
        }
       
       
       
        timerChild = new Timer(update, 100);     
       ww--;
     }
     
   }
   
          timerChild = new Timer(update, 100);     


     
  })           
   
});


