//Comentario inicial
const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

const CarbonFlux = require('../../domain/CarbonFlux/CarbonFlux');

const CarbonFluxSchema = new Schema({
  constellation: { type: ObjectId, ref: 'Constellation', required: true },
  created_at: { type: Date, default: Date.now() },
  gross_contribution: { type: Number },
  last: { type: Boolean, default: false },
  allocated: { type: Boolean, default: false },
  productive_area_size_m2: { type: Number },
  project: { type: ObjectId, ref: 'Project', required: true },
  remainder: { type: Number },
  station: { type: ObjectId, ref: 'Station', required: true },
  station_data: { type: ObjectId, ref: 'StationData', required: true },
  total_co2: { type: Number },
  updated_at: { type: Date, default: Date.now() },
  processed: { type: Boolean, default: false},
  metadata: { type: Object, default: null }
});

CarbonFluxSchema.loadClass(CarbonFlux);

module.exports = mongoose.model('CarbonFlux', CarbonFluxSchema);
