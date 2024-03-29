let questions =[
    {
        "question": "quelle est la specialité du musée tussauds de Londres?",
        "options":[
            "l'égypte ancienne", 
            "les statues de cire",
            "les sciences naturelles",
            "le football"
        ],
        "correctIndex" : 1
    },
    {
        "question": "de quel sport, le superbowl est-il le match de la grande finale annuelle?",
        "options":[
            "baseball ",
            "basketball",
            "football americain", 
            "tennis"

        ],
        "correctIndex" : 2
    },
    {
        "question": "qui occupait la poste de vice-president(e) des etats-unis d'Amerique lors de la presidence de Barack Obama?",
        "options":[
            "Hillary Clinton ", 
            "John Kerry", 
            "Al Gore", 
            "Joe Biden"

        ],
        "correctIndex" : 3
    },
    {
        "question": "Quelle fleur est le symbole de la Turquie?",
        "options":[
             "la tulipe ", 
             "la rose", 
             "le lys", 
             "l'orchidée"

        ],
        "correctIndex" : 0
    },
    {
        "question": "qui a été la premiere epouse de l'acteur Brad Pitt?",
        "options":[
            "Angelina Jolie ", 
            "Jennifer Anniston",
            "Gwen Stefani", 
            "Gwyneth Paltrow"

        ],
        "correctIndex" : 1
    },
    {
        "question": "de combien d'oeuvres se compose une tétralogie?",
        "options":[
             "3 ", 
             "4", 
             "5", 
             "6"

        ],
        "correctIndex" : 0
    },
    {
        "question": "lequel de ces grands films n'est pas basé sur un roman ou une nouvelle?",
        "options":[
            "Forrest Gump ", 
            "Jurassic Park ", 
            "Gatsby le magnifique", 
            "King Kong"

        ],
        "correctIndex" : 3
    },
    {
        "question": "quel Tennisman est devenu en 2022, le plus jeune numero 1 mondial de l'histoire à seulement 19 ans et 4 mois?",
        "options":[
            "Alexander Zverev ", 
            "Holger Rune ", 
            "Carlos Alcaraz", 
            "Dominic Thiem"

        ],
        "correctIndex" : 2
    },
    {
        "question": "qui est l'auteur du roman Les misérables ?",
        "options":[
            "Jean-Paul Sartre ", 
            "Victor Hugo ", 
            "Albert Camus", 
            "Marcel Proust"

        ],
        "correctIndex" : 1
    },
    {
        "question": "qui a gagné la coupe du monde en 2014?",
        "options":[
            "Brésil ", 
            "Argentine ", 
            "Algérie", 
            "Allemagne"

        ],
        "correctIndex" : 3
    },
    {
        "question": "quelle mer borde la Tunisie?",
        "options":[
            "aucune ", 
            "la mediterannée ", 
            "la mer morte", 
            "la mer adriatique"

        ],
        "correctIndex" : 1
    },
    {
        "question": "en quelle année Walt-Disney est-il decedé?",
        "options":[
             "1966 ", 
             "1968 ", 
             "1970", 
             "1972"

        ],
        "correctIndex" : 0
    }
]
let currentQuestion = 0;
let score = 0;

showNextQuestion(currentQuestion)

function showNextQuestion(questionIndex) {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ''; 
    const question = questions[questionIndex];
    
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <h2>${question.question}</h2>
        <div class="options" id="options${questionIndex}">
            ${question.options.map((option, optionIndex) => `
                <div class="option" onclick="checkAnswer(${questionIndex}, ${optionIndex}, ${question.correctIndex})">${option}</div>
            `).join('')}
        </div>
    `;
    quizContainer.appendChild(questionElement);
}

function checkAnswer(questionNumber, selectedOptionIndex, correctOptionIndex) {
    const options = document.getElementById(`options${questionNumber}`).children;
    for (let i = 0; i < options.length; i++) {
        if (i === correctOptionIndex) {
            options[i].classList.add('correct');
        } else {
            options[i].classList.add('incorrect');
        }
        options[i].onclick = null;
    }
    if (selectedOptionIndex === correctOptionIndex) {
        options[selectedOptionIndex].classList.add('correct');
        score++;
    } else {
        options[selectedOptionIndex].classList.add('incorrect');
    }
    
    setTimeout(() => {
        if (questionNumber < questions.length - 1) {
            showNextQuestion(questionNumber + 1);
        } else {
            displayFinalResult();
        }
    }, 2000); 
}

function displayFinalResult() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
        <h2>Votre score est ${score} sur ${questions.length}.</h2>
        <p>Merci pour votre participation!</p>
    `;
}
