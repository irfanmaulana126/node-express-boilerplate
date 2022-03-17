const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCountry = {
  body: Joi.object().keys({
    name_country: Joi.string().required(),
    code: Joi.string().required(),
  }),
};

const getCountries = {
  query: Joi.object().keys({
    name_country: Joi.string(),
    code: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCountry = {
  params: Joi.object().keys({
    countryId: Joi.string().custom(objectId),
  }),
};

const updateCountry = {
  params: Joi.object().keys({
    countryId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name_country: Joi.string().required(),
      code: Joi.string(),
    })
    .min(1),
};

const deleteCountry = {
  params: Joi.object().keys({
    countryId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCountry,
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry,
};
