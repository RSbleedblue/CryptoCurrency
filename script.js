
const coin = "eth";
const apiKey = "CG-gdYPHQRjKv42ULYNw4Whk5jC";
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&x_cg_demo_api_key=CG-gdYPHQRjKv42ULYNw4Whk5jC';
const options = {method: 'GET'};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));