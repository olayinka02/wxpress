function parallax(element, distance, speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener( 'scroll', function(){
    parallax('.ellipse', window.scrollY, 0.8);
});

window.addEventListener( 'scroll', function(){
    parallax('#calculator', window.scrollY, 0.8);
});