const PORT = 5000 ;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require('path');
const routes = express.Router();


const app = express();

app.use(express.static('client/build')) ; // ici on ouvre la porte pour que express puisse aller dans mon Réact.

app.use("/api", routes);


app.use('/images', express.static(path.join(__dirname, 'images')));

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
const jsonParser = bodyParser.json();

//cors
routes.use(cors());

// mongoDB client
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// connect to server
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});

// connect to DB
const DATABASE = process.env.DATABASE;
client.connect((err) => {
  if (err) {
    throw Error(err);
  }
  !err && console.log(`Successfully connected to database`);
  const db = client.db(DATABASE);
  const products = db.collection("products");
  const users = db.collection("users");
  const orders = db.collection("orders");

  // GET
    routes.get('/hello', (req, res) =>{
      res.send("hello serveur");
    })

    

    routes.get("/products", function (req, res) {
      products
        .find()
        .toArray()
        .then((error, results) => {
          if (error) {
            return res.send(error);
          }
          res.status(200).send({ results });
        })
        .catch((err) => res.send(err));
    });

    // POST
    routes.post("/products/add", jsonParser, function (req, res) {
      products
        .insertOne(req.body)
        .then(() => res.status(200).send("successfully inserted new document"))
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
    });

    routes.post("/users/add", jsonParser, function (req, res) { 
      users
        .insertOne(req.body)
        .then(() => res.status(200).send("successfully inserted new document"))
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
    });

    routes.post("/orders/add", jsonParser, function (req, res) {
      orders
        .insertOne(req.body)
        .then(() => res.status(200).send("successfully inserted new document"))
        .catch((err) => {
          console.log(err);
          res.send(err); 
        });
    });


});

//stripe
const stripe = require("stripe")(process.env.SECRET_KEY); // c'est super

routes.post("/create-checkout-session", jsonParser, async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body,
      mode: "payment",
      success_url: `${process.env.DOMAIN}/success`,
      cancel_url: `${process.env.DOMAIN}/cancel`,
    });

    res.json({ id: session.id });
  } catch (err) {
    return res.status(500).send(`failed to process payment ${err}`);
  }
});

//on va envoyer toute les adresses qu'il ne connait pas, il les envoi sur index.html de notre client
app.get('/*', (req, res) =>{ 
  res.sendFile(path.join(__dirname, './client/build/index.html'))  
});


const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

routes.post('/mail', (req, res) => {
  const mailData = {
      from: 'spirithacodesh@gmail.com',
      to: "sultan.elie@gmail.com",
      subject: "mail Réussi",
      text: "Nodemailer Fonctionne",
      html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
  };
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: "spirithacodesh@gmail.com",
      pass: process.env.MAILMDP
    },tls: {
      rejectUnauthorized: false
  }
  }));
  transporter.sendMail(mailData, (error, info) => {
      if (error) {
          return console.log(error);
      }
      res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

module.exports = app;