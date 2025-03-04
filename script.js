let budget = document.querySelector(".budget");
let income = document.querySelector(".income");
let goal = document.querySelector(".goal");
let namee = document.querySelector(".namee");
let purchase = document.querySelector(".purchase");
let rate = document.querySelector("#rate");
let ex = document.querySelector("#exchange");
let text = document.querySelector("#name");
let cash = document.querySelector("#cash");

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
        y: 100,
        opacity: 0,
        duration: 1,
    });
}

function start(){
    gsap.to("#text1", {
        y: 100,
        opacity: 0,
        duration: 1,
    });
    gsap.to("#text2", {
        y: 100,
        opacity: 0,
        duration: 1.2,
    });
    gsap.to("#button", {
        y: 100,
        opacity: 0,
        duration: 1,
    });
    setTimeout(register, 1500)
}

function submit(){
    gsap.to("#text1", {
        y: 100,
        opacity: 0,
        duration: 1,
    });
    gsap.to("#text2", {
        y: 100,
        opacity: 0,
        duration: 1.2,
    });
    gsap.to("#text4", {
        y: 200,
        opacity: 0,
        duration: 1.2,
    });
    gsap.to("#button", {
        y: 100,
        opacity: 0,
        duration: 1,
    });
    gsap.to("#input", {
        y: -100,
        opacity: 0,
        duration: 1,
    });
    setTimeout(page, 1500)
}

function intro2(){
    gsap.from("#text1", {
        y: -200,
        opacity: 0,
        duration: 1,
    });
    gsap.from("#text2", {
        y: -100,
        opacity: 0,
        duration: 1.2,
    });
    gsap.from("#text4", {
        y: -200,
        opacity: 0,
        duration: 1.2,
    });
    gsap.from("#button", {
        y: -100,
        opacity: 0,
        duration: 1,
    });
    gsap.from("#input", {
        y: 100,
        opacity: 0,
        duration: 1,
    });
}

function register(){
    window.location.href = 'register.html';
}

function page(){
    localStorage.setItem("budget", budget.value);
    localStorage.setItem("income", income.value);
    localStorage.setItem("goal", goal.value);
    window.location.href = 'homepage.html';
    console.log(localStorage.getItem("budget"));
    console.log(localStorage.getItem("income"));
    console.log(localStorage.getItem("goal"));
}

function check(){
    let e = document.getElementById("name");
    const clone = rate.cloneNode(true);
    
    clone.e.innerHTML = namee.value;
    clone.cash.innerHTML = purchase.value;
    ex.appendChild(clone);
}

