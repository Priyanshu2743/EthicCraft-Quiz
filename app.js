const express = require('express');
const mongoose = require('mongoose');
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Connect to MongoDB Atlas using Mongoose
mongoose.connect('mongodb+srv://ethiccraft:ya4pW1i0XjpUWCzB@cluster0.ssfmjwo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a user schema
const ParticipantSchema = new mongoose.Schema({
    Name: String, 
    RollNumber: Number, 
    BranchYear: String,
    Gender: String,
    MobileNumber: Number,
    Currcount: Number,
    Score: Number,
});

// Define a User model
const User = mongoose.model('User', ParticipantSchema);

// Register a new user
// Assuming you have already defined the User model
app.post('/login', (req, res) => {
    const {Name, RollNumber, BranchYear, Gender, MobileNumber} = req.body;
    
    console.log(req.body)
    // Check if the email is already registered
    User.findOne({RollNumber: RollNumber}).then(existingUser => {
        if (existingUser) {
            if (existingUser.Currcount == 20){
                return res.status(400).send(JSON.stringify({message: 'You have already given the Quiz'}));
            }
            else{
                return res.status(200).send(JSON.stringify({RollNumber: RollNumber, Currcount: existingUser.Currcount, Score: existingUser.Score}));
            }
        }
        // Create a new user
        const newUser = new User({Name: Name, RollNumber: RollNumber, BranchYear: BranchYear, Gender: Gender, MobileNumber: MobileNumber, Currcount: 0, Score: 0});
        // Save the user to the database
        newUser.save();
        return res.status(200).json({RollNumber: RollNumber, Currcount: 0, Score: 0});
    }).catch(error => {
        // res.sendFile(__dirname + "/Registration/Failure.html");
    }); 
});

app.post('/update', (req, res) => {
    const {RollNumber, Currcount, Score} = req.body;
    User.findOne({RollNumber: RollNumber}).then(existingUser => {
        if (existingUser) {
            existingUser.Currcount = Currcount;
            existingUser.Score = Score;
            existingUser.save();
            return res.status(200).json({RollNumber: RollNumber, Currcount: Currcount, Score: Score});
        }
    }).catch(error => {
        console.log(error);
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/quiz.html");
})

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});





