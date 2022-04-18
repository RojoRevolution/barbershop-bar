window.addEventListener('DOMContentLoaded', (event) => {

    const bgOne = document.getElementById('slider1');
    const bgTwo = document.getElementById('slider2');

    let intervalID = 1;


    // @ Fullscreen
    const changeBG = () => {
        console.log('Change BG')
        console.log('Interval ID = ', intervalID)

        if (bgOne.classList.contains("fade-in")) {
            bgOne.classList.remove("fade-in");
        }

        switch (intervalID) {
            case 1:
                console.log('Case 1')
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

    setInterval(changeBG, 7000);

})