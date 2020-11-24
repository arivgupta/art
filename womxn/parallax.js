const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function() {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    // find the middle of each section
    sections.forEach((section, index) => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        // how far away is the section from the visible area of the page
        const distanceToSection = midViewport - midSection

        // pick the tags to parallax
        const image = section.querySelector("img")
        const contentTag = section.querySelector("div")

        // weight down the distance
        let rotation = distanceToSection / 80
        let contentDist = -1 * distanceToSection / 2

        // for all even sections, rotate the other way (use modulo)
        if (index % 2 == 0) {
            rotation = rotation * -1;
        }

        // apply parallax
        image.style.transform = `rotate(${rotation}deg)`

        contentTag.style.top = `${contentDist}px`
        // (multiply for -1 makes it go to the opposite direction)
        contentTag.style.transform = `rotate(${-1 * rotation}deg)`

        // change background color
        if (distanceToSection > -100) {
            const dataBackground = section.getAttribute("data-background")
            bodyTag.style.backgroundColor = dataBackground
        }
    })
}

addMovement()

document.addEventListener("scroll", function() {
    addMovement();
})

window.addEventListener("resize", function() {
    addMovement()
})