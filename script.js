const button = document.getElementById('diceContainer')

button.addEventListener('click', ()=>{
    button.classList.add('glow');
    button.style.backgroundColor = '#1aff88';


    setTimeout(() => {
        button.classList.remove('glow');
        button.style.backgroundColor = '#53ffab';
    }, 3000);
})



async function fetchData() {
try {
    let response = await fetch('https://api.quotable.io/random');

    let data = await response.json();

    let dataArray = [];
    dataArray.push(...data);

    console.log(dataArray);    
} catch (error) {
    
}
}
