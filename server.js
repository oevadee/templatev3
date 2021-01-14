const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const request = require("superagent");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

const mailchimpApiKey = process.env.DB_APIKEY;
const mailchimpInstance = `us7`;
const listUniqueId = `64002f8360`;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Orifin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hello wrld");
});

app.post("/subscribe", (req, res) => {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!emailRegex.test(req.body.email.toLowerCase()))
    return res.status(400).send("Invalid email address");
  request
    .post(
      `https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members/`
    )
    .set("Content-Type", "application/json;charset=utf-8")
    .set(
      "Authorization",
      "Basic " + Buffer.from("any:" + mailchimpApiKey).toString("base64")
    )
    .send({
      email_address: req.body.email,
      status: "subscribed",
    })
    .end((err, response) => {
      // if (err) throw err;
      // console.log(response.status);
      console.log(response.body);
      if (response.status === 200) {
        res.status(200).send("User signed");
      } else if (response.status === 400) {
        res.status(400).send("Invalid email adress");
      } else if (response.body.title === 'Member Exists') {
        res.status(404).json({
          message: "Member already exist"
        });
      } else {
        res.status(500).send("Shit some weird thing happening");
      }
    });
});

app.listen(port, console.log(`Yerrr aight. Demon listening on ${port}`));
