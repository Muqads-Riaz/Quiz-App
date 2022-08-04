var questions =[
{
    question : "What is our country name",
    options : ["Pakistan","China","America","India"],
    correctOption : "Pakistan" 
},
{
    question : "What is our national language",
    options : ["Urdu","Chinese","English","Punjabi"],
    correctOption : "Urdu" 
},
{
    question : "Allama Iqbal is our national _________",
    options : ["Actor","Poet","Writer","Singer"],
    correctOption : "Poet" 
},
{
    question : "_________ is the founder of pakistan.",
    options : ["Imran Khan","Allama Iqbal","Quaid-e-Azam"],
    correctOption : "Quaid-e-Azam" 
},
{
    question : "Pakistan is an islamic country",
    options : ["True","False"],
    correctOption : "True" 
}
]
var question = document.getElementById('question');
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var ansOptions = document.getElementById('ansOptions');
var allbtns = ansOptions.getElementsByTagName ("BUTTON");
var indexNumber = 0;
var score = 0;
function start(){
    question.innerHTML = questions[indexNumber].question;
    ansOptions.innerHTML = "";
    for(var i=0; i < questions[indexNumber].options.length; i++){
        ansOptions.innerHTML += `<div class="col-md-6">
        <button onclick="checkAnswer(this,'${questions[indexNumber].correctOption}')" class="btn w-100 pink text-dark fs-5 px-2 py-1 mb-2 rounded">${questions[indexNumber].options[i]}</button>
      </div>`   
    }
    totalQuestion.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1; 
}
start();

function next(){
    if(indexNumber == questions.length-1){
        alert("Quiz completed & your Score is " + score )
    }else{
    indexNumber = indexNumber + 1;
    start()
    }
}
function checkAnswer(element, correctOption){
    var userOption = element.innerHTML;
    if(userOption == correctOption){
        score = score + 1;
        return score;
    }
    console.log(score);

for(var i = 0 ; i < allbtns[i].length ; i++){
    allbtns[i].disabled = true;
    if(allbtns[i].innerHTML==correctOption){
        allbtns[i].className +="bg-success"  
    }
    if(allbtns[i].innerHTML != correctOption){
        allbtns[i].className +="bg-danger"  
    }
    
}
}