const textAnimation = document.querySelector('.change-text')

var typed = new Typed(textAnimation, {
    strings: ['Software Developer..', 'Software Engineer..', 'Fullstack Developer..'],
    loop: true,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 3000,
    cursorChar: '.'
})