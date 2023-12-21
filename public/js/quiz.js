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
let totalQuestions = 20;
let scoreCount = 0;
let count = 31;
let countdown;


// Function to display image for a specific duration
function displayImageForDuration(duration) {
    const startImage = document.getElementById("start-image");
    const landingPage = document.getElementsByClassName("landingpage")[0];
    startImage.style.display = "block"; // Show the image

    setTimeout(() => {
        startImage.style.display = "none"; // Hide the image after the duration
        landingPage.style.display = "none";
        // Show the quiz content after hiding the image
        startScreen.classList.remove("hide");
    }, duration);
}

// Call the function to display the image for 10 seconds (10000 milliseconds)
displayImageForDuration(3000);

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById('Name');
    const rollNumberInput = document.getElementById('Rno');
    const genderInput = document.getElementById('Gender');
    const branch = document.getElementById('Branch');
    const year = document.getElementById('Year');
    const MobileNumberInput = document.getElementById('MobileNumber');

    function checkInputs() {
        const nameValue = nameInput.value.trim();
        const rollNumberValue = rollNumberInput.value.trim();
        const genderValue = genderInput.value.trim();
        const BranchValue = branch.value.trim();
        const YearValue = year.value.trim();
        const MobileNumberValue = MobileNumberInput.value.trim();

        if (nameValue !== '' && rollNumberValue !== '' && genderValue !== 'Gender' && BranchValue !== 'Branch' && YearValue !== 'Year' && MobileNumberValue !== '' && MobileNumberValue.length == 10 && rollNumberValue.length == 11) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', checkInputs);
    rollNumberInput.addEventListener('input', checkInputs);
    genderInput.addEventListener('input', checkInputs);
    branch.addEventListener('input', checkInputs);
    year.addEventListener('input', checkInputs);
    MobileNumberInput.addEventListener('input', checkInputs);
});

//when user click on start button
startButton.addEventListener("click", async () => {
    const userdata = {
        Name: document.getElementById('Name').value.trim(),
        RollNumber: document.getElementById('Rno').value.trim(),
        BranchYear: document.getElementById('Branch').value.trim() + " " + document.getElementById('Year').value.trim(),
        Gender: document.getElementById('Gender').value.trim(),
        MobileNumber: document.getElementById('MobileNumber').value.trim()
    }
    console.log(userdata);
    await fetch('/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
        .then(response => {
            if (response.status === 400) {
                Swal.fire({
                    icon: 'info',
                    title: 'Thank You',
                    html:`Already submitted quiz! <div style="width:100%;display:flex;align-items:center;justify-content:space-evenly;"> Follow for results  <a href="https://www.instagram.com/ethiccraft_ymca/"><i class="fab fa-instagram fa-3x" style="color: rgb(212, 43, 212)"></i></a> <a href="https://chat.whatsapp.com/KRjUaGoQXAsJybKFBg2HHU"><i class="fab fa-whatsapp fa-3x" style="color: green"></i></a> </div>` ,
                })
                console.log("You have already submitted the Quiz");
            }
            else {
                console.log("You have not submitted the Quiz");
                startScreen.classList.add("hide");
                displayContainer.classList.remove("hide");
                initial();
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });


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

        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + totalQuestions + " Question";
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


    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //remove selected class from all options
    options.forEach((element) => {
        element.classList.remove("selected");
    });
    userOption.classList.add("selected");
    //if user clicked answer == correct option stored in object

    nextBtn.disabled = false;

}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 31;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//Next Button
nextBtn.addEventListener("click", (displayNext = () => {
    //get user selected option
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    let userSolution = "";
    options.forEach((element) => {
        if (element.classList.contains("selected")) {
            userSolution = element.innerHTML;
        }
    });

    if (userSolution === quizArray[questionCount].correct) {
        scoreCount++;
    }

    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == totalQuestions) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;

        // progress bar
        let progress = document.getElementsByClassName("progress")[0];
        progress.style.width = scoreCount / totalQuestions * 100 + "%";

    } else {
        //display questionCount
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + totalQuestions + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 31;
        clearInterval(countdown);
        timerDisplay();
    }
    //update score in database
    const userdata = {
        RollNumber: document.getElementById('Rno').value.trim(),
        Currcount: questionCount,
        Score: scoreCount
    }
    fetch('/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(userdata)
    })
        .then(response => {
            console.log(response);
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}));


Swal.fire({
    title: "<i>Please Read Carefully</i>",
    html: "1. There will be 20 questions.<br>2. Each question will have 4 options.<br>3. You have 30 seconds to answer each question.<br>4. After submitting please join the whatsapp group!<br>5. <b>Do not refresh the page</b>",
    confirmButtonText: "<u>Done</u>",
    confirmButtonColor: "#00b300",
    allowOutsideClick: false,
});
