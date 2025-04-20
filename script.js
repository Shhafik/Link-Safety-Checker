async function checkURL() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Checking...';

    const cors = require('cors');
const express = require('express');
const app = express();

// 👇 CORS config here
const allowedOrigins = ['https://link-backend-ethn.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

  
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
  
