function getQuote(){
    fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    const quoteText= data[Math.floor(Math.random() * 100)].text;
    const quoteAuthor= data[Math.floor(Math.random() * 100)].author;
    document.getElementById("quote").innerHTML='"'+quoteText+'"';
    document.getElementById("author").innerHTML="-"+ quoteAuthor;

  });
}