const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string()
    .length(24)
    .required()
});

module.exports = schema;
