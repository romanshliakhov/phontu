const links = [...document.querySelectorAll('.tags__btn')];
const linkMore = document.querySelector('.tags__more');

links.forEach(function(link, i){
  if(i > 4) {
    link.classList.add('hide');

    linkMore.addEventListener('click', () => {
      link.classList.remove('hide');
      linkMore.style.opacity="0";
      linkMore.style.visibility="hidden";
    })
  } else if (i < 4) {
    // linkMore.style.display="none";
  }
})
