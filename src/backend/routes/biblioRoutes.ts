import { Router } from "express";
import { loginHandler } from "../handlers/biblioteca";

const router = Router();

router.post("/login", loginHandler);

export default router;
