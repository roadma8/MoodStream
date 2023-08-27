import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  avatar: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

export default model<IUser>("User", UserSchema);
