/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

let quotes = [];

/* Individual quote objects */

const quote1 = {
  quote:"I'll be back",
  source:"T-800",
  citation:"The Terminator",
  year:"1984"
}
const quote2 = {
  quote:"Let off some steam, Bennet",
  source:"Colonel John Matrix",
  citation:"Commando",
  year:"1985",
  comment:"Just classic!"
}
const quote3 = {
  quote:"Consider that a divorce!",
  source:"Douglas Quaid",
  citation:"Total Recall",
  year:"1990"
}
const quote4 = {
  quote:"Get to the chopper!",
  source:"Major Alan 'Dutch' Schafer",
  citation:"Predator",
  year:"1987"
}
const quote5 = {
  quote:"Hasta la vista, baby",
  source:"T-800",
  citation:"Terminator 2: Judgement Day",
  year:"1991"
}

/* Adding the individual quote objects to the quotes array */

quotes = [quote1, quote2, quote3, quote4, quote5]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let number = Math.floor(Math.random() * 5);
  return quotes[number]
}

/*
  'changeBackgroundColor' function
*/

/* Random bgColors array */ 

const bgColors = [
  "rgb(193, 58, 98)",
  "rgb(58, 98, 193)",
  "rgb(98, 193, 58)",
  "rgb(193, 193, 58)",
  "rgb(193, 58, 193)",
  "rgb(58, 193, 193)",
];

/* The function itself: randomly picks a bgColor from the array then changes the body color to that value */

function changeBackgroundColor() {
  let number = Math.floor(Math.random() * 6);
  document.body.style.backgroundColor = bgColors[number];
}

/***
 * `printQuote` function
***/

/* clears timeout from previous clicks to avoid multiple refreshes, 
    calls getRandomQuote, 
    assigns the quote's properties to quote-box in HTML, 
    calls the changeBackgroundColor function and set refresh interval again */

function printQuote() {
  clearTimeout(refresh);
  let quote = getRandomQuote();
  let string = `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}`

    if (quote.citation) {
      string += `<span class="citation">${quote.citation}</span>`
    }
  
    if (quote.year) {
      string += `<span class="year"> ${quote.year}</span>`
    }

    if (quote.comment) {
      string += `<span class="comment"> ${quote.comment}</span>`
    }

    string += `</p>`
  document.getElementById('quote-box').innerHTML = string;
  changeBackgroundColor();
  refresh = setTimeout(printQuote, 10000);
}

/***
 * sets refresh timout, 
   click event listener for the print quote button (and change background color change) 
   and clears timeout interval to avoid multiple refreshes (new Timeout is created in printQuote)
***/

let refresh = setTimeout(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", () => {
  clearTimeout(refresh);
  printQuote();
}, false);

