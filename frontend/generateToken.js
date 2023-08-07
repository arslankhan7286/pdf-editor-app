const fs = require('fs');
const crypto = require('crypto');

// Function to generate a random token
function generateRandomToken(length) {
  const buffer = crypto.randomBytes(length);
  return buffer.toString('hex');
}

// Generate a 32-character random token
const token = generateRandomToken(32);

// Write the token to the .env file
const envContent = `REACT_APP_SECRET_TOKEN=${token}`;
fs.writeFileSync('.env', envContent, 'utf8');
console.log('.env file updated with the generated token.');
