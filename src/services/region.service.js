const httpStatus = require('http-status');
const { Region } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Country
 * @param {Object} RegionBody
 * @returns {Promise<Province>}
 */
const createProvince = async (RegionBody) => {
  return Region.Province.create(RegionBody);
};

/**
 * Query
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProvinces = async (filter, options) => {
  const province = await Region.Province.paginate(filter, options);
  return province;
};

/**
 * Get province by id
 * @param {ObjectId} id
 * @returns {Promise<province>}
 */
const getProvinceById = async (id) => {
  return Region.Province.findById(id);
};

/**
 * Update
 * @param {ObjectId} provinceId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateProvinceById = async (provinceId, updateBody) => {
  const province = await getProvinceById(provinceId);
  if (!province) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Province not found');
  }
  Object.assign(province, updateBody);
  await province.save();
  return province;
};

/**
 * Delete
 * @param {ObjectId} provinceId
 * @returns {Promise<Country>}
 */
const deleteProvinceById = async (provinceId) => {
  const province = await getProvinceById(provinceId);
  if (!province) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Country not found');
  }
  await province.remove();
  return province;
};

module.exports = {
  createProvince,
  queryProvinces,
  getProvinceById,
  updateProvinceById,
  deleteProvinceById,
};
