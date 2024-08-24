gsap.from(".img1, .img2, .img3", {
    delay: 2,
    opacity: 0,
    stagger:0.2,
    y: 100
})

gsap.from('nav' ,{
    delay: 1,
    opacity:0,
    duration:1,
    y:100
})

gsap.from('.page1 h1', {
    delay: 0.2,
    opacity: 0,
    duration: 1,
    y:100
})

gsap.from('.page2 h5, .page2 h1, .about-us',{
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.page2 h5',
        scroller:'body',
        start:'top 90%',
    }
})

