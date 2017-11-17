var textTweet = document.getElementById('new-tweet-box').firstElementChild;
var totalChar = document.getElementById('total-char');
var tweetBtn = document.getElementById('tweet-btn');
var newsfeed = document.getElementById('newsfeed');

var charCounter = 0;
var height = textTweet.getAttribute('rows');

window.addEventListener('click', checkClickOut);
textTweet.addEventListener('click', expandTweetBox);
textTweet.addEventListener('keyup', countChar)
textTweet.addEventListener('keyup', adjustHeight);
tweetBtn.addEventListener('click', addTweet);

// Función para expandir tweetBox al hacer click
function expandTweetBox(event) {
  if (event.target.matches('textarea')) {
    event.target.className = 'expand-box';
    tweetBtn.className = 'show';
    totalChar.className = 'show';
  }
}

// Función para colapsar tweetBox al hacer click fuera
function checkClickOut(event) {
  var tweetBox = document.getElementById('new-tweet-box');
  if (event.target !== tweetBox && event.target.parentElement !== tweetBox && charCounter == 0) {
    textTweet.className = '';
    tweetBtn.className = 'hidden';
    totalChar.className = 'hidden';
  }
}

// Función para contar caracteres al escribir tweet
function countChar(event) {
  charCounter = textTweet.value.length;
  totalChar.textContent = 140 - charCounter;
  // console.log(charCounter);
  if (charCounter > 0 && charCounter <= 140) {
    tweetBtn.disabled = false;
  } else tweetBtn.disabled = true;

  // Cambiar el color del contador
  switch (true) {
    case charCounter > 120 && charCounter <= 130:
      totalChar.style.color = '#F7B32B';
      break;
    case charCounter > 130 && charCounter <= 140:
      totalChar.style.color = '#FE5E41';
      break;
    case charCounter > 140:
      totalChar.style.color = '#C81D25';
      break;
    default:
      totalChar.style.color = '';
  }
}
// Función para reajustar el tamaño de tweetBox
function adjustHeight(event) {
  // if (textTweet.scrollHeight) {
  //   textTweet.style.transitionDuration = null;
  //   textTweet.style.height = textTweet.scrollHeight + 'px';
  // }

  // if (charCounter > 0) {
  //   textTweet.style.height = '47px';
  //   textTweet.style.height = textTweet.scrollHeight + 'px';
  // }

  if (event.keyCode === 13) {
    textTweet.setAttribute('rows', parseInt(height) + 1);

    console.log(event.keyCode);
  }

}

// Función para agregar tweet nuevo al newsfeed
function addTweet(event) {
  var newTweet = document.createElement('div');
  newTweet.textContent = textTweet.value;

  if (newsfeed.children.length == 0)
    newsfeed.appendChild(newTweet);
  else newsfeed.insertBefore(newTweet, newsfeed.firstElementChild)

  // Resetear textTweet al estado inicial
  textTweet.value = '';
  textTweet.className = '';
  tweetBtn.className = 'hidden';
  totalChar.className = 'hidden';
  totalChar.textContent = 140;
  charCounter = 0;
  countChar(event);
}
