# The Barbershop
Static landing page for a client's brewpub located in Dripping Springs, TX.  The site was built with HTML, CSS and Javacript, all animations were built with a combination CSS Keyframes and Javacript logic. 

![The Barshopshop Website - Dripping Springs, Tx](/assets/images/readme-img.png)

## Homepage Bubble Animations
The bubble animation is generated dynamically, based on the width of the viewport. If the screen size changes, event listeners are set to re-render the amount of bubbles that is needed for the new screen size. Using Math.random(), I also set the speed of each individual bubble to vary automatically, so you'll likely never get the exact bubbles again.

## Background transitions
The background transitions were set with JS inteval, a switch case, and triggering on and off CSS animation keyframes as needed.