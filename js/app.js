var newTweet = document.querySelector('.new-tweet');
var totalChar = document.getElementById('total-char');

newTweet.addEventListener('click', expandTweetBox);
newTweet.addEventListener('keyup', countChar)
newTweet.addEventListener('keyup', adjustHeight);

function expandTweetBox(event) {
  if(event.target.matches('textarea')) {
    var tweetBtn = document.getElementById('add-tweet');    
    event.target.className += ' expand-box';
    tweetBtn.style.display = 'block';
    totalChar.style.display = 'block';
    console.log(event);
  }
}

function countChar(event) {
  var charCounter = newTweet.value.length;
  totalChar.textContent = 140 - charCounter;
  console.log(charCounter);
}

function adjustHeight(event){
  
  newTweet.style.height = new (newTweet.scrollHeight - parseFloat(newTweet.style.height)) + 'px';
}