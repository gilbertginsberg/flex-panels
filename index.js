const panels = Array.from(document.querySelectorAll('.panel'));

function growPanel(pan) {
  return () => {
    const classes = Array.from(pan.classList);

    if (classes.indexOf('open') === -1) {
      pan.classList.add('open');
    } else {
      pan.classList.remove('open');
    }
  };
}

panels.forEach((panel) => {
  panel.addEventListener('click', growPanel(panel), false);
});
