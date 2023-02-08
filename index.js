
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