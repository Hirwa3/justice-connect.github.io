document.getElementById("send-button").addEventListener("click", function () {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
  
    if (messageText !== "") {
      const containsSensitiveInfo = checkSensitiveInfo(messageText);
      const containsNumbersOrSymbols = checkContainsNumbersOrSymbols(messageText);
  
      if (containsSensitiveInfo || containsNumbersOrSymbols) {
        alert("The message you're trying to send is not appropriate according to the designer's design. If you think this is an error, please contact JusticeConnect assistants:\nEmail: justiceconnect250@gmail.com\nPhone: +250789285334");
        return;
      }
  
      // Send the message or perform any other desired action
      sendMessage(messageText);
  
      // Clear input field
      messageInput.value = "";
    }
  });
  
  function checkSensitiveInfo(message) {
    const sensitiveInfo = ["phone number", "address"];
    for (let i = 0; i < sensitiveInfo.length; i++) {
      if (message.toLowerCase().includes(sensitiveInfo[i])) {
        return true;
      }
    }
    return false;
  }
  
  function checkContainsNumbersOrSymbols(message) {
    const regex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return regex.test(message);
  }
  
  function sendMessage(message) {
    // Implement your logic to send the message here
    console.log("Message sent:", message);
  }
  