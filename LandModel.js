const mongoose = require('mongoose');
const Land = require('../../domain/Land/Land');
const NumericUUID = require('../../domain/UUID/NumericUUID');

const { Schema } = mongoose;

const landSchema = new Schema({
  activation_date: { type: Date, default: null },
  boundary_polygon: { type: String, default: null },
  uuid: { type: String, unique: true, default: () => NumericUUID.generate() },
  created_at: { type: Date, default: Date.now },
  drc_area_size_ha: { type: String, default: null },
  drc_area_size_m2: { type: String, default: null },
  enabled: { type: Boolean, default: false },
  metadata: { type: Object, default: null },
  name: { type: String, default: null },
  productive_area_size_ha: { type: String, default: null },
  productive_area_size_m2_total: { type: Object, default: null },
  productive_area_size_percent: { type: String, default: null },
  total_area_size_ha: { type: String, default: null },
  total_area_size_m2: { type: String, default: null },
  updated_at: { type: Date, default: null },
});

landSchema.loadClass(Land);

module.exports = mongoose.model('Lands', landSchema);
