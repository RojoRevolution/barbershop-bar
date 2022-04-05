document.addEventListener("DOMContentLoaded", () => {


    const dailySpecialsBG = [
        'url(./assets/images/daily/sunday.png)',
        'url(./assets/images/daily/monday.png)',
        'url(./assets/images/daily/tuesday.png)',
        'url(./assets/images/daily/wednesday.png)',
        'url(./assets/images/daily/thursday.png)',
        'url(./assets/images/daily/friday.png)',
        'url(./assets/images/daily/saturday.png)',
    ]

    const menuBtn = document.querySelector('.menu-btn')
    const animationEl = document.getElementById('bubbles')
    const headerEl = document.getElementById('main-header')
    const specialsList = document.getElementsByClassName('special')
    const specialsLI = document.querySelectorAll('special')

    if (window.scrollY >= 770) {
        menuBtn.classList.add('menu-dark')
        headerEl.classList.add('scroll-bg')
        animationEl.classList.add('d-none')
    }

    // Header changes on scroll position
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        if (window.scrollY <= 770) {
            menuBtn.classList.remove('menu-dark')
            headerEl.classList.remove('scroll-bg')
            animationEl.classList.remove('d-none')
        }
        if (window.scrollY >= 770) {
            menuBtn.classList.add('menu-dark')
            headerEl.classList.add('scroll-bg')
            animationEl.classList.add('d-none')
        }
    })

    const renderSpecials = () => {
        for (let i = 0; i < specialsList.length; i++) {
            specialsList[i].style.backgroundImage = dailySpecialsBG[i];
        }
    }

    renderSpecials()

});