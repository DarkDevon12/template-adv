let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuContent.classList.toggle('on', show);
  show = !show;
})

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

window.onload = function () {
  document.getElementById('popup').style.display = 'flex';
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  // F12
  if (e.keyCode === 123) {
    e.preventDefault();
  }
  // Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();
  }
  // Ctrl + Shift + C
  if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
    e.preventDefault();
  }
  // Ctrl + U (ver código-fonte)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }
});

