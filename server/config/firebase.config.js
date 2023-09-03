const admin = require("firebase-admin");

const serviceAccount = require("C:/Users/Admin/Downloads/akatsuki player_workingcomments/server/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
