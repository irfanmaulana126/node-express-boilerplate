const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { regionService } = require('../services');

const createProvince = catchAsync(async (req, res) => {
  const province = await regionService.createProvince(req.body);
  res.status(httpStatus.CREATED).send(province);
});

const getProvinces = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['kd_province', 'name_provice']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await regionService.queryProvinces(filter, options);
  res.send(result);
});

const getProvince = catchAsync(async (req, res) => {
  const province = await regionService.getProvinceById(req.params.provinceId);
  if (!province) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Province not found');
  }
  res.send(province);
});

const updateProvince = catchAsync(async (req, res) => {
  const province = await regionService.updateProvinceById(req.params.provinceId, req.body);
  res.send(province);
});

const deleteProvince = catchAsync(async (req, res) => {
  await regionService.deleteProvinceById(req.params.provinceId);
  res.status(httpStatus.NO_CONTENT).send();
});

const createRegency = catchAsync(async (req, res) => {
  const regency = await regionService.createRegency(req.body);
  res.status(httpStatus.CREATED).send(regency);
});

const getRegencies = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['kd_province', 'name_provice']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await regionService.queryRegencies(filter, options);
  res.send(result);
});

const getRegency = catchAsync(async (req, res) => {
  const regency = await regionService.getRegencyById(req.params.regencyId);
  if (!regency) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Regency not found');
  }
  res.send(regency);
});

const updateRegency = catchAsync(async (req, res) => {
  const regency = await regionService.updateRegencyById(req.params.regencyId, req.body);
  res.send(regency);
});

const deleteRegency = catchAsync(async (req, res) => {
  await regionService.deleteRegencyById(req.params.regencyId);
  res.status(httpStatus.NO_CONTENT).send();
});

const createDistrict = catchAsync(async (req, res) => {
  const districts = await regionService.createDistricts(req.body);
  res.status(httpStatus.CREATED).send(districts);
});

const getVillages = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id_districts', 'kd_districts', 'kd_village', 'name_village']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await regionService.queryVillage(filter, options);
  res.send(result);
});

const getVillage = catchAsync(async (req, res) => {
  const villages = await regionService.getVillageById(req.params.villagesId);
  if (!villages) {
    throw new ApiError(httpStatus.NOT_FOUND, 'villages not found');
  }
  res.send(villages);
});

const updateDistrict = catchAsync(async (req, res) => {
  const district = await regionService.updateDistrictsById(req.params.districtId, req.body);
  res.send(district);
});

const deleteDistrict = catchAsync(async (req, res) => {
  await regionService.deleteDistrictsById(req.params.regencyId);
  res.status(httpStatus.NO_CONTENT).send();
});

const createVillage = catchAsync(async (req, res) => {
  const villages = await regionService.createVillage(req.body);
  res.status(httpStatus.CREATED).send(villages);
});

const getDistricts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['id_regency', 'kd_regency', 'kd_district', 'name_district']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await regionService.queryDistricts(filter, options);
  res.send(result);
});

const getDistrict = catchAsync(async (req, res) => {
  const districts = await regionService.getDistrictsById(req.params.districtsId);
  if (!districts) {
    throw new ApiError(httpStatus.NOT_FOUND, 'districts not found');
  }
  res.send(districts);
});

const updateVillage = catchAsync(async (req, res) => {
  const village = await regionService.updateVillageById(req.params.villageId, req.body);
  res.send(village);
});

const deleteVillage = catchAsync(async (req, res) => {
  await regionService.deleteVillageById(req.params.villageId);
  res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
  createProvince,
  getProvinces,
  getProvince,
  updateProvince,
  deleteProvince,
  createRegency,
  getRegencies,
  getRegency,
  updateRegency,
  deleteRegency,
  createDistrict,
  getDistrict,
  getDistricts,
  updateDistrict,
  deleteDistrict,
  createVillage,
  getVillage,
  getVillages,
  updateVillage,
  deleteVillage,
};
