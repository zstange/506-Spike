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
      var user = JSON.parse(JSON.stringify(result));
      var userInfo = { userID: user[0].uid, admin: user[0].role };
      return res.json(userInfo);
    } else{
        return res.json({message: "Wrong username/password combination!"})
    }

    
  });
})

app.post("/GetBalance", (req, res) => {

  const uid = req.body.uid
  console.log(uid)
  const sqlInsert = 
  "SELECT balance FROM dbuser WHERE uid = ?"
  db.query(sqlInsert, [uid], (err, result) => {
    if(err){
      return res.json({err: err});
    }
    else if (result != ""){
      console.log("result is:" +result[0].balance);
      if(result[0].balance)
          return res.json({value: result[0].balance});
        else {
          return res.json({value: 0});
        }
    } else{
        return res.json({message: "Balance fetch failed."})
    }
  });
})

app.post("/RenterPayment", (req, res) => {
  const payment = req.body.payment;
  let currentBalance;
  const uid = req.body.uid
  const sqlInsert = 
  "SELECT balance FROM dbuser WHERE uid = ?"
  db.query(sqlInsert, [uid], (err, result) => {
    if(err){
      return res.json({err: err});
    }
    else if (result != ""){
       if(result[0].balance)
          currentBalance = result[0].balance;
        else
          currentBalance = 0

        currentBalance =  Number(currentBalance) - Number(payment);
        const sqlInsert = 
        "UPDATE dbuser SET balance = '"+currentBalance+"' WHERE uid = ?";
        db.query(sqlInsert, [uid], (err, result) => {
          if(err){
            return res.json({err: err});
          }
          else if (result != ""){
            res.send({message: "Balance change successful."})
          }
          else{
            res.send({message: "Balance change failed."})
          }
        });     
      } 
      else{
        return res.json({message: "User not found!"})
      }
  });
  
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});