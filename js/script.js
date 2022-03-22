const errorMessage = document.getElementById('error-message');
const rating = document.querySelectorAll('.rating');

rating.forEach(ratingScore => {
  ratingScore.addEventListener('click', () => {
    changeRatingStyle(ratingScore);
  })
});

function checkScoreStyle(rating) {
  for (let i of rating) {
    let ratingScore = i;
    // console.log(scoreElement);
    ratingScore.classList.remove('btn-clicked');
    ratingScore.classList.add('btn-grey');
  }
}

let score;
const changeRatingStyle = (ratingScore) => {
  score = ratingScore.id;
  console.log(score);
  checkScoreStyle(rating);
  ratingScore.classList.add('btn-clicked');
  ratingScore.classList.remove('btn-grey');
  if (!errorMessage.className.includes('hidden')) {
    errorMessage.classList.add('hidden');
  }
  // console.log(ratingScore);
  return score;
}

let btnSubmit = document.getElementById('btn-submit');

function submit() {
  let ratingState = document.getElementById('rating-state');
  let thankYouState = document.getElementById('thank-you-state');
  console.log(ratingState);
  console.log(thankYouState);
  console.log(score);
  if (score >= 1 || score <= 5) {
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
    let ratingMessage = document.getElementById('rating-message');
    ratingMessage.innerText = `You selected ${score} out of 5`
    console.log('deu certo');
  } else {
    errorMessage.classList.remove('hidden');
    console.log('faltou score');
  }
}

btnSubmit.addEventListener('click', () => {
  submit();
});