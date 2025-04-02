"use strict"
document.addEventListener("DOMContentLoaded", function () {
   	slidersInit();
});
document.addEventListener("click", function(e){
	const targetElement = e.target
	if(targetElement.closest(".icon-menu")) {
		document.documentElement.classList.toggle("open-menu")
		e.preventDefault()
	}
})

function slidersInit() {
    const sliderListFiveItems = new Swiper('.items-slider__list', {
        slidesPerGroup: 2,
        slidesPerView: 2,
        navigation: {
            prevEl: '.slider-controls__arrow--left',
            nextEl: '.slider-controls__arrow--right',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                centeredSlides: true, 
            },
            768: {
                slidesPerView: 1.3, 
                slidesPerGroup: 1,
                centeredSlides: false, 
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }
    });
}
const leftArrow = document.querySelector('.slider-controls__arrow--left');
const rightArrow = document.querySelector('.slider-controls__arrow--right');

leftArrow.addEventListener('mouseenter', () => {
	leftArrow.querySelector('img').src = 'img/slider-arrow-white.svg';
});
leftArrow.addEventListener('mouseleave', () => {
	leftArrow.querySelector('img').src = 'img/slider-arrow.svg';
});

rightArrow.addEventListener('mouseenter', () => {
	rightArrow.querySelector('img').src = 'img/slider-arrow-white.svg';
});
rightArrow.addEventListener('mouseleave', () => {
	rightArrow.querySelector('img').src = 'img/slider-arrow.svg';
});

// let currentSlide = 0;
// const totalSlides = 2; 

// function updateSliderButtons() {
//     if (currentSlide === 0) {
//         leftArrow.classList.add('disabled'); 
//     } else {
//         leftArrow.classList.remove('disabled'); 
//     }

//     if (currentSlide === totalSlides - 1) {
//         rightArrow.classList.add('disabled'); 
//     } else {
//         rightArrow.classList.remove('disabled'); 
//     }
// }

// leftArrow.addEventListener('click', () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateSliderButtons(); 
//     }
// });

// rightArrow.addEventListener('click', () => {
//     if (currentSlide < totalSlides - 1) {
//         currentSlide++;
//         updateSliderButtons(); 
//     }
// });

// updateSliderButtons();