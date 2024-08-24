

// gsap.from('.page1 .box', {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,

// })

// gsap.from('.page2 h1',{
//     opacity:0,
//     duration:2,
//     x:'100%',
//     scrollTrigger:{
//         trigger:'.page2 h1',
//         start:'top 80%',
//         markers:true
//     }
// })

// gsap.from('.page2 h2', {
//     opacity:0,
//     duration:2,
//     x:'-100%',
//     scrollTrigger:{
//         trigger:'.page2 h2',
//         start:'top 80%',
//         markers:true
//     }
// })

// gsap.from('.page2 .box',{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:'.page2 .box',
//         markers:true,
//         scroller:'body',
//         start:'top 100%',
//         end:'bottom 90%',
//         scrub:2,
//         pin:true
//     }
// })

gsap.to('.page2 h1', {
    transform:'translateX(-150%)',
    scrollTrigger:{
        trigger:'.page2 h1',
        scroller:'body',
        start:'top -10%',
        end:'top 100%',
        markers:true,
        scrub:3,
        pin:true
    }
})