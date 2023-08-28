import { Request, Response } from "express";
import User from "../models/user.model";
import argon2 from "argon2";

export const user = {
  async login(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = await User.findOne({ $or: [{ username }, { email }] });
      if (user) {
        const isValidPassword = await argon2.hash(user.password, password);
        if (isValidPassword) {
          return res
            .status(200)
            .json({ success: true, message: "Successfully logged in", user });
        }
      }
      return res.status(200).json({
        success: false,
        message: "invalid credentials",
      });
    } catch (e) {
      return res.status(400).json({ success: false, message: e.message });
    }
  },
  async register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const userExists = await User.findOne({ $or: [{ username }, { email }] });
      if (userExists)
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });

      const newUser = new User({
        username,
        email,
      });
      await newUser.hashPassword(password);
      return res.status(200).json({
        success: true,
        message: "successfully registered",
        user: newUser,
      });
    } catch (e) {
      return res.status(400).json({ success: false, message: e.message });
    }
  },
};
