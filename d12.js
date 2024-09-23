function fetchAndUpdateQuote() {
    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)].quote;
            document.getElementById('quote').textContent = randomQuote;
            updateRandomValues();
        })
        .catch(error => console.error('Error fetching the quote:', error));
  }
  
  function updateRandomValues() {
    const randomValue1 = Math.floor(Math.random() * 30) + 1;
    const randomValue2 = Math.floor(Math.random() * 30) + 1;
    document.getElementById('values').textContent = `Random Value 1: ${randomValue1}, Random Value 2: ${randomValue2}`;
  }
  
  document.getElementById('randomForm').addEventListener('submit', function(event) {
    event.preventDefault();
    fetchAndUpdateQuote();
  });
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const quoteText = document.getElementById('quote').textContent;
  
    navigator.clipboard.writeText(quoteText)
        .then(() => {
            alert('Quote copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy quote: ', err);
        });
  });