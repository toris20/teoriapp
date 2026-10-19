const questions = [

{
question:"Hva betyr gult trafikklys?",
answers:[
"Stans hvis det kan gjøres trygt",
"Kjør fortere",
"Ignorer signalet",
"Kun for fotgjengere"
],
correct:0,
explanation:"Gult lys varsler at signalet blir rødt. Du skal stanse dersom det kan skje uten fare."
},

{
question:"Hva gjør du ved et gangfelt der noen vil krysse?",
answers:[
"Senker farten og stopper ved behov",
"Kjører videre",
"Bruker horn",
"Svinger utenom"
],
correct:0,
explanation:"Fotgjengere som skal krysse i gangfelt skal kunne gjøre dette trygt."
},

{
question:"Hva gjør alkohol med kjøreevnen?",
answers:[
"Svekker vurderingsevne",
"Forbedrer reaksjonstiden",
"Gir bedre nattsyn",
"Ingen effekt"
],
correct:0,
explanation:"Alkohol svekker reaksjonsevne, oppmerksomhet og vurdering."
}

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

const q = questions[currentQuestion];

let html = `
<h2>${q.question}</h2>
`;

q.answers.forEach((answer,index)=>{
html += `
<button class="answer"
onclick="checkAnswer(${index})">
${answer}
</button>
`;
});

document.getElementById("quiz").innerHTML = html;
}

function checkAnswer(selected){

const q = questions[currentQuestion];

if(selected === q.correct){

score++;

document.getElementById("result").innerHTML =
`
<h3 style="color:green;">✅ Riktig</h3>
<p>${q.explanation}</p>
`;

}else{

document.getElementById("result").innerHTML =
`
<h3 style="color:red;">❌ Feil</h3>
<p><b>Riktig svar:</b>
${q.answers[q.correct]}</p>
<p>${q.explanation}</p>
`;
}

speakText(
q.question +
". " +
q.answers.join(". ")
);
}

function nextQuestion(){

currentQuestion++;

if(currentQuestion >= questions.length){

document.getElementById("quiz").innerHTML="";

document.getElementById("result").innerHTML=
`
<h2>Ferdig!</h2>
<p>Poeng:
${score} av ${questions.length}</p>
`;

return;
}

loadQuestion();
}

function speakText(text){

const speech =
new SpeechSynthesisUtterance(text);

speech.lang = "nb-NO";

speechSynthesis.speak(speech);
}

loadQuestion();
