const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLogin(data) {
  let err = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    err.email = 'Please enter email';
  } else if (!Validator.isEmail(data.email)) {
    err.email = 'Email invalid';
  }

  if (Validator.isEmpty(data.password)) {
    err.password = 'Please enter password';
  }

  return {
    err,
    isValid: isEmpty(err)
  };
};