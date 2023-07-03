const slides = document.querySelectorAll('.slide');
const logo = document.querySelector('.logo');
const states = document.querySelectorAll('.state');
const btn_left = document.getElementById('btn-left');
const btn_right = document.getElementById('btn-right');
var color;

// Помечаем первый слайд активным
slides[0].setAttribute('data-active', '');
function firstLoad() {
    // Скрываем все слайды кроме первого
    slides.forEach(function(elem, index) {
    elem.dataset.index = index;
    if (index !== 0) {
        elem.classList.add('slide-hidden');
    } else {
        // Меняем логотип в шапке на цвет 1 слайда
        color = elem.dataset.color;
        logo.classList.add('logo-'+color);
    }
    });
    // Задаем цвет для состояний
    states[0].classList.add('state-active');
    states[0].classList.add('state-active-green');
    states.forEach(function(elem, index) {
        elem.classList.add('state-'+color);
        elem.dataset.index = index;
    });
}
firstLoad();
// Зацикливаем слайдер
setInterval(function() {
    showNextSlide('right');
}, 10000);
// Нажатия на кнопки
btn_left.addEventListener('click', function(e) {
    showNextSlide('left');
});
btn_right.addEventListener('click', function(e) {
    showNextSlide('right');
});

// Нажатия на статусы
states.forEach(function(elem){
    elem.addEventListener('click', function(e) {
        let index = elem.dataset.index;
        showSlideByIndex(index);
    });
});

function showNextSlide(direction) {
    // Находим текущий слайд
    const currentSlide = document.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    // Скрываем текущий слайд
    const slideBg = currentSlide.getElementsByClassName('carousel__background');
    slideBg[0].classList.add('ride-'+direction);

    setTimeout(function() {
        currentSlide.classList.add('slide-hidden');
        currentSlide.removeAttribute('data-active');
        // Расчитываем следующий индекс в зависимости от направления движения
        let nextSlideIndex;
        if (direction === 'left') {
            nextSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
        } else if (direction === 'right') {
            nextSlideIndex = currentSlideIndex + 1 === slides.length ? 0 : currentSlideIndex + 1;
        }
        // Получаем новый слайд
        const nextSlide = document.querySelector(`[data-index="${nextSlideIndex}"]`);
        // Обнуляем предыдущий цвет
        logo.classList.remove('logo-'+color);
        states[currentSlideIndex].classList.remove('state-active');
        states[currentSlideIndex].classList.remove('state-active-'+color);
        states.forEach(function(elem) {
            elem.classList.remove('state-'+color);
        });
        // Получаем цвет
        color = nextSlide.dataset.color;
        // Меняем цвет в лого
        logo.classList.add('logo-'+color);
        // Меняем цвет состояний
        states[nextSlideIndex].classList.add('state-active');
        states[nextSlideIndex].classList.add('state-active-'+color);
        states.forEach(function(elem) {
            elem.classList.add('state-'+color);
        });
        // Показывакм следующий слайд
        nextSlide.classList.remove('slide-hidden');
        nextSlide.setAttribute('data-active', '');

        slideBg[0].classList.remove('ride-'+direction);
    }, 200);   
}

function showSlideByIndex(nextSlideIndex) {
    // Находим текущий слайд
    const currentSlide = document.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    // Скрываем текущий слайд
    currentSlide.classList.add('slide-hidden');
    currentSlide.removeAttribute('data-active');
    
    // Получаем текущий слайд
    const nextSlide = document.querySelector(`[data-index="${nextSlideIndex}"]`);
    // Обнуляем предыдущий цвет
    logo.classList.remove('logo-'+color);
    states[currentSlideIndex].classList.remove('state-active');
    states[currentSlideIndex].classList.remove('state-active-'+color);
    states.forEach(function(elem) {
        elem.classList.remove('state-'+color);
    });
    // Получаем цвет
    color = nextSlide.dataset.color;
    // Меняем цвет в лого
    logo.classList.add('logo-'+color);
    // Меняем цвет состояний
    states[nextSlideIndex].classList.add('state-active');
    states[nextSlideIndex].classList.add('state-active-'+color);
    states.forEach(function(elem) {
        elem.classList.add('state-'+color);
    })
    // Показывакм следующий слайд
    nextSlide.classList.remove('slide-hidden');
    nextSlide.setAttribute('data-active', '');
}

