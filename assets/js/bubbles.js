window.addEventListener('DOMContentLoaded', () => {

    const animationParentEl = document.getElementById('animation-parent')
    const divTypes = ['bubble-sm-a', 'bubble-sm-b', 'bubble-sm-b-fast', 'bubble-sm-c']

    let type;
    let duration;
    let delay;
    let windowSize;
    let bubblesNeeded

    const randomize = () => {
        duration = Math.floor(1 + Math.random() * 12 + 1);
        delay = Math.floor(Math.random() * 4);
        type = Math.floor(Math.random() * 4);
    }

    const renderAnimation = () => {

        for (let i = 0; i < bubblesNeeded; i++) {
            randomize();
            // Create Parent Div + Styles
            let parentEl = document.createElement('div')
            parentEl.classList.add('bubble-container-single', 'pos-rel', 'd-flex')
            // Create Child Div + Styles
            let childEl = document.createElement('div')
            childEl.classList.add(`${divTypes[type]}`, `duration-${duration}`)
            // Append to Grand Parent
            animationParentEl.appendChild(parentEl)
            parentEl.appendChild(childEl);
        }
    }

    const checkSize = () => {
        windowSize = window.innerWidth
    }

    const bubbleCount = () => {
        let divide = windowSize / 20;
        bubblesNeeded = Math.ceil(divide);
    }

    // Initial Render
    checkSize()
    bubbleCount()
    renderAnimation();

    // ReRender on browser resize
    window.addEventListener('resize', () => {
        checkSize()
        while (animationParentEl.hasChildNodes()) {
            animationParentEl.removeChild(animationParentEl.lastChild)
        }
        bubbleCount()
        renderAnimation();
    });

})