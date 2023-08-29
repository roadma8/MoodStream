import User from "../models/user.model";
import argon2 from "argon2";

export class UserAuth {
  constructor() {}

  public static async login({ username, email, password }: any) {
    try {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (user) {
        const isValidPassword = await argon2.hash(user.password, password);
        if (isValidPassword) {
          return user;
        }
      }
      throw new Error("Invalid credentials");
    } catch (e) {
      throw new Error(e.message);
    }
  }
  public static async register({ username, email, password }: any) {
    try {
      const userExists = await User.findOne({ $or: [{ username }, { email }] });
      if (userExists) throw new Error("User already exists");
      const newUser = new User({
        username,
        email,
      });
      await newUser.hashPassword(password);
      await newUser.save();
      return newUser;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
