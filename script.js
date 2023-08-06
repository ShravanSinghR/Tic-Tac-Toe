console.log("welcome to tic tak toe")
let bg = new Audio("bg.wav")
let next = new Audio("next.wav")
let over = new Audio("end.wav")

let turn ="X";
let gameover = false;

//change turn
const ChangeTurn = ()=>{
    return turn === "X"? "0": "X"
}

//winner
const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7.5, 15, 90],
        [1, 4, 7, 2.5, 15, 90],
        [2, 5, 8, 12.5, 15, 90],
        [0, 4, 8, 3, 15, 45],
        [2, 4, 6, 3, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            gameover = true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "190px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "25vw";
            over.play()
        }
    })

}



//main logic
bg.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    debugger
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = ChangeTurn();
            checkWin();
            if(!gameover){
            next.play();
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
})   
 




//reset
reset.addEventListener('click',()=>{
    let boxtext =document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText = "";
    })
    turn = "X";
    gameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;;
    
})










