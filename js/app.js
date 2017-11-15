var textTweet = document.getElementById('new-tweet-box').firstElementChild;
var totalChar = document.getElementById('total-char');
var tweetBtn = document.getElementById('tweet-btn');
var newsfeed = document.getElementById('newsfeed');


var charCounter = 0;

document.addEventListener('click', checkClickOut);
textTweet.addEventListener('click', expandTweetBox);
textTweet.addEventListener('keyup', countChar)
textTweet.addEventListener('keyup', adjustHeight);
tweetBtn.addEventListener('click', addTweet);

function checkClickOut(event) {
  if ((event.target).closest('#new-tweet-box')) {
    // textTweet.style.backgroundColor = 'yellow';
    console.log((event.target).closest('#new-tweet-box'));
  }
  //   textTweet.className = '';
    console.log(event);
    event.stopPropagation();
}

function expandTweetBox(event) {
  if (event.target.matches('textarea')) {
    event.target.className = 'expand-box';
    tweetBtn.className = 'show';
    totalChar.className = 'show';
  }
}

function countChar(event) {
  charCounter = textTweet.value.length;
  totalChar.textContent = 140 - charCounter;
  console.log(charCounter);
  if (charCounter > 0 && charCounter <=140) {
    tweetBtn.disabled = false;
  } else tweetBtn.disabled = true;
}

function adjustHeight(event) {
  if (textTweet.scrollHeight > 75) {
    textTweet.style.transitionDuration = null;
    textTweet.style.height = textTweet.scrollHeight + 'px';
  }
}

function addTweet(event) {
  var newTweet = document.createElement('div');
  newTweet.textContent = textTweet.value;

  // if (newsfeed.children.length == 0)
    newsfeed.appendChild(newTweet);
  // else newsfeed.insertBefore(newTweet, newsfeed.firstElementChild)
  
  textTweet.value = '';
  textTweet.className = '';
  tweetBtn.className = 'hidden';
  totalChar.className = 'hidden';
  totalChar.textContent = 140;
  charCounter = 0;
  countChar(event);
}
