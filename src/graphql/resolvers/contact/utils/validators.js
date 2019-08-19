// eslint-disable-next-line import/prefer-default-export
export const validateContactSignup = (name, phoneNumber, password, confirmPassword) => {
  const errors = {};

  // name validations
  if (name.trim() === '') {
    errors.name = 'Name is required';
  } else if (name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters long';
  } else if (name.trim().length > 10) {
    errors.name = 'Name should be less than 10 character';
  } else {
    // Letters, numbers and underscore
    const regEx = /^[\w-_.]*$/;
    if (!name.trim().match(regEx)) {
      errors.name = 'Invalid name';
    }
  }

  // Phone number validations
  if (phoneNumber.trim() === '') {
    errors.phoneNumber = 'Phonenumber is required';
  } else {
    const regEx = /^07/;
    const numberRegEx = /^[0-9]*$/;
    if (!phoneNumber.match(numberRegEx)) {
      errors.phoneNumber = 'Only numbers allowed';
    } else if (!phoneNumber.match(regEx)) {
      errors.phoneNumber = 'Phone number must start with 07';
    }
  }
  if (phoneNumber.trim().length !== 10) {
    errors.phoneNumber = 'Phone number should have 10 digits';
  }

  // Password validations
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }

  // Confirm password
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const validateLoginInput = (phoneNumber, password) => {
  const errors = {};

  // Phone number validations
  if (phoneNumber.trim() === '') {
    errors.phoneNumber = 'Phonenumber is required';
  } else {
    const regEx = /^07/;
    const numberRegEx = /^[0-9]*$/;
    if (!phoneNumber.match(numberRegEx)) {
      errors.phoneNumber = 'Only numbers allowed';
    } else if (!phoneNumber.match(regEx)) {
      errors.phoneNumber = 'Phone number must start with 07';
    }
  }
  if (phoneNumber.trim().length !== 10) {
    errors.phoneNumber = 'Phone number should have 10 digits';
  }

  // Password validations
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
