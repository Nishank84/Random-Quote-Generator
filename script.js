const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


function newQuote() {
  const quote = localquotes[Math.floor(Math.random() * localquotes.length)];
  // Author Check
  if(!quote.a){
    authorText.textContent = 'Unknown';
  }else{
    authorText.textContent = quote.a;
  }
  // Check Quote length
  if (quote.q.length > 120){
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.q;
//  complete();
}

// Tweet
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=I Love the quote, ${quoteText.textContent} by ${authorText.textContent}`;
  window.open(twitterUrl, '-blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On Load
newQuote();
