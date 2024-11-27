 

const mainContainer = document.querySelector('.main-container');
const signupLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');

signupLink.onclick = () =>{
    mainContainer.classList.add('active');
}
loginLink.onclick = () =>{
    mainContainer.classList.remove('active');
}


// if you want to use javascripts
function typeText(){
    textAnimation.style.animation = "none";
    textAnimation.offsetHeight;
    textAnimation.style.animation = "typing 8s steps(20) s infinite, blink-caret 7s step-end 1s infinite;"
}
