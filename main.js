'use strict';

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(ev) {
  ev.propertyName.includes('flex') ? this.classList.toggle('open-active') : false;
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));
