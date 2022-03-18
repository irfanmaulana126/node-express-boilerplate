const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const provinceSchema = mongoose.Schema(
  {
    kd_province: {
      type: String,
      required: true,
      trim: true,
    },
    name_province: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
provinceSchema.plugin(toJSON);
provinceSchema.plugin(paginate);

const regencySchema = mongoose.Schema(
  {
    id_province: {
      type: String,
      required: true,
      trim: true,
    },
    kd_province: {
      type: String,
      required: true,
      trim: true,
    },
    kd_regency: {
      type: String,
      required: true,
      trim: true,
    },
    name_regency: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
regencySchema.plugin(toJSON);
regencySchema.plugin(paginate);

const districSchema = mongoose.Schema(
  {
    id_regency: {
      type: String,
      required: true,
      trim: true,
    },
    kd_regency: {
      type: String,
      required: true,
      trim: true,
    },
    kd_district: {
      type: String,
      required: true,
      trim: true,
    },
    name_district: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
districSchema.plugin(toJSON);
districSchema.plugin(paginate);

const villageSchema = mongoose.Schema(
  {
    id_districts: {
      type: String,
      required: true,
      trim: true,
    },
    kd_districts: {
      type: String,
      required: true,
      trim: true,
    },
    kd_village: {
      type: String,
      required: true,
      trim: true,
    },
    name_village: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
villageSchema.plugin(toJSON);
villageSchema.plugin(paginate);

/**
 * @typedef Province
 */
const Province = mongoose.model('Province', provinceSchema);

/**
 * @typedef Regency
 */
const Regency = mongoose.model('Regency', regencySchema);

/**
 * @typedef District
 */
const District = mongoose.model('District', districSchema);

/**
 * @typedef Village
 */
const Village = mongoose.model('Village', villageSchema);

module.exports = {
  Province,
  Regency,
  District,
  Village,
};
