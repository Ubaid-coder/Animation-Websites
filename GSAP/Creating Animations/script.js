// gsap.to('.box',{
//     x:1200,
//     duration:2,
//     delay:1,
    
// });

// gsap.to('.box2' ,{
//     y: -520,
//     duration:5,
//     delay:2

// })

// gsap.to('.box',{
//     x:'80vw',
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:'green',
//     borderRadius:'50%',
//     height:200,
//     width:200,
//     repeat:-1,
//     yoyo:true
// })

// gsap.from('.box2',{
//     x:1200,
//     duration:2,
//     delay:1,
//     height:200,
//     width:200,
//     borderRadius:'50%',
//     backgroundColor:'green',
//     repeat:-1,
//     yoyo:true
// })

// gsap.from('h1',{
//     opacity:0,
//     duration:2,
//     delay:1,
//     x:"-100%",
//     stagger:1.2
// })

// gsap.to('.box' ,{
//     x:1500,
//     rotate:360,
//     duration:1,
//     borderRadius:'20%',
//     delay:1
// })

// gsap.to('.box2',{
//     x:1500,
//    borderRadius:'40%',
//     duration:1.5,
//     delay:2
// })

// gsap.to('.box3',{
//     x:1500,
//     scale:0.5,
//     borderRadius:'50%',
//     delay:3.5,
//     duration:1.5
// })

// var tl = gsap.timeline();

// tl.to('.box',{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,

// })

// tl.to('.box2' ,{
//     x:1500,
//     rotate:360,
//     duration:1.5,

// })

// tl.to('.box3',{
//     x:1500,
//     rotate:360,
//     duration:1.5,

// })

let tl = gsap.timeline();


tl.from('body>h1',{
    opacity:0,
    duration:1,
    x:"-100%",
    letterSpacing:20,
    delay:0.5,
})

tl.from('nav h1' ,{
    y:-100,
    opacity:0,
    duration:1
})

tl.from('nav li' ,{
    y:-100,
    duration:1,
    stagger:'0.3'
})
