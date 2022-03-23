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

/**
 * Create a Country
 * @param {Object} RegionBody
 * @returns {Promise<Province>}
 */
const createRegency = async (RegionBody) => {
  return Region.Regency.create(RegionBody);
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
const queryRegencies = async (filter, options) => {
  const regency = await Region.Regency.paginate(filter, options);
  return regency;
};

/**
 * Get Regency by id
 * @param {ObjectId} id
 * @returns {Promise<Regency>}
 */
const getRegencyById = async (id) => {
  return Region.Regency.findById(id);
};

/**
 * Update
 * @param {ObjectId} RegencyId
 * @param {Object} updateBody
 * @returns {Promise<Regency>}
 */
const updateRegencyById = async (RegencyId, updateBody) => {
  const Regency = await getRegencyById(RegencyId);
  if (!Regency) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Regency not found');
  }
  Object.assign(Regency, updateBody);
  await Regency.save();
  return Regency;
};

/**
 * Delete
 * @param {ObjectId} RegencyId
 * @returns {Promise<Country>}
 */
const deleteRegencyById = async (RegencyId) => {
  const Regency = await getRegencyById(RegencyId);
  if (!Regency) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Country not found');
  }
  await Regency.remove();
  return Regency;
};

/**
 * Create a Country
 * @param {Object} DistrictBody
 * @returns {Promise<Province>}
 */
const createDistricts = async (DistrictBody) => {
  return Region.District.create(DistrictBody);
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
const queryDistricts = async (filter, options) => {
  const districts = await Region.District.paginate(filter, options);
  return districts;
};

/**
 * Get Districts by id
 * @param {ObjectId} id
 * @returns {Promise<Districts>}
 */
const getDistrictsById = async (id) => {
  return Region.District.findById(id);
};

/**
 * Update
 * @param {ObjectId} RegencyId
 * @param {Object} updateBody
 * @returns {Promise<District>}
 */
const updateDistrictsById = async (DistrictId, updateBody) => {
  const District = await getDistrictsById(DistrictId);
  if (!District) {
    throw new ApiError(httpStatus.NOT_FOUND, 'District not found');
  }
  Object.assign(District, updateBody);
  await District.save();
  return District;
};

/**
 * Delete
 * @param {ObjectId} DistrictsId
 * @returns {Promise<District>}
 */
const deleteDistrictsById = async (DistrictsId) => {
  const Districts = await getDistrictsById(DistrictsId);
  if (!Districts) {
    throw new ApiError(httpStatus.NOT_FOUND, 'District not found');
  }
  await Districts.remove();
  return Districts;
};

/**
 * Create a Country
 * @param {Object} DistrictBody
 * @returns {Promise<Village>}
 */
const createVillage = async (DistrictBody) => {
  return Region.Village.create(DistrictBody);
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
const queryVillage = async (filter, options) => {
  const Village = await Region.Village.paginate(filter, options);
  return Village;
};

/**
 * Get Village by id
 * @param {ObjectId} id
 * @returns {Promise<Village>}
 */
const getVillageById = async (id) => {
  return Region.Village.findById(id);
};

/**
 * Update
 * @param {ObjectId} RegencyId
 * @param {Object} updateBody
 * @returns {Promise<Village>}
 */
const updateVillageById = async (VillageId, updateBody) => {
  const Village = await getVillageById(VillageId);
  if (!Village) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Village not found');
  }
  Object.assign(Village, updateBody);
  await Village.save();
  return Village;
};

/**
 * Delete
 * @param {ObjectId} DistrictsId
 * @returns {Promise<Village}
 */
const deleteVillageById = async (VillageId) => {
  const Village = await getVillageById(VillageId);
  if (!Village) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Villagenot found');
  }
  await Village.remove();
  return Village;
};

module.exports = {
  createProvince,
  queryProvinces,
  getProvinceById,
  updateProvinceById,
  deleteProvinceById,
  createRegency,
  queryRegencies,
  getRegencyById,
  updateRegencyById,
  deleteRegencyById,
  createDistricts,
  queryDistricts,
  getDistrictsById,
  updateDistrictsById,
  deleteDistrictsById,
  createVillage,
  queryVillage,
  getVillageById,
  updateVillageById,
  deleteVillageById,
};
