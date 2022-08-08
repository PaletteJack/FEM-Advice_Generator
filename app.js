const express = require('express');
const ejs = require('ejs');
const app = express();
const https = require('https');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const api_url = "https://api.adviceslip.com/advice";
let title = "";
let text = "";

https.get(api_url, res => {
  let rawData = "";

  res.on('data', (chunk) => {
    rawData += chunk;
  });

  res.on('end', () => {
    data = JSON.parse(rawData);
    final = data.slip;
    
    title = final.id;
    text = final.advice;
  });
})

app.get('/', (req, res) => {
  res.render('home', {title: title, text: text});
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});
