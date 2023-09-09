const admin = require("firebase-admin");

const serviceAccount = require("C:/Users/itops/Downloads/Music-Streaming-website-main (1)/Music-Streaming-website-main/server/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
