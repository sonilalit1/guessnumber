// let username;
// document.getElementById("mybutton").onclick=function(){
//     username=document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent=`hello ${username}`;
// }

// const dcrsbtn=document.getElementById("decreasebtn");
// const resetbtn=document.getElementById("resetbtn");
// const icrsbtn=document.getElementById("increasebtn");
// const countlb=document.getElementById("mycount");
// let count=0;
// dcrsbtn.onclick=function(){
//     count--;
//     countlb.textContent=count;

// }
// resetbtn.onclick=function(){
//     count=0;
//     countlb.textContent=count;
// }
// icrsbtn.onclick=function(){
//     count++;
//     countlb.textContent=count;
// }
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min+1))+min;

let attempt=0;
let guess ;
let runnig = true;
while(runnig){
    guess=window.prompt(`please enter the number between ${min} - ${max}`);
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert("please enter the valid number");
    }else if(guess < min || guess> max){
        window.alert("enter the valid number");
    }
    else{
        attempt++;
        if(guess <answer){
            window.alert("too low");
        }else if(guess>answer){
            window.alert("too high");
        }
        else{
            window.alert(`correct.the answer was ${answer}.it took you ${attempt} attempts`);
            runnig=false;
        }
    }



}

