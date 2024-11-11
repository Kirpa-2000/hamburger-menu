const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const mainContent = document.querySelector('.main-content')
const gotoTop = document.querySelector(".go-to-top")

hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation()
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})

gotoTop.addEventListener('click',()=>{
    mainContent.scrollTo(0,0)
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})
