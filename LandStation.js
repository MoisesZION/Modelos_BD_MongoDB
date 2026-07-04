//Comentario inicial

const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const LandStation = require('../../domain/LandStation/LandStation');

const { Schema } = mongoose;

const NumericUUID = require('../../domain/UUID/NumericUUID');

const landStationSchema = new Schema({
  carbon_credit_group: { type: String, default: null },
  uuid: { type: String, unique: true, default: NumericUUID.generate },
  created_at: { type: Date, default: Date.now },
  land: { type: ObjectId },
  productive_area_size_ha: { type: String, default: null },
  productive_area_size_m2: { type: String, default: null },
  station: { type: ObjectId },
  updated_at: { type: Date, default: null },
});

landStationSchema.loadClass(LandStation);

module.exports = mongoose.model('LandStations', landStationSchema);
