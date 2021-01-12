// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let articles = document.getElementsByClassName('media-post')
let errorModal = document.querySelector('#modal')
document.body.addEventListener('click', function(e){
  if (e.target.classList.contains('like-glyph') && e.target.classList.length == 1) {
    mimicServerCall()
    .then(function(response) {
      if (response == 'Pretend remote server notified of action!') {
        e.target.innerText = FULL_HEART
        e.target.classList.add('activated-heart') 
      }
      return response
    })
    .catch(function(error){
      errorModal.lastElementChild.innerText = error
      errorModal.classList.toggle('hidden')
      setTimeout(function(){
        errorModal.classList.toggle('hidden')
      }, 5000)
    })
  } else if (e.target.classList.contains('activated-heart')) {
    e.target.classList.toggle('activated-heart')
    e.target.innerText = EMPTY_HEART
  }
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
