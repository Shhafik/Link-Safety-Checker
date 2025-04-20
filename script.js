async function checkURL() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Checking...';

    try {
      const response = await fetch('https://link-backend-murex.vercel.app/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
  
      const data = await response.json();
  
      if (data.error) {
        resultDiv.textContent = 'Error: ' + data.error;
      } else {
        resultDiv.innerHTML = `
          ✅ Harmless: ${data.harmless}<br>
          ⚠️ Suspicious: ${data.suspicious}<br>
          ❌ Malicious: ${data.malicious}<br>
          🔍 Undetected: ${data.undetected}
        `;
      }
    } catch (error) {
      resultDiv.textContent = 'Something went wrong!';
    }
  }
  
