const heroImg = document.getElementsByClassName('hero-img')[0];

if(window.innerWidth <= 576) {
    heroImg.src = './images/hero-mobile.jpg'
}

const btn = document.getElementById('btn');
const email = document.getElementById('input-mail');
const error = document.getElementsByClassName('error')[0];


btn.addEventListener('click', myFunc);

function myFunc() {
    if(email.value.endsWith('@gmail.com')){
        email.value = '';
        btn.classList.remove('show');
        error.style.display = 'none';
        alert('Email successfully submitted');
    } 
    else {
        btn.classList.add('show');
        email.style.border = '2px solid red';
        error.style.display = 'block';
    }
}