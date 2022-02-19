window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded')
    let introBG = document.getElementById('intro-bg');
    let scrollImg = document.querySelector('.img-go');

    let introSRC = [
        "url('./assets/images/intro/intro_image_001.jpg')",
        "url('./assets/images/intro/intro_image_002.jpg')",
        "url('./assets/images/intro/intro_image_003.jpg')",
        "url('./assets/images/intro/intro_image_004.jpg')"
    ]

    let intervalID = 1;


    // @ Fullscreen
    const changeBG = () => {
        switch (intervalID) {
            case 1:
                intervalID = 2;
                introBG.style.backgroundImage = introSRC[1]
                break;
            case 2:
                intervalID = 3;
                introBG.style.backgroundImage = introSRC[2]
                break;
            case 3:
                intervalID = 4;
                introBG.style.backgroundImage = introSRC[3]
                break;
            case 4:
                intervalID = 1;
                introBG.style.backgroundImage = introSRC[0]
                break;
            default:
                break;
        }
    }

    setInterval(changeBG, 7000);

})