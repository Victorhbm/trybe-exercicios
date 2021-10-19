const getUL = document.getElementById('list');
const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCrypto = async () => {
  const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const showCoins = async () => {
  const getCoins = await fetchCrypto();
  const coins = getCoins.slice(0, 10);
  
  coins.forEach((coin) => {
    const createLi = document.createElement('li');
    const text = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`
    createLi.innerText = text;
    getUL.appendChild(createLi);
  })
  
}

window.onload = () => showCoins();