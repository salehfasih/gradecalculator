alert("welcome to my calculator");
function calc(){
var a=parseInt(document.getElementById("webdev").value);
var b=parseInt(document.getElementById("math").value);
var c=parseInt(document.getElementById("comp").value);
var d=parseInt(document.getElementById("phy").value);
var sum=(a+b+c+d);
 var pcen=(sum/400)*100;
 var g="your percentage is "+pcen+"%";
 if(pcen>=80 && pcen<100){
     var pce1="your grade is A++";
     var x= document.getElementById("display").value= g+" "+pce1;
 }
if (pcen>=70 && pcen<80){
   var pce2="your grade is A";
   var x= document.getElementById("display").value= g+" "+pce2;
}
if(pcen>=60 && pcen<70){
   var pce3="your grade is B";
   var x= document.getElementById("display").value= g+" "+pce3;
}
if (pcen>=50 && pcen<60){
    var pce4="your grade is C";
    var x= document.getElementById("display").value= g+" "+pce4;
}
if(pcen>=40 && pcen<50){
    var pce5="your grade is D";
    var x= document.getElementById("display").value= g+"  "+pce5;
}
if(pcen<40){var pce6="you are fail";
    var x= document.getElementById("display").value= g+"  "+pce6;
}





}