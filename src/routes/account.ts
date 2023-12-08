import { Router } from "express";
import * as account from "../controllers/account.controller";

const router = Router();

router.get("/profile", account.getProfile);

router.put("/profile", account.updateProfile);

router.delete("/profile", account.deleteProfile);
router.delete("/logout", account.logout);

export default router;
