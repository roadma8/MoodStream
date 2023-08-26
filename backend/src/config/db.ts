import { connect } from "mongoose";

export const startDB = async () => {
  try {
    // will be replace by atlas url
    await connect(String(process.env.MONGO_URI));
    console.log("DB started perfectly fine");
  } catch (err) {
    process.exit(1);
  }
};
