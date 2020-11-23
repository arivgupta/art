const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

// fade out on load

animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function() {
    let delay = 0.25

    // check through all animated tags and see if the element is in the window
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom

        if(tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadein 1s ${delay}s both`
            // adds a delay to each element, loading them one after the other
            delay = delay + 0.25
        } else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }
    })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function() {
    fadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function() {
    fadeIn()
})