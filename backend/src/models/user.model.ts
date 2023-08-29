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

UserSchema.methods.jsonResponse = function () {
  return sign(
    {
      email: this.email,
      username: this.username,
    },
    "SECRET",
    { expiresIn: "5h" }
  );
};

export default model<IUser>("User", UserSchema);
