const boxes = document.querySelectorAll(".box");

anime({
    targets: boxes,
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad',  duration: 1000}
    ] ,
    
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    loop: true
})