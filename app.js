// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

const jwt = require('jsonwebtoken');

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

const payload1 = {
  email: "johnny@gmail.com"
}
const secret = process.env.SECRET_KEY;

token = jwt.sign(payload1, secret, {
  expiresIn: '1s'
});

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

verifiedPayload = jwt.verify(token, secret);

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

//JsonWebTokenError: invalid signature
try {
  verifiedPayload = jwt.verify(token, 'c98f1180b7b804cc718d1a3fbb767c2f9bb8d9bb2bceb3c38d360a057f1f52a3b06bcb36306fbf6aec4b7e8301ddcbec4cf4d0c55ba61b90bc2f31ece2b7e626')
} catch (err) {
  console.log(err);
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

//TokenExpiredError: jwt expired
setTimeout(() => {
  try {
    verifiedPayload = jwt.verify(token, secret);
  } catch (err) {
    console.log(err);
  }
}, 2000);
