// alert("connected");

//connect api
var api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
//function that accesses api and connects to event listeners
function getQuote(){
    // fetch gets URL;
    fetch(api)
        // .then() converts resons to json
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
    // console.log("newquote button was clicked");
};
// select id's   .button__newquote  .quotebox__content #quote-source
function displayQuote(quote){
    var quotetext = document.querySelector(".quotebox__content");
    quotetext.textContent = quote;
}
var newQuoteButton= document.querySelector(".button__newquote");
newQuoteButton.addEventListener('click', getQuote);
//add event listener


//display text