function breakText() {
    const h1 = document.querySelector('h1');
    const h1Text = h1.textContent;
    const splittedText = h1Text.split('');
    let clutter = '';

    const halfValue = Math.floor(splittedText.length/2);
    splittedText.forEach((elem, index) => {
       if(index<halfValue){
        clutter+= `<span class="first">${elem}</span>`
       } else{
        clutter+= `<span class='second'>${elem}</span>`
       }
    })
    h1.innerHTML = clutter;
}

breakText();

gsap.from('h1 span.first',{
    y: 80,
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    opacity:0
})

gsap.from('h1  span.second',{
    y:80,
    duration: 1,
    delay: 0.3,
    stagger: -0.3,
    opacity:0
})