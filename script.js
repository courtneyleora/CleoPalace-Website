const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - window.innerHeight / 2 &&
        scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});