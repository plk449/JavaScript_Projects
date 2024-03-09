let us = 0;
let cs = 0;

// all choise
const choices=document.querySelectorAll(".choise")

// score
const yourScore = document.querySelector("#your_score");
const compScore = document.querySelector("#comp_score");

// comment
let comment = document.querySelector("#comm");


//computer choice
const comChoice = () => {
    const arr = ["Rock", "Paper", "Cissors"];
    const randIdx = Math.floor(Math.random() * 3);
    // console.log(arr[randIdx]);
    return arr[randIdx];
};



const playGame = (userChoice) => {
    //Generate computer choice call
    const compChoice = comChoice();

    console.log("you ",userChoice);
    console.log("com ",compChoice);

    // let userWin = true;

    if (userChoice === compChoice) {
      //Draw Game
      comment.innerText = "Game was Draw. Play again.";
      comment.style.backgroundColor = "#081b31";
    } else {
      if (userChoice === "Rock") {
        //scissors, paper
          // userWin = compChoice === "paper" ? false : true;
          if (compChoice === "Paper") {
              //   userWin = false;
              cs++;
              compScore.innerText = cs;
              comment.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
              comment.style.backgroundColor = "red";
          } else {
            us++;
            yourScore.innerText = us;
            comment.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            comment.style.backgroundColor = "green";
          }
      } else if (userChoice === "Paper") {
        //rock, scissors
          // userWin = compChoice === "scissors" ? false : true;
          if (compChoice === "Cissors") {
              // userWin = false;
              cs++;
        compScore.innerText = cs;
        comment.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        comment.style.backgroundColor = "red";
          } else {
            us++;
            yourScore.innerText = us;
            comment.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            comment.style.backgroundColor = "green";
          }
          
      } else {
        //rock, paper
          // userWin = compChoice === "rock" ? false : true;
          if (compChoice === "Rock") {
              // userWin = false;
              cs++;
        compScore.innerText = cs;
        comment.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        comment.style.backgroundColor = "red";
          }
          else {
            us++;
            yourScore.innerText = us;
            comment.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            comment.style.backgroundColor = "green";
          }
        }
    
      /*if (userWin) {
        us++;
        yourScore.innerText = us;
        comment.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        comment.style.backgroundColor = "green";
      } else {
        cs++;
        compScore.innerText = cs;
        comment.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        comment.style.backgroundColor = "red";
      }*/
    }
  };

choices.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoice = choise.getAttribute("id");
        playGame(userChoice);
    });
});

document.querySelector("#ret").addEventListener("click", () => {
  us = 0,cs = 0;
  yourScore.innerText = us;
  compScore.innerText = cs;
});


