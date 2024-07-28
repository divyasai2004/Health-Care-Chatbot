const User = require('./user');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3100;
const bodyParser= require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json());
// Connect to MongoDB
User.createIndexes();
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
 
    // Process the received data (e.g., save to database)
  
    // Send a response back to the client
    // res.status(201).json({
    //   message: 'Data received successfully',
    //   data: receivedData
    // });
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

    
});