//Comentario inicial

const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const NFT = require('../../domain/NFT/NFT');
const Date = require('../../domain/Date/Date');

const NFTSchema = new Schema({
  uuid: { type: String, required: true },
  asset_code: { type: String, default: null },
  blockchain_hash: { type: String, default: null },
  certificate: { type: String, default: null },
  ipfs_hash: { type: String, default: null },
  is_sbt: { type: Boolean, default: false },
  issuing_account_public: { type: String, default: null },
  issuing_account_secret: { type: String, default: null },
  offset_period: { type: String },
  project: { type: ObjectId, required: true, ref: 'projects' },
  used_by: { type: String },
  used: { type: Boolean, default: false },
  user: { type: ObjectId, ref: 'users', default: null },
  created_at: { type: Date, default: new Date().now() },
  updated_at: { type: Date, default: new Date().now() },
  bought_at: { type: Date, default: null },
  used_at: { type: Date, default: null },
  s3_url: { type: String, required: false },
  carbonflux: { type: Array, default: [] },
});

NFTSchema.index({ project: 1, uuid: 1 }, { unique: true });

NFTSchema.loadClass(NFT);

module.exports = mongoose.model('NFT', NFTSchema);
