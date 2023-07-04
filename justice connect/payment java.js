// Add functionality to payment buttons
const paypalButton = document.querySelector('#paypal button');
paypalButton.addEventListener('click', () => {
  window.location.href = 'paypal.html';
});

const mtnMoneyButton = document.querySelector('#mtn-money button');
mtnMoneyButton.addEventListener('click', () => {
  window.location.href = 'mtn_money.html';
});

const visaButton = document.querySelector('#credit-card button');
visaButton.addEventListener('click', () => {
  window.location.href = 'visa.html';
});
