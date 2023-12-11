import { Router } from "express";

import apiv1 from "./apiv1";
import authRouter from "./auth";
import accountRouter from "./account";
import usersRouter from "./users";
import postsRouter from "./posts";
import profilesRouter from "./profiles";
import categoriesRouter from "./categories";

const router = Router();

router.get("/", apiv1);
router.use("/auth", authRouter);
router.use("/account", accountRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/categories", categoriesRouter);
router.use("/profiles", profilesRouter);

export default router;
