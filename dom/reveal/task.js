window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
  
    reveals.forEach(reveal => {
      const revealTop = reveal.getBoundingClientRect().top;
      const revealBottom = reveal.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
  
      if (revealTop < windowHeight && revealBottom >= 0) {
        reveal.classList.add('reveal_active');
      } else {
        reveal.classList.remove('reveal_active');
      }
    });
  });
  