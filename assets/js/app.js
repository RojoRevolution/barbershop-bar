document.addEventListener("DOMContentLoaded", () => {

    let menuBtn = document.querySelector('.menu-btn')

    window.addEventListener('scroll', () => {

        // console.log(window.scrollY)
        if (window.scrollY <= 770) {
            console.log('770');
            menuBtn.classList.remove('menu-dark')
        }
        if (window.scrollY >= 770) {
            console.log('770');
            menuBtn.classList.add('menu-dark')
        }
    })

});