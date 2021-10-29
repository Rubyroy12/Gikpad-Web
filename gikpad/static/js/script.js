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
