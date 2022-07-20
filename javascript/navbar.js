const toggleNavbar = document.getElementsByClassName('fa-bars')[0]
const navbarMenu = document.getElementsByClassName('navbar-links')[0]


toggleNavbar.addEventListener('click',() => {
    navbarMenu.classList.toggle('active')
})



document.addEventListener("click", () => {
    if (navbarMenu.classList.contains("active")) {
        navbarMenu.classList.remove("active")
        }
}, true);
  
  