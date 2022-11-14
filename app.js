





const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#nav')
const tlo = document.querySelector('#tlo')
const iks = document.querySelector('#iks')

const toggler = function () {
    if (menu.classList.contains('toggle')) {
        menu.classList.remove('toggle')
        tlo.style.display = 'block';
        iks.style.display = 'block';
        hamburger.style.display = 'none'
    } else {
        menu.classList.add('toggle')
        tlo.style.display = 'none';
        iks.style.display = 'none';
        hamburger.style.display = 'block'
    }
}

hamburger.addEventListener('click', toggler);
iks.addEventListener('click', toggler);

const media = window.matchMedia('(max-width: 375px)')

if (media.matches) {
    console.log('pasi!');
    menu.classList.add('toggle');


} else {

    console.log('tez');
    menu.classList.remove('toggle');



}

