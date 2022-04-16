window.addEventListener('DOMContentLoaded', (event) => {


    let introBG = document.querySelector('.backgrounds');
    let overlayDiv = document.querySelector('.overlay');
    let scrollImg = document.querySelector('.img-go');

    const bgOne = document.getElementById('slider1');
    const bgTwo = document.getElementById('slider2');
    const bgThree = document.getElementById('slider3');
    const bgFour = document.getElementById('slider4');

    let desktopBG = [
        "url('./assets/images/intro/intro_image_001.jpg')",
        "url('./assets/images/intro/intro_image_002.jpg')",
        "url('./assets/images/intro/intro_image_003.jpg')",
        "url('./assets/images/intro/intro_image_004.jpg')"
    ]

    let tabletBG = [
        "url('./assets/images/intro/intro_image_001@768.jpg')",
        "url('./assets/images/intro/intro_image_002@768.jpg')",
        "url('./assets/images/intro/intro_image_003@768.jpg')",
        "url('./assets/images/intro/intro_image_004@768.jpg')"
    ]

    let mobileBG = [
        "url('./assets/images/intro/intro_image_001@500.jpg')",
        "url('./assets/images/intro/intro_image_002@500.jpg')",
        "url('./assets/images/intro/intro_image_003@500.jpg')",
        "url('./assets/images/intro/intro_image_004@500.jpg')"
    ]

    let intervalID = 1;
    let windowSize;


    // const fadeOut = async () => {
    //     console.log('Fade Out')
    //     overlayDiv.classList.add('fade-out')
    // }

    // const fadeIn = async () => {
    //     console.log('Fade In')
    //     overlayDiv.classList.add('fade-in')
    // }

    // const transition = () => {
    //     fadeOut()
    //         .then(stuff => () {
    //             changeBG();
    //         }
    // }


    // @ Fullscreen
    const changeBG = () => {
        console.log('Change BG')
        console.log('Interval ID = ', intervalID)
        // if (overlayDiv.classList.contains('fade-in')) {
        //     overlayDiv.classList.remove('fade-in')
        // }

        if (bgOne.classList.contains("fade-in")) {
            bgOne.classList.remove("fade-in");
        }

        switch (intervalID) {
            case 1:
                console.log('Case 1')
                intervalID = 2;
                setTimeout(() => {
                    // introBG.style.backgroundImage = desktopBG[1]
                    // overlayDiv.classList.remove('fade-out')
                    bgOne.classList.add('fade-out');
                    // bgTwo.classList.add('fade-in');
                }, 3000)
                break;
            case 2:
                intervalID = 3;
                // introBG.style.backgroundImage = desktopBG[2]
                // overlayDiv.classList.add('fade-out')
                setTimeout(() => {
                    // introBG.style.backgroundImage = desktopBG[2]
                    // overlayDiv.classList.remove('fade-out')
                    bgTwo.classList.add('fade-out');
                    // bgTwo.classList.add('fade-in');
                }, 3000)
                break;
            case 3:
                intervalID = 1;
                // introBG.style.backgroundImage = desktopBG[3]
                // overlayDiv.classList.add('fade-out')
                setTimeout(() => {
                    // introBG.style.backgroundImage = desktopBG[3]
                    // overlayDiv.classList.remove('fade-out')
                    // bgThree.classList.add('fade-out');
                    // bgOne.classList.add('fade-in')
                    // bgOne.classList.remove('fade-out')
                    bgOne.classList.remove('fade-out')
                    bgTwo.classList.remove('fade-out')
                    // bgThree.classList.remove('fade-out')
                }, 3000)
                break;
            // case 4:
            //     intervalID = 1;
            //     // introBG.style.backgroundImage = desktopBG[0]
            //     // overlayDiv.classList.add('fade-out')
            //     setTimeout(() => {
            //         // introBG.style.backgroundImage = desktopBG[0]
            //         // overlayDiv.classList.remove('fade-out')
            //         bgOne.classList.add('fade-in')
            //         bgOne.classList.remove('fade-out')
            //         bgTwo.classList.remove('fade-out')
            //         bgThree.classList.remove('fade-out')
            //     }, 3000)
            //     break;
            default:
                break;
        }

        // if (windowSize > 768) {
        //     switch (intervalID) {
        //         case 1:
        //             intervalID = 2;
        //             // introBG.style.backgroundImage = desktopBG[1]
        //             // overlayDiv.classList.add('fade-out')
        //             setTimeout(() => {
        //                 introBG.style.backgroundImage = desktopBG[1]
        //                 // overlayDiv.classList.remove('fade-out')
        //             }, 3000)
        //             break;
        //         case 2:
        //             intervalID = 3;
        //             introBG.style.backgroundImage = desktopBG[2]
        //             // overlayDiv.classList.add('fade-out')
        //             setTimeout(() => {
        //                 introBG.style.backgroundImage = desktopBG[2]
        //                 // overlayDiv.classList.remove('fade-out')
        //             }, 3000)
        //             break;
        //         case 3:
        //             intervalID = 4;
        //             introBG.style.backgroundImage = desktopBG[3]
        //             // overlayDiv.classList.add('fade-out')
        //             setTimeout(() => {
        //                 introBG.style.backgroundImage = desktopBG[3]
        //                 // overlayDiv.classList.remove('fade-out')
        //             }, 3000)
        //             break;
        //         case 4:
        //             intervalID = 1;
        //             introBG.style.backgroundImage = desktopBG[0]
        //             // overlayDiv.classList.add('fade-out')
        //             setTimeout(() => {
        //                 introBG.style.backgroundImage = desktopBG[0]
        //                 overlayDiv.classList.remove('fade-out')
        //             }, 3000)
        //             break;
        //         default:
        //             break;
        //     }
        // }

        // if (windowSize > 500 && windowSize < 769) {
        //     switch (intervalID) {
        //         case 1:
        //             intervalID = 2;
        //             introBG.style.backgroundImage = tabletBG[1]
        //             break;
        //         case 2:
        //             intervalID = 3;
        //             introBG.style.backgroundImage = tabletBG[2]
        //             break;
        //         case 3:
        //             intervalID = 4;
        //             introBG.style.backgroundImage = tabletBG[3]
        //             break;
        //         case 4:
        //             intervalID = 1;
        //             introBG.style.backgroundImage = tabletBG[0]
        //             break;
        //         default:
        //             break;
        //     }
        // }

        // if (windowSize < 501) {
        //     console.log('less than 501')
        //     switch (intervalID) {
        //         case 1:
        //             intervalID = 2;
        //             introBG.style.backgroundImage = mobileBG[1]
        //             break;
        //         case 2:
        //             intervalID = 3;
        //             introBG.style.backgroundImage = mobileBG[2]
        //             break;
        //         case 3:
        //             intervalID = 4;
        //             introBG.style.backgroundImage = mobileBG[3]
        //             break;
        //         case 4:
        //             intervalID = 1;
        //             introBG.style.backgroundImage = mobileBG[0]
        //             break;
        //         default:
        //             break;
        //     }
        // }
    }

    const checkSize = () => {
        windowSize = window.innerWidth
    }

    checkSize()

    // window.addEventListener('resize', checkSize, changeBG)
    window.addEventListener('resize', checkSize)

    setInterval(changeBG, 7000);
    // setInterval(transition, 7000);

})