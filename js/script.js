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
        button.classList.add("animate");
        setTimeout(() => {
            button.classList.remove("animate");
        }, 2000);
    });
}, 5000);



const textElement = document.getElementById('typing-text');
const fullText = textElement.textContent;
textElement.textContent = ''; 
const cursor = document.querySelector('.about__text img');

let index = 0;

function typeEffect() {
    if (index < fullText.length) {
        textElement.textContent += fullText[index];
        index++;

        const textWidth = textElement.offsetWidth;
        cursor.style.left = textWidth + 'px';

        setTimeout(typeEffect, 20); 
    } else {
    }
}

typeEffect();