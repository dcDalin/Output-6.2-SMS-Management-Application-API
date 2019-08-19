// eslint-disable-next-line import/prefer-default-export
export const validateSMS = (phoneNumber, message) => {
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

  // Message validations
  if (message.trim() === '') {
    errors.message = 'message is required';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
