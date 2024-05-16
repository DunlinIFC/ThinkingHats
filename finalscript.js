// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "Q1/15: You stumbled upon a torn map leading to the legendary Wizard of Colors. What's your move?",
        image: "map.gif",
        answers: {
            Red: {
                text: "Search frantically for the missing piece. ",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Blue: {
                text: " Craft a clever plan without the missing piece.",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0  },
            },
        },
    },
    {
        question: "Q2/15:  Suddenly, you looked ahead and spotted a colourful boat along a rainbow river.",
        image: "images/Q2.gif",
        answers: {
            Blue: {
                text: "Imagine an epic boat adventure and gather supplies.",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0 },
            },
            White: {
                text: " Inspect the boat's construction and durability for the journey.",
                scores: { White: 1, Red:0, Black:0, Blue:0, Yellow:0, Green:0  },
            },
        },
    },
    {
        question: "Q3/15: Before you can do anything, the bus stops and everything around you floats up!",
        image: "images/Q3.gif",
        answers: {
            Yellow: {
                text: "Yellow",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
            Green: {
                text: "Green",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1 },
            },
        },
    },
    {
        question: "Q4/15: Amidst the surprise, your eyes catch something drifting past the window.",
        image: "images/Q4.gif",
        answers: {
            Red: {
                text: "Red",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Black: {
                text: "White",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0 },
            },
        },
    },
    {
        question: "Q5/15: 'Welcome Aboard!' a small robot appears and annouces, 'We will reach our destination in 5 months 6 days and 2 hours!'",
        image: "images/Q5.gif",
        answers: {
            Blue: {
                text: "Blue",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "Yellow",
                scores: {White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },
    },
    {
        question: "Q6/15: The robot just points to the back of the bus which now looks more like inside of a spaceship! What do you want to see first?",
        image: "images/Q6.gif",
        answers: {
            Black: {
                text: "Black",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0 },
            },
            White: {
                text: "White",
                scores: { White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0 },
            },
        },
    },
    {
        question: "Q7/15: On the way back to your seat, you are surrounded by cats! 'Unauthorized passenger detected, CAPTURE CAPTURE!'",
        image: "images/Q7.gif",
        answers: {
            Red: {
                text: "Red",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0}
            },
            White: {
                text: "White",
                scores: { White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0 },
            },
        },
    },
    {
        question: "Q8/15: Suddenly, the robot glides in, it whispers something to the cats that makes them stop.",
        image: "images/Q8.gif",
        answers: {
            Black: {
                text: "Black",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "Yellow",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },
    },
    {
        question: "Q9/15: The robot transforms into a giant vacuum cleaner, the cats use it to point at you!",
        image: "images/Q9.gif",
        answers: {
            Blue: {
                text: "Blue",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0 },
            },
            Green: {
                text: "Green",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1 },
            },
        },
    },
    {
        question: "Q10/15: You run past the gift shop. Looks like you got rid of them. It wouldn't hurt to get some souvenirs, right?",
        image: "images/Q10.gif",
        answers: {
            Red: {
                text: "Red",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "Yellow",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },

    },
    {
        question: "Q11/15: The giant vacuum cleaner suddenly emerges in front of you! You're sucked into its vortex!!!",
        image: "images/Q11.gif",
        answers: {
            White: {
                text: "White",
                scores: {White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "Yellow",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },
    },
    {
        question: "Q12/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            Red: {
                text: "Red",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "Green",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
    
    {
        question: "Q12/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            Red: {
                text: "Red",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "Green",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
    {
        question: "Q13/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            Blue: {
                text: "Blue",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0},
            },
            Black: {
                text: "Black",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0},
            },
        },
    },
    {
        question: "Q14/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            White: {
                text: "White",
                scores: { White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "Green",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
    
    {
    
        question: "Q15/15:When you look up again, the inspector's already gone. You glance outside the window, darkness creeps in as the bus enters another tunnel...",
        image: "images/Q13.gif",
        answers: {
            Black: {
                text: "Black",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "Green",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
];

const resultOptions = {
    "Green & Yellow": {
        image: "Lime .png",
    },
    "Yellow & Green": {
        image: "Lime .png",
    },
    "Green & Black": {
        image: "Dark Green.png",
    },
    "Black & Green": {
        image: "Dark Green.png",
    },
    "Green & White": {
        image: "Mint.png"
    },
    "White & Green": {
        image: "Mint.png"
    },
    "Green & Red": {
        image: "Brown.png"
    },
    "Red & Green": {
        image: "Brown.png"
    },
    "Yellow & Blue": {
        image: "Screenshot 2024-04-18 202755.png"
    },
    "Blue & Yellow": {
        image: "Screenshot 2024-04-18 202755.png"
    },
    "Green & Blue": {
        image: "Teal.png"
    },
    "Blue + Green ": {
        image: "Teal.png"
    },
    "White & Red": {
        image: "Pink.png"
    },
    "Red & White": {
        image: "Pink.png"
    },
    "White & Black": {
        image: "Grey.png"
    },
    "Black & White ": {
        image: "Grey.png"
    },
    "White & Yellow": {
        image: "Cream.png"
    },
    "Yellow & White": {
        image: "Cream.png"
    },
    "White & Blue": {
        image: "Sky.png"
    },
    "Blue & White": {
        image: "Sky.png"
    },
    "Red & Blue": {
        image: "Purple.png"
    },
    "Blue & Red": {
        image: "Purple.png"
    },
    "Red & Black": {
        image: "Maroon.png"
    },
    "Black & Red": {
        image: "Maroon.png"
    },
    "Red & Yellow": {
        image: "Orange.png"
    },
    "Yellow & Red": {
        image: "Orange.png"
    },
    "Blue & Black": {
        image: "Navy.png"
    },
    "Black & Blue": {
        image: "Navy.png"
    },
    "Yellow & Black": {
        image: "Mustard.png"
    },
    "Black & Yellow": {
        image: "Mustard.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    //const pairs = ["IE", "NS", "TF", "PJ"];
    //pairs.forEach(pair => {
    //    const options = pair.split('');
    //   const scores = options.map(option => userAnswers[option] || 0);
    //    const topOptionIndex = scores.indexOf(Math.max(...scores));
    //    const topOption = options[topOptionIndex];
    //    topLetters[pair] = topOption;
    //});

    //each pair
    //const result = pairs.map(pair => topLetters[pair]).join('');

    const result = Object.entries(userAnswers).sort((a,b)=>b[1]-a[1]);
    const resultStr = result[0][0]+" & "+result[1][0];
    const hatImage = resultOptions[resultStr];

    //alert(resultStr);
    //show result
    //const personalityData = resultOptions[result];
    if (resultStr) {
        resultTextContainer.innerHTML = resultStr;
        if(hatImage) {
            resultImage.src = "images/"+hatImage.image
        }
        //resultImage.src = "images/"+personalityData.image;
        //resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


