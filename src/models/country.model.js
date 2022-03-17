const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const countrieSchema = mongoose.Schema(
  {
    name_country: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
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
countrieSchema.plugin(toJSON);
countrieSchema.plugin(paginate);

/**
 * Check if code is taken
 * @param {string} code - The countrie's code
 * @param {ObjectId} [excludeCountrieId] - The id of the countries to be excluded
 * @returns {Promise<boolean>}
 */
countrieSchema.statics.isCodeTaken = async function (code, excludeCountrieId) {
  const country = await this.findOne({ code, _id: { $ne: excludeCountrieId } });
  return !!country;
};

/**
 * @typedef Countrie
 */
const Countrie = mongoose.model('Countrie', countrieSchema);

module.exports = Countrie;
