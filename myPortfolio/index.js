const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))

window.addEventListener('click', e => {
    if (navMenu.classList.contains('active') && hamburger.classList.contains('active') && e.target != navMenu && e.target != hamburger) {
        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')
    }
 })



 const prev = document.querySelector('.prev');
 const next = document.querySelector('.next');
 const images = document.querySelector('.carousel').children;
 const totalImages = images.length;
 let index = 0;
 
 prev.addEventListener('click', () => {
   nextImage('next');
 })
 
 next.addEventListener('click', () => {
   nextImage('prev');
 })
 
 function nextImage(direction) {
   if(direction == 'next') {
     index++;
     if(index == totalImages) {
       index = 0;
     }
   } else {
     if(index == 0) {
       index = totalImages - 1;
     } else {
       index--;
     }
   }
 
   for(let i = 0; i < images.length; i++) {
     images[i].classList.remove('main');
   }
   images[index].classList.add('main');
 }
 
