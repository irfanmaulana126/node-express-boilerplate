const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProvince = {
  body: Joi.object().keys({
    kd_province: Joi.string().required(),
    name_province: Joi.string().required(),
  }),
};
const getProvince = {
  query: Joi.object().keys({
    name_province: Joi.string(),
    kd_province: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
const updateProvince = {
  params: Joi.object().keys({
    provinceId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name_province: Joi.string(),
      kd_province: Joi.string(),
    })
    .min(1),
};
const deleteProvince = {
  params: Joi.object().keys({
    provinceId: Joi.string().custom(objectId),
  }),
};

const createRegency = {
  body: Joi.object().keys({
    id_province: Joi.string().required(),
    kd_province: Joi.string().required(),
    kd_regency: Joi.string().required(),
    name_regency: Joi.string().required(),
  }),
};
const getRegency = {
  query: Joi.object().keys({
    id_province: Joi.string(),
    kd_province: Joi.string(),
    kd_regency: Joi.string(),
    name_regency: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
const updateRegency = {
  params: Joi.object().keys({
    regencyId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      id_province: Joi.string(),
      kd_province: Joi.string(),
      kd_regency: Joi.string(),
      name_regency: Joi.string(),
    })
    .min(1),
};
const deleteRegency = {
  params: Joi.object().keys({
    regencyId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProvince,
  getProvince,
  updateProvince,
  deleteProvince,
  createRegency,
  getRegency,
  updateRegency,
  deleteRegency,
};
