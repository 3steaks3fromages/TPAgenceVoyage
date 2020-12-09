bouton = document.getElementById("scrollbtn");

window.onscroll = function() {scrolldet()};

function scrolldet() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function hdp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 