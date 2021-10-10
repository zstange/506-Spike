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
  const username = req.body.username
  const password = req.body.password
  const sqlInsert = 
  "INSERT INTO dbuser (email, password) VALUES (?, ?);"
  db.query(sqlInsert, [username, password], (err, result) => {
    if(err){
      res.send({err: err});
    }
      if (result.length > 0){
        res.send(result)
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
      res.send({err: err});
    }
      if (result.length > 0){
        res.send(result)
      } else{
          res.send({message: "Wrong username/password combination!"})
      }

    
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});