const stickyEl = document.querySelector('.sticky__links');

// const addCustomClass = function(el, customClass) {
//   el.classList.add(`${customClass}`);
// }

window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 1500) {
    stickyEl.classList.add('hide');
  } else {
    stickyEl.classList.remove('hide');
  }
}





