window.addEventListener('DOMContentLoaded', (event) => {

    const bgOne = document.getElementById('slider1');
    const bgTwo = document.getElementById('slider2');

    let intervalID = 1;

    const changeBG = () => {
        // Remove fade-in class afte the first complete rotation
        if (bgOne.classList.contains("fade-in")) {
            bgOne.classList.remove("fade-in");
        }
        // Chnage the interval ID to continue to rotation
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

    setInterval(changeBG, 7000);

})