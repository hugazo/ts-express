import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  email: string,
}

const UserSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<IUser>('User', UserSchema);
