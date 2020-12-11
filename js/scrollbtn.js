const bouton = document.getElementById("scrollbtn");

document.addEventListener('scroll', scrolldet);


function scrolldet() {
  console.log("scroll");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    bouton.style.display = "block";
  } else {
    bouton.style.display = "none";
  }
}

function hdp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 