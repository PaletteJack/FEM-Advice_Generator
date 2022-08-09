const btn = document.querySelector('#btn');
const title = document.querySelector('#num');
const text = document.querySelector('.adviceText');
const api_url = "https://api.adviceslip.com/advice";

async function getAdvice(url) {
  const response = await fetch(url, {
    cache: 'reload'
  })
  const data = await response.json();
  return data;
}

btn.addEventListener('click', (event) => {
    getAdvice(api_url)
    .then( data => {
      advice = data.slip;
      title.innerHTML = advice.id;
      text.innerHTML = `"${advice.advice}"`;
    })
});
