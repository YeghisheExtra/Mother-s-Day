  document.querySelectorAll('.hideAfter').forEach(el => {
    el.addEventListener('animationend', () => {
      setTimeout(() => {
        el.style.display = 'none';
      }, 300);
    });
  });


  window.onload = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 6000); // wait 1 second before scrolling
  };

  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
