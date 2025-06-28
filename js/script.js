

// Function to real time clock

function goodDay() {
const d = new Date();
  document.getElementById("demo").innerHTML = d;
}
setInterval(goodDay, 1000);


function myFunction(){
   mywindow = open('readxml.html','_blank','width=490,height=300,left=100,top=100');
}
function closeWin(){
  mywindow.close();
}  
setInterval(closeWin,8000);

