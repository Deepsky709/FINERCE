let budget = document.querySelector(".budget");
let income = document.querySelector(".income");
let goal = document.querySelector(".goal");
let namee = document.querySelector(".namee");
let w1 = document.querySelector(".w1");
let w2 = document.querySelector(".w2");
let w3 = document.querySelector(".w3");
let w4 = document.querySelector(".w4");
let purchase = document.querySelector(".purchase");
let save = document.querySelector(".save");
let money = document.querySelector(".money");
let GL = document.querySelector(".GL");

let rate = document.querySelector("#rate");
let ex = document.querySelector("#exchange");
let text = document.querySelector("#name");
let cash = document.querySelector("#cash");

let balance = 0;
let weeks = [[1], [2], [3], [4]];
let weekState = 0;
let months = [[0], [0]];

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
    const clone = rate.cloneNode(true);
    clone[0].textContent = namee.value;
    balance += parseInt(purchase.value);
    months[0][0] += parseInt(purchase.value);
    weeks[weekState][0] += parseInt(purchase.value);
    if (balance != localStorage.getItem("goal")){
        GL.innerHTML = "Rp"+(localStorage.getItem("goal")-balance)+",00 Away Left";
    }else{
        GL.innerHTML = "100% Finished";
    }
    if (weekState == 0){
        w1.style.height = ((weeks[0][0]/localStorage.getItem("budget"))*500);
    }else if (weekState == 1){
        w2.style.height = ((weeks[1][0]/localStorage.getItem("budget"))*500);
    }else if (weekState == 2){
        w3.style.height = ((weeks[2][0]/localStorage.getItem("budget"))*500);
    }else if (weekState == 3){
        w4.style.height = ((weeks[3][0]/localStorage.getItem("budget"))*500);
    }
    money.innerHTML = "Rp"+balance+",00";
    
    ex.appendChild(clone);
}

function nextWeek(){
    weekState += 1;
    if (weekState > 3){
        console.log("Next Month")
        weekState = 0;
        balance += parseInt(localStorage.getItem("income"));
        weeks = [[0], [0], [0], [0]];
        console.log(months[0][0]);
        console.log(months[1][0]);
        if (months[0][0] < months[1][0]){
            save.innerHTML = Math.ceil(months[0][0]/months[1][0]*100)+"% less this month";
        }else if (months[0][0] > months[1][0]){
            save.innerHTML = Math.ceil(months[1][0]/months[0][0]*100)+"% more this month";
        }else{
            save.innerHTML = "the same this month";
        }
        months[1][0] = months[0][0];
        months[0][0] = 0;
    }
}