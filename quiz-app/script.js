const quizData = [
    {
        question: "What is the meaning of life?",
        a: "Doing something useful",
        b: "earning money",
        c: "Fall in love", 
        d: "CODE",
        correct: "d" 
    }, {
        question: "What is the best programming language?",
        a: "JAVA",
        b: "C++", 
        c: "Python",
        d: "javascript",
        correct: "a"
    }, {
        question: "What does HTML stand for?",
        a: "Hyper Trainer Marking Language",
        b: "Hyper Text Marketing Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Leveler",
        correct: "c"
    }, {
        question: "Which of the following is the correct way to use the standard namespace in C++??",
        a: "Using namespace std;",
        b: "Using namespace standard;",
        c: "Using standard namespace;",
        d: "Standard namespace used;",
        correct: "a"
    },{
        question: "Which of the following is the correct way of making a string in Java?",
        a: 'String "Text";',
        b: "String text = 'text';",
        c: 'String text = "text"',
        d: 'String text = "text";',
        correct: "d"
    }

];

const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll('.answer');

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deSelect();
    const currentQuizData = quizData[currentQuiz];
     questionEl.innerHTML = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;
     
}

function getSelected(){
    
    
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        
        }    
    });

    return answer; 
}
function deSelect(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    


    });
}

submitBtn.addEventListener('click', () => {
    const answer =  getSelected();
     
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">RELOAD</button>
            `
        }
    }
        
    
    
})