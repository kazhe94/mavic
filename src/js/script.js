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
