const panels = Array.from(document.querySelectorAll('.panel'));

function growPanel(pan) {
  return () => {
    const classes = Array.from(pan.classList);

    if (classes.indexOf('open') === -1) {
      pan.classList.add('open');

      // Tranforms p:nth-child(odd) to show text
      document.styleSheets[0].addRule('.open p:nth-child(odd)', 'transform: translateY(0px)');
    } else {
      pan.classList.remove('open');

      // Tranforms p:nth-child(odd) to hide text
      document.styleSheets[0].deleteRule(16);
    }
  };
}

panels.forEach((panel) => {
  panel.addEventListener('click', growPanel(panel), false);
});
