const links = [...document.querySelectorAll('.tags__btn')];

links.forEach(function(link, i){
  if(i > 4) {
    link.classList.add('hide');
  }

  linkMore = document.querySelector('.tags__more');

  linkMore.addEventListener('click', () => {
    link.classList.remove('hide');
    linkMore.style.display="none";
  })

})

console.log(links);
