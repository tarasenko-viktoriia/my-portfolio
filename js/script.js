"use strict"
document.addEventListener("click", function(e){
	const targetElement = e.target
	if(targetElement.closest(".icon-menu")) {
		document.documentElement.classList.toggle("open-menu")
		e.preventDefault()
	}
})
const buttons = document.querySelectorAll(".button-contacts");

// button.addEventListener("click", (e) => {
//     e.preventDefault(); 
//     button.classList.add("animate");
//     setTimeout(() => {
//         button.classList.remove("animate");
//     }, 600);
// });

setInterval(() => {
    buttons.forEach((button) => {
        if (!button.matches(':hover')) {
            button.classList.add("animate")
            setTimeout(() => {
                button.classList.remove("animate")
            }, 2000)
        }
    })
}, 5000)



// const textElement = document.getElementById('typing-text');
// const fullText = textElement.textContent;
// textElement.textContent = ''; 
// const cursor = document.querySelector('.about__text img');

// let index = 0;

// function typeEffect() {
//     if (index < fullText.length) {
//         textElement.textContent += fullText[index];
//         index++;

//         const textWidth = textElement.offsetWidth;
//         cursor.style.left = textWidth + 'px';

//         setTimeout(typeEffect, 20); 
//     } else {
//     }
// }

// typeEffect();

document.addEventListener("DOMContentLoaded", function(){
    const showMoreBtn = document.querySelector(".block-stack__show-more")
    const list= document.querySelector(".block-stack__list")

    if(showMoreBtn && list) {
        showMoreBtn.addEventListener('click', () => {
            list.classList.toggle("show-all")
            showMoreBtn.classList.toggle('rotated')
        })
    }
})


document.querySelectorAll(".block-stack__item").forEach((card) => { 
    const circle = card.querySelector(".circle");

    if (!circle) return;

    let mouseX = 0, mouseY = 0; 
    let circleX = 0, circleY = 0; 
    let isHovered = false;

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        if (!isHovered) {
            isHovered = true;
            circle.style.opacity = "1";
            animateCircle(); 
        }
    });

    card.addEventListener("mouseleave", () => {
        isHovered = false;
        circle.style.opacity = "0";
    });

    function animateCircle() {
        if (!isHovered) return;

        circleX += (mouseX - circleX) * 0.1;
        circleY += (mouseY - circleY) * 0.1;

        circle.style.left = `${circleX}px`;
        circle.style.top = `${circleY}px`;

        requestAnimationFrame(animateCircle);
    }
});