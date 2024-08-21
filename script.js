let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: '0s',  
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

var reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
      revealableContainers[i].style.transitionProperty = animation.transitionProperty;
      revealableContainers[i].style.transitionDuration = animation.transitionDuration;
      revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
      revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
};

var reduceMotion = () => {
  // Set transition properties to instantly remove motion
  animation.transitionDuration = '0s';
  animation.transitionDelay = '0s';

  // Optionally toggle a class to handle other motion-related styles
  document.body.classList.add('reduce-motion');

  reveal();  // Reapply reveal logic with no motion
};

// Add event listener to the button
document.getElementById('reduce-motion-button').addEventListener('click', reduceMotion);

window.addEventListener('scroll', reveal);

// Initial call to reveal elements when the page loads
window.addEventListener('load', reveal);
 