
const hoverTarget = document.getElementById('hover-target');
const buttonContainer = document.getElementById('button-container');

let hoverTimer;

hoverTarget.addEventListener('click', () => {
  buttonContainer.style.display = 'block';
});

hoverTarget.addEventListener('click', () => {
  hoverTimer = setTimeout(() => {
    buttonContainer.style.display = 'none';
  }, 100000); 
});

buttonContainer.addEventListener('click', () => {
  clearTimeout(hoverTimer);
});

buttonContainer.addEventListener('click', () => {
  buttonContainer.style.display = 'none';
});
document.querySelector('.hover-target').addEventListener('click', function() {
    this.style.display = 'none';
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('hover-target')) {
      document.querySelector('.hover-target').style.display = 'block';
    }
  });