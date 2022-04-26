window.addEventListener('DOMContentLoaded', (event) => {

    const bgOne = document.getElementById('slider1');
    const bgTwo = document.getElementById('slider2');
    const bgThree = document.getElementById('slider3');

    let intervalID = 1;
    let windowSize;



    // @ Fullscreen
    const changeBG = () => {
        if (bgOne.classList.contains("fade-in")) {
            bgOne.classList.remove("fade-in");
        }

        switch (intervalID) {
            case 1:
                intervalID = 2;
                setTimeout(() => {
                    bgOne.classList.add('fade-out');
                }, 3000)
                break;
            case 2:
                intervalID = 3;
                setTimeout(() => {
                    bgTwo.classList.add('fade-out');
                }, 3000)
                break;
            case 3:
                intervalID = 1;
                setTimeout(() => {
                    bgOne.classList.remove('fade-out')
                    bgTwo.classList.remove('fade-out')
                }, 3000)
                break;
            default:
                break;
        }
    }

    const checkSize = () => {
        windowSize = window.innerWidth
    }

    checkSize()

    // window.addEventListener('resize', checkSize, changeBG)
    window.addEventListener('resize', checkSize)

    if (windowSize < 550) {
        console.log('returning')
        return
    } else {
        setInterval(changeBG, 7000);
    }
    setInterval(changeBG, 7000);

})