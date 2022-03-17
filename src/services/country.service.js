const httpStatus = require('http-status');
const { Country } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Country
 * @param {Object} countryBody
 * @returns {Promise<Country>}
 */
const createCountry = async (countryBody) => {
  if (await Country.isCodeTaken(countryBody.code)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Code already taken');
  }
  return Country.create(countryBody);
};

/**
 * Query for countries
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCountry = async (filter, options) => {
  const countries = await Country.paginate(filter, options);
  return countries;
};

/**
 * Get country by id
 * @param {ObjectId} id
 * @returns {Promise<Country>}
 */
const getCountryById = async (id) => {
  return Country.findById(id);
};

/**
 * Get Country by code
 * @param {string} code
 * @returns {Promise<Country>}
 */
const getCountryByCode = async (code) => {
  return Country.findOne({ code });
};

/**
 * Update Country by id
 * @param {ObjectId} countryId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateCountryById = async (countryId, updateBody) => {
  const country = await getCountryById(countryId);
  if (!country) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Country not found');
  }
  if (updateBody.code && (await Country.isCodeTaken(updateBody.code, countryId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Code already taken');
  }
  Object.assign(country, updateBody);
  await country.save();
  return country;
};

/**
 * Delete country by id
 * @param {ObjectId} countryId
 * @returns {Promise<Country>}
 */
const deleteCountryById = async (countryId) => {
  const country = await getCountryById(countryId);
  if (!country) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Country not found');
  }
  await country.remove();
  return country;
};

module.exports = {
  createCountry,
  queryCountry,
  getCountryById,
  getCountryByCode,
  updateCountryById,
  deleteCountryById,
};
