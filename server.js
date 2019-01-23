
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");




const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    let data = {
        memebers: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    let options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/9cb47d63c5",
        method: "POST",
        headers: {
            "Authorization": "brian1 504da666de87e7bbac7bf3c0fc3a4497-us20"
        },
        body: jsonData

    }

    request(options, function (err, res, body) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(res.statusCode);
        }
    });

});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});


// fe34033f1aec440c3763d2496ab1d9b5-us20

