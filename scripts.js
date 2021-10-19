let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').innerHTML=nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i=0;i<9;i++)
   {
       let cell='c'+(i+1);
       var button2=document.createElement('button');
       document.getElementById(cell).appendChild(button2);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
        document.getElementById('next-lbl').innerHTML=nextPlayer;
        

    for (let i=0;i<9;i++)
    {
        const element = document.getElementById('c'+(i+1))
        element.addEventListener("click", () => {
        document.getElementById('c'+(i+1)).innerHTML=nextPlayer;
        
    });
    switchTurn();
    
    }

    
    
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        
        let lable=document.getElementById('game-over-lbl');
        var header=document.createElement('h1');
        header.innerText='Game Over';
        lable.appendChild(header);
    }

    function switchTurn()
    {
        if (nextPlayer==='X'){nextPlayer='O'}
        else {nextPlayer='X'}
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise     
   let buttons=true;
   for (let i=0;i<btns.length;i++)
   {
       if (btns[i].disabled)
       {
          buttons=false;
      }
   }
   
  return buttons;
}
