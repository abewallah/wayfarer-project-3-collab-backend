const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validateRegistration = require('../validation/register');
const validateLogin = require('../validation/login');
const User = require('../models/User');

// Resgister route
router.post("/register", (req, res) => {

const { error, isValid } = validateRegistration(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


// Login route
router.post('/login', (req, res) => {
  
const { error, isValid } = validateLogin(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }
const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found'});
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});

module.exports = router;