const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();  
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//Configuration (MONGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl); 

//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('BidX');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//LOGIN
app.post('/login/signin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('BidX');
        users = db.collection('users');
        data = await users.count(req.body);
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//Forgot password
app.post('/login/fp', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('BidX');
        users = db.collection('users');
        data = await users.updateOne({username : req.body.username}, {$set : {pwd : req.body.pwd}});
        conn.close();
        res.json("Password has been updated");
    }catch(err)
    {
        res.json(err).status(404);
    }
});

//Profile

app.post('/home/profile', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('BidX');
        users = db.collection('student');
        data = await users.find(req.body, {projection:{photo: true,name:true,Dept:true,tenth:true,inter:true,cgpa:true,salary:true}}).toArray();
        conn.close();
        res.json(data);
    }catch(err)
    {
        res.json(err).status(404);
    }
});