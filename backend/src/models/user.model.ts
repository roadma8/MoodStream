import { Schema, model } from "mongoose";
import argon2 from "argon2";
import { sign } from "jsonwebtoken";
import { IUser } from "../types/interfaces";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

UserSchema.methods.hashPassword = async function (password: string) {
  this.password = await argon2.hash(password);
};

UserSchema.methods.genAccessToken = function () {
  return sign(
    {
      id: this._id,
    },
    "SECRET",
    { expiresIn: "1h" }
  );
};

UserSchema.methods.jsonResponse = function () {
  return {
    email: this.email,
    username: this.username,
    token: this.genAccessToken(),
  };
};

export default model<IUser>("User", UserSchema);
