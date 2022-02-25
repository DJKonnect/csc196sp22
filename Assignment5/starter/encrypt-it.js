/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   * Every feature of the program is implemented, randomize, shift cipher,
   * font changing, and all caps if toggled. I implemented randomizer using an array of all letters,
   * and choosing random letter to replace each user input letter.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    const btn = document.getElementById("encrypt-it");
    const btn2 = document.getElementById("reset");
    btn.addEventListener('click', () => {
      encryptClick();
    });

    btn2.addEventListener('click', () => {
      resetAll();
    });
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encryptClick(){
    console.log("Encrypt Button Clicked!");
    var text = document.getElementById("input-text");
    var textValue = text.value;
    var cipherType = document.getElementById("cipher-type");

    if(cipherType.value == "shift"){
      let output = shiftCipher(textValue);
      outputCap(output);
    }
    else{
      let output = randomizer(textValue);
      outputCap(output);
    }
    /*console.log(output);*/
  }


  function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function randomizer(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase();
  let result = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text.charCodeAt(i);
        let resultLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        result += resultLetter;
      }
      return result;
    }


  function outputCap(text){
    var caps = document.getElementById("all-caps");
    if(caps.checked){
      text = text.toUpperCase();
      outSizeType(text);
    }
    else{
      outSizeType(text);
    }
  }


  function resetAll(){
    console.log("Reset Button Clicked!");
    var text = document.getElementById("input-text");
    var par = document.getElementById("result");
    text.value = "";
    par.innerHTML = "";

  }

  function outSizeType(text){
    var par = document.getElementById("result");
    var fontSizeOne = document.getElementById("reg");
    var fontSizeTwo = document.getElementById("big");
    if(fontSizeTwo.checked){
      par.style.fontSize = "24px";
      par.textContent = text;
    }
    else{
      par.style.fontSize = "12px";
      par.textContent = text;
    }
  }

})();
