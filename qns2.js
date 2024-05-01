const questions = [
    {
        question: "Q1/15: You're taking the bus on your way back home. It's been a loooong day, what are you thinking about?",
        image: "images/Q1.gif",
        answers: {
            Red: {
                text: "Red ",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Blue: {
                text: "Blue",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0  },
            },
        },
    },
    {
        question: "Q2/15: You look outside the windows, seems like it's going to rain soon. Suddenly everything turns into darkness!!",
        image: "images/Q2.gif",
        answers: {
            Blue: {
                text: "Blue",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0 },
            },
            White: {
                text: "*Turn around to see the other's reaction* Should I ask the driver what's going on?",
                scores: { White: 1, Red:0, Black:0, Blue:0, Yellow:0, Green:0  },
            },
        },
    },
    {
        question: "Q3/15: Before you can do anything, the bus stops and everything around you floats up!",
        image: "images/Q3.gif",
        answers: {
            Yellow: {
                text: "Ok this is weird, am I dreaming? *pinch your arm*",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
            Green: {
                text: "Is this a prank? Am I getting kidnapped by aliens?!",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1 },
            },
        },
    },
    {
        question: "Q4/15: Amidst the surprise, your eyes catch something drifting past the window.",
        image: "images/Q4.gif",
        answers: {
            Red: {
                text: "Woahhh...so many cats! How cute!! I wanna give them a hug!",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Black: {
                text: "Cats? In space? That's kinda odd... How do they survive out there?!",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0 },
            },
        },
    },
    {
        question: "Q5/15: 'Welcome Aboard!' a small robot appears and annouces, 'We will reach our destination in 5 months 6 days and 2 hours!'",
        image: "images/Q5.gif",
        answers: {
            Blue: {
                text: "Cool! A space cruise?! Where are we going? Do I get a spacesuit? This is so exciting!",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "Hey uh...Am I in space? How did I get here? When can I go home?! Why..",
                scores: {White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },
    },
    {
        question: "Q6/15: The robot just points to the back of the bus which now looks more like inside of a spaceship! What do you want to see first?",
        image: "images/Q6.gif",
        answers: {
            Black: {
                text: "Solar system themed fountain in the middle. I want to take pictures with it.",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0 },
            },
            White: {
                text: "Cozy corner with a massaging chair. I need to sit down and process.",
                scores: { White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0 },
            },
        },
    },
    {
        question: "Q7/15: On the way back to your seat, you are surrounded by cats! 'Unauthorized passenger detected, CAPTURE CAPTURE!'",
        image: "images/Q7.gif",
        answers: {
            Red: {
                text: "Woah! What do you mean unauthorized? I'm the passenger of this cruise!",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0}
            },
            White: {
                text: "Ok, I have no idea what's going on. How about we calm down and chat for a bit?",
                scores: { White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0 },
            },
        },
    },
    {
        question: "Q8/15: Suddenly, the robot glides in, it whispers something to the cats that makes them stop.",
        image: "images/Q8.gif",
        answers: {
            Black: {
                text: "Bob!! Thank you! You come to save me, right?",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "HA! That's right! Back off, cats! Am I safe to go now?!",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },
    },
    {
        question: "Q9/15: The robot transforms into a giant vacuum cleaner, the cats use it to point at you!",
        image: "images/Q9.gif",
        answers: {
            Blue: {
                text: "Throw your coat at them as distraction, run towards the big green 'EXIT' sign!",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0 },
            },
            Green: {
                text: "Run in random direction, confuse them, blend in with the crowd!",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1 },
            },
        },
    },
    {
        question: "Q10/15: You run past the gift shop. Looks like you got rid of them. It wouldn't hurt to get some souvenirs, right?",
        image: "images/Q10.gif",
        answers: {
            Red: {
                text: "Get the Jupiter headphone, wear it to hear people's thoughts!",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "Get the Mars watch, turn it and you can time travel!",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },

    },
    {
        question: "Q11/15: The giant vacuum cleaner suddenly emerges in front of you! You're sucked into its vortex!!!",
        image: "images/Q11.gif",
        answers: {
            White: {
                text: "It's ok, this is just a dream! I'll wake up soon! *close your eyes and give up*",
                scores: {White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0 },
            },
            Yellow: {
                text: "I'll find the way out! Maybe there are some secret doors! *look around for the way out*",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:1, Green:0 },
            },
        },
    },
    {
        question: "Q12/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            Red: {
                text: "Woah! I thought I was captured... Nevermind! I'm alright now, I guess? *panic in silence*",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "You won't believe it...I think I just had the wildest dream ever! *tell him about your space adventure*",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
    
    {
        question: "Q12/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            Red: {
                text: "Woah! I thought I was captured... Nevermind! I'm alright now, I guess? *panic in silence*",
                scores: { White: 0, Red:1, Black:0, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "You won't believe it...I think I just had the wildest dream ever! *tell him about your space adventure*",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
    {
        question: "Q13/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            Blue: {
                text: "Woah! I thought I was captured... Nevermind! I'm alright now, I guess? *panic in silence*",
                scores: { White: 0, Red:0, Black:0, Blue:1, Yellow:0, Green:0},
            },
            Black: {
                text: "You won't believe it...I think I just had the wildest dream ever! *tell him about your space adventure*",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0},
            },
        },
    },
    {
        question: "Q14/15: After a moment of darkness, you find yourself back in the bus. 'Are you alright?' the ticket inspector asks",
        image: "images/Q12.gif",
        answers: {
            White: {
                text: "Woah! I thought I was captured... Nevermind! I'm alright now, I guess? *panic in silence*",
                scores: { White:1, Red:0, Black:0, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "You won't believe it...I think I just had the wildest dream ever! *tell him about your space adventure*",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
    
    {
    
        question: "Q15/15:When you look up again, the inspector's already gone. You glance outside the window, darkness creeps in as the bus enters another tunnel...",
        image: "images/Q13.gif",
        answers: {
            Black: {
                text: "Wait...was that Bob?",
                scores: { White: 0, Red:0, Black:1, Blue:0, Yellow:0, Green:0},
            },
            Green: {
                text: "Oh no...Do I have to go through this again?",
                scores: { White: 0, Red:0, Black:0, Blue:0, Yellow:0, Green:1},
            },
        },
    },
];






//Initialize scores for each colour
let colourScores ={
    White:0,
    Red:0,
    Black:0,
    Yellow:0,
    Blue:0,
    Green:0
};

const userResponses = ["white", "Red", "Blue", "Black", "Yellow", "Green"];

//Function to calcuate the total score for each colour based on user responese 
function calcuateColourScores (userResponses) {
    for (let i =0; i <questions.length;i++){
    let userResponse = userResponses[i];

    //Add the scores from the users's response to the total scores for each colour
    for (let colour in colourScores){
        colourScores [colour]+= questions[i].answers[userResponse].scores[colour];

    }
}
}

calcuateColourScores(userResponses);

console.log("Colour Score", colourScores)



let currentQuestion = 0;


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        const html = generateQuestionHtml(question);
        updateQuizElement (quizElement, html);
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}

function generateQuestionHtml(question){
    let html = '<p>${question.question}<p>';
    if (question.image){
        html+='img src ="${question.image}" alt="Question ${currentQuestion +1}">';
    }
    for (const option in questions.answers){
        html += generateOptionButtonHtml (option, questions.answers[option].text);
    }
    return html;
}

function generateOptionButtonHtml(option, text){
    return'<button class ="large-rectangular" value ="${option}" id = "${option}">${text}</button>';

}

function updateQuizElement (element, content){
    element.innerHTML = content;
}

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

   

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}



function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
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


