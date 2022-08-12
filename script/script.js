const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "An external style sheet is ideal when the style is applied to",
        a: "Many pages",
        b: "Few pages",
        c: "Single pages",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the style sheet is also known as Embedded Style Sheet ?",
        a: " Inline Style Sheet",
        b: "External Style Sheet",
        c: "Document Style Sheet",
        d: "None of the above",
        correct: "c",
    },
    {
        question: " Which is the superior styles of html ?",
        a: "frame",
        b: "frames",
        c: "iframe",
        d: "CSS",
        correct: "d",
    },
    {
        question: " The Disadvantages of Cascading Style Sheets is",
        a: "Browsers Compatibility",
        b: "Low Performance",
        c: "High Performance",
        d: "All of the above",
        correct: "a",
    },
    {
        question: " A _____ tag is used to specify that the browser is to fetch and use an external style sheet file",
        a: " <src>",
        b: "<sheet>",
        c: "<link>",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "To use inline styles you use the style attribute in the _____ tag",
       
        a: " link tag",
        b: "style tag",
        c: "relevant tag",
        d: "None of the above",
        correct: "c",
    },
    {
        question: " CSS provided the basic styles such as",
        a: " setting margins",
        b: "specifying font and font styles",
        c: "applying colors",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which property is used to increase or decrease the size of a font ?",
        a: " font-weight",
        b: "font",
        c: "font-size",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which property is used to set the width of an image border ?",
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
function set_pro_width (){document.getElementById("bar").style.width = t-- +"%" 
//console.log("hello")
//console.log(t)
document.getElementById("bar").innerHTML = t+"%"
}
t= 100
loadQuiz()
function start_timer(){
    t=100
   setInterval(set_pro_width,1000)
}
function loadQuiz() {
    start_timer()
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
            let left = quizData.length - currentQuiz
            let left1 = document.getElementsByClassName("quest_left")[0].innerHTML = "You have "+ left +" question left"
        } else {
            document.body.style.backgroundImage = "url('../images/youdidit-firew.gif')"
  
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
                <button onclick="location.href='main.html'">Back</button>
            `
        }
    }
})