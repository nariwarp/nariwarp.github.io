var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("portfolioSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 0}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}