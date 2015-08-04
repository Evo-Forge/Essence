'use strict';

module.exports = function () {
  var errors = {
    email: 'A valid email should contain @ and must be in format user@email.tld',
    number: 'A valid field should contain number',
    text: 'A valid field should contain text characters',
    limit: 'A valid field should not exced the maximum characters'
  };

  return errors;
};
