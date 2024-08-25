const main = document.querySelector('.main');
const cursor = document.querySelector('.cursor');
const image = document.querySelector('.image');

// main.addEventListener('mousemove',((e) => {
//     cursor.style.left = `${e.x}px`
//     cursor.style.top = `${e.y}px`
// }))


main.addEventListener('mousemove', ((e) => {
    gsap.to('.cursor', {
        x: e.x,
        y: e.y,
        ease: "elastic.out(1,0.75)",
        duration:0

    })
}))

image.addEventListener('mouseenter',((e) =>{
    cursor.innerHTML = 'view MORE';
    gsap.to('.cursor',{
      scale:2,
      backgroundColor:'#bbadad'
    })
}))
image.addEventListener('mouseleave',((e) =>{
    cursor.innerHTML = ''
    gsap.to('.cursor',{
       scale:1,
       backgroundColor:'#fff'
    })
}))