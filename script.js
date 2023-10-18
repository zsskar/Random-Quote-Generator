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
