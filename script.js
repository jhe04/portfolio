const app = {};

app.init = () => {
  app.addEyeballEventlistener();
  app.addNavEventListener();
  app.mobileMenuEventListener();
  app.submitForm();
};

//   credit to "Online Tutorials"on youtube for the moving eye animation
//  https://www.youtube.com/watch?v=IFNUXlqtROc

app.eyeball = (event) => {
  const eye = document.querySelectorAll('.eye');
  eye.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = 'rotate(' + rotation + 'deg)';
  });
};

app.addEyeballEventlistener = () => {
  document.querySelector('body').addEventListener('mousemove', app.eyeball);
};

// Speech bubble
app.openSpeechBubble = function () {
  document.querySelector(`.text-${this.id}`).classList.toggle('hidden');
  document;
};

app.closeSpeechBubble = function () {
  document.querySelector(`.text-${this.id}`).classList.toggle('hidden');
};

app.addNavEventListener = () => {
  const navBarLinks = document.querySelectorAll('nav a');
  navBarLinks.forEach((link) => {
    link.addEventListener('mouseover', app.openSpeechBubble);
    link.addEventListener('focusin', app.openSpeechBubble);
    link.addEventListener('mouseout', app.closeSpeechBubble);
    link.addEventListener('focusout', app.closeSpeechBubble);
  });
};

//mobile menu
app.mobileMenuEventListener = () => {
  const menuIcon = document.querySelector('.hamburger-menu');
  const navBar = document.querySelector('.desktop-nav');
  const navLink = document.querySelectorAll('.nav-link');
  menuIcon.addEventListener('click', function () {
    navBar.classList.toggle('reveal-menu');
  });
  navLink.forEach((navLink) => {
    navLink.addEventListener('click', function () {
      navBar.classList.toggle('reveal-menu');
    });
  });
};

//contact form submission - clear inputs
app.submitForm = () => {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  };
};

app.init();
AOS.init();
