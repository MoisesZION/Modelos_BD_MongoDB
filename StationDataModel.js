//Comentario inicial

const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;
const StationData = require('../../domain/StationData/StationData');

const StationDataSchema = new Schema(
  {
    uuid: { type: String, unique: true, },
    co2_flux: { type: String, default: null },
    co2_flux_g_m2: { type: String, default: null },
    co2_flux_t_ha: { type: String, default: null },
    created_at: { type: Date, default: Date.now },
    datetime: { type: Date, default: null },
    enabled: { type: Boolean, default: false },
    filename: { type: String, default: null },
    last: { type: Boolean, default: false },
    qc_co2_flux: { type: String, default: null },
    raw_data_url: { type: String, default: null },
    report_url: { type: String, default: null },
    correction_report: { type: String, default: null },
    station: { type: ObjectId, ref: 'Station', default: null },
    updated_at: { type: Date, default: Date.now },
    // Datos de carga IPFS:
    uploaded: { type: Boolean, default: false },
    uid: { type: String, default: null },
    ipfs_raw_data_url: { type: String, default: null },
    ipfs_report_url: { type: String, default: null },
    ipfs_correction_report_url: { type: String, default: null },
    blockchain_raw_data_url: { type: String, default: null },
    blockchain_report_url: { type: String, default: null },
    blockchain_correction_report_url: { type: String, default: null },
  },
  { collection: 'stationsdata' }
);

StationDataSchema.loadClass(StationData);

module.exports = mongoose.model('StationData', StationDataSchema);
