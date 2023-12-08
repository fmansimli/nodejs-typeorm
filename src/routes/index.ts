import { Router } from "express";

import authRouter from "./auth";
import accountRouter from "./account";
import usersRouter from "./users";
import apiv1 from "./apiv1";

const router = Router();

router.get("/", apiv1);
router.use("/auth", authRouter);
router.use("/account", accountRouter);
router.use("/users", usersRouter);

export default router;
