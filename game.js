let userscore = 0;
let compscore = 0;
let userscoredisp = document.querySelector("#user-score");
let compscoredisp = document.querySelector("#comp-score");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let p = document.querySelector(".hide");
let reset = document.querySelector(".reset-btn");
let msg = document.querySelector("#msg");
let rock = '<img src="/images/rock.png"></img>';
let paper = '<img src="/images/paper.png"></img>';
let scissor = '<img src="/images/scissors.png"></img>';



const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
            const userchoice = choice.getAttribute("id");
            playgame(userchoice);
    })
})

const choicemsg = (userchoice,compchoice) =>{
    
    let usermsg,compmsg;
    if(userchoice == "rock")
        usermsg = rock;
    else if(userchoice == "paper")
        usermsg = paper;
    else
        usermsg = scissor;

    if(compchoice == "rock")
        compmsg = rock;
    else if(compchoice == "paper")
        compmsg = paper;
    else
        compmsg = scissor;

    user.innerHTML = usermsg;
    comp.innerHTML = compmsg;
    p.classList.remove("hide");
}

const drawgame = () => {
    msg.innerText = "It's a draw! Great minds think alike 🤝";
    msg.style.backgroundColor = "#902D41";
}

const showwinner = (userwin) =>{
    if(userwin){
        msg.innerText = "You win! Smart move 🎉";
        msg.style.backgroundColor = "green";
        userscore++;
        userscoredisp.innerText = userscore;
    }
    else{
        msg.innerText = "You lose! The computer got you this time 🤖";
        msg.style.backgroundColor = "red";
        compscore++;
        compscoredisp.innerText = compscore;
    }
}

const gencompchoice = () => {
    let options = ["rock","paper","scissor"];
    return(options[Math.floor(3*Math.random())]);
}

const playgame = (userchoice) =>{
    let compchoice = gencompchoice();
    choicemsg(userchoice,compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compchoice ==="paper"? false : true;
        }

        else if(userchoice === "paper") {
            userwin = compchoice ==="scissor"? false : true;
        }

        else{
            userwin = compchoice ==="rock"? false : true;
        }
        showwinner(userwin);
    }
}


reset.addEventListener("click",() =>{
    user.innerHTML = "";
    comp.innerHTML = "";
    p.classList.add("hide");
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#902D41";
    userscore = 0;
    compscore = 0;
    userscoredisp.innerText = userscore;
    compscoredisp.innerText = compscore;
})