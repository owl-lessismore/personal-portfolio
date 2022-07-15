const burgerTop = document.querySelector('[data-burger-top]')
const burgerMiddle = document.querySelector('[data-burger-middle]')
const burgerBottom = document.querySelector('[data-burger-bottom]')

burgerTop.addEventListener('click', () => {

    burgerTop.classList.toggle('burger-top')

    if(burgerTop.classList.contains('burger-top')) {
        burgerTop.setAttribute('src','/assets/burgerColoredTop.png')
    } else {
        burgerTop.setAttribute('src','/assets/burgerDrawingTop.png')   
    }
})

burgerMiddle.addEventListener('click', () => {

    burgerMiddle.classList.toggle('burger-middle')

    if(burgerMiddle.classList.contains('burger-middle')) {
        burgerMiddle.setAttribute('src','/assets/burgerColoredMiddle.png')
    } else {
        burgerMiddle.setAttribute('src','/assets/burgerDrawingMiddle.png')   
    }
})

burgerBottom.addEventListener('click', () => {

    burgerBottom.classList.toggle('burger-bottom')

    if(burgerBottom.classList.contains('burger-bottom')) {
        burgerBottom.setAttribute('src','/assets/burgerColoredBottom.png')
    } else {
        burgerBottom.setAttribute('src','/assets/burgerDrawingBottom.png')   
    }
})