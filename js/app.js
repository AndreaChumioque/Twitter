var newTweet = document.querySelector('.new-tweet');

newTweet.addEventListener('click', expandTweetBox);

function expandTweetBox(event) {
  if(event.target.matches('textarea')) {
    event.target.className += ' expand-box';
    var tweetBtn = document.getElementById('submit-tweet');
    console.log(tweetBtn);
    tweetBtn.style.display = 'inline';
    // tweetBtn.textContent = 'Twittear';
    // document.getElementById('new-tweet-box').appendChild(tweetBtn);
    console.log(event);
  }
}