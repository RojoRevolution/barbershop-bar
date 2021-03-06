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

    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.onpage-nav');
    const animationEl = document.getElementById('bubbles');
    const headerEl = document.getElementById('main-header');
    const sideMenu = document.getElementById('side-menu');
    const specialsList = document.getElementsByClassName('special');
    const backToTopBtn = document.querySelector('.pointer-up');
    const backToTopMessage = document.querySelector('.message');

    if (window.scrollY >= 770) {
        menuBtn.classList.add('menu-dark');
        headerEl.classList.add('scroll-bg');
        animationEl.classList.add('d-none');
    }

    // Header changes on scroll position
    window.addEventListener('scroll', () => {
        // console.log(window.scrollY)
        if (window.scrollY <= 770) {
            menuBtn.classList.remove('menu-dark');
            headerEl.classList.remove('scroll-bg');
            animationEl.classList.remove('d-none');
        }
        if (window.scrollY >= 770) {
            menuBtn.classList.add('menu-dark');
            headerEl.classList.add('scroll-bg');
            animationEl.classList.add('d-none');
        }
    })

    const renderSpecials = () => {
        for (let i = 0; i < specialsList.length; i++) {
            specialsList[i].style.backgroundImage = dailySpecialsBG[i];
        }
    }

    const openMenu = () => {
        sideMenu.setAttribute('status', 'open');
        sideMenu.classList.remove('closed-pos');
        sideMenu.classList.remove('d-none');
        sideMenu.classList.add('menu-open');
        sideMenu.classList.add('open-pos');
    }

    const closeMenu = () => {
        sideMenu.setAttribute('status', 'closed');
        sideMenu.classList.remove('menu-open');
        sideMenu.classList.remove('open-pos');
        sideMenu.classList.add('menu-close');
        sideMenu.classList.add('closed-pos');
        setTimeout(() => {
            sideMenu.classList.add('d-none');
            sideMenu.classList.remove('menu-close');
        }, 500);
    }


    renderSpecials()

    menuBtn.addEventListener('click', () => {
        openMenu();
    })

    closeBtn.addEventListener('click', () => {
        closeMenu();
    });

    // Event Listener for all Menu Nav Links
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            closeMenu();
        })
    }

    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopMessage.classList.remove('d-none')
    })

    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopMessage.classList.add('d-none')
    })

});