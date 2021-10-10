const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql')
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
	host: 'localhost',
	user: 'spikeuser',
	password: 'password',
	database: 'spikedb'
});
app.post("/CreateAccount", (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  const phoneNumber = req.body.phoneNumber
  const email = req.body.email
  const address1 = req.body.address1
  const address2 = req.body.address2
  const city = req.body.city
  const state1 = req.body.state1
  const zipcode = req.body.zipcode

  const sqlInsert = 
  "INSERT INTO dbuser (firstName, lastName,password,phoneNumber,email,address1,address2,city,state1,zipcode) VALUES (?,?,?,?,?,?,?,?,?,?);"
  db.query(sqlInsert, [firstName, lastName,password,phoneNumber,email,address1,address2,city,state1,zipcode]
    , (err, result) => {
    if(err){
      res.send({err: err});
    }
    else if (result != ""){
      var redir = { redirect: "/Login" };
      return res.json(redir);
    }
    else{
      res.send({message: "Please fill out both an email and password."})
    }
  });
});

app.post("/Login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const sqlInsert = 
  "SELECT * FROM dbuser WHERE email = ? AND password = ?"
  db.query(sqlInsert, [email, password], (err, result) => {
    if(err){
      return res.json({err: err});
    }
    else if (result != ""){
      var redir = { redirect: "/RenterHome" };
      return res.json(redir);
    } else{
        return res.json({message: "Wrong username/password combination!"})
    }

    
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});