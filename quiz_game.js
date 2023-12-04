const questions = [
    {
        question: "What song on the show Lip Synced Battle that Tom Holland lip-synced?",
        answers: [
            {text: "Umbrella by Rihanna", correct: true},
            {text: "Love Me by Justin Bieber", correct: false},
            {text: "My Boo by Usher", correct: false},
            {text: "Replay by Iyaz", correct: false},

        ]
    },
    {
        question: "In what Country did the first Starbucks open outside of North America?",
        answers: [
            {text: "Las Vegas", correct: false},
            {text: "Japan", correct: true},
            {text: "San Francisco, California", correct: false},
            {text: "Toronto, Canada", correct: false}


        ]
    },
    {
        question: "Pocahontas was baptized and given what English name?",
        answers: [
            {text: "Asuncion", correct: false},
            {text: "Thalia", correct: false},
            {text: "Rebecca", correct: true},
            {text: "Darlene", correct: false},
        ]
    },
    {
        question: "Sino ang pinakakilalang propetang muslim?",
        answers: [
            {text: "Ibrahim", correct: false},
            {text: "Muhammad", correct: true},
            {text: "Abdullah", correct: false},
            {text: "Ali", correct: false}


        ]
    },
    {
        question: "Who was the first woman pilot to fly solo across the Atlantic?",
        answers: [
            {text: "Amelia Earhart", correct: true},
            {text: "Eileen Collins", correct: false},
            {text: "Jacqueline Conchran", correct: false},
            {text: "Harriet Quimby", correct: false}
        ]
    },
    {
        question: "In what year was the internet opened to the public?",
        answers: [
            {text: "2005", correct: false},
            {text: "1984", correct: false},
            {text: "1986", correct: false},
            {text: "1993", correct: true}
        ]
    },
    {
        question: "Ilang isla meron ang pilipinas?",
        answers: [
            {text: " 7,567", correct: false},
            {text: "1,546", correct:false},
            {text: "7,641", correct: true},
            {text: "7,642", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Claude Monet", correct: false},
            {text: "Jan Van Eyck", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Pablo Picasso", correct: false}
        ]
    },
    {
        question: "How many Harry Potter books and movies are there? (Hint: They are not the same number!)",
        answers: [
            {text: "7 books & 8 movies", correct: true},
            {text: "8 books & 7 movies", correct: false}
           
        ]
    },
    {
        question: "Pambansang bulaklak",
        answers: [
            {text: "Bugambilya", correct: false},
            {text: "Sampanguita", correct: true},
            {text: "Santan", correct: false},
            {text: "Rosas", correct: false}
        ]
    },
    {
        question: "Which animals lays eggs?",
        answers: [
            {text: "Duck", correct: true},
            {text: "Dog", correct: false},
            {text: "Cat", correct: false},
            {text: "Sheep", correct: false},

        ]
    },
    {
        question: "A male cow is called?",
        answers: [
            {text: "Monkey", correct: false},
            {text: "Sheep", correct: false},
            {text: "ox", correct: true},
            {text: "Dog", correct: false},

        ]
    },
    {
        question: "What part of the body helps you move?",
        answers: [
            {text: "Pancreas", correct: false},
            {text: "Legs", correct: false},
            {text: "Muscles", correct: true},
            {text: "Lungs", correct: false},

        ]
    },
    {
        question: "The two holes of the nose are called?",
        answers: [
            {text: "Nostrills", correct: true},
            {text: "Nails", correct: false},
            {text: "Hair", correct: false},
            {text: "Eyelids", correct: false},

        ]
    },
    {
        question: "Legs have feet and arms have_?",
        answers: [
            {text: "Ankles", correct: false},
            {text: "Veins", correct: false},
            {text: "Hands", correct: true},
            {text: "bone", correct: false},

        ]
    },
    {
        question: "Who invented the first functional telephone?",
        answers: [
            {text: "Albert Einstein", correct: false},
            {text: "Nicola Tesla", correct: false},
            {text: "Thomas Alva Edison", correct: false},
            {text: "Alexander Graham Bell", correct: true},

        ]
    },
    {
        question: "Your hands have four fingers and a _?",
        answers: [
            {text: "Knee", correct: false},
            {text: "Ankle", correct: false},
            {text: "Elbow", correct: false},
            {text: "Thumb", correct: true},

        ]
    },
    {
        question: "Animals that suckle their young one are called?",
        answers: [
            {text: "Reptiles", correct: false},
            {text: "Birds", correct: false},
            {text: "Mammals", correct: true},
            {text: "Amphibians", correct: false},

        ]
    },
    {
        question: "Which is the largest land animal?",
        answers: [
            {text: "Elephant", correct: true},
            {text: "Tiger", correct: false},
            {text: "Lion", correct: false},
            {text: "Rhinoceros", correct: false},

        ]
    },
    {
        question: "_ helps pump blood through the entire body.",
        answers: [
            {text: "Lungs", correct: false},
            {text: "Kidneys", correct: false},
            {text: "Heart", correct: false},
            {text: "Brain", correct: true},

        ]
    },
    {
        question: "Add 8.563 and 4.8292.",
        answers: [
            {text: "13.6784", correct: false},
            {text: "13.3922", correct: true},
        ]
    },
    {
        question: "Which country originated the sport of curling?",
        answers: [
            {text: "Wales", correct: false},
            {text: "Scotland", correct: true},
        ]
    },
    {
        question: "What is Muhammad Alis real name?",
        answers: [
            {text: "Kassius Clay", correct: false},
            {text: "Cassius Clay", correct: true},
        ]
    },
    {
        question: "Who was Walt Disney's favorite princess?",
        answers: [
            {text: "Cinderella", correct: true},
            {text: "Bell", correct: false},
        ]
    },
    {
        question: "What symbol is used to symbolise percentage?",
        answers: [
            {text: "*", correct: false},
            {text: "%", correct: true},
        ]
    },
    {
        question: "An important ratio that helps home buyers determine how much house they can afford, DTI, stands for what in real-estate parlance?",
        answers: [
            {text: "Income to Debt", correct: false},
            {text: "Debt to Income", correct:true}
            
        ]
        
    },
    {
        question: "What is the sum of 130 + 125 + 191?",
        answers: [
            {text: "335", correct: false},
            {text: "456", correct:false},
            {text: "446", correct:true},
            
        ]
    },
    {
        question: "What is the value of Pi?",
        answers: [
            {text: "3.14159", correct: true},
            {text: "3.14743", correct:false},
            {text: "1.32", correct:false},
            
        ]
    },
    {
        question: "Who invented protractor?",
        answers: [
            {text: "Joseph Arthur", correct:false},
            {text: "Joseph Huddart", correct:true},
        ]
    },
    {
        question: "Who discovered Graph Theory",
        answers: [
            {text: "Leonhard Euler", correct: true},
            {text: "George Boole", correct:false},
            
        ]
    },
    

];
// functions//

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function start(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";

    while(answerButtons. firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
   
}


    function showScore(){
        resetState();
    
    let scoreDisplay = document.createElement("h2");
    scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}!`;
    questionElement.appendChild(scoreDisplay);

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "Play Again";
    nextButton.classList.add("btn");
    nextButton.addEventListener("click", start);
    questionElement.appendChild(nextButton);
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        start();
    }
})

start();

