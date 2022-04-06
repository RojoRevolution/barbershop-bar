window.addEventListener('DOMContentLoaded', (event) => {


    let introBG = document.querySelector('.backgrounds');
    let scrollImg = document.querySelector('.img-go');

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


    // @ Fullscreen
    const changeBG = () => {
        if (windowSize > 768) {
            switch (intervalID) {
                case 1:
                    intervalID = 2;
                    introBG.style.backgroundImage = desktopBG[1]
                    break;
                case 2:
                    intervalID = 3;
                    introBG.style.backgroundImage = desktopBG[2]
                    break;
                case 3:
                    intervalID = 4;
                    introBG.style.backgroundImage = desktopBG[3]
                    break;
                case 4:
                    intervalID = 1;
                    introBG.style.backgroundImage = desktopBG[0]
                    break;
                default:
                    break;
            }
        }

        if (windowSize > 500 && windowSize < 769) {
            switch (intervalID) {
                case 1:
                    intervalID = 2;
                    introBG.style.backgroundImage = tabletBG[1]
                    break;
                case 2:
                    intervalID = 3;
                    introBG.style.backgroundImage = tabletBG[2]
                    break;
                case 3:
                    intervalID = 4;
                    introBG.style.backgroundImage = tabletBG[3]
                    break;
                case 4:
                    intervalID = 1;
                    introBG.style.backgroundImage = tabletBG[0]
                    break;
                default:
                    break;
            }
        }

        if (windowSize < 501) {
            console.log('less than 501')
            switch (intervalID) {
                case 1:
                    intervalID = 2;
                    introBG.style.backgroundImage = mobileBG[1]
                    break;
                case 2:
                    intervalID = 3;
                    introBG.style.backgroundImage = mobileBG[2]
                    break;
                case 3:
                    intervalID = 4;
                    introBG.style.backgroundImage = mobileBG[3]
                    break;
                case 4:
                    intervalID = 1;
                    introBG.style.backgroundImage = mobileBG[0]
                    break;
                default:
                    break;
            }
        }
    }

    const checkSize = () => {
        windowSize = window.innerWidth
    }

    checkSize()

    window.addEventListener('resize', checkSize, changeBG)

    setInterval(changeBG, 7000);

})