const User = require('./user');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3100;
const bodyParser= require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json());
// Connect to MongoDB
// User.createIndexes();
mongoose.connect('mongodb://localhost:27017/user', {

}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.post('/', async(req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
   
        const { Fullname,Email,DOB,Gen,un,ps } = req.body;
        
        const user = new User(req.body);
        try {
          await user.save();
          res.status(201).send(User);
        } catch (error) {
          res.status(400).send(error);
        }
      });
      app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        console.log(username);
        console.log(password);
        try {



          let answer = await User.find({ un: username , ps: password })
          console.log(answer)
    
          if(answer.length != 0){
            console.log("success")
            res.sendStatus(200)
          } else{
           console.log("fail")
           res.sendStatus(404)
          }
  
        } catch (e) {
            resp.send("Something Went Wrong");
        }
      });
    // Process the received data (e.g., save to database)
    // Send a response back to the client
    // res.status(201).json({
    //   message: 'Data received successfully',
    //   data: receivedData
    // });
    app.post('/HomePage', async (req, res) => {
      const { messages, input } = req.body;
      console.log(messages);
      console.log(input);
      exec(`python3 chatgpt.py "${messages}"`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
    
        const response = JSON.parse(stdout);
        res.json({ message: response.response });
      });
     
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

    
});