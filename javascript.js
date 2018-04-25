// alert("connected");

//connect api
var api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
//function that accesses api and connects to event listeners
function getQuote(){
    // fetch gets URL;
    fetch(api)
        // .then() converts resonds to json
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            //data from response displays message property that has quote;
            //data.message displays just quote.
            //calling function displayQuote(data.message) inserts text in content area
            displayQuote(data.message);
        })
        .catch(function(){
            console.log("Error");
        });
    // console.log("newquote button was clicked");
};
function displayQuote(quote){
    var quotetext = document.querySelector(".quotebox__content");
    quotetext.textContent = quote;
}
var newQuoteButton= document.querySelector(".button__newquote");
newQuoteButton.addEventListener('click', getQuote);
