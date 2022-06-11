const app = {};

app.init = () => {
  console.log('app has been initialized');
  app.addEyeballEventlistener();
};

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

app.init();
