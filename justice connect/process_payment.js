// JavaScript for Payment Options page

// Function to handle button clicks for each payment method
function handlePaymentMethod(event) {
    var paymentMethod = event.target.parentNode.id;
    if (paymentMethod === "paypal") {
      // Handle PayPal payment method
      window.location.href = "paypal.html"; // Replace with actual PayPal payment page
    } else if (paymentMethod === "mtn-money") {
      // Handle MTN Mobile Money payment method
      window.location.href = "mtn_money.html"; // Replace with actual MTN Mobile Money payment page
    } else if (paymentMethod === "credit-card") {
      // Handle Credit Card payment method
      window.location.href = "credit_card.html"; // Replace with actual Credit Card payment page
    }
  }
  
  // Add event listeners to payment method buttons
  var paymentButtons = document.querySelectorAll(".payment-method button");
  paymentButtons.forEach(function (button) {
    button.addEventListener("click", handlePaymentMethod);
  });
  