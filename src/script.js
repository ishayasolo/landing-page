// console.log('script.js is running...');

function openNav() {
  let navContent = document.getElementById('navContent');
  let body = document.getElementById('body');

  navContent.style.width = '100%';
  body.style.overflow = 'hidden';
}

function closeNav() {
  let navContent = document.getElementById('navContent');
  let body = document.getElementById('body');

  navContent.style.width = '0';
  body.style.overflow = 'auto';
}