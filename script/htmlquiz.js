const quizData = [
    {
        question: "What do you understand by HTML?
        ",
        a: "HTML describes the structure of a webpage
       ",
        b: "HTML is the standard markup language mainly used to create web pages",
        c: "HTML consists of a set of elements that helps the browser how to view the content
        ",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Who is the father of HTML?
        ",
        a: "Rasmus Lerdorf",
        b: "Tim Berners-Lee",
        c: "Brendan Eich ",
        d: "Sergey Brin",
        correct: "b",
    },
    {
        question: "HTML stands for ___",
        a: "HyperText Markup Language
        ",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        correct: "a",
    },
    {
        question: " Which is used to read an HTML page and render it? ",
        a: "head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        correct: "b",
    },
    {
        question: "Which is used to create Web Pages ?
       ",
        a: "C++",
        b: "Java",
        c: "HTML",
        d: "JVM",
        correct: "c",
    },
    {
        question: "HTML is a set of markup ___.
        ",
        a:"tags",
        b: "sets",
        c: "attributes",
        d: "None of the above",
        correct: "a",
    },
    {
        question:  HTML tags are used to describe document ___. ",
        a: "definition
        ",
        b: "content",
        c: "language",
        d: "model",
        correct: "b",
    },
    {
        question: " HTML program is saved using ___ extension.
        ",
        a: ".htmn
        ",
        b: ".html
        ",
        c: ".htnl",
        d: ".htwl",
        correct: "b",
    },
    {
        question: "HTML program can be read and rendered by ___.

        ",
        a: "Compiler",
        b: "Server",
        c: "Web Browser",
        d: "Interpreter",
        correct: "c",
    },
    {
        question: "Which property is used to set the width of an image border ?

        ",
        a: "width-of-border",
        b: " img-width",
        c: "border-width-img",
        d: "border",
        correct: "d",
    },
   
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})