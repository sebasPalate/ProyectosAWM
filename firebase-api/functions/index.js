const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");

const app = express();

const serviceAccount = require("./permissions.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: ''
});

app.use(cors({origin: true}));

app.get('/hello-word', (req, res) => {
    return res.status(200).json({ message: 'Hello Word' });
});

// Routes
app.use(require("./routes/products.routes"));
exports.app = functions.https.onRequest(app);
