const express = require("express");
const mongoose = require("mongoose");
// const Article = require("./models/Article");

mongoose
  .connect(
    "mongodb+srv://joe404:yo3092004@cluster0.jyduv.mongodb.net/myDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connecting successfully");
  })
  .catch((error) => {
    console.log(
      "errorr with connecting with the database -_-_-_-_-_-_-_-_-_-_-",
      error
    );
  });

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("now you in a Hello page");
});




app.listen(3000, () => {
    console.log("I' listening in port 3000");
  });
  