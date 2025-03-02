function intro(){
    gsap.from("#text1", {
        y: 100,
        opacity: 0,
        duration: 1,
    });
    gsap.from("#text2", {
        y: 100,
        opacity: 0,
        duration: 1.2,
    });
    gsap.from("#button", {
        y: 200,
        opacity: 0,
        duration: 1.4,
    });
}

function start(){
    window.location.href = 'register.html';
}