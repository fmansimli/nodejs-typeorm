import { Router } from "express";

import apiv1 from "./apiv1";
import authRouter from "./auth";
import accountRouter from "./account";
import usersRouter from "./users";
import postsRouter from "./posts";

const router = Router();

router.get("/", apiv1);
router.use("/auth", authRouter);
router.use("/account", accountRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);

export default router;
