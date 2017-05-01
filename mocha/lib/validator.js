'use strict';

var _ = require('underscore'),
  custom = {},
  validator = _.clone(_);

// custom validations
custom.isEmail = function(obj) {
  var result = false;
  if (this.isString(obj)) {
    result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(obj);
  }
  return result;
};

// extend underscore
validator = _.extend(validator, custom);

module.exports = validator;

