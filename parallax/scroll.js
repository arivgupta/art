const bodyTag = document.querySelector("body")

const pixelsTag = document.querySelector("div.pixels")
const progressTag = document.querySelector("div.progress")

const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")

const headerTag = document.querySelector("header")


// when scroll the page, update pixels tag

document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset
    pixelsTag.innerHTML= pixels;
})

// when scroll the page, the progress bar keeps track of the distance

document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance

    progressTag.style.width = `${100 * percentage}%`
})

// update the text on header when scroll over a different section

document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset

    sections.forEach(section => {
        if(section.offsetTop - 50 <= pixels) {
            clientTag.innerHTML = section.getAttribute("data-client")
            pageTag.innerHTML = section.getAttribute("data-page")

            if(section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white")
                progressTag.classList.add("white")
            } else {
                headerTag.classList.remove("white")
                progressTag.classList.remove("white")
            }
        }
    })
})

// apply parallax to square and circle on scroll

document.addEventListener("scroll", function() {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)

    sections.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight /2)

        const distanceToSection = midViewport - midSection

        const parallaxTag = section.querySelectorAll(`[data-parallax]`)

        // loope over each parallax tag

        parallaxTag.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"))
            tag.style.transform = `translate( 0, ${distanceToSection * speed }px)`
        })
    })
})