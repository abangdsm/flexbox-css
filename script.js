const btnToogle = document.querySelector('.btn-mobile input');
const nav = document.querySelector('nav ul');

btnToogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});
