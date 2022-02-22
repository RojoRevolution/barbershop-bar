window.addEventListener('DOMContentLoaded', () => {

    const animationParentEl = document.getElementById('animation-parent')

    const divTypes = ['bubble-sm-a', 'bubble-sm-b', 'bubble-sm-b-fast', 'bubble-sm-c']

    let type;
    let duration;
    let delay;



    const getDuration = () => {
        duration = Math.floor(1 + Math.random() * 12 + 1);
        console.log('Duration: ', duration)
    }

    const getDelayAndType = () => {
        delay = Math.floor(Math.random() * 4);
        type = Math.floor(Math.random() * 4);
        console.log('Delay: ', delay);
        console.log('Type: ', type);
    }

    const renderAnimation = () => {
        // getDuration()
        // getDelayAndType()


        for (let i = 0; i < 72; i++) {
            getDuration()
            getDelayAndType()

            let parentEl = document.createElement('div')
            parentEl.classList.add('bubble-container-single', 'pos-rel', 'd-flex')
            let childEl = document.createElement('div')
            childEl.classList.add(`${divTypes[type]}`, `duration-${duration}`)
            // childEl.style.animationDuration = duration;

            animationParentEl.appendChild(parentEl)
            parentEl.appendChild(childEl);
        }




    }

    renderAnimation();



})