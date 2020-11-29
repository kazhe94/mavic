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


const dropdown = document.querySelectorAll('.accordion__dropdown');
const questions = document.querySelectorAll('.accordion__item');

dropdown.forEach((item)=>item.addEventListener('click',  (e)=> {
    let target = e.target;
    if(target === item) {
        questions.forEach((question)=>question.classList.remove('accordion__item--active'));
        target.parentElement.classList.add('accordion__item--active')
    }
}))