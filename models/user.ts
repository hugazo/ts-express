import { hash as hashPass } from 'bcrypt';
import mongoose, { Schema, Document } from 'mongoose';

const isEmail = (email: string):boolean => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

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
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', async function hashPassword(this: IUser) {
  const { password } = this;
  const hashPasses = 10;
  const hash = await hashPass(password, hashPasses);
  this.password = hash;
});

export default mongoose.model<IUser>('User', UserSchema);
