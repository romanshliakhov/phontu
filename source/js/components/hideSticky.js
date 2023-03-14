const breakpoint = 991;

const stickyEl = document.querySelector('.sticky__links');

const addCustomClass = function(el, customClass) {
  el.classList.add(`${customClass}`);
}

window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 3000) {
    stickyEl.classList.add('hide');
  } else {
    stickyEl.classList.remove('hide');
  }
}




const desktopeInit = () => {
  let containerWidth = document.documentElement.clientWidth;

  if (containerWidth >= breakpoint) {

  }
};


window.addEventListener("DOMContentLoaded", () => {
  desktopeInit();
});

window.addEventListener("resize", () => {
  desktopeInit();
});
