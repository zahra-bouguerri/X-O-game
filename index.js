//selecting all start tags
let start=document.getElementById('start');
let btn=document.getElementById("btn")


//selecting all main tags
let game=document.getElementById('game');
let title=document.getElementById('title');
let choose=document.getElementById('choose');
let nameWin=document.getElementById('name');
let boxes=document.querySelectorAll('.boxes');
let winner=document.getElementById('winner');
let quit = document.querySelector("#quit");

//timer
let timer=document.getElementById("timer");

function changePageToChoose(){
    game.style.display="block";
    start.style.display="none";
}
//start game
//fix turn to X
let turn='x';
function gamef(id){
    let element=document.getElementById(id);
   if(turn==='x' && element.innerHTML==""){
    element.innerHTML="X";
    choose.style.left='0px';
    turn="o";
   }
   else if(turn==='o' && element.innerHTML==""){
    element.innerHTML="O";
    choose.style.left='172px';
    turn='x';
   }
   checkWinner();
   noone();
}

let possible = [ 
    [0, 1, 2],  [3, 4, 5],  [6, 7, 8],  [0, 3, 6],  [1, 4, 7], [2, 5, 8], [0, 4, 8],[2, 4, 6] ];
   function checkWinner(){
        for(let i=0 ;i<=7;i++){
           let a=possible[i];
           
           if(boxes[a[0]].innerText=="" || boxes[a[1]].innerText=="" || boxes[a[2]].innerText==""){
            continue;
           }
           else if(boxes[a[0]].innerText=="X" && boxes[a[1]].innerText=="X" && boxes[a[2]].innerText=="X" ){
                nameWin.innerHTML='player X win the game';
                game.style.display = "none";
                winner.style.display = "block";
            } else if (boxes[a[0]].innerText=="O" && boxes[a[1]].innerText=="O" && boxes[a[2]].innerText=="O") {
                
                nameWin.innerHTML = 'Player O Win The Game!';
                game.style.display = "none";
                winner.style.display = "block";
            } else {
            continue;
        }
        }
   }
function noone(){
    if (
        boxes[0].innerText != "" && boxes[1].innerText != "" &&
        boxes[2].innerText != "" && boxes[3].innerText != "" &&
        boxes[4].innerText != "" && boxes[5].innerText != "" &&
        boxes[6].innerText!= "" && boxes[7].innerText != "" && 
        boxes[8].innerText != "") {

    nameWin.innerText = "Match Draw!";
    game.style.display = "none";
    winner.style.display = "block";
}
}
// Reset Game
quit.addEventListener("click", () => {
    window.location.reload();
})
//timer
var s=0;
var m=0;
function myTimer(){
  s++;
  if(s==60){
    m++;
    s=0;
  }
  if(m==60){
    alert("game out");
  }
document.getElementById('m').innerHTML=m;
document.getElementById('s').innerHTML=s;
}
btn.onclick=function(){
    timer=setInterval(myTimer,1000);
}


