import { model, Schema } from 'mongoose';

// All validation should be handled in the controller
// keep models as minimal and simple as possible

const CarSchema: Schema = new Schema({
  canConsign: String,
  customerName: String,
  phoneNumber: String,
  carColour: String,
  carYear: String,
  carMileage: String,
  carMake: String,
  canDirectSale: String,
  email: String,
  carModel: String,
  carPreviousOwners: String,
});

export const Post = model('Post', CarSchema);
