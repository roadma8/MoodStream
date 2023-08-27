import { Schema, model } from "mongoose";

interface IMood extends Document {
  image: string;
  caption: string;
  expire_at: Date;
}
const moodSchema = new Schema({
  image: { data: Buffer, contentType: String },
  caption: String,
  expire_at: { type: Date, default: Date.now, expires: 86400 },
});

export default model<IMood>("Mood", moodSchema);
