const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const Constellation = require('../../domain/Constellation/Constellation');
const NumericUUID = require('../../domain/UUID/NumericUUID');

const ConstellationSchema = new Schema({
  uuid: { type: String, unique: true, default: NumericUUID.generate },
  project: { type: ObjectId, ref: 'Projects', required: true },
  name: { type: String },
  boundary_polygon: { type: String },
  cover_area_size_m2: { type: String },
  cover_area_size_ha: { type: String },
  enabled: { type: Boolean },
  created_at: { type: Date },
  updated_at: { type: Date },
});

ConstellationSchema.loadClass(Constellation);

module.exports = mongoose.model('Constellation', ConstellationSchema);
