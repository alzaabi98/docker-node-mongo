const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 8000;
const db_link = "mongodb://mongo:27017/first_db";

const Address = require("./model/models");

try {
  mongoose.connect(
    db_link,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected")
  );
} catch (error) {
  console.log("could not connect");
}
const User = mongoose.model("User", { name: String });

app.get("/", function (req, res) {
  res.send(
    "Welcome, World! Welcome to kickstarter for backend API development "
  );
});

 app.get('/all', async (req,res) => {
    try {
        const addresses = await Address.find({});
        res.json(addresses)
    } catch (err) {
        res.status(500).json({message: err.message})

        //console.log(err)
    }
   

})
app.get("/add-user", function (req, res) {
    
  let newAddress = new Address({
    name: 'Ahmed Alzaabi',
    email: 'ahmed@test.com',
    phone: 21231232,
    place: 'Oman',
  });
  newAddress
    .save()
    .then((address) => {
      res.send(address);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, function () {
  console.log(`App running successfully on port number ${port}...`);
});
