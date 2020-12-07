function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

//menu
const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', (e)=> {
    e.preventDefault();
    menu.classList.toggle('header__menu--active');
    burger.classList.toggle('header-burger--active');
    document.querySelector('body').classList.toggle('stop-scroll');
})

links.forEach((link)=> {
    link.addEventListener('click', ()=> {
        if(menu.classList.contains('header__menu--active')) {
            menu.classList.remove('header__menu--active');
            burger.classList.remove('header-burger--active');
            document.querySelector('body').classList.remove('stop-scroll')
        }
    });    
})

//accordion
const dropdown = document.querySelectorAll('.accordion__dropdown');
const questions = document.querySelectorAll('.accordion__item');

dropdown.forEach((item)=>item.addEventListener('click',  (e)=> {
    let target = e.target;
    if(target === item) {
        questions.forEach((question)=>question.classList.remove('accordion__item--active'));
        target.parentElement.classList.add('accordion__item--active')
    }
}))


//slider
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');
const slides = document.querySelectorAll('.about__slides img');
let slideIndex = 1;

slides.forEach((item, i)=> {
    item.setAttribute('index', i);
})
showSlide(slideIndex);

function showSlide(index) {
    if (index < 1) {
        slideIndex = slides.length
    } else if (index > slides.length) {
        slideIndex = 1;
    }
    slides.forEach(item => item.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(index) {
    showSlide(slideIndex += index)
}

nextBtn.addEventListener('click', ()=> {
    changeSlide(+1)  
})

prevBtn.addEventListener('click', ()=> {
    changeSlide(-1)    
})
