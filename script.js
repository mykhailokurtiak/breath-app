const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();
setInterval(breathAnimation, totalTime);

function breathAnimation() {
  text.innerText = 'Breath In!';
  container.className = 'container grow';
  text.style.color = '#fff';

  setTimeout(() => {
    text.innerText = 'HOLD';
    text.style.color = '#ff9966';

    setTimeout(() => {
      text.innerText = 'Breath Out!';
      container.className = 'container shrink';
      text.style.color = '#86d1de';
    }, holdTime);
  }, breathTime);
}
