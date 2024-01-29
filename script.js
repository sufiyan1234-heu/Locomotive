



function loading() {
    var tl = gsap.timeline()

    tl.to('#yellow1', {
        top: "-100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    })

    tl.from('#yellow2', {
        top: "100%",
        delay: 0.5,
        duration: 0.7,
        ease: "expo.out"
    }, "anim")
    tl.to('#loader h1', {
        delay: 0.6,
        duration: 0.7,
        color: "black"
    }, "anim")
    tl.to("#loader", {
        opacity: 0
    })
    tl.to("#loader", {
        display: "none"
    })
}

loading()


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector('#backto').addEventListener("click", () => {
    scroll.scrollTo(0)
})

document.querySelector('#down').addEventListener("click", () => {
    scroll.scrollTo(842)
})

document.querySelector('#down2').addEventListener("click", () => {
    scroll.scrollTo(1684)
})

var close = document.querySelector('.close')
var inner = document.querySelector('.inner-elem')
var ham = document.querySelector('.ham')
close.addEventListener("click", () => {
    inner.style.display = 'none';
    ham.style.display = 'inline-block'

})
ham.addEventListener('click', () => {
    ham.style.display = 'none'

    inner.style.display = 'flex';

})

var elems = document.querySelectorAll('.elem')
var page2 = document.querySelector('#page2')
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute('data-img')
        page2.style.backgroundImage = `url(${bgimg})`


    })
})