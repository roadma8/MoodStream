import { Request, Response } from "express";
import Mood from "../models/mood.model";

export const mood = {
  async save(req: Request, res: Response) {
    const { caption } = req.body;
    try {
      const newMood = new Mood({
        caption,
      });

      await newMood.save();

      return res.status(200).json({
        message: "successfully saved mood",
        success: true,
        mood: newMood,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, error: error.message });
    }
  },

  async get(_req: Request, res: Response) {
    try {
      const moods = await Mood.find({});
      return res.status(200).json({
        message: "successfully fetched moods",
        success: true,
        moods,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, error: error.message });
    }
  },
};
