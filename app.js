const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Configure session middleware
app.use(session({secret: 'secret-key', resave: false, saveUninitialized: false}));

// Connect to MongoDB Atlas using Mongoose
mongoose.connect('mongodb+srv://ethiccraft:ethiccraft@cluster0.z8ofxuk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a user schema
const ParticipantSchema = new mongoose.Schema({
    Name: String, 
    RollNumber: Number, 
    BranchYear: String,
    Gender: String,
    MobileNumber: Number
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
            return res.status(400).json({message: 'You have already given the Quiz'});
        }
        // Create a new user
        const newUser = new User({Name: Name, RollNumber: RollNumber, BranchYear: BranchYear, Gender: Gender, MobileNumber: MobileNumber});

        // Save the user to the database
        newUser.save();

    }).catch(error => {
        // res.sendFile(__dirname + "/Registration/Failure.html");
    }); 
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/quiz.html");
})

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});





