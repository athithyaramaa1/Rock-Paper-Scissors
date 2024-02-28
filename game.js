let logos = document.querySelectorAll(".l");
let us = 0;
let cs = 0;
let usSpan = document.getElementById("us");
let csSpan = document.getElementById("cs");

for (let i = 0; i < logos.length; i++) {
    logos[i].addEventListener("click", function (event) {
        let clickedId = event.target.id;
        let compiler = document.getElementById("comp");
        let randomNum = Math.floor(Math.random() * 3);
        let img = document.createElement("img");

        if (randomNum === 0) {
            img.src = "./assets/rock-hand.png";
            img.style.height = "250px";
        } else if (randomNum === 1) {
            img.src = "./assets/paper-hand.png";
            img.style.height = "250px";
        } else {
            img.src = "./assets/scissors-hand.png";
            img.style.height = "250px";
        }

        let choices = ["r", "p", "s"];
        let userChoice = clickedId.charAt(0);
        let compChoice = choices[randomNum];

        function determineWinner(userChoice, compChoice) {
            if (userChoice === compChoice) {
                return "It's a tie";
            } else if (
                (userChoice === "r" && compChoice === "s") ||
                (userChoice === "p" && compChoice === "r") ||
                (userChoice === "s" && compChoice === "p")
            ) {
                us += 1;
                usSpan.innerText = us;
                if (us === 5) {
                    let message = document.getElementById("msg");
                    message.innerText = "You won the game";

                    let logoId = document.getElementById("lId");
                    logoId.style.visibility = "hidden";

                    let playAgain = document.getElementsByTagName("button")[0];
                    playAgain.innerText = "Play Again";
                    playAgain.style.display = "block";
                    playAgain.addEventListener("click", function () {
                        window.location.href = "./game.html";
                    });
                }
                return "You won!";
            } else {
                cs += 1;
                csSpan.innerText = cs;
                if (cs === 5) {
                    let message = document.getElementById("msg");
                    message.innerText = "You lose the game";

                    let logoId = document.getElementById("lId");
                    logoId.style.visibility = "hidden";

                    let playAgain = document.getElementsByTagName("button")[0];
                    playAgain.innerText = "Play Again";
                    playAgain.style.display = "block";
                    playAgain.addEventListener("click", function () {
                        window.location.href = "./game.html";
                    });
                }
                return "You lose!";
            }
        }

        let output = determineWinner(userChoice, compChoice);
        compiler.innerHTML = "";
        compiler.appendChild(img);
    });
}

let rockImg = document.getElementById("rI");
let paperImg = document.getElementById("pI");
let scissorsImg = document.getElementById("sI");

let rock = document.getElementById("rL");
let paper = document.getElementById("pL");
let scissors = document.getElementById("sL");

rock.addEventListener("click", () => {
    displayImage(rockImg);
});

paper.addEventListener("click", () => {
    displayImage(paperImg);
});

scissors.addEventListener("click", () => {
    displayImage(scissorsImg);
});

function displayImage(image) {
    hideAllImages();
    image.style.display = "block";
}

function hideAllImages() {
    const allImages = document.querySelectorAll(".g-i");
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].style.display = "none";
    }
}
