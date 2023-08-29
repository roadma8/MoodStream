import { Router } from "express";
import { mood } from "../controllers/modd.controller";

const router = Router();

router.route("/moods").post(mood.save).get(mood.get);

export default router;
