const express = require('express');
const router = express.Router();
const passport = require('passport');
//const bcrypt = require('bcrypt');
// const User = require('../models/user');
const User = require('../models/usersignup');

function isAuthenticatedUser(req, res, next) {
  if(req.isAuthenticated()) {
      return next();
  }
  req.flash('error_msg', 'Please Login first to access this page.')
  res.redirect('/login');
}
router.get('/login', (req,res)=> {
  res.render('login');
});
router.get('/signup', (req,res)=> {
  res.render('signup');
});
router.get('/dashboard', isAuthenticatedUser,(req,res)=> {
  res.render('dashboard');
});
router.post('/login', passport.authenticate('local', {
  if(err)
  {
    console.log(err)
  },
 
  successRedirect : '/dashboard',
  failureRedirect : '/login',
  failureFlash: 'Invalid email or password. Try Again!!!'
}));
router.post('/signup', (req, res)=> {
  let {name, email, password} = req.body;

  let userData = {
      name : name,
      email :email
  };

  User.register(userData, password, (err, user)=> {
      if(err) {
          // req.flash('error_msg', 'ERROR: '+err);
          console.log(err);
          // res.redirect('/signup');
      }

      res.redirect('/login')
      // res.send("Data submitted successfully")
      // passport.authenticate('local') (req, res, ()=> {
      //     req.flash('success_msg', 'Account created successfully');
      //     res.redirect('/login');
      // });
  });
})
// Route to handle user sign-up
// router.post('/signup', async (req, res, next) => {
//   const { name, collegeId, password } = req.body;
//   try {
//     // Check if the user already exists
//     const existingUser = await UserLogin.findOne({ collegeId });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }
//     // Create a new user
//     const UserSignup = new UserSignup({ name, collegeId, password });
//     await UserSignup.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Route to handle user login
// router.post('/login', async (req, res, next) => {
//     const { collegeId, password } = req.body;
//     try {
//       // Find the user by collegeId
//       const user = await UserSignup.findOne({ collegeId });
//       if (!user) {
//         return res.status(401).json({ message: 'Invalid college id or password' });
//       }
//       // Validate the user's password
//       if (user.password !== password) {
//         return res.status(401).json({ message: 'Invalid college ID or password' });
//       }
//       res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  

// // Route for getting a user's profile
// router.get('/:collegeId', async (req, res) => {
//   const { collegeId } = req.params;
//   try {
//     const user = await User.findById(collegeId);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     res.send(user);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Route for updating a user's profile
// router.patch('/:collegeId', async (req, res) => {
//   const { collegeId } = req.params;
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['email', 'password'];
//   const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' });
//   }
//   try {
//     const user = await User.findById(collegeId);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     updates.forEach((update) => user[update] = req.body[update]);
//     await user.save();
//     res.send(user);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

// // Route for deleting a user's profile
// router.delete('/:collegeId', async (req, res) => {
//   const { collegeId } = req.params;
//   try {
//     const user = await User.findByIdAndDelete(collegeId);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     res.send(user);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

module.exports = router;