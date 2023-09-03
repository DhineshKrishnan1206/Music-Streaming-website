const admin = require("firebase-admin");

const serviceAccount = require("C:/Users/dhine/Downloads/AkatsukiPlayerFinal/server/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
