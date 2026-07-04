//Comentario inicial

const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const Station = require('../../domain/Station/Station');
const NumericUUID = require('../../domain/UUID/NumericUUID');

const StationSchema = new Schema({
  uuid: { type: String, unique: true, default: () => NumericUUID.generate() },
  type: { type: String },
  name: { type: String },
  flux_station_id: { type: String },
  cover_area_size_m2: { type: String },
  cover_area_size_ha: { type: String },
  location_latitude: { type: String },
  location_longitude: { type: String },
  cover_area_polygon: { type: String },
  enabled: { type: Boolean },
  created_at: { type: Date },
  updated_at: { type: Date },
  constellation: { type: ObjectId, ref: 'Constellations', required: true },
});

StationSchema.loadClass(Station);

module.exports = mongoose.model('Station', StationSchema);
