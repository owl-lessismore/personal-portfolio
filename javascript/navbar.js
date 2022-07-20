const toggleNavbar = document.getElementsByClassName('fa-bars')[0]
const navbarMenu = document.getElementsByClassName('navbar-links')[0]

toggleNavbar.addEventListener('click',() => {
    navbarMenu.classList.toggle('active')
})


window.addEventListener('click', (event) => {
    if(event.target.id !== toggleNavbar.id && event.target.id !== navbarMenu.id){
        navbarMenu.classList.remove('active')
    }
})



  