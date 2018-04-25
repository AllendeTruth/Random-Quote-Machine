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
        .then(function(){
            //data from response displays message property that has quote;
            //data.message displays just quote.
            //calling function displayQuote(data.message) inserts text in content area
            displaySource();
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
function displaySource(){
    var sourcetext = document.querySelector(".quotebox__source");
    sourcetext.textContent = "- Donald J Trump";
}
var newQuoteButton= document.querySelector(".button__newquote");
newQuoteButton.addEventListener('click', getQuote);
