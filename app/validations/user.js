import {
  validatePresence,
  validateLength,
  validateFormat,
  validateConfirmation
} from 'ember-changeset-validations/validators';

export default {
  firstName: [
    validatePresence(true),
    validateLength({ min: 2 })
  ],
  lastName: [
    validatePresence(true),
    validateLength({ min: 2 })
  ],
  email: [
    validateFormat({ type: 'email' })
  ],
  password: [
    validatePresence(true),
    validateLength({ min: 8 })
  ],
  // confirmpassword: [
  //   validatePresence(true),
  //   validateConfirmation({ on: 'password' })
  // ],
  address: validatePresence(true),
  age: validatePresence(true)
}