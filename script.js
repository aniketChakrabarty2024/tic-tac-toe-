let boxes = document.querySelectorAll(".box");
console.log(boxes);
let reset = document.querySelector(".reset");
console.log(reset);
let msgContainer = document.querySelector(".msg-container")
console.log(msgContainer);
let win = document.querySelector("#win");
console.log(win);
let newGame = document.querySelector("#newGame");
console.log(newGame);

let turnO = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
console.log(winPatterns);

boxes.forEach ((box) =>{
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    win.innerText = `Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    newGame.classList.remove("hide");
    
}

const gameOver = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner -->", pos1Val);
                gameOver();
                showWinner(pos1Val);
                /* alert("we have a winner"); */
            }
        }
    }
};

const gameEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
  
    }
};

const resetGame = () => {
    turnO = true;
    gameEnable();
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

// // const count = stokeCount = () => {
// //     if ()
// // }

// let clickCount = 0;

// // Get the button element.
// const button = document.querySelectorAll(".box");

// // Add an event listener to the button that listens for the click event.
// const button1 = () => {
//   // Increment the click count.
//   clickCount++;

//   // Check if the click count is equal to 9.
//   if (clickCount === 9) {
//     // The match is a draw.
//     alert('The match is a draw!');
//   }
// });