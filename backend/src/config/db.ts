import { connect } from "mongoose";

export const startDB = async () => {
  try {
    await connect(String(process.env.MONGO_URI));
    console.log("DB started perfectly fine");
  } catch (err) {
    process.exit(1);
  }
};
