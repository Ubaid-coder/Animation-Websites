const menu = document.querySelector('.nav i');
const close = document.querySelector('.full i');
const tl = gsap.timeline();

tl.to('.full',{
    right:'0',
    duration:1,
})

tl.from('.full h4',{
    y:'100',
    opacity:0,
    stagger:0.4,
    duration:0.5
})

tl.from('.full i',{
    opacity:0,
})
tl.pause();

menu.addEventListener('click',() => {
    tl.play();
})

close.addEventListener('click',() => {
    tl.reverse();
})