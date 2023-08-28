import { Router } from "express";
import { user } from "../controllers/user.controller";

const router = Router();

router.post("/register", user.register);
router.post("/register", user.login);

export default router;
