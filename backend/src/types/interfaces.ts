import { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  avatar: string;
  hashPassword: (password: string) => Promise<void>;
  jsonResponse: () => string;
}
