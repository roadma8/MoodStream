import { Schema, model, Document } from "mongoose";
import argon2 from "argon2";

interface IUser extends Document {
  email: string;
  password: string;
  avatar: string;
  hashPassword: (password: string) => Promise<void>;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

UserSchema.methods.hashPassword = async function (password: string) {
  this.password = await argon2.hash(password);
};

export default model<IUser>("User", UserSchema);
