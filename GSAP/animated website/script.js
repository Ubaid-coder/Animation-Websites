const tl = gsap.timeline();

function page1Animation() {

    tl.from('header h1, nav ul li, nav ul button', {
        y: -100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
    })

    tl.from('.part1 h1', {
        x: -300,
        duration: 0.6,
        opacity: 0,
    })

    tl.from('.part1 p', {
        x: -300,
        duration: 0.6,
        opacity: 0,
        stagger: 0.4
    })

    tl.from('.part1 button', {
        opacity: 0,
        duration: 0.4
    })

    tl.from('.part2 img', {
        opacity: 0,
        duration: 0.6,
        x: 200
    }, '-=0.6')


    tl.from('.icons img', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.2,
    })


}

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section2',
        scroller:'body',
        markers:true,
        start:'top 70%',
        end:'top 30%',
        scrub:2
    }
});

tl2.from('.services',{
    y:30,
    opacity:0,
    duration:0.5
})

tl2.from('.line1.elem.left',{
    x:-300,
    opacity:0,
    duration:1
},'top')

tl2.from('.elem.line1.right',{
    x:300,
    opacity:0,
    duration:1
},'top')

tl2.from('.line2.elem.left',{
    x:-300,
    opacity:0,
    duration:1
},'bottom')

tl2.from('.elem.line2.right',{
    x:300,
    opacity:0,
    duration:1
},'bottom')