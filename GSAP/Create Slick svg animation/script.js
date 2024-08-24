var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector('.string');

string.addEventListener('mousemove',((e) => {
    // console.log(e.y)
    path = `M 10 100 Q ${e.x} ${e.y} 990 100`;
    // console.log(path)
    gsap.to('svg path',{
        attr:{ d:path },
        duration:1.5,
        ease:'power3.out'
    })
}))

string.addEventListener('mouseleave',((e) => {
    gsap.to('svg path' ,{
        attr:{d:finalPath},
        ease:'elastic.out(1,0.2)'

    })
}))