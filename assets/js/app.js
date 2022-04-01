document.addEventListener("DOMContentLoaded", () => {

    let menuBtn = document.querySelector('.menu-btn')
    let animationEl = document.getElementById('bubbles')
    let headerEl = document.getElementById('main-header')
    let specialsList = document.getElementById('daily-specials')

    // Header changes on scroll position
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        if (window.scrollY <= 770) {
            // console.log('770');
            menuBtn.classList.remove('menu-dark')
            headerEl.classList.remove('scroll-bg')
            animationEl.classList.remove('d-none')
        }
        if (window.scrollY >= 770) {
            // console.log('770');
            menuBtn.classList.add('menu-dark')
            headerEl.classList.add('scroll-bg')
            animationEl.classList.add('d-none')
        }
    })

    const renderSpecials = () => {

    }

});