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

window.onload = async function() {
  const res = await getAdvice(api_url);
  const advice = res.slip;
  title.innerHTML = advice.id;
  text.innerHTML = `"${advice.advice}"`;
};

btn.addEventListener('click', async (event) => {
    const data = await getAdvice(api_url);
    advice = data.slip;
    title.innerHTML = advice.id;
    text.innerHTML = `"${advice.advice}"`;
});
