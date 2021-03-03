import { hash as hashPass } from 'bcrypt';
import mongoose, { Schema, Document } from 'mongoose';

import isEmail from '@validations/email';

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  email: string,
  password: string
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
    index: {
      unique: true,
    },
    validate: {
      validator: isEmail,
    },
  },
  userName: {
    type: String,
    required: true,
    index: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

UserSchema.method('login', () => true);

// TODO: Login user model.
// TODO: Move the savePassword logic
// TODO: Make the user methods like they should
// TODO: Study better the instance vs class methods.
// TODO: Generate Sesions On Login
//   (Maybe UserSchema.method vs the UserSchema.methods)

UserSchema.pre('save', async function hashPassword(this: IUser) {
  const { password } = this;
  const hashPasses = 10;
  const hash = await hashPass(password, hashPasses);
  this.password = hash;
});

UserSchema.post('findOne', (doc) => {
  // Handles no user
  if (!doc) throw new Error('user/not-found');
});

export default mongoose.model<IUser>('User', UserSchema);
