const encrypt = require('./script');

const payload = { id: 101, name: "Alice" };
const secret = "mySecretKey";

const token = encrypt(payload, secret);
console.log("Generated Token:", token);
