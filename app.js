let btn = document.querySelector('button');
let nav = document.querySelector('nav');
let i = document.querySelector('#icon');

i.setAttribute('class', 'fas fa-bars')

btn.addEventListener('click', ()=> {
    if(btn.classList.contains('active')){
        i.setAttribute('class', 'fas fa-bars')
    } else {
        i.setAttribute('class', 'fas fa-times')
    }
    
    btn.classList.toggle('active');
    nav.classList.toggle('active')
})


