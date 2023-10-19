let qtext = document.querySelector("#qtext");
let qauth = document.querySelector("#qauth");
let newQ = document.querySelector('#newQ');

function getQuote(){
    new Promise(() =>{
        let res = fetch('https://api.quotable.io/random');
        newQ.innerHTML = "Loading";
        newQ.classList.add('loadingClass');
        res.then((response) =>{
            return response.json();
        }).then((finalRes) => {
            newQ.innerHTML = "New Quote";
            qtext.innerHTML = finalRes.content;
            qauth.innerHTML = finalRes.author;
            newQ.classList.remove('loadingClass');
        });
        
    });
}

function copyText(){
    let copiedText = qtext.innerHTML;
    navigator.clipboard.writeText(copiedText).then(() =>{
        alert(`${copiedText}`);
    },(err) =>{
        alert("Error while copying the text !");
    })
}


function startSpeech(){
    let msg = qtext.innerHTML;
    let textToSpeech = new SpeechSynthesisUtterance(msg);
    // textToSpeech.
    textToSpeech.lang = 'ar-SA';
    window.speechSynthesis.speak(textToSpeech); 
    // console.log(window.speechSynthesis.getVoices());
}
