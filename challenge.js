var seda = 0;
func();


function func() {
  var i;
  var x = document.getElementsByClassName("cup");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  seda++;
  if (seda > x.length) {
    seda = 1
  }    
  x[seda-1].style.display = "block"; 
   
  setTimeout(func, 9500);
}


