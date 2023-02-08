
// Require express
const express = require("express");
const cors = require("cors");
const fs = require("fs");
// Initialize express
const app = express();
const PORT = 9001;
const corsOptions = {
    origin: false,
    optionsSuccessStatus: 200,
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiVfMg9rVfLsaWYA0HRpIX_QuN_VbNjuE",
    authDomain: "menu-selection.firebaseapp.com",
    projectId: "menu-selection",
    storageBucket: "menu-selection.appspot.com",
    messagingSenderId: "132272318374",
    appId: "1:132272318374:web:5a0c8a369470b6bc1c9167",
    measurementId: "G-4B1KLRGS56"
};

// Initialize Firebase
const appli = initializeApp(firebaseConfig);
const analytics = getAnalytics(appli);

// parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// create a server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.post("/create", cors(corsOptions), (req, res) => {
    content = `${Date.now()} ---- ${JSON.stringify(
        req.body
    )}\r\n ------------------------- \r\n`;
    fs.appendFile("selections.txt", content, (err) => {
        if (err) {
            console.error(err);
            res.send("KO");
        }
        console.log("ok");
    });
    res.send("ok");
});