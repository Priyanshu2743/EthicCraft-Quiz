const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const http = require("http");
const bodyParser = require("body-parser");

// For Hashing The Password we use bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Configure session middleware
app.use(session({secret: 'secret-key', resave: false, saveUninitialized: false}));

// Set up passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB Atlas using Mongoose
mongoose.connect('mongodb+srv://ethiccraft:ethiccraft@cluster0.z8ofxuk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a user schema
const userSchema = new mongoose.Schema({
    Name: String, 
    RollNumber: Number, 
    Branch: String,
    Year: Number
});

// // Define a profile schema
// const profileSchema = new mongoose.Schema({
//     username: String,
//     fname: String, 
//     lname: String, 
//     email: String , 
//     fathername: String, 
//     dob: Date,
//     phonenumber: Number, 
//     stream: String, 
//     branch: String, 
//     rollnumber: String, 
//     Aadhar: Number, 
//     WorkingStatus: String, 
//     profileID: String
// });

// // Define a student schema
// const studentSchema = new mongoose.Schema({
//     branch: String, 
//     stream: String, 
//     rollnumber: Number, 
//     University: String, 
//     EDetailsNum: Number, 
//     EDetailsEmai: String
// });


// Define a User model
const User = mongoose.model('User', userSchema);
// // Define a Profile model
// const Profile = mongoose.model('Profile', profileSchema);
// // Define a Student model
// const Student = mongoose.model('Student', studentSchema);


// Configure passport local strategy
// Configure passport serialization and deserialization
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
// passport.serializeUser((profile, done) => {
//     done(null, profile.id);
// });
// passport.deserializeUser((id, done) => {
//     Profile.findById(id, (err, profile) => {
//         done(err, profile);
//     });
// });
// passport.serializeUser((student, done) => {
//     done(null, student.id);
// });
// passport.deserializeUser((id, done) => {
//     Student.findById(id, (err, user) => {
//         done(err, user);
//     });
// });


// Register a new user
// Assuming you have already defined the User model
app.post('/login', (req, res) => {
    const {Name, RollNumber, Branch, Year} = req.body;
        
    console.log(req.body)
    // Check if the email is already registered
    User.findOne({RollNumber: RollNumber}).then(existingUser => {
        if (existingUser) {
            return res.status(400).json({message: 'You have already given the Quiz'});
        }
        // Create a new user
        const newUser = new User({Name: Name, RollNumber: RollNumber, Branch: Branch, Year: Year});

        // Save the user to the database
        newUser.save();

    }).catch(error => {
        // res.sendFile(__dirname + "/Registration/Failure.html");
    });
    
    
});

// app.post('/login', (req, res) => {
    
//     const {email, password} = req.body;

//     // Find the user by email    
//     User.findOne({email: email}).then(user => {
//         if (!user) {
//             return res.status(400).json({message: 'Email is not Registered'});
//         }
//         // Compare passwords
//         bcrypt.compare(password, user.password, function(err, result) {
//             if (result === true){
//                 // Authentication successful
//                 res.sendFile(__dirname + "/Home.html");        
//             }
//             else{
//                 return res.status(400).json({message: 'Password is Not Correct'});
//             }
//         });
//     }).catch(error => {
//         res.sendFile(__dirname + "/Registration/Failure.html");

//     });
// });


// app.post('/profile', async (req, res) => {
//   const { WorkingStatus, username, fname, lname, phonenumber, fathername, dob, Aadhar, profileID } = req.body;
//   console.log(req.body);
//   try {
//     // Check if the Aadhar Number is already registered
//     const existingProfile = await Profile.findOne({ Aadhar: Aadhar });

//     if (existingProfile) {
//       return res.status(400).json({ message: 'Already Registered.' });
//     }

//     // Create a new profile
//     const newProfile = new Profile({
//       WorkingStatus: WorkingStatus,
//       username: username,
//       fname: fname,
//       lname: lname,
//       phonenumber: phonenumber,
//       fathername: fathername,
//       dob: dob,
//       Aadhar: Aadhar,
//       profileID: profileID
//     });

    
    
//     // Retrieve the latest username from the users database
//     const latestUser = await User.findOne().sort({ _id: -1 });

//     if (latestUser) {
//       // Do something with the latest username, e.g., relate it to the new profile
//       newProfile.username = latestUser.username;
//     }
    
//     let profileType;
//     // Save the profile to the database
//     await newProfile.save();


//     if (newProfile.WorkingStatus === 'Student') {
//       res.sendFile(__dirname + "/Registration/Details.html");
//     } else if (newProfile.WorkingStatus === 'Employee') {
//       return res.status(400).json({ message: 'You are Working' });
//     }
//     profileType = newProfile.WorkingStatus;

//   } catch (error) {
//     console.error('Error saving profile:', error);
//     res.sendFile(__dirname + "/Registration/Failure.html");
//   }
// });

  

// app.post('/details', async (req, res) => {
//     const {branch, stream, rollnumber, University, Edetails} = req.body;
//     console.log(req.body)
//     try{
//         // Check if the Working Status is student 
//         const existingstudent = await Student.findOne({rollnumber:rollnumber});
//             if (existingstudent) {
//                 return res.status(400).json({message: 'Email is already registered.'});
//             }

//             // Create a new profile
//             const newStudent = new Student({
//                 branch: branch,
//                 stream: stream,
//                 rollnumber: rollnumber, 
//                 University: University, 
//                 Edetails: Edetails  
//             });

//             // Save the user to the database
//             await newStudent.save()
//             res.sendFile(__dirname + "/Home.html");

//     }catch (error) {
//         console.error('Error saving profile:', error);
//         res.sendFile(__dirname + "/Registration/Failure.html");
//       }
// });


// app.get('/user/:username', async (req, res) => {
//     try {
//       const { username } = req.params;
  
//       // Find the user by username
//       const user = await User.findOne({ username });
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       // Find the profile by username
//       const profile = await Profile.findOne({ username });
  
//       if (!profile) {
//         return res.status(404).json({ error: 'Profile not found' });
//       }
  
//       // Combine first name and last name to get the full name
//       const fullName = `${profile.fname} ${profile.lname}`;
//       res.json( fullName );
//     } catch (error) {
//       console.error('Error retrieving user profile', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }  
// });
  

// frontend

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/quiz.html");
})
// app.get('/memories', function (req, res) {
//     res.sendFile(__dirname + "/Memories/Memories.html");
// })
// app.get('/login', function (req, res) {
//     res.sendFile(__dirname + "/Home.html");
// })
// app.get('/portfolio', function (req, res) {
//     res.sendFile(__dirname + "/portfolio.html");
// })
// app.get('/profileupdate', function (req, res) {
//     res.sendFile(__dirname + "/ProfileShow.html");
// })

// app.get('/registration', function (req, res) {
//     res.sendFile(__dirname + "/Registration/Registration.html")
// })
// app.get('/contact', function (req, res) {
//     res.sendFile(__dirname + "/contact.html")
// })
// app.get('/details', function (req, res) {
//     res.sendFile(__dirname + "/Registration/Details.html")
// })
// app.get('/profile', function (req, res) {
//     res.sendFile(__dirname + "/Registration/Profile.html")
// });
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});





