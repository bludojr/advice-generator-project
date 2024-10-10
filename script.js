const button = document.getElementById('diceContainer');
const quote = document.getElementById('quote');
const quoteId = document.getElementById('quoteId');


const getQuote = ()=> {
    fetch("https://api.adviceslip.com/advice")
    .then((Resp) => Resp.json())
    .then((data) => {
        quote.innerHTML = '"' + data.slip.advice + '"';
        quoteId.innerHTML = data.slip.id;
    })
}

button.addEventListener('click', ()=>{
    button.classList.add('glow');
    button.style.backgroundColor = '#1aff88';
    getQuote()
    
    setTimeout(() => {
        button.classList.remove('glow');
        button.style.backgroundColor = '#53ffab';
    }, 3000);
})





