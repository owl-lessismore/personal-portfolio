const burgerTop = document.querySelector('[data-burger-top]')
const burgerMiddle = document.querySelector('[data-burger-middle]')
const burgerBottom = document.querySelector('[data-burger-bottom]')

let skillsCarousel = tns({
    "container": ".skills-slider",
    "items": 1,
    "speed": 400,
    "nav": false,
    "controls": false,
    "mouseDrag": true
})

burgerTop.addEventListener('click', () => {
    burgerTop.classList.toggle('burger-top')

    if(burgerTop.classList.contains('burger-top')) {
        burgerTop.setAttribute('src','/assets/burgerColoredTop.png')
        skillsCarousel.goTo(1)
    } else {
        burgerTop.setAttribute('src','/assets/burgerDrawingTop.png')
        skillsCarousel.goTo(0)
    }
})

burgerMiddle.addEventListener('click', () => {
    burgerMiddle.classList.toggle('burger-middle')

    if(burgerMiddle.classList.contains('burger-middle')) {
        burgerMiddle.setAttribute('src','/assets/burgerColoredMiddle.png')
        skillsCarousel.goTo(2)  
    } else {
        burgerMiddle.setAttribute('src','/assets/burgerDrawingMiddle.png')  
        skillsCarousel.goTo(0)
    }
})

burgerBottom.addEventListener('click', () => {
    burgerBottom.classList.toggle('burger-bottom')
    
    if(burgerBottom.classList.contains('burger-bottom')) {
        burgerBottom.setAttribute('src','/assets/burgerColoredBottom.png')
        skillsCarousel.goTo(3)
    } else {
        burgerBottom.setAttribute('src','/assets/burgerDrawingBottom.png') 
        skillsCarousel.goTo(0)  
    }
})

