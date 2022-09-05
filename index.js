document.addEventListener("DOMContentLoaded", () => {
  //Grabbing Items
  const quoteText = document.querySelector(".quote");
  const quoteBtn = document.querySelector("button");
  const characterName = document.querySelector(".author .name");
  const twitterButton = document.querySelector(".twitter");
  const copyButton = document.querySelector(".copy");
  const soundButton = document.querySelector(".sound");

  //random quote function
  function randomQuote() {
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading Quote...";

    //fetching random quotes from the API and rendering them into our Javascript Object
    fetch("https://api.gameofthronesquotes.xyz/v1/random")
      .then((response) => response.json())
      .then((result) => {
        quoteText.innerText = result.sentence;
        characterName.innerText = result.character.name;
        quoteBtn.innerText = "New Quote";
        console.log(result);
      });

    quoteBtn.classList.remove("Loading");
  }
  //copy the quoteText on click button
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
  });

  //tweet the quoteText on a button click
   // Opening a new tweet tab with passing quote on the url
  twitterButton.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "blank");
  });

  //Speech out the quoteText on a button click
  //SpeechSynthesisUtterance is web speech API method that represent a speech request
  soundButton.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} Quote By: ${characterName.innerText}`);
    speechSynthesis.speak(utterance); 
  });

  //Quote generator button
  quoteBtn.addEventListener("click", randomQuote);
});
