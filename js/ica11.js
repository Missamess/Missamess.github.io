//STARTER
const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote)
console.log ("CODE IS TRACKING.");
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"
async function getQuote(){
//TRY & ERROR
try {
    const response = await fetch (endpoint);
    if (!response.ok){
        throw Error(response.statusText)
    }
    const json = await response.json()
    displayQuote(json.question);
}
catch (err) {
    console.log(err);
    alert('Fetch Failed');
}
//DISPLAY / OUTPUT
}
function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text")
    quoteText.textContent = quote;
}
getQuote();