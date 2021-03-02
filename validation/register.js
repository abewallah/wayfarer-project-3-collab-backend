const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegistration(data) {
  let err = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (Validator.isEmpty(data.username)) {
    err.username = 'Username required';
  }

  if (Validator.isEmpty(data.email)) {
    err.email = 'Email is required';
  } else if (!Validator.isEmail(data.email)) {
    err.email = 'Invalid email';
  }

  if (Validator.isEmpty(data.password)) {
    err.password = 'Password required';
  }

  if (Validator.isEmpty(data.password2)) {
    err.password2 = 'Confirm password required';
  }

  if (!Validator.isLength(data.password, {min: 8, max: 30 })) {
    err.password = 'Password must be at least 8 characters';
  }

  if (!Validator.equals(data.password, data.password2)) {
    err.password2 = "Password did not match";
  }

  return {
    err,
    isValid: isEmpty(err)
  };
};