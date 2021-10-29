//Header fixed

window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;
  
    if (window.innerWidth > 991) {
      if (docScrollTop > 100) {
        document.querySelector("header").classList.add("fixed");
      } else {
        document.querySelector("header").classList.remove("fixed");
      }
    }
  }
  
  //navbar links
  
  const navbar = document.querySelector(".navbar");
  var a = navbar.querySelectorAll("a")
  
  a.forEach(function (element) {
    element.addEventListener("click", function () {
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("active")
      }
      this.classList.add("active");
      document.querySelector(".navbar").classList.toggle("show");
    })
  })
  
  //Hamburger
  
  const hamBurger = document.querySelector(".hamburger");
  
  hamBurger.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show");
  })


var i = 0;
var txt = 'We are Gikpad Technologies.';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("gikpad").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}










var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(1000)
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
