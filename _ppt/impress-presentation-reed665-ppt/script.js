// disable next slide on tab
document.addEventListener('keyup', event => {
  if (event.keyCode === 9) {
    event.stopImmediatePropagation();
  }
})

impress().init();

hljs.initHighlightingOnLoad();
