//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("ques-container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let startImage = document.getElementById("start-image");
let questionCount;
let scoreCount = 0;
let count = 31;
let countdown;

// Function to display image for a specific duration
function displayImageForDuration(duration) {
    const startImage = document.getElementById("start-image");
    startImage.style.display = "block"; // Show the image

    setTimeout(() => {
        startImage.style.display = "none"; // Hide the image after the duration
        // Show the quiz content after hiding the image
        document.getElementById("start-screen").classList.remove("hide");
    }, duration);
}

// Call the function to display the image for 10 seconds (10000 milliseconds)
displayImageForDuration(5000);

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById('Name');
    const rollNumberInput = document.getElementById('Rno');
    const genderInput = document.getElementById('Gender');
    const BranchYearInput = document.getElementById('BranchYear');
    const MobileNumberInput = document.getElementById('MobileNumber');
  
    function checkInputs() {
      const nameValue = nameInput.value.trim();
      const rollNumberValue = rollNumberInput.value.trim();
      const genderValue = genderInput.value.trim();
      const BranchYearValue = BranchYearInput.value.trim();
      const MobileNumberValue = MobileNumberInput.value.trim();
  
      if (nameValue !== '' && rollNumberValue !== '' && genderValue !== '' && BranchYearValue !== '' && MobileNumberValue !== '') {
        startButton.disabled = false;
      } else {
        startButton.disabled = true;
      }
    }
  
    nameInput.addEventListener('input', checkInputs);
    rollNumberInput.addEventListener('input', checkInputs);
    genderInput.addEventListener('input', checkInputs);
    BranchYearInput.addEventListener('input', checkInputs);
    MobileNumberInput.addEventListener('input', checkInputs);
});
  
//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
    nextBtn.disabled = true;
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>`;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {

    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    userOption.classList.add("selected");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        scoreCount++;
    } 
    if (userSolution !== ""){
        nextBtn.disabled = false;
    }
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//Next Button
nextBtn.addEventListener("click", (displayNext = () => {
    //increment questionCount
    questionCount += 1;        
    //if last question
    if (questionCount == quizArray.length) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;
    }else {
        //display questionCount
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + quizArray.length + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 31;
        clearInterval(countdown);
        timerDisplay();
    }
}));

// Display the image for 15 seconds when the window loads
window.onload = () => {
    displayImageFor15Seconds();
};
  
//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};