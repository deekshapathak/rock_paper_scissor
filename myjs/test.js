const choices=document.querySelectorAll(".choice")
console.log(choices);
const result=document.getElementById("result");
const restart=document.getElementById("restart");
const modal=document.querySelector(".modal")

const scoreboard = {  //object of scoreboard
    player:0,
    computer:0
}

function play(e)
{
        //console.log(e.target.id)
       restart.style.display="inline-block"
       const player_choice=e.target.id
       const computer_choice=get_computer_choice()
       //console.log(computer_choice)
       let winner=getWinner(player_choice,computer_choice)
      //console.log(winner)
        showWinner(winner,computer_choice)

}

function get_computer_choice()
{
    const no=Math.random();
    if(no<0.25)
        return "rock";
    else if(no>0.25 && no<0.6)
        return "paper";
    else
        return "scissors";
}

function getWinner(p,c)
{
    if(p===c)   //=== check both condition as well as data type
        return "Draw";
    else if(p==="rock")
    {
        if(c==="paper")
            return "computer";
        else
            return "player";
    }
    else if(p==="paper")
    {
        if(c==="scissors")
            return "computer";
        else
            return "player";
    }
    else if(p==="scissors")
    {
        if(c==="rock")
            return "computer";
        else
            return  "player";
    }
}

function showWinner(winner,computer_choice)
{
    if(winner === 'player'){
        scoreboard.player++;
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computer_choice} fa-10x"></i>
        <p>Computer Choice <strong>${computer_choice.charAt(0).toUpperCase()+computer_choice.slice(1)}<Storng></p> 
        `;
    }
    
 else {
    result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computer_choice} fa-10x"></i>
        <p>Computer Chose <strong>${computer_choice.charAt(0).toUpperCase() +
        computer_choice.slice(1)}</strong></p>
      `;
}
// Show score
score.innerHTML = `
      <p>Player: ${scoreboard.player}</p>
      <p>Computer: ${scoreboard.computer}</p>
      `;

modal.style.display = 'block';
   
}

function clearModal(e)
{
    if(e.target==modal){
        modal.style.display="none"
    }
}

function restartGame()
{
    scoreboard.player=0;
    scoreboard.computer=0;
    score.innerHTML= `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

window.addEventListener('click',clearModal)
restart.addEventListener('click',restartGame)

choices.forEach(function(x){
    x.addEventListener('click',play)
})