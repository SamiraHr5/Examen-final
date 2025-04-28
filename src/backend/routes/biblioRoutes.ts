import { Router } from "express";
import { loginHandler } from "../handlers/biblioteca";

const router = Router();

router.get("/login", loginHandler);

export default router;
