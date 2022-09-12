import mongoose from 'mongoose';

const TreatmentSchema = new mongoose.Schema({
  pacientName: {
    type: String,
    require: true,
  },
  treatmentName: {
    type: String,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
  numberParcel: {
    type: Number,
    require: true,
  },
  serviceDate: {
    type: String,
    require: true,
  },
  serviceValue: {
    type: String,
    require: true,
  },
  finalDate: {
    type: String,
    require: true,
  },
  parcelValue: {
    type: String,
    require: true,
  },
});

export default mongoose.model('treatments', TreatmentSchema);
