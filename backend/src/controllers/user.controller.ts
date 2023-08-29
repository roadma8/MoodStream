import { Request, Response } from "express";
import { UserAuth } from "../services/user.service";

export const user = {
  async login(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = await UserAuth.login({ username, email, password });
      return res
        .status(200)
        .json({ message: "Successfully logged in", user: user.jsonResponse() });
    } catch (e) {
      return res.status(400).json({ success: false, message: e.message });
    }
  },
  async register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = await UserAuth.register({ username, email, password });
      return res.status(200).json({
        message: "Successfully registered user",
        success: true,
        user: user.jsonResponse(),
      });
    } catch (e) {
      return res.status(400).json({ success: false, message: e.message });
    }
  },
};
