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

module.exports = {
  createProvince,
  getProvinces,
  getProvince,
  updateProvince,
  deleteProvince,
};
